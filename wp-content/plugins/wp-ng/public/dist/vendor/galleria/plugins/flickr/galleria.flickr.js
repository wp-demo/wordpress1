(function($) {
    Galleria.requires(1.25, "The Flickr Plugin requires Galleria version 1.2.5 or later.");
    var PATH = Galleria.utils.getScriptPath();
    Galleria.Flickr = function(api_key) {
        this.api_key = api_key || "2a2ce06c15780ebeb0b706650fc890b2";
        this.options = {
            max: 30,
            imageSize: "medium",
            thumbSize: "thumb",
            sort: "interestingness-desc",
            description: false,
            complete: function() {},
            backlink: false
        };
    };
    Galleria.Flickr.prototype = {
        constructor: Galleria.Flickr,
        search: function(phrase, callback) {
            return this._find({
                text: phrase
            }, callback);
        },
        tags: function(tag, callback) {
            return this._find({
                tags: tag
            }, callback);
        },
        user: function(username, callback) {
            return this._call({
                method: "flickr.urls.lookupUser",
                url: "flickr.com/photos/" + username
            }, function(data) {
                this._find({
                    user_id: data.user.id,
                    method: "flickr.people.getPublicPhotos"
                }, callback);
            });
        },
        set: function(photoset_id, callback) {
            return this._find({
                photoset_id: photoset_id,
                method: "flickr.photosets.getPhotos"
            }, callback);
        },
        gallery: function(gallery_id, callback) {
            return this._find({
                gallery_id: gallery_id,
                method: "flickr.galleries.getPhotos"
            }, callback);
        },
        groupsearch: function(group, callback) {
            return this._call({
                text: group,
                method: "flickr.groups.search"
            }, function(data) {
                this.group(data.groups.group[0].nsid, callback);
            });
        },
        group: function(group_id, callback) {
            return this._find({
                group_id: group_id,
                method: "flickr.groups.pools.getPhotos"
            }, callback);
        },
        setOptions: function(options) {
            $.extend(this.options, options);
            return this;
        },
        _call: function(params, callback) {
            var url = "https://api.flickr.com/services/rest/?";
            var scope = this;
            params = $.extend({
                format: "json",
                jsoncallback: "?",
                api_key: this.api_key
            }, params);
            $.each(params, function(key, value) {
                url += "&" + key + "=" + value;
            });
            $.getJSON(url, function(data) {
                if (data.stat === "ok") {
                    callback.call(scope, data);
                } else {
                    Galleria.raise(data.code.toString() + " " + data.stat + ": " + data.message, true);
                }
            });
            return scope;
        },
        _getBig: function(photo) {
            if (photo.url_l) {
                return photo.url_l;
            } else if (parseInt(photo.width_o, 10) > 1280) {
                return "https://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_b.jpg";
            }
            return photo.url_o || photo.url_z || photo.url_m;
        },
        _getSize: function(photo, size) {
            var img;
            switch (size) {
              case "thumb":
                img = photo.url_t;
                break;

              case "small":
                img = photo.url_s;
                break;

              case "big":
                img = this._getBig(photo);
                break;

              case "original":
                img = photo.url_o ? photo.url_o : this._getBig(photo);
                break;

              default:
                img = photo.url_z || photo.url_m;
                break;
            }
            return img;
        },
        _find: function(params, callback) {
            params = $.extend({
                method: "flickr.photos.search",
                extras: "url_t,url_m,url_o,url_s,url_l,url_z,description",
                sort: this.options.sort,
                per_page: Math.min(this.options.max, 500)
            }, params);
            return this._call(params, function(data) {
                var gallery = [], photos = data.photos ? data.photos.photo : data.photoset.photo, len = photos.length, photo, i;
                for (i = 0; i < len; i++) {
                    photo = photos[i];
                    gallery.push({
                        thumb: this._getSize(photo, this.options.thumbSize),
                        image: this._getSize(photo, this.options.imageSize),
                        big: this._getBig(photo),
                        title: photos[i].title,
                        description: this.options.description && photos[i].description ? photos[i].description._content : "",
                        link: this.options.backlink ? "https://flickr.com/photos/" + photo.owner + "/" + photo.id : ""
                    });
                }
                callback.call(this, gallery);
            });
        }
    };
    var load = Galleria.prototype.load;
    Galleria.prototype.load = function() {
        if (arguments.length || typeof this._options.flickr !== "string") {
            load.apply(this, Galleria.utils.array(arguments));
            return;
        }
        var self = this, args = Galleria.utils.array(arguments), flickr = this._options.flickr.split(":"), f, opts = $.extend({}, self._options.flickrOptions), loader = typeof opts.loader !== "undefined" ? opts.loader : $("<div>").css({
            width: 48,
            height: 48,
            opacity: .7,
            background: "#000 url(" + PATH + "loader.gif) no-repeat 50% 50%"
        });
        if (flickr.length) {
            if (typeof Galleria.Flickr.prototype[flickr[0]] !== "function") {
                Galleria.raise(flickr[0] + " method not found in Flickr plugin");
                return load.apply(this, args);
            }
            if (!flickr[1]) {
                Galleria.raise("No flickr argument found");
                return load.apply(this, args);
            }
            window.setTimeout(function() {
                self.$("target").append(loader);
            }, 100);
            f = new Galleria.Flickr();
            if (typeof self._options.flickrOptions === "object") {
                f.setOptions(self._options.flickrOptions);
            }
            f[flickr[0]](flickr[1], function(data) {
                self._data = data;
                loader.remove();
                self.trigger(Galleria.DATA);
                f.options.complete.call(f, data);
            });
        } else {
            load.apply(this, args);
        }
    };
})(jQuery);
//# sourceMappingURL=galleria.flickr.js.map

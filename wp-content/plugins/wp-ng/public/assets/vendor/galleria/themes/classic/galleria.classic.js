(function($) {
    Galleria.addTheme({
        name: "classic",
        version: 1.5,
        author: "Galleria",
        css: "galleria.classic.css",
        defaults: {
            transition: "slide",
            thumbCrop: "height",
            _toggleInfo: true
        },
        init: function(options) {
            Galleria.requires(1.4, "This version of Classic theme requires Galleria 1.4 or later");
            this.addElement("info-link", "info-close");
            this.append({
                info: [ "info-link", "info-close" ]
            });
            var info = this.$("info-link,info-close,info-text"), touch = Galleria.TOUCH;
            this.$("loader,counter").show().css("opacity", .4);
            if (!touch) {
                this.addIdleState(this.get("image-nav-left"), {
                    left: -50
                });
                this.addIdleState(this.get("image-nav-right"), {
                    right: -50
                });
                this.addIdleState(this.get("counter"), {
                    opacity: 0
                });
            }
            if (options._toggleInfo === true) {
                info.bind("click:fast", function() {
                    info.toggle();
                });
            } else {
                info.show();
                this.$("info-link, info-close").hide();
            }
            this.bind("thumbnail", function(e) {
                if (!touch) {
                    $(e.thumbTarget).css("opacity", .6).parent().hover(function() {
                        $(this).not(".active").children().stop().fadeTo(100, 1);
                    }, function() {
                        $(this).not(".active").children().stop().fadeTo(400, .6);
                    });
                    if (e.index === this.getIndex()) {
                        $(e.thumbTarget).css("opacity", 1);
                    }
                } else {
                    $(e.thumbTarget).css("opacity", this.getIndex() ? 1 : .6).bind("click:fast", function() {
                        $(this).css("opacity", 1).parent().siblings().children().css("opacity", .6);
                    });
                }
            });
            var activate = function(e) {
                $(e.thumbTarget).css("opacity", 1).parent().siblings().children().css("opacity", .6);
            };
            this.bind("loadstart", function(e) {
                if (!e.cached) {
                    this.$("loader").show().fadeTo(200, .4);
                }
                window.setTimeout(function() {
                    activate(e);
                }, touch ? 300 : 0);
                this.$("info").toggle(this.hasInfo());
            });
            this.bind("loadfinish", function(e) {
                this.$("loader").fadeOut(200);
            });
        }
    });
})(jQuery);
//# sourceMappingURL=galleria.classic.js.map

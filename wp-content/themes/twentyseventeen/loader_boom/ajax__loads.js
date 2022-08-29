(function(window, undefined) {
    var History = window.History,
        $ = window.jQuery,
        document = window.document;
    if (!History.enabled) return false;
    $(function() {
        var rootUrl = reload_helper['rootUrl'],
            contentSelector = '#' + reload_helper['container_id'],
            $content = $(contentSelector),
            contentNode = $content.get(0),
            $body = $(document.body),
            scrollOptions = {
                duration: 800,
                easing: 'swing'
            };
        if ($content.length === 0) $content = $body;
        $.expr[':'].internal = function(obj, index, meta, stack) {
            var $this = $(obj),
                url = $this.attr('href') || '',
                isInternalLink;
            isInternalLink = url.substring(0, rootUrl.length) === rootUrl || url.indexOf(':') === -1;
            return isInternalLink;
        };
        var documentHtml = function(html)  { $(this).screenTop(0);
            var result = String(html).replace(/<\!DOCTYPE[^>]*>/i, '').replace(/<(html|head|body|title|script)([\s\>])/gi, '<div id="document-$1"$2').replace(/<\/(html|head|body|title|script)\>/gi, '</div>');
            return result;
        };
        $.fn.wp_reload = function() {
            var $this = $(this);
            $this.find('a:internal:not(.no-ajaxy,[href^="#"],[href*="wp-login"],[href*="wp-admin"])').on('click', function(event) {
                var $this = $(this),
                    url = $this.attr('href'),
                    title = $this.attr('title') || null;
                if (event.which == 2 || event.metaKey) return true;
                History.pushState(null, title, url);
                event.preventDefault();
                return false;
            });
            return $this;
        };
        $body.wp_reload();
        $(window).bind('statechange', function() {
            var State = History.getState(),
                url = State.url,
                relativeUrl = url.replace(rootUrl, '');
            $.ajax({
                url: url,
                success: function(data, textStatus, jqXHR) {
                    var $data = $(documentHtml(data)),
                        $dataBody = $data.find('#document-body:first ' + contentSelector),
                        bodyClasses = $data.find('#document-body:first').attr('class'),
                        contentHtml, $scripts;
                    var $menu_list = $data.find('.' + reload_helper['mcdc']);
                    jQuery('body').attr('class', bodyClasses);
                    $scripts = $dataBody.find('#document-script');
                    if ($scripts.length) $scripts.detach();
                    contentHtml = $dataBody.html() || $data.html();
                    if (!contentHtml) {
                        document.location.href = url;
                        return false;
                    }
                    $content.stop(true, true);
                    $content.html(contentHtml).wp_reload().css('text-align', '').animate({
                        opacity: 1,
                        visibility: "visible"
                    });
                    if ('' != reload_helper['scrollTop']) {
                        jQuery('html, body').animate({
                            scrollTop: jQuery(contentSelector).offset().top
                        }, 1000);
                    }
                    $('.' + reload_helper['mcdc']).html($menu_list.html());
                    $body.wp_reload();
                    $(reload_helper['ids']).each(function() {
                        jQuery(this).addClass('no-ajaxy');
                    });
                    document.title = $data.find('#document-title:first').text();
                    try {
                        document.getElementsByTagName('title')[0].innerHTML = document.title.replace('<', '&lt;').replace('>', '&gt;').replace(' & ', ' &amp; ');
                    } catch (Exception) {}
                    $scripts.each(function() {
                        var scriptText = $(this).html();
                        if ('' != scriptText) {
                            scriptNode = document.createElement('script');
                            scriptNode.appendChild(document.createTextNode(scriptText));
                            contentNode.appendChild(scriptNode);
                        } else {
                            $.getScript($(this).attr('src'));
                        }
                    });
                    if (typeof window.pageTracker !== 'undefined') window.pageTracker._trackPageview(relativeUrl);
                    if (typeof window.reinvigorate !== 'undefined' && typeof window.reinvigorate.ajax_track !== 'undefined') reinvigorate.ajax_track(url);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    document.location.href = url;
                    return false;
                }
            });
        });
    });
})(window);
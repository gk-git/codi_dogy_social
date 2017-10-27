jQuery.fn.ownmenu = function (options) {
    var settings = {
        indicator: true,
        speed: 100,
        delay: 0,
        hideDelay: 100,
        hideClickOut: true,
        align: "left",
        submenuTrigger: "hover"
    }
    $.extend(settings, options);
    var menu = $(".ownmenu");
    var lastScreenWidth = window.innerWidth;
    var bigScreen = false;
    $(menu).prepend("<li class='showhide'>" +
        "<span class='title'></span>" +
        "<span class='icon fa fa-bars'></span>" +
        "</li>");
    if (settings.indicator == true) {
        $(menu).find("a").each(function () {
            if ($(this).siblings(".dropdown, .megamenu").length > 0) {
                $(this).append("<span class='indicator'><i class='fa fa-angle-right'></i></span>");
            }
        });
    }
    screenSize();
    $(window).resize(function () {
        if (lastScreenWidth <= 1000 && window.innerWidth > 1000) {
            unbindEvents();
            hideCollapse();
            bindHover();
            if (settings.align == "right" && bigScreen == false) {
                rightAlignMenu();
                bigScreen = true;
            }
        }
        if (lastScreenWidth > 1000 && window.innerWidth <= 1000) {
            unbindEvents();
            showCollapse();
            bindClick();
            if (bigScreen == true) {
                rightAlignMenu();
                bigScreen = false;
            }
        }
        if (settings.align == "right") {
            if (lastScreenWidth > 1000 && window.innerWidth > 1000) fixSubmenuRight();
        } else {
            if (lastScreenWidth > 1000 && window.innerWidth > 1000) fixSubmenuLeft();
        }
        lastScreenWidth = window.innerWidth;
    });

    function screenSize() {
        if (window.innerWidth <= 1000) {
            showCollapse();
            bindClick();
            if (bigScreen == true) {
                rightAlignMenu();
                bigScreen = false;
            }
            ;
        } else {
            hideCollapse();
            bindHover();
            if (settings.align == "right") {
                rightAlignMenu();
                bigScreen = true;
            } else {
                fixSubmenuLeft();
            }
        }
    }

    function bindHover() {
        if (navigator.userAgent.match(/Mobi/i) || window.navigator.msMaxTouchPoints > 0 || settings.submenuTrigger == "click") {
            $(menu).find("a").on("click touchstart", function (e) {
                e.stopPropagation();
                e.preventDefault();
                $(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(true, true).fadeOut(settings.speed);
                if ($(this).siblings(".dropdown, .megamenu").css("display") == "none") {
                    $(this).siblings(".dropdown, .megamenu").stop(true, true).delay(settings.delay).fadeIn(settings.speed);
                    return false;
                } else {
                    $(this).siblings(".dropdown, .megamenu").stop(true, true).fadeOut(settings.speed);
                    $(this).siblings(".dropdown").find(".dropdown").stop(true, true).fadeOut(settings.speed);
                }
                window.location.href = $(this).attr("href");
            });
            $(menu).find("li").bind("mouseleave", function () {
                $(this).children(".dropdown, .megamenu").stop(true, true).fadeOut(settings.speed);
            });
            if (settings.hideClickOut == true) {
                $(document).bind("click.menu touchstart.menu", function (ev) {
                    if ($(ev.target).closest(menu).length == 0) {
                        $(menu).find(".dropdown, .megamenu").fadeOut(settings.speed);
                    }
                });
            }
        } else {
            $(menu).find("li").bind("mouseenter", function () {
                $(this).children(".dropdown, .megamenu").stop(true, true).delay(settings.delay).fadeIn(settings.speed);
            }).bind("mouseleave", function () {
                $(this).children(".dropdown, .megamenu").stop(true, true).delay(settings.hideDelay).fadeOut(settings.speed);
            });
        }
    }

    function bindClick() {
        $(menu).find("li:not(.showhide)").each(function () {
            if ($(this).children(".dropdown, .megamenu").length > 0) {
                $(this).children("a").bind("click", function (e) {
                    if ($(this).siblings(".dropdown, .megamenu").css("display") == "none") {
                        $(this).siblings(".dropdown, .megamenu").delay(settings.delay).slideDown(settings.speed).focus();
                        $(this).parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(settings.speed);
                        return false;
                    } else {
                        $(this).siblings(".dropdown, .megamenu").slideUp(settings.speed).focus();
                        firstItemClick = 1;
                    }
                });
            }
        });
    }

    function showCollapse() {
        $(menu).children("li:not(.showhide)").hide(0);
        $(menu).children("li.showhide").show(0);
        $(menu).children("li.showhide").bind("click", function () {
            if ($(menu).children("li").is(":hidden")) {
                $(menu).children("li").slideDown(settings.speed);
            } else {
                $(menu).children("li:not(.showhide)").slideUp(settings.speed);
                $(menu).children("li.showhide").show(0);
                $(menu).find(".dropdown, .megamenu").hide(settings.speed);
            }
        });
    }

    function hideCollapse() {
        $(menu).children("li").show(0);
        $(menu).children("li.showhide").hide(0);
    }

    function rightAlignMenu() {
        $(menu).children("li").addClass("jsright");
        var items = $(menu).children("li");
        $(menu).children("li:not(.showhide)").detach();
        for (var i = items.length; i >= 1; i--) {
            $(menu).append(items[i]);
        }
        fixSubmenuRight();
    }

    function fixSubmenuRight() {
        $(menu).children("li").removeClass("last");
        var items = $(menu).children("li");
        for (var i = 1; i <= items.length; i++) {
            if ($(items[i]).children(".dropdown, .megamenu").length > 0) {
                var lastItemsWidth = 0;
                for (var y = 1; y <= i; y++) {
                    lastItemsWidth = lastItemsWidth + $(items[y]).outerWidth();
                }
                if ($(items[i]).children(".dropdown, .megamenu").outerWidth() > lastItemsWidth) {
                    $(items[i]).addClass("last");
                }
            }
        }
    }

    function fixSubmenuLeft() {
        $(menu).children("li").removeClass("fix-sub");
        var items = $(menu).children("li");
        var menuWidth = $(menu).outerWidth();
        var itemsWidth = 0;
        for (var i = 1; i <= items.length; i++) {
            if ($(items[i]).children(".dropdown, .megamenu").length > 0) {
                if ($(items[i]).position().left + $(items[i]).children(".dropdown, .megamenu").outerWidth() > menuWidth) {
                    $(items[i]).addClass("fix-sub");
                }
            }
        }
    }

    function unbindEvents() {
        $(menu).find("li, a").unbind();
        $(document).unbind("click.menu touchstart.menu");
        $(menu).find(".dropdown, .megamenu").hide(0);
    }
}
$(document).ready(function ($) {
    "use strict"
    $().ownmenu();
});
/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function () {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }

    var e = 0, i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
        return this.enabled = !1, this
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
        return this.group.next(this)
    }, t.prototype.previous = function () {
        return this.group.previous(this)
    }, t.invokeAll = function (t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function () {
        t.invokeAll("destroy")
    }, t.disableAll = function () {
        t.invokeAll("disable")
    }, t.enableAll = function () {
        t.invokeAll("enable")
    }, t.refreshAll = function () {
        t.Context.refreshAll()
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(), function () {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var i = 0, o = {}, n = window.Waypoint, r = window.onload;
    e.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function () {
        function t() {
            e.handleResize(), e.didResize = !1
        }

        var e = this;
        this.adapter.on("resize.waypoints", function () {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function () {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }

        var e = this;
        this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function () {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function () {
        var t = {}, e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var o = e[i], n = o.newScroll > o.oldScroll, r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s], l = o.oldScroll < a.triggerPoint, h = o.newScroll >= a.triggerPoint,
                    p = l && h, u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
    }, e.prototype.innerHeight = function () {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function () {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = this.adapter.offset(), o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var n in t) {
            var r = t[n];
            for (var s in this.waypoints[n]) {
                var a, l, h, p, u, c = this.waypoints[n][s], d = c.options.offset, f = c.triggerPoint, w = 0,
                    y = null == f;
                c.element !== c.element.window && (w = c.adapter.offset()[r.offsetProp]), "function" == typeof d ? d = d.apply(c) : "string" == typeof d && (d = parseFloat(d), c.options.offset.indexOf("%") > -1 && (d = Math.ceil(r.contextDimension * d / 100))), a = r.contextScroll - r.contextOffset, c.triggerPoint = w + a - d, l = f < r.oldScroll, h = c.triggerPoint >= r.oldScroll, p = l && h, u = !l && !h, !y && p ? (c.queueTrigger(r.backward), o[c.group.id] = c.group) : !y && u ? (c.queueTrigger(r.forward), o[c.group.id] = c.group) : y && r.oldScroll >= c.triggerPoint && (c.queueTrigger(r.forward), o[c.group.id] = c.group)
            }
        }
        for (var g in o) o[g].flushTriggers();
        return this
    }, e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function () {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function (t) {
        return o[t.waypointContextKey]
    }, window.onload = function () {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function (e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(), function () {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }

    var o = {vertical: {}, horizontal: {}}, n = window.Waypoint;
    i.prototype.add = function (t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i], n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints), o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
        return this.waypoints[0]
    }, i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(), function () {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }

    var e = window.jQuery, i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
        t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o]
    }), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
}(), function () {
    "use strict";

    function t(t) {
        return function () {
            var i = [], o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
                var n = t.extend({}, o, {element: this});
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }

    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
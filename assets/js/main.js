! function(t, e) {
     e.urlParams("debug") && e.debug, t(function() {
         function n(t, e) {
             var n = t + Math.random() * (e + 1 - t);
             return n = Math.floor(n)
         }

         function o(e, o) {
             var a = ".title.lost",
                 i = 0,
                 l = 0;
             o && (i = o, l = 200 - o), t(a + ":nth-child(even)").css({
                 left: -e + "px",
                 height: n(40, 70) + "%",
                 color: "rgb(" + i + "," + i + "," + i + ")"
             }), t(a + ":nth-child(odd)").css({
                 left: e + "px",
                 color: "rgb(" + l + "," + l + "," + l + ")"
             })
         }

         function a(t) {
             setTimeout(i(n(4, 10)), t)
         }

         function i(t) {
             return t? function() {
                 o(n(-4, 4), n(50, 150)), setTimeout(i(--t), n(40, 180))
             } : function() {
                 o(0), setTimeout(function() {
                     a(n(2e3, 6e3))
                 }, n(50, 200))
             }
         }

         function l(t) {
             return t.length
         }

         function r(t, e) {
             return +new Date(_, t, e) > m ? +new Date(_, t, e) : +new Date(_ + 1, t, e)
         }

         function s(t) {
             var e, n, o = ("" + t).split(""),
                 a = !0;
             for (e = 0, n = o.length - 1; e < n; e++) a = a && o[e] == o[e + 1];
             if (a) return a;
             for (a = !0, e = 0, n = o.length - 1; e < n; e++) a = a && o[e] == o[e + 1] + 1;
             if (a) return a;
             for (a = !0, e = 0, n = o.length - 1; e < n; e++) a = a && o[e] == o[e + 1] - 1;
             if (a) return a;
             for (a = !0, e = 1, n = o.length; e < n; e++) a = a && 0 == o[e];
             return a
         }! function(t) {
             t.CoolDate = function(t, e, n) {
                 this.__timestamp = t, this.__title = e, this.__type = n.toLowerCase()
             }, t.CoolDate.prototype = {
                 constructor: CoolDate,
                 get timestamp() {
                     return this.__timestamp
                 },
                 get title() {
                     return this.__title
                 },
                 toString: function() {
                     var t = Math.ceil((this.__timestamp - g) / 864e5);
                     return [0 == t ? "Today" : [1 == t ? "Tomorrow" : 2 == t ? "The day after tomorrow" : ["In", "<b>" + t + "</b>", e.math(t).declination(["day", "days", "days"]).toLowerCase( )].join(" "), "there will be"].join(" "), this.__type + ":", this.__title + "."].join(" ")
                 }
             }, t.CoolDate.__defineGetter__("MONTH", function() {
                 return "a round date"
             }), t.CoolDate.__defineGetter__("COUNT", function() {
                 return "a beautiful number of days"
             }), t.CoolDate.__defineGetter__("IMPORTANT", function() {
                 return "an important event"
             })
        }(window);
         var u, c, d, h = !1,
             f = setInterval(function() {
                 t("#nearest-wrap").toggleClass("swing")
             }, 2e3),
             C = function() {
                 h || (h = !0, clearInterval(f), t("#nearest-wrap").removeClass("swing"))
             },
             p = location.hash.replace("#", "").split("/").filter(l),
             w = parseInt(p[2]) || 25,
             D = (p[1] || 6) - 1,
             _ = parseInt(p[0]) || 2023,
             m = +new Date(_, D, w),
             g = +new Date,
             v = parseInt((+new Date - m) / 864e5),
             T = [new CoolDate((+new Date(_ + 1, D, w)), "Year", CoolDate.MONTH), new CoolDate((+new Date(_ + 1, D + 6, w)), "A year and a half", CoolDate.MONTH), new CoolDate(r(1, 14), 'First "February 14" together', CoolDate.IMPORTANT), new CoolDate(r(1, 23), 'First "February 23" together', CoolDate.IMPORTANT), new CoolDate(r(2, 8), 'First "March 8" together', CoolDate.IMPORTANT)],
             I = 0;
         for (console.log(t(".content").hasClass("lost"), p.length < 3, p), t(".content").hasClass("lost") && p.length < 3 && (window.horrorInterval = setInterval(function() {
                 t("body").hasClass("ready") && (clearInterval(window.horrorInterval), t(".content").html("").css({
                     position: "relative"
                 }).append(t("<div>").addClass("title").addClass("lost").text("Love is lost.")).append(t("<div>"). addClass("title").addClass("lost").text("Love is lost.")).append(t("<div>").addClass("title").addClass("mask"). text("Love is lost.")), a(100))
             }, 100)), c = 1; c < 12; c++) T.push(new CoolDate((+new Date(_, D + c, w)), [6 == c ? "" : c, 6 == c ? "Half a year" : e.math(c) .declination(["month", "months", "months"])].join(" "), CoolDate.MONTH));
         for (c = 2; c <= 10; c++) T.push(new CoolDate((+new Date(_ + c, D, w)), [c, e.math(c).declination(["year ", "years", "years"])].join(" "), CoolDate.MONTH));
         for (c = 100, d = 3660; c < d; c++) s(c) && T.push(new CoolDate(m + 864e5 * c, [c, e.math(c).declination(["day" , "days", "days"])].join(" "), CoolDate.COUNT));
         location.hash.length || T.push(new CoolDate((+new Date(2017, 6, 29)), "Return from practice", CoolDate.IMPORTANT)), T.sort(function(t, e) {
             return t.timestamp - e.timestamp
         }), u = T.filter(function(t) {
             return I < 10 && Math.ceil((t.timestamp - g) / 864e5) >= 0 && (I++, !0)
         }), e.log(u), t(".title.days").text(v), t(".text .days").text(e.math(v).declination(["day" , "days", "days"])), u.forEach(function(e) {
             t("#nearest").append(t("<div>").addClass("swiper-slide").html(e + ""))
         }), new Swiper(".swiper-container", {
             loop: !0,
             runCallbacksOnInit: !1,
             onSlidePrevEnd: C,
             onSlideNextEnd: C
         }), t("body").delay(2e3).queue(function(e) {
             t(this).addClass("ready"), e()
         })
     })
}(jQuery, Slavunya),
function() {
     var t = new ProgressBar.Path("#heart-path", {
         easing: "easeInOut",
         duration: 2800
     });
     t.set(-1), t.animate(1)
}();
//# sourceMappingURL=main.js.map
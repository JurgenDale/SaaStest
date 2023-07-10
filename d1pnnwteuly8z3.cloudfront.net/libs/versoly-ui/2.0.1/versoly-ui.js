var __webpack_modules__ = {
        515: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                Z: () => __WEBPACK_DEFAULT_EXPORT__
            });
            var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(279);
            const __WEBPACK_DEFAULT_EXPORT__ = function() {
                return document.querySelectorAll('[data-toggle="dropdown"]').forEach((function(trigger) {
                    var _window$FloatingUIDOM = window.FloatingUIDOM,
                        computePosition = _window$FloatingUIDOM.computePosition,
                        shift = _window$FloatingUIDOM.shift,
                        offset = _window$FloatingUIDOM.offset,
                        target = trigger.nextElementSibling,
                        parent = trigger.parentElement,
                        options = eval("(" + trigger.dataset.options + ")" || 0) || {},
                        middleware = [offset(6), shift({
                            padding: 5
                        })];

                    function update() {
                        computePosition(trigger, target, {
                            placement: options.placement || "bottom",
                            middleware
                        }).then((function(e) {
                            var t = e.x,
                                o = e.y;
                            Object.assign(target.style, {
                                left: "".concat(t, "px"),
                                top: "".concat(o, "px")
                            })
                        }))
                    }
                    var show = function() {
                            target.style.display = "block", requestAnimationFrame((function() {
                                target.classList.add("opacity-100", "visible")
                            })), update()
                        },
                        hide = function() {
                            target.style.display = "", target.classList.remove("opacity-100", "visible")
                        },
                        toggle = function() {
                            "block" !== target.style.display ? show() : hide()
                        };
                    parent.addEventListener("focusout", (function(e) {
                        !parent.contains(e.relatedTarget) && document.hasFocus() && hide()
                    })), (0, _utils__WEBPACK_IMPORTED_MODULE_0__.yw)(trigger, ["click"], toggle), (0, _utils__WEBPACK_IMPORTED_MODULE_0__.VM)(hide)
                }))
            }
        },
        279: (e, t, o) => {
            o.d(t, {
                U9: () => r,
                g9: () => n,
                yw: () => i,
                VM: () => a,
                vj: () => c,
                wI: () => l,
                br: () => s,
                Di: () => d
            });
            var r = function(e) {
                    return e.getAttribute("data-target") && document.getElementById(e.getAttribute("data-target").replace("#", ""))
                },
                n = function(e) {
                    return 1e3 * window.getComputedStyle(e).getPropertyValue("transition-duration").replace("s", "") + 1
                },
                i = function(e, t, o) {
                    t.forEach((function(t) {
                        e.addEventListener(t, o)
                    }))
                },
                a = function(e) {
                    document.addEventListener("keydown", (function(t) {
                        "Escape" === t.key && e()
                    }))
                },
                c = function(e, t, o) {
                    return function() {
                        return document.querySelectorAll(e).forEach((function(e) {
                            e.addEventListener(t, (function() {
                                return o(e)
                            }))
                        }))
                    }
                },
                l = function() {
                    return window.addEventListener("resize", (function() {
                        document.querySelectorAll('[data-toggle="collapse"]').forEach((function(e) {
                            var t = r(e);
                            t && (e.setAttribute("aria-expanded", "false"), t.classList.remove("show"), t.classList.remove("block"), t.style.height = "auto", t.style.overflow = "")
                        }))
                    }))
                },
                s = function(e) {
                    var t = document;
                    return new Promise((function(o) {
                        if (t.querySelector(e)) return o(t.querySelector(e));
                        var r = new MutationObserver((function(n) {
                            t.querySelector(e) && (o(t.querySelector(e)), r.disconnect())
                        }));
                        r.observe(t.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }))
                },
                d = function(e) {
                    var t = e.dataset.options;
                    return t ? JSON.parse(t.replaceAll("'", '"')) : {}
                }
        }
    },
    __webpack_module_cache__ = {};

function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var o = __webpack_module_cache__[e] = {
        exports: {}
    };
    return __webpack_modules__[e](o, o.exports, __webpack_require__), o.exports
}
__webpack_require__.d = (e, t) => {
    for (var o in t) __webpack_require__.o(t, o) && !__webpack_require__.o(e, o) && Object.defineProperty(e, o, {
        enumerable: !0,
        get: t[o]
    })
}, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
var __webpack_exports__ = {};
(() => {
    var e = __webpack_require__(279);
    const t = (0, e.vj)('[data-toggle="accordion"]', "click", (function(t) {
        var o = t.closest(".accordion-item").querySelector(".accordion-collapse"),
            r = (0, e.g9)(o);
        if (o.style.overflow = "hidden", o.style.height = 0, "true" === t.getAttribute("aria-expanded")) return t.setAttribute("aria-expanded", "false"), o.classList.remove("show"), void window.setTimeout((function() {
            o.classList.remove("block"), o.classList.add("hidden")
        }), r);
        t.setAttribute("aria-expanded", "true"), o.classList.add("block"), o.classList.add("show"), o.classList.remove("hidden"), window.setTimeout((function() {
            o.style.height = o.scrollHeight + "px"
        }), 33), window.setTimeout((function() {
            o.style.overflow = ""
        }), r)
    }));
    const o = (0, e.vj)("[data-dismiss]", "click", (function(t) {
        var o = (0, e.U9)(t);
        o || (o = t.closest(".".concat(t.getAttribute("data-dismiss")))), o.classList.add("opacity-0"), setTimeout((function() {
            return o.remove()
        }), (0, e.g9)(o))
    }));
    const r = (0, e.vj)('[data-toggle="collapse"]', "click", (function(t) {
        var o = (0, e.U9)(t);
        if (o) {
            var r = (0, e.g9)(o);
            if (o.style.overflow = "hidden", o.style.height = 0, "true" === t.getAttribute("aria-expanded")) return t.setAttribute("aria-expanded", "false"), o.classList.remove("show"), void window.setTimeout((function() {
                return o.classList.remove("block")
            }), r);
            t.setAttribute("aria-expanded", "true"), o.classList.add("block"), o.classList.add("show"), window.setTimeout((function() {
                o.querySelectorAll(".dropdown-menu").forEach((function(e) {
                    return e.classList.add("hidden")
                }));
                var e = o.scrollHeight;
                o.querySelectorAll(".dropdown-menu").forEach((function(e) {
                    return e.classList.remove("hidden")
                })), o.style.height = e + "px"
            }), 32), window.setTimeout((function() {
                return o.style.overflow = ""
            }), r)
        }
    }));
    var n = __webpack_require__(515),
        i = "fixed right-0 top-0 z-50 text-white px-5 close";
    window.removeModal = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "v-modal",
            t = document.getElementById(e);
        t.classList.remove("opacity-100"), window.setTimeout((function() {
            t.remove(), document.body.style.overflow = ""
        }), 500)
    };
    const a = (0, e.vj)('[data-toggle="modal"]', "click", (function(t) {
        var o = (0, e.Di)(t),
            r = o.size,
            n = o.beforeShown,
            a = o.id || "v-modal",
            c = t.dataset.html || "";
        o.imgSrc && (c = '<img src="'.concat(o.imgSrc, '">')), o.iframeSrc && (c = '<iframe allow="autoplay" class="aspect-video w-full" src="'.concat(o.iframeSrc, '" allowfullscreen="" autoplay=""></iframe>'));
        var l = '<div class="modal" id="'.concat(a, '">\n  <div class="modal-content ').concat(r ? "modal-".concat(r) : "", '">\n    ').concat(c, "\n  </div>\n\n  <button onclick=\"removeModal('").concat(a, '\')" type="button" class="').concat(i, '" data-dismiss="modal" aria-label="Close">\n    <span class="text-4xl" aria-hidden="true">&times;</span>\n  </button>\n\n  <div class="modal-bg" onclick="removeModal(\'').concat(a, "')\"></div>\n</div>\n");
        document.addEventListener("keydown", (function(e) {
            return 27 == e.keyCode && window.removeModal(a)
        })), document.body.style.overflow = "hidden", document.body.insertAdjacentHTML("beforeend", l), (0, e.br)("#" + a).then((function(e) {
            n && window[n](), window.setTimeout((function() {
                return e.classList.add("opacity-100")
            }), 32)
        }))
    }));

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
        return r
    }

    function l(e) {
        return function(e) {
            if (Array.isArray(e)) return c(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? c(e, t) : void 0
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    const s = (0, e.vj)('[role="tab"]', "click", (function(e) {
        if ("true" === e.getAttribute("aria-selected")) return null;
        var t = document.querySelector('[aria-labelledby="'.concat(e.getAttribute("aria-controls"), '"]'));
        if (!t) return null;
        for (var o = e.classList.value, r = e.parentNode; r && "tablist" !== r.getAttribute("role");) r = r.parentNode;
        var n = r.querySelectorAll('[aria-selected="true"]');
        if (!n || 0 === n.length) return null;
        var i = n[0].classList.value;
        r.querySelectorAll('[role="tab"]').forEach((function(e) {
            e.classList = o, e.setAttribute("aria-selected", "false")
        })), e.classList = i, e.setAttribute("aria-selected", "true"), "tabcontent" !== t.getAttribute("role") ? (l(t.parentNode.children).forEach((function(e) {
            "tabpanel" === e.getAttribute("role") && e.classList.add("hidden")
        })), t.classList.remove("hidden")) : l(t.children).forEach((function(e) {
            "tabpanel" === e.getAttribute("role") && e.classList.remove("hidden")
        }))
    }));
    window.vInitialized = !1, window.initializeVUI = function() {
        window.vInitialized || (window.vInitialized = !0, t(), r(), o(), (0, n.Z)(), a(), s(), (0, e.wI)())
    }, document.addEventListener("DOMContentLoaded", initializeVUI), "loading" !== document.readyState && initializeVUI()
})();
//# sourceMappingURL=versoly-ui.js.map
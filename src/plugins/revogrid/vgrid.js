! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("vue")) : "function" == typeof define && define.amd ? define("VGrid", ["vue"], t) : "object" == typeof exports ? exports.VGrid = t(require("vue")) : e.VGrid = t(e.vue)
}(self, (function(e) {
    return (() => {
        var t, r, n = {
                993: e => {
                    function t(e) {
                        return Promise.resolve().then((() => {
                            var t = new Error("Cannot find module '" + e + "'");
                            throw t.code = "MODULE_NOT_FOUND", t
                        }))
                    }
                    t.keys = () => [], t.resolve = t, t.id = 993, e.exports = t
                },
                504: (e, t, r) => {
                    "use strict";
                    r.r(t), r.d(t, {
                        VGrid: () => Ea,
                        VGridPlugin: () => Ra,
                        VGridVueEditor: () => Oa,
                        VGridVueTemplate: () => za,
                        VGridVueTemplateConstructor: () => $a,
                        default: () => Fa
                    });
                    var n = {};
                    r.r(n), r.d(n, {
                        RevoGrid: () => ia,
                        RevogrClipboard: () => oa,
                        RevogrData: () => sa,
                        RevogrEdit: () => aa,
                        RevogrFilterPanel: () => la,
                        RevogrFocus: () => ca,
                        RevogrHeader: () => ua,
                        RevogrOrderEditor: () => ha,
                        RevogrOverlaySelection: () => da,
                        RevogrRowHeaders: () => ga,
                        RevogrScrollVirtual: () => fa,
                        RevogrTempRange: () => pa,
                        RevogrViewportScroll: () => va,
                        defineCustomElements: () => ma,
                        setAssetPath: () => ve,
                        setPlatformOptions: () => me
                    });
                    var i = r(103);
                    let o, s, a, l = !1,
                        c = !1,
                        u = !1,
                        h = !1,
                        d = null,
                        g = !1;
                    const f = "undefined" != typeof window ? window : {},
                        p = f.document || {
                            head: {}
                        },
                        v = (f.HTMLElement, {
                            $flags$: 0,
                            $resourcesUrl$: "",
                            jmp: e => e(),
                            raf: e => requestAnimationFrame(e),
                            ael: (e, t, r, n) => e.addEventListener(t, r, n),
                            rel: (e, t, r, n) => e.removeEventListener(t, r, n),
                            ce: (e, t) => new CustomEvent(e, t)
                        }),
                        m = (() => {
                            let e = !1;
                            try {
                                p.addEventListener("e", null, Object.defineProperty({}, "passive", {
                                    get() {
                                        e = !0
                                    }
                                }))
                            } catch (e) {}
                            return e
                        })(),
                        C = (() => {
                            try {
                                return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replace
                            } catch (e) {}
                            return !1
                        })(),
                        w = (e, t, r, n) => {
                            r && r.map((([r, n, i]) => {
                                const o = L(e, r),
                                    s = b(t, i),
                                    a = x(r);
                                v.ael(o, n, s, a), (t.$rmListeners$ = t.$rmListeners$ || []).push((() => v.rel(o, n, s, a)))
                            }))
                        },
                        b = (e, t) => r => {
                            try {
                                e.$hostElement$[t](r)
                            } catch (e) {
                                xe(e)
                            }
                        },
                        L = (e, t) => 4 & t ? p : 8 & t ? f : 16 & t ? p.body : e,
                        x = e => m ? {
                            passive: 0 != (1 & e),
                            capture: 0 != (2 & e)
                        } : 0 != (2 & e),
                        y = "http://www.w3.org/1999/xlink",
                        S = new WeakMap,
                        _ = (e, t, r, n) => {
                            let i = E(t, r),
                                o = ye.get(i);
                            if (e = 11 === e.nodeType ? e : p, o)
                                if ("string" == typeof o) {
                                    e = e.head || e;
                                    let t, r = S.get(e);
                                    r || S.set(e, r = new Set), r.has(i) || (t = p.createElement("style"), t.innerHTML = o, e.insertBefore(t, e.querySelector("link")), r && r.add(i))
                                } else !e.adoptedStyleSheets.includes(o) && (e.adoptedStyleSheets = [...e.adoptedStyleSheets, o]);
                            return i
                        },
                        E = (e, t) => "sc-" + (t && 32 & e.$flags$ ? e.$tagName$ + "-" + t : e.$tagName$),
                        k = {},
                        R = e => "object" == (e = typeof e) || "function" === e,
                        z = (e, t, ...r) => {
                            let n = null,
                                i = null,
                                o = null,
                                s = !1,
                                a = !1,
                                l = [];
                            const c = t => {
                                for (let r = 0; r < t.length; r++) n = t[r], Array.isArray(n) ? c(n) : null != n && "boolean" != typeof n && ((s = "function" != typeof e && !R(n)) && (n = String(n)), s && a ? l[l.length - 1].$text$ += n : l.push(s ? $(null, n) : n), a = s)
                            };
                            if (c(r), t && (t.key && (i = t.key), t.name && (o = t.name), true)) {
                                const e = t.className || t.class;
                                e && (t.class = "object" != typeof e ? e : Object.keys(e).filter((t => e[t])).join(" "))
                            }
                            if ("function" == typeof e) return e(null === t ? {} : t, l, j);
                            const u = $(e, null);
                            return u.$attrs$ = t, l.length > 0 && (u.$children$ = l), u.$key$ = i, u.$name$ = o, u
                        },
                        $ = (e, t) => {
                            const r = {
                                $flags$: 0,
                                $tag$: e,
                                $text$: t,
                                $elm$: null,
                                $children$: null,
                                $attrs$: null,
                                $key$: null,
                                $name$: null
                            };
                            return r
                        },
                        O = {},
                        F = e => e && e.$tag$ === O,
                        j = {
                            forEach: (e, t) => e.map(T).forEach(t),
                            map: (e, t) => e.map(T).map(t).map(P)
                        },
                        T = e => ({
                            vattrs: e.$attrs$,
                            vchildren: e.$children$,
                            vkey: e.$key$,
                            vname: e.$name$,
                            vtag: e.$tag$,
                            vtext: e.$text$
                        }),
                        P = e => {
                            if ("function" == typeof e.vtag) {
                                const t = Object.assign({}, e.vattrs);
                                return e.vkey && (t.key = e.vkey), e.vname && (t.name = e.vname), z(e.vtag, t, ...e.vchildren || [])
                            }
                            const t = $(e.vtag, e.vtext);
                            return t.$attrs$ = e.vattrs, t.$children$ = e.vchildren, t.$key$ = e.vkey, t.$name$ = e.vname, t
                        },
                        D = (e, t, r, n, i, o) => {
                            if (r !== n) {
                                let s = Le(e, t),
                                    a = t.toLowerCase();
                                if ("class" === t) {
                                    const t = e.classList,
                                        i = A(r),
                                        o = A(n);
                                    t.remove(...i.filter((e => e && !o.includes(e)))), t.add(...o.filter((e => e && !i.includes(e))))
                                } else if ("style" === t) {
                                    for (const t in r) n && null != n[t] || (t.includes("-") ? e.style.removeProperty(t) : e.style[t] = "");
                                    for (const t in n) r && n[t] === r[t] || (t.includes("-") ? e.style.setProperty(t, n[t]) : e.style[t] = n[t])
                                } else if ("key" === t);
                                else if ("ref" === t) n && n(e);
                                else if (e.__lookupSetter__(t) || "o" !== t[0] || "n" !== t[1]) {
                                    {
                                        const l = R(n);
                                        if ((s || l && null !== n) && !i) try {
                                            if (e.tagName.includes("-")) e[t] = n;
                                            else {
                                                let i = null == n ? "" : n;
                                                "list" === t ? s = !1 : null != r && e[t] == i || (e[t] = i)
                                            }
                                        } catch (e) {}
                                        let c = !1;
                                        a !== (a = a.replace(/^xlink\:?/, "")) && (t = a, c = !0), null == n || !1 === n ? !1 === n && "" !== e.getAttribute(t) || (c ? e.removeAttributeNS(y, t) : e.removeAttribute(t)) : (!s || 4 & o || i) && !l && (n = !0 === n ? "" : n, c ? e.setAttributeNS(y, t, n) : e.setAttribute(t, n))
                                    }
                                } else t = "-" === t[2] ? t.slice(3) : Le(f, a) ? a.slice(2) : a[2] + t.slice(3), r && v.rel(e, t, r, !1), n && v.ael(e, t, n, !1)
                            }
                        },
                        M = /\s/,
                        A = e => e ? e.split(M) : [],
                        I = (e, t, r, n) => {
                            const i = 11 === t.$elm$.nodeType && t.$elm$.host ? t.$elm$.host : t.$elm$,
                                o = e && e.$attrs$ || k,
                                s = t.$attrs$ || k;
                            for (n in o) n in s || D(i, n, o[n], void 0, r, t.$flags$);
                            for (n in s) D(i, n, o[n], s[n], r, t.$flags$)
                        },
                        H = (e, t, r, n) => {
                            let i, c, d, g = t.$children$[r],
                                f = 0;
                            if (!l && (u = !0, "slot" === g.$tag$ && (o && n.classList.add(o + "-s"), g.$flags$ |= g.$children$ ? 2 : 1)), null !== g.$text$) i = g.$elm$ = p.createTextNode(g.$text$);
                            else if (1 & g.$flags$) i = g.$elm$ = p.createTextNode("");
                            else {
                                if (!h && (h = "svg" === g.$tag$), i = g.$elm$ = p.createElementNS(h ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", 2 & g.$flags$ ? "slot-fb" : g.$tag$), h && "foreignObject" === g.$tag$ && (h = !1), I(null, g, h), null != o && i["s-si"] !== o && i.classList.add(i["s-si"] = o), g.$children$)
                                    for (f = 0; f < g.$children$.length; ++f) c = H(e, g, f, i), c && i.appendChild(c);
                                "svg" === g.$tag$ ? h = !1 : "foreignObject" === i.tagName && (h = !0)
                            }
                            return i["s-hn"] = a, 3 & g.$flags$ && (i["s-sr"] = !0, i["s-cr"] = s, i["s-sn"] = g.$name$ || "", d = e && e.$children$ && e.$children$[r], d && d.$tag$ === g.$tag$ && e.$elm$ && N(e.$elm$, !1)), i
                        },
                        N = (e, t) => {
                            v.$flags$ |= 1;
                            const r = e.childNodes;
                            for (let e = r.length - 1; e >= 0; e--) {
                                const n = r[e];
                                n["s-hn"] !== a && n["s-ol"] && (Z(n).insertBefore(n, V(n)), n["s-ol"].remove(), n["s-ol"] = void 0, u = !0), t && N(n, t)
                            }
                            v.$flags$ &= -2
                        },
                        B = (e, t, r, n, i, o) => {
                            let s, l = e["s-cr"] && e["s-cr"].parentNode || e;
                            for (l.shadowRoot && l.tagName === a && (l = l.shadowRoot); i <= o; ++i) n[i] && (s = H(null, r, i, e), s && (n[i].$elm$ = s, l.insertBefore(s, V(t))))
                        },
                        U = (e, t, r, n, i) => {
                            for (; t <= r; ++t)(n = e[t]) && (i = n.$elm$, J(n), c = !0, i["s-ol"] ? i["s-ol"].remove() : N(i, !0), i.remove())
                        },
                        W = (e, t) => e.$tag$ === t.$tag$ && ("slot" === e.$tag$ ? e.$name$ === t.$name$ : e.$key$ === t.$key$),
                        V = e => e && e["s-ol"] || e,
                        Z = e => (e["s-ol"] ? e["s-ol"] : e).parentNode,
                        G = (e, t) => {
                            const r = t.$elm$ = e.$elm$,
                                n = e.$children$,
                                i = t.$children$,
                                o = t.$tag$,
                                s = t.$text$;
                            let a;
                            null !== s ? (a = r["s-cr"]) ? a.parentNode.textContent = s : e.$text$ !== s && (r.data = s) : (h = "svg" === o || "foreignObject" !== o && h, "slot" === o || I(e, t, h), null !== n && null !== i ? ((e, t, r, n) => {
                                let i, o, s = 0,
                                    a = 0,
                                    l = 0,
                                    c = 0,
                                    u = t.length - 1,
                                    h = t[0],
                                    d = t[u],
                                    g = n.length - 1,
                                    f = n[0],
                                    p = n[g];
                                for (; s <= u && a <= g;)
                                    if (null == h) h = t[++s];
                                    else if (null == d) d = t[--u];
                                else if (null == f) f = n[++a];
                                else if (null == p) p = n[--g];
                                else if (W(h, f)) G(h, f), h = t[++s], f = n[++a];
                                else if (W(d, p)) G(d, p), d = t[--u], p = n[--g];
                                else if (W(h, p)) "slot" !== h.$tag$ && "slot" !== p.$tag$ || N(h.$elm$.parentNode, !1), G(h, p), e.insertBefore(h.$elm$, d.$elm$.nextSibling), h = t[++s], p = n[--g];
                                else if (W(d, f)) "slot" !== h.$tag$ && "slot" !== p.$tag$ || N(d.$elm$.parentNode, !1), G(d, f), e.insertBefore(d.$elm$, h.$elm$), d = t[--u], f = n[++a];
                                else {
                                    for (l = -1, c = s; c <= u; ++c)
                                        if (t[c] && null !== t[c].$key$ && t[c].$key$ === f.$key$) {
                                            l = c;
                                            break
                                        } l >= 0 ? (o = t[l], o.$tag$ !== f.$tag$ ? i = H(t && t[a], r, l, e) : (G(o, f), t[l] = void 0, i = o.$elm$), f = n[++a]) : (i = H(t && t[a], r, a, e), f = n[++a]), i && Z(h.$elm$).insertBefore(i, V(h.$elm$))
                                }
                                s > u ? B(e, null == n[g + 1] ? null : n[g + 1].$elm$, r, n, a, g) : a > g && U(t, s, u)
                            })(r, n, t, i) : null !== i ? (null !== e.$text$ && (r.textContent = ""), B(r, null, t, i, 0, i.length - 1)) : null !== n && U(n, 0, n.length - 1), h && "svg" === o && (h = !1))
                        },
                        q = e => {
                            let t, r, n, i, o, s, a = e.childNodes;
                            for (r = 0, n = a.length; r < n; r++)
                                if (t = a[r], 1 === t.nodeType) {
                                    if (t["s-sr"])
                                        for (o = t["s-sn"], t.hidden = !1, i = 0; i < n; i++)
                                            if (s = a[i].nodeType, a[i]["s-hn"] !== t["s-hn"] || "" !== o) {
                                                if (1 === s && o === a[i].getAttribute("slot")) {
                                                    t.hidden = !0;
                                                    break
                                                }
                                            } else if (1 === s || 3 === s && "" !== a[i].textContent.trim()) {
                                        t.hidden = !0;
                                        break
                                    }
                                    q(t)
                                }
                        },
                        X = [],
                        K = e => {
                            let t, r, n, i, o, s, a = 0,
                                l = e.childNodes,
                                u = l.length;
                            for (; a < u; a++) {
                                if (t = l[a], t["s-sr"] && (r = t["s-cr"]) && r.parentNode)
                                    for (n = r.parentNode.childNodes, i = t["s-sn"], s = n.length - 1; s >= 0; s--) r = n[s], r["s-cn"] || r["s-nr"] || r["s-hn"] === t["s-hn"] || (Y(r, i) ? (o = X.find((e => e.$nodeToRelocate$ === r)), c = !0, r["s-sn"] = r["s-sn"] || i, o ? o.$slotRefNode$ = t : X.push({
                                        $slotRefNode$: t,
                                        $nodeToRelocate$: r
                                    }), r["s-sr"] && X.map((e => {
                                        Y(e.$nodeToRelocate$, r["s-sn"]) && (o = X.find((e => e.$nodeToRelocate$ === r)), o && !e.$slotRefNode$ && (e.$slotRefNode$ = o.$slotRefNode$))
                                    }))) : X.some((e => e.$nodeToRelocate$ === r)) || X.push({
                                        $nodeToRelocate$: r
                                    }));
                                1 === t.nodeType && K(t)
                            }
                        },
                        Y = (e, t) => 1 === e.nodeType ? null === e.getAttribute("slot") && "" === t || e.getAttribute("slot") === t : e["s-sn"] === t || "" === t,
                        J = e => {
                            e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(J)
                        },
                        Q = (e, t) => {
                            const r = e.$hostElement$,
                                n = e.$cmpMeta$,
                                i = e.$vnode$ || $(null, null),
                                h = F(t) ? t : z(null, null, t);
                            if (a = r.tagName, n.$attrsToReflect$ && (h.$attrs$ = h.$attrs$ || {}, n.$attrsToReflect$.map((([e, t]) => h.$attrs$[t] = r[e]))), h.$tag$ = null, h.$flags$ |= 4, e.$vnode$ = h, h.$elm$ = i.$elm$ = r.shadowRoot || r, o = r["s-sc"], s = r["s-cr"], l = 0 != (1 & n.$flags$), c = !1, G(i, h), v.$flags$ |= 1, u) {
                                let e, t, r, n, i, o;
                                K(h.$elm$);
                                let s = 0;
                                for (; s < X.length; s++) e = X[s], t = e.$nodeToRelocate$, t["s-ol"] || (r = p.createTextNode(""), r["s-nr"] = t, t.parentNode.insertBefore(t["s-ol"] = r, t));
                                for (s = 0; s < X.length; s++)
                                    if (e = X[s], t = e.$nodeToRelocate$, e.$slotRefNode$) {
                                        for (n = e.$slotRefNode$.parentNode, i = e.$slotRefNode$.nextSibling, r = t["s-ol"]; r = r.previousSibling;)
                                            if (o = r["s-nr"], o && o["s-sn"] === t["s-sn"] && n === o.parentNode && (o = o.nextSibling, !o || !o["s-nr"])) {
                                                i = o;
                                                break
                                            }(!i && n !== t.parentNode || t.nextSibling !== i) && t !== i && (!t["s-hn"] && t["s-ol"] && (t["s-hn"] = t["s-ol"].parentNode.nodeName), n.insertBefore(t, i))
                                    } else 1 === t.nodeType && (t.hidden = !0)
                            }
                            c && q(h.$elm$), v.$flags$ &= -2, X.length = 0
                        },
                        ee = (e, t, r) => {
                            const n = e;
                            return {
                                emit: e => te(n, t, {
                                    bubbles: !!(4 & r),
                                    composed: !!(2 & r),
                                    cancelable: !!(1 & r),
                                    detail: e
                                })
                            }
                        },
                        te = (e, t, r) => {
                            const n = v.ce(t, r);
                            return e.dispatchEvent(n), n
                        },
                        re = (e, t) => {
                            e.$flags$ |= 16, e.$ancestorComponent$;
                            const r = () => ne(e, t);
                            return Oe(r)
                        },
                        ne = (e, t) => {
                            const r = e.$hostElement$,
                                n = (e.$cmpMeta$.$tagName$, () => {}),
                                i = r;
                            let o;
                            return t ? (ue(r, "componentWillLoad"), o = le(i, "componentWillLoad")) : (ue(r, "componentWillUpdate"), o = le(i, "componentWillUpdate")), ue(r, "componentWillRender"), o = ce(o, (() => le(i, "componentWillRender"))), n(), ce(o, (() => ie(e, i, t)))
                        },
                        ie = async (e, t, r) => {
                            const n = e.$hostElement$,
                                i = (e.$cmpMeta$.$tagName$, () => {});
                            n["s-rc"];
                            r && (e => {
                                const t = e.$cmpMeta$,
                                    r = e.$hostElement$,
                                    n = t.$flags$,
                                    i = (t.$tagName$, () => {}),
                                    o = _(r.shadowRoot ? r.shadowRoot : r.getRootNode(), t, e.$modeName$);
                                10 & n && (r["s-sc"] = o, r.classList.add(o + "-h"), 2 & n && r.classList.add(o + "-s")), i()
                            })(e);
                            const o = (e.$cmpMeta$.$tagName$, () => {});
                            oe(e, t, n), o(), i(), se(e)
                        }, oe = (e, t, r) => {
                            try {
                                d = t, t = t.render && t.render(), e.$flags$ &= -17, e.$flags$ |= 2, Q(e, t)
                            } catch (t) {
                                xe(t, e.$hostElement$)
                            }
                            return d = null, null
                        }, se = e => {
                            e.$cmpMeta$.$tagName$;
                            const t = e.$hostElement$,
                                r = () => {},
                                n = t;
                            e.$ancestorComponent$;
                            le(n, "componentDidRender"), ue(t, "componentDidRender"), 64 & e.$flags$ ? (le(n, "componentDidUpdate"), ue(t, "componentDidUpdate"), r()) : (e.$flags$ |= 64, le(n, "componentDidLoad"), ue(t, "componentDidLoad"), r())
                        }, ae = e => {
                            {
                                const t = we(e),
                                    r = t.$hostElement$.isConnected;
                                return r && 2 == (18 & t.$flags$) && re(t, !1), r
                            }
                        }, le = (e, t, r) => {
                            if (e && e[t]) try {
                                return e[t](r)
                            } catch (e) {
                                xe(e)
                            }
                        }, ce = (e, t) => e && e.then ? e.then(t) : t(), ue = (e, t) => {}, he = (e, t, r) => {
                            if (t.$members$) {
                                e.watchers && (t.$watchers$ = e.watchers);
                                const r = Object.entries(t.$members$),
                                    n = e.prototype;
                                r.map((([e, [r]]) => {
                                    (31 & r || 32 & r) && Object.defineProperty(n, e, {
                                        get() {
                                            return t = e, we(this).$instanceValues$.get(t);
                                            var t
                                        },
                                        set(r) {
                                            ((e, t, r, n) => {
                                                const i = we(e),
                                                    o = e,
                                                    s = i.$instanceValues$.get(t),
                                                    a = i.$flags$,
                                                    l = o;
                                                var c, u;
                                                if (c = r, u = n.$members$[t][0], (r = null == c || R(c) ? c : 4 & u ? "false" !== c && ("" === c || !!c) : 2 & u ? parseFloat(c) : 1 & u ? String(c) : c) !== s && (i.$instanceValues$.set(t, r), 1)) {
                                                    if (n.$watchers$ && 128 & a) {
                                                        const e = n.$watchers$[t];
                                                        e && e.map((e => {
                                                            try {
                                                                l[e](r, s, t)
                                                            } catch (e) {
                                                                xe(e, o)
                                                            }
                                                        }))
                                                    }
                                                    if (2 == (18 & a)) {
                                                        if (l.componentShouldUpdate && !1 === l.componentShouldUpdate(r, s, t)) return;
                                                        re(i, !1)
                                                    }
                                                }
                                            })(this, e, r, t)
                                        },
                                        configurable: !0,
                                        enumerable: !0
                                    })
                                })); {
                                    const i = new Map;
                                    n.attributeChangedCallback = function(e, t, r) {
                                        v.jmp((() => {
                                            const t = i.get(e);
                                            this[t] = (null !== r || "boolean" != typeof this[t]) && r
                                        }))
                                    }, e.observedAttributes = r.filter((([e, t]) => 15 & t[0])).map((([e, r]) => {
                                        const n = r[1] || e;
                                        return i.set(n, e), 512 & r[0] && t.$attrsToReflect$.push([e, n]), n
                                    }))
                                }
                            }
                            return e
                        }, de = async (e, t, r, n, i) => {
                            if (0 == (32 & t.$flags$) && (i = e.constructor, t.$flags$ |= 160, i.style)) {
                                let n = i.style;
                                "string" != typeof n && (n = n[t.$modeName$ = (e => Se.map((t => t(e))).find((e => !!e)))(e)]);
                                const o = E(r, t.$modeName$);
                                if (!ye.has(o)) {
                                    const e = (r.$tagName$, () => {});
                                    ((e, t, r) => {
                                        let n = ye.get(e);
                                        C && r ? (n = n || new CSSStyleSheet, n.replace(t)) : n = t, ye.set(e, n)
                                    })(o, n, !!(1 & r.$flags$)), e()
                                }
                            }
                            t.$ancestorComponent$;
                            const o = () => re(t, !0);
                            o()
                        }, ge = e => {}, fe = e => {
                            const t = e["s-cr"] = p.createComment("");
                            t["s-cn"] = !0, e.insertBefore(t, e.firstChild)
                        }, pe = (e, t) => {
                            const r = {
                                $flags$: t[0],
                                $tagName$: t[1]
                            };
                            r.$members$ = t[2], r.$listeners$ = t[3], r.$watchers$ = e.$watchers$, r.$attrsToReflect$ = [];
                            const n = e.prototype.connectedCallback,
                                i = e.prototype.disconnectedCallback;
                            return Object.assign(e.prototype, {
                                __registerHost() {
                                    be(this, r)
                                },
                                connectedCallback() {
                                    (e => {
                                        if (0 == (1 & v.$flags$)) {
                                            const t = we(e),
                                                r = t.$cmpMeta$,
                                                n = (r.$tagName$, () => {});
                                            if (1 & t.$flags$) w(e, t, r.$listeners$), ge(t.$lazyInstance$);
                                            else {
                                                let n;
                                                t.$flags$ |= 1, !n && 12 & r.$flags$ && fe(e), de(e, t, r)
                                            }
                                            n()
                                        }
                                    })(this), n && n.call(this)
                                },
                                disconnectedCallback() {
                                    (e => {
                                        if (0 == (1 & v.$flags$)) {
                                            const t = we(e);
                                            t.$rmListeners$ && (t.$rmListeners$.map((e => e())), t.$rmListeners$ = void 0)
                                        }
                                    })(this), i && i.call(this)
                                }
                            }), e.is = r.$tagName$, he(e, r)
                        }, ve = e => v.$resourcesUrl$ = e, me = e => Object.assign(v, e), Ce = new WeakMap, we = e => Ce.get(e), be = (e, t) => {
                            const r = {
                                $flags$: 0,
                                $hostElement$: e,
                                $cmpMeta$: t,
                                $instanceValues$: new Map
                            };
                            return w(e, r, t.$listeners$), Ce.set(e, r)
                        }, Le = (e, t) => t in e, xe = (e, t) => (0, console.error)(e, t), ye = new Map, Se = [], _e = [], Ee = [], ke = (e, t) => r => {
                            e.push(r), g || (g = !0, t && 4 & v.$flags$ ? $e(ze) : v.raf(ze))
                        }, Re = e => {
                            for (let t = 0; t < e.length; t++) try {
                                e[t](performance.now())
                            } catch (e) {
                                xe(e)
                            }
                            e.length = 0
                        }, ze = () => {
                            Re(_e), Re(Ee), (g = _e.length > 0) && v.raf(ze)
                        }, $e = e => Promise.resolve(undefined).then(e), Oe = ke(Ee, !0);
                    class Fe {
                        constructor() {
                            this.defaultRowSize = 32
                        }
                    }
                    class je {
                        constructor() {
                            this.defaultRowSize = 27
                        }
                    }
                    class Te {
                        constructor() {
                            this.defaultRowSize = 42
                        }
                    }
                    const Pe = "default",
                        De = [Pe, "material", "compact", "darkMaterial", "darkCompact"];
                    class Me {
                        constructor(e) {
                            this.customRowSize = 0, this.customRowSize = e.rowSize, this.register("default")
                        }
                        get theme() {
                            return this.currentTheme
                        }
                        get rowSize() {
                            return this.customRowSize || this.currentTheme.defaultRowSize
                        }
                        set rowSize(e) {
                            this.customRowSize = e
                        }
                        register(e) {
                            switch (Me.getTheme(e)) {
                                case "material":
                                case "darkMaterial":
                                    this.currentTheme = new Te;
                                    break;
                                case "compact":
                                case "darkCompact":
                                    this.currentTheme = new Fe;
                                    break;
                                default:
                                    this.currentTheme = new je
                            }
                        }
                        static getTheme(e) {
                            return De.indexOf(e) > -1 ? e : Pe
                        }
                    }
                    var Ae;
                    Ae = e => {
                        let t = e.theme || e.getAttribute("theme");
                        "string" == typeof t && (t = t.trim());
                        const r = Me.getTheme(t);
                        return r !== t && e.setAttribute("theme", r), r
                    }, Se.push(Ae);
                    var Ie = function(e, t, r, n) {
                            var i = -1,
                                o = null == e ? 0 : e.length;
                            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
                            return r
                        },
                        He = function(e, t, r) {
                            for (var n = -1, i = Object(e), o = r(e), s = o.length; s--;) {
                                var a = o[++n];
                                if (!1 === t(i[a], a, i)) break
                            }
                            return e
                        },
                        Ne = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {};

                    function Be(e, t, r) {
                        return e(r = {
                            path: t,
                            exports: {},
                            require: function(e, t) {
                                return function() {
                                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                                }()
                            }
                        }, r.exports), r.exports
                    }
                    var Ue = "object" == typeof Ne && Ne && Ne.Object === Object && Ne,
                        We = "object" == typeof self && self && self.Object === Object && self,
                        Ve = Ue || We || Function("return this")(),
                        Ze = Ve.Symbol,
                        Ge = Object.prototype,
                        qe = Ge.hasOwnProperty,
                        Xe = Ge.toString,
                        Ke = Ze ? Ze.toStringTag : void 0,
                        Ye = Object.prototype.toString,
                        Je = Ze ? Ze.toStringTag : void 0,
                        Qe = function(e) {
                            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Je && Je in Object(e) ? function(e) {
                                var t = qe.call(e, Ke),
                                    r = e[Ke];
                                try {
                                    e[Ke] = void 0;
                                    var n = !0
                                } catch (e) {}
                                var i = Xe.call(e);
                                return n && (t ? e[Ke] = r : delete e[Ke]), i
                            }(e) : function(e) {
                                return Ye.call(e)
                            }(e)
                        },
                        et = function(e) {
                            return null != e && "object" == typeof e
                        },
                        tt = function(e) {
                            return et(e) && "[object Arguments]" == Qe(e)
                        },
                        rt = Object.prototype,
                        nt = rt.hasOwnProperty,
                        it = rt.propertyIsEnumerable,
                        ot = tt(function() {
                            return arguments
                        }()) ? tt : function(e) {
                            return et(e) && nt.call(e, "callee") && !it.call(e, "callee")
                        },
                        st = Array.isArray,
                        at = function() {
                            return !1
                        },
                        lt = Be((function(e, t) {
                            var r = t && !t.nodeType && t,
                                n = r && e && !e.nodeType && e,
                                i = n && n.exports === r ? Ve.Buffer : void 0,
                                o = (i ? i.isBuffer : void 0) || at;
                            e.exports = o
                        })),
                        ct = /^(?:0|[1-9]\d*)$/,
                        ut = function(e, t) {
                            var r = typeof e;
                            return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && ct.test(e)) && e > -1 && e % 1 == 0 && e < t
                        },
                        ht = function(e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                        },
                        dt = {};
                    dt["[object Float32Array]"] = dt["[object Float64Array]"] = dt["[object Int8Array]"] = dt["[object Int16Array]"] = dt["[object Int32Array]"] = dt["[object Uint8Array]"] = dt["[object Uint8ClampedArray]"] = dt["[object Uint16Array]"] = dt["[object Uint32Array]"] = !0, dt["[object Arguments]"] = dt["[object Array]"] = dt["[object ArrayBuffer]"] = dt["[object Boolean]"] = dt["[object DataView]"] = dt["[object Date]"] = dt["[object Error]"] = dt["[object Function]"] = dt["[object Map]"] = dt["[object Number]"] = dt["[object Object]"] = dt["[object RegExp]"] = dt["[object Set]"] = dt["[object String]"] = dt["[object WeakMap]"] = !1;
                    var gt, ft = Be((function(e, t) {
                            var r = t && !t.nodeType && t,
                                n = r && e && !e.nodeType && e,
                                i = n && n.exports === r && Ue.process,
                                o = function() {
                                    try {
                                        return n && n.require && n.require("util").types || i && i.binding && i.binding("util")
                                    } catch (e) {}
                                }();
                            e.exports = o
                        })),
                        pt = ft && ft.isTypedArray,
                        vt = pt ? (gt = pt, function(e) {
                            return gt(e)
                        }) : function(e) {
                            return et(e) && ht(e.length) && !!dt[Qe(e)]
                        },
                        mt = Object.prototype.hasOwnProperty,
                        Ct = function(e, t) {
                            var r = st(e),
                                n = !r && ot(e),
                                i = !r && !n && lt(e),
                                o = !r && !n && !i && vt(e),
                                s = r || n || i || o,
                                a = s ? function(e, t) {
                                    for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                                    return n
                                }(e.length, String) : [],
                                l = a.length;
                            for (var c in e) !t && !mt.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || ut(c, l)) || a.push(c);
                            return a
                        },
                        wt = Object.prototype,
                        bt = function(e, t) {
                            return function(r) {
                                return e(t(r))
                            }
                        }(Object.keys, Object),
                        Lt = Object.prototype.hasOwnProperty,
                        xt = function(e) {
                            if (r = (t = e) && t.constructor, t !== ("function" == typeof r && r.prototype || wt)) return bt(e);
                            var t, r, n = [];
                            for (var i in Object(e)) Lt.call(e, i) && "constructor" != i && n.push(i);
                            return n
                        },
                        yt = function(e) {
                            var t = typeof e;
                            return null != e && ("object" == t || "function" == t)
                        },
                        St = function(e) {
                            if (!yt(e)) return !1;
                            var t = Qe(e);
                            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                        },
                        _t = function(e) {
                            return null != e && ht(e.length) && !St(e)
                        },
                        Et = function(e) {
                            return _t(e) ? Ct(e) : xt(e)
                        },
                        kt = function(e, t) {
                            if (null == e) return e;
                            if (!_t(e)) return function(e, t) {
                                return e && He(e, t, Et)
                            }(e, t);
                            for (var r = e.length, n = -1, i = Object(e); ++n < r && !1 !== t(i[n], n, i););
                            return e
                        },
                        Rt = function(e, t) {
                            return e === t || e != e && t != t
                        },
                        zt = function(e, t) {
                            for (var r = e.length; r--;)
                                if (Rt(e[r][0], t)) return r;
                            return -1
                        },
                        $t = Array.prototype.splice;

                    function Ot(e) {
                        var t = -1,
                            r = null == e ? 0 : e.length;
                        for (this.clear(); ++t < r;) {
                            var n = e[t];
                            this.set(n[0], n[1])
                        }
                    }
                    Ot.prototype.clear = function() {
                        this.__data__ = [], this.size = 0
                    }, Ot.prototype.delete = function(e) {
                        var t = this.__data__,
                            r = zt(t, e);
                        return !(r < 0 || (r == t.length - 1 ? t.pop() : $t.call(t, r, 1), --this.size, 0))
                    }, Ot.prototype.get = function(e) {
                        var t = this.__data__,
                            r = zt(t, e);
                        return r < 0 ? void 0 : t[r][1]
                    }, Ot.prototype.has = function(e) {
                        return zt(this.__data__, e) > -1
                    }, Ot.prototype.set = function(e, t) {
                        var r = this.__data__,
                            n = zt(r, e);
                        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
                    };
                    var Ft, jt = Ot,
                        Tt = Ve["__core-js_shared__"],
                        Pt = (Ft = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ft : "",
                        Dt = Function.prototype.toString,
                        Mt = function(e) {
                            if (null != e) {
                                try {
                                    return Dt.call(e)
                                } catch (e) {}
                                try {
                                    return e + ""
                                } catch (e) {}
                            }
                            return ""
                        },
                        At = /^\[object .+?Constructor\]$/,
                        It = Function.prototype,
                        Ht = Object.prototype,
                        Nt = It.toString,
                        Bt = Ht.hasOwnProperty,
                        Ut = RegExp("^" + Nt.call(Bt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Wt = function(e) {
                            return !(!yt(e) || function(e) {
                                return !!Pt && Pt in e
                            }(e)) && (St(e) ? Ut : At).test(Mt(e))
                        },
                        Vt = function(e, t) {
                            var r = function(e, t) {
                                return null == e ? void 0 : e[t]
                            }(e, t);
                            return Wt(r) ? r : void 0
                        },
                        Zt = Vt(Ve, "Map"),
                        Gt = Vt(Object, "create"),
                        qt = Object.prototype.hasOwnProperty,
                        Xt = Object.prototype.hasOwnProperty;

                    function Kt(e) {
                        var t = -1,
                            r = null == e ? 0 : e.length;
                        for (this.clear(); ++t < r;) {
                            var n = e[t];
                            this.set(n[0], n[1])
                        }
                    }
                    Kt.prototype.clear = function() {
                        this.__data__ = Gt ? Gt(null) : {}, this.size = 0
                    }, Kt.prototype.delete = function(e) {
                        var t = this.has(e) && delete this.__data__[e];
                        return this.size -= t ? 1 : 0, t
                    }, Kt.prototype.get = function(e) {
                        var t = this.__data__;
                        if (Gt) {
                            var r = t[e];
                            return "__lodash_hash_undefined__" === r ? void 0 : r
                        }
                        return qt.call(t, e) ? t[e] : void 0
                    }, Kt.prototype.has = function(e) {
                        var t = this.__data__;
                        return Gt ? void 0 !== t[e] : Xt.call(t, e)
                    }, Kt.prototype.set = function(e, t) {
                        var r = this.__data__;
                        return this.size += this.has(e) ? 0 : 1, r[e] = Gt && void 0 === t ? "__lodash_hash_undefined__" : t, this
                    };
                    var Yt = Kt,
                        Jt = function(e, t) {
                            var r, n, i = e.__data__;
                            return ("string" == (n = typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof t ? "string" : "hash"] : i.map
                        };

                    function Qt(e) {
                        var t = -1,
                            r = null == e ? 0 : e.length;
                        for (this.clear(); ++t < r;) {
                            var n = e[t];
                            this.set(n[0], n[1])
                        }
                    }
                    Qt.prototype.clear = function() {
                        this.size = 0, this.__data__ = {
                            hash: new Yt,
                            map: new(Zt || jt),
                            string: new Yt
                        }
                    }, Qt.prototype.delete = function(e) {
                        var t = Jt(this, e).delete(e);
                        return this.size -= t ? 1 : 0, t
                    }, Qt.prototype.get = function(e) {
                        return Jt(this, e).get(e)
                    }, Qt.prototype.has = function(e) {
                        return Jt(this, e).has(e)
                    }, Qt.prototype.set = function(e, t) {
                        var r = Jt(this, e),
                            n = r.size;
                        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
                    };
                    var er = Qt;

                    function tr(e) {
                        var t = this.__data__ = new jt(e);
                        this.size = t.size
                    }
                    tr.prototype.clear = function() {
                        this.__data__ = new jt, this.size = 0
                    }, tr.prototype.delete = function(e) {
                        var t = this.__data__,
                            r = t.delete(e);
                        return this.size = t.size, r
                    }, tr.prototype.get = function(e) {
                        return this.__data__.get(e)
                    }, tr.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }, tr.prototype.set = function(e, t) {
                        var r = this.__data__;
                        if (r instanceof jt) {
                            var n = r.__data__;
                            if (!Zt || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                            r = this.__data__ = new er(n)
                        }
                        return r.set(e, t), this.size = r.size, this
                    };
                    var rr = tr;

                    function nr(e) {
                        var t = -1,
                            r = null == e ? 0 : e.length;
                        for (this.__data__ = new er; ++t < r;) this.add(e[t])
                    }
                    nr.prototype.add = nr.prototype.push = function(e) {
                        return this.__data__.set(e, "__lodash_hash_undefined__"), this
                    }, nr.prototype.has = function(e) {
                        return this.__data__.has(e)
                    };
                    var ir = nr,
                        or = function(e, t) {
                            for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                                if (t(e[r], r, e)) return !0;
                            return !1
                        },
                        sr = function(e, t, r, n, i, o) {
                            var s = 1 & r,
                                a = e.length,
                                l = t.length;
                            if (a != l && !(s && l > a)) return !1;
                            var c = o.get(e),
                                u = o.get(t);
                            if (c && u) return c == t && u == e;
                            var h = -1,
                                d = !0,
                                g = 2 & r ? new ir : void 0;
                            for (o.set(e, t), o.set(t, e); ++h < a;) {
                                var f = e[h],
                                    p = t[h];
                                if (n) var v = s ? n(p, f, h, t, e, o) : n(f, p, h, e, t, o);
                                if (void 0 !== v) {
                                    if (v) continue;
                                    d = !1;
                                    break
                                }
                                if (g) {
                                    if (!or(t, (function(e, t) {
                                            if (s = t, !g.has(s) && (f === e || i(f, e, r, n, o))) return g.push(t);
                                            var s
                                        }))) {
                                        d = !1;
                                        break
                                    }
                                } else if (f !== p && !i(f, p, r, n, o)) {
                                    d = !1;
                                    break
                                }
                            }
                            return o.delete(e), o.delete(t), d
                        },
                        ar = Ve.Uint8Array,
                        lr = function(e) {
                            var t = -1,
                                r = Array(e.size);
                            return e.forEach((function(e, n) {
                                r[++t] = [n, e]
                            })), r
                        },
                        cr = function(e) {
                            var t = -1,
                                r = Array(e.size);
                            return e.forEach((function(e) {
                                r[++t] = e
                            })), r
                        },
                        ur = Ze ? Ze.prototype : void 0,
                        hr = ur ? ur.valueOf : void 0,
                        dr = Object.prototype.propertyIsEnumerable,
                        gr = Object.getOwnPropertySymbols,
                        fr = gr ? function(e) {
                            return null == e ? [] : (e = Object(e), function(e, t) {
                                for (var r = -1, n = null == e ? 0 : e.length, i = 0, o = []; ++r < n;) {
                                    var s = e[r];
                                    t(s, r, e) && (o[i++] = s)
                                }
                                return o
                            }(gr(e), (function(t) {
                                return dr.call(e, t)
                            })))
                        } : function() {
                            return []
                        },
                        pr = function(e) {
                            return function(e, t, r) {
                                var n = t(e);
                                return st(e) ? n : function(e, t) {
                                    for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
                                    return e
                                }(n, r(e))
                            }(e, Et, fr)
                        },
                        vr = Object.prototype.hasOwnProperty,
                        mr = Vt(Ve, "DataView"),
                        Cr = Vt(Ve, "Promise"),
                        wr = Vt(Ve, "Set"),
                        br = Vt(Ve, "WeakMap"),
                        Lr = "[object Map]",
                        xr = "[object Promise]",
                        yr = "[object Set]",
                        Sr = "[object WeakMap]",
                        _r = "[object DataView]",
                        Er = Mt(mr),
                        kr = Mt(Zt),
                        Rr = Mt(Cr),
                        zr = Mt(wr),
                        $r = Mt(br),
                        Or = Qe;
                    (mr && Or(new mr(new ArrayBuffer(1))) != _r || Zt && Or(new Zt) != Lr || Cr && Or(Cr.resolve()) != xr || wr && Or(new wr) != yr || br && Or(new br) != Sr) && (Or = function(e) {
                        var t = Qe(e),
                            r = "[object Object]" == t ? e.constructor : void 0,
                            n = r ? Mt(r) : "";
                        if (n) switch (n) {
                            case Er:
                                return _r;
                            case kr:
                                return Lr;
                            case Rr:
                                return xr;
                            case zr:
                                return yr;
                            case $r:
                                return Sr
                        }
                        return t
                    });
                    var Fr = Or,
                        jr = "[object Arguments]",
                        Tr = "[object Array]",
                        Pr = "[object Object]",
                        Dr = Object.prototype.hasOwnProperty,
                        Mr = function(e, t, r, n, i, o) {
                            var s = st(e),
                                a = st(t),
                                l = s ? Tr : Fr(e),
                                c = a ? Tr : Fr(t),
                                u = (l = l == jr ? Pr : l) == Pr,
                                h = (c = c == jr ? Pr : c) == Pr,
                                d = l == c;
                            if (d && lt(e)) {
                                if (!lt(t)) return !1;
                                s = !0, u = !1
                            }
                            if (d && !u) return o || (o = new rr), s || vt(e) ? sr(e, t, r, n, i, o) : function(e, t, r, n, i, o, s) {
                                switch (r) {
                                    case "[object DataView]":
                                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                        e = e.buffer, t = t.buffer;
                                    case "[object ArrayBuffer]":
                                        return !(e.byteLength != t.byteLength || !o(new ar(e), new ar(t)));
                                    case "[object Boolean]":
                                    case "[object Date]":
                                    case "[object Number]":
                                        return Rt(+e, +t);
                                    case "[object Error]":
                                        return e.name == t.name && e.message == t.message;
                                    case "[object RegExp]":
                                    case "[object String]":
                                        return e == t + "";
                                    case "[object Map]":
                                        var a = lr;
                                    case "[object Set]":
                                        var l = 1 & n;
                                        if (a || (a = cr), e.size != t.size && !l) return !1;
                                        var c = s.get(e);
                                        if (c) return c == t;
                                        n |= 2, s.set(e, t);
                                        var u = sr(a(e), a(t), n, i, o, s);
                                        return s.delete(e), u;
                                    case "[object Symbol]":
                                        if (hr) return hr.call(e) == hr.call(t)
                                }
                                return !1
                            }(e, t, l, r, n, i, o);
                            if (!(1 & r)) {
                                var g = u && Dr.call(e, "__wrapped__"),
                                    f = h && Dr.call(t, "__wrapped__");
                                if (g || f) {
                                    var p = g ? e.value() : e,
                                        v = f ? t.value() : t;
                                    return o || (o = new rr), i(p, v, r, n, o)
                                }
                            }
                            return !!d && (o || (o = new rr), function(e, t, r, n, i, o) {
                                var s = 1 & r,
                                    a = pr(e),
                                    l = a.length;
                                if (l != pr(t).length && !s) return !1;
                                for (var c = l; c--;) {
                                    var u = a[c];
                                    if (!(s ? u in t : vr.call(t, u))) return !1
                                }
                                var h = o.get(e),
                                    d = o.get(t);
                                if (h && d) return h == t && d == e;
                                var g = !0;
                                o.set(e, t), o.set(t, e);
                                for (var f = s; ++c < l;) {
                                    var p = e[u = a[c]],
                                        v = t[u];
                                    if (n) var m = s ? n(v, p, u, t, e, o) : n(p, v, u, e, t, o);
                                    if (!(void 0 === m ? p === v || i(p, v, r, n, o) : m)) {
                                        g = !1;
                                        break
                                    }
                                    f || (f = "constructor" == u)
                                }
                                if (g && !f) {
                                    var C = e.constructor,
                                        w = t.constructor;
                                    C == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof C && C instanceof C && "function" == typeof w && w instanceof w || (g = !1)
                                }
                                return o.delete(e), o.delete(t), g
                            }(e, t, r, n, i, o))
                        },
                        Ar = function e(t, r, n, i, o) {
                            return t === r || (null == t || null == r || !et(t) && !et(r) ? t != t && r != r : Mr(t, r, n, i, e, o))
                        },
                        Ir = function(e) {
                            return e == e && !yt(e)
                        },
                        Hr = function(e, t) {
                            return function(r) {
                                return null != r && r[e] === t && (void 0 !== t || e in Object(r))
                            }
                        },
                        Nr = function(e) {
                            var t = function(e) {
                                for (var t = Et(e), r = t.length; r--;) {
                                    var n = t[r],
                                        i = e[n];
                                    t[r] = [n, i, Ir(i)]
                                }
                                return t
                            }(e);
                            return 1 == t.length && t[0][2] ? Hr(t[0][0], t[0][1]) : function(r) {
                                return r === e || function(e, t, r, n) {
                                    var i = r.length,
                                        o = i,
                                        s = !n;
                                    if (null == e) return !o;
                                    for (e = Object(e); i--;) {
                                        var a = r[i];
                                        if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
                                    }
                                    for (; ++i < o;) {
                                        var l = (a = r[i])[0],
                                            c = e[l],
                                            u = a[1];
                                        if (s && a[2]) {
                                            if (void 0 === c && !(l in e)) return !1
                                        } else {
                                            var h = new rr;
                                            if (n) var d = n(c, u, l, e, t, h);
                                            if (!(void 0 === d ? Ar(u, c, 3, n, h) : d)) return !1
                                        }
                                    }
                                    return !0
                                }(r, e, t)
                            }
                        },
                        Br = function(e) {
                            return "symbol" == typeof e || et(e) && "[object Symbol]" == Qe(e)
                        },
                        Ur = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        Wr = /^\w*$/,
                        Vr = function(e, t) {
                            if (st(e)) return !1;
                            var r = typeof e;
                            return !("number" != r && "symbol" != r && "boolean" != r && null != e && !Br(e)) || Wr.test(e) || !Ur.test(e) || null != t && e in Object(t)
                        };

                    function Zr(e, t) {
                        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                        var r = function() {
                            var n = arguments,
                                i = t ? t.apply(this, n) : n[0],
                                o = r.cache;
                            if (o.has(i)) return o.get(i);
                            var s = e.apply(this, n);
                            return r.cache = o.set(i, s) || o, s
                        };
                        return r.cache = new(Zr.Cache || er), r
                    }
                    Zr.Cache = er;
                    var Gr, qr, Xr, Kr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        Yr = /\\(\\)?/g,
                        Jr = (Gr = Zr((function(e) {
                            var t = [];
                            return 46 === e.charCodeAt(0) && t.push(""), e.replace(Kr, (function(e, r, n, i) {
                                t.push(n ? i.replace(Yr, "$1") : r || e)
                            })), t
                        }), (function(e) {
                            return 500 === qr.size && qr.clear(), e
                        })), qr = Gr.cache, Gr),
                        Qr = function(e, t) {
                            for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
                            return i
                        },
                        en = Ze ? Ze.prototype : void 0,
                        tn = en ? en.toString : void 0,
                        rn = function e(t) {
                            if ("string" == typeof t) return t;
                            if (st(t)) return Qr(t, e) + "";
                            if (Br(t)) return tn ? tn.call(t) : "";
                            var r = t + "";
                            return "0" == r && 1 / t == -1 / 0 ? "-0" : r
                        },
                        nn = function(e) {
                            return null == e ? "" : rn(e)
                        },
                        on = function(e, t) {
                            return st(e) ? e : Vr(e, t) ? [e] : Jr(nn(e))
                        },
                        sn = function(e) {
                            if ("string" == typeof e || Br(e)) return e;
                            var t = e + "";
                            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                        },
                        an = function(e, t) {
                            for (var r = 0, n = (t = on(t, e)).length; null != e && r < n;) e = e[sn(t[r++])];
                            return r && r == n ? e : void 0
                        },
                        ln = function(e, t) {
                            return null != e && t in Object(e)
                        },
                        cn = function(e, t) {
                            return null != e && function(e, t, r) {
                                for (var n = -1, i = (t = on(t, e)).length, o = !1; ++n < i;) {
                                    var s = sn(t[n]);
                                    if (!(o = null != e && r(e, s))) break;
                                    e = e[s]
                                }
                                return o || ++n != i ? o : !!(i = null == e ? 0 : e.length) && ht(i) && ut(s, i) && (st(e) || ot(e))
                            }(e, t, ln)
                        },
                        un = function(e, t) {
                            return Vr(e) && Ir(t) ? Hr(sn(e), t) : function(r) {
                                var n = function(e, t, r) {
                                    var n = null == e ? void 0 : an(e, t);
                                    return void 0 === n ? r : n
                                }(r, e);
                                return void 0 === n && n === t ? cn(r, e) : Ar(t, n, 3)
                            }
                        },
                        hn = function(e) {
                            return e
                        },
                        dn = function(e) {
                            return function(t) {
                                return null == t ? void 0 : t[e]
                            }
                        },
                        gn = function(e) {
                            return Vr(e) ? dn(sn(e)) : function(e) {
                                return function(t) {
                                    return an(t, e)
                                }
                            }(e)
                        },
                        fn = function(e) {
                            return "function" == typeof e ? e : null == e ? hn : "object" == typeof e ? st(e) ? un(e[0], e[1]) : Nr(e) : gn(e)
                        },
                        pn = function(e, t, r, n, i) {
                            return i(e, (function(e, i, o) {
                                r = n ? (n = !1, e) : t(r, e, i, o)
                            })), r
                        },
                        vn = function(e, t, r) {
                            var n = st(e) ? Ie : pn,
                                i = arguments.length < 3;
                            return n(e, fn(t), r, i, kt)
                        },
                        mn = function(e, t) {
                            for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
                            return e
                        },
                        Cn = function(e, t) {
                            return (st(e) ? mn : kt)(e, "function" == typeof(r = t) ? r : hn);
                            var r
                        },
                        wn = function(e, t, r, n) {
                            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                                if (t(e[o], o, e)) return o;
                            return -1
                        },
                        bn = /\s/,
                        Ln = /^\s+/,
                        xn = function(e) {
                            return e ? e.slice(0, function(e) {
                                for (var t = e.length; t-- && bn.test(e.charAt(t)););
                                return t
                            }(e) + 1).replace(Ln, "") : e
                        },
                        yn = /^[-+]0x[0-9a-f]+$/i,
                        Sn = /^0b[01]+$/i,
                        _n = /^0o[0-7]+$/i,
                        En = parseInt,
                        kn = function(e) {
                            if ("number" == typeof e) return e;
                            if (Br(e)) return NaN;
                            if (yt(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = yt(t) ? t + "" : t
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = xn(e);
                            var r = Sn.test(e);
                            return r || _n.test(e) ? En(e.slice(2), r ? 2 : 8) : yn.test(e) ? NaN : +e
                        },
                        Rn = function(e) {
                            return e ? Infinity === (e = kn(e)) || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                        },
                        zn = function(e) {
                            var t = Rn(e),
                                r = t % 1;
                            return t == t ? r ? t - r : t : 0
                        },
                        $n = Math.max,
                        On = function(e, t, r) {
                            var n = null == e ? 0 : e.length;
                            if (!n) return -1;
                            var i = null == r ? 0 : zn(r);
                            return i < 0 && (i = $n(n + i, 0)), wn(e, fn(t), i)
                        },
                        Fn = (Xr = On, function(e, t, r) {
                            var n = Object(e);
                            if (!_t(e)) {
                                var i = fn(t);
                                e = Et(e), t = function(e) {
                                    return i(n[e], e, n)
                                }
                            }
                            var o = Xr(e, t, r);
                            return o > -1 ? n[i ? e[o] : o] : void 0
                        });
                    const jn = e => !("isConnected" in e) || e.isConnected,
                        Tn = ((e, t) => {
                            let r;
                            return (...e) => {
                                r && clearTimeout(r), r = setTimeout((() => {
                                    r = 0, (e => {
                                        for (let t of e.keys()) e.set(t, e.get(t).filter(jn))
                                    })(...e)
                                }), 2e3)
                            }
                        })(),
                        Pn = (e, t) => {
                            const r = ((e, t = ((e, t) => e !== t)) => {
                                let r = new Map(Object.entries(null != e ? e : {}));
                                const n = {
                                        dispose: [],
                                        get: [],
                                        set: [],
                                        reset: []
                                    },
                                    i = () => {
                                        r = new Map(Object.entries(null != e ? e : {})), n.reset.forEach((e => e()))
                                    },
                                    o = e => (n.get.forEach((t => t(e))), r.get(e)),
                                    s = (e, i) => {
                                        const o = r.get(e);
                                        t(i, o, e) && (r.set(e, i), n.set.forEach((t => t(e, i, o))))
                                    },
                                    a = "undefined" == typeof Proxy ? {} : new Proxy(e, {
                                        get: (e, t) => o(t),
                                        ownKeys: e => Array.from(r.keys()),
                                        getOwnPropertyDescriptor: () => ({
                                            enumerable: !0,
                                            configurable: !0
                                        }),
                                        has: (e, t) => r.has(t),
                                        set: (e, t, r) => (s(t, r), !0)
                                    }),
                                    l = (e, t) => (n[e].push(t), () => {
                                        ((e, t) => {
                                            const r = e.indexOf(t);
                                            r >= 0 && (e[r] = e[e.length - 1], e.length--)
                                        })(n[e], t)
                                    });
                                return {
                                    state: a,
                                    get: o,
                                    set: s,
                                    on: l,
                                    onChange: (t, r) => {
                                        const n = l("set", ((e, n) => {
                                                e === t && r(n)
                                            })),
                                            i = l("reset", (() => r(e[t])));
                                        return () => {
                                            n(), i()
                                        }
                                    },
                                    use: (...e) => e.forEach((e => {
                                        e.set && l("set", e.set), e.get && l("get", e.get), e.reset && l("reset", e.reset)
                                    })),
                                    dispose: () => {
                                        n.dispose.forEach((e => e())), i()
                                    },
                                    reset: i
                                }
                            })(e, t);
                            return (({
                                on: e
                            }) => {
                                const t = new Map;
                                e("dispose", (() => {
                                    t.clear()
                                })), e("get", (e => {
                                    d && ((e, t, r) => {
                                        const n = e.get(t);
                                        n ? n.includes(r) || n.push(r) : e.set(t, [r])
                                    })(t, e, d)
                                })), e("set", (e => {
                                    const r = t.get(e);
                                    r && t.set(e, r.filter(ae)), Tn(t)
                                })), e("reset", (() => {
                                    t.forEach((e => e.forEach(ae))), Tn(t)
                                }))
                            })(r), r
                        };
                    var Dn = Math.ceil,
                        Mn = Math.max,
                        An = function(e, t, r) {
                            if (!yt(r)) return !1;
                            var n = typeof t;
                            return !!("number" == n ? _t(r) && ut(t, r.length) : "string" == n && t in r) && Rt(r[t], e)
                        },
                        In = function(e, t, r) {
                            return r && "number" != typeof r && An(e, t, r) && (t = r = void 0), e = Rn(e), void 0 === t ? (t = e, e = 0) : t = Rn(t),
                                function(e, t, r, n) {
                                    for (var i = -1, o = Mn(Dn((t - e) / (r || 1)), 0), s = Array(o); o--;) s[n ? o : ++i] = e, e += r;
                                    return s
                                }(e, t, r = void 0 === r ? e < t ? 1 : -1 : Rn(r), void 0)
                        };

                    function Hn(e, t) {
                        for (let r in t) e.set(r, t[r])
                    }
                    class Nn {
                        constructor(e) {
                            const t = this.dataStore = Pn({
                                items: [],
                                proxyItems: [],
                                source: [],
                                groupingDepth: 0,
                                groups: {},
                                type: e,
                                trimmed: {}
                            });
                            t.use((e => ({
                                set(t, r) {
                                    if (! function(e) {
                                            return "proxyItems" === e
                                        }(t)) return;
                                    const n = e.get("items").reduce(((e, t) => (e[t] = !0, e)), {}),
                                        i = r.reduce(((e, t) => (n[t] && e.push(t), e)), []);
                                    e.set("items", i)
                                }
                            }))(t)), t.use((e => ({
                                set(t, r) {
                                    switch (t) {
                                        case "trimmed":
                                            const t = e.get("proxyItems"),
                                                n = function(e) {
                                                    const t = {};
                                                    for (let r in e)
                                                        for (let n in e[r]) t[n] = t[n] || e[r][n];
                                                    return t
                                                }(r),
                                                i = t.reduce(((e, t) => (n[t] || e.push(t), e)), []);
                                            e.set("items", i)
                                    }
                                }
                            }))(t))
                        }
                        get store() {
                            return this.dataStore
                        }
                        updateData(e, t, r = !1) {
                            r || this.store.set("trimmed", {}), this.store.set("items", []);
                            const n = In(0, (null == e ? void 0 : e.length) || 0);
                            Hn(this.store, {
                                source: e,
                                proxyItems: [...n]
                            }), this.store.set("items", n), t && Hn(this.store, {
                                groupingDepth: t.depth,
                                groups: t.groups
                            })
                        }
                        addTrimmed(e) {
                            let t = this.store.get("trimmed");
                            t = Object.assign(Object.assign({}, t), e), Hn(this.store, {
                                trimmed: t
                            })
                        }
                        setData(e) {
                            const t = Object.assign({}, e);
                            Hn(this.store, t)
                        }
                        refresh() {
                            const e = this.store.get("source");
                            this.store.set("source", [...e])
                        }
                    }

                    function Bn(e) {
                        const t = e.get("source");
                        return e.get("items").map((e => t[e]))
                    }

                    function Un(e, t) {
                        const r = e.get("items");
                        return e.get("source")[r[t]]
                    }

                    function Wn(e, t) {
                        const r = e.get("items"),
                            n = e.get("source");
                        for (let e in t) n[r[e]] = t[e];
                        e.set("source", [...n])
                    }

                    function Vn(e, t) {
                        e.set("items", t)
                    }
                    const Zn = ["rowPinStart", "rgRow", "rowPinEnd"],
                        Gn = ["colPinStart", "rgCol", "colPinEnd"];
                    var qn = function(e, t) {
                            var r = -1,
                                n = _t(e) ? Array(e.length) : [];
                            return kt(e, (function(e, i, o) {
                                n[++r] = t(e, i, o)
                            })), n
                        },
                        Xn = function(e, t) {
                            return (st(e) ? Qr : qn)(e, fn(t))
                        };
                    class Kn {
                        constructor(e) {
                            this.revogrid = e, this.subscriptions = {}
                        }
                        addEventListener(e, t) {
                            this.revogrid.addEventListener(e, t), this.subscriptions[e] = t
                        }
                        removeEventListener(e) {
                            this.revogrid.removeEventListener(e, this.subscriptions[e]), delete this.subscriptions[e]
                        }
                        emit(e, t) {
                            const r = new CustomEvent(e, {
                                detail: t,
                                cancelable: !0
                            });
                            return this.revogrid.dispatchEvent(r), r
                        }
                        clearSubscriptions() {
                            for (let e in this.subscriptions) this.removeEventListener(e)
                        }
                        destroy() {
                            this.clearSubscriptions()
                        }
                    }
                    class Yn extends Kn {
                        static gatherGroup(e, t, r, n = 0) {
                            const i = Object.assign(Object.assign({}, t), {
                                level: n,
                                ids: []
                            });
                            for (let t in r.columns) {
                                const n = t,
                                    o = e.columns[n],
                                    s = r.columns[n];
                                st(o) && st(s) && (o.push(...s), s.length && e.columnGrouping[n].push(Object.assign(Object.assign({}, i), {
                                    ids: Xn(s, "prop")
                                })))
                            }
                            for (let t in r.columnGrouping) {
                                const n = t,
                                    i = r.columnGrouping[n];
                                e.columnGrouping[n].push(...i)
                            }
                            return e.maxLevel = Math.max(e.maxLevel, r.maxLevel), e
                        }
                        static isColGrouping(e) {
                            return !!e.children
                        }
                    }
                    class Jn {
                        constructor() {
                            this.sorting = null, this.dataSources = vn(Gn, ((e, t) => (e[t] = new Nn(t), e)), {})
                        }
                        get order() {
                            return vn(this.sorting, ((e, t, r) => (e[r] = t.order, e)), {})
                        }
                        get stores() {
                            return this.dataSources
                        }
                        column(e, t) {
                            return this.getColumn(e, t || "rgCol")
                        }
                        getColumn(e, t) {
                            return Un(this.dataSources[t].store, e)
                        }
                        getRawColumns() {
                            return vn(this.dataSources, ((e, t, r) => (e[r] = t.store.get("source"), e)), {
                                rgCol: [],
                                colPinStart: [],
                                colPinEnd: []
                            })
                        }
                        getColumns(e = "all") {
                            return "all" !== e ? this.dataSources[e].store.get("source") : Gn.reduce(((e, t) => (e.push(...this.dataSources[t].store.get("source")), e)), [])
                        }
                        getColumnIndexByProp(e, t) {
                            return function(e, t) {
                                const r = e.get("items"),
                                    n = e.get("source"),
                                    i = On(n, {
                                        prop: t
                                    });
                                return r.indexOf(i)
                            }(this.dataSources[t].store, e)
                        }
                        getColumnByProp(e, t) {
                            const r = this.dataSources[t].store.get("source");
                            return Fn(r, {
                                prop: e
                            })
                        }
                        refreshByType(e) {
                            this.dataSources[e].refresh()
                        }
                        setColumns(e) {
                            return Cn(Gn, (t => {
                                this.dataSources[t].updateData(e.columns[t], {
                                    depth: e.maxLevel,
                                    groups: vn(e.columnGrouping[t], ((e, t) => (e[t.level] || (e[t.level] = []), e[t.level].push(t), e)), {})
                                })
                            })), this.sorting = e.sort, e
                        }
                        updateColumns(e) {
                            const t = e.reduce(((e, t) => {
                                    const r = Jn.getColumnType(t);
                                    return e[r] || (e[r] = {}), e[r][t.prop] = t, e
                                }), {}),
                                r = {};
                            Cn(t, ((e, t) => {
                                const n = this.dataSources[t].store.get("source");
                                r[t] = n.reduce(((t, r, n) => {
                                    const i = e[r.prop];
                                    return i && (t[n] = i), t
                                }), {})
                            })), Cn(r, ((e, t) => Wn(this.dataSources[t].store, e)))
                        }
                        updateColumn(e, t) {
                            const r = Jn.getColumnType(e);
                            Wn(this.dataSources[r].store, {
                                [t]: e
                            })
                        }
                        updateColumnSorting(e, t, r) {
                            return this.clearSorting(), e.order = r, this.sorting[e.prop] = e, this.updateColumn(e, t), e
                        }
                        clearSorting() {
                            const e = vn(this.sorting, ((e, t) => (e[Jn.getColumnType(t)] = !0, e)), {});
                            Cn(e, ((e, t) => {
                                const r = this.dataSources[t].store.get("source");
                                Cn(r, (e => e.order = void 0)), this.dataSources[t].setData({
                                    source: [...r]
                                })
                            })), this.sorting = {}
                        }
                        static getSizes(e) {
                            return vn(e, ((e, t, r) => (t.size && (e[r] = t.size), e)), {})
                        }
                        static getColumnByProp(e, t) {
                            return Fn(e, (e => Yn.isColGrouping(e) ? Jn.getColumnByProp(e.children, t) : e.prop === t))
                        }
                        static getColumns(e, t = 0, r) {
                            return vn(e, ((e, n) => {
                                if (Yn.isColGrouping(n)) return Yn.gatherGroup(e, n, Jn.getColumns(n.children, t + 1, r), t);
                                const i = Object.assign(Object.assign({}, n.columnType && r && r[n.columnType]), n);
                                return i.pin ? e.columns[i.pin].push(i) : e.columns.rgCol.push(i), i.order && (e.sort[i.prop] = i), i.beforeSetup && i.beforeSetup(i), e
                            }), {
                                columns: {
                                    rgCol: [],
                                    colPinStart: [],
                                    colPinEnd: []
                                },
                                columnGrouping: {
                                    rgCol: [],
                                    colPinStart: [],
                                    colPinEnd: []
                                },
                                maxLevel: t,
                                sort: {}
                            })
                        }
                        static getColumnType(e) {
                            return e.pin ? e.pin : "rgCol"
                        }
                    }
                    class Qn {
                        constructor(e) {
                            this.dimensionProvider = e, this.stores = vn(Zn, ((e, t) => (e[t] = new Nn(t), e)), {})
                        }
                        setData(e, t = "rgRow", r, n = !1) {
                            return this.stores[t].updateData([...e], r, n), this.dimensionProvider.setData(e, t, "rgRow" !== t), e
                        }
                        getModel(e, t = "rgRow") {
                            return Un(this.stores[t].store, e)
                        }
                        setCellData({
                            type: e,
                            rowIndex: t,
                            prop: r,
                            val: n
                        }) {
                            const i = this.getModel(t, e);
                            i[r] = n, Wn(this.stores[e].store, {
                                [t]: i
                            })
                        }
                        refresh(e = "all") {
                            (function(e) {
                                return Zn.indexOf(e) > -1
                            })(e) && this.refreshItems(e), Zn.forEach((e => this.refreshItems(e)))
                        }
                        refreshItems(e = "rgRow") {
                            const t = this.stores[e].store.get("items");
                            this.stores[e].setData({
                                items: [...t]
                            })
                        }
                        setGrouping({
                            depth: e
                        }, t = "rgRow") {
                            this.stores[t].setData({
                                groupingDepth: e
                            })
                        }
                        setTrimmed(e, t = "rgRow") {
                            const r = this.stores[t];
                            r.addTrimmed(e), "rgRow" === t && this.dimensionProvider.setData(Bn(r.store), t)
                        }
                    }
                    var ei, ti = Math.floor,
                        ri = Math.min,
                        ni = function(e, t, r) {
                            var n = 0,
                                i = null == e ? n : e.length;
                            if ("number" == typeof t && t == t && i <= 2147483647) {
                                for (; n < i;) {
                                    var o = n + i >>> 1,
                                        s = e[o];
                                    null !== s && !Br(s) && (r ? s <= t : s < t) ? n = o + 1 : i = o
                                }
                                return i
                            }
                            return function(e, t, r, n) {
                                var i = 0,
                                    o = null == e ? 0 : e.length;
                                if (0 === o) return 0;
                                for (var s = (t = r(t)) != t, a = null === t, l = Br(t), c = void 0 === t; i < o;) {
                                    var u = ti((i + o) / 2),
                                        h = r(e[u]),
                                        d = void 0 !== h,
                                        g = null === h,
                                        f = h == h,
                                        p = Br(h);
                                    if (s) var v = n || f;
                                    else v = c ? f && (n || d) : a ? f && d && (n || !g) : l ? f && d && !g && (n || !p) : !g && !p && (n ? h <= t : h < t);
                                    v ? i = u + 1 : o = u
                                }
                                return ri(o, 4294967294)
                            }(e, t, hn, r)
                        },
                        ii = function(e, t) {
                            return ni(e, t)
                        };

                    function oi(e, t) {
                        return e < t
                    }

                    function si(e) {
                        const t = e.createElement("div"),
                            r = t.style;
                        r.visibility = "hidden", r.overflow = "scroll", r.msOverflowStyle = "scrollbar", e.body.appendChild(t);
                        const n = e.createElement("div");
                        t.appendChild(n);
                        const i = t.offsetWidth - n.offsetWidth;
                        return t.parentNode.removeChild(t), i
                    }

                    function ai(e, t, r) {
                        return (r[1] - r[0]) * (e - t[0]) / (t[1] - t[0]) + r[0]
                    }
                    async function li(e = 0) {
                        await new Promise((t => {
                            setTimeout((() => t()), e)
                        }))
                    }

                    function ci({
                        indexes: e,
                        positionIndexes: t,
                        originItemSize: r,
                        positionIndexToItem: n
                    }, i) {
                        const o = {
                                itemIndex: 0,
                                start: 0,
                                end: 0
                            },
                            s = e.length ? ii(t, i) : 0;
                        if (!s) return o.itemIndex = Math.floor(i / r), o.start = o.itemIndex * r, o.end = o.start + r, o;
                        const a = n[s - 1];
                        if (a.end > i) return a;
                        const l = i - a.end,
                            c = Math.floor(l / r);
                        return o.itemIndex = a.itemIndex + 1 + c, o.start = a.end + c * r, o.end = o.start + r, o
                    }

                    function ui(e, t) {
                        let r = {
                            itemIndex: t,
                            start: 0,
                            end: 0
                        };
                        if (e.indexToItem[t]) return e.indexToItem[t];
                        const n = e.indexes.length ? ii(e.indexes, t) : 0;
                        if (!n) return r.start = r.itemIndex * e.originItemSize, r.end = r.start + e.originItemSize, r;
                        const i = e.indexToItem[e.indexes[n - 1]];
                        return r.start = i.end + (t - i.itemIndex - 1) * e.originItemSize, r.end = r.start + e.originItemSize, r
                    }

                    function hi() {
                        return Object.assign(Object.assign({}, {
                            indexes: [],
                            sizes: {},
                            positionIndexToItem: {},
                            indexToItem: {},
                            positionIndexes: []
                        }), {
                            realSize: 0,
                            originItemSize: 0,
                            frameOffset: 0
                        })
                    }
                    class di {
                        constructor() {
                            this.store = Pn(hi())
                        }
                        getCurrentState() {
                            const e = hi(),
                                t = Object.keys(e);
                            return vn(t, ((e, t) => {
                                const r = this.store.get(t);
                                return e[t] = r, e
                            }), e)
                        }
                        setRealSize(e) {
                            let t = 0;
                            for (let r = 0; r < e; r++) t += this.store.get("sizes")[r] || this.store.get("originItemSize");
                            Hn(this.store, {
                                realSize: t
                            })
                        }
                        setStore(e) {
                            Hn(this.store, e)
                        }
                        drop() {
                            Hn(this.store, {
                                indexes: [],
                                sizes: {},
                                positionIndexToItem: {},
                                indexToItem: {},
                                positionIndexes: []
                            })
                        }
                        setDimensionSize(e) {
                            const t = function(e, t) {
                                let r = [];
                                const n = {},
                                    i = {};
                                let o = 0;
                                const s = Object.assign(Object.assign({}, e.sizes), t);
                                let a = [];
                                Cn(t, ((t, r) => {
                                    e.sizes[r] ? o += t - e.sizes[r] : (o += t - (e.realSize ? e.originItemSize : 0), a.splice(ii(a, parseInt(r, 10)), 0, parseInt(r, 10)))
                                }));
                                const l = function(e, t, r = oi) {
                                    const n = [];
                                    let i = 0,
                                        o = 0,
                                        s = 0;
                                    for (; s < e.length + t.length;) {
                                        let a = i >= e.length,
                                            l = o >= t.length;
                                        a || !l && !r(e[i], t[o]) ? (n[s] = t[o], o++) : (n[s] = e[i], i++), s++
                                    }
                                    return n
                                }(e.indexes, a);
                                return vn(l, ((t, o, a) => {
                                    const l = {
                                        itemIndex: o,
                                        start: 0,
                                        end: 0
                                    };
                                    return l.start = t ? (o - t.itemIndex - 1) * e.originItemSize + t.end : o * e.originItemSize, l.end = l.start + s[o], r.push(l.start), i[o] = n[a] = l, l
                                }), void 0), {
                                    indexes: l,
                                    positionIndexes: [...r],
                                    positionIndexToItem: Object.assign({}, n),
                                    indexToItem: i,
                                    realSize: e.realSize + o,
                                    sizes: s
                                }
                            }(this.getCurrentState(), e);
                            return Hn(this.store, t), t
                        }
                    }
                    class gi {
                        constructor(e) {
                            this.viewports = e, this.stores = vn([...Zn, ...Gn], ((e, t) => (e[t] = new di, e)), {})
                        }
                        setDimensionSize(e, t) {
                            this.stores[e].setDimensionSize(t), this.viewports.stores[e].setViewPortDimension(t)
                        }
                        setRealSize(e, t) {
                            this.viewports.stores[t].setViewport({
                                realCount: e
                            }), this.stores[t].setRealSize(e)
                        }
                        setData(e, t, r = !1) {
                            this.setRealSize(e.length, t), r && this.setNoVirtual(t), this.setViewPortCoordinate({
                                coordinate: this.viewports.stores[t].store.get("lastCoordinate"),
                                type: t
                            })
                        }
                        setNoVirtual(e) {
                            const t = this.stores[e].getCurrentState();
                            this.viewports.stores[e].setViewport({
                                virtualSize: t.realSize
                            })
                        }
                        drop() {
                            for (let e of Gn) this.stores[e].drop()
                        }
                        setColumns(e, t, r = !1) {
                            this.stores[e].setDimensionSize(t), r && this.setNoVirtual(e), this.setViewPortCoordinate({
                                coordinate: this.viewports.stores[e].store.get("lastCoordinate"),
                                type: e
                            })
                        }
                        setViewPortCoordinate({
                            coordinate: e,
                            type: t
                        }) {
                            const r = this.stores[t].getCurrentState();
                            this.viewports.stores[t].setViewPortCoordinate(e, r)
                        }
                        getViewPortPos(e) {
                            return ui(this.stores[e.dimension].getCurrentState(), e.coordinate).start
                        }
                        setSettings(e, t) {
                            let r = [];
                            switch (t) {
                                case "rgCol":
                                    r = Gn;
                                    break;
                                case "rgRow":
                                    r = Zn
                            }
                            for (let t of r) this.stores[t].setStore(e)
                        }
                    }

                    function fi(e, t, r) {
                        e.splice(r.end + 1, 0, ...t), r.start >= r.end && (r.start !== r.end || 0 !== r.start) && (r.start += t.length), r.end += t.length
                    }

                    function pi(e, t, r, n, i) {
                        const o = wi(n);
                        return vi({
                            sizes: i.sizes,
                            start: o.end,
                            startIndex: o.itemIndex + 1,
                            origSize: i.originItemSize,
                            maxSize: r - (o.end - e.start),
                            maxCount: t
                        })
                    }

                    function vi(e, t = 0) {
                        const r = [];
                        let n = e.startIndex,
                            i = t;
                        for (; i <= e.maxSize && n < e.maxCount;) {
                            const t = mi(n, e.sizes, e.origSize);
                            r.push({
                                start: e.start + i,
                                end: e.start + i + t,
                                itemIndex: n,
                                size: t
                            }), i += t, n++
                        }
                        return r
                    }

                    function mi(e, t, r = 0) {
                        return t && t[e] ? t[e] : r
                    }

                    function Ci(e) {
                        return e.items[e.start]
                    }

                    function wi(e) {
                        return e.items[e.end]
                    }
                    class bi {
                        constructor() {
                            this.store = Pn({
                                items: [],
                                start: 0,
                                end: 0,
                                virtualSize: 0,
                                realCount: 0,
                                lastCoordinate: 0
                            }), this.store.onChange("realCount", (() => this.clear()))
                        }
                        setViewPortCoordinate(e, t) {
                            let r = this.store.get("virtualSize");
                            if (!r) return;
                            const n = t.frameOffset;
                            r += 2 * n * t.originItemSize;
                            let i = r;
                            t.realSize > r && (i = t.realSize - r);
                            let o = {
                                    lastCoordinate: e
                                },
                                s = e;
                            s -= n * t.originItemSize, s = s < 0 ? 0 : s < i ? s : i;
                            const a = Ci(this.getItems()),
                                l = wi(this.getItems());
                            if (function(e, t) {
                                    return t && e >= t.start && e <= t.end
                                }(s, a)) {
                                if (a && this.store.get("virtualSize") + s > (null == l ? void 0 : l.end)) {
                                    const e = pi(a, this.store.get("realCount"), r + s - a.start, this.getItems(), t);
                                    if (e.length) {
                                        const t = [...this.store.get("items")],
                                            r = {
                                                start: this.store.get("start"),
                                                end: this.store.get("end")
                                            };
                                        fi(t, e, r), o = Object.assign(Object.assign(Object.assign({}, o), {
                                            items: [...t]
                                        }), r), Hn(this.store, Object.assign({}, o))
                                    }
                                }
                            } else o = Object.assign(Object.assign({}, o), function(e, t, r, n, i) {
                                const o = ci(i, e),
                                    s = Ci(t);
                                let a;
                                if (s) {
                                    let e = o.itemIndex - (s.itemIndex || 0);
                                    if (e) {
                                        const s = function(e, t) {
                                            const r = [...t.items],
                                                n = r.length;
                                            let i = {
                                                start: t.start,
                                                end: t.end
                                            };
                                            if (e > n) return null;
                                            if (t.positiveDirection) {
                                                let o = wi(t),
                                                    s = i.start;
                                                const a = s + e;
                                                for (; s < a; s++) {
                                                    const e = o.itemIndex + 1,
                                                        a = mi(e, t.sizes, t.originItemSize);
                                                    if (o.end + a > t.realSize) break;
                                                    let l = s % n;
                                                    if (!r[l]) throw new Error("incorrect index");
                                                    r[l] = o = {
                                                        start: o.end,
                                                        end: o.end + a,
                                                        itemIndex: e,
                                                        size: a
                                                    }, i.start++, i.end = l
                                                }
                                            } else {
                                                let o = Ci(t);
                                                const s = i.end;
                                                for (let a = 0; a < e; a++) {
                                                    const e = o.itemIndex - 1,
                                                        l = mi(e, t.sizes, t.originItemSize);
                                                    let c = s - a;
                                                    if (c = (c < 0 ? n + c : c) % n, !r[c]) throw new Error("incorrect index");
                                                    r[c] = o = {
                                                        start: o.start - l,
                                                        end: o.start,
                                                        itemIndex: e,
                                                        size: l
                                                    }, i.start = c, i.end--
                                                }
                                            }
                                            const o = {
                                                start: (i.start < 0 ? n + i.start : i.start) % n,
                                                end: (i.end < 0 ? n + i.end : i.end) % n
                                            };
                                            return Object.assign({
                                                items: r
                                            }, o)
                                        }(Math.abs(e), Object.assign(Object.assign({
                                            positiveDirection: e > -1
                                        }, i), t));
                                        if (s && (a = s), a) {
                                            const e = pi(o, r, n, a, i);
                                            e.length && fi(a.items, e, a)
                                        }
                                    }
                                }
                                if (!a) {
                                    const e = vi({
                                        start: o.start,
                                        startIndex: o.itemIndex,
                                        origSize: i.originItemSize,
                                        maxSize: n,
                                        maxCount: r,
                                        sizes: i.sizes
                                    });
                                    a = {
                                        items: e,
                                        start: 0,
                                        end: e.length - 1
                                    }
                                }
                                return a
                            }(s, this.getItems(), this.store.get("realCount"), r, t)), Hn(this.store, Object.assign({}, o))
                        }
                        setViewPortDimension(e) {
                            const t = this.store.get("items"),
                                r = t.length;
                            if (!r) return;
                            let n = 0,
                                i = 0,
                                o = this.store.get("start");
                            for (; i < r;) {
                                const s = t[o];
                                n && (s.start += n, s.end += n);
                                const a = e[s.itemIndex];
                                a && (n += a - s.size, s.size = a, s.end = s.start + a), o++, i++, o === r && (o = 0)
                            }
                            Hn(this.store, {
                                items: [...t]
                            })
                        }
                        getItems() {
                            return {
                                items: this.store.get("items"),
                                start: this.store.get("start"),
                                end: this.store.get("end")
                            }
                        }
                        setViewport(e) {
                            Hn(this.store, e)
                        }
                        clear() {
                            this.store.set("items", [])
                        }
                    }
                    class Li {
                        constructor() {
                            this.stores = vn([...Zn, ...Gn], ((e, t) => (e[t] = new bi, e)), {})
                        }
                        setViewport(e, t) {
                            this.stores[e].setViewport(t)
                        }
                    }! function(e) {
                        e.headerClickAutosize = "headerClickAutoSize", e.autoSizeOnTextOverlap = "autoSizeOnTextOverlap", e.autoSizeAll = "autoSizeAll"
                    }(ei || (ei = {}));
                    class xi extends Kn {
                        constructor(e, t, r) {
                            super(e), this.providers = t, this.config = r, this.autoSizeColumns = null, this.dataResolve = null, this.dataReject = null, this.letterBlockSize = (null == r ? void 0 : r.letterBlockSize) || 7, (null == r ? void 0 : r.preciseSize) && (this.precsizeCalculationArea = this.initiatePresizeElement(), e.appendChild(this.precsizeCalculationArea));
                            const n = ({
                                    detail: {
                                        source: e
                                    }
                                }) => {
                                    this.setSource(e)
                                },
                                i = ({
                                    detail: e
                                }) => {
                                    this.afteredit(e)
                                },
                                o = ({
                                    detail: e
                                }) => {
                                    this.afterEditAll(e)
                                },
                                s = ({
                                    detail: e
                                }) => {
                                    const t = Jn.getColumnType(e),
                                        r = this.getColumnSize(e.index, t);
                                    r && this.providers.dimensionProvider.setDimensionSize(t, {
                                        [e.index]: r
                                    })
                                };
                            switch (this.addEventListener("beforecolumnsset", (({
                                    detail: {
                                        columns: e
                                    }
                                }) => {
                                    this.columnSet(e)
                                })), null == r ? void 0 : r.mode) {
                                case ei.autoSizeOnTextOverlap:
                                    this.addEventListener("aftersourceset", n), this.addEventListener("afteredit", i);
                                    break;
                                case ei.autoSizeAll:
                                    this.addEventListener("aftersourceset", n), this.addEventListener("afteredit", o);
                                    break;
                                default:
                                    this.addEventListener("headerdblClick", s)
                            }
                        }
                        async setSource(e) {
                            let t = this.autoSizeColumns;
                            if (this.dataReject && (this.dataReject(), this.clearPromise()), !t) {
                                const e = new Promise(((e, t) => {
                                    this.dataResolve = e, this.dataReject = t
                                }));
                                try {
                                    t = await e
                                } catch (e) {
                                    return
                                }
                            }
                            Cn(t, ((r, n) => {
                                const i = {};
                                Cn(t[n], (t => {
                                    t.size = i[t.index] = e.reduce(((e, r) => Math.max(e, this.getLength(r[t.prop]))), 0)
                                })), this.providers.dimensionProvider.setDimensionSize(n, i)
                            }))
                        }
                        getLength(e) {
                            var t;
                            if (!e) return 0;
                            try {
                                const r = e.toString();
                                return (null === (t = this.config) || void 0 === t ? void 0 : t.preciseSize) ? (this.precsizeCalculationArea.innerText = r, this.precsizeCalculationArea.scrollWidth + 30) : r.length * this.letterBlockSize + 30
                            } catch (e) {
                                return 0
                            }
                        }
                        afteredit(e) {
                            let t;
                            t = this.isRangeEdit(e) ? e.data : {
                                0: {
                                    [e.prop]: e.val
                                }
                            }, Cn(this.autoSizeColumns, ((e, r) => {
                                const n = {};
                                Cn(e, (e => {
                                    const r = vn(t, ((t, r) => void 0 === r[e.prop] ? t : Math.max(t || 0, this.getLength(r[e.prop]))), void 0);
                                    r && e.size < r && (e.size = n[e.index] = r)
                                })), this.providers.dimensionProvider.setDimensionSize(r, n)
                            }))
                        }
                        afterEditAll(e) {
                            const t = {};
                            this.isRangeEdit(e) ? Cn(e.data, (e => Cn(e, ((e, r) => t[r] = !0)))) : t[e.prop] = !0, Cn(this.autoSizeColumns, ((e, r) => {
                                const n = {};
                                Cn(e, (e => {
                                    if (t[e.prop]) {
                                        const t = this.getColumnSize(e.index, r);
                                        t && (n[e.index] = t)
                                    }
                                })), this.providers.dimensionProvider.setDimensionSize(r, n)
                            }))
                        }
                        getColumnSize(e, t) {
                            const r = this.autoSizeColumns[t][e];
                            return r ? vn(this.providers.dataProvider.stores, ((e, t) => {
                                const n = vn(t.store.get("items"), ((e, n, i) => {
                                    const o = Un(t.store, i);
                                    return Math.max(e || 0, this.getLength(o[r.prop]))
                                }), 0);
                                return Math.max(e, n)
                            }), r.size || 0) : 0
                        }
                        columnSet(e) {
                            var t;
                            for (let r of Gn) {
                                const n = r,
                                    i = e[n];
                                for (let e in i)(i[e].autoSize || (null === (t = this.config) || void 0 === t ? void 0 : t.allColumns)) && (this.autoSizeColumns || (this.autoSizeColumns = {}), this.autoSizeColumns[n] || (this.autoSizeColumns[n] = {}), this.autoSizeColumns[n][e] = Object.assign(Object.assign({}, i[e]), {
                                    index: parseInt(e, 10)
                                }))
                            }
                            this.dataResolve && (this.dataResolve(this.autoSizeColumns), this.clearPromise())
                        }
                        clearPromise() {
                            this.dataResolve = null, this.dataReject = null
                        }
                        isRangeEdit(e) {
                            return !!e.data
                        }
                        initiatePresizeElement() {
                            const e = {
                                    position: "absolute",
                                    fontSize: "14px",
                                    height: "0",
                                    width: "0",
                                    whiteSpace: "nowrap",
                                    top: "0",
                                    overflowX: "scroll"
                                },
                                t = document.createElement("div");
                            for (let r in e) t.style[r] = e[r];
                            return t.classList.add("revo-test-container"), t
                        }
                        destroy() {
                            var e;
                            super.destroy(), null === (e = this.precsizeCalculationArea) || void 0 === e || e.remove()
                        }
                    }
                    const yi = "rv-filter",
                        Si = ({
                            column: e
                        }) => z("span", null, z("button", {
                            class: {
                                [yi]: !0,
                                active: e && !!e.hasFilter
                            }
                        }, z("svg", {
                            class: "filter-img",
                            viewBox: "0 0 64 64"
                        }, z("g", {
                            stroke: "none",
                            "stroke-width": "1",
                            fill: "none",
                            "fill-rule": "evenodd"
                        }, z("path", {
                            d: "M43,48 L43,56 L21,56 L21,48 L43,48 Z M53,28 L53,36 L12,36 L12,28 L53,28 Z M64,8 L64,16 L0,16 L0,8 L64,8 Z",
                            fill: "currentColor"
                        })))));

                    function _i(e) {
                        return !!e.classList.contains(yi) || (null == e ? void 0 : e.closest(".rv-filter"))
                    }
                    const Ei = (e, t) => void 0 === e || null === e && !t || ("string" != typeof e && (e = JSON.stringify(e)), e.toLocaleLowerCase() === t),
                        ki = (e, t) => !Ei(e, t);
                    ki.extra = "input", Ei.extra = "input";
                    const Ri = function(e, t) {
                        let r;
                        return "number" == typeof e && (r = parseFloat(null == t ? void 0 : t.toString()), e > r)
                    };
                    Ri.extra = "input";
                    const zi = function(e, t) {
                        return Ei(e, t) || Ri(e, t)
                    };
                    zi.extra = "input";
                    const $i = function(e, t) {
                        let r;
                        return "number" == typeof e && (r = parseFloat(null == t ? void 0 : t.toString()), e < r)
                    };
                    $i.extra = "input";
                    const Oi = function(e, t) {
                        return Ei(e, t) || $i(e, t)
                    };
                    Oi.extra = "input";
                    const Fi = e => !("" === e || null == e),
                        ji = (e, t) => !(!e || t && ("string" != typeof e && (e = JSON.stringify(e)), "string" != typeof t && (t = JSON.stringify(t)), 0 !== e.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())));
                    ji.extra = "input";
                    const Ti = (e, t) => !!e && (!t || ("string" != typeof e && (e = JSON.stringify(e)), e.toLocaleLowerCase().indexOf(t.toString().toLowerCase()) > -1)),
                        Pi = (e, t) => !Ti(e, t);
                    Pi.extra = "input", Ti.extra = "input";
                    const Di = {
                            none: "None",
                            empty: "Not set",
                            notEmpty: "Set",
                            eq: "Equal",
                            notEq: "Not equal",
                            begins: "Begins with",
                            contains: "Contains",
                            notContains: "Does not contain",
                            eqN: "=",
                            neqN: "!=",
                            gt: ">",
                            gte: ">=",
                            lt: "<",
                            lte: "<="
                        },
                        Mi = {
                            none: () => !0,
                            empty: e => !Fi(e),
                            notEmpty: Fi,
                            eq: Ei,
                            notEq: ki,
                            begins: ji,
                            contains: Ti,
                            notContains: Pi,
                            eqN: Ei,
                            neqN: ki,
                            gt: Ri,
                            gte: zi,
                            lt: $i,
                            lte: Oi
                        },
                        Ai = {
                            string: ["notEmpty", "empty", "eq", "notEq", "begins", "contains", "notContains"],
                            number: ["notEmpty", "empty", "eqN", "neqN", "gt", "gte", "lt", "lte"]
                        },
                        Ii = "filter";
                    class Hi extends Kn {
                        constructor(e, t, r) {
                            super(e), this.revogrid = e, this.filterCollection = {}, this.possibleFilters = Object.assign({}, Ai), this.possibleFilterNames = Object.assign({}, Di), this.possibleFilterEntities = Object.assign({}, Mi), r && this.initConfig(r), this.addEventListener("headerclick", (e => this.headerclick(e))), this.addEventListener("aftersourceset", (() => {
                                Object.keys(this.filterCollection).length && this.filterByProps(this.filterCollection)
                            })), this.revogrid.registerVNode([z("revogr-filter-panel", {
                                uuid: `filter-${t}`,
                                filterNames: this.possibleFilterNames,
                                filterEntities: this.possibleFilterEntities,
                                onFilterChange: e => this.onFilterChange(e.detail),
                                ref: e => this.pop = e
                            })])
                        }
                        initConfig(e) {
                            if (e.collection && (this.filterCollection = Object.assign({}, e.collection)), e.customFilters)
                                for (let t in e.customFilters) {
                                    const r = e.customFilters[t];
                                    this.possibleFilters[r.columnFilterType] || (this.possibleFilters[r.columnFilterType] = []), this.possibleFilters[r.columnFilterType].push(t), this.possibleFilterEntities[t] = r.func, this.possibleFilterNames[t] = r.name
                                }
                            if (e.include) {
                                const t = {};
                                for (let r in this.possibleFilters) {
                                    const n = this.possibleFilters[r].filter((t => e.include.indexOf(t) > -1));
                                    n.length && (t[r] = n)
                                }
                                Object.keys(t).length > 0 && (this.possibleFilters = t)
                            }
                        }
                        async headerclick(e) {
                            var t;
                            const r = null === (t = e.detail.originalEvent) || void 0 === t ? void 0 : t.target;
                            if (!_i(r)) return;
                            e.preventDefault();
                            const n = await this.pop.getChanges();
                            if (n && (null == n ? void 0 : n.prop) === e.detail.prop) return void this.pop.show();
                            const i = this.revogrid.getBoundingClientRect(),
                                o = r.getBoundingClientRect(),
                                s = e.detail.prop;
                            this.pop.filterTypes = this.getColumnFilter(e.detail.filter), this.pop.show(Object.assign(Object.assign({}, this.filterCollection[s]), {
                                x: o.x - i.x,
                                y: o.y - i.y + o.height,
                                prop: s
                            }))
                        }
                        getColumnFilter(e) {
                            let t = "string";
                            if (!e) return {
                                [t]: this.possibleFilters[t]
                            };
                            if (this.isValidType(e)) t = e;
                            else if ("object" == typeof e && e.length) return e.reduce(((e, t) => (this.isValidType(t) && (e[t] = this.possibleFilters[t]), e)), {});
                            return {
                                [t]: this.possibleFilters[t]
                            }
                        }
                        isValidType(e) {
                            return !("string" != typeof e || !this.possibleFilters[e])
                        }
                        async onFilterChange(e) {
                            this.filterByProps({
                                [e.prop]: e
                            })
                        }
                        async filterByProps(e, t = !1) {
                            t && (this.filterCollection = {});
                            for (const t in e) {
                                const {
                                    type: r,
                                    value: n
                                } = e[t];
                                if ("none" === r) delete this.filterCollection[t];
                                else {
                                    const e = this.possibleFilterEntities[r];
                                    this.filterCollection[t] = {
                                        filter: e,
                                        value: n,
                                        type: r
                                    }
                                }
                            }
                            await this.runFiltering()
                        }
                        async doFiltering(e, t, r) {
                            const n = [];
                            r.forEach((t => {
                                const r = Object.assign({}, t),
                                    i = e[r.prop];
                                r.hasFilter && !i && (delete r.hasFilter, n.push(r)), !r.hasFilter && i && (n.push(r), r.hasFilter = !0)
                            }));
                            const i = this.getRowFilter(t, e),
                                {
                                    defaultPrevented: o,
                                    detail: s
                                } = this.emit("beforefiltertrimmed", {
                                    collection: e,
                                    itemsToFilter: i,
                                    source: t
                                });
                            o || (await this.revogrid.addTrimmed(s.itemsToFilter, Ii)).defaultPrevented || (await this.revogrid.updateColumns(n), this.emit("afterFilterApply"))
                        }
                        async clearFiltering() {
                            this.filterCollection = {}, await this.runFiltering()
                        }
                        async runFiltering() {
                            const {
                                source: e,
                                columns: t
                            } = await this.getData(), {
                                defaultPrevented: r,
                                detail: n
                            } = this.emit("beforefilterapply", {
                                collection: this.filterCollection,
                                source: e,
                                columns: t
                            });
                            r || this.doFiltering(n.collection, n.source, n.columns)
                        }
                        async getData() {
                            return {
                                source: await this.revogrid.getSource(),
                                columns: await this.revogrid.getColumns()
                            }
                        }
                        getRowFilter(e, t) {
                            const r = {};
                            return e.forEach(((e, n) => {
                                for (const i in t) {
                                    const o = t[i];
                                    (0, o.filter)(e[i], o.value) || (r[n] = !0)
                                }
                            })), r
                        }
                    }
                    var Ni = function(e) {
                            return "string" == typeof e || !st(e) && et(e) && "[object String]" == Qe(e)
                        },
                        Bi = dn("length"),
                        Ui = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
                        Wi = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                        Vi = "\\ud83c[\\udffb-\\udfff]",
                        Zi = "[^\\ud800-\\udfff]",
                        Gi = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        qi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        Xi = "(?:" + Wi + "|" + Vi + ")?",
                        Ki = "[\\ufe0e\\ufe0f]?",
                        Yi = Ki + Xi + "(?:\\u200d(?:" + [Zi, Gi, qi].join("|") + ")" + Ki + Xi + ")*",
                        Ji = "(?:" + [Zi + Wi + "?", Wi, Gi, qi, "[\\ud800-\\udfff]"].join("|") + ")",
                        Qi = RegExp(Vi + "(?=" + Vi + ")|" + Ji + Yi, "g"),
                        eo = function(e) {
                            return function(e) {
                                return Ui.test(e)
                            }(e) ? function(e) {
                                for (var t = Qi.lastIndex = 0; Qi.test(e);) ++t;
                                return t
                            }(e) : Bi(e)
                        };
                    class to extends Kn {
                        constructor(e) {
                            super(e), this.revogrid = e, this.sorting = null, this.addEventListener("beforesourceset", (({
                                detail: e
                            }) => {
                                if (this.hasSorting && this.emit("beforesourcesortingapply").defaultPrevented) return;
                                const t = this.setData(e.source, e.type);
                                t && (e.source = t)
                            })), this.addEventListener("aftercolumnsset", (async ({
                                detail: {
                                    order: e
                                }
                            }) => this.sort(e))), this.addEventListener("initialHeaderClick", (async e => {
                                e.defaultPrevented || e.detail.column.sortable && this.headerclick(e.detail.column, e.detail.index)
                            }))
                        }
                        get hasSorting() {
                            return !!this.sorting
                        }
                        async headerclick(e, t) {
                            let r = this.getNextOrder(e.order);
                            const n = this.emit("beforesorting", {
                                column: e,
                                order: r
                            });
                            if (n.defaultPrevented) return;
                            r = n.detail.order;
                            const i = await this.revogrid.updateColumnSorting(n.detail.column, t, r),
                                o = this.emit("beforesortingapply", {
                                    column: i,
                                    order: r
                                });
                            o.defaultPrevented || (r = o.detail.order, this.sort({
                                [e.prop]: r
                            }))
                        }
                        setData(e, t) {
                            if ("rgRow" === t && this.sorting) return this.sortItems(e, this.sorting)
                        }
                        async sort(e) {
                            if (! function(e) {
                                    if (null == e) return 0;
                                    if (_t(e)) return Ni(e) ? eo(e) : e.length;
                                    var t = Fr(e);
                                    return "[object Map]" == t || "[object Set]" == t ? e.size : xt(e).length
                                }(e)) return void(this.sorting = null);
                            this.sorting = e;
                            const t = await this.revogrid.getSourceStore(),
                                r = t.get("source"),
                                n = this.sortIndexByItems([...t.get("proxyItems")], r, this.sorting);
                            Hn(t, {
                                proxyItems: n,
                                source: [...r]
                            }), this.emit("afterSortingApply")
                        }
                        keySort(e, t, r) {
                            const n = "asc" === r ? 1 : -1;
                            return e === t ? 0 : (null == e ? void 0 : e.toString().toLowerCase()) > (null == t ? void 0 : t.toString().toLowerCase()) ? 1 * n : -1 * n
                        }
                        sortIndexByItems(e, t, r) {
                            for (let t in r)
                                if (void 0 === r[t]) return [...Array(e.length).keys()];
                            return e.sort(((e, n) => {
                                let i = 0;
                                for (let o in r) {
                                    const s = r[o],
                                        a = t[e][o],
                                        l = t[n][o];
                                    i = this.keySort(a, l, s)
                                }
                                return i
                            }))
                        }
                        sortItems(e, t) {
                            return e.sort(((e, r) => {
                                let n = 0;
                                for (let i in t) {
                                    const o = t[i],
                                        s = e[i],
                                        a = r[i];
                                    n = this.keySort(s, a, o)
                                }
                                return n
                            }))
                        }
                        getNextOrder(e) {
                            switch (e) {
                                case void 0:
                                    return "asc";
                                case "asc":
                                    return "desc";
                                case "desc":
                                    return
                            }
                        }
                    }
                    var ro = function(e, t, r, n) {
                        var i = e.length;
                        for ((r = zn(r)) < 0 && (r = -r > i ? 0 : i + r), (n = void 0 === n || n > i ? i : zn(n)) < 0 && (n += i), n = r > n ? 0 : function(e) {
                                return e ? (t = zn(e), r = 0, n = 4294967295, t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== r && (t = t >= r ? t : r)), t) : 0;
                                var t, r, n
                            }(n); r < n;) e[r++] = t;
                        return e
                    };
                    const no = "data-rgCol",
                        io = "grid-uuid",
                        oo = "rgHeaderCell",
                        so = "revo-draggable",
                        ao = "focused-cell",
                        lo = "edit-input-wrapper",
                        co = "__rvgr-depth",
                        uo = "__rvgr-expanded",
                        ho = "groupExpandClick",
                        go = "rgRow";

                    function fo(e, t, {
                        prevExpanded: r,
                        expandedAll: n
                    }) {
                        const i = function(e, t) {
                                const r = [],
                                    n = {};
                                return e.forEach(((e, i) => {
                                    const o = JSON.stringify(t(e));
                                    n[o] || (n[o] = new Map, r.push({
                                        children: n[o],
                                        id: o
                                    })), n[o].set(i, e)
                                })), r
                            }(e, t),
                            o = [],
                            s = {};
                        let a = 0,
                            l = 0;
                        const c = {},
                            u = {};
                        return i.forEach((e => {
                            const t = mo(e.id);
                            if (!t) return;
                            let i = 0,
                                h = !!n,
                                d = h;
                            const g = [];
                            t.reduce(((t, u) => {
                                t.push(u);
                                const f = t.join(",");
                                if (!s[f]) {
                                    if (d = n || r && r[f], o.push(function(e, t, r, n, i = !1) {
                                            return {
                                                "__rvgr-name": e,
                                                [co]: r,
                                                "__rvgr-id": n,
                                                "__rvgr-value": t,
                                                [uo]: i
                                            }
                                        }(u, f, i, e.id, d)), i && !d && !h) {
                                        const e = t.slice(0, t.length - 1);
                                        r && e.length && r[e.join(",")] || (c[a] = !0)
                                    }
                                    a++, s[f] = g
                                }
                                return i++, l = i, t
                            }), []), e.children.forEach(((e, t) => {
                                d || h || (c[a] = !0), o.push(e), u[t] = a, g.push(a), a++
                            }))
                        })), {
                            sourceWithGroups: o,
                            depth: l,
                            trimmed: c,
                            oldNewIndexMap: u,
                            childrenByGroup: s
                        }
                    }

                    function po(e) {
                        return e && void 0 !== e["__rvgr-name"]
                    }

                    function vo(e) {
                        return e && void 0 !== e["__rvgr-column"]
                    }

                    function mo(e) {
                        const t = JSON.parse(e);
                        return void 0 === t.push ? null : t
                    }

                    function Co(e, t, r) {
                        const n = mo(r["__rvgr-id"]);
                        if (!n) return !1;
                        const i = function(e, t) {
                            const r = e.length;
                            let n = 0;
                            for (; n < r; n++)
                                if (e[n] !== t[n]) return n;
                            return n
                        }(e, n);
                        return t[co] < i
                    }
                    const wo = {
                            mime: "text/csv",
                            fileKind: "csv",
                            bom: !0,
                            columnDelimiter: ",",
                            rowDelimiter: "\r\n",
                            encoding: ""
                        },
                        bo = String.fromCharCode(13),
                        Lo = String.fromCharCode(10),
                        xo = String.fromCharCode(34),
                        yo = String.fromCharCode(65279),
                        So = new RegExp('"', "g");
                    class _o {
                        constructor(e = {}) {
                            this.options = Object.assign(Object.assign({}, wo), e)
                        }
                        doExport({
                            data: e,
                            headers: t,
                            props: r
                        }) {
                            let n = this.options.bom ? yo : "";
                            return (null == t ? void 0 : t.length) > 0 && t.forEach((e => {
                                e.length && (n += this.prepareHeader(e, this.options.columnDelimiter), n += this.options.rowDelimiter)
                            })), e.forEach(((e, t) => {
                                t > 0 && (n += this.options.rowDelimiter), po(e) ? n += this.parseCell(function(e) {
                                    return e && e["__rvgr-name"]
                                }(e), this.options.columnDelimiter) : n += r.map((t => this.parseCell(e[t], this.options.columnDelimiter))).join(this.options.columnDelimiter)
                            })), n
                        }
                        prepareHeader(e, t) {
                            let r = "";
                            return r += e.map((e => this.parseCell(e, t, !0))).join(t), r
                        }
                        parseCell(e, t, r = !1) {
                            let n = e;
                            return "string" != typeof e && (n = JSON.stringify(e)), void 0 === n ? "" : "" !== n && (r || [bo, xo, Lo, t].some((e => n.indexOf(e) >= 0))) ? `"${n.replace(So,'""')}"` : n
                        }
                    }
                    var Eo;
                    ! function(e) {
                        e.csv = "csv"
                    }(Eo || (Eo = {}));
                    class ko extends Kn {
                        async exportString(e = {}, t = Eo.csv) {
                            const r = await this.beforeexport();
                            return r ? this.formatter(t, e).doExport(r) : null
                        }
                        async exportBlob(e = {}, t = Eo.csv) {
                            return await this.getBlob(this.formatter(t, e))
                        }
                        async exportFile(e = {}, t = Eo.csv) {
                            const r = this.formatter(t, e),
                                n = await this.getBlob(r),
                                i = window.URL || window.webkitURL,
                                o = document.createElement("a"),
                                {
                                    filename: s,
                                    fileKind: a
                                } = r.options,
                                l = `${s}.${a}`,
                                c = i.createObjectURL(n);
                            o.style.display = "none", o.setAttribute("href", c), o.setAttribute("download", l), this.revogrid.appendChild(o), o.dispatchEvent(new MouseEvent("click")), this.revogrid.removeChild(o), await li(120), i.revokeObjectURL(c)
                        }
                        async getBlob(e) {
                            const t = `${e.options.mime};charset=${e.options.encoding}`;
                            if ("undefined" != typeof Blob) {
                                const r = await this.beforeexport();
                                return r ? new Blob([e.doExport(r)], {
                                    type: t
                                }) : null
                            }
                            return null
                        }
                        async beforeexport() {
                            let e = await this.getData();
                            const t = this.emit("beforeexport", {
                                data: e
                            });
                            return t.defaultPrevented ? null : t.detail.data
                        }
                        async getData() {
                            const e = await this.getSource(),
                                t = [],
                                r = [];
                            Gn.forEach(((e, n) => {
                                r.push(this.getColPerSource(e).then((e => t[n] = e)))
                            })), await Promise.all(r);
                            const n = {
                                headers: [],
                                props: []
                            };
                            for (let e of t) e.headers.forEach(((e, t) => {
                                n.headers[t] || (n.headers[t] = []), n.headers[t].push(...e)
                            })), n.props.push(...e.props);
                            return Object.assign({
                                data: e
                            }, n)
                        }
                        async getColPerSource(e) {
                            const t = await this.revogrid.getColumnStore(e),
                                r = t.get("source"),
                                n = t.get("items"),
                                i = t.get("groupingDepth"),
                                o = t.get("groups"),
                                s = [],
                                a = [],
                                l = n.reduce(((e, t, n) => {
                                    const i = r[t].prop;
                                    return s.push(r[t].name || ""), a.push(i), e[i] = n, e
                                }), {}),
                                c = this.getGroupHeaders(i, o, n, l);
                            return c.push(s), {
                                headers: c,
                                props: a
                            }
                        }
                        getGroupHeaders(e, t, r, n) {
                            const i = [],
                                o = (s = new Array(r.length), a = "", (u = null == s ? 0 : s.length) ? (l && "number" != typeof l && An(s, a, l) && (l = 0, c = u), ro(s, a, l, c)) : []);
                            var s, a, l, c, u;
                            for (let r = 0; r < e; r++) {
                                const e = [...o];
                                (i.push(e), t[r]) && t[r].forEach((t => {
                                    const r = this.findGroupStartIndex(t.ids, n);
                                    "number" == typeof r && (e[r] = t.name)
                                }))
                            }
                            return i
                        }
                        findGroupStartIndex(e, t) {
                            let r;
                            return e.forEach((e => {
                                const n = t[e];
                                "number" == typeof n && ("number" != typeof r || r > n) && (r = n)
                            })), r
                        }
                        async getSource() {
                            const e = [],
                                t = [];
                            return Zn.forEach((r => {
                                const n = [];
                                e.push(n);
                                const i = this.revogrid.getVisibleSource(r).then((e => n.push(...e)));
                                t.push(i)
                            })), await Promise.all(t), e.reduce(((e, t) => (e.push(...t), e)), [])
                        }
                        formatter(e, t = {}) {
                            switch (e) {
                                case Eo.csv:
                                    return new _o(t);
                                default:
                                    throw new Error("Unknown format")
                            }
                        }
                    }
                    const Ro = "grouping";
                    class zo extends Kn {
                        constructor(e, t) {
                            super(e), this.revogrid = e, this.providers = t
                        }
                        get hasProps() {
                            var e, t, r;
                            return (null === (e = this.options) || void 0 === e ? void 0 : e.props) && (null === (r = null === (t = this.options) || void 0 === t ? void 0 : t.props) || void 0 === r ? void 0 : r.length)
                        }
                        get store() {
                            return this.providers.dataProvider.stores.rgRow.store
                        }
                        get rowItems() {
                            return this.store.get("items")
                        }
                        get trimmed() {
                            return this.store.get("trimmed")
                        }
                        onFocus(e) {
                            po(e.detail.model) && e.preventDefault()
                        }
                        onExpand({
                            virtualIndex: e
                        }) {
                            const {
                                source: t
                            } = this.getSource();
                            let r = this.trimmed.grouping,
                                n = function(e, t) {
                                    return e.get("items")[t]
                                }(this.store, e);
                            if (t[n][uo]) {
                                const {
                                    trimmed: e
                                } = function(e, t) {
                                    const r = t[e],
                                        n = r["__rvgr-id"],
                                        i = {};
                                    let o = e + 1;
                                    const s = t.length;
                                    for (; o < s;) {
                                        const e = t[o];
                                        if (po(e)) {
                                            if (n !== e["__rvgr-id"]) break;
                                            e[uo] = !1
                                        }
                                        i[o++] = !0
                                    }
                                    return r[uo] = !1, {
                                        trimmed: i
                                    }
                                }(n, t);
                                r = Object.assign(Object.assign({}, r), e), this.revogrid.clearFocus()
                            } else {
                                const {
                                    trimmed: n,
                                    items: i
                                } = function(e, t, r) {
                                    const n = r[e],
                                        i = t[n],
                                        o = mo(i["__rvgr-id"]),
                                        s = {};
                                    if (!o) return {
                                        trimmed: s
                                    };
                                    const a = [];
                                    i[uo] = !0;
                                    let l = n + 1;
                                    const c = t.length;
                                    let u = 0;
                                    for (; l < c;) {
                                        const e = t[l],
                                            r = po(e);
                                        if (r) {
                                            if (!Co(o, i, e)) break;
                                            u || (u = e[co])
                                        }(!u || r && u === e[co]) && (s[l] = !1, a.push(l)), l++
                                    }
                                    const h = {
                                        trimmed: s
                                    };
                                    if (a.length) {
                                        const t = [...r];
                                        t.splice(e + 1, 0, ...a), h.items = t
                                    }
                                    return h
                                }(e, t, this.rowItems);
                                r = Object.assign(Object.assign({}, r), n), i && Vn(this.store, i)
                            }
                            this.store.set("source", t), this.revogrid.addTrimmed(r, Ro)
                        }
                        getSource(e = !1) {
                            const t = this.store.get("source"),
                                r = this.store.get("proxyItems");
                            let n = 0;
                            return r.reduce(((r, i) => {
                                const o = t[i];
                                return e ? (po(o) ? o[uo] && (r.prevExpanded[o["__rvgr-value"]] = !0) : (r.source.push(o), r.oldNewIndexes[i] = n, n++), r) : (r.source.push(o), r)
                            }), {
                                source: [],
                                prevExpanded: {},
                                oldNewIndexes: {}
                            })
                        }
                        setColumnGrouping(e) {
                            return !!(null == e ? void 0 : e.length) && (e[0]["__rvgr-column"] = !0, !0)
                        }
                        setColumns({
                            columns: e
                        }) {
                            for (let t of Gn)
                                if (this.setColumnGrouping(e[t])) break
                        }
                        onDrag(e) {
                            const {
                                from: t,
                                to: r
                            } = e.detail, n = r - t >= 0, {
                                source: i
                            } = this.getSource(), o = this.rowItems;
                            let s = n ? t : r;
                            const a = n ? r : t;
                            for (; s < a; s++)
                                if (po(i[o[s]])) return void e.preventDefault()
                        }
                        beforeTrimmedApply(e, t) {
                            if (t === Ii) {
                                const t = this.store.get("source");
                                for (let r in e) e[r] && po(t[r]) && (e[r] = !1)
                            }
                        }
                        subscribe() {
                            this.addEventListener("beforesourceset", (({
                                detail: e
                            }) => this.onDataSet(e))), this.addEventListener("beforecolumnsset", (({
                                detail: e
                            }) => this.setColumns(e))), this.addEventListener("beforetrimmed", (({
                                detail: {
                                    trimmed: e,
                                    trimmedType: t
                                }
                            }) => this.beforeTrimmedApply(e, t))), this.addEventListener("afterSortingApply", (() => this.doSourceUpdate())), this.addEventListener("beforecellfocus", (e => this.onFocus(e))), this.addEventListener("roworderchanged", (e => this.onDrag(e))), this.addEventListener(ho, (({
                                detail: e
                            }) => this.onExpand(e)))
                        }
                        doSourceUpdate(e) {
                            if (!this.hasProps) return;
                            const {
                                source: t,
                                prevExpanded: r,
                                oldNewIndexes: n
                            } = this.getSource(!0), {
                                sourceWithGroups: i,
                                depth: o,
                                trimmed: s,
                                oldNewIndexMap: a,
                                childrenByGroup: l
                            } = fo(t, (e => {
                                var t;
                                return null === (t = this.options) || void 0 === t ? void 0 : t.props.map((t => e[t]))
                            }), Object.assign({
                                prevExpanded: r
                            }, e));
                            this.providers.dataProvider.setData(i, go, {
                                depth: o
                            }, !0), this.updateTrimmed(s, l, n, a)
                        }
                        onDataSet(e) {
                            if (!this.hasProps || !(null == e ? void 0 : e.source) || !e.source.length) return;
                            const t = e.source.filter((e => !po(e))),
                                r = this.revogrid.grouping || {},
                                {
                                    sourceWithGroups: n,
                                    depth: i,
                                    trimmed: o,
                                    oldNewIndexMap: s,
                                    childrenByGroup: a
                                } = fo(t, (e => {
                                    var t;
                                    return null === (t = this.options) || void 0 === t ? void 0 : t.props.map((t => e[t]))
                                }), Object.assign({}, r || {}));
                            e.source = n, this.providers.dataProvider.setGrouping({
                                depth: i
                            }), this.updateTrimmed(o, a, s)
                        }
                        setGrouping(e) {
                            if (this.clearSubscriptions(), this.options = e, !e.props || !Object.keys(e.props).length) return void this.clearGrouping();
                            const {
                                source: t
                            } = this.getSource();
                            t.length && this.doSourceUpdate(Object.assign({}, e));
                            for (let e of Gn)
                                if (this.setColumnGrouping(this.providers.columnProvider.getColumns(e))) {
                                    this.providers.columnProvider.refreshByType(e);
                                    break
                                } this.subscribe()
                        }
                        clearGrouping() {
                            Gn.forEach((e => {
                                const t = this.providers.columnProvider.getColumns(e);
                                let r = !1;
                                t.forEach((e => {
                                    vo(e) && (delete e["__rvgr-column"], r = !0)
                                })), r && this.providers.columnProvider.refreshByType(e)
                            }));
                            const {
                                source: e,
                                oldNewIndexes: t
                            } = this.getSource(!0);
                            this.providers.dataProvider.setData(e, go, void 0, !0), this.updateTrimmed(void 0, void 0, t)
                        }
                        updateTrimmed(e = {}, t = {}, r, n) {
                            const i = function(e, t, r) {
                                const n = {};
                                for (let i in e) {
                                    if (i === Ro) continue;
                                    const o = e[i],
                                        s = {};
                                    for (let e in o) {
                                        let a = t[e];
                                        r && (a = r[a]), o[e] && (s[a] = !0, a !== parseInt(e, 10) && (n[i] = s))
                                    }
                                }
                                return n
                            }(this.trimmed, r, n);
                            for (let e in i) this.revogrid.addTrimmed(i[e], e);
                            this.revogrid.addTrimmed(Object.assign({}, e), Ro)
                        }
                    }
                    class $o {
                        constructor() {
                            this.parentY = 0
                        }
                        start(e, {
                            pos: t,
                            text: r,
                            event: n
                        }) {
                            var i;
                            const {
                                top: o
                            } = e.getBoundingClientRect();
                            this.parentY = o, this.text && (this.text.innerText = r), this.move(t), this.moveTip({
                                x: n.x,
                                y: n.y
                            }), null === (i = this.el) || void 0 === i || i.classList.remove("hidden")
                        }
                        end() {
                            var e;
                            null === (e = this.el) || void 0 === e || e.classList.add("hidden")
                        }
                        move(e) {
                            this.moveElement(e.end - this.parentY)
                        }
                        moveTip({
                            x: e,
                            y: t
                        }) {
                            this.draggable && (this.draggable.style.left = `${e}px`, this.draggable.style.top = `${t}px`)
                        }
                        moveElement(e) {
                            this.rgRow && (this.rgRow.style.transform = `translateY(${e}px)`)
                        }
                    }
                    const Oo = ({
                            ref: e
                        }) => {
                            const t = new $o;
                            return e(t), z("div", {
                                class: "draggable-wrapper hidden",
                                ref: e => t.el = e
                            }, z("div", {
                                class: "draggable",
                                ref: e => t.draggable = e
                            }, z("span", {
                                class: "revo-alt-icon"
                            }), z("span", {
                                ref: e => t.text = e
                            })), z("div", {
                                class: "drag-position",
                                ref: e => t.rgRow = e
                            }))
                        },
                        Fo = ({
                            viewports: e,
                            dimensions: t,
                            orderRef: r,
                            nakedClick: n,
                            registerElement: i,
                            onScroll: o
                        }, s) => {
                            let a;
                            return [z("div", {
                                class: "main-viewport",
                                ref: e => a = e,
                                onClick: e => ((e, t) => {
                                    t === e.target && n(e)
                                })(e, a)
                            }, z("div", {
                                class: "viewports"
                            }, s, z("revogr-scroll-virtual", {
                                class: "vertical",
                                dimension: "rgRow",
                                viewportStore: e.rgRow.store,
                                dimensionStore: t.rgRow.store,
                                ref: e => i(e, "rowScroll"),
                                onScrollVirtual: e => o(e.detail)
                            }), z(Oo, {
                                ref: r
                            }))), z("revogr-scroll-virtual", {
                                class: "horizontal",
                                dimension: "rgCol",
                                viewportStore: e.rgCol.store,
                                dimensionStore: t.rgCol.store,
                                ref: e => i(e, "colScroll"),
                                onScrollVirtual: e => o(e.detail)
                            })]
                        };

                    function jo(e) {
                        return e === Mo
                    }

                    function To(e, t) {
                        const r = Object.assign({}, e);
                        let n = ["x", "y"];
                        for (let t of n) e[t] < 0 && (r[t] = 0);
                        for (let i of n) e[i] >= t[i] && (r[i] = t[i] - 1);
                        return r
                    }

                    function Po(e, t) {
                        return e && t ? {
                            x: Math.min(e.x, t.x),
                            y: Math.min(e.y, t.y),
                            x1: Math.max(e.x, t.x),
                            y1: Math.max(e.y, t.y)
                        } : null
                    }
                    class Do {
                        constructor() {
                            this.unsubscribe = [], this.store = Pn({
                                range: null,
                                tempRange: null,
                                tempRangeType: null,
                                focus: null,
                                edit: null,
                                lastCell: null
                            }), this.store.on("set", ((e, t) => {
                                "tempRange" !== e || t || this.store.set("tempRangeType", null)
                            }))
                        }
                        onChange(e, t) {
                            this.unsubscribe.push(this.store.onChange(e, t))
                        }
                        clearFocus() {
                            Hn(this.store, {
                                focus: null,
                                range: null,
                                edit: null,
                                tempRange: null
                            })
                        }
                        setFocus(e, t) {
                            Hn(this.store, {
                                focus: e,
                                range: Po(e, t),
                                edit: null,
                                tempRange: null
                            })
                        }
                        setTempArea(e) {
                            Hn(this.store, {
                                tempRange: null == e ? void 0 : e.area,
                                tempRangeType: null == e ? void 0 : e.type,
                                edit: null
                            })
                        }
                        clearTemp() {
                            Hn(this.store, {
                                tempRange: null
                            })
                        }
                        setRangeArea(e) {
                            Hn(this.store, {
                                range: e,
                                edit: null,
                                tempRange: null
                            })
                        }
                        setRange(e, t) {
                            this.setRangeArea(Po(e, t))
                        }
                        setLastCell(e) {
                            Hn(this.store, {
                                lastCell: e
                            })
                        }
                        setEdit(e) {
                            const t = this.store.get("focus");
                            Hn(this.store, t && "string" == typeof e ? {
                                edit: {
                                    x: t.x,
                                    y: t.y,
                                    val: e
                                }
                            } : {
                                edit: null
                            })
                        }
                        dispose() {
                            this.unsubscribe.forEach((e => e())), this.store.dispose()
                        }
                    }
                    const Mo = -1;
                    class Ao {
                        constructor() {
                            this.dirty = !1, this.stores = {}, this.columnStores = {}, this.rowStores = {}, this.sections = []
                        }
                        get focusedStore() {
                            var e;
                            for (let t in this.stores)
                                for (let r in this.stores[t]) {
                                    const n = null === (e = this.stores[t][r]) || void 0 === e ? void 0 : e.store.get("focus");
                                    if (n) return {
                                        entity: this.stores[t][r],
                                        cell: n,
                                        position: {
                                            x: parseInt(r, 10),
                                            y: parseInt(t, 10)
                                        }
                                    }
                                }
                            return null
                        }
                        get edit() {
                            var e;
                            return null === (e = this.focusedStore) || void 0 === e ? void 0 : e.entity.store.get("edit")
                        }
                        get focused() {
                            var e;
                            return null === (e = this.focusedStore) || void 0 === e ? void 0 : e.entity.store.get("focus")
                        }
                        registerSection(e) {
                            if (!e) return this.sections.length = 0, void(this.dirty = !0); - 1 === this.sections.indexOf(e) && this.sections.push(e)
                        }
                        beforeUpdate() {
                            if (this.dirty) {
                                for (let e in this.stores)
                                    for (let t in this.stores[e]) this.stores[e][t].dispose();
                                this.dirty = !1
                            }
                        }
                        registerColumn(e) {
                            return jo(e) ? new Do : (this.columnStores[e] || (this.columnStores[e] = new Do), this.columnStores[e])
                        }
                        registerRow(e) {
                            return jo(e) ? new Do : (this.rowStores[e] || (this.rowStores[e] = new Do), this.rowStores[e])
                        }
                        register({
                            x: e,
                            y: t
                        }) {
                            var r, n;
                            return jo(e) || jo(t) ? new Do : (this.stores[t] || (this.stores[t] = {}), this.stores[t][e] || (this.stores[t][e] = new Do, null === (r = this.stores[t][e]) || void 0 === r || r.onChange("range", (r => {
                                this.columnStores[e].setRangeArea(r), this.rowStores[t].setRangeArea(r)
                            })), null === (n = this.stores[t][e]) || void 0 === n || n.store.on("dispose", (() => {
                                var r, n;
                                null === (r = this.columnStores[e]) || void 0 === r || r.dispose(), null === (n = this.rowStores[t]) || void 0 === n || n.dispose(), delete this.rowStores[t], delete this.columnStores[e], this.stores[t] && delete this.stores[t][e], Object.keys(this.stores[t] || {}).length || delete this.stores[t]
                            }))), this.stores[t][e])
                        }
                        setEditByCell({
                            x: e,
                            y: t
                        }, r) {
                            const n = this.stores[t][e];
                            this.focus(n, {
                                focus: r,
                                end: r
                            }), this.setEdit("")
                        }
                        focus(e, {
                            focus: t,
                            end: r
                        }) {
                            let n;
                            for (let t in this.stores)
                                for (let r in this.stores[t]) {
                                    const i = this.stores[t][r];
                                    i !== e ? i.clearFocus() : n = {
                                        x: parseInt(r, 10),
                                        y: parseInt(t, 10)
                                    }
                                }
                            if (!n) return;
                            const i = e.store.get("lastCell"),
                                o = function(e, t) {
                                    const r = {};
                                    let n = ["x", "y"];
                                    for (let t of n)
                                        if (e[t] < 0) return r[t] = e[t], r;
                                    for (let i of n)
                                        if (e[i] >= t[i]) return r[i] = e[i] - t[i], r;
                                    return null
                                }(t, i);
                            let s;
                            if (o)
                                for (let e in o) {
                                    let t, r = e;
                                    switch (r) {
                                        case "x":
                                            t = this.getXStores(n.y);
                                            break;
                                        case "y":
                                            t = this.getYStores(n.x)
                                    }
                                    if (o[r] >= 0) s = t[++n[r]];
                                    else {
                                        s = t[--n[r]];
                                        const e = null == s ? void 0 : s.store.get("lastCell");
                                        e && (o[r] = e[r] + o[r])
                                    }
                                }
                            if (s) {
                                let e = Object.assign(Object.assign({}, t), o);
                                this.focus(s, {
                                    focus: e,
                                    end: e
                                })
                            } else t = To(t, i), r = To(t, i), e.setFocus(t, r)
                        }
                        clearAll() {
                            var e;
                            for (let t in this.stores)
                                for (let r in this.stores[t]) null === (e = this.stores[t][r]) || void 0 === e || e.clearFocus()
                        }
                        setEdit(e) {
                            this.focusedStore && this.focusedStore.entity.setEdit(e)
                        }
                        getXStores(e) {
                            return this.stores[e]
                        }
                        getYStores(e) {
                            const t = {};
                            for (let r in this.stores) t[r] = this.stores[r][e];
                            return t
                        }
                    }
                    const Io = "header",
                        Ho = "footer",
                        No = "content";

                    function Bo(e, t) {
                        return {
                            x: e.viewports[e.colType].store.get("realCount"),
                            y: e.viewports[t].store.get("realCount")
                        }
                    }
                    var Uo = Be((function(e, t) {
                        (function() {
                            var r, n = "Expected a function",
                                i = "__lodash_hash_undefined__",
                                o = "__lodash_placeholder__",
                                s = 32,
                                a = 128,
                                l = 1 / 0,
                                c = 9007199254740991,
                                u = NaN,
                                h = 4294967295,
                                d = [
                                    ["ary", a],
                                    ["bind", 1],
                                    ["bindKey", 2],
                                    ["curry", 8],
                                    ["curryRight", 16],
                                    ["flip", 512],
                                    ["partial", s],
                                    ["partialRight", 64],
                                    ["rearg", 256]
                                ],
                                g = "[object Arguments]",
                                f = "[object Array]",
                                p = "[object Boolean]",
                                v = "[object Date]",
                                m = "[object Error]",
                                C = "[object Function]",
                                w = "[object GeneratorFunction]",
                                b = "[object Map]",
                                L = "[object Number]",
                                x = "[object Object]",
                                y = "[object Promise]",
                                S = "[object RegExp]",
                                _ = "[object Set]",
                                E = "[object String]",
                                k = "[object Symbol]",
                                R = "[object WeakMap]",
                                z = "[object ArrayBuffer]",
                                $ = "[object DataView]",
                                O = "[object Float32Array]",
                                F = "[object Float64Array]",
                                j = "[object Int8Array]",
                                T = "[object Int16Array]",
                                P = "[object Int32Array]",
                                D = "[object Uint8Array]",
                                M = "[object Uint8ClampedArray]",
                                A = "[object Uint16Array]",
                                I = "[object Uint32Array]",
                                H = /\b__p \+= '';/g,
                                N = /\b(__p \+=) '' \+/g,
                                B = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                                U = /&(?:amp|lt|gt|quot|#39);/g,
                                W = /[&<>"']/g,
                                V = RegExp(U.source),
                                Z = RegExp(W.source),
                                G = /<%-([\s\S]+?)%>/g,
                                q = /<%([\s\S]+?)%>/g,
                                X = /<%=([\s\S]+?)%>/g,
                                K = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                                Y = /^\w*$/,
                                J = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                                Q = /[\\^$.*+?()[\]{}|]/g,
                                ee = RegExp(Q.source),
                                te = /^\s+/,
                                re = /\s/,
                                ne = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                                ie = /\{\n\/\* \[wrapped with (.+)\] \*/,
                                oe = /,? & /,
                                se = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                                ae = /[()=,{}\[\]\/\s]/,
                                le = /\\(\\)?/g,
                                ce = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                                ue = /\w*$/,
                                he = /^[-+]0x[0-9a-f]+$/i,
                                de = /^0b[01]+$/i,
                                ge = /^\[object .+?Constructor\]$/,
                                fe = /^0o[0-7]+$/i,
                                pe = /^(?:0|[1-9]\d*)$/,
                                ve = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                                me = /($^)/,
                                Ce = /['\n\r\u2028\u2029\\]/g,
                                we = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                                be = "a-z\\xdf-\\xf6\\xf8-\\xff",
                                Le = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                                xe = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                                ye = "[" + xe + "]",
                                Se = "[" + we + "]",
                                _e = "\\d+",
                                Ee = "[" + be + "]",
                                ke = "[^\\ud800-\\udfff" + xe + _e + "\\u2700-\\u27bf" + be + Le + "]",
                                Re = "\\ud83c[\\udffb-\\udfff]",
                                ze = "[^\\ud800-\\udfff]",
                                $e = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                                Oe = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                                Fe = "[" + Le + "]",
                                je = "(?:" + Ee + "|" + ke + ")",
                                Te = "(?:" + Fe + "|" + ke + ")",
                                Pe = "(?:['???](?:d|ll|m|re|s|t|ve))?",
                                De = "(?:['???](?:D|LL|M|RE|S|T|VE))?",
                                Me = "(?:" + Se + "|" + Re + ")?",
                                Ae = "[\\ufe0e\\ufe0f]?",
                                Ie = Ae + Me + "(?:\\u200d(?:" + [ze, $e, Oe].join("|") + ")" + Ae + Me + ")*",
                                He = "(?:" + ["[\\u2700-\\u27bf]", $e, Oe].join("|") + ")" + Ie,
                                Be = "(?:" + [ze + Se + "?", Se, $e, Oe, "[\\ud800-\\udfff]"].join("|") + ")",
                                Ue = RegExp("['???]", "g"),
                                We = RegExp(Se, "g"),
                                Ve = RegExp(Re + "(?=" + Re + ")|" + Be + Ie, "g"),
                                Ze = RegExp([Fe + "?" + Ee + "+" + Pe + "(?=" + [ye, Fe, "$"].join("|") + ")", Te + "+" + De + "(?=" + [ye, Fe + je, "$"].join("|") + ")", Fe + "?" + je + "+" + Pe, Fe + "+" + De, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", _e, He].join("|"), "g"),
                                Ge = RegExp("[\\u200d\\ud800-\\udfff" + we + "\\ufe0e\\ufe0f]"),
                                qe = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                                Xe = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                                Ke = -1,
                                Ye = {};
                            Ye[O] = Ye[F] = Ye[j] = Ye[T] = Ye[P] = Ye[D] = Ye[M] = Ye[A] = Ye[I] = !0, Ye[g] = Ye[f] = Ye[z] = Ye[p] = Ye[$] = Ye[v] = Ye[m] = Ye[C] = Ye[b] = Ye[L] = Ye[x] = Ye[S] = Ye[_] = Ye[E] = Ye[R] = !1;
                            var Je = {};
                            Je[g] = Je[f] = Je[z] = Je[$] = Je[p] = Je[v] = Je[O] = Je[F] = Je[j] = Je[T] = Je[P] = Je[b] = Je[L] = Je[x] = Je[S] = Je[_] = Je[E] = Je[k] = Je[D] = Je[M] = Je[A] = Je[I] = !0, Je[m] = Je[C] = Je[R] = !1;
                            var Qe = {
                                    "\\": "\\",
                                    "'": "'",
                                    "\n": "n",
                                    "\r": "r",
                                    "\u2028": "u2028",
                                    "\u2029": "u2029"
                                },
                                et = parseFloat,
                                tt = parseInt,
                                rt = "object" == typeof Ne && Ne && Ne.Object === Object && Ne,
                                nt = "object" == typeof self && self && self.Object === Object && self,
                                it = rt || nt || Function("return this")(),
                                ot = t && !t.nodeType && t,
                                st = ot && e && !e.nodeType && e,
                                at = st && st.exports === ot,
                                lt = at && rt.process,
                                ct = function() {
                                    try {
                                        return st && st.require && st.require("util").types || lt && lt.binding && lt.binding("util")
                                    } catch (e) {}
                                }(),
                                ut = ct && ct.isArrayBuffer,
                                ht = ct && ct.isDate,
                                dt = ct && ct.isMap,
                                gt = ct && ct.isRegExp,
                                ft = ct && ct.isSet,
                                pt = ct && ct.isTypedArray;

                            function vt(e, t, r) {
                                switch (r.length) {
                                    case 0:
                                        return e.call(t);
                                    case 1:
                                        return e.call(t, r[0]);
                                    case 2:
                                        return e.call(t, r[0], r[1]);
                                    case 3:
                                        return e.call(t, r[0], r[1], r[2])
                                }
                                return e.apply(t, r)
                            }

                            function mt(e, t, r, n) {
                                for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) {
                                    var s = e[i];
                                    t(n, s, r(s), e)
                                }
                                return n
                            }

                            function Ct(e, t) {
                                for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
                                return e
                            }

                            function wt(e, t) {
                                for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                                return e
                            }

                            function bt(e, t) {
                                for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                                    if (!t(e[r], r, e)) return !1;
                                return !0
                            }

                            function Lt(e, t) {
                                for (var r = -1, n = null == e ? 0 : e.length, i = 0, o = []; ++r < n;) {
                                    var s = e[r];
                                    t(s, r, e) && (o[i++] = s)
                                }
                                return o
                            }

                            function xt(e, t) {
                                return !(null == e || !e.length) && Ft(e, t, 0) > -1
                            }

                            function yt(e, t, r) {
                                for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                                    if (r(t, e[n])) return !0;
                                return !1
                            }

                            function St(e, t) {
                                for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
                                return i
                            }

                            function _t(e, t) {
                                for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
                                return e
                            }

                            function Et(e, t, r, n) {
                                var i = -1,
                                    o = null == e ? 0 : e.length;
                                for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
                                return r
                            }

                            function kt(e, t, r, n) {
                                var i = null == e ? 0 : e.length;
                                for (n && i && (r = e[--i]); i--;) r = t(r, e[i], i, e);
                                return r
                            }

                            function Rt(e, t) {
                                for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }
                            var zt = Dt("length");

                            function $t(e, t, r) {
                                var n;
                                return r(e, (function(e, r, i) {
                                    if (t(e, r, i)) return n = r, !1
                                })), n
                            }

                            function Ot(e, t, r, n) {
                                for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                                    if (t(e[o], o, e)) return o;
                                return -1
                            }

                            function Ft(e, t, r) {
                                return t == t ? function(e, t, r) {
                                    for (var n = r - 1, i = e.length; ++n < i;)
                                        if (e[n] === t) return n;
                                    return -1
                                }(e, t, r) : Ot(e, Tt, r)
                            }

                            function jt(e, t, r, n) {
                                for (var i = r - 1, o = e.length; ++i < o;)
                                    if (n(e[i], t)) return i;
                                return -1
                            }

                            function Tt(e) {
                                return e != e
                            }

                            function Pt(e, t) {
                                var r = null == e ? 0 : e.length;
                                return r ? It(e, t) / r : u
                            }

                            function Dt(e) {
                                return function(t) {
                                    return null == t ? r : t[e]
                                }
                            }

                            function Mt(e) {
                                return function(t) {
                                    return null == e ? r : e[t]
                                }
                            }

                            function At(e, t, r, n, i) {
                                return i(e, (function(e, i, o) {
                                    r = n ? (n = !1, e) : t(r, e, i, o)
                                })), r
                            }

                            function It(e, t) {
                                for (var n, i = -1, o = e.length; ++i < o;) {
                                    var s = t(e[i]);
                                    s !== r && (n = n === r ? s : n + s)
                                }
                                return n
                            }

                            function Ht(e, t) {
                                for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                                return n
                            }

                            function Nt(e) {
                                return e ? e.slice(0, or(e) + 1).replace(te, "") : e
                            }

                            function Bt(e) {
                                return function(t) {
                                    return e(t)
                                }
                            }

                            function Ut(e, t) {
                                return St(t, (function(t) {
                                    return e[t]
                                }))
                            }

                            function Wt(e, t) {
                                return e.has(t)
                            }

                            function Vt(e, t) {
                                for (var r = -1, n = e.length; ++r < n && Ft(t, e[r], 0) > -1;);
                                return r
                            }

                            function Zt(e, t) {
                                for (var r = e.length; r-- && Ft(t, e[r], 0) > -1;);
                                return r
                            }

                            function Gt(e, t) {
                                for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                                return n
                            }
                            var qt = Mt({
                                    ??: "A",
                                    ??: "A",
                                    ??: "A",
                                    ??: "A",
                                    ??: "A",
                                    ??: "A",
                                    ??: "a",
                                    ??: "a",
                                    ??: "a",
                                    ??: "a",
                                    ??: "a",
                                    ??: "a",
                                    ??: "C",
                                    ??: "c",
                                    ??: "D",
                                    ??: "d",
                                    ??: "E",
                                    ??: "E",
                                    ??: "E",
                                    ??: "E",
                                    ??: "e",
                                    ??: "e",
                                    ??: "e",
                                    ??: "e",
                                    ??: "I",
                                    ??: "I",
                                    ??: "I",
                                    ??: "I",
                                    ??: "i",
                                    ??: "i",
                                    ??: "i",
                                    ??: "i",
                                    ??: "N",
                                    ??: "n",
                                    ??: "O",
                                    ??: "O",
                                    ??: "O",
                                    ??: "O",
                                    ??: "O",
                                    ??: "O",
                                    ??: "o",
                                    ??: "o",
                                    ??: "o",
                                    ??: "o",
                                    ??: "o",
                                    ??: "o",
                                    ??: "U",
                                    ??: "U",
                                    ??: "U",
                                    ??: "U",
                                    ??: "u",
                                    ??: "u",
                                    ??: "u",
                                    ??: "u",
                                    ??: "Y",
                                    ??: "y",
                                    ??: "y",
                                    ??: "Ae",
                                    ??: "ae",
                                    ??: "Th",
                                    ??: "th",
                                    ??: "ss",
                                    ??: "A",
                                    ??: "A",
                                    ??: "A",
                                    ??: "a",
                                    ??: "a",
                                    ??: "a",
                                    ??: "C",
                                    ??: "C",
                                    ??: "C",
                                    ??: "C",
                                    ??: "c",
                                    ??: "c",
                                    ??: "c",
                                    ??: "c",
                                    ??: "D",
                                    ??: "D",
                                    ??: "d",
                                    ??: "d",
                                    ??: "E",
                                    ??: "E",
                                    ??: "E",
                                    ??: "E",
                                    ??: "E",
                                    ??: "e",
                                    ??: "e",
                                    ??: "e",
                                    ??: "e",
                                    ??: "e",
                                    ??: "G",
                                    ??: "G",
                                    ??: "G",
                                    ??: "G",
                                    ??: "g",
                                    ??: "g",
                                    ??: "g",
                                    ??: "g",
                                    ??: "H",
                                    ??: "H",
                                    ??: "h",
                                    ??: "h",
                                    ??: "I",
                                    ??: "I",
                                    ??: "I",
                                    ??: "I",
                                    ??: "I",
                                    ??: "i",
                                    ??: "i",
                                    ??: "i",
                                    ??: "i",
                                    ??: "i",
                                    ??: "J",
                                    ??: "j",
                                    ??: "K",
                                    ??: "k",
                                    ??: "k",
                                    ??: "L",
                                    ??: "L",
                                    ??: "L",
                                    ??: "L",
                                    ??: "L",
                                    ??: "l",
                                    ??: "l",
                                    ??: "l",
                                    ??: "l",
                                    ??: "l",
                                    ??: "N",
                                    ??: "N",
                                    ??: "N",
                                    ??: "N",
                                    ??: "n",
                                    ??: "n",
                                    ??: "n",
                                    ??: "n",
                                    ??: "O",
                                    ??: "O",
                                    ??: "O",
                                    ??: "o",
                                    ??: "o",
                                    ??: "o",
                                    ??: "R",
                                    ??: "R",
                                    ??: "R",
                                    ??: "r",
                                    ??: "r",
                                    ??: "r",
                                    ??: "S",
                                    ??: "S",
                                    ??: "S",
                                    ??: "S",
                                    ??: "s",
                                    ??: "s",
                                    ??: "s",
                                    ??: "s",
                                    ??: "T",
                                    ??: "T",
                                    ??: "T",
                                    ??: "t",
                                    ??: "t",
                                    ??: "t",
                                    ??: "U",
                                    ??: "U",
                                    ??: "U",
                                    ??: "U",
                                    ??: "U",
                                    ??: "U",
                                    ??: "u",
                                    ??: "u",
                                    ??: "u",
                                    ??: "u",
                                    ??: "u",
                                    ??: "u",
                                    ??: "W",
                                    ??: "w",
                                    ??: "Y",
                                    ??: "y",
                                    ??: "Y",
                                    ??: "Z",
                                    ??: "Z",
                                    ??: "Z",
                                    ??: "z",
                                    ??: "z",
                                    ??: "z",
                                    ??: "IJ",
                                    ??: "ij",
                                    ??: "Oe",
                                    ??: "oe",
                                    ??: "'n",
                                    ??: "s"
                                }),
                                Xt = Mt({
                                    "&": "&amp;",
                                    "<": "&lt;",
                                    ">": "&gt;",
                                    '"': "&quot;",
                                    "'": "&#39;"
                                });

                            function Kt(e) {
                                return "\\" + Qe[e]
                            }

                            function Yt(e) {
                                return Ge.test(e)
                            }

                            function Jt(e) {
                                var t = -1,
                                    r = Array(e.size);
                                return e.forEach((function(e, n) {
                                    r[++t] = [n, e]
                                })), r
                            }

                            function Qt(e, t) {
                                return function(r) {
                                    return e(t(r))
                                }
                            }

                            function er(e, t) {
                                for (var r = -1, n = e.length, i = 0, s = []; ++r < n;) {
                                    var a = e[r];
                                    a !== t && a !== o || (e[r] = o, s[i++] = r)
                                }
                                return s
                            }

                            function tr(e) {
                                var t = -1,
                                    r = Array(e.size);
                                return e.forEach((function(e) {
                                    r[++t] = e
                                })), r
                            }

                            function rr(e) {
                                var t = -1,
                                    r = Array(e.size);
                                return e.forEach((function(e) {
                                    r[++t] = [e, e]
                                })), r
                            }

                            function nr(e) {
                                return Yt(e) ? function(e) {
                                    for (var t = Ve.lastIndex = 0; Ve.test(e);) ++t;
                                    return t
                                }(e) : zt(e)
                            }

                            function ir(e) {
                                return Yt(e) ? function(e) {
                                    return e.match(Ve) || []
                                }(e) : function(e) {
                                    return e.split("")
                                }(e)
                            }

                            function or(e) {
                                for (var t = e.length; t-- && re.test(e.charAt(t)););
                                return t
                            }
                            var sr = Mt({
                                    "&amp;": "&",
                                    "&lt;": "<",
                                    "&gt;": ">",
                                    "&quot;": '"',
                                    "&#39;": "'"
                                }),
                                ar = function e(t) {
                                    var re = (t = null == t ? it : ar.defaults(it.Object(), t, ar.pick(it, Xe))).Array,
                                        we = t.Date,
                                        be = t.Error,
                                        Le = t.Function,
                                        xe = t.Math,
                                        ye = t.Object,
                                        Se = t.RegExp,
                                        _e = t.String,
                                        Ee = t.TypeError,
                                        ke = re.prototype,
                                        Re = Le.prototype,
                                        ze = ye.prototype,
                                        $e = t["__core-js_shared__"],
                                        Oe = Re.toString,
                                        Fe = ze.hasOwnProperty,
                                        je = 0,
                                        Te = function() {
                                            var e = /[^.]+$/.exec($e && $e.keys && $e.keys.IE_PROTO || "");
                                            return e ? "Symbol(src)_1." + e : ""
                                        }(),
                                        Pe = ze.toString,
                                        De = Oe.call(ye),
                                        Me = it._,
                                        Ae = Se("^" + Oe.call(Fe).replace(Q, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                        Ie = at ? t.Buffer : r,
                                        He = t.Symbol,
                                        Ne = t.Uint8Array,
                                        Be = Ie ? Ie.allocUnsafe : r,
                                        Ve = Qt(ye.getPrototypeOf, ye),
                                        Ge = ye.create,
                                        Qe = ze.propertyIsEnumerable,
                                        rt = ke.splice,
                                        nt = He ? He.isConcatSpreadable : r,
                                        ot = He ? He.iterator : r,
                                        st = He ? He.toStringTag : r,
                                        lt = function() {
                                            try {
                                                var e = lo(ye, "defineProperty");
                                                return e({}, "", {}), e
                                            } catch (e) {}
                                        }(),
                                        ct = t.clearTimeout !== it.clearTimeout && t.clearTimeout,
                                        zt = we && we.now !== it.Date.now && we.now,
                                        Mt = t.setTimeout !== it.setTimeout && t.setTimeout,
                                        lr = xe.ceil,
                                        cr = xe.floor,
                                        ur = ye.getOwnPropertySymbols,
                                        hr = Ie ? Ie.isBuffer : r,
                                        dr = t.isFinite,
                                        gr = ke.join,
                                        fr = Qt(ye.keys, ye),
                                        pr = xe.max,
                                        vr = xe.min,
                                        mr = we.now,
                                        Cr = t.parseInt,
                                        wr = xe.random,
                                        br = ke.reverse,
                                        Lr = lo(t, "DataView"),
                                        xr = lo(t, "Map"),
                                        yr = lo(t, "Promise"),
                                        Sr = lo(t, "Set"),
                                        _r = lo(t, "WeakMap"),
                                        Er = lo(ye, "create"),
                                        kr = _r && new _r,
                                        Rr = {},
                                        zr = Do(Lr),
                                        $r = Do(xr),
                                        Or = Do(yr),
                                        Fr = Do(Sr),
                                        jr = Do(_r),
                                        Tr = He ? He.prototype : r,
                                        Pr = Tr ? Tr.valueOf : r,
                                        Dr = Tr ? Tr.toString : r;

                                    function Mr(e) {
                                        if (Qs(e) && !Bs(e) && !(e instanceof Nr)) {
                                            if (e instanceof Hr) return e;
                                            if (Fe.call(e, "__wrapped__")) return Mo(e)
                                        }
                                        return new Hr(e)
                                    }
                                    var Ar = function() {
                                        function e() {}
                                        return function(t) {
                                            if (!Js(t)) return {};
                                            if (Ge) return Ge(t);
                                            e.prototype = t;
                                            var n = new e;
                                            return e.prototype = r, n
                                        }
                                    }();

                                    function Ir() {}

                                    function Hr(e, t) {
                                        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                                    }

                                    function Nr(e) {
                                        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = h, this.__views__ = []
                                    }

                                    function Br(e) {
                                        var t = -1,
                                            r = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < r;) {
                                            var n = e[t];
                                            this.set(n[0], n[1])
                                        }
                                    }

                                    function Ur(e) {
                                        var t = -1,
                                            r = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < r;) {
                                            var n = e[t];
                                            this.set(n[0], n[1])
                                        }
                                    }

                                    function Wr(e) {
                                        var t = -1,
                                            r = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < r;) {
                                            var n = e[t];
                                            this.set(n[0], n[1])
                                        }
                                    }

                                    function Vr(e) {
                                        var t = -1,
                                            r = null == e ? 0 : e.length;
                                        for (this.__data__ = new Wr; ++t < r;) this.add(e[t])
                                    }

                                    function Zr(e) {
                                        var t = this.__data__ = new Ur(e);
                                        this.size = t.size
                                    }

                                    function Gr(e, t) {
                                        var r = Bs(e),
                                            n = !r && Ns(e),
                                            i = !r && !n && Zs(e),
                                            o = !r && !n && !i && aa(e),
                                            s = r || n || i || o,
                                            a = s ? Ht(e.length, _e) : [],
                                            l = a.length;
                                        for (var c in e) !t && !Fe.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || vo(c, l)) || a.push(c);
                                        return a
                                    }

                                    function qr(e) {
                                        var t = e.length;
                                        return t ? e[Vn(0, t - 1)] : r
                                    }

                                    function Xr(e, t) {
                                        return jo(Ei(e), on(t, 0, e.length))
                                    }

                                    function Kr(e) {
                                        return jo(Ei(e))
                                    }

                                    function Yr(e, t, n) {
                                        (n !== r && !As(e[t], n) || n === r && !(t in e)) && rn(e, t, n)
                                    }

                                    function Jr(e, t, n) {
                                        var i = e[t];
                                        Fe.call(e, t) && As(i, n) && (n !== r || t in e) || rn(e, t, n)
                                    }

                                    function Qr(e, t) {
                                        for (var r = e.length; r--;)
                                            if (As(e[r][0], t)) return r;
                                        return -1
                                    }

                                    function en(e, t, r, n) {
                                        return un(e, (function(e, i, o) {
                                            t(n, e, r(e), o)
                                        })), n
                                    }

                                    function tn(e, t) {
                                        return e && ki(t, za(t), e)
                                    }

                                    function rn(e, t, r) {
                                        "__proto__" == t && lt ? lt(e, t, {
                                            configurable: !0,
                                            enumerable: !0,
                                            value: r,
                                            writable: !0
                                        }) : e[t] = r
                                    }

                                    function nn(e, t) {
                                        for (var n = -1, i = t.length, o = re(i), s = null == e; ++n < i;) o[n] = s ? r : Sa(e, t[n]);
                                        return o
                                    }

                                    function on(e, t, n) {
                                        return e == e && (n !== r && (e = e <= n ? e : n), t !== r && (e = e >= t ? e : t)), e
                                    }

                                    function sn(e, t, n, i, o, s) {
                                        var a, l = 1 & t,
                                            c = 2 & t,
                                            u = 4 & t;
                                        if (n && (a = o ? n(e, i, o, s) : n(e)), a !== r) return a;
                                        if (!Js(e)) return e;
                                        var h = Bs(e);
                                        if (h) {
                                            if (a = function(e) {
                                                    var t = e.length,
                                                        r = new e.constructor(t);
                                                    return t && "string" == typeof e[0] && Fe.call(e, "index") && (r.index = e.index, r.input = e.input), r
                                                }(e), !l) return Ei(e, a)
                                        } else {
                                            var d = ho(e),
                                                f = d == C || d == w;
                                            if (Zs(e)) return bi(e, l);
                                            if (d == x || d == g || f && !o) {
                                                if (a = c || f ? {} : fo(e), !l) return c ? function(e, t) {
                                                    return ki(e, uo(e), t)
                                                }(e, function(e, t) {
                                                    return e && ki(t, $a(t), e)
                                                }(a, e)) : function(e, t) {
                                                    return ki(e, co(e), t)
                                                }(e, tn(a, e))
                                            } else {
                                                if (!Je[d]) return o ? e : {};
                                                a = function(e, t, r) {
                                                    var n, i = e.constructor;
                                                    switch (t) {
                                                        case z:
                                                            return Li(e);
                                                        case p:
                                                        case v:
                                                            return new i(+e);
                                                        case $:
                                                            return function(e, t) {
                                                                var r = t ? Li(e.buffer) : e.buffer;
                                                                return new e.constructor(r, e.byteOffset, e.byteLength)
                                                            }(e, r);
                                                        case O:
                                                        case F:
                                                        case j:
                                                        case T:
                                                        case P:
                                                        case D:
                                                        case M:
                                                        case A:
                                                        case I:
                                                            return xi(e, r);
                                                        case b:
                                                            return new i;
                                                        case L:
                                                        case E:
                                                            return new i(e);
                                                        case S:
                                                            return function(e) {
                                                                var t = new e.constructor(e.source, ue.exec(e));
                                                                return t.lastIndex = e.lastIndex, t
                                                            }(e);
                                                        case _:
                                                            return new i;
                                                        case k:
                                                            return n = e, Pr ? ye(Pr.call(n)) : {}
                                                    }
                                                }(e, d, l)
                                            }
                                        }
                                        s || (s = new Zr);
                                        var m = s.get(e);
                                        if (m) return m;
                                        s.set(e, a), ia(e) ? e.forEach((function(r) {
                                            a.add(sn(r, t, n, r, e, s))
                                        })) : ea(e) && e.forEach((function(r, i) {
                                            a.set(i, sn(r, t, n, i, e, s))
                                        }));
                                        var y = h ? r : (u ? c ? to : eo : c ? $a : za)(e);
                                        return Ct(y || e, (function(r, i) {
                                            y && (r = e[i = r]), Jr(a, i, sn(r, t, n, i, e, s))
                                        })), a
                                    }

                                    function an(e, t, n) {
                                        var i = n.length;
                                        if (null == e) return !i;
                                        for (e = ye(e); i--;) {
                                            var o = n[i],
                                                s = t[o],
                                                a = e[o];
                                            if (a === r && !(o in e) || !s(a)) return !1
                                        }
                                        return !0
                                    }

                                    function ln(e, t, i) {
                                        if ("function" != typeof e) throw new Ee(n);
                                        return zo((function() {
                                            e.apply(r, i)
                                        }), t)
                                    }

                                    function cn(e, t, r, n) {
                                        var i = -1,
                                            o = xt,
                                            s = !0,
                                            a = e.length,
                                            l = [],
                                            c = t.length;
                                        if (!a) return l;
                                        r && (t = St(t, Bt(r))), n ? (o = yt, s = !1) : t.length >= 200 && (o = Wt, s = !1, t = new Vr(t));
                                        e: for (; ++i < a;) {
                                            var u = e[i],
                                                h = null == r ? u : r(u);
                                            if (u = n || 0 !== u ? u : 0, s && h == h) {
                                                for (var d = c; d--;)
                                                    if (t[d] === h) continue e;
                                                l.push(u)
                                            } else o(t, h, n) || l.push(u)
                                        }
                                        return l
                                    }
                                    Mr.templateSettings = {
                                        escape: G,
                                        evaluate: q,
                                        interpolate: X,
                                        variable: "",
                                        imports: {
                                            _: Mr
                                        }
                                    }, Mr.prototype = Ir.prototype, Mr.prototype.constructor = Mr, Hr.prototype = Ar(Ir.prototype), Hr.prototype.constructor = Hr, Nr.prototype = Ar(Ir.prototype), Nr.prototype.constructor = Nr, Br.prototype.clear = function() {
                                        this.__data__ = Er ? Er(null) : {}, this.size = 0
                                    }, Br.prototype.delete = function(e) {
                                        var t = this.has(e) && delete this.__data__[e];
                                        return this.size -= t ? 1 : 0, t
                                    }, Br.prototype.get = function(e) {
                                        var t = this.__data__;
                                        if (Er) {
                                            var n = t[e];
                                            return n === i ? r : n
                                        }
                                        return Fe.call(t, e) ? t[e] : r
                                    }, Br.prototype.has = function(e) {
                                        var t = this.__data__;
                                        return Er ? t[e] !== r : Fe.call(t, e)
                                    }, Br.prototype.set = function(e, t) {
                                        var n = this.__data__;
                                        return this.size += this.has(e) ? 0 : 1, n[e] = Er && t === r ? i : t, this
                                    }, Ur.prototype.clear = function() {
                                        this.__data__ = [], this.size = 0
                                    }, Ur.prototype.delete = function(e) {
                                        var t = this.__data__,
                                            r = Qr(t, e);
                                        return !(r < 0 || (r == t.length - 1 ? t.pop() : rt.call(t, r, 1), --this.size, 0))
                                    }, Ur.prototype.get = function(e) {
                                        var t = this.__data__,
                                            n = Qr(t, e);
                                        return n < 0 ? r : t[n][1]
                                    }, Ur.prototype.has = function(e) {
                                        return Qr(this.__data__, e) > -1
                                    }, Ur.prototype.set = function(e, t) {
                                        var r = this.__data__,
                                            n = Qr(r, e);
                                        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
                                    }, Wr.prototype.clear = function() {
                                        this.size = 0, this.__data__ = {
                                            hash: new Br,
                                            map: new(xr || Ur),
                                            string: new Br
                                        }
                                    }, Wr.prototype.delete = function(e) {
                                        var t = so(this, e).delete(e);
                                        return this.size -= t ? 1 : 0, t
                                    }, Wr.prototype.get = function(e) {
                                        return so(this, e).get(e)
                                    }, Wr.prototype.has = function(e) {
                                        return so(this, e).has(e)
                                    }, Wr.prototype.set = function(e, t) {
                                        var r = so(this, e),
                                            n = r.size;
                                        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
                                    }, Vr.prototype.add = Vr.prototype.push = function(e) {
                                        return this.__data__.set(e, i), this
                                    }, Vr.prototype.has = function(e) {
                                        return this.__data__.has(e)
                                    }, Zr.prototype.clear = function() {
                                        this.__data__ = new Ur, this.size = 0
                                    }, Zr.prototype.delete = function(e) {
                                        var t = this.__data__,
                                            r = t.delete(e);
                                        return this.size = t.size, r
                                    }, Zr.prototype.get = function(e) {
                                        return this.__data__.get(e)
                                    }, Zr.prototype.has = function(e) {
                                        return this.__data__.has(e)
                                    }, Zr.prototype.set = function(e, t) {
                                        var r = this.__data__;
                                        if (r instanceof Ur) {
                                            var n = r.__data__;
                                            if (!xr || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                                            r = this.__data__ = new Wr(n)
                                        }
                                        return r.set(e, t), this.size = r.size, this
                                    };
                                    var un = $i(Cn),
                                        hn = $i(wn, !0);

                                    function dn(e, t) {
                                        var r = !0;
                                        return un(e, (function(e, n, i) {
                                            return r = !!t(e, n, i)
                                        })), r
                                    }

                                    function gn(e, t, n) {
                                        for (var i = -1, o = e.length; ++i < o;) {
                                            var s = e[i],
                                                a = t(s);
                                            if (null != a && (l === r ? a == a && !sa(a) : n(a, l))) var l = a,
                                                c = s
                                        }
                                        return c
                                    }

                                    function fn(e, t) {
                                        var r = [];
                                        return un(e, (function(e, n, i) {
                                            t(e, n, i) && r.push(e)
                                        })), r
                                    }

                                    function pn(e, t, r, n, i) {
                                        var o = -1,
                                            s = e.length;
                                        for (r || (r = po), i || (i = []); ++o < s;) {
                                            var a = e[o];
                                            t > 0 && r(a) ? t > 1 ? pn(a, t - 1, r, n, i) : _t(i, a) : n || (i[i.length] = a)
                                        }
                                        return i
                                    }
                                    var vn = Oi(),
                                        mn = Oi(!0);

                                    function Cn(e, t) {
                                        return e && vn(e, t, za)
                                    }

                                    function wn(e, t) {
                                        return e && mn(e, t, za)
                                    }

                                    function bn(e, t) {
                                        return Lt(t, (function(t) {
                                            return Xs(e[t])
                                        }))
                                    }

                                    function Ln(e, t) {
                                        for (var n = 0, i = (t = vi(t, e)).length; null != e && n < i;) e = e[Po(t[n++])];
                                        return n && n == i ? e : r
                                    }

                                    function xn(e, t, r) {
                                        var n = t(e);
                                        return Bs(e) ? n : _t(n, r(e))
                                    }

                                    function yn(e) {
                                        return null == e ? e === r ? "[object Undefined]" : "[object Null]" : st && st in ye(e) ? function(e) {
                                            var t = Fe.call(e, st),
                                                n = e[st];
                                            try {
                                                e[st] = r;
                                                var i = !0
                                            } catch (e) {}
                                            var o = Pe.call(e);
                                            return i && (t ? e[st] = n : delete e[st]), o
                                        }(e) : function(e) {
                                            return Pe.call(e)
                                        }(e)
                                    }

                                    function Sn(e, t) {
                                        return e > t
                                    }

                                    function _n(e, t) {
                                        return null != e && Fe.call(e, t)
                                    }

                                    function En(e, t) {
                                        return null != e && t in ye(e)
                                    }

                                    function kn(e, t, n) {
                                        for (var i = n ? yt : xt, o = e[0].length, s = e.length, a = s, l = re(s), c = 1 / 0, u = []; a--;) {
                                            var h = e[a];
                                            a && t && (h = St(h, Bt(t))), c = vr(h.length, c), l[a] = !n && (t || o >= 120 && h.length >= 120) ? new Vr(a && h) : r
                                        }
                                        h = e[0];
                                        var d = -1,
                                            g = l[0];
                                        e: for (; ++d < o && u.length < c;) {
                                            var f = h[d],
                                                p = t ? t(f) : f;
                                            if (f = n || 0 !== f ? f : 0, !(g ? Wt(g, p) : i(u, p, n))) {
                                                for (a = s; --a;) {
                                                    var v = l[a];
                                                    if (!(v ? Wt(v, p) : i(e[a], p, n))) continue e
                                                }
                                                g && g.push(p), u.push(f)
                                            }
                                        }
                                        return u
                                    }

                                    function Rn(e, t, n) {
                                        var i = null == (e = _o(e, t = vi(t, e))) ? e : e[Po(qo(t))];
                                        return null == i ? r : vt(i, e, n)
                                    }

                                    function zn(e) {
                                        return Qs(e) && yn(e) == g
                                    }

                                    function $n(e, t, n, i, o) {
                                        return e === t || (null == e || null == t || !Qs(e) && !Qs(t) ? e != e && t != t : function(e, t, n, i, o, s) {
                                            var a = Bs(e),
                                                l = Bs(t),
                                                c = a ? f : ho(e),
                                                u = l ? f : ho(t),
                                                h = (c = c == g ? x : c) == x,
                                                d = (u = u == g ? x : u) == x,
                                                C = c == u;
                                            if (C && Zs(e)) {
                                                if (!Zs(t)) return !1;
                                                a = !0, h = !1
                                            }
                                            if (C && !h) return s || (s = new Zr), a || aa(e) ? Ji(e, t, n, i, o, s) : function(e, t, r, n, i, o, s) {
                                                switch (r) {
                                                    case $:
                                                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                                        e = e.buffer, t = t.buffer;
                                                    case z:
                                                        return !(e.byteLength != t.byteLength || !o(new Ne(e), new Ne(t)));
                                                    case p:
                                                    case v:
                                                    case L:
                                                        return As(+e, +t);
                                                    case m:
                                                        return e.name == t.name && e.message == t.message;
                                                    case S:
                                                    case E:
                                                        return e == t + "";
                                                    case b:
                                                        var a = Jt;
                                                    case _:
                                                        var l = 1 & n;
                                                        if (a || (a = tr), e.size != t.size && !l) return !1;
                                                        var c = s.get(e);
                                                        if (c) return c == t;
                                                        n |= 2, s.set(e, t);
                                                        var u = Ji(a(e), a(t), n, i, o, s);
                                                        return s.delete(e), u;
                                                    case k:
                                                        if (Pr) return Pr.call(e) == Pr.call(t)
                                                }
                                                return !1
                                            }(e, t, c, n, i, o, s);
                                            if (!(1 & n)) {
                                                var w = h && Fe.call(e, "__wrapped__"),
                                                    y = d && Fe.call(t, "__wrapped__");
                                                if (w || y) {
                                                    var R = w ? e.value() : e,
                                                        O = y ? t.value() : t;
                                                    return s || (s = new Zr), o(R, O, n, i, s)
                                                }
                                            }
                                            return !!C && (s || (s = new Zr), function(e, t, n, i, o, s) {
                                                var a = 1 & n,
                                                    l = eo(e),
                                                    c = l.length;
                                                if (c != eo(t).length && !a) return !1;
                                                for (var u = c; u--;) {
                                                    var h = l[u];
                                                    if (!(a ? h in t : Fe.call(t, h))) return !1
                                                }
                                                var d = s.get(e),
                                                    g = s.get(t);
                                                if (d && g) return d == t && g == e;
                                                var f = !0;
                                                s.set(e, t), s.set(t, e);
                                                for (var p = a; ++u < c;) {
                                                    var v = e[h = l[u]],
                                                        m = t[h];
                                                    if (i) var C = a ? i(m, v, h, t, e, s) : i(v, m, h, e, t, s);
                                                    if (!(C === r ? v === m || o(v, m, n, i, s) : C)) {
                                                        f = !1;
                                                        break
                                                    }
                                                    p || (p = "constructor" == h)
                                                }
                                                if (f && !p) {
                                                    var w = e.constructor,
                                                        b = t.constructor;
                                                    w == b || !("constructor" in e) || !("constructor" in t) || "function" == typeof w && w instanceof w && "function" == typeof b && b instanceof b || (f = !1)
                                                }
                                                return s.delete(e), s.delete(t), f
                                            }(e, t, n, i, o, s))
                                        }(e, t, n, i, $n, o))
                                    }

                                    function On(e, t, n, i) {
                                        var o = n.length,
                                            s = o,
                                            a = !i;
                                        if (null == e) return !s;
                                        for (e = ye(e); o--;) {
                                            var l = n[o];
                                            if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1
                                        }
                                        for (; ++o < s;) {
                                            var c = (l = n[o])[0],
                                                u = e[c],
                                                h = l[1];
                                            if (a && l[2]) {
                                                if (u === r && !(c in e)) return !1
                                            } else {
                                                var d = new Zr;
                                                if (i) var g = i(u, h, c, e, t, d);
                                                if (!(g === r ? $n(h, u, 3, i, d) : g)) return !1
                                            }
                                        }
                                        return !0
                                    }

                                    function Fn(e) {
                                        return !(!Js(e) || (t = e, Te && Te in t)) && (Xs(e) ? Ae : ge).test(Do(e));
                                        var t
                                    }

                                    function jn(e) {
                                        return "function" == typeof e ? e : null == e ? tl : "object" == typeof e ? Bs(e) ? An(e[0], e[1]) : Mn(e) : ul(e)
                                    }

                                    function Tn(e) {
                                        if (!Lo(e)) return fr(e);
                                        var t = [];
                                        for (var r in ye(e)) Fe.call(e, r) && "constructor" != r && t.push(r);
                                        return t
                                    }

                                    function Pn(e, t) {
                                        return e < t
                                    }

                                    function Dn(e, t) {
                                        var r = -1,
                                            n = Ws(e) ? re(e.length) : [];
                                        return un(e, (function(e, i, o) {
                                            n[++r] = t(e, i, o)
                                        })), n
                                    }

                                    function Mn(e) {
                                        var t = ao(e);
                                        return 1 == t.length && t[0][2] ? yo(t[0][0], t[0][1]) : function(r) {
                                            return r === e || On(r, e, t)
                                        }
                                    }

                                    function An(e, t) {
                                        return Co(e) && xo(t) ? yo(Po(e), t) : function(n) {
                                            var i = Sa(n, e);
                                            return i === r && i === t ? _a(n, e) : $n(t, i, 3)
                                        }
                                    }

                                    function In(e, t, n, i, o) {
                                        e !== t && vn(t, (function(s, a) {
                                            if (o || (o = new Zr), Js(s)) ! function(e, t, n, i, o, s, a) {
                                                var l = ko(e, n),
                                                    c = ko(t, n),
                                                    u = a.get(c);
                                                if (u) Yr(e, n, u);
                                                else {
                                                    var h = s ? s(l, c, n + "", e, t, a) : r,
                                                        d = h === r;
                                                    if (d) {
                                                        var g = Bs(c),
                                                            f = !g && Zs(c),
                                                            p = !g && !f && aa(c);
                                                        h = c, g || f || p ? Bs(l) ? h = l : Vs(l) ? h = Ei(l) : f ? (d = !1, h = bi(c, !0)) : p ? (d = !1, h = xi(c, !0)) : h = [] : ra(c) || Ns(c) ? (h = l, Ns(l) ? h = pa(l) : Js(l) && !Xs(l) || (h = fo(c))) : d = !1
                                                    }
                                                    d && (a.set(c, h), o(h, c, i, s, a), a.delete(c)), Yr(e, n, h)
                                                }
                                            }(e, t, a, n, In, i, o);
                                            else {
                                                var l = i ? i(ko(e, a), s, a + "", e, t, o) : r;
                                                l === r && (l = s), Yr(e, a, l)
                                            }
                                        }), $a)
                                    }

                                    function Hn(e, t) {
                                        var n = e.length;
                                        if (n) return vo(t += t < 0 ? n : 0, n) ? e[t] : r
                                    }

                                    function Nn(e, t, r) {
                                        t = t.length ? St(t, (function(e) {
                                            return Bs(e) ? function(t) {
                                                return Ln(t, 1 === e.length ? e[0] : e)
                                            } : e
                                        })) : [tl];
                                        var n = -1;
                                        return t = St(t, Bt(oo())),
                                            function(e, t) {
                                                var n = e.length;
                                                for (e.sort((function(e, t) {
                                                        return function(e, t, r) {
                                                            for (var n = -1, i = e.criteria, o = t.criteria, s = i.length, a = r.length; ++n < s;) {
                                                                var l = yi(i[n], o[n]);
                                                                if (l) return n >= a ? l : l * ("desc" == r[n] ? -1 : 1)
                                                            }
                                                            return e.index - t.index
                                                        }(e, t, r)
                                                    })); n--;) e[n] = e[n].value;
                                                return e
                                            }(Dn(e, (function(e, r, i) {
                                                return {
                                                    criteria: St(t, (function(t) {
                                                        return t(e)
                                                    })),
                                                    index: ++n,
                                                    value: e
                                                }
                                            })))
                                    }

                                    function Bn(e, t, r) {
                                        for (var n = -1, i = t.length, o = {}; ++n < i;) {
                                            var s = t[n],
                                                a = Ln(e, s);
                                            r(a, s) && Kn(o, vi(s, e), a)
                                        }
                                        return o
                                    }

                                    function Un(e, t, r, n) {
                                        var i = n ? jt : Ft,
                                            o = -1,
                                            s = t.length,
                                            a = e;
                                        for (e === t && (t = Ei(t)), r && (a = St(e, Bt(r))); ++o < s;)
                                            for (var l = 0, c = t[o], u = r ? r(c) : c;
                                                (l = i(a, u, l, n)) > -1;) a !== e && rt.call(a, l, 1), rt.call(e, l, 1);
                                        return e
                                    }

                                    function Wn(e, t) {
                                        for (var r = e ? t.length : 0, n = r - 1; r--;) {
                                            var i = t[r];
                                            if (r == n || i !== o) {
                                                var o = i;
                                                vo(i) ? rt.call(e, i, 1) : li(e, i)
                                            }
                                        }
                                        return e
                                    }

                                    function Vn(e, t) {
                                        return e + cr(wr() * (t - e + 1))
                                    }

                                    function Zn(e, t) {
                                        var r = "";
                                        if (!e || t < 1 || t > c) return r;
                                        do {
                                            t % 2 && (r += e), (t = cr(t / 2)) && (e += e)
                                        } while (t);
                                        return r
                                    }

                                    function Gn(e, t) {
                                        return $o(So(e, t, tl), e + "")
                                    }

                                    function qn(e) {
                                        return qr(Aa(e))
                                    }

                                    function Xn(e, t) {
                                        var r = Aa(e);
                                        return jo(r, on(t, 0, r.length))
                                    }

                                    function Kn(e, t, n, i) {
                                        if (!Js(e)) return e;
                                        for (var o = -1, s = (t = vi(t, e)).length, a = s - 1, l = e; null != l && ++o < s;) {
                                            var c = Po(t[o]),
                                                u = n;
                                            if ("__proto__" === c || "constructor" === c || "prototype" === c) return e;
                                            if (o != a) {
                                                var h = l[c];
                                                (u = i ? i(h, c, l) : r) === r && (u = Js(h) ? h : vo(t[o + 1]) ? [] : {})
                                            }
                                            Jr(l, c, u), l = l[c]
                                        }
                                        return e
                                    }
                                    var Yn = kr ? function(e, t) {
                                            return kr.set(e, t), e
                                        } : tl,
                                        Jn = lt ? function(e, t) {
                                            return lt(e, "toString", {
                                                configurable: !0,
                                                enumerable: !1,
                                                value: Ja(t),
                                                writable: !0
                                            })
                                        } : tl;

                                    function Qn(e) {
                                        return jo(Aa(e))
                                    }

                                    function ei(e, t, r) {
                                        var n = -1,
                                            i = e.length;
                                        t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r) < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
                                        for (var o = re(i); ++n < i;) o[n] = e[n + t];
                                        return o
                                    }

                                    function ti(e, t) {
                                        var r;
                                        return un(e, (function(e, n, i) {
                                            return !(r = t(e, n, i))
                                        })), !!r
                                    }

                                    function ri(e, t, r) {
                                        var n = 0,
                                            i = null == e ? n : e.length;
                                        if ("number" == typeof t && t == t && i <= 2147483647) {
                                            for (; n < i;) {
                                                var o = n + i >>> 1,
                                                    s = e[o];
                                                null !== s && !sa(s) && (r ? s <= t : s < t) ? n = o + 1 : i = o
                                            }
                                            return i
                                        }
                                        return ni(e, t, tl, r)
                                    }

                                    function ni(e, t, n, i) {
                                        var o = 0,
                                            s = null == e ? 0 : e.length;
                                        if (0 === s) return 0;
                                        for (var a = (t = n(t)) != t, l = null === t, c = sa(t), u = t === r; o < s;) {
                                            var h = cr((o + s) / 2),
                                                d = n(e[h]),
                                                g = d !== r,
                                                f = null === d,
                                                p = d == d,
                                                v = sa(d);
                                            if (a) var m = i || p;
                                            else m = u ? p && (i || g) : l ? p && g && (i || !f) : c ? p && g && !f && (i || !v) : !f && !v && (i ? d <= t : d < t);
                                            m ? o = h + 1 : s = h
                                        }
                                        return vr(s, 4294967294)
                                    }

                                    function ii(e, t) {
                                        for (var r = -1, n = e.length, i = 0, o = []; ++r < n;) {
                                            var s = e[r],
                                                a = t ? t(s) : s;
                                            if (!r || !As(a, l)) {
                                                var l = a;
                                                o[i++] = 0 === s ? 0 : s
                                            }
                                        }
                                        return o
                                    }

                                    function oi(e) {
                                        return "number" == typeof e ? e : sa(e) ? u : +e
                                    }

                                    function si(e) {
                                        if ("string" == typeof e) return e;
                                        if (Bs(e)) return St(e, si) + "";
                                        if (sa(e)) return Dr ? Dr.call(e) : "";
                                        var t = e + "";
                                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                                    }

                                    function ai(e, t, r) {
                                        var n = -1,
                                            i = xt,
                                            o = e.length,
                                            s = !0,
                                            a = [],
                                            l = a;
                                        if (r) s = !1, i = yt;
                                        else if (o >= 200) {
                                            var c = t ? null : Zi(e);
                                            if (c) return tr(c);
                                            s = !1, i = Wt, l = new Vr
                                        } else l = t ? [] : a;
                                        e: for (; ++n < o;) {
                                            var u = e[n],
                                                h = t ? t(u) : u;
                                            if (u = r || 0 !== u ? u : 0, s && h == h) {
                                                for (var d = l.length; d--;)
                                                    if (l[d] === h) continue e;
                                                t && l.push(h), a.push(u)
                                            } else i(l, h, r) || (l !== a && l.push(h), a.push(u))
                                        }
                                        return a
                                    }

                                    function li(e, t) {
                                        return null == (e = _o(e, t = vi(t, e))) || delete e[Po(qo(t))]
                                    }

                                    function ci(e, t, r, n) {
                                        return Kn(e, t, r(Ln(e, t)), n)
                                    }

                                    function ui(e, t, r, n) {
                                        for (var i = e.length, o = n ? i : -1;
                                            (n ? o-- : ++o < i) && t(e[o], o, e););
                                        return r ? ei(e, n ? 0 : o, n ? o + 1 : i) : ei(e, n ? o + 1 : 0, n ? i : o)
                                    }

                                    function hi(e, t) {
                                        var r = e;
                                        return r instanceof Nr && (r = r.value()), Et(t, (function(e, t) {
                                            return t.func.apply(t.thisArg, _t([e], t.args))
                                        }), r)
                                    }

                                    function di(e, t, r) {
                                        var n = e.length;
                                        if (n < 2) return n ? ai(e[0]) : [];
                                        for (var i = -1, o = re(n); ++i < n;)
                                            for (var s = e[i], a = -1; ++a < n;) a != i && (o[i] = cn(o[i] || s, e[a], t, r));
                                        return ai(pn(o, 1), t, r)
                                    }

                                    function gi(e, t, n) {
                                        for (var i = -1, o = e.length, s = t.length, a = {}; ++i < o;) {
                                            var l = i < s ? t[i] : r;
                                            n(a, e[i], l)
                                        }
                                        return a
                                    }

                                    function fi(e) {
                                        return Vs(e) ? e : []
                                    }

                                    function pi(e) {
                                        return "function" == typeof e ? e : tl
                                    }

                                    function vi(e, t) {
                                        return Bs(e) ? e : Co(e, t) ? [e] : To(va(e))
                                    }
                                    var mi = Gn;

                                    function Ci(e, t, n) {
                                        var i = e.length;
                                        return n = n === r ? i : n, !t && n >= i ? e : ei(e, t, n)
                                    }
                                    var wi = ct || function(e) {
                                        return it.clearTimeout(e)
                                    };

                                    function bi(e, t) {
                                        if (t) return e.slice();
                                        var r = e.length,
                                            n = Be ? Be(r) : new e.constructor(r);
                                        return e.copy(n), n
                                    }

                                    function Li(e) {
                                        var t = new e.constructor(e.byteLength);
                                        return new Ne(t).set(new Ne(e)), t
                                    }

                                    function xi(e, t) {
                                        var r = t ? Li(e.buffer) : e.buffer;
                                        return new e.constructor(r, e.byteOffset, e.length)
                                    }

                                    function yi(e, t) {
                                        if (e !== t) {
                                            var n = e !== r,
                                                i = null === e,
                                                o = e == e,
                                                s = sa(e),
                                                a = t !== r,
                                                l = null === t,
                                                c = t == t,
                                                u = sa(t);
                                            if (!l && !u && !s && e > t || s && a && c && !l && !u || i && a && c || !n && c || !o) return 1;
                                            if (!i && !s && !u && e < t || u && n && o && !i && !s || l && n && o || !a && o || !c) return -1
                                        }
                                        return 0
                                    }

                                    function Si(e, t, r, n) {
                                        for (var i = -1, o = e.length, s = r.length, a = -1, l = t.length, c = pr(o - s, 0), u = re(l + c), h = !n; ++a < l;) u[a] = t[a];
                                        for (; ++i < s;)(h || i < o) && (u[r[i]] = e[i]);
                                        for (; c--;) u[a++] = e[i++];
                                        return u
                                    }

                                    function _i(e, t, r, n) {
                                        for (var i = -1, o = e.length, s = -1, a = r.length, l = -1, c = t.length, u = pr(o - a, 0), h = re(u + c), d = !n; ++i < u;) h[i] = e[i];
                                        for (var g = i; ++l < c;) h[g + l] = t[l];
                                        for (; ++s < a;)(d || i < o) && (h[g + r[s]] = e[i++]);
                                        return h
                                    }

                                    function Ei(e, t) {
                                        var r = -1,
                                            n = e.length;
                                        for (t || (t = re(n)); ++r < n;) t[r] = e[r];
                                        return t
                                    }

                                    function ki(e, t, n, i) {
                                        var o = !n;
                                        n || (n = {});
                                        for (var s = -1, a = t.length; ++s < a;) {
                                            var l = t[s],
                                                c = i ? i(n[l], e[l], l, n, e) : r;
                                            c === r && (c = e[l]), o ? rn(n, l, c) : Jr(n, l, c)
                                        }
                                        return n
                                    }

                                    function Ri(e, t) {
                                        return function(r, n) {
                                            var i = Bs(r) ? mt : en,
                                                o = t ? t() : {};
                                            return i(r, e, oo(n, 2), o)
                                        }
                                    }

                                    function zi(e) {
                                        return Gn((function(t, n) {
                                            var i = -1,
                                                o = n.length,
                                                s = o > 1 ? n[o - 1] : r,
                                                a = o > 2 ? n[2] : r;
                                            for (s = e.length > 3 && "function" == typeof s ? (o--, s) : r, a && mo(n[0], n[1], a) && (s = o < 3 ? r : s, o = 1), t = ye(t); ++i < o;) {
                                                var l = n[i];
                                                l && e(t, l, i, s)
                                            }
                                            return t
                                        }))
                                    }

                                    function $i(e, t) {
                                        return function(r, n) {
                                            if (null == r) return r;
                                            if (!Ws(r)) return e(r, n);
                                            for (var i = r.length, o = t ? i : -1, s = ye(r);
                                                (t ? o-- : ++o < i) && !1 !== n(s[o], o, s););
                                            return r
                                        }
                                    }

                                    function Oi(e) {
                                        return function(t, r, n) {
                                            for (var i = -1, o = ye(t), s = n(t), a = s.length; a--;) {
                                                var l = s[e ? a : ++i];
                                                if (!1 === r(o[l], l, o)) break
                                            }
                                            return t
                                        }
                                    }

                                    function Fi(e) {
                                        return function(t) {
                                            var n = Yt(t = va(t)) ? ir(t) : r,
                                                i = n ? n[0] : t.charAt(0),
                                                o = n ? Ci(n, 1).join("") : t.slice(1);
                                            return i[e]() + o
                                        }
                                    }

                                    function ji(e) {
                                        return function(t) {
                                            return Et(Xa(Na(t).replace(Ue, "")), e, "")
                                        }
                                    }

                                    function Ti(e) {
                                        return function() {
                                            var t = arguments;
                                            switch (t.length) {
                                                case 0:
                                                    return new e;
                                                case 1:
                                                    return new e(t[0]);
                                                case 2:
                                                    return new e(t[0], t[1]);
                                                case 3:
                                                    return new e(t[0], t[1], t[2]);
                                                case 4:
                                                    return new e(t[0], t[1], t[2], t[3]);
                                                case 5:
                                                    return new e(t[0], t[1], t[2], t[3], t[4]);
                                                case 6:
                                                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                                case 7:
                                                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                            }
                                            var r = Ar(e.prototype),
                                                n = e.apply(r, t);
                                            return Js(n) ? n : r
                                        }
                                    }

                                    function Pi(e) {
                                        return function(t, n, i) {
                                            var o = ye(t);
                                            if (!Ws(t)) {
                                                var s = oo(n, 3);
                                                t = za(t), n = function(e) {
                                                    return s(o[e], e, o)
                                                }
                                            }
                                            var a = e(t, n, i);
                                            return a > -1 ? o[s ? t[a] : a] : r
                                        }
                                    }

                                    function Di(e) {
                                        return Qi((function(t) {
                                            var i = t.length,
                                                o = i,
                                                s = Hr.prototype.thru;
                                            for (e && t.reverse(); o--;) {
                                                var a = t[o];
                                                if ("function" != typeof a) throw new Ee(n);
                                                if (s && !l && "wrapper" == no(a)) var l = new Hr([], !0)
                                            }
                                            for (o = l ? o : i; ++o < i;) {
                                                var c = no(a = t[o]),
                                                    u = "wrapper" == c ? ro(a) : r;
                                                l = u && wo(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? l[no(u[0])].apply(l, u[3]) : 1 == a.length && wo(a) ? l[c]() : l.thru(a)
                                            }
                                            return function() {
                                                var e = arguments,
                                                    r = e[0];
                                                if (l && 1 == e.length && Bs(r)) return l.plant(r).value();
                                                for (var n = 0, o = i ? t[n].apply(this, e) : r; ++n < i;) o = t[n].call(this, o);
                                                return o
                                            }
                                        }))
                                    }

                                    function Mi(e, t, n, i, o, s, l, c, u, h) {
                                        var d = t & a,
                                            g = 1 & t,
                                            f = 2 & t,
                                            p = 24 & t,
                                            v = 512 & t,
                                            m = f ? r : Ti(e);
                                        return function r() {
                                            for (var a = arguments.length, C = re(a), w = a; w--;) C[w] = arguments[w];
                                            if (p) var b = io(r),
                                                L = Gt(C, b);
                                            if (i && (C = Si(C, i, o, p)), s && (C = _i(C, s, l, p)), a -= L, p && a < h) {
                                                var x = er(C, b);
                                                return Wi(e, t, Mi, r.placeholder, n, C, x, c, u, h - a)
                                            }
                                            var y = g ? n : this,
                                                S = f ? y[e] : e;
                                            return a = C.length, c ? C = Eo(C, c) : v && a > 1 && C.reverse(), d && u < a && (C.length = u), this && this !== it && this instanceof r && (S = m || Ti(S)), S.apply(y, C)
                                        }
                                    }

                                    function Ai(e, t) {
                                        return function(r, n) {
                                            return function(e, t, r, n) {
                                                return Cn(e, (function(e, i, o) {
                                                    t(n, r(e), i, o)
                                                })), n
                                            }(r, e, t(n), {})
                                        }
                                    }

                                    function Ii(e, t) {
                                        return function(n, i) {
                                            var o;
                                            if (n === r && i === r) return t;
                                            if (n !== r && (o = n), i !== r) {
                                                if (o === r) return i;
                                                "string" == typeof n || "string" == typeof i ? (n = si(n), i = si(i)) : (n = oi(n), i = oi(i)), o = e(n, i)
                                            }
                                            return o
                                        }
                                    }

                                    function Hi(e) {
                                        return Qi((function(t) {
                                            return t = St(t, Bt(oo())), Gn((function(r) {
                                                var n = this;
                                                return e(t, (function(e) {
                                                    return vt(e, n, r)
                                                }))
                                            }))
                                        }))
                                    }

                                    function Ni(e, t) {
                                        var n = (t = t === r ? " " : si(t)).length;
                                        if (n < 2) return n ? Zn(t, e) : t;
                                        var i = Zn(t, lr(e / nr(t)));
                                        return Yt(t) ? Ci(ir(i), 0, e).join("") : i.slice(0, e)
                                    }

                                    function Bi(e) {
                                        return function(t, n, i) {
                                            return i && "number" != typeof i && mo(t, n, i) && (n = i = r), t = ha(t), n === r ? (n = t, t = 0) : n = ha(n),
                                                function(e, t, r, n) {
                                                    for (var i = -1, o = pr(lr((t - e) / (r || 1)), 0), s = re(o); o--;) s[n ? o : ++i] = e, e += r;
                                                    return s
                                                }(t, n, i = i === r ? t < n ? 1 : -1 : ha(i), e)
                                        }
                                    }

                                    function Ui(e) {
                                        return function(t, r) {
                                            return "string" == typeof t && "string" == typeof r || (t = fa(t), r = fa(r)), e(t, r)
                                        }
                                    }

                                    function Wi(e, t, n, i, o, a, l, c, u, h) {
                                        var d = 8 & t;
                                        t |= d ? s : 64, 4 & (t &= ~(d ? 64 : s)) || (t &= -4);
                                        var g = [e, t, o, d ? a : r, d ? l : r, d ? r : a, d ? r : l, c, u, h],
                                            f = n.apply(r, g);
                                        return wo(e) && Ro(f, g), f.placeholder = i, Oo(f, e, t)
                                    }

                                    function Vi(e) {
                                        var t = xe[e];
                                        return function(e, r) {
                                            if (e = fa(e), (r = null == r ? 0 : vr(da(r), 292)) && dr(e)) {
                                                var n = (va(e) + "e").split("e");
                                                return +((n = (va(t(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
                                            }
                                            return t(e)
                                        }
                                    }
                                    var Zi = Sr && 1 / tr(new Sr([, -0]))[1] == l ? function(e) {
                                        return new Sr(e)
                                    } : sl;

                                    function Gi(e) {
                                        return function(t) {
                                            var r = ho(t);
                                            return r == b ? Jt(t) : r == _ ? rr(t) : function(e, t) {
                                                return St(t, (function(t) {
                                                    return [t, e[t]]
                                                }))
                                            }(t, e(t))
                                        }
                                    }

                                    function qi(e, t, i, l, c, u, h, d) {
                                        var g = 2 & t;
                                        if (!g && "function" != typeof e) throw new Ee(n);
                                        var f = l ? l.length : 0;
                                        if (f || (t &= -97, l = c = r), h = h === r ? h : pr(da(h), 0), d = d === r ? d : da(d), f -= c ? c.length : 0, 64 & t) {
                                            var p = l,
                                                v = c;
                                            l = c = r
                                        }
                                        var m = g ? r : ro(e),
                                            C = [e, t, i, l, c, p, v, u, h, d];
                                        if (m && function(e, t) {
                                                var r = e[1],
                                                    n = t[1],
                                                    i = r | n,
                                                    s = i < 131,
                                                    l = n == a && 8 == r || n == a && 256 == r && e[7].length <= t[8] || 384 == n && t[7].length <= t[8] && 8 == r;
                                                if (!s && !l) return e;
                                                1 & n && (e[2] = t[2], i |= 1 & r ? 0 : 4);
                                                var c = t[3];
                                                if (c) {
                                                    var u = e[3];
                                                    e[3] = u ? Si(u, c, t[4]) : c, e[4] = u ? er(e[3], o) : t[4]
                                                }(c = t[5]) && (u = e[5], e[5] = u ? _i(u, c, t[6]) : c, e[6] = u ? er(e[5], o) : t[6]), (c = t[7]) && (e[7] = c), n & a && (e[8] = null == e[8] ? t[8] : vr(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i
                                            }(C, m), e = C[0], t = C[1], i = C[2], l = C[3], c = C[4], !(d = C[9] = C[9] === r ? g ? 0 : e.length : pr(C[9] - f, 0)) && 24 & t && (t &= -25), t && 1 != t) w = 8 == t || 16 == t ? function(e, t, n) {
                                            var i = Ti(e);
                                            return function o() {
                                                for (var s = arguments.length, a = re(s), l = s, c = io(o); l--;) a[l] = arguments[l];
                                                var u = s < 3 && a[0] !== c && a[s - 1] !== c ? [] : er(a, c);
                                                return (s -= u.length) < n ? Wi(e, t, Mi, o.placeholder, r, a, u, r, r, n - s) : vt(this && this !== it && this instanceof o ? i : e, this, a)
                                            }
                                        }(e, t, d) : t != s && 33 != t || c.length ? Mi.apply(r, C) : function(e, t, r, n) {
                                            var i = 1 & t,
                                                o = Ti(e);
                                            return function t() {
                                                for (var s = -1, a = arguments.length, l = -1, c = n.length, u = re(c + a), h = this && this !== it && this instanceof t ? o : e; ++l < c;) u[l] = n[l];
                                                for (; a--;) u[l++] = arguments[++s];
                                                return vt(h, i ? r : this, u)
                                            }
                                        }(e, t, i, l);
                                        else var w = function(e, t, r) {
                                            var n = 1 & t,
                                                i = Ti(e);
                                            return function t() {
                                                return (this && this !== it && this instanceof t ? i : e).apply(n ? r : this, arguments)
                                            }
                                        }(e, t, i);
                                        return Oo((m ? Yn : Ro)(w, C), e, t)
                                    }

                                    function Xi(e, t, n, i) {
                                        return e === r || As(e, ze[n]) && !Fe.call(i, n) ? t : e
                                    }

                                    function Ki(e, t, n, i, o, s) {
                                        return Js(e) && Js(t) && (s.set(t, e), In(e, t, r, Ki, s), s.delete(t)), e
                                    }

                                    function Yi(e) {
                                        return ra(e) ? r : e
                                    }

                                    function Ji(e, t, n, i, o, s) {
                                        var a = 1 & n,
                                            l = e.length,
                                            c = t.length;
                                        if (l != c && !(a && c > l)) return !1;
                                        var u = s.get(e),
                                            h = s.get(t);
                                        if (u && h) return u == t && h == e;
                                        var d = -1,
                                            g = !0,
                                            f = 2 & n ? new Vr : r;
                                        for (s.set(e, t), s.set(t, e); ++d < l;) {
                                            var p = e[d],
                                                v = t[d];
                                            if (i) var m = a ? i(v, p, d, t, e, s) : i(p, v, d, e, t, s);
                                            if (m !== r) {
                                                if (m) continue;
                                                g = !1;
                                                break
                                            }
                                            if (f) {
                                                if (!Rt(t, (function(e, t) {
                                                        if (!Wt(f, t) && (p === e || o(p, e, n, i, s))) return f.push(t)
                                                    }))) {
                                                    g = !1;
                                                    break
                                                }
                                            } else if (p !== v && !o(p, v, n, i, s)) {
                                                g = !1;
                                                break
                                            }
                                        }
                                        return s.delete(e), s.delete(t), g
                                    }

                                    function Qi(e) {
                                        return $o(So(e, r, Uo), e + "")
                                    }

                                    function eo(e) {
                                        return xn(e, za, co)
                                    }

                                    function to(e) {
                                        return xn(e, $a, uo)
                                    }
                                    var ro = kr ? function(e) {
                                        return kr.get(e)
                                    } : sl;

                                    function no(e) {
                                        for (var t = e.name + "", r = Rr[t], n = Fe.call(Rr, t) ? r.length : 0; n--;) {
                                            var i = r[n],
                                                o = i.func;
                                            if (null == o || o == e) return i.name
                                        }
                                        return t
                                    }

                                    function io(e) {
                                        return (Fe.call(Mr, "placeholder") ? Mr : e).placeholder
                                    }

                                    function oo() {
                                        var e = Mr.iteratee || rl;
                                        return e = e === rl ? jn : e, arguments.length ? e(arguments[0], arguments[1]) : e
                                    }

                                    function so(e, t) {
                                        var r, n, i = e.__data__;
                                        return ("string" == (n = typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof t ? "string" : "hash"] : i.map
                                    }

                                    function ao(e) {
                                        for (var t = za(e), r = t.length; r--;) {
                                            var n = t[r],
                                                i = e[n];
                                            t[r] = [n, i, xo(i)]
                                        }
                                        return t
                                    }

                                    function lo(e, t) {
                                        var n = function(e, t) {
                                            return null == e ? r : e[t]
                                        }(e, t);
                                        return Fn(n) ? n : r
                                    }
                                    var co = ur ? function(e) {
                                            return null == e ? [] : (e = ye(e), Lt(ur(e), (function(t) {
                                                return Qe.call(e, t)
                                            })))
                                        } : gl,
                                        uo = ur ? function(e) {
                                            for (var t = []; e;) _t(t, co(e)), e = Ve(e);
                                            return t
                                        } : gl,
                                        ho = yn;

                                    function go(e, t, r) {
                                        for (var n = -1, i = (t = vi(t, e)).length, o = !1; ++n < i;) {
                                            var s = Po(t[n]);
                                            if (!(o = null != e && r(e, s))) break;
                                            e = e[s]
                                        }
                                        return o || ++n != i ? o : !!(i = null == e ? 0 : e.length) && Ys(i) && vo(s, i) && (Bs(e) || Ns(e))
                                    }

                                    function fo(e) {
                                        return "function" != typeof e.constructor || Lo(e) ? {} : Ar(Ve(e))
                                    }

                                    function po(e) {
                                        return Bs(e) || Ns(e) || !!(nt && e && e[nt])
                                    }

                                    function vo(e, t) {
                                        var r = typeof e;
                                        return !!(t = null == t ? c : t) && ("number" == r || "symbol" != r && pe.test(e)) && e > -1 && e % 1 == 0 && e < t
                                    }

                                    function mo(e, t, r) {
                                        if (!Js(r)) return !1;
                                        var n = typeof t;
                                        return !!("number" == n ? Ws(r) && vo(t, r.length) : "string" == n && t in r) && As(r[t], e)
                                    }

                                    function Co(e, t) {
                                        if (Bs(e)) return !1;
                                        var r = typeof e;
                                        return !("number" != r && "symbol" != r && "boolean" != r && null != e && !sa(e)) || Y.test(e) || !K.test(e) || null != t && e in ye(t)
                                    }

                                    function wo(e) {
                                        var t = no(e),
                                            r = Mr[t];
                                        if ("function" != typeof r || !(t in Nr.prototype)) return !1;
                                        if (e === r) return !0;
                                        var n = ro(r);
                                        return !!n && e === n[0]
                                    }(Lr && ho(new Lr(new ArrayBuffer(1))) != $ || xr && ho(new xr) != b || yr && ho(yr.resolve()) != y || Sr && ho(new Sr) != _ || _r && ho(new _r) != R) && (ho = function(e) {
                                        var t = yn(e),
                                            n = t == x ? e.constructor : r,
                                            i = n ? Do(n) : "";
                                        if (i) switch (i) {
                                            case zr:
                                                return $;
                                            case $r:
                                                return b;
                                            case Or:
                                                return y;
                                            case Fr:
                                                return _;
                                            case jr:
                                                return R
                                        }
                                        return t
                                    });
                                    var bo = $e ? Xs : fl;

                                    function Lo(e) {
                                        var t = e && e.constructor;
                                        return e === ("function" == typeof t && t.prototype || ze)
                                    }

                                    function xo(e) {
                                        return e == e && !Js(e)
                                    }

                                    function yo(e, t) {
                                        return function(n) {
                                            return null != n && n[e] === t && (t !== r || e in ye(n))
                                        }
                                    }

                                    function So(e, t, n) {
                                        return t = pr(t === r ? e.length - 1 : t, 0),
                                            function() {
                                                for (var r = arguments, i = -1, o = pr(r.length - t, 0), s = re(o); ++i < o;) s[i] = r[t + i];
                                                i = -1;
                                                for (var a = re(t + 1); ++i < t;) a[i] = r[i];
                                                return a[t] = n(s), vt(e, this, a)
                                            }
                                    }

                                    function _o(e, t) {
                                        return t.length < 2 ? e : Ln(e, ei(t, 0, -1))
                                    }

                                    function Eo(e, t) {
                                        for (var n = e.length, i = vr(t.length, n), o = Ei(e); i--;) {
                                            var s = t[i];
                                            e[i] = vo(s, n) ? o[s] : r
                                        }
                                        return e
                                    }

                                    function ko(e, t) {
                                        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                                    }
                                    var Ro = Fo(Yn),
                                        zo = Mt || function(e, t) {
                                            return it.setTimeout(e, t)
                                        },
                                        $o = Fo(Jn);

                                    function Oo(e, t, r) {
                                        var n = t + "";
                                        return $o(e, function(e, t) {
                                            var r = t.length;
                                            if (!r) return e;
                                            var n = r - 1;
                                            return t[n] = (r > 1 ? "& " : "") + t[n], t = t.join(r > 2 ? ", " : " "), e.replace(ne, "{\n/* [wrapped with " + t + "] */\n")
                                        }(n, function(e, t) {
                                            return Ct(d, (function(r) {
                                                var n = "_." + r[0];
                                                t & r[1] && !xt(e, n) && e.push(n)
                                            })), e.sort()
                                        }(function(e) {
                                            var t = e.match(ie);
                                            return t ? t[1].split(oe) : []
                                        }(n), r)))
                                    }

                                    function Fo(e) {
                                        var t = 0,
                                            n = 0;
                                        return function() {
                                            var i = mr(),
                                                o = 16 - (i - n);
                                            if (n = i, o > 0) {
                                                if (++t >= 800) return arguments[0]
                                            } else t = 0;
                                            return e.apply(r, arguments)
                                        }
                                    }

                                    function jo(e, t) {
                                        var n = -1,
                                            i = e.length,
                                            o = i - 1;
                                        for (t = t === r ? i : t; ++n < t;) {
                                            var s = Vn(n, o),
                                                a = e[s];
                                            e[s] = e[n], e[n] = a
                                        }
                                        return e.length = t, e
                                    }
                                    var To = function(e) {
                                        var t = Fs((function(e) {
                                                var t = [];
                                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(J, (function(e, r, n, i) {
                                                    t.push(n ? i.replace(le, "$1") : r || e)
                                                })), t
                                            }), (function(e) {
                                                return 500 === r.size && r.clear(), e
                                            })),
                                            r = t.cache;
                                        return t
                                    }();

                                    function Po(e) {
                                        if ("string" == typeof e || sa(e)) return e;
                                        var t = e + "";
                                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                                    }

                                    function Do(e) {
                                        if (null != e) {
                                            try {
                                                return Oe.call(e)
                                            } catch (e) {}
                                            try {
                                                return e + ""
                                            } catch (e) {}
                                        }
                                        return ""
                                    }

                                    function Mo(e) {
                                        if (e instanceof Nr) return e.clone();
                                        var t = new Hr(e.__wrapped__, e.__chain__);
                                        return t.__actions__ = Ei(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                                    }
                                    var Ao = Gn((function(e, t) {
                                            return Vs(e) ? cn(e, pn(t, 1, Vs, !0)) : []
                                        })),
                                        Io = Gn((function(e, t) {
                                            var n = qo(t);
                                            return Vs(n) && (n = r), Vs(e) ? cn(e, pn(t, 1, Vs, !0), oo(n, 2)) : []
                                        })),
                                        Ho = Gn((function(e, t) {
                                            var n = qo(t);
                                            return Vs(n) && (n = r), Vs(e) ? cn(e, pn(t, 1, Vs, !0), r, n) : []
                                        }));

                                    function No(e, t, r) {
                                        var n = null == e ? 0 : e.length;
                                        if (!n) return -1;
                                        var i = null == r ? 0 : da(r);
                                        return i < 0 && (i = pr(n + i, 0)), Ot(e, oo(t, 3), i)
                                    }

                                    function Bo(e, t, n) {
                                        var i = null == e ? 0 : e.length;
                                        if (!i) return -1;
                                        var o = i - 1;
                                        return n !== r && (o = da(n), o = n < 0 ? pr(i + o, 0) : vr(o, i - 1)), Ot(e, oo(t, 3), o, !0)
                                    }

                                    function Uo(e) {
                                        return null != e && e.length ? pn(e, 1) : []
                                    }

                                    function Wo(e) {
                                        return e && e.length ? e[0] : r
                                    }
                                    var Vo = Gn((function(e) {
                                            var t = St(e, fi);
                                            return t.length && t[0] === e[0] ? kn(t) : []
                                        })),
                                        Zo = Gn((function(e) {
                                            var t = qo(e),
                                                n = St(e, fi);
                                            return t === qo(n) ? t = r : n.pop(), n.length && n[0] === e[0] ? kn(n, oo(t, 2)) : []
                                        })),
                                        Go = Gn((function(e) {
                                            var t = qo(e),
                                                n = St(e, fi);
                                            return (t = "function" == typeof t ? t : r) && n.pop(), n.length && n[0] === e[0] ? kn(n, r, t) : []
                                        }));

                                    function qo(e) {
                                        var t = null == e ? 0 : e.length;
                                        return t ? e[t - 1] : r
                                    }
                                    var Xo = Gn(Ko);

                                    function Ko(e, t) {
                                        return e && e.length && t && t.length ? Un(e, t) : e
                                    }
                                    var Yo = Qi((function(e, t) {
                                        var r = null == e ? 0 : e.length,
                                            n = nn(e, t);
                                        return Wn(e, St(t, (function(e) {
                                            return vo(e, r) ? +e : e
                                        })).sort(yi)), n
                                    }));

                                    function Jo(e) {
                                        return null == e ? e : br.call(e)
                                    }
                                    var Qo = Gn((function(e) {
                                            return ai(pn(e, 1, Vs, !0))
                                        })),
                                        es = Gn((function(e) {
                                            var t = qo(e);
                                            return Vs(t) && (t = r), ai(pn(e, 1, Vs, !0), oo(t, 2))
                                        })),
                                        ts = Gn((function(e) {
                                            var t = qo(e);
                                            return t = "function" == typeof t ? t : r, ai(pn(e, 1, Vs, !0), r, t)
                                        }));

                                    function rs(e) {
                                        if (!e || !e.length) return [];
                                        var t = 0;
                                        return e = Lt(e, (function(e) {
                                            if (Vs(e)) return t = pr(e.length, t), !0
                                        })), Ht(t, (function(t) {
                                            return St(e, Dt(t))
                                        }))
                                    }

                                    function ns(e, t) {
                                        if (!e || !e.length) return [];
                                        var n = rs(e);
                                        return null == t ? n : St(n, (function(e) {
                                            return vt(t, r, e)
                                        }))
                                    }
                                    var is = Gn((function(e, t) {
                                            return Vs(e) ? cn(e, t) : []
                                        })),
                                        os = Gn((function(e) {
                                            return di(Lt(e, Vs))
                                        })),
                                        ss = Gn((function(e) {
                                            var t = qo(e);
                                            return Vs(t) && (t = r), di(Lt(e, Vs), oo(t, 2))
                                        })),
                                        as = Gn((function(e) {
                                            var t = qo(e);
                                            return t = "function" == typeof t ? t : r, di(Lt(e, Vs), r, t)
                                        })),
                                        ls = Gn(rs),
                                        cs = Gn((function(e) {
                                            var t = e.length,
                                                n = t > 1 ? e[t - 1] : r;
                                            return n = "function" == typeof n ? (e.pop(), n) : r, ns(e, n)
                                        }));

                                    function us(e) {
                                        var t = Mr(e);
                                        return t.__chain__ = !0, t
                                    }

                                    function hs(e, t) {
                                        return t(e)
                                    }
                                    var ds = Qi((function(e) {
                                            var t = e.length,
                                                n = t ? e[0] : 0,
                                                i = this.__wrapped__,
                                                o = function(t) {
                                                    return nn(t, e)
                                                };
                                            return !(t > 1 || this.__actions__.length) && i instanceof Nr && vo(n) ? ((i = i.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                                                func: hs,
                                                args: [o],
                                                thisArg: r
                                            }), new Hr(i, this.__chain__).thru((function(e) {
                                                return t && !e.length && e.push(r), e
                                            }))) : this.thru(o)
                                        })),
                                        gs = Ri((function(e, t, r) {
                                            Fe.call(e, r) ? ++e[r] : rn(e, r, 1)
                                        })),
                                        fs = Pi(No),
                                        ps = Pi(Bo);

                                    function vs(e, t) {
                                        return (Bs(e) ? Ct : un)(e, oo(t, 3))
                                    }

                                    function ms(e, t) {
                                        return (Bs(e) ? wt : hn)(e, oo(t, 3))
                                    }
                                    var Cs = Ri((function(e, t, r) {
                                            Fe.call(e, r) ? e[r].push(t) : rn(e, r, [t])
                                        })),
                                        ws = Gn((function(e, t, r) {
                                            var n = -1,
                                                i = "function" == typeof t,
                                                o = Ws(e) ? re(e.length) : [];
                                            return un(e, (function(e) {
                                                o[++n] = i ? vt(t, e, r) : Rn(e, t, r)
                                            })), o
                                        })),
                                        bs = Ri((function(e, t, r) {
                                            rn(e, r, t)
                                        }));

                                    function Ls(e, t) {
                                        return (Bs(e) ? St : Dn)(e, oo(t, 3))
                                    }
                                    var xs = Ri((function(e, t, r) {
                                            e[r ? 0 : 1].push(t)
                                        }), (function() {
                                            return [
                                                [],
                                                []
                                            ]
                                        })),
                                        ys = Gn((function(e, t) {
                                            if (null == e) return [];
                                            var r = t.length;
                                            return r > 1 && mo(e, t[0], t[1]) ? t = [] : r > 2 && mo(t[0], t[1], t[2]) && (t = [t[0]]), Nn(e, pn(t, 1), [])
                                        })),
                                        Ss = zt || function() {
                                            return it.Date.now()
                                        };

                                    function _s(e, t, n) {
                                        return t = n ? r : t, t = e && null == t ? e.length : t, qi(e, a, r, r, r, r, t)
                                    }

                                    function Es(e, t) {
                                        var i;
                                        if ("function" != typeof t) throw new Ee(n);
                                        return e = da(e),
                                            function() {
                                                return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = r), i
                                            }
                                    }
                                    var ks = Gn((function(e, t, r) {
                                            var n = 1;
                                            if (r.length) {
                                                var i = er(r, io(ks));
                                                n |= s
                                            }
                                            return qi(e, n, t, r, i)
                                        })),
                                        Rs = Gn((function(e, t, r) {
                                            var n = 3;
                                            if (r.length) {
                                                var i = er(r, io(Rs));
                                                n |= s
                                            }
                                            return qi(t, n, e, r, i)
                                        }));

                                    function zs(e, t, i) {
                                        var o, s, a, l, c, u, h = 0,
                                            d = !1,
                                            g = !1,
                                            f = !0;
                                        if ("function" != typeof e) throw new Ee(n);

                                        function p(t) {
                                            var n = o,
                                                i = s;
                                            return o = s = r, h = t, l = e.apply(i, n)
                                        }

                                        function v(e) {
                                            return h = e, c = zo(C, t), d ? p(e) : l
                                        }

                                        function m(e) {
                                            var n = e - u;
                                            return u === r || n >= t || n < 0 || g && e - h >= a
                                        }

                                        function C() {
                                            var e = Ss();
                                            if (m(e)) return w(e);
                                            c = zo(C, function(e) {
                                                var r = t - (e - u);
                                                return g ? vr(r, a - (e - h)) : r
                                            }(e))
                                        }

                                        function w(e) {
                                            return c = r, f && o ? p(e) : (o = s = r, l)
                                        }

                                        function b() {
                                            var e = Ss(),
                                                n = m(e);
                                            if (o = arguments, s = this, u = e, n) {
                                                if (c === r) return v(u);
                                                if (g) return wi(c), c = zo(C, t), p(u)
                                            }
                                            return c === r && (c = zo(C, t)), l
                                        }
                                        return t = fa(t) || 0, Js(i) && (d = !!i.leading, a = (g = "maxWait" in i) ? pr(fa(i.maxWait) || 0, t) : a, f = "trailing" in i ? !!i.trailing : f), b.cancel = function() {
                                            c !== r && wi(c), h = 0, o = u = s = c = r
                                        }, b.flush = function() {
                                            return c === r ? l : w(Ss())
                                        }, b
                                    }
                                    var $s = Gn((function(e, t) {
                                            return ln(e, 1, t)
                                        })),
                                        Os = Gn((function(e, t, r) {
                                            return ln(e, fa(t) || 0, r)
                                        }));

                                    function Fs(e, t) {
                                        if ("function" != typeof e || null != t && "function" != typeof t) throw new Ee(n);
                                        var r = function() {
                                            var n = arguments,
                                                i = t ? t.apply(this, n) : n[0],
                                                o = r.cache;
                                            if (o.has(i)) return o.get(i);
                                            var s = e.apply(this, n);
                                            return r.cache = o.set(i, s) || o, s
                                        };
                                        return r.cache = new(Fs.Cache || Wr), r
                                    }

                                    function js(e) {
                                        if ("function" != typeof e) throw new Ee(n);
                                        return function() {
                                            var t = arguments;
                                            switch (t.length) {
                                                case 0:
                                                    return !e.call(this);
                                                case 1:
                                                    return !e.call(this, t[0]);
                                                case 2:
                                                    return !e.call(this, t[0], t[1]);
                                                case 3:
                                                    return !e.call(this, t[0], t[1], t[2])
                                            }
                                            return !e.apply(this, t)
                                        }
                                    }
                                    Fs.Cache = Wr;
                                    var Ts = mi((function(e, t) {
                                            var r = (t = 1 == t.length && Bs(t[0]) ? St(t[0], Bt(oo())) : St(pn(t, 1), Bt(oo()))).length;
                                            return Gn((function(n) {
                                                for (var i = -1, o = vr(n.length, r); ++i < o;) n[i] = t[i].call(this, n[i]);
                                                return vt(e, this, n)
                                            }))
                                        })),
                                        Ps = Gn((function(e, t) {
                                            var n = er(t, io(Ps));
                                            return qi(e, s, r, t, n)
                                        })),
                                        Ds = Gn((function(e, t) {
                                            var n = er(t, io(Ds));
                                            return qi(e, 64, r, t, n)
                                        })),
                                        Ms = Qi((function(e, t) {
                                            return qi(e, 256, r, r, r, t)
                                        }));

                                    function As(e, t) {
                                        return e === t || e != e && t != t
                                    }
                                    var Is = Ui(Sn),
                                        Hs = Ui((function(e, t) {
                                            return e >= t
                                        })),
                                        Ns = zn(function() {
                                            return arguments
                                        }()) ? zn : function(e) {
                                            return Qs(e) && Fe.call(e, "callee") && !Qe.call(e, "callee")
                                        },
                                        Bs = re.isArray,
                                        Us = ut ? Bt(ut) : function(e) {
                                            return Qs(e) && yn(e) == z
                                        };

                                    function Ws(e) {
                                        return null != e && Ys(e.length) && !Xs(e)
                                    }

                                    function Vs(e) {
                                        return Qs(e) && Ws(e)
                                    }
                                    var Zs = hr || fl,
                                        Gs = ht ? Bt(ht) : function(e) {
                                            return Qs(e) && yn(e) == v
                                        };

                                    function qs(e) {
                                        if (!Qs(e)) return !1;
                                        var t = yn(e);
                                        return t == m || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !ra(e)
                                    }

                                    function Xs(e) {
                                        if (!Js(e)) return !1;
                                        var t = yn(e);
                                        return t == C || t == w || "[object AsyncFunction]" == t || "[object Proxy]" == t
                                    }

                                    function Ks(e) {
                                        return "number" == typeof e && e == da(e)
                                    }

                                    function Ys(e) {
                                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= c
                                    }

                                    function Js(e) {
                                        var t = typeof e;
                                        return null != e && ("object" == t || "function" == t)
                                    }

                                    function Qs(e) {
                                        return null != e && "object" == typeof e
                                    }
                                    var ea = dt ? Bt(dt) : function(e) {
                                        return Qs(e) && ho(e) == b
                                    };

                                    function ta(e) {
                                        return "number" == typeof e || Qs(e) && yn(e) == L
                                    }

                                    function ra(e) {
                                        if (!Qs(e) || yn(e) != x) return !1;
                                        var t = Ve(e);
                                        if (null === t) return !0;
                                        var r = Fe.call(t, "constructor") && t.constructor;
                                        return "function" == typeof r && r instanceof r && Oe.call(r) == De
                                    }
                                    var na = gt ? Bt(gt) : function(e) {
                                            return Qs(e) && yn(e) == S
                                        },
                                        ia = ft ? Bt(ft) : function(e) {
                                            return Qs(e) && ho(e) == _
                                        };

                                    function oa(e) {
                                        return "string" == typeof e || !Bs(e) && Qs(e) && yn(e) == E
                                    }

                                    function sa(e) {
                                        return "symbol" == typeof e || Qs(e) && yn(e) == k
                                    }
                                    var aa = pt ? Bt(pt) : function(e) {
                                            return Qs(e) && Ys(e.length) && !!Ye[yn(e)]
                                        },
                                        la = Ui(Pn),
                                        ca = Ui((function(e, t) {
                                            return e <= t
                                        }));

                                    function ua(e) {
                                        if (!e) return [];
                                        if (Ws(e)) return oa(e) ? ir(e) : Ei(e);
                                        if (ot && e[ot]) return function(e) {
                                            for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                            return r
                                        }(e[ot]());
                                        var t = ho(e);
                                        return (t == b ? Jt : t == _ ? tr : Aa)(e)
                                    }

                                    function ha(e) {
                                        return e ? (e = fa(e)) === l || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                                    }

                                    function da(e) {
                                        var t = ha(e),
                                            r = t % 1;
                                        return t == t ? r ? t - r : t : 0
                                    }

                                    function ga(e) {
                                        return e ? on(da(e), 0, h) : 0
                                    }

                                    function fa(e) {
                                        if ("number" == typeof e) return e;
                                        if (sa(e)) return u;
                                        if (Js(e)) {
                                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                            e = Js(t) ? t + "" : t
                                        }
                                        if ("string" != typeof e) return 0 === e ? e : +e;
                                        e = Nt(e);
                                        var r = de.test(e);
                                        return r || fe.test(e) ? tt(e.slice(2), r ? 2 : 8) : he.test(e) ? u : +e
                                    }

                                    function pa(e) {
                                        return ki(e, $a(e))
                                    }

                                    function va(e) {
                                        return null == e ? "" : si(e)
                                    }
                                    var ma = zi((function(e, t) {
                                            if (Lo(t) || Ws(t)) ki(t, za(t), e);
                                            else
                                                for (var r in t) Fe.call(t, r) && Jr(e, r, t[r])
                                        })),
                                        Ca = zi((function(e, t) {
                                            ki(t, $a(t), e)
                                        })),
                                        wa = zi((function(e, t, r, n) {
                                            ki(t, $a(t), e, n)
                                        })),
                                        ba = zi((function(e, t, r, n) {
                                            ki(t, za(t), e, n)
                                        })),
                                        La = Qi(nn),
                                        xa = Gn((function(e, t) {
                                            e = ye(e);
                                            var n = -1,
                                                i = t.length,
                                                o = i > 2 ? t[2] : r;
                                            for (o && mo(t[0], t[1], o) && (i = 1); ++n < i;)
                                                for (var s = t[n], a = $a(s), l = -1, c = a.length; ++l < c;) {
                                                    var u = a[l],
                                                        h = e[u];
                                                    (h === r || As(h, ze[u]) && !Fe.call(e, u)) && (e[u] = s[u])
                                                }
                                            return e
                                        })),
                                        ya = Gn((function(e) {
                                            return e.push(r, Ki), vt(Fa, r, e)
                                        }));

                                    function Sa(e, t, n) {
                                        var i = null == e ? r : Ln(e, t);
                                        return i === r ? n : i
                                    }

                                    function _a(e, t) {
                                        return null != e && go(e, t, En)
                                    }
                                    var Ea = Ai((function(e, t, r) {
                                            null != t && "function" != typeof t.toString && (t = Pe.call(t)), e[t] = r
                                        }), Ja(tl)),
                                        ka = Ai((function(e, t, r) {
                                            null != t && "function" != typeof t.toString && (t = Pe.call(t)), Fe.call(e, t) ? e[t].push(r) : e[t] = [r]
                                        }), oo),
                                        Ra = Gn(Rn);

                                    function za(e) {
                                        return Ws(e) ? Gr(e) : Tn(e)
                                    }

                                    function $a(e) {
                                        return Ws(e) ? Gr(e, !0) : function(e) {
                                            if (!Js(e)) return function(e) {
                                                var t = [];
                                                if (null != e)
                                                    for (var r in ye(e)) t.push(r);
                                                return t
                                            }(e);
                                            var t = Lo(e),
                                                r = [];
                                            for (var n in e)("constructor" != n || !t && Fe.call(e, n)) && r.push(n);
                                            return r
                                        }(e)
                                    }
                                    var Oa = zi((function(e, t, r) {
                                            In(e, t, r)
                                        })),
                                        Fa = zi((function(e, t, r, n) {
                                            In(e, t, r, n)
                                        })),
                                        ja = Qi((function(e, t) {
                                            var r = {};
                                            if (null == e) return r;
                                            var n = !1;
                                            t = St(t, (function(t) {
                                                return t = vi(t, e), n || (n = t.length > 1), t
                                            })), ki(e, to(e), r), n && (r = sn(r, 7, Yi));
                                            for (var i = t.length; i--;) li(r, t[i]);
                                            return r
                                        })),
                                        Ta = Qi((function(e, t) {
                                            return null == e ? {} : function(e, t) {
                                                return Bn(e, t, (function(t, r) {
                                                    return _a(e, r)
                                                }))
                                            }(e, t)
                                        }));

                                    function Pa(e, t) {
                                        if (null == e) return {};
                                        var r = St(to(e), (function(e) {
                                            return [e]
                                        }));
                                        return t = oo(t), Bn(e, r, (function(e, r) {
                                            return t(e, r[0])
                                        }))
                                    }
                                    var Da = Gi(za),
                                        Ma = Gi($a);

                                    function Aa(e) {
                                        return null == e ? [] : Ut(e, za(e))
                                    }
                                    var Ia = ji((function(e, t, r) {
                                        return t = t.toLowerCase(), e + (r ? Ha(t) : t)
                                    }));

                                    function Ha(e) {
                                        return qa(va(e).toLowerCase())
                                    }

                                    function Na(e) {
                                        return (e = va(e)) && e.replace(ve, qt).replace(We, "")
                                    }
                                    var Ba = ji((function(e, t, r) {
                                            return e + (r ? "-" : "") + t.toLowerCase()
                                        })),
                                        Ua = ji((function(e, t, r) {
                                            return e + (r ? " " : "") + t.toLowerCase()
                                        })),
                                        Wa = Fi("toLowerCase"),
                                        Va = ji((function(e, t, r) {
                                            return e + (r ? "_" : "") + t.toLowerCase()
                                        })),
                                        Za = ji((function(e, t, r) {
                                            return e + (r ? " " : "") + qa(t)
                                        })),
                                        Ga = ji((function(e, t, r) {
                                            return e + (r ? " " : "") + t.toUpperCase()
                                        })),
                                        qa = Fi("toUpperCase");

                                    function Xa(e, t, n) {
                                        return e = va(e), (t = n ? r : t) === r ? function(e) {
                                            return qe.test(e)
                                        }(e) ? function(e) {
                                            return e.match(Ze) || []
                                        }(e) : function(e) {
                                            return e.match(se) || []
                                        }(e) : e.match(t) || []
                                    }
                                    var Ka = Gn((function(e, t) {
                                            try {
                                                return vt(e, r, t)
                                            } catch (e) {
                                                return qs(e) ? e : new be(e)
                                            }
                                        })),
                                        Ya = Qi((function(e, t) {
                                            return Ct(t, (function(t) {
                                                t = Po(t), rn(e, t, ks(e[t], e))
                                            })), e
                                        }));

                                    function Ja(e) {
                                        return function() {
                                            return e
                                        }
                                    }
                                    var Qa = Di(),
                                        el = Di(!0);

                                    function tl(e) {
                                        return e
                                    }

                                    function rl(e) {
                                        return jn("function" == typeof e ? e : sn(e, 1))
                                    }
                                    var nl = Gn((function(e, t) {
                                            return function(r) {
                                                return Rn(r, e, t)
                                            }
                                        })),
                                        il = Gn((function(e, t) {
                                            return function(r) {
                                                return Rn(e, r, t)
                                            }
                                        }));

                                    function ol(e, t, r) {
                                        var n = za(t),
                                            i = bn(t, n);
                                        null != r || Js(t) && (i.length || !n.length) || (r = t, t = e, e = this, i = bn(t, za(t)));
                                        var o = !(Js(r) && "chain" in r && !r.chain),
                                            s = Xs(e);
                                        return Ct(i, (function(r) {
                                            var n = t[r];
                                            e[r] = n, s && (e.prototype[r] = function() {
                                                var t = this.__chain__;
                                                if (o || t) {
                                                    var r = e(this.__wrapped__),
                                                        i = r.__actions__ = Ei(this.__actions__);
                                                    return i.push({
                                                        func: n,
                                                        args: arguments,
                                                        thisArg: e
                                                    }), r.__chain__ = t, r
                                                }
                                                return n.apply(e, _t([this.value()], arguments))
                                            })
                                        })), e
                                    }

                                    function sl() {}
                                    var al = Hi(St),
                                        ll = Hi(bt),
                                        cl = Hi(Rt);

                                    function ul(e) {
                                        return Co(e) ? Dt(Po(e)) : function(e) {
                                            return function(t) {
                                                return Ln(t, e)
                                            }
                                        }(e)
                                    }
                                    var hl = Bi(),
                                        dl = Bi(!0);

                                    function gl() {
                                        return []
                                    }

                                    function fl() {
                                        return !1
                                    }
                                    var pl, vl = Ii((function(e, t) {
                                            return e + t
                                        }), 0),
                                        ml = Vi("ceil"),
                                        Cl = Ii((function(e, t) {
                                            return e / t
                                        }), 1),
                                        wl = Vi("floor"),
                                        bl = Ii((function(e, t) {
                                            return e * t
                                        }), 1),
                                        Ll = Vi("round"),
                                        xl = Ii((function(e, t) {
                                            return e - t
                                        }), 0);
                                    return Mr.after = function(e, t) {
                                        if ("function" != typeof t) throw new Ee(n);
                                        return e = da(e),
                                            function() {
                                                if (--e < 1) return t.apply(this, arguments)
                                            }
                                    }, Mr.ary = _s, Mr.assign = ma, Mr.assignIn = Ca, Mr.assignInWith = wa, Mr.assignWith = ba, Mr.at = La, Mr.before = Es, Mr.bind = ks, Mr.bindAll = Ya, Mr.bindKey = Rs, Mr.castArray = function() {
                                        if (!arguments.length) return [];
                                        var e = arguments[0];
                                        return Bs(e) ? e : [e]
                                    }, Mr.chain = us, Mr.chunk = function(e, t, n) {
                                        t = (n ? mo(e, t, n) : t === r) ? 1 : pr(da(t), 0);
                                        var i = null == e ? 0 : e.length;
                                        if (!i || t < 1) return [];
                                        for (var o = 0, s = 0, a = re(lr(i / t)); o < i;) a[s++] = ei(e, o, o += t);
                                        return a
                                    }, Mr.compact = function(e) {
                                        for (var t = -1, r = null == e ? 0 : e.length, n = 0, i = []; ++t < r;) {
                                            var o = e[t];
                                            o && (i[n++] = o)
                                        }
                                        return i
                                    }, Mr.concat = function() {
                                        var e = arguments.length;
                                        if (!e) return [];
                                        for (var t = re(e - 1), r = arguments[0], n = e; n--;) t[n - 1] = arguments[n];
                                        return _t(Bs(r) ? Ei(r) : [r], pn(t, 1))
                                    }, Mr.cond = function(e) {
                                        var t = null == e ? 0 : e.length,
                                            r = oo();
                                        return e = t ? St(e, (function(e) {
                                            if ("function" != typeof e[1]) throw new Ee(n);
                                            return [r(e[0]), e[1]]
                                        })) : [], Gn((function(r) {
                                            for (var n = -1; ++n < t;) {
                                                var i = e[n];
                                                if (vt(i[0], this, r)) return vt(i[1], this, r)
                                            }
                                        }))
                                    }, Mr.conforms = function(e) {
                                        return function(e) {
                                            var t = za(e);
                                            return function(r) {
                                                return an(r, e, t)
                                            }
                                        }(sn(e, 1))
                                    }, Mr.constant = Ja, Mr.countBy = gs, Mr.create = function(e, t) {
                                        var r = Ar(e);
                                        return null == t ? r : tn(r, t)
                                    }, Mr.curry = function e(t, n, i) {
                                        var o = qi(t, 8, r, r, r, r, r, n = i ? r : n);
                                        return o.placeholder = e.placeholder, o
                                    }, Mr.curryRight = function e(t, n, i) {
                                        var o = qi(t, 16, r, r, r, r, r, n = i ? r : n);
                                        return o.placeholder = e.placeholder, o
                                    }, Mr.debounce = zs, Mr.defaults = xa, Mr.defaultsDeep = ya, Mr.defer = $s, Mr.delay = Os, Mr.difference = Ao, Mr.differenceBy = Io, Mr.differenceWith = Ho, Mr.drop = function(e, t, n) {
                                        var i = null == e ? 0 : e.length;
                                        return i ? ei(e, (t = n || t === r ? 1 : da(t)) < 0 ? 0 : t, i) : []
                                    }, Mr.dropRight = function(e, t, n) {
                                        var i = null == e ? 0 : e.length;
                                        return i ? ei(e, 0, (t = i - (t = n || t === r ? 1 : da(t))) < 0 ? 0 : t) : []
                                    }, Mr.dropRightWhile = function(e, t) {
                                        return e && e.length ? ui(e, oo(t, 3), !0, !0) : []
                                    }, Mr.dropWhile = function(e, t) {
                                        return e && e.length ? ui(e, oo(t, 3), !0) : []
                                    }, Mr.fill = function(e, t, n, i) {
                                        var o = null == e ? 0 : e.length;
                                        return o ? (n && "number" != typeof n && mo(e, t, n) && (n = 0, i = o), function(e, t, n, i) {
                                            var o = e.length;
                                            for ((n = da(n)) < 0 && (n = -n > o ? 0 : o + n), (i = i === r || i > o ? o : da(i)) < 0 && (i += o), i = n > i ? 0 : ga(i); n < i;) e[n++] = t;
                                            return e
                                        }(e, t, n, i)) : []
                                    }, Mr.filter = function(e, t) {
                                        return (Bs(e) ? Lt : fn)(e, oo(t, 3))
                                    }, Mr.flatMap = function(e, t) {
                                        return pn(Ls(e, t), 1)
                                    }, Mr.flatMapDeep = function(e, t) {
                                        return pn(Ls(e, t), l)
                                    }, Mr.flatMapDepth = function(e, t, n) {
                                        return n = n === r ? 1 : da(n), pn(Ls(e, t), n)
                                    }, Mr.flatten = Uo, Mr.flattenDeep = function(e) {
                                        return null != e && e.length ? pn(e, l) : []
                                    }, Mr.flattenDepth = function(e, t) {
                                        return null != e && e.length ? pn(e, t = t === r ? 1 : da(t)) : []
                                    }, Mr.flip = function(e) {
                                        return qi(e, 512)
                                    }, Mr.flow = Qa, Mr.flowRight = el, Mr.fromPairs = function(e) {
                                        for (var t = -1, r = null == e ? 0 : e.length, n = {}; ++t < r;) {
                                            var i = e[t];
                                            n[i[0]] = i[1]
                                        }
                                        return n
                                    }, Mr.functions = function(e) {
                                        return null == e ? [] : bn(e, za(e))
                                    }, Mr.functionsIn = function(e) {
                                        return null == e ? [] : bn(e, $a(e))
                                    }, Mr.groupBy = Cs, Mr.initial = function(e) {
                                        return null != e && e.length ? ei(e, 0, -1) : []
                                    }, Mr.intersection = Vo, Mr.intersectionBy = Zo, Mr.intersectionWith = Go, Mr.invert = Ea, Mr.invertBy = ka, Mr.invokeMap = ws, Mr.iteratee = rl, Mr.keyBy = bs, Mr.keys = za, Mr.keysIn = $a, Mr.map = Ls, Mr.mapKeys = function(e, t) {
                                        var r = {};
                                        return t = oo(t, 3), Cn(e, (function(e, n, i) {
                                            rn(r, t(e, n, i), e)
                                        })), r
                                    }, Mr.mapValues = function(e, t) {
                                        var r = {};
                                        return t = oo(t, 3), Cn(e, (function(e, n, i) {
                                            rn(r, n, t(e, n, i))
                                        })), r
                                    }, Mr.matches = function(e) {
                                        return Mn(sn(e, 1))
                                    }, Mr.matchesProperty = function(e, t) {
                                        return An(e, sn(t, 1))
                                    }, Mr.memoize = Fs, Mr.merge = Oa, Mr.mergeWith = Fa, Mr.method = nl, Mr.methodOf = il, Mr.mixin = ol, Mr.negate = js, Mr.nthArg = function(e) {
                                        return e = da(e), Gn((function(t) {
                                            return Hn(t, e)
                                        }))
                                    }, Mr.omit = ja, Mr.omitBy = function(e, t) {
                                        return Pa(e, js(oo(t)))
                                    }, Mr.once = function(e) {
                                        return Es(2, e)
                                    }, Mr.orderBy = function(e, t, n, i) {
                                        return null == e ? [] : (Bs(t) || (t = null == t ? [] : [t]), Bs(n = i ? r : n) || (n = null == n ? [] : [n]), Nn(e, t, n))
                                    }, Mr.over = al, Mr.overArgs = Ts, Mr.overEvery = ll, Mr.overSome = cl, Mr.partial = Ps, Mr.partialRight = Ds, Mr.partition = xs, Mr.pick = Ta, Mr.pickBy = Pa, Mr.property = ul, Mr.propertyOf = function(e) {
                                        return function(t) {
                                            return null == e ? r : Ln(e, t)
                                        }
                                    }, Mr.pull = Xo, Mr.pullAll = Ko, Mr.pullAllBy = function(e, t, r) {
                                        return e && e.length && t && t.length ? Un(e, t, oo(r, 2)) : e
                                    }, Mr.pullAllWith = function(e, t, n) {
                                        return e && e.length && t && t.length ? Un(e, t, r, n) : e
                                    }, Mr.pullAt = Yo, Mr.range = hl, Mr.rangeRight = dl, Mr.rearg = Ms, Mr.reject = function(e, t) {
                                        return (Bs(e) ? Lt : fn)(e, js(oo(t, 3)))
                                    }, Mr.remove = function(e, t) {
                                        var r = [];
                                        if (!e || !e.length) return r;
                                        var n = -1,
                                            i = [],
                                            o = e.length;
                                        for (t = oo(t, 3); ++n < o;) {
                                            var s = e[n];
                                            t(s, n, e) && (r.push(s), i.push(n))
                                        }
                                        return Wn(e, i), r
                                    }, Mr.rest = function(e, t) {
                                        if ("function" != typeof e) throw new Ee(n);
                                        return Gn(e, t = t === r ? t : da(t))
                                    }, Mr.reverse = Jo, Mr.sampleSize = function(e, t, n) {
                                        return t = (n ? mo(e, t, n) : t === r) ? 1 : da(t), (Bs(e) ? Xr : Xn)(e, t)
                                    }, Mr.set = function(e, t, r) {
                                        return null == e ? e : Kn(e, t, r)
                                    }, Mr.setWith = function(e, t, n, i) {
                                        return i = "function" == typeof i ? i : r, null == e ? e : Kn(e, t, n, i)
                                    }, Mr.shuffle = function(e) {
                                        return (Bs(e) ? Kr : Qn)(e)
                                    }, Mr.slice = function(e, t, n) {
                                        var i = null == e ? 0 : e.length;
                                        return i ? (n && "number" != typeof n && mo(e, t, n) ? (t = 0, n = i) : (t = null == t ? 0 : da(t), n = n === r ? i : da(n)), ei(e, t, n)) : []
                                    }, Mr.sortBy = ys, Mr.sortedUniq = function(e) {
                                        return e && e.length ? ii(e) : []
                                    }, Mr.sortedUniqBy = function(e, t) {
                                        return e && e.length ? ii(e, oo(t, 2)) : []
                                    }, Mr.split = function(e, t, n) {
                                        return n && "number" != typeof n && mo(e, t, n) && (t = n = r), (n = n === r ? h : n >>> 0) ? (e = va(e)) && ("string" == typeof t || null != t && !na(t)) && !(t = si(t)) && Yt(e) ? Ci(ir(e), 0, n) : e.split(t, n) : []
                                    }, Mr.spread = function(e, t) {
                                        if ("function" != typeof e) throw new Ee(n);
                                        return t = null == t ? 0 : pr(da(t), 0), Gn((function(r) {
                                            var n = r[t],
                                                i = Ci(r, 0, t);
                                            return n && _t(i, n), vt(e, this, i)
                                        }))
                                    }, Mr.tail = function(e) {
                                        var t = null == e ? 0 : e.length;
                                        return t ? ei(e, 1, t) : []
                                    }, Mr.take = function(e, t, n) {
                                        return e && e.length ? ei(e, 0, (t = n || t === r ? 1 : da(t)) < 0 ? 0 : t) : []
                                    }, Mr.takeRight = function(e, t, n) {
                                        var i = null == e ? 0 : e.length;
                                        return i ? ei(e, (t = i - (t = n || t === r ? 1 : da(t))) < 0 ? 0 : t, i) : []
                                    }, Mr.takeRightWhile = function(e, t) {
                                        return e && e.length ? ui(e, oo(t, 3), !1, !0) : []
                                    }, Mr.takeWhile = function(e, t) {
                                        return e && e.length ? ui(e, oo(t, 3)) : []
                                    }, Mr.tap = function(e, t) {
                                        return t(e), e
                                    }, Mr.throttle = function(e, t, r) {
                                        var i = !0,
                                            o = !0;
                                        if ("function" != typeof e) throw new Ee(n);
                                        return Js(r) && (i = "leading" in r ? !!r.leading : i, o = "trailing" in r ? !!r.trailing : o), zs(e, t, {
                                            leading: i,
                                            maxWait: t,
                                            trailing: o
                                        })
                                    }, Mr.thru = hs, Mr.toArray = ua, Mr.toPairs = Da, Mr.toPairsIn = Ma, Mr.toPath = function(e) {
                                        return Bs(e) ? St(e, Po) : sa(e) ? [e] : Ei(To(va(e)))
                                    }, Mr.toPlainObject = pa, Mr.transform = function(e, t, r) {
                                        var n = Bs(e),
                                            i = n || Zs(e) || aa(e);
                                        if (t = oo(t, 4), null == r) {
                                            var o = e && e.constructor;
                                            r = i ? n ? new o : [] : Js(e) && Xs(o) ? Ar(Ve(e)) : {}
                                        }
                                        return (i ? Ct : Cn)(e, (function(e, n, i) {
                                            return t(r, e, n, i)
                                        })), r
                                    }, Mr.unary = function(e) {
                                        return _s(e, 1)
                                    }, Mr.union = Qo, Mr.unionBy = es, Mr.unionWith = ts, Mr.uniq = function(e) {
                                        return e && e.length ? ai(e) : []
                                    }, Mr.uniqBy = function(e, t) {
                                        return e && e.length ? ai(e, oo(t, 2)) : []
                                    }, Mr.uniqWith = function(e, t) {
                                        return t = "function" == typeof t ? t : r, e && e.length ? ai(e, r, t) : []
                                    }, Mr.unset = function(e, t) {
                                        return null == e || li(e, t)
                                    }, Mr.unzip = rs, Mr.unzipWith = ns, Mr.update = function(e, t, r) {
                                        return null == e ? e : ci(e, t, pi(r))
                                    }, Mr.updateWith = function(e, t, n, i) {
                                        return i = "function" == typeof i ? i : r, null == e ? e : ci(e, t, pi(n), i)
                                    }, Mr.values = Aa, Mr.valuesIn = function(e) {
                                        return null == e ? [] : Ut(e, $a(e))
                                    }, Mr.without = is, Mr.words = Xa, Mr.wrap = function(e, t) {
                                        return Ps(pi(t), e)
                                    }, Mr.xor = os, Mr.xorBy = ss, Mr.xorWith = as, Mr.zip = ls, Mr.zipObject = function(e, t) {
                                        return gi(e || [], t || [], Jr)
                                    }, Mr.zipObjectDeep = function(e, t) {
                                        return gi(e || [], t || [], Kn)
                                    }, Mr.zipWith = cs, Mr.entries = Da, Mr.entriesIn = Ma, Mr.extend = Ca, Mr.extendWith = wa, ol(Mr, Mr), Mr.add = vl, Mr.attempt = Ka, Mr.camelCase = Ia, Mr.capitalize = Ha, Mr.ceil = ml, Mr.clamp = function(e, t, n) {
                                        return n === r && (n = t, t = r), n !== r && (n = (n = fa(n)) == n ? n : 0), t !== r && (t = (t = fa(t)) == t ? t : 0), on(fa(e), t, n)
                                    }, Mr.clone = function(e) {
                                        return sn(e, 4)
                                    }, Mr.cloneDeep = function(e) {
                                        return sn(e, 5)
                                    }, Mr.cloneDeepWith = function(e, t) {
                                        return sn(e, 5, t = "function" == typeof t ? t : r)
                                    }, Mr.cloneWith = function(e, t) {
                                        return sn(e, 4, t = "function" == typeof t ? t : r)
                                    }, Mr.conformsTo = function(e, t) {
                                        return null == t || an(e, t, za(t))
                                    }, Mr.deburr = Na, Mr.defaultTo = function(e, t) {
                                        return null == e || e != e ? t : e
                                    }, Mr.divide = Cl, Mr.endsWith = function(e, t, n) {
                                        e = va(e), t = si(t);
                                        var i = e.length,
                                            o = n = n === r ? i : on(da(n), 0, i);
                                        return (n -= t.length) >= 0 && e.slice(n, o) == t
                                    }, Mr.eq = As, Mr.escape = function(e) {
                                        return (e = va(e)) && Z.test(e) ? e.replace(W, Xt) : e
                                    }, Mr.escapeRegExp = function(e) {
                                        return (e = va(e)) && ee.test(e) ? e.replace(Q, "\\$&") : e
                                    }, Mr.every = function(e, t, n) {
                                        var i = Bs(e) ? bt : dn;
                                        return n && mo(e, t, n) && (t = r), i(e, oo(t, 3))
                                    }, Mr.find = fs, Mr.findIndex = No, Mr.findKey = function(e, t) {
                                        return $t(e, oo(t, 3), Cn)
                                    }, Mr.findLast = ps, Mr.findLastIndex = Bo, Mr.findLastKey = function(e, t) {
                                        return $t(e, oo(t, 3), wn)
                                    }, Mr.floor = wl, Mr.forEach = vs, Mr.forEachRight = ms, Mr.forIn = function(e, t) {
                                        return null == e ? e : vn(e, oo(t, 3), $a)
                                    }, Mr.forInRight = function(e, t) {
                                        return null == e ? e : mn(e, oo(t, 3), $a)
                                    }, Mr.forOwn = function(e, t) {
                                        return e && Cn(e, oo(t, 3))
                                    }, Mr.forOwnRight = function(e, t) {
                                        return e && wn(e, oo(t, 3))
                                    }, Mr.get = Sa, Mr.gt = Is, Mr.gte = Hs, Mr.has = function(e, t) {
                                        return null != e && go(e, t, _n)
                                    }, Mr.hasIn = _a, Mr.head = Wo, Mr.identity = tl, Mr.includes = function(e, t, r, n) {
                                        e = Ws(e) ? e : Aa(e), r = r && !n ? da(r) : 0;
                                        var i = e.length;
                                        return r < 0 && (r = pr(i + r, 0)), oa(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && Ft(e, t, r) > -1
                                    }, Mr.indexOf = function(e, t, r) {
                                        var n = null == e ? 0 : e.length;
                                        if (!n) return -1;
                                        var i = null == r ? 0 : da(r);
                                        return i < 0 && (i = pr(n + i, 0)), Ft(e, t, i)
                                    }, Mr.inRange = function(e, t, n) {
                                        return t = ha(t), n === r ? (n = t, t = 0) : n = ha(n),
                                            function(e, t, r) {
                                                return e >= vr(t, r) && e < pr(t, r)
                                            }(e = fa(e), t, n)
                                    }, Mr.invoke = Ra, Mr.isArguments = Ns, Mr.isArray = Bs, Mr.isArrayBuffer = Us, Mr.isArrayLike = Ws, Mr.isArrayLikeObject = Vs, Mr.isBoolean = function(e) {
                                        return !0 === e || !1 === e || Qs(e) && yn(e) == p
                                    }, Mr.isBuffer = Zs, Mr.isDate = Gs, Mr.isElement = function(e) {
                                        return Qs(e) && 1 === e.nodeType && !ra(e)
                                    }, Mr.isEmpty = function(e) {
                                        if (null == e) return !0;
                                        if (Ws(e) && (Bs(e) || "string" == typeof e || "function" == typeof e.splice || Zs(e) || aa(e) || Ns(e))) return !e.length;
                                        var t = ho(e);
                                        if (t == b || t == _) return !e.size;
                                        if (Lo(e)) return !Tn(e).length;
                                        for (var r in e)
                                            if (Fe.call(e, r)) return !1;
                                        return !0
                                    }, Mr.isEqual = function(e, t) {
                                        return $n(e, t)
                                    }, Mr.isEqualWith = function(e, t, n) {
                                        var i = (n = "function" == typeof n ? n : r) ? n(e, t) : r;
                                        return i === r ? $n(e, t, r, n) : !!i
                                    }, Mr.isError = qs, Mr.isFinite = function(e) {
                                        return "number" == typeof e && dr(e)
                                    }, Mr.isFunction = Xs, Mr.isInteger = Ks, Mr.isLength = Ys, Mr.isMap = ea, Mr.isMatch = function(e, t) {
                                        return e === t || On(e, t, ao(t))
                                    }, Mr.isMatchWith = function(e, t, n) {
                                        return n = "function" == typeof n ? n : r, On(e, t, ao(t), n)
                                    }, Mr.isNaN = function(e) {
                                        return ta(e) && e != +e
                                    }, Mr.isNative = function(e) {
                                        if (bo(e)) throw new be("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                        return Fn(e)
                                    }, Mr.isNil = function(e) {
                                        return null == e
                                    }, Mr.isNull = function(e) {
                                        return null === e
                                    }, Mr.isNumber = ta, Mr.isObject = Js, Mr.isObjectLike = Qs, Mr.isPlainObject = ra, Mr.isRegExp = na, Mr.isSafeInteger = function(e) {
                                        return Ks(e) && e >= -9007199254740991 && e <= c
                                    }, Mr.isSet = ia, Mr.isString = oa, Mr.isSymbol = sa, Mr.isTypedArray = aa, Mr.isUndefined = function(e) {
                                        return e === r
                                    }, Mr.isWeakMap = function(e) {
                                        return Qs(e) && ho(e) == R
                                    }, Mr.isWeakSet = function(e) {
                                        return Qs(e) && "[object WeakSet]" == yn(e)
                                    }, Mr.join = function(e, t) {
                                        return null == e ? "" : gr.call(e, t)
                                    }, Mr.kebabCase = Ba, Mr.last = qo, Mr.lastIndexOf = function(e, t, n) {
                                        var i = null == e ? 0 : e.length;
                                        if (!i) return -1;
                                        var o = i;
                                        return n !== r && (o = (o = da(n)) < 0 ? pr(i + o, 0) : vr(o, i - 1)), t == t ? function(e, t, r) {
                                            for (var n = r + 1; n--;)
                                                if (e[n] === t) return n;
                                            return n
                                        }(e, t, o) : Ot(e, Tt, o, !0)
                                    }, Mr.lowerCase = Ua, Mr.lowerFirst = Wa, Mr.lt = la, Mr.lte = ca, Mr.max = function(e) {
                                        return e && e.length ? gn(e, tl, Sn) : r
                                    }, Mr.maxBy = function(e, t) {
                                        return e && e.length ? gn(e, oo(t, 2), Sn) : r
                                    }, Mr.mean = function(e) {
                                        return Pt(e, tl)
                                    }, Mr.meanBy = function(e, t) {
                                        return Pt(e, oo(t, 2))
                                    }, Mr.min = function(e) {
                                        return e && e.length ? gn(e, tl, Pn) : r
                                    }, Mr.minBy = function(e, t) {
                                        return e && e.length ? gn(e, oo(t, 2), Pn) : r
                                    }, Mr.stubArray = gl, Mr.stubFalse = fl, Mr.stubObject = function() {
                                        return {}
                                    }, Mr.stubString = function() {
                                        return ""
                                    }, Mr.stubTrue = function() {
                                        return !0
                                    }, Mr.multiply = bl, Mr.nth = function(e, t) {
                                        return e && e.length ? Hn(e, da(t)) : r
                                    }, Mr.noConflict = function() {
                                        return it._ === this && (it._ = Me), this
                                    }, Mr.noop = sl, Mr.now = Ss, Mr.pad = function(e, t, r) {
                                        e = va(e);
                                        var n = (t = da(t)) ? nr(e) : 0;
                                        if (!t || n >= t) return e;
                                        var i = (t - n) / 2;
                                        return Ni(cr(i), r) + e + Ni(lr(i), r)
                                    }, Mr.padEnd = function(e, t, r) {
                                        e = va(e);
                                        var n = (t = da(t)) ? nr(e) : 0;
                                        return t && n < t ? e + Ni(t - n, r) : e
                                    }, Mr.padStart = function(e, t, r) {
                                        e = va(e);
                                        var n = (t = da(t)) ? nr(e) : 0;
                                        return t && n < t ? Ni(t - n, r) + e : e
                                    }, Mr.parseInt = function(e, t, r) {
                                        return r || null == t ? t = 0 : t && (t = +t), Cr(va(e).replace(te, ""), t || 0)
                                    }, Mr.random = function(e, t, n) {
                                        if (n && "boolean" != typeof n && mo(e, t, n) && (t = n = r), n === r && ("boolean" == typeof t ? (n = t, t = r) : "boolean" == typeof e && (n = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = ha(e), t === r ? (t = e, e = 0) : t = ha(t)), e > t) {
                                            var i = e;
                                            e = t, t = i
                                        }
                                        if (n || e % 1 || t % 1) {
                                            var o = wr();
                                            return vr(e + o * (t - e + et("1e-" + ((o + "").length - 1))), t)
                                        }
                                        return Vn(e, t)
                                    }, Mr.reduce = function(e, t, r) {
                                        var n = Bs(e) ? Et : At,
                                            i = arguments.length < 3;
                                        return n(e, oo(t, 4), r, i, un)
                                    }, Mr.reduceRight = function(e, t, r) {
                                        var n = Bs(e) ? kt : At,
                                            i = arguments.length < 3;
                                        return n(e, oo(t, 4), r, i, hn)
                                    }, Mr.repeat = function(e, t, n) {
                                        return t = (n ? mo(e, t, n) : t === r) ? 1 : da(t), Zn(va(e), t)
                                    }, Mr.replace = function() {
                                        var e = arguments,
                                            t = va(e[0]);
                                        return e.length < 3 ? t : t.replace(e[1], e[2])
                                    }, Mr.result = function(e, t, n) {
                                        var i = -1,
                                            o = (t = vi(t, e)).length;
                                        for (o || (o = 1, e = r); ++i < o;) {
                                            var s = null == e ? r : e[Po(t[i])];
                                            s === r && (i = o, s = n), e = Xs(s) ? s.call(e) : s
                                        }
                                        return e
                                    }, Mr.round = Ll, Mr.runInContext = e, Mr.sample = function(e) {
                                        return (Bs(e) ? qr : qn)(e)
                                    }, Mr.size = function(e) {
                                        if (null == e) return 0;
                                        if (Ws(e)) return oa(e) ? nr(e) : e.length;
                                        var t = ho(e);
                                        return t == b || t == _ ? e.size : Tn(e).length
                                    }, Mr.snakeCase = Va, Mr.some = function(e, t, n) {
                                        var i = Bs(e) ? Rt : ti;
                                        return n && mo(e, t, n) && (t = r), i(e, oo(t, 3))
                                    }, Mr.sortedIndex = function(e, t) {
                                        return ri(e, t)
                                    }, Mr.sortedIndexBy = function(e, t, r) {
                                        return ni(e, t, oo(r, 2))
                                    }, Mr.sortedIndexOf = function(e, t) {
                                        var r = null == e ? 0 : e.length;
                                        if (r) {
                                            var n = ri(e, t);
                                            if (n < r && As(e[n], t)) return n
                                        }
                                        return -1
                                    }, Mr.sortedLastIndex = function(e, t) {
                                        return ri(e, t, !0)
                                    }, Mr.sortedLastIndexBy = function(e, t, r) {
                                        return ni(e, t, oo(r, 2), !0)
                                    }, Mr.sortedLastIndexOf = function(e, t) {
                                        if (null != e && e.length) {
                                            var r = ri(e, t, !0) - 1;
                                            if (As(e[r], t)) return r
                                        }
                                        return -1
                                    }, Mr.startCase = Za, Mr.startsWith = function(e, t, r) {
                                        return e = va(e), r = null == r ? 0 : on(da(r), 0, e.length), t = si(t), e.slice(r, r + t.length) == t
                                    }, Mr.subtract = xl, Mr.sum = function(e) {
                                        return e && e.length ? It(e, tl) : 0
                                    }, Mr.sumBy = function(e, t) {
                                        return e && e.length ? It(e, oo(t, 2)) : 0
                                    }, Mr.template = function(e, t, n) {
                                        var i = Mr.templateSettings;
                                        n && mo(e, t, n) && (t = r), e = va(e), t = wa({}, t, i, Xi);
                                        var o, s, a = wa({}, t.imports, i.imports, Xi),
                                            l = za(a),
                                            c = Ut(a, l),
                                            u = 0,
                                            h = t.interpolate || me,
                                            d = "__p += '",
                                            g = Se((t.escape || me).source + "|" + h.source + "|" + (h === X ? ce : me).source + "|" + (t.evaluate || me).source + "|$", "g"),
                                            f = "//# sourceURL=" + (Fe.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ke + "]") + "\n";
                                        e.replace(g, (function(t, r, n, i, a, l) {
                                            return n || (n = i), d += e.slice(u, l).replace(Ce, Kt), r && (o = !0, d += "' +\n__e(" + r + ") +\n'"), a && (s = !0, d += "';\n" + a + ";\n__p += '"), n && (d += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), u = l + t.length, t
                                        })), d += "';\n";
                                        var p = Fe.call(t, "variable") && t.variable;
                                        if (p) {
                                            if (ae.test(p)) throw new be("Invalid `variable` option passed into `_.template`")
                                        } else d = "with (obj) {\n" + d + "\n}\n";
                                        d = (s ? d.replace(H, "") : d).replace(N, "$1").replace(B, "$1;"), d = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                                        var v = Ka((function() {
                                            return Le(l, f + "return " + d).apply(r, c)
                                        }));
                                        if (v.source = d, qs(v)) throw v;
                                        return v
                                    }, Mr.times = function(e, t) {
                                        if ((e = da(e)) < 1 || e > c) return [];
                                        var r = h,
                                            n = vr(e, h);
                                        t = oo(t), e -= h;
                                        for (var i = Ht(n, t); ++r < e;) t(r);
                                        return i
                                    }, Mr.toFinite = ha, Mr.toInteger = da, Mr.toLength = ga, Mr.toLower = function(e) {
                                        return va(e).toLowerCase()
                                    }, Mr.toNumber = fa, Mr.toSafeInteger = function(e) {
                                        return e ? on(da(e), -9007199254740991, c) : 0 === e ? e : 0
                                    }, Mr.toString = va, Mr.toUpper = function(e) {
                                        return va(e).toUpperCase()
                                    }, Mr.trim = function(e, t, n) {
                                        if ((e = va(e)) && (n || t === r)) return Nt(e);
                                        if (!e || !(t = si(t))) return e;
                                        var i = ir(e),
                                            o = ir(t);
                                        return Ci(i, Vt(i, o), Zt(i, o) + 1).join("")
                                    }, Mr.trimEnd = function(e, t, n) {
                                        if ((e = va(e)) && (n || t === r)) return e.slice(0, or(e) + 1);
                                        if (!e || !(t = si(t))) return e;
                                        var i = ir(e);
                                        return Ci(i, 0, Zt(i, ir(t)) + 1).join("")
                                    }, Mr.trimStart = function(e, t, n) {
                                        if ((e = va(e)) && (n || t === r)) return e.replace(te, "");
                                        if (!e || !(t = si(t))) return e;
                                        var i = ir(e);
                                        return Ci(i, Vt(i, ir(t))).join("")
                                    }, Mr.truncate = function(e, t) {
                                        var n = 30,
                                            i = "...";
                                        if (Js(t)) {
                                            var o = "separator" in t ? t.separator : o;
                                            n = "length" in t ? da(t.length) : n, i = "omission" in t ? si(t.omission) : i
                                        }
                                        var s = (e = va(e)).length;
                                        if (Yt(e)) {
                                            var a = ir(e);
                                            s = a.length
                                        }
                                        if (n >= s) return e;
                                        var l = n - nr(i);
                                        if (l < 1) return i;
                                        var c = a ? Ci(a, 0, l).join("") : e.slice(0, l);
                                        if (o === r) return c + i;
                                        if (a && (l += c.length - l), na(o)) {
                                            if (e.slice(l).search(o)) {
                                                var u, h = c;
                                                for (o.global || (o = Se(o.source, va(ue.exec(o)) + "g")), o.lastIndex = 0; u = o.exec(h);) var d = u.index;
                                                c = c.slice(0, d === r ? l : d)
                                            }
                                        } else if (e.indexOf(si(o), l) != l) {
                                            var g = c.lastIndexOf(o);
                                            g > -1 && (c = c.slice(0, g))
                                        }
                                        return c + i
                                    }, Mr.unescape = function(e) {
                                        return (e = va(e)) && V.test(e) ? e.replace(U, sr) : e
                                    }, Mr.uniqueId = function(e) {
                                        var t = ++je;
                                        return va(e) + t
                                    }, Mr.upperCase = Ga, Mr.upperFirst = qa, Mr.each = vs, Mr.eachRight = ms, Mr.first = Wo, ol(Mr, (pl = {}, Cn(Mr, (function(e, t) {
                                        Fe.call(Mr.prototype, t) || (pl[t] = e)
                                    })), pl), {
                                        chain: !1
                                    }), Mr.VERSION = "4.17.21", Ct(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                                        Mr[e].placeholder = Mr
                                    })), Ct(["drop", "take"], (function(e, t) {
                                        Nr.prototype[e] = function(n) {
                                            n = n === r ? 1 : pr(da(n), 0);
                                            var i = this.__filtered__ && !t ? new Nr(this) : this.clone();
                                            return i.__filtered__ ? i.__takeCount__ = vr(n, i.__takeCount__) : i.__views__.push({
                                                size: vr(n, h),
                                                type: e + (i.__dir__ < 0 ? "Right" : "")
                                            }), i
                                        }, Nr.prototype[e + "Right"] = function(t) {
                                            return this.reverse()[e](t).reverse()
                                        }
                                    })), Ct(["filter", "map", "takeWhile"], (function(e, t) {
                                        var r = t + 1,
                                            n = 1 == r || 3 == r;
                                        Nr.prototype[e] = function(e) {
                                            var t = this.clone();
                                            return t.__iteratees__.push({
                                                iteratee: oo(e, 3),
                                                type: r
                                            }), t.__filtered__ = t.__filtered__ || n, t
                                        }
                                    })), Ct(["head", "last"], (function(e, t) {
                                        var r = "take" + (t ? "Right" : "");
                                        Nr.prototype[e] = function() {
                                            return this[r](1).value()[0]
                                        }
                                    })), Ct(["initial", "tail"], (function(e, t) {
                                        var r = "drop" + (t ? "" : "Right");
                                        Nr.prototype[e] = function() {
                                            return this.__filtered__ ? new Nr(this) : this[r](1)
                                        }
                                    })), Nr.prototype.compact = function() {
                                        return this.filter(tl)
                                    }, Nr.prototype.find = function(e) {
                                        return this.filter(e).head()
                                    }, Nr.prototype.findLast = function(e) {
                                        return this.reverse().find(e)
                                    }, Nr.prototype.invokeMap = Gn((function(e, t) {
                                        return "function" == typeof e ? new Nr(this) : this.map((function(r) {
                                            return Rn(r, e, t)
                                        }))
                                    })), Nr.prototype.reject = function(e) {
                                        return this.filter(js(oo(e)))
                                    }, Nr.prototype.slice = function(e, t) {
                                        e = da(e);
                                        var n = this;
                                        return n.__filtered__ && (e > 0 || t < 0) ? new Nr(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== r && (n = (t = da(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                                    }, Nr.prototype.takeRightWhile = function(e) {
                                        return this.reverse().takeWhile(e).reverse()
                                    }, Nr.prototype.toArray = function() {
                                        return this.take(h)
                                    }, Cn(Nr.prototype, (function(e, t) {
                                        var n = /^(?:filter|find|map|reject)|While$/.test(t),
                                            i = /^(?:head|last)$/.test(t),
                                            o = Mr[i ? "take" + ("last" == t ? "Right" : "") : t],
                                            s = i || /^find/.test(t);
                                        o && (Mr.prototype[t] = function() {
                                            var t = this.__wrapped__,
                                                a = i ? [1] : arguments,
                                                l = t instanceof Nr,
                                                c = a[0],
                                                u = l || Bs(t),
                                                h = function(e) {
                                                    var t = o.apply(Mr, _t([e], a));
                                                    return i && d ? t[0] : t
                                                };
                                            u && n && "function" == typeof c && 1 != c.length && (l = u = !1);
                                            var d = this.__chain__,
                                                g = !!this.__actions__.length,
                                                f = s && !d,
                                                p = l && !g;
                                            if (!s && u) {
                                                t = p ? t : new Nr(this);
                                                var v = e.apply(t, a);
                                                return v.__actions__.push({
                                                    func: hs,
                                                    args: [h],
                                                    thisArg: r
                                                }), new Hr(v, d)
                                            }
                                            return f && p ? e.apply(this, a) : (v = this.thru(h), f ? i ? v.value()[0] : v.value() : v)
                                        })
                                    })), Ct(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                                        var t = ke[e],
                                            r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                            n = /^(?:pop|shift)$/.test(e);
                                        Mr.prototype[e] = function() {
                                            var e = arguments;
                                            if (n && !this.__chain__) {
                                                var i = this.value();
                                                return t.apply(Bs(i) ? i : [], e)
                                            }
                                            return this[r]((function(r) {
                                                return t.apply(Bs(r) ? r : [], e)
                                            }))
                                        }
                                    })), Cn(Nr.prototype, (function(e, t) {
                                        var r = Mr[t];
                                        if (r) {
                                            var n = r.name + "";
                                            Fe.call(Rr, n) || (Rr[n] = []), Rr[n].push({
                                                name: t,
                                                func: r
                                            })
                                        }
                                    })), Rr[Mi(r, 2).name] = [{
                                        name: "wrapper",
                                        func: r
                                    }], Nr.prototype.clone = function() {
                                        var e = new Nr(this.__wrapped__);
                                        return e.__actions__ = Ei(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ei(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ei(this.__views__), e
                                    }, Nr.prototype.reverse = function() {
                                        if (this.__filtered__) {
                                            var e = new Nr(this);
                                            e.__dir__ = -1, e.__filtered__ = !0
                                        } else(e = this.clone()).__dir__ *= -1;
                                        return e
                                    }, Nr.prototype.value = function() {
                                        var e = this.__wrapped__.value(),
                                            t = this.__dir__,
                                            r = Bs(e),
                                            n = t < 0,
                                            i = r ? e.length : 0,
                                            o = function(e, t, r) {
                                                for (var n = -1, i = r.length; ++n < i;) {
                                                    var o = r[n],
                                                        s = o.size;
                                                    switch (o.type) {
                                                        case "drop":
                                                            e += s;
                                                            break;
                                                        case "dropRight":
                                                            t -= s;
                                                            break;
                                                        case "take":
                                                            t = vr(t, e + s);
                                                            break;
                                                        case "takeRight":
                                                            e = pr(e, t - s)
                                                    }
                                                }
                                                return {
                                                    start: e,
                                                    end: t
                                                }
                                            }(0, i, this.__views__),
                                            s = o.start,
                                            a = o.end,
                                            l = a - s,
                                            c = n ? a : s - 1,
                                            u = this.__iteratees__,
                                            h = u.length,
                                            d = 0,
                                            g = vr(l, this.__takeCount__);
                                        if (!r || !n && i == l && g == l) return hi(e, this.__actions__);
                                        var f = [];
                                        e: for (; l-- && d < g;) {
                                            for (var p = -1, v = e[c += t]; ++p < h;) {
                                                var m = u[p],
                                                    C = m.iteratee,
                                                    w = m.type,
                                                    b = C(v);
                                                if (2 == w) v = b;
                                                else if (!b) {
                                                    if (1 == w) continue e;
                                                    break e
                                                }
                                            }
                                            f[d++] = v
                                        }
                                        return f
                                    }, Mr.prototype.at = ds, Mr.prototype.chain = function() {
                                        return us(this)
                                    }, Mr.prototype.commit = function() {
                                        return new Hr(this.value(), this.__chain__)
                                    }, Mr.prototype.next = function() {
                                        this.__values__ === r && (this.__values__ = ua(this.value()));
                                        var e = this.__index__ >= this.__values__.length;
                                        return {
                                            done: e,
                                            value: e ? r : this.__values__[this.__index__++]
                                        }
                                    }, Mr.prototype.plant = function(e) {
                                        for (var t, n = this; n instanceof Ir;) {
                                            var i = Mo(n);
                                            i.__index__ = 0, i.__values__ = r, t ? o.__wrapped__ = i : t = i;
                                            var o = i;
                                            n = n.__wrapped__
                                        }
                                        return o.__wrapped__ = e, t
                                    }, Mr.prototype.reverse = function() {
                                        var e = this.__wrapped__;
                                        if (e instanceof Nr) {
                                            var t = e;
                                            return this.__actions__.length && (t = new Nr(this)), (t = t.reverse()).__actions__.push({
                                                func: hs,
                                                args: [Jo],
                                                thisArg: r
                                            }), new Hr(t, this.__chain__)
                                        }
                                        return this.thru(Jo)
                                    }, Mr.prototype.toJSON = Mr.prototype.valueOf = Mr.prototype.value = function() {
                                        return hi(this.__wrapped__, this.__actions__)
                                    }, Mr.prototype.first = Mr.prototype.head, ot && (Mr.prototype[ot] = function() {
                                        return this
                                    }), Mr
                                }();
                            st ? ((st.exports = ar)._ = ar, ot._ = ar) : it._ = ar
                        }).call(Ne)
                    }));
                    class Wo {
                        constructor(e, t) {
                            var r, n;
                            this.sv = e, this.storesByType = {}, this.storesXToType = {}, this.storesYToType = {}, null === (r = this.sv.selectionStoreConnector) || void 0 === r || r.beforeUpdate(), this.columns = this.getViewportColumnData(t), null === (n = this.sv.scrollingService) || void 0 === n || n.unregister()
                        }
                        onColumnResize(e, t, r) {
                            var n;
                            null === (n = this.sv.dimensionProvider) || void 0 === n || n.setDimensionSize(e, t.detail);
                            const i = Uo.reduce(t.detail || {}, ((e, t, n) => {
                                const i = Un(r, parseInt(n, 10));
                                return i && (e[i.prop] = Object.assign(Object.assign({}, i), {
                                    size: t
                                })), e
                            }), {});
                            this.sv.resize(i)
                        }
                        getViewportColumnData(e) {
                            const t = [];
                            let r = 0;
                            return Gn.forEach((n => {
                                const i = this.sv.columnProvider.stores[n].store;
                                if (!i.get("items").length) return;
                                const o = {
                                    colType: n,
                                    position: {
                                        x: r,
                                        y: 1
                                    },
                                    contentHeight: e,
                                    fixWidth: "rgCol" !== n,
                                    uuid: `${this.sv.uuid}-${r}`,
                                    viewports: this.sv.viewportProvider.stores,
                                    dimensions: this.sv.dimensionProvider.stores,
                                    rowStores: this.sv.dataProvider.stores,
                                    colStore: i,
                                    onHeaderresize: e => this.onColumnResize(n, e, i)
                                };
                                "rgCol" === n && (o.onResizeViewport = e => {
                                    var t;
                                    return null === (t = this.sv.viewportProvider) || void 0 === t ? void 0 : t.setViewport(e.detail.dimension, {
                                        virtualSize: e.detail.size
                                    })
                                });
                                const s = this.gatherColumnData(o),
                                    a = this.registerCol(s.position.x, n),
                                    l = this.dataViewPort(o).reduce(((e, t) => {
                                        const r = this.registerSegment(t.position);
                                        r.setLastCell(t.lastCell);
                                        const n = this.registerRow(t.position.y, t.type),
                                            i = Object.assign(Object.assign({}, t), {
                                                rowSelectionStore: n,
                                                segmentSelectionStore: r.store,
                                                ref: e => this.sv.selectionStoreConnector.registerSection(e),
                                                onSetRange: e => r.setRangeArea(e.detail),
                                                onSetTempRange: e => r.setTempArea(e.detail),
                                                onFocusCell: e => {
                                                    r.clearFocus(), this.sv.selectionStoreConnector.focus(r, e.detail)
                                                }
                                            });
                                        return e.push(i), e
                                    }), []);
                                t.push(Object.assign(Object.assign({}, s), {
                                    columnSelectionStore: a,
                                    dataPorts: l
                                })), r++
                            })), t
                        }
                        registerSegment(e) {
                            return this.sv.selectionStoreConnector.register(e)
                        }
                        registerRow(e, t) {
                            return this.storesByType[t] = e, this.storesYToType[e] = t, this.sv.selectionStoreConnector.registerRow(e).store
                        }
                        registerCol(e, t) {
                            return this.storesByType[t] = e, this.storesXToType[e] = t, this.sv.selectionStoreConnector.registerColumn(e).store
                        }
                        gatherColumnData(e) {
                            const t = e.uuid,
                                r = e.dimensions[e.colType].store.get("realSize"),
                                n = {
                                    contentWidth: r,
                                    class: e.colType,
                                    [`${io}`]: e.uuid,
                                    contentHeight: e.contentHeight,
                                    key: e.colType,
                                    onResizeViewport: e.onResizeViewport
                                };
                            e.fixWidth && (n.style = {
                                minWidth: `${r}px`
                            });
                            const i = {
                                parent: t,
                                colData: Bn(e.colStore),
                                dimensionCol: e.dimensions[e.colType].store,
                                groups: e.colStore.get("groups"),
                                groupingDepth: e.colStore.get("groupingDepth"),
                                onHeaderresize: e.onHeaderresize
                            };
                            return {
                                prop: n,
                                position: e.position,
                                headerProp: i,
                                parent: t,
                                viewportCol: e.viewports[e.colType].store
                            }
                        }
                        dataViewPort(e) {
                            const t = {
                                rowPinStart: Io,
                                rgRow: No,
                                rowPinEnd: Ho
                            };
                            let r = 0;
                            return Zn.reduce(((n, i) => {
                                const o = e.viewports[i].store.get("realCount") || "rgRow" === i,
                                    s = Object.assign(Object.assign({}, e), {
                                        position: Object.assign(Object.assign({}, e.position), {
                                            y: o ? r : Mo
                                        })
                                    });
                                return n.push(this.dataPartition(s, i, t[i], "rgRow" !== i)), o && r++, n
                            }), [])
                        }
                        dataPartition(e, t, r, n) {
                            return {
                                colData: e.colStore,
                                viewportCol: e.viewports[e.colType].store,
                                viewportRow: e.viewports[t].store,
                                lastCell: Bo(e, t),
                                slot: r,
                                type: t,
                                canDrag: !n,
                                position: e.position,
                                uuid: `${e.uuid}-${e.position.x}-${e.position.y}`,
                                dataStore: e.rowStores[t].store,
                                dimensionCol: e.dimensions[e.colType].store,
                                dimensionRow: e.dimensions[t].store,
                                style: n ? {
                                    height: `${e.dimensions[t].store.get("realSize")}px`
                                } : void 0
                            }
                        }
                        scrollToCell(e) {
                            for (let t in e) {
                                const r = e[t];
                                this.sv.scrollingService.onScroll({
                                    dimension: "x" === t ? "rgCol" : "rgRow",
                                    coordinate: r
                                })
                            }
                        }
                        clearFocused() {
                            this.sv.selectionStoreConnector.clearAll()
                        }
                        clearEdit() {
                            this.sv.selectionStoreConnector.setEdit(!1)
                        }
                        getFocused() {
                            const e = this.sv.selectionStoreConnector.focusedStore;
                            if (!e) return null;
                            const t = this.storesXToType[e.position.x],
                                r = this.sv.columnProvider.getColumn(e.cell.x, t),
                                n = this.storesYToType[e.position.x];
                            return {
                                column: r,
                                model: this.sv.dataProvider.getModel(e.cell.x, n),
                                cell: e.cell,
                                colType: t,
                                rowType: n
                            }
                        }
                        setEdit(e, t, r, n) {
                            var i;
                            const o = this.storesByType,
                                s = {
                                    x: o[r],
                                    y: o[n]
                                };
                            null === (i = this.sv.selectionStoreConnector) || void 0 === i || i.setEditByCell(s, {
                                x: t,
                                y: e
                            })
                        }
                    }
                    const Vo = ({
                        resize: e,
                        editors: t,
                        rowClass: r,
                        readonly: n,
                        range: i,
                        columns: o,
                        useClipboard: s,
                        columnFilter: a,
                        registerElement: l,
                        onEdit: c,
                        onScroll: u
                    }) => {
                        const h = [];
                        for (let d of o) {
                            const o = [z("revogr-header", Object.assign({
                                viewportCol: d.viewportCol
                            }, d.headerProp, {
                                selectionStore: d.columnSelectionStore,
                                slot: Io,
                                columnFilter: a,
                                canResize: e
                            }))];
                            d.dataPorts.forEach(((e, a) => {
                                const l = d.prop.key + (a + 1),
                                    u = z("revogr-overlay-selection", Object.assign({}, e, {
                                        slot: e.slot,
                                        selectionStore: e.segmentSelectionStore,
                                        editors: t,
                                        readonly: n,
                                        range: i,
                                        useClipboard: s,
                                        onSetEdit: ({
                                            detail: e
                                        }) => c(e)
                                    }), z("revogr-data", Object.assign({}, e, {
                                        [io]: e.uuid
                                    }, {
                                        key: l,
                                        readonly: n,
                                        range: i,
                                        rowClass: r,
                                        rowSelectionStore: e.rowSelectionStore,
                                        slot: "data"
                                    })), z("revogr-temp-range", {
                                        selectionStore: e.segmentSelectionStore,
                                        dimensionRow: e.dimensionRow,
                                        dimensionCol: e.dimensionCol
                                    }), z("revogr-focus", {
                                        selectionStore: e.segmentSelectionStore,
                                        dimensionRow: e.dimensionRow,
                                        dimensionCol: e.dimensionCol
                                    }));
                                o.push(u)
                            })), h.push(z("revogr-viewport-scroll", Object.assign({}, d.prop, {
                                ref: e => l(e, d.prop.key),
                                onScrollViewport: e => u(e.detail, d.prop.key)
                            }), o))
                        }
                        return h
                    };
                    class Zo {
                        constructor(e) {
                            this.setViewport = e, this.elements = {}
                        }
                        async onScroll(e, t) {
                            let r;
                            for (let n in this.elements)
                                if (this.isPinnedColumn(t) && "rgCol" === e.dimension) {
                                    if (n === t || !e.delta) continue;
                                    for (let t of this.elements[n]) t.changeScroll && (r = t.changeScroll(e))
                                } else {
                                    if ("rgCol" === e.dimension && "headerRow" === n) continue;
                                    for (let t of this.elements[n]) t.setScroll(e)
                                } let n = e;
                            r && (n = await r), this.setViewport(n)
                        }
                        isPinnedColumn(e) {
                            return ["colPinStart", "colPinEnd"].indexOf(e) > -1
                        }
                        registerElements(e) {
                            this.elements = e
                        }
                        registerElement(e, t) {
                            this.elements[t] || (this.elements[t] = []), e ? this.elements[t].push(e) : this.elements[t] && delete this.elements[t]
                        }
                        unregister() {
                            delete this.elements, this.elements = {}
                        }
                    }
                    class Go extends Kn {
                        constructor(e, t) {
                            super(e), this.dimensionProvider = t, this.stretchedColumn = null, this.scrollSize = si(document), this.addEventListener("beforecolumnapplied", (({
                                detail: {
                                    columns: e
                                }
                            }) => this.applyStretch(e)))
                        }
                        setScroll({
                            type: e,
                            hasScroll: t
                        }) {
                            var r;
                            "rgRow" === e && this.stretchedColumn && (null === (r = this.stretchedColumn) || void 0 === r ? void 0 : r.initialSize) === this.stretchedColumn.size && t && (this.stretchedColumn.size -= this.scrollSize, this.apply(), this.dropChanges())
                        }
                        activateChanges() {
                            this.addEventListener("scrollchange", (({
                                detail: e
                            }) => this.setScroll(e)))
                        }
                        dropChanges() {
                            this.stretchedColumn = null, this.removeEventListener("scrollchange")
                        }
                        apply() {
                            this.stretchedColumn && this.dimensionProvider.setDimensionSize("rgCol", {
                                [this.stretchedColumn.index]: this.stretchedColumn.size
                            })
                        }
                        applyStretch(e) {
                            this.dropChanges();
                            let t = this.revogrid.clientWidth - 1;
                            if (Uo.each(e, ((e, r) => {
                                    const n = this.dimensionProvider.stores[r].store.get("realSize");
                                    t -= n
                                })), t > 0) {
                                const r = e.rgCol.length - 1,
                                    n = e.rgCol[r],
                                    i = (null == n ? void 0 : n.size) || this.revogrid.colSize || 0,
                                    o = t + i - 1;
                                n && !n.autoSize && i < o && (this.stretchedColumn = {
                                    initialSize: o,
                                    index: r,
                                    size: o
                                }, this.apply(), this.activateChanges())
                            }
                        }
                    }
                    const qo = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.beforeedit = ee(this, "beforeedit", 7), this.beforerangeedit = ee(this, "beforerangeedit", 7), this.afteredit = ee(this, "afteredit", 7), this.beforeautofill = ee(this, "beforeautofill", 7), this.beforeaange = ee(this, "beforeaange", 7), this.roworderchanged = ee(this, "roworderchanged", 7), this.beforesourcesortingapply = ee(this, "beforesourcesortingapply", 7), this.beforesortingapply = ee(this, "beforesortingapply", 7), this.beforesorting = ee(this, "beforesorting", 7), this.rowdragstart = ee(this, "rowdragstart", 7), this.headerclick = ee(this, "headerclick", 7), this.beforecellfocus = ee(this, "beforecellfocus", 7), this.beforefocuslost = ee(this, "beforefocuslost", 7), this.beforesourceset = ee(this, "beforesourceset", 7), this.aftersourceset = ee(this, "aftersourceset", 7), this.beforecolumnsset = ee(this, "beforecolumnsset", 7), this.beforecolumnapplied = ee(this, "beforecolumnapplied", 7), this.aftercolumnsset = ee(this, "aftercolumnsset", 7), this.beforefilterapply = ee(this, "beforefilterapply", 7), this.beforefiltertrimmed = ee(this, "beforefiltertrimmed", 7), this.beforetrimmed = ee(this, "beforetrimmed", 7), this.aftertrimmed = ee(this, "aftertrimmed", 7), this.viewportscroll = ee(this, "viewportscroll", 7), this.beforeexport = ee(this, "beforeexport", 7), this.beforeeditstart = ee(this, "beforeeditstart", 7), this.aftercolumnresize = ee(this, "aftercolumnresize", 7), this.frameSize = 1, this.rowSize = 0, this.colSize = 100, this.range = !1, this.readonly = !1, this.resize = !1, this.canFocus = !0, this.useClipboard = !0, this.columns = [], this.source = [], this.pinnedTopSource = [], this.pinnedBottomSource = [], this.rowDefinitions = [], this.editors = {}, this.columnTypes = {}, this.theme = "default", this.rowClass = "", this.autoSizeColumn = !1, this.filter = !1, this.trimmedRows = {}, this.exporting = !1, this.stretch = !0, this.extraElements = [], this.uuid = null, this.viewport = null, this.internalPlugins = [], this.subscribers = {}
                            }
                            async refresh(e = "all") {
                                this.dataProvider.refresh(e)
                            }
                            async scrollToRow(e = 0) {
                                const t = this.dimensionProvider.getViewPortPos({
                                    coordinate: e,
                                    dimension: "rgRow"
                                });
                                await this.scrollToCoordinate({
                                    y: t
                                })
                            }
                            async scrollToColumnIndex(e = 0) {
                                const t = this.dimensionProvider.getViewPortPos({
                                    coordinate: e,
                                    dimension: "rgCol"
                                });
                                await this.scrollToCoordinate({
                                    x: t
                                })
                            }
                            async scrollToColumnProp(e) {
                                const t = this.columnProvider.getColumnIndexByProp(e, "rgCol");
                                if (t < 0) return;
                                const r = this.dimensionProvider.getViewPortPos({
                                    coordinate: t,
                                    dimension: "rgCol"
                                });
                                await this.scrollToCoordinate({
                                    x: r
                                })
                            }
                            async updateColumns(e) {
                                this.columnProvider.updateColumns(e)
                            }
                            async addTrimmed(e, t = "external", r = "rgRow") {
                                const n = this.beforetrimmed.emit({
                                    trimmed: e,
                                    trimmedType: t,
                                    type: r
                                });
                                return n.defaultPrevented || (this.dataProvider.setTrimmed({
                                    [t]: n.detail.trimmed
                                }, r), this.aftertrimmed.emit()), n
                            }
                            async scrollToCoordinate(e) {
                                var t;
                                null === (t = this.viewport) || void 0 === t || t.scrollToCell(e)
                            }
                            async setCellEdit(e, t, r = "rgRow") {
                                var n;
                                const i = Jn.getColumnByProp(this.columns, t);
                                i && (await li(), null === (n = this.viewport) || void 0 === n || n.setEdit(e, this.columnProvider.getColumnIndexByProp(t, "rgCol"), i.pin || "rgCol", r))
                            }
                            async registerVNode(e) {
                                this.extraElements.push(...e), this.extraElements = [...this.extraElements]
                            }
                            async getSource(e = "rgRow") {
                                return this.dataProvider.stores[e].store.get("source")
                            }
                            async getVisibleSource(e = "rgRow") {
                                return Bn(this.dataProvider.stores[e].store)
                            }
                            async getSourceStore(e = "rgRow") {
                                return this.dataProvider.stores[e].store
                            }
                            async getColumnStore(e = "rgCol") {
                                return this.columnProvider.stores[e].store
                            }
                            async updateColumnSorting(e, t, r) {
                                return this.columnProvider.updateColumnSorting(e, t, r)
                            }
                            async clearSorting() {
                                this.columnProvider.clearSorting()
                            }
                            async getColumns() {
                                return this.columnProvider.getColumns()
                            }
                            async clearFocus() {
                                var e;
                                const t = await this.getFocused();
                                this.beforefocuslost.emit(t).defaultPrevented || (this.selectionStoreConnector.clearAll(), null === (e = this.viewport) || void 0 === e || e.clearFocused())
                            }
                            async getPlugins() {
                                return [...this.internalPlugins]
                            }
                            async getFocused() {
                                var e;
                                return null === (e = this.viewport) || void 0 === e ? void 0 : e.getFocused()
                            }
                            handleOutsideClick({
                                target: e
                            }) {
                                (null == e ? void 0 : e.closest(`[${io}="${this.uuid}"]`)) || this.clearFocus()
                            }
                            onRowDragStarted(e) {
                                var t;
                                e.cancelBubble = !0;
                                const r = this.rowdragstart.emit(e.detail);
                                r.defaultPrevented ? e.preventDefault() : null === (t = this.orderService) || void 0 === t || t.start(this.element, Object.assign(Object.assign({}, e.detail), r.detail))
                            }
                            onRowDragEnd() {
                                var e;
                                null === (e = this.orderService) || void 0 === e || e.end()
                            }
                            onRowDrag({
                                detail: e
                            }) {
                                var t;
                                null === (t = this.orderService) || void 0 === t || t.move(e)
                            }
                            onRowMouseMove(e) {
                                var t;
                                e.cancelBubble = !0, null === (t = this.orderService) || void 0 === t || t.moveTip(e.detail)
                            }
                            async onBeforeEdit(e) {
                                e.cancelBubble = !0;
                                const {
                                    defaultPrevented: t,
                                    detail: r
                                } = this.beforeedit.emit(e.detail);
                                await li(), t || (this.dataProvider.setCellData(r), this.afteredit.emit(r))
                            }
                            onBeforeRangeEdit(e) {
                                e.cancelBubble = !0;
                                const {
                                    defaultPrevented: t
                                } = this.beforerangeedit.emit(e.detail);
                                t ? e.preventDefault() : this.afteredit.emit(e.detail)
                            }
                            onRangeChanged(e) {
                                e.cancelBubble = !0, this.beforeaange.emit(e.detail).defaultPrevented && e.preventDefault(), this.beforeautofill.emit(e.detail).defaultPrevented
                            }
                            onRowDropped(e) {
                                e.cancelBubble = !0;
                                const {
                                    defaultPrevented: t
                                } = this.roworderchanged.emit(e.detail);
                                t && e.preventDefault()
                            }
                            onHeaderClick(e) {
                                const {
                                    defaultPrevented: t
                                } = this.headerclick.emit(Object.assign(Object.assign({}, e.detail.column), {
                                    originalEvent: e.detail.originalEvent
                                }));
                                t && e.preventDefault()
                            }
                            onCellFocus(e) {
                                e.cancelBubble = !0;
                                const {
                                    defaultPrevented: t
                                } = this.beforecellfocus.emit(e.detail);
                                this.canFocus && !t || e.preventDefault()
                            }
                            columnChanged(e = []) {
                                this.dimensionProvider.drop();
                                const t = Jn.getColumns(e, 0, this.columnTypes);
                                this.beforecolumnsset.emit(t);
                                for (let e of Gn) {
                                    const r = t.columns[e];
                                    this.dimensionProvider.setRealSize(r.length, e), this.dimensionProvider.setColumns(e, Jn.getSizes(r), "rgCol" !== e)
                                }
                                this.beforecolumnapplied.emit(t);
                                const r = this.columnProvider.setColumns(t);
                                this.aftercolumnsset.emit({
                                    columns: r,
                                    order: this.columnProvider.order
                                })
                            }
                            themeChanged(e) {
                                this.themeService.register(e), this.dimensionProvider.setSettings({
                                    originItemSize: this.themeService.rowSize,
                                    frameOffset: this.frameSize || 0
                                }, "rgRow"), this.dimensionProvider.setSettings({
                                    originItemSize: this.colSize,
                                    frameOffset: this.frameSize || 0
                                }, "rgCol")
                            }
                            dataChanged(e = []) {
                                let t = [...e];
                                t = this.beforesourceset.emit({
                                    type: "rgRow",
                                    source: t
                                }).detail.source, t = this.dataProvider.setData(t, "rgRow"), this.aftersourceset.emit({
                                    type: "rgRow",
                                    source: t
                                })
                            }
                            dataBottomChanged(e = []) {
                                this.dataProvider.setData(e, "rowPinEnd")
                            }
                            dataTopChanged(e = []) {
                                this.dataProvider.setData(e, "rowPinStart")
                            }
                            rowDefChanged(e = []) {
                                if (!e.length) return;
                                const t = vn(e, ((e, t) => (e[t.type] || (e[t.type] = {}), t.size && (e[t.type].sizes || (e[t.type].sizes = {}), e[t.type].sizes[t.index] = t.size), e)), {});
                                Cn(t, ((e, t) => {
                                    e.sizes && this.dimensionProvider.setDimensionSize(t, e.sizes)
                                }))
                            }
                            trimmedRowsChanged(e = {}) {
                                this.addTrimmed(e)
                            }
                            groupingChanged(e = {}) {
                                let t;
                                for (let e of this.internalPlugins) {
                                    const r = e;
                                    if (r.setGrouping) {
                                        t = r;
                                        break
                                    }
                                }
                                t && t.setGrouping(e || {})
                            }
                            applyStretch(e) {
                                let t = this.internalPlugins.filter((e => !!e.applyStretch))[0];
                                if (e) t ? t.applyStretch(this.columnProvider.getRawColumns()) : this.internalPlugins.push(new Go(this.element, this.dimensionProvider));
                                else if (t) {
                                    const e = this.internalPlugins.indexOf(t);
                                    this.internalPlugins.splice(e, 1)
                                }
                            }
                            connectedCallback() {
                                this.viewportProvider = new Li, this.themeService = new Me({
                                    rowSize: this.rowSize
                                }), this.dimensionProvider = new gi(this.viewportProvider), this.columnProvider = new Jn, this.dataProvider = new Qn(this.dimensionProvider), this.uuid = `${(new Date).getTime()}-rvgrid`, this.autoSizeColumn && this.internalPlugins.push(new xi(this.element, {
                                    dataProvider: this.dataProvider,
                                    columnProvider: this.columnProvider,
                                    dimensionProvider: this.dimensionProvider
                                }, "object" == typeof this.autoSizeColumn ? this.autoSizeColumn : void 0)), this.filter && this.internalPlugins.push(new Hi(this.element, this.uuid, "object" == typeof this.filter ? this.filter : void 0)), this.exporting && this.internalPlugins.push(new ko(this.element)), this.internalPlugins.push(new to(this.element)), this.plugins && this.plugins.forEach((e => {
                                    this.internalPlugins.push(new e(this.element))
                                })), this.internalPlugins.push(new zo(this.element, {
                                    dataProvider: this.dataProvider,
                                    columnProvider: this.columnProvider
                                })), this.applyStretch(this.stretch), this.themeChanged(this.theme), this.columnChanged(this.columns), this.dataChanged(this.source), this.dataTopChanged(this.pinnedTopSource), this.dataBottomChanged(this.pinnedBottomSource), this.trimmedRowsChanged(this.trimmedRows), this.rowDefChanged(this.rowDefinitions), this.groupingChanged(this.grouping), this.selectionStoreConnector = new Ao, this.scrollingService = new Zo((e => {
                                    this.dimensionProvider.setViewPortCoordinate({
                                        coordinate: e.coordinate,
                                        type: e.dimension
                                    }), this.viewportscroll.emit(e)
                                })), this.subscribers = {
                                    click: this.handleOutsideClick.bind(this)
                                };
                                for (let e in this.subscribers) document.addEventListener(e, this.subscribers[e])
                            }
                            disconnectedCallback() {
                                Cn(this.internalPlugins, (e => e.destroy())), this.internalPlugins = [];
                                for (let e in this.subscribers) document.removeEventListener(e, this.subscribers[e]), delete this.subscribers[e]
                            }
                            render() {
                                const e = this.dimensionProvider.stores.rgRow.store.get("realSize");
                                this.viewport = new Wo({
                                    columnProvider: this.columnProvider,
                                    dataProvider: this.dataProvider,
                                    dimensionProvider: this.dimensionProvider,
                                    viewportProvider: this.viewportProvider,
                                    uuid: this.uuid,
                                    scrollingService: this.scrollingService,
                                    orderService: this.orderService,
                                    selectionStoreConnector: this.selectionStoreConnector,
                                    resize: e => this.aftercolumnresize.emit(e)
                                }, e);
                                const t = [];
                                if (this.rowHeaders) {
                                    const r = this.viewport.columns[0];
                                    t.push(z("revogr-row-headers", {
                                        height: e,
                                        resize: this.resize,
                                        dataPorts: r.dataPorts,
                                        headerProp: r.headerProp,
                                        uiid: r.prop[io],
                                        rowHeaderColumn: "object" == typeof this.rowHeaders ? this.rowHeaders : void 0,
                                        onScrollViewport: ({
                                            detail: e
                                        }) => this.scrollingService.onScroll(e, "headerRow"),
                                        onElementToScroll: ({
                                            detail: e
                                        }) => this.scrollingService.registerElement(e, "headerRow")
                                    }))
                                }
                                return t.push(z(Vo, {
                                    columnFilter: !!this.filter,
                                    resize: this.resize,
                                    readonly: this.readonly,
                                    range: this.range,
                                    rowClass: this.rowClass,
                                    editors: this.editors,
                                    useClipboard: this.useClipboard,
                                    columns: this.viewport.columns,
                                    onEdit: e => {
                                        this.beforeeditstart.emit(e).defaultPrevented || this.selectionStoreConnector.setEdit(!e.isCancel && e.val)
                                    },
                                    registerElement: (e, t) => this.scrollingService.registerElement(e, t),
                                    onScroll: e => this.scrollingService.onScroll(e)
                                })), z(O, Object.assign({}, {
                                    [`${io}`]: this.uuid
                                }), z(Fo, {
                                    viewports: this.viewportProvider.stores,
                                    dimensions: this.dimensionProvider.stores,
                                    orderRef: e => this.orderService = e,
                                    registerElement: (e, t) => this.scrollingService.registerElement(e, t),
                                    nakedClick: () => this.viewport.clearEdit(),
                                    onScroll: e => this.scrollingService.onScroll(e)
                                }, t), this.extraElements)
                            }
                            get element() {
                                return this
                            }
                            static get watchers() {
                                return {
                                    columns: ["columnChanged"],
                                    theme: ["themeChanged"],
                                    source: ["dataChanged"],
                                    pinnedBottomSource: ["dataBottomChanged"],
                                    pinnedTopSource: ["dataTopChanged"],
                                    rowDefinitions: ["rowDefChanged"],
                                    trimmedRows: ["trimmedRowsChanged"],
                                    grouping: ["groupingChanged"],
                                    stretch: ["applyStretch"]
                                }
                            }
                            static get style() {
                                return ".revo-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.revo-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.revo-button.green{background-color:#2ee072;border:1px solid #20d565}.revo-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}revo-grid[theme=default]{font-size:12px}revo-grid[theme=default] revogr-header{text-align:center;line-height:30px;background-color:#f8f9fa}revo-grid[theme=default] revogr-header .group-rgRow{box-shadow:none}revo-grid[theme=default] revogr-header .header-rgRow,revo-grid[theme=default] revogr-header .group-rgRow{text-transform:uppercase;font-size:12px;color:#61656a}revo-grid[theme=default] revogr-header .header-rgRow{height:30px;box-shadow:0 -1px 0 0 #c0c0c0 inset}revo-grid[theme=default] revogr-header .rgHeaderCell{box-shadow:-1px 0 0 0 #c0c0c0, -1px 0 0 0 #c0c0c0 inset, 0 -1px 0 0 #c0c0c0, 0 -1px 0 0 #c0c0c0 inset}revo-grid[theme=default] revogr-header .rgHeaderCell.focused-cell{background:rgba(233, 234, 237, 0.5)}revo-grid[theme=default] .rowHeaders{background-color:#f8f9fa}revo-grid[theme=default] .rowHeaders revogr-data .rgCell{color:#61656a;box-shadow:0 -1px 0 0 #c0c0c0 inset, -1px 0 0 0 #c0c0c0 inset}revo-grid[theme=default] .rowHeaders revogr-header{box-shadow:0 -1px 0 0 #c0c0c0 inset, -1px 0 0 0 #c0c0c0 inset}revo-grid[theme=default] revogr-viewport-scroll.colPinStart revogr-data .rgRow .rgCell:last-child{box-shadow:0 -1px 0 0 #e2e3e3 inset, -1px 0 0 0 #c0c0c0 inset}revo-grid[theme=default] revogr-viewport-scroll.colPinStart .footer-wrapper revogr-data .rgRow:first-child .rgCell{box-shadow:0 1px 0 0 #c0c0c0 inset, -1px 0 0 0 #c0c0c0 inset}revo-grid[theme=default] revogr-viewport-scroll.colPinEnd,revo-grid[theme=default] revogr-viewport-scroll.colPinEnd revogr-header{box-shadow:1px 0 0 #c0c0c0 inset}revo-grid[theme=default] .footer-wrapper revogr-data .rgRow:first-child .rgCell{box-shadow:0 1px 0 0 #e2e3e3 inset, -1px 0 0 0 #e2e3e3 inset, 0 -1px 0 0 #e2e3e3 inset}revo-grid[theme=default] revogr-data{text-align:center}revo-grid[theme=default] revogr-data .rgRow{line-height:27px;box-shadow:0 -1px 0 0 #e2e3e3 inset, -1px 0 0 0 #e2e3e3 inset}revo-grid[theme=default] revogr-data .rgRow.focused-rgRow{background-color:rgba(233, 234, 237, 0.5)}revo-grid[theme=default] revogr-data .rgCell{box-shadow:0 -1px 0 0 #e2e3e3 inset, -1px 0 0 0 #e2e3e3 inset}revo-grid[theme=default] revogr-data .rgCell.disabled{background-color:0 -1px 0 0 #e2e3e3 inset, -1px 0 0 0 #e2e3e3 inset}revo-grid[theme=material]{font-family:Nunito, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}revo-grid[theme=material] revogr-header{line-height:50px;font-weight:600;text-align:left}revo-grid[theme=material] revogr-header .rgHeaderCell{padding:0 15px;text-overflow:ellipsis}revo-grid[theme=material] revogr-header .header-rgRow{height:50px}revo-grid[theme=material] revogr-data{text-align:left}revo-grid[theme=material] revogr-data .rgRow{line-height:42px}revo-grid[theme=material] revogr-data .rgCell{padding:0 15px}revo-grid[theme=material] .viewports{width:100%}revo-grid[theme=material] .rowHeaders{background-color:#f7faff}revo-grid[theme=material] .rowHeaders revogr-data .rgCell{color:#757a82}revo-grid[theme=material] revogr-header .header-rgRow.group{box-shadow:0 -1px 0 0 #f1f1f1 inset}revo-grid[theme=material] revogr-header .header-rgRow:not(.group){box-shadow:0 -1px 0 0 #f1f1f1, 0 -1px 0 0 #f1f1f1 inset}revo-grid[theme=material] revogr-header .rgHeaderCell.sortable:hover{background-color:#f1f1f1}revo-grid[theme=material] revogr-header .rgHeaderCell.focused-cell{background:rgba(233, 234, 237, 0.5)}revo-grid[theme=material] .footer-wrapper revogr-data{box-shadow:0 -1px 0 #f1f1f1}revo-grid[theme=material] revogr-viewport-scroll.colPinStart{box-shadow:-1px 0 0 #f1f1f1 inset}revo-grid[theme=material] revogr-viewport-scroll.colPinEnd{box-shadow:-1px 0 0 #f1f1f1}revo-grid[theme=material] revogr-data .rgRow{box-shadow:0 -1px 0 0 #f1f1f1 inset}revo-grid[theme=material] revogr-data .rgRow.focused-rgRow{background-color:rgba(233, 234, 237, 0.5)}revo-grid[theme=material] revogr-data .rgCell{color:rgba(0, 0, 0, 0.87)}revo-grid[theme=material] revogr-data .rgCell.disabled{background-color:#f7f7f7}revo-grid[theme=material] revogr-data .revo-draggable>.revo-drag-icon{background-color:#d4d4d4}revo-grid[theme=material] revogr-data .revo-draggable:hover>.revo-drag-icon{background-color:black}revo-grid[theme=darkMaterial]{font-family:Nunito, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";color:#d8d8d8}revo-grid[theme=darkMaterial] revogr-header{line-height:50px;font-weight:600;text-align:left}revo-grid[theme=darkMaterial] revogr-header .rgHeaderCell{padding:0 15px;text-overflow:ellipsis}revo-grid[theme=darkMaterial] revogr-header .header-rgRow{height:50px}revo-grid[theme=darkMaterial] revogr-data{text-align:left}revo-grid[theme=darkMaterial] revogr-data .rgRow{line-height:42px}revo-grid[theme=darkMaterial] revogr-data .rgCell{padding:0 15px}revo-grid[theme=darkMaterial] .viewports{width:100%}revo-grid[theme=darkMaterial] .rowHeaders{background-color:rgba(40, 39, 43, 0.8)}revo-grid[theme=darkMaterial] .rowHeaders revogr-data .rgCell{color:rgba(216, 216, 216, 0.8)}revo-grid[theme=darkMaterial] revogr-header .header-rgRow.group{box-shadow:0 -1px 0 0 #404040 inset}revo-grid[theme=darkMaterial] revogr-header .header-rgRow:not(.group){box-shadow:0 -1px 0 0 #404040, 0 -1px 0 0 #404040 inset}revo-grid[theme=darkMaterial] revogr-header .rgHeaderCell.sortable:hover{background-color:rgba(64, 64, 64, 0.5)}revo-grid[theme=darkMaterial] revogr-header .rgHeaderCell.focused-cell{background:rgba(115, 148, 160, 0.15)}revo-grid[theme=darkMaterial] .footer-wrapper revogr-data{box-shadow:0 -1px 0 #404040}revo-grid[theme=darkMaterial] revogr-data .rgCell{color:rgba(216, 216, 216, 0.9)}revo-grid[theme=darkMaterial] revogr-data .rgRow{box-shadow:0 -1px 0 0 #404040 inset}revo-grid[theme=darkMaterial] revogr-data .rgRow.focused-rgRow{background-color:rgba(115, 148, 160, 0.15)}revo-grid[theme=darkMaterial] revogr-data .revo-draggable>.revo-drag-icon{background-color:rgba(216, 216, 216, 0.5)}revo-grid[theme=darkMaterial] revogr-data .revo-draggable:hover>.revo-drag-icon{background-color:rgba(216, 216, 216, 0.7)}revo-grid[theme=darkMaterial] revogr-viewport-scroll.colPinStart{box-shadow:-1px 0 0 #404040 inset}revo-grid[theme=darkMaterial] revogr-viewport-scroll.colPinEnd{box-shadow:-1px 0 0 #404040}revo-grid[theme=darkCompact]{font-family:Nunito, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";color:#d8d8d8}revo-grid[theme=darkCompact] revogr-header{line-height:45px;font-weight:600;text-align:left}revo-grid[theme=darkCompact] revogr-header .rgHeaderCell{padding:0 15px;text-overflow:ellipsis}revo-grid[theme=darkCompact] revogr-header .header-rgRow{height:45px}revo-grid[theme=darkCompact] revogr-data{text-align:left}revo-grid[theme=darkCompact] revogr-data .rgRow{line-height:32px}revo-grid[theme=darkCompact] revogr-data .rgCell{padding:0 15px}revo-grid[theme=darkCompact] .viewports{width:100%}revo-grid[theme=darkCompact] .rowHeaders{background-color:rgba(40, 39, 43, 0.8)}revo-grid[theme=darkCompact] .rowHeaders revogr-data .rgCell{color:rgba(216, 216, 216, 0.8)}revo-grid[theme=darkCompact] revogr-header .header-rgRow.group{box-shadow:0 -1px 0 0 #404040 inset}revo-grid[theme=darkCompact] revogr-header .header-rgRow:not(.group){box-shadow:0 -1px 0 0 #404040, 0 -1px 0 0 #404040 inset}revo-grid[theme=darkCompact] revogr-header .rgHeaderCell.sortable:hover{background-color:rgba(64, 64, 64, 0.5)}revo-grid[theme=darkCompact] revogr-header .rgHeaderCell.focused-cell{background:rgba(115, 148, 160, 0.15)}revo-grid[theme=darkCompact] .footer-wrapper revogr-data{box-shadow:0 -1px 0 #404040}revo-grid[theme=darkCompact] revogr-data .rgCell{color:rgba(216, 216, 216, 0.9)}revo-grid[theme=darkCompact] revogr-data .rgRow{box-shadow:0 -1px 0 0 #404040 inset}revo-grid[theme=darkCompact] revogr-data .rgRow.focused-rgRow{background-color:rgba(115, 148, 160, 0.15)}revo-grid[theme=darkCompact] revogr-data .revo-draggable>.revo-drag-icon{background-color:rgba(216, 216, 216, 0.5)}revo-grid[theme=darkCompact] revogr-data .revo-draggable:hover>.revo-drag-icon{background-color:rgba(216, 216, 216, 0.7)}revo-grid[theme=darkCompact] revogr-viewport-scroll.colPinStart{box-shadow:-1px 0 0 #404040 inset}revo-grid[theme=darkCompact] revogr-viewport-scroll.colPinEnd{box-shadow:-1px 0 0 #404040}revo-grid[theme=compact]{font-family:Nunito, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}revo-grid[theme=compact] revogr-header{line-height:45px;font-weight:600;text-align:left}revo-grid[theme=compact] revogr-header .rgHeaderCell{padding:0 15px;text-overflow:ellipsis}revo-grid[theme=compact] revogr-header .header-rgRow{height:45px}revo-grid[theme=compact] revogr-data{text-align:left}revo-grid[theme=compact] revogr-data .rgRow{line-height:32px}revo-grid[theme=compact] revogr-data .rgCell{padding:0 15px}revo-grid[theme=compact] .viewports{width:100%}revo-grid[theme=compact] .rowHeaders{background-color:#f7faff}revo-grid[theme=compact] .rowHeaders revogr-data .rgCell{color:#757a82}revo-grid[theme=compact] revogr-header .header-rgRow.group{box-shadow:0 -1px 0 0 #f1f1f1 inset}revo-grid[theme=compact] revogr-header .header-rgRow:not(.group){box-shadow:0 -1px 0 0 #f1f1f1, 0 -1px 0 0 #f1f1f1 inset}revo-grid[theme=compact] revogr-header .rgHeaderCell.sortable:hover{background-color:#f1f1f1}revo-grid[theme=compact] revogr-header .rgHeaderCell.focused-cell{background:rgba(233, 234, 237, 0.5)}revo-grid[theme=compact] .footer-wrapper revogr-data{box-shadow:0 -1px 0 #f1f1f1}revo-grid[theme=compact] revogr-viewport-scroll.colPinStart{box-shadow:-1px 0 0 #f1f1f1 inset}revo-grid[theme=compact] revogr-viewport-scroll.colPinEnd{box-shadow:-1px 0 0 #f1f1f1}revo-grid[theme=compact] revogr-data .rgRow{box-shadow:0 -1px 0 0 #f1f1f1 inset}revo-grid[theme=compact] revogr-data .rgRow.focused-rgRow{background-color:rgba(233, 234, 237, 0.5)}revo-grid[theme=compact] revogr-data .rgCell{color:rgba(0, 0, 0, 0.87)}revo-grid[theme=compact] revogr-data .rgCell.disabled{background-color:#f7f7f7}revo-grid[theme=compact] revogr-data .revo-draggable>.revo-drag-icon{background-color:#d4d4d4}revo-grid[theme=compact] revogr-data .revo-draggable:hover>.revo-drag-icon{background-color:black}revo-grid[theme=compact] revo-dropdown .rv-dr-root{padding:0px 9px}revo-grid{display:block;height:100%;font-family:Helvetica, Arial, Sans-Serif, serif;font-size:14px;position:relative;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column;width:100%;height:100%}revo-grid .footer-wrapper,revo-grid .header-wrapper{width:100%}revo-grid .footer-wrapper revogr-data,revo-grid .header-wrapper revogr-data{z-index:3}revo-grid revo-dropdown{width:100%}revo-grid revo-dropdown .rv-dr-root{max-height:100%}revo-grid revo-dropdown.shrink label{opacity:0}revo-grid .viewports{max-height:100%;display:flex;flex-direction:row;align-items:flex-start;max-width:100%}revo-grid .main-viewport{flex-grow:1;height:0;display:flex;flex-direction:row}revo-grid .draggable{position:fixed;height:30px;line-height:30px;background:#fff;border-radius:3px;display:block;z-index:100;margin-top:5px;margin-right:-20px;box-shadow:0 4px 20px 0 rgba(0, 0, 0, 0.15);padding-left:20px;padding-right:5px}revo-grid .draggable.hidden{display:none}revo-grid .draggable .revo-alt-icon{background-color:black;position:absolute;left:5px;top:10px}revo-grid .draggable-wrapper.hidden{display:none}revo-grid .drag-position{position:absolute;left:0;right:0;height:1px;z-index:2;background:red}revo-grid .clipboard{position:absolute;left:0;top:0}revo-grid revogr-scroll-virtual{position:relative}revo-grid revogr-scroll-virtual.vertical,revo-grid revogr-scroll-virtual.horizontal{z-index:3}"
                            }
                        },
                        Xo = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.copyRegion = ee(this, "copyRegion", 3), this.pasteRegion = ee(this, "pasteRegion", 3)
                            }
                            onPaste(e) {
                                const t = this.getData(e),
                                    r = t.types.indexOf("text/html") > -1,
                                    n = r ? t.getData("text/html") : t.getData("text"),
                                    i = r ? this.htmlParse(n) : this.textParse(n);
                                this.pasteRegion.emit(i), e.preventDefault()
                            }
                            copyStarted(e) {
                                this.copyRegion.emit(this.getData(e)), e.preventDefault()
                            }
                            async doCopy(e, t) {
                                e.setData("text/plain", t ? this.parserCopy(t) : "")
                            }
                            parserCopy(e) {
                                return e.map((e => e.join("\t"))).join("\n")
                            }
                            textParse(e) {
                                const t = [],
                                    r = e.split(/\r\n|\n|\r/);
                                for (let e in r) t.push(r[e].split("\t"));
                                return t
                            }
                            htmlParse(e) {
                                const t = [],
                                    r = document.createRange().createContextualFragment(e).querySelector("table");
                                for (const e of Array.from(r.rows)) t.push(Array.from(e.cells).map((e => e.innerText)));
                                return t
                            }
                            getData(e) {
                                var t;
                                return e.clipboardData || (null === (t = window) || void 0 === t ? void 0 : t.clipboardData)
                            }
                        };
                    class Ko {
                        constructor(e, t) {
                            this.dataStore = e, this.source = t, this.unsubscribe = [], this.hasGrouping = !1, this.unsubscribe.push(t.onChange("source", (e => this.checkGrouping(e)))), this.checkGrouping(t.get("source"))
                        }
                        get columns() {
                            return Bn(this.source)
                        }
                        checkGrouping(e) {
                            for (let t of e) {
                                if (vo(t)) return void(this.hasGrouping = !0);
                                this.hasGrouping = !1
                            }
                        }
                        isReadOnly(e, t) {
                            var r;
                            const n = null === (r = this.columns[t]) || void 0 === r ? void 0 : r.readonly;
                            return "function" == typeof n ? n(this.rowDataModel(e, t)) : n
                        }
                        static doMerge(e, t) {
                            let r = Object.assign(Object.assign({}, t), e);
                            return t.class && ("object" == typeof t.class && "object" == typeof r.class ? r.class = Object.assign(Object.assign({}, t.class), r.class) : "string" == typeof t.class && "object" == typeof r.class ? r.class[t.class] = !0 : "string" == typeof r.class && (r.class += " " + t.class)), t.style && (r.style = Object.assign(Object.assign({}, t.style), r.style)), r
                        }
                        mergeProperties(e, t, r) {
                            var n;
                            const i = {
                                rgCell: !0,
                                disabled: this.isReadOnly(e, t)
                            };
                            let o = Object.assign(Object.assign({}, r), {
                                class: i
                            });
                            const s = null === (n = this.columns[t]) || void 0 === n ? void 0 : n.cellProperties;
                            if (s) {
                                const r = s(this.rowDataModel(e, t));
                                return r ? Ko.doMerge(o, r) : o
                            }
                            return o
                        }
                        customRenderer(e, t, r) {
                            var n;
                            const i = null === (n = this.columns[t]) || void 0 === n ? void 0 : n.cellTemplate;
                            if (i) return i(z, r)
                        }
                        getRowClass(e, t) {
                            return (Un(this.dataStore, e) || {})[t] || ""
                        }
                        getCellData(e, t) {
                            const r = this.rowDataModel(e, t);
                            return Ko.getData(r.model[r.prop])
                        }
                        getSaveData(e, t, r) {
                            void 0 === r && (r = this.getCellData(e, t));
                            const n = this.rowDataModel(e, t);
                            return {
                                prop: n.prop,
                                rowIndex: e,
                                val: r,
                                model: n.model,
                                type: this.dataStore.get("type")
                            }
                        }
                        getCellEditor(e, t, r) {
                            var n;
                            const i = null === (n = this.columns[t]) || void 0 === n ? void 0 : n.editor;
                            if (i) return "string" == typeof i ? r[i] : i
                        }
                        rowDataModel(e, t) {
                            const r = this.columns[t];
                            return {
                                prop: null == r ? void 0 : r.prop,
                                model: Un(this.dataStore, e) || {},
                                data: this.dataStore.get("source"),
                                column: r,
                                rowIndex: e
                            }
                        }
                        getRangeData(e) {
                            const t = {},
                                r = e.oldProps.length,
                                n = this.copyRangeArray(e.oldRange, e.oldProps, this.dataStore),
                                i = n.length;
                            for (let o = e.newRange.y, s = 0; o < e.newRange.y1 + 1; o++, s++) {
                                const a = n[s % i];
                                for (let n = e.newRange.x, i = 0; n < e.newRange.x1 + 1; n++, i++) {
                                    if (o >= e.oldRange.y && o <= e.oldRange.y1 && n >= e.oldRange.x && n <= e.oldRange.x1) continue;
                                    const s = this.columns[n].prop,
                                        l = i % r;
                                    this.isReadOnly(o, n) || (t[o] || (t[o] = {}), t[o][s] = a[l])
                                }
                            }
                            return t
                        }
                        getTransformedDataToApply(e, t) {
                            const r = {},
                                n = t.length,
                                i = this.columns.length,
                                o = this.dataStore.get("items").length;
                            let s = e.y,
                                a = 0;
                            for (let l = 0; s < o && l < n; s++, l++) {
                                const o = t[l % n],
                                    c = (null == o ? void 0 : o.length) || 0;
                                let u = e.x;
                                for (let e = 0; u < i && e < c; u++, e++) {
                                    const t = this.columns[u].prop,
                                        n = e % i;
                                    this.isReadOnly(s, u) || (r[s] || (r[s] = {}), r[s][t] = o[n])
                                }
                                a = Math.max(a, u - 1)
                            }
                            return {
                                changed: r,
                                range: Po(e, {
                                    y: s - 1,
                                    x: a
                                })
                            }
                        }
                        applyRangeData(e) {
                            const t = {};
                            for (let r in e) {
                                const n = t[r] = Un(this.dataStore, parseInt(r, 10));
                                for (let t in e[r]) n[t] = e[r][t]
                            }
                            Wn(this.dataStore, t)
                        }
                        getRangeStaticData(e, t) {
                            const r = {};
                            for (let n = e.y, i = 0; n < e.y1 + 1; n++, i++)
                                for (let i = e.x, o = 0; i < e.x1 + 1; i++, o++) {
                                    const e = this.columns[i].prop;
                                    this.isReadOnly(n, i) || (r[n] || (r[n] = {}), r[n][e] = t)
                                }
                            return r
                        }
                        copyRangeArray(e, t, r) {
                            const n = [];
                            for (let i = e.y; i < e.y1 + 1; i++) {
                                const e = [];
                                for (let n of t) {
                                    const t = Un(r, i);
                                    e.push(t[n])
                                }
                                n.push(e)
                            }
                            return n
                        }
                        static getData(e) {
                            return null == e ? "" : e.toString()
                        }
                        destroy() {
                            this.unsubscribe.forEach((e => e()))
                        }
                    }
                    const Yo = ({
                            model: e,
                            canDrag: t,
                            onDragStart: r
                        }) => {
                            const n = [];
                            return e.column.rowDrag && function(e, t) {
                                return "function" == typeof e ? e(t) : !!e
                            }(e.column.rowDrag, e) && (t ? n.push(z("span", {
                                class: so,
                                onMouseDown: e => r(e)
                            }, z("span", {
                                class: "revo-drag-icon"
                            }))) : n.push(z("span", {
                                class: so
                            }))), n.push(`${Ko.getData(e.model[e.prop])}`), n
                        },
                        Jo = ({
                            rowClass: e,
                            size: t,
                            start: r,
                            style: n,
                            depth: i
                        }, o) => z("div", {
                            class: `rgRow ${e||""}`,
                            style: Object.assign(Object.assign({}, n), {
                                height: `${t}px`,
                                transform: `translateY(${r}px)`,
                                paddingLeft: i ? 10 * i + "px" : void 0
                            })
                        }, o),
                        Qo = e => {
                            const {
                                model: t,
                                itemIndex: r,
                                hasExpand: n
                            } = e, i = t["__rvgr-name"], o = t[uo], s = parseInt(t[co], 10) || 0;
                            return n ? z(Jo, Object.assign({}, e, {
                                rowClass: "groupingRow",
                                depth: s
                            }), z("button", {
                                class: {
                                    "group-expand": !0
                                },
                                onClick: e => function(e, t, r) {
                                    const n = new CustomEvent(ho, {
                                        detail: {
                                            model: t,
                                            virtualIndex: r
                                        },
                                        cancelable: !0,
                                        bubbles: !0
                                    });
                                    e.target.dispatchEvent(n)
                                }(e, t, r)
                            }, z("svg", {
                                "aria-hidden": "true",
                                style: {
                                    transform: `rotate(${o?0:-90}deg)`
                                },
                                focusable: "false",
                                viewBox: "0 0 448 512"
                            }, z("path", {
                                fill: "currentColor",
                                d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                            }))), i) : z(Jo, Object.assign({}, e, {
                                rowClass: "groupingRow",
                                depth: s
                            }))
                        },
                        es = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.dragStartCell = ee(this, "dragStartCell", 7)
                            }
                            onStoreChange() {
                                var e;
                                null === (e = this.columnService) || void 0 === e || e.destroy(), this.columnService = new Ko(this.dataStore, this.colData)
                            }
                            connectedCallback() {
                                this.onStoreChange()
                            }
                            disconnectedCallback() {
                                var e;
                                null === (e = this.columnService) || void 0 === e || e.destroy()
                            }
                            render() {
                                var e;
                                const t = this.viewportRow.get("items"),
                                    r = this.viewportCol.get("items");
                                if (!this.columnService.columns.length || !t.length || !r.length) return "";
                                const n = null === (e = this.rowSelectionStore) || void 0 === e ? void 0 : e.get("range"),
                                    i = [],
                                    o = this.dataStore.get("groupingDepth");
                                for (let e of t) {
                                    const t = Un(this.dataStore, e.itemIndex);
                                    if (po(t)) {
                                        i.push(z(Qo, Object.assign({}, e, {
                                            model: t,
                                            hasExpand: this.columnService.hasGrouping
                                        })));
                                        continue
                                    }
                                    const s = [];
                                    let a = this.rowClass ? this.columnService.getRowClass(e.itemIndex, this.rowClass) : "";
                                    n && e.itemIndex >= n.y && e.itemIndex <= n.y1 && (a += " focused-rgRow");
                                    for (let t of r) s.push(this.getCellRenderer(e, t, this.canDrag, this.columnService.hasGrouping ? o : 0));
                                    i.push(z(Jo, {
                                        rowClass: a,
                                        size: e.size,
                                        start: e.start
                                    }, s))
                                }
                                return i
                            }
                            getCellRenderer(e, t, r = !1, n = 0) {
                                const i = this.columnService.rowDataModel(e.itemIndex, t.itemIndex),
                                    o = {
                                        [no]: t.itemIndex,
                                        "data-rgRow": e.itemIndex,
                                        style: {
                                            width: `${t.size}px`,
                                            transform: `translateX(${t.start}px)`
                                        }
                                    };
                                n && !t.itemIndex && (o.style.paddingLeft = 10 * n + "px");
                                const s = this.columnService.mergeProperties(e.itemIndex, t.itemIndex, o),
                                    a = this.columnService.customRenderer(e.itemIndex, t.itemIndex, i);
                                return void 0 !== a ? z("div", Object.assign({}, s), a) : i.column ? z("div", Object.assign({}, s), z(Yo, {
                                    model: i,
                                    canDrag: r,
                                    onDragStart: e => this.dragStartCell.emit(e)
                                })) : void console.error("Investigate column problem")
                            }
                            get element() {
                                return this
                            }
                            static get watchers() {
                                return {
                                    dataStore: ["onStoreChange"],
                                    colData: ["onStoreChange"]
                                }
                            }
                            static get style() {
                                return ".revo-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.revo-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.revo-button.green{background-color:#2ee072;border:1px solid #20d565}.revo-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}revogr-data{display:block;width:100%;position:relative}revogr-data .rgRow{position:absolute;width:100%;left:0}revogr-data .rgRow.groupingRow{font-weight:600}revogr-data .rgRow.groupingRow .group-expand{width:25px;height:100%;max-height:25px;margin-right:2px;background-color:transparent;border-color:transparent}revogr-data .rgRow.groupingRow .group-expand svg{width:7px}revogr-data .revo-draggable{border:none;height:32px;display:inline-flex;outline:0;padding:0;font-size:0.8125rem;box-sizing:border-box;align-items:center;white-space:nowrap;vertical-align:middle;justify-content:center;text-decoration:none;width:24px;height:100%;cursor:pointer}revogr-data .revo-draggable>.revo-drag-icon{vertical-align:middle;display:inline-block;pointer-events:none;transition:background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms}revogr-data .rgCell{top:0;position:absolute;box-sizing:border-box;height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}revogr-data .rgCell.align-center{text-align:center}revogr-data .rgCell.align-left{text-align:left}revogr-data .rgCell.align-right{text-align:right}"
                            }
                        };
                    var ts, rs;
                    ! function(e) {
                        e[e.MOUSE_LEFT = 1] = "MOUSE_LEFT", e[e.MOUSE_RIGHT = 3] = "MOUSE_RIGHT", e[e.MOUSE_MIDDLE = 2] = "MOUSE_MIDDLE", e[e.BACKSPACE = 8] = "BACKSPACE", e[e.COMMA = 188] = "COMMA", e[e.INSERT = 45] = "INSERT", e[e.DELETE = 46] = "DELETE", e[e.END = 35] = "END", e[e.ENTER = 13] = "ENTER", e[e.ESCAPE = 27] = "ESCAPE", e[e.CONTROL = 17] = "CONTROL", e[e.COMMAND_LEFT = 91] = "COMMAND_LEFT", e[e.COMMAND_RIGHT = 93] = "COMMAND_RIGHT", e[e.COMMAND_FIREFOX = 224] = "COMMAND_FIREFOX", e[e.ALT = 18] = "ALT", e[e.HOME = 36] = "HOME", e[e.PAGE_DOWN = 34] = "PAGE_DOWN", e[e.PAGE_UP = 33] = "PAGE_UP", e[e.PERIOD = 190] = "PERIOD", e[e.SPACE = 32] = "SPACE", e[e.SHIFT = 16] = "SHIFT", e[e.CAPS_LOCK = 20] = "CAPS_LOCK", e[e.TAB = 9] = "TAB", e[e.ARROW_RIGHT = 39] = "ARROW_RIGHT", e[e.ARROW_LEFT = 37] = "ARROW_LEFT", e[e.ARROW_UP = 38] = "ARROW_UP", e[e.ARROW_DOWN = 40] = "ARROW_DOWN", e[e.F1 = 112] = "F1", e[e.F2 = 113] = "F2", e[e.F3 = 114] = "F3", e[e.F4 = 115] = "F4", e[e.F5 = 116] = "F5", e[e.F6 = 117] = "F6", e[e.F7 = 118] = "F7", e[e.F8 = 119] = "F8", e[e.F9 = 120] = "F9", e[e.F10 = 121] = "F10", e[e.F11 = 122] = "F11", e[e.F12 = 123] = "F12", e[e.A = 65] = "A", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.F = 70] = "F", e[e.L = 76] = "L", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.S = 83] = "S", e[e.V = 86] = "V", e[e.X = 88] = "X"
                    }(ts || (ts = {})),
                    function(e) {
                        e.ENTER = "Enter", e.ENTER_NUM = "NumpadEnter", e.V = "KeyV", e.C = "KeyC", e.ESCAPE = "Escape", e.TAB = "Tab", e.BACKSPACE = "Backspace", e.DELETE = "Delete", e.ARROW_RIGHT = "ArrowRight", e.ARROW_LEFT = "ArrowLeft", e.ARROW_UP = "ArrowUp", e.ARROW_DOWN = "ArrowDown", e.SHIFT = "Shift"
                    }(rs || (rs = {}));
                    const ns = ts;
                    var is;
                    ! function(e) {
                        e.mac = "Mac"
                    }(is || (is = {}));
                    const os = is;
                    var ss = function(e) {
                            return e != e
                        },
                        as = function(e) {
                            return null == e ? [] : function(e, t) {
                                return Qr(t, (function(t) {
                                    return e[t]
                                }))
                            }(e, Et(e))
                        },
                        ls = Math.max,
                        cs = function(e, t, r, n) {
                            e = _t(e) ? e : as(e), r = r && !n ? zn(r) : 0;
                            var i = e.length;
                            return r < 0 && (r = ls(i + r, 0)), Ni(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && function(e, t, r) {
                                return t == t ? function(e, t, r) {
                                    for (var n = r - 1, i = e.length; ++n < i;)
                                        if (e[n] === t) return n;
                                    return -1
                                }(e, t, r) : wn(e, ss, r)
                            }(e, t, r) > -1
                        };

                    function us(e, t) {
                        return t.includes(os.mac) ? cs([ns.COMMAND_LEFT, ns.COMMAND_RIGHT, ns.COMMAND_FIREFOX], e) : ns.CONTROL === e
                    }

                    function hs(e) {
                        return e === rs.ENTER || e === rs.ENTER_NUM
                    }
                    class ds {
                        constructor(e, t) {
                            this.column = e, this.saveCallback = t, this.element = null, this.editCell = null
                        }
                        async componentDidRender() {
                            var e;
                            this.editInput && (await li(), null === (e = this.editInput) || void 0 === e || e.focus())
                        }
                        onKeyDown(e) {
                            const t = hs(e.code),
                                r = (n = e.code, rs.TAB === n);
                            var n;
                            (r || t) && e.target && this.saveCallback && (this.editInput.blur(), this.saveCallback(e.target.value, r))
                        }
                        render() {
                            var e;
                            return z("input", {
                                type: "text",
                                value: (null === (e = this.editCell) || void 0 === e ? void 0 : e.val) || "",
                                ref: e => {
                                    this.editInput = e
                                },
                                onKeyDown: e => this.onKeyDown(e)
                            })
                        }
                    }
                    const gs = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.cellEdit = ee(this, "cellEdit", 3), this.closeEdit = ee(this, "closeEdit", 3), this.currentEditor = null
                            }
                            onSave(e, t) {
                                this.editCell && this.cellEdit.emit({
                                    rgCol: this.editCell.x,
                                    rgRow: this.editCell.y,
                                    val: e,
                                    preventFocus: t
                                })
                            }
                            componentWillRender() {
                                this.currentEditor || (this.editor ? this.currentEditor = new this.editor(this.column, ((e, t) => this.onSave(e, t)), (e => this.closeEdit.emit(e))) : this.currentEditor = new ds(this.column, ((e, t) => this.onSave(e, t))))
                            }
                            componentDidRender() {
                                this.currentEditor && (this.currentEditor.element = this.element.firstElementChild, this.currentEditor.componentDidRender && this.currentEditor.componentDidRender())
                            }
                            disconnectedCallback() {
                                this.currentEditor && (this.currentEditor.disconnectedCallback && this.currentEditor.disconnectedCallback(), this.currentEditor.element && (this.currentEditor.element = null), this.currentEditor = null)
                            }
                            render() {
                                return this.currentEditor ? (this.currentEditor.editCell = this.editCell, z(O, {
                                    class: lo
                                }, this.currentEditor.render(z))) : ""
                            }
                            get element() {
                                return this
                            }
                            static get style() {
                                return ".revo-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.revo-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.revo-button.green{background-color:#2ee072;border:1px solid #20d565}.revo-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}revogr-edit{display:block;position:absolute;background-color:#fff}revogr-edit input{height:100%;width:100%;box-sizing:border-box}revogr-edit revo-dropdown{height:100%}revogr-edit revo-dropdown.shrink fieldset legend>span{display:none}"
                            }
                        },
                        fs = (e, t) => z("button", Object.assign({}, e, {
                            class: Object.assign(Object.assign({}, "object" == typeof e.class ? e.class : e.class ? {
                                [e.class]: !0
                            } : ""), {
                                "revo-button": !0
                            })
                        }), t);
                    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
                        let t = this;
                        do {
                            if (Element.prototype.matches.call(t, e)) return t;
                            t = t.parentElement || t.parentNode
                        } while (null !== t && 1 === t.nodeType);
                        return null
                    });
                    const ps = "none",
                        vs = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.filterChange = ee(this, "filterChange", 7), this.filterTypes = {}, this.filterNames = {}, this.filterEntities = {}
                            }
                            onMouseDown(e) {
                                if (this.changes && !e.defaultPrevented) {
                                    const t = e.target;
                                    this.isOutside(t) && !_i(t) && (this.changes = void 0)
                                }
                            }
                            async show(e) {
                                this.changes = e, this.changes && (this.changes.type = this.changes.type || ps)
                            }
                            async getChanges() {
                                return this.changes
                            }
                            renderConditions(e) {
                                const t = [];
                                for (let r in this.filterTypes) t.push(z("option", {
                                    value: ps
                                }, this.filterNames.none)), t.push(...this.filterTypes[r].map((t => z("option", {
                                    value: t,
                                    selected: e === t
                                }, this.filterNames[t])))), t.push(z("option", {
                                    disabled: !0
                                }));
                                return t
                            }
                            renderExtra(e, t) {
                                switch (this.extraElement = void 0, e) {
                                    case "input":
                                        return z("input", {
                                            type: "text",
                                            value: t,
                                            onInput: e => this.changes.value = e.target.value,
                                            onKeyDown: e => this.onKeyDown(e),
                                            ref: e => this.extraElement = e
                                        });
                                    default:
                                        return ""
                                }
                            }
                            render() {
                                if (!this.changes || !this.changes) return z(O, {
                                    style: {
                                        display: "none"
                                    }
                                });
                                const e = {
                                    display: "block",
                                    left: `${this.changes.x}px`,
                                    top: `${this.changes.y}px`
                                };
                                return z(O, {
                                    style: e
                                }, z("label", null, "Filter by condition"), z("select", {
                                    class: "select-css",
                                    onChange: e => this.onFilterChange(e)
                                }, this.renderConditions(this.changes.type)), z("div", null, this.renderExtra(this.filterEntities[this.changes.type].extra, this.changes.value)), z(fs, {
                                    class: {
                                        green: !0
                                    },
                                    onClick: () => this.onSave()
                                }, "Save"), z(fs, {
                                    class: {
                                        light: !0
                                    },
                                    onClick: () => this.onCancel()
                                }, "Cancel"))
                            }
                            onFilterChange(e) {
                                if (!this.changes) throw new Error("Changes required per edit");
                                const t = e.target.value;
                                this.changes = Object.assign(Object.assign({}, this.changes), {
                                    type: t
                                })
                            }
                            onKeyDown(e) {
                                "enter" === e.key.toLowerCase() && this.onSave()
                            }
                            onCancel() {
                                this.changes = void 0
                            }
                            onSave() {
                                var e, t;
                                if (!this.changes) throw new Error("Changes required per edit");
                                this.filterChange.emit({
                                    prop: this.changes.prop,
                                    type: this.changes.type,
                                    value: null === (t = null === (e = this.extraElement) || void 0 === e ? void 0 : e.value) || void 0 === t ? void 0 : t.trim()
                                }), this.changes = void 0
                            }
                            isOutside(e) {
                                return !e.classList.contains(`[uuid="${this.uuid}"]`) && !(null == e ? void 0 : e.closest(`[uuid="${this.uuid}"]`))
                            }
                            static get style() {
                                return ".revo-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.revo-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.revo-button.green{background-color:#2ee072;border:1px solid #20d565}.revo-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}revogr-filter-panel{position:absolute;display:block;top:0;left:0;z-index:100;opacity:1;transform:none;background-color:#fff;transform-origin:62px 0px;box-shadow:0 5px 18px -2px rgba(0, 0, 0, 0.2);padding:10px;border-radius:4px;min-width:150px;text-align:left}revogr-filter-panel label{color:gray;font-size:13px;font-weight:600;display:block;padding:8px 0}revogr-filter-panel select{width:100%}revogr-filter-panel input[type=text]{border:0;min-height:34px;margin:5px 0;background:#f3f3f3;border-radius:5px;padding:0 10px;box-sizing:border-box}revogr-filter-panel button{margin-top:10px;margin-right:5px}.rgHeaderCell:hover .rv-filter{transition:opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms}.rgHeaderCell:hover .rv-filter,.rgHeaderCell .rv-filter.active{opacity:1}.rgHeaderCell .rv-filter{height:24px;width:24px;background:none;border:0;opacity:0;visibility:visible;cursor:pointer;border-radius:4px}.rgHeaderCell .rv-filter.active{color:#10224a}.rgHeaderCell .rv-filter .filter-img{color:gray;width:11px}.select-css{display:block;font-family:sans-serif;font-weight:600;color:#444;line-height:1.3;padding:0.6em 1.4em 0.5em 0.8em;width:100%;max-width:100%;box-sizing:border-box;margin:0;border:1px solid #f1f1f1;box-shadow:transparent;border-radius:0.5em;appearance:none;background-color:#fff;background-image:url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(to bottom, #ffffff 0%, #ffffff 100%);background-repeat:no-repeat, repeat;background-position:right 0.7em top 50%, 0 0;background-size:0.65em auto, 100%;}.select-css::-ms-expand{display:none}.select-css:hover{border-color:#c5c5c5}.select-css:focus{border-color:#f1f1f1;box-shadow:0 0 1px 3px rgba(59, 153, 252, 0.7);box-shadow:0 0 0 3px -moz-mac-focusring;color:#222;outline:none}.select-css option{font-weight:normal}.select-css:disabled,.select-css[aria-disabled=true]{color:gray;background-image:url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)}.select-css:disabled:hover,.select-css[aria-disabled=true]{border-color:#f1f1f1}"
                            }
                        };

                    function ms({
                        x: e,
                        y: t
                    }, {
                        el: r,
                        rows: n,
                        cols: i
                    }) {
                        const {
                            top: o,
                            left: s,
                            height: a,
                            width: l
                        } = r.getBoundingClientRect();
                        let c = t - o;
                        c >= a && (c = a - 1);
                        let u = e - s;
                        u >= l && (u = l - 1);
                        const h = ci(n, c),
                            d = ci(i, u);
                        return d.itemIndex < 0 && (d.itemIndex = 0), h.itemIndex < 0 && (h.itemIndex = 0), {
                            x: d.itemIndex,
                            y: h.itemIndex
                        }
                    }

                    function Cs({
                        x: e,
                        y: t
                    }, {
                        lastCell: r
                    }) {
                        return e >= r.x || t >= r.y
                    }

                    function ws({
                        x: e,
                        y: t,
                        x1: r,
                        y1: n
                    }, i, o) {
                        const s = ui(i, t).start,
                            a = ui(o, e).start,
                            l = ui(i, n).end,
                            c = ui(o, r).end;
                        return {
                            left: a,
                            right: c,
                            top: s,
                            bottom: l,
                            width: c - a,
                            height: l - s
                        }
                    }

                    function bs(e, t, r) {
                        return function(e) {
                            return {
                                left: `${e.left}px`,
                                top: `${e.top}px`,
                                width: `${e.width}px`,
                                height: `${e.height}px`
                            }
                        }(ws(e, t, r))
                    }
                    const Ls = class extends HTMLElement {
                        constructor() {
                            super(), this.__registerHost()
                        }
                        changed(e) {
                            null == e || e.scrollIntoView({
                                block: "nearest",
                                inline: "nearest"
                            })
                        }
                        componentDidRender() {
                            this.el && this.changed(this.el)
                        }
                        render() {
                            const e = this.selectionStore.get("focus");
                            if (e) {
                                const t = bs(Object.assign(Object.assign({}, e), {
                                    x1: e.x,
                                    y1: e.y
                                }), this.dimensionRow.state, this.dimensionCol.state);
                                return z(O, {
                                    class: ao,
                                    style: t
                                })
                            }
                        }
                        get el() {
                            return this
                        }
                        static get style() {
                            return ".revo-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.revo-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.revo-button.green{background-color:#2ee072;border:1px solid #20d565}.revo-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}revogr-focus.focused-cell{box-shadow:-1px 0 0 #0d63e8 inset, 1px 0 0 #0d63e8 inset, 0 -1px 0 #0d63e8 inset, 0 1px 0 #0d63e8 inset;position:absolute;pointer-events:none;z-index:9;display:block}"
                        }
                    };
                    var xs, ys = function() {
                            try {
                                var e = Vt(Object, "defineProperty");
                                return e({}, "", {}), e
                            } catch (e) {}
                        }(),
                        Ss = function(e, t, r, n) {
                            for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) {
                                var s = e[i];
                                t(n, s, r(s), e)
                            }
                            return n
                        },
                        _s = function(e, t, r, n) {
                            return kt(e, (function(e, i, o) {
                                t(n, e, r(e), o)
                            })), n
                        },
                        Es = (xs = function(e, t, r) {
                            ! function(e, t, r) {
                                "__proto__" == t && ys ? ys(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : e[t] = r
                            }(e, r, t)
                        }, function(e, t) {
                            var r = {};
                            return (st(e) ? Ss : _s)(e, xs, fn(t), r)
                        });
                    const ks = ({
                        column: e
                    }) => z("i", {
                        class: e.order
                    });
                    var Rs;
                    ! function(e) {
                        e.start = "resize:start", e.move = "resize:move", e.end = "resize:end"
                    }(Rs || (Rs = {}));
                    const zs = {
                        "resizable-r": {
                            bit: 1,
                            cursor: "ew-resize"
                        },
                        "resizable-rb": {
                            bit: 3,
                            cursor: "se-resize"
                        },
                        "resizable-b": {
                            bit: 2,
                            cursor: "s-resize"
                        },
                        "resizable-lb": {
                            bit: 6,
                            cursor: "sw-resize"
                        },
                        "resizable-l": {
                            bit: 4,
                            cursor: "w-resize"
                        },
                        "resizable-lt": {
                            bit: 12,
                            cursor: "nw-resize"
                        },
                        "resizable-t": {
                            bit: 8,
                            cursor: "n-resize"
                        },
                        "resizable-rt": {
                            bit: 9,
                            cursor: "ne-resize"
                        }
                    };
                    class $s {
                        constructor(e, t) {
                            var r;
                            this.initialProps = e, this.$event = t, this.mouseX = 0, this.mouseY = 0, this.width = 0, this.height = 0, this.changeX = 0, this.changeY = 0, this.disableCalcMap = 15, this.props = (r = e, Object.assign(Object.assign({}, r), {
                                fitParent: r.fitParent || !1,
                                active: r.active || [],
                                disableAttributes: r.disableAttributes || [],
                                minWidth: r.minWidth || 0,
                                minHeight: r.minHeight || 0
                            })), this.mouseMoveFunc = this.handleMove.bind(this), this.mouseUpFunc = this.handleUp.bind(this), this.minW = this.props.minWidth, this.minH = this.props.minHeight, this.maxW = this.props.maxWidth, this.maxH = this.props.maxHeight, this.parent = {
                                width: 0,
                                height: 0
                            }, this.resizeState = 0
                        }
                        set(e) {
                            this.$el = e, this.props.disableAttributes.forEach((e => {
                                switch (e) {
                                    case "l":
                                        this.disableCalcMap &= -2;
                                        break;
                                    case "t":
                                        this.disableCalcMap &= -3;
                                        break;
                                    case "w":
                                        this.disableCalcMap &= -5;
                                        break;
                                    case "h":
                                        this.disableCalcMap &= -9
                                }
                            }))
                        }
                        emitEvent(e, t) {
                            this.$event && this.$event(Object.assign({
                                eventName: e,
                                width: this.width + this.changeX,
                                height: this.height + this.changeY,
                                changedX: this.changeX,
                                changedY: this.changeY
                            }, t))
                        }
                        static isTouchEvent(e) {
                            var t;
                            return (null === (t = e.touches) || void 0 === t ? void 0 : t.length) >= 0
                        }
                        handleMove(e) {
                            if (!this.resizeState) return;
                            let t, r;
                            $s.isTouchEvent(e) ? (t = e.touches[0].clientY, r = e.touches[0].clientX) : (t = e.clientY, r = e.clientX);
                            let n = this.resizeState & zs["resizable-r"].bit || this.resizeState & zs["resizable-l"].bit;
                            if ((this.resizeState & zs["resizable-t"].bit || this.resizeState & zs["resizable-b"].bit) && 8 & this.disableCalcMap) {
                                let e = t - this.mouseY,
                                    r = this.changeY + e;
                                const n = this.height + r;
                                n < this.minH && (r = -(this.height - this.minH)), this.maxH && n > this.maxH && (r = this.maxH - this.height), this.changeY = r, this.mouseY = t, this.activeResizer && (this.activeResizer.style.bottom = -this.changeY + "px")
                            }
                            if (n && 4 & this.disableCalcMap) {
                                let e = r - this.mouseX,
                                    t = this.changeX + e;
                                const n = this.width + t;
                                n < this.minW && (t = -(this.width - this.minW)), this.maxW && n > this.maxW && (t = this.maxW - this.width), this.changeX = t, this.mouseX = r, this.activeResizer && (this.activeResizer.style.right = -this.changeX + "px")
                            }
                            this.emitEvent(Rs.move)
                        }
                        handleDown(e) {
                            if (!e.defaultPrevented) {
                                this.dropInitial();
                                for (let t in zs) {
                                    const r = e.target;
                                    if (this.$el.contains(r) && (null == r ? void 0 : r.classList.contains(t))) {
                                        document.body.style.cursor = zs[t].cursor, $s.isTouchEvent(e) ? this.setInitials(e.touches[0], r) : (e.preventDefault && e.preventDefault(), this.setInitials(e, r)), this.resizeState = zs[t].bit;
                                        const n = Rs.start;
                                        this.emitEvent(n);
                                        break
                                    }
                                }
                                this.bindMove()
                            }
                        }
                        handleUp(e) {
                            if (e.preventDefault(), 0 !== this.resizeState) {
                                this.resizeState = 0, document.body.style.cursor = "";
                                const e = Rs.end;
                                this.emitEvent(e)
                            }
                            this.dropInitial(), this.unbindMove()
                        }
                        setInitials({
                            clientX: e,
                            clientY: t
                        }, r) {
                            const n = getComputedStyle(this.$el);
                            if (this.$el.classList.add("active"), this.activeResizer = r, 4 & this.disableCalcMap) {
                                this.mouseX = e, this.width = this.$el.clientWidth, this.parent.width = this.$el.parentElement.clientWidth;
                                const t = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight);
                                this.minW = Math.max(t, this.initialProps.minWidth || 0), this.initialProps.maxWidth && (this.maxW = Math.max(this.width, this.initialProps.maxWidth))
                            }
                            if (8 & this.disableCalcMap) {
                                this.mouseY = t, this.height = this.$el.clientHeight, this.parent.height = this.$el.parentElement.clientHeight;
                                const e = parseFloat(n.paddingTop) + parseFloat(n.paddingBottom);
                                this.minH = Math.max(e, this.initialProps.minHeight || 0), this.initialProps.maxHeight && (this.maxH = Math.max(this.height, this.initialProps.maxHeight))
                            }
                        }
                        dropInitial() {
                            this.changeX = this.changeY = this.minW = this.minH, this.width = this.height = 0, this.activeResizer && this.activeResizer.removeAttribute("style"), this.$el.classList.remove("active"), this.activeResizer = null
                        }
                        bindMove() {
                            document.documentElement.addEventListener("mouseup", this.mouseUpFunc, !0), document.documentElement.addEventListener("touchend", this.mouseUpFunc, !0), document.documentElement.addEventListener("mousemove", this.mouseMoveFunc, !0), document.documentElement.addEventListener("touchmove", this.mouseMoveFunc, !0), document.documentElement.addEventListener("mouseleave", this.mouseUpFunc)
                        }
                        unbindMove() {
                            document.documentElement.removeEventListener("mouseup", this.mouseUpFunc, !0), document.documentElement.removeEventListener("touchend", this.mouseUpFunc, !0), document.documentElement.removeEventListener("mousemove", this.mouseMoveFunc, !0), document.documentElement.removeEventListener("touchmove", this.mouseMoveFunc, !0), document.documentElement.removeEventListener("mouseleave", this.mouseUpFunc)
                        }
                    }
                    const Os = (e, t) => {
                            const r = [],
                                n = e.canResize && new $s(e, (t => {
                                    t.eventName === Rs.end && e.onResize && e.onResize(t)
                                })) || null;
                            if (e.canResize) {
                                if (e.active)
                                    for (let t in e.active) r.push(z("div", {
                                        onClick: e => e.preventDefault(),
                                        onDblClick: t => {
                                            t.preventDefault(), e.onDoubleClick && e.onDoubleClick()
                                        },
                                        onMouseDown: e => null == n ? void 0 : n.handleDown(e),
                                        onTouchStart: e => null == n ? void 0 : n.handleDown(e),
                                        class: `resizable resizable-${e.active[t]}`
                                    }))
                            } else if (e.active)
                                for (let t in e.active) r.push(z("div", {
                                    onClick: e => e.preventDefault(),
                                    onDblClick: t => {
                                        t.preventDefault(), e.onDoubleClick && e.onDoubleClick()
                                    },
                                    class: `no-resize resizable resizable-${e.active[t]}`
                                }));
                            return z("div", Object.assign({}, e, {
                                ref: e => null == n ? void 0 : n.set(e)
                            }), t, r)
                        },
                        Fs = ({
                            data: e,
                            props: t
                        }, r) => {
                            let n = (null == e ? void 0 : e.name) || "",
                                i = t;
                            if ((null == e ? void 0 : e.columnTemplate) && (n = e.columnTemplate(z, e)), null == e ? void 0 : e.columnProperties) {
                                const r = e.columnProperties(e);
                                r && "object" == typeof r && (i = Ko.doMerge(t, r))
                            }
                            return z(Os, Object.assign({}, i), z("div", {
                                class: "header-content"
                            }, n), r)
                        },
                        js = e => {
                            var t, r, n, i, o, s;
                            const a = {
                                [oo]: !0,
                                sortable: !!(null === (t = e.data) || void 0 === t ? void 0 : t.sortable)
                            };
                            (null === (r = e.data) || void 0 === r ? void 0 : r.order) && (a[e.data.order] = !0);
                            const l = {
                                [no]: e.column.itemIndex,
                                canResize: e.canResize,
                                minWidth: (null === (n = e.data) || void 0 === n ? void 0 : n.minSize) || 30,
                                maxWidth: null === (i = e.data) || void 0 === i ? void 0 : i.maxSize,
                                active: ["r"],
                                class: a,
                                style: {
                                    width: `${e.column.size}px`,
                                    transform: `translateX(${e.column.start}px)`
                                },
                                onResize: e.onResize,
                                onDoubleClick(t) {
                                    e.onDoubleClick({
                                        column: e.data,
                                        index: e.column.itemIndex,
                                        originalEvent: t
                                    })
                                },
                                onClick(t) {
                                    !t.defaultPrevented && e.onClick && e.onClick({
                                        column: e.data,
                                        index: e.column.itemIndex,
                                        originalEvent: t
                                    })
                                }
                            };
                            return e.range && e.column.itemIndex >= e.range.x && e.column.itemIndex <= e.range.x1 && "object" == typeof l.class && (l.class[ao] = !0), z(Fs, {
                                data: e.data,
                                props: l
                            }, (null === (o = e.data) || void 0 === o ? void 0 : o.order) ? z(ks, {
                                column: e.data
                            }) : "", e.canFilter && !1 !== (null === (s = e.data) || void 0 === s ? void 0 : s.filter) ? z(Si, {
                                column: e.data
                            }) : "")
                        },
                        Ts = e => {
                            const t = {
                                canResize: e.canResize,
                                minWidth: 30 * e.group.ids.length,
                                maxWidth: 0,
                                active: ["r"],
                                class: {
                                    [oo]: !0
                                },
                                style: {
                                    transform: `translateX(${e.start}px)`,
                                    width: e.end - e.start + "px"
                                },
                                onResize: e.onResize
                            };
                            return z(Fs, {
                                data: e.group,
                                props: t
                            })
                        },
                        Ps = ({
                            depth: e,
                            groups: t,
                            visibleProps: r,
                            dimensionCol: n,
                            canResize: i,
                            onResize: o
                        }) => {
                            const s = [];
                            for (let a = 0; a < e; a++) {
                                if (t[a])
                                    for (let e of t[a]) {
                                        const t = On(e.ids, (e => "number" == typeof r[e]));
                                        if (t > -1) {
                                            const a = r[e.ids[t]] - t,
                                                l = a + e.ids.length - 1,
                                                c = ui(n, a).start,
                                                u = ui(n, l).end;
                                            s.push(z(Ts, {
                                                start: c,
                                                end: u,
                                                group: e,
                                                canResize: i,
                                                onResize: e => o(e.changedX, a, l)
                                            }))
                                        }
                                    }
                                s.push(z("div", {
                                    class: "header-rgRow group"
                                }))
                            }
                            return s
                        },
                        Ds = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.initialHeaderClick = ee(this, "initialHeaderClick", 7), this.headerresize = ee(this, "headerresize", 7), this.headerdblClick = ee(this, "headerdblClick", 7), this.parent = "", this.groupingDepth = 0
                            }
                            onResize({
                                width: e
                            }, t) {
                                this.headerresize.emit({
                                    [t]: e || 0
                                })
                            }
                            onResizeGroup(e, t, r) {
                                const n = {},
                                    i = Es(this.viewportCol.get("items"), "itemIndex"),
                                    o = e / (r - t + 1);
                                for (let e = t; e <= r; e++) {
                                    const t = i[e];
                                    t && (n[e] = t.size + o)
                                }
                                this.headerresize.emit(n)
                            }
                            render() {
                                var e;
                                const t = this.viewportCol.get("items"),
                                    r = null === (e = this.selectionStore) || void 0 === e ? void 0 : e.get("range"),
                                    n = [],
                                    i = {};
                                for (let e of t) {
                                    const t = this.colData[e.itemIndex];
                                    n.push(z(js, {
                                        range: r,
                                        column: e,
                                        data: t,
                                        canFilter: !!this.columnFilter,
                                        canResize: this.canResize,
                                        onResize: t => this.onResize(t, e.itemIndex),
                                        onDoubleClick: e => this.headerdblClick.emit(e),
                                        onClick: e => this.initialHeaderClick.emit(e)
                                    })), i[null == t ? void 0 : t.prop] = e.itemIndex
                                }
                                return [z("div", {
                                    class: "group-rgRow"
                                }, z(Ps, {
                                    canResize: this.canResize,
                                    visibleProps: i,
                                    groups: this.groups,
                                    dimensionCol: this.dimensionCol.state,
                                    depth: this.groupingDepth,
                                    onResize: (e, t, r) => this.onResizeGroup(e, t, r)
                                })), z("div", {
                                    class: "header-rgRow actual-rgRow"
                                }, n)]
                            }
                            get element() {
                                return this
                            }
                            static get style() {
                                return "@charset \"UTF-8\";.revo-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.revo-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.revo-button.green{background-color:#2ee072;border:1px solid #20d565}.revo-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}revogr-header{position:relative;z-index:5;display:block}revogr-header .rgHeaderCell{display:flex}revogr-header .rgHeaderCell.align-center{text-align:center}revogr-header .rgHeaderCell.align-left{text-align:left}revogr-header .rgHeaderCell.align-right{text-align:right}revogr-header .rgHeaderCell.sortable{cursor:pointer}revogr-header .rgHeaderCell i.asc:after,revogr-header .rgHeaderCell i.desc:after{font-size:13px}revogr-header .rgHeaderCell i.asc:after{content:\"???\"}revogr-header .rgHeaderCell i.desc:after{content:\"???\"}revogr-header .rgHeaderCell,revogr-header .grouped-cell{position:absolute;box-sizing:border-box;height:100%;z-index:1}revogr-header .header-rgRow{display:block;position:relative}revogr-header .header-rgRow.group{z-index:0}revogr-header .group-rgRow{position:relative}revogr-header .rgHeaderCell.active{z-index:10}revogr-header .rgHeaderCell.active .resizable{background-color:deepskyblue}revogr-header .rgHeaderCell .header-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1}revogr-header .rgHeaderCell .resizable{display:block;position:absolute;z-index:90;touch-action:none;user-select:none}revogr-header .rgHeaderCell .resizable:hover{background-color:deepskyblue}revogr-header .rgHeaderCell>.resizable-r{cursor:ew-resize;width:6px;right:0;top:0;height:100%}revogr-header .rgHeaderCell>.resizable-rb{cursor:se-resize;width:6px;height:6px;right:0;bottom:0}revogr-header .rgHeaderCell>.resizable-b{cursor:s-resize;height:6px;bottom:0;width:100%;left:0}revogr-header .rgHeaderCell>.resizable-lb{cursor:sw-resize;width:6px;height:6px;left:0;bottom:0}revogr-header .rgHeaderCell>.resizable-l{cursor:w-resize;width:6px;left:0;height:100%;top:0}revogr-header .rgHeaderCell>.resizable-lt{cursor:nw-resize;width:6px;height:6px;left:0;top:0}revogr-header .rgHeaderCell>.resizable-t{cursor:n-resize;height:6px;top:0;width:100%;left:0}revogr-header .rgHeaderCell>.resizable-rt{cursor:ne-resize;width:6px;height:6px;right:0;top:0}revogr-header .rv-filter{visibility:hidden}"
                            }
                        };
                    var Ms = function() {
                            return Ve.Date.now()
                        },
                        As = Math.max,
                        Is = Math.min,
                        Hs = function(e, t, r) {
                            var n, i, o, s, a, l, c = 0,
                                u = !1,
                                h = !1,
                                d = !0;
                            if ("function" != typeof e) throw new TypeError("Expected a function");

                            function g(t) {
                                var r = n,
                                    o = i;
                                return n = i = void 0, c = t, s = e.apply(o, r)
                            }

                            function f(e) {
                                return c = e, a = setTimeout(v, t), u ? g(e) : s
                            }

                            function p(e) {
                                var r = e - l;
                                return void 0 === l || r >= t || r < 0 || h && e - c >= o
                            }

                            function v() {
                                var e = Ms();
                                if (p(e)) return m(e);
                                a = setTimeout(v, function(e) {
                                    var r = t - (e - l);
                                    return h ? Is(r, o - (e - c)) : r
                                }(e))
                            }

                            function m(e) {
                                return a = void 0, d && n ? g(e) : (n = i = void 0, s)
                            }

                            function C() {
                                var e = Ms(),
                                    r = p(e);
                                if (n = arguments, i = this, l = e, r) {
                                    if (void 0 === a) return f(l);
                                    if (h) return clearTimeout(a), a = setTimeout(v, t), g(l)
                                }
                                return void 0 === a && (a = setTimeout(v, t)), s
                            }
                            return t = kn(t) || 0, yt(r) && (u = !!r.leading, o = (h = "maxWait" in r) ? As(kn(r.maxWait) || 0, t) : o, d = "trailing" in r ? !!r.trailing : d), C.cancel = function() {
                                void 0 !== a && clearTimeout(a), c = 0, n = l = i = a = void 0
                            }, C.flush = function() {
                                return void 0 === a ? s : m(Ms())
                            }, C
                        };
                    class Ns {
                        constructor(e) {
                            this.config = e, this.currentCell = null, this.previousRow = null
                        }
                        endOrder(e, t) {
                            if (null === this.currentCell) return;
                            const r = this.getCell(e, t);
                            r.y !== this.currentCell.y && (r.y < 0 ? r.y = 0 : r.y < this.currentCell.y && r.y++, this.config.positionChanged(this.currentCell.y, r.y)), this.clear()
                        }
                        startOrder(e, t) {
                            return this.currentCell = this.getCell(e, t), this.currentCell
                        }
                        move(e, t) {
                            const r = this.getRow(e, t);
                            return this.previousRow === r.itemIndex || r.itemIndex < -1 ? null : (this.previousRow = r.itemIndex, r)
                        }
                        clear() {
                            this.currentCell = null, this.previousRow = null
                        }
                        getRow(e, {
                            el: t,
                            rows: r
                        }) {
                            const {
                                top: n
                            } = t.getBoundingClientRect(), i = ci(r, e - n);
                            return {
                                itemIndex: i.itemIndex,
                                start: i.start + n,
                                end: i.end + n
                            }
                        }
                        getCell({
                            x: e,
                            y: t
                        }, {
                            el: r,
                            rows: n,
                            cols: i
                        }) {
                            const {
                                top: o,
                                left: s
                            } = r.getBoundingClientRect(), a = e - s, l = ci(n, t - o);
                            return {
                                x: ci(i, a).itemIndex,
                                y: l.itemIndex
                            }
                        }
                    }
                    const Bs = class extends HTMLElement {
                        constructor() {
                            super(), this.__registerHost(), this.internalRowDragStart = ee(this, "internalRowDragStart", 7), this.internalRowDragEnd = ee(this, "internalRowDragEnd", 7), this.internalRowDrag = ee(this, "internalRowDrag", 7), this.internalRowMouseMove = ee(this, "internalRowMouseMove", 7), this.initialRowDropped = ee(this, "initialRowDropped", 7), this.rowMoveFunc = Hs((e => {
                                const t = this.rowOrderService.move(e, this.getData());
                                null !== t && this.internalRowDrag.emit(t)
                            }), 5)
                        }
                        onMouseOut() {
                            this.clearOrder()
                        }
                        onMouseUp(e) {
                            this.endOrder(e)
                        }
                        async dragStart(e) {
                            e.preventDefault(), this.moveFunc && this.clearOrder();
                            const t = this.getData(),
                                r = this.rowOrderService.startOrder(e, t),
                                n = this.rowOrderService.getRow(e.y, t);
                            this.internalRowDragStart.emit({
                                cell: r,
                                text: "Draggable item",
                                pos: n,
                                event: e
                            }).defaultPrevented || (this.moveFunc = e => this.move(e), document.addEventListener("mousemove", this.moveFunc))
                        }
                        async endOrder(e) {
                            this.rowOrderService.endOrder(e, this.getData()), this.clearOrder()
                        }
                        async clearOrder() {
                            this.rowOrderService.clear(), document.removeEventListener("mousemove", this.moveFunc), this.moveFunc = null, this.internalRowDragEnd.emit()
                        }
                        move({
                            x: e,
                            y: t
                        }) {
                            this.internalRowMouseMove.emit({
                                x: e,
                                y: t
                            }), this.rowMoveFunc(t)
                        }
                        connectedCallback() {
                            this.rowOrderService = new Ns({
                                positionChanged: (e, t) => this.onPositionChanged(e, t)
                            })
                        }
                        onPositionChanged(e, t) {
                            if (this.initialRowDropped.emit({
                                    from: e,
                                    to: t
                                }).defaultPrevented) return;
                            const r = [...this.dataStore.get("items")],
                                n = r.splice(e, 1);
                            r.splice(t, 0, ...n), Vn(this.dataStore, r)
                        }
                        getData() {
                            return {
                                el: this.parent,
                                rows: this.dimensionRow.state,
                                cols: this.dimensionCol.state
                            }
                        }
                    };
                    class Us {
                        constructor(e, t) {
                            this.store = e, this.config = t, this.store = e
                        }
                        get edited() {
                            return this.store.get("edit")
                        }
                        get focused() {
                            return this.store.get("focus")
                        }
                        get ranged() {
                            return this.store.get("range")
                        }
                        changeRange(e) {
                            return this.config.changeRange(e)
                        }
                        focus(e, t = !1) {
                            if (!e) return !1;
                            let r = e;
                            if (t) {
                                let e = this.store.get("focus");
                                if (e) return this.config.changeRange(Po(e, r))
                            }
                            return this.config.focus(e, r)
                        }
                    }
                    class Ws {
                        constructor(e) {
                            this.sv = e, this.ctrlDown = !1
                        }
                        async keyDown(e, t) {
                            var r;
                            if (this.sv.selectionStoreService.focused)
                                if (us(e.keyCode, navigator.platform) && (this.ctrlDown = !0), rs.TAB !== e.code)
                                    if (this.sv.selectionStoreService.edited) switch (e.code) {
                                        case rs.ESCAPE:
                                            this.sv.doEdit(void 0, !0)
                                    } else r = e.code, rs.BACKSPACE !== r && rs.DELETE !== r ? hs(e.code) ? this.sv.doEdit() : this.isCopy(e) || (this.isPaste(e) ? this.sv.internalPaste() : function(e) {
                                        return 32 === e || e >= 48 && e <= 57 || e >= 96 && e <= 111 || e >= 186 && e <= 192 || e >= 219 && e <= 222 || e >= 226 || e >= 65 && e <= 90
                                    }(e.keyCode) ? this.sv.doEdit(e.key) : await this.keyChangeSelection(e, t)) : this.sv.clearCell();
                                    else this.keyChangeSelection(e, t)
                        }
                        async keyChangeSelection(e, t) {
                            const r = this.changeDirectionKey(e, t);
                            if (!r) return !1;
                            await li();
                            const n = this.sv.selectionStore.get("range"),
                                i = this.sv.selectionStore.get("focus");
                            return this.keyPositionChange(r.changes, this.sv.getData(), n, i, r.isMulti)
                        }
                        keyPositionChange(e, t, r, n, i = !1) {
                            if (!r || !n) return !1;
                            const o = function(e, t, r, n = !1) {
                                const i = i => {
                                    const o = {
                                            x: e.x,
                                            y: e.y
                                        },
                                        s = n ? {
                                            x: e.x1,
                                            y: e.y1
                                        } : o;
                                    return (s[i] > t[i] ? s : o)[i] += r[i], {
                                        start: o,
                                        end: s
                                    }
                                };
                                return r.x ? i("x") : r.y ? i("y") : null
                            }(r, n, e, i);
                            if (!o) return !1;
                            if (i) {
                                if (Cs(o.end, t) || function({
                                        x: e,
                                        y: t
                                    }) {
                                        return e < 0 || t < 0
                                    }(o.start)) return !1;
                                const e = Po(o.start, o.end);
                                return this.sv.selectionStoreService.changeRange(e)
                            }
                            return this.sv.selectionStoreService.focus(o.start)
                        }
                        keyUp(e) {
                            us(e.keyCode, navigator.platform) && (this.ctrlDown = !1)
                        }
                        isCopy(e) {
                            return this.ctrlDown && e.code == rs.C
                        }
                        isPaste(e) {
                            return this.ctrlDown && e.code == rs.V
                        }
                        changeDirectionKey(e, t) {
                            const r = t && e.shiftKey;
                            switch (e.code) {
                                case rs.TAB:
                                case rs.ARROW_UP:
                                case rs.ARROW_DOWN:
                                case rs.ARROW_LEFT:
                                case rs.ARROW_RIGHT:
                                    e.preventDefault()
                            }
                            switch (e.code) {
                                case rs.ARROW_UP:
                                    return {
                                        changes: {
                                            y: -1
                                        }, isMulti: r
                                    };
                                case rs.ARROW_DOWN:
                                    return {
                                        changes: {
                                            y: 1
                                        }, isMulti: r
                                    };
                                case rs.ARROW_LEFT:
                                    return {
                                        changes: {
                                            x: -1
                                        }, isMulti: r
                                    };
                                case rs.TAB:
                                case rs.ARROW_RIGHT:
                                    return {
                                        changes: {
                                            x: 1
                                        }, isMulti: r
                                    }
                            }
                        }
                    }
                    var Vs, Zs = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        return n ? (r && "number" != typeof r && An(e, t, r) ? (t = 0, r = n) : (t = null == t ? 0 : zn(t), r = void 0 === r ? n : zn(r)), function(e, t, r) {
                            var n = -1,
                                i = e.length;
                            t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r) < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
                            for (var o = Array(i); ++n < i;) o[n] = e[n + t];
                            return o
                        }(e, t, r)) : []
                    };
                    ! function(e) {
                        e.selection = "Selection", e.autoFill = "AutoFill"
                    }(Vs || (Vs = {}));
                    class Gs {
                        constructor(e) {
                            this.sv = e, this.autoFillType = null, this.autoFillInitial = null, this.autoFillStart = null, this.autoFillLast = null
                        }
                        renderAutofill(e, t) {
                            let r;
                            return r = ws(e || Object.assign(Object.assign({}, t), {
                                x1: t.x,
                                y1: t.y
                            }), this.sv.dimensionRow.state, this.sv.dimensionCol.state), z("div", {
                                class: "autofill-handle",
                                style: {
                                    left: `${r.right}px`,
                                    top: `${r.bottom}px`
                                },
                                onMouseDown: e => this.selectionStart(e, this.sv.getData(), Vs.autoFill)
                            })
                        }
                        get isAutoFill() {
                            return !!this.autoFillType
                        }
                        selectionMouseMove(e) {
                            this.onMouseMoveAutofill || (this.onMouseMoveAutofill = Hs(((e, t) => this.doAutofillMouseMove(e, t)), 5)), this.isAutoFill && this.onMouseMoveAutofill(e, this.sv.getData())
                        }
                        getFocus() {
                            let e = this.sv.selectionStoreService.focused;
                            const t = this.sv.selectionStoreService.ranged;
                            return t && (e = {
                                x: t.x,
                                y: t.y
                            }), e || t ? e : null
                        }
                        doAutofillMouseMove({
                            x: e,
                            y: t
                        }, r) {
                            if (!this.autoFillInitial) return;
                            let n, i = ms({
                                x: e,
                                y: t
                            }, r);
                            this.autoFillLast && (n = function(e, t) {
                                const r = ["x", "y"];
                                for (let n of r)
                                    if (e[n] !== t[n]) return {
                                        [n]: 1
                                    };
                                return null
                            }(this.autoFillStart, this.autoFillLast)), this.autoFillLast && n || (n = function(e, t) {
                                const r = {},
                                    n = ["x", "y"];
                                for (let i of n) r[i] = Math.abs(e[i] - t[i]);
                                return r.x > r.y ? {
                                    x: 1
                                } : r.y > r.x ? {
                                    y: 1
                                } : null
                            }(this.autoFillStart, i), this.autoFillLast || (this.autoFillLast = this.autoFillStart)), n && (Cn(n, ((e, t) => {
                                e && (i = Object.assign(Object.assign({}, this.autoFillLast), {
                                    [t]: i[t]
                                }))
                            })), Cs(i, r) || (this.autoFillLast = i, this.sv.setTempRange({
                                area: Po(this.autoFillInitial, this.autoFillLast),
                                type: this.autoFillType
                            })))
                        }
                        selectionStart(e, t, r = Vs.selection) {
                            const {
                                top: n,
                                left: i
                            } = e.target.getBoundingClientRect();
                            this.autoFillInitial = this.getFocus(), this.autoFillType = r, this.autoFillStart = ms({
                                x: i,
                                y: n
                            }, t), e.preventDefault()
                        }
                        clearAutoFillSelection() {
                            this.autoFillInitial && (this.autoFillInitial = this.getFocus(), this.autoFillType === Vs.autoFill ? this.applyRangeWithData(this.autoFillInitial, this.autoFillLast) : this.applyRangeOnly(this.autoFillInitial, this.autoFillLast)), this.autoFillType = null, this.autoFillInitial = null, this.autoFillLast = null, this.autoFillStart = null
                        }
                        onRangeApply(e, t) {
                            const r = {};
                            for (let t in e) r[t] = Un(this.sv.dataStore, parseInt(t, 10));
                            this.sv.internalRangeDataApply({
                                data: e,
                                models: r,
                                type: this.sv.dataStore.get("type")
                            }).defaultPrevented || this.sv.columnService.applyRangeData(e), this.sv.setRange(t)
                        }
                        applyRangeWithData(e, t) {
                            if (!e || !t) return;
                            const r = this.sv.selectionStoreService.ranged,
                                n = Po(e, t),
                                i = [...this.sv.columnService.columns],
                                o = {
                                    type: this.sv.dataStore.get("type"),
                                    newData: {},
                                    newRange: n,
                                    oldRange: r,
                                    newProps: Zs(i, n.x, n.x1 + 1).map((e => e.prop)),
                                    oldProps: Zs(i, r.x, r.x1 + 1).map((e => e.prop))
                                };
                            o.newData = this.sv.columnService.getRangeData(o), this.sv.internalSelectionChanged(o).defaultPrevented ? this.sv.setTempRange(null) : this.onRangeApply(o.newData, n)
                        }
                        applyRangeOnly(e, t) {
                            if (!e || !t) return;
                            const r = Po(e, t);
                            this.sv.setRange(r)
                        }
                    }
                    class qs {
                        constructor(e) {
                            this.sv = e
                        }
                        onCopy(e) {
                            if (this.sv.internalCopy().defaultPrevented) return !1;
                            let t, r = this.sv.selectionStoreService.focused,
                                n = this.sv.selectionStoreService.ranged;
                            if (n || (n = Po(r, r)), n) {
                                const e = [...this.sv.columnService.columns],
                                    r = Zs(e, n.x, n.x1 + 1).map((e => e.prop));
                                t = this.sv.columnService.copyRangeArray(n, r, this.sv.dataStore)
                            }
                            return this.clipboard.doCopy(e, t), !0
                        }
                        renderClipboard() {
                            return z("revogr-clipboard", {
                                onCopyRegion: e => this.onCopy(e.detail),
                                ref: e => this.clipboard = e,
                                onPasteRegion: e => this.onPaste(e.detail)
                            })
                        }
                        onPaste(e) {
                            const t = this.sv.selectionStoreService.focused,
                                r = null !== this.sv.selectionStoreService.edited;
                            if (!t || r) return;
                            const {
                                changed: n,
                                range: i
                            } = this.sv.columnService.getTransformedDataToApply(t, e);
                            this.sv.onRangeApply(n, i)
                        }
                    }
                    const Xs = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.internalCopy = ee(this, "internalCopy", 7), this.internalPaste = ee(this, "internalPaste", 7), this.internalCellEdit = ee(this, "internalCellEdit", 7), this.internalFocusCell = ee(this, "internalFocusCell", 7), this.setEdit = ee(this, "setEdit", 3), this.setRange = ee(this, "setRange", 7), this.setTempRange = ee(this, "setTempRange", 7), this.focusCell = ee(this, "focusCell", 3), this.internalSelectionChanged = ee(this, "internalSelectionChanged", 7), this.internalRangeDataApply = ee(this, "internalRangeDataApply", 7), this.keyboardService = null, this.autoFillService = null, this.clipboardService = null
                            }
                            onMouseMove(e) {
                                this.selectionStoreService.focused && this.autoFillService.selectionMouseMove(e)
                            }
                            onMouseOut() {
                                this.autoFillService.clearAutoFillSelection()
                            }
                            onMouseUp() {
                                this.autoFillService.clearAutoFillSelection()
                            }
                            onCellDrag(e) {
                                var t;
                                null === (t = this.orderEditor) || void 0 === t || t.dragStart(e.detail)
                            }
                            onKeyUp(e) {
                                var t;
                                null === (t = this.keyboardService) || void 0 === t || t.keyUp(e)
                            }
                            onKeyDown(e) {
                                var t;
                                null === (t = this.keyboardService) || void 0 === t || t.keyDown(e, this.range)
                            }
                            selectionServiceSet(e) {
                                this.selectionStoreService = new Us(e, {
                                    changeRange: e => {
                                        var t;
                                        return !(null === (t = this.setRange.emit(e)) || void 0 === t ? void 0 : t.defaultPrevented)
                                    },
                                    focus: (e, t) => {
                                        var r;
                                        const n = {
                                                focus: e,
                                                end: t
                                            },
                                            {
                                                defaultPrevented: i
                                            } = this.internalFocusCell.emit(this.columnService.getSaveData(e.y, e.x));
                                        return !i && !(null === (r = this.focusCell.emit(n)) || void 0 === r ? void 0 : r.defaultPrevented)
                                    }
                                }), this.keyboardService = new Ws({
                                    selectionStoreService: this.selectionStoreService,
                                    selectionStore: e,
                                    doEdit: (e, t) => this.doEdit(e, t),
                                    clearCell: () => this.clearCell(),
                                    getData: () => this.getData(),
                                    internalPaste: () => this.internalPaste.emit()
                                }), this.createAutoFillService(), this.createClipboardService()
                            }
                            createAutoFillService() {
                                this.autoFillService = new Gs({
                                    selectionStoreService: this.selectionStoreService,
                                    dimensionRow: this.dimensionRow,
                                    dimensionCol: this.dimensionCol,
                                    columnService: this.columnService,
                                    dataStore: this.dataStore,
                                    setTempRange: e => this.setTempRange.emit(e),
                                    internalSelectionChanged: e => this.internalSelectionChanged.emit(e),
                                    internalRangeDataApply: e => this.internalRangeDataApply.emit(e),
                                    setRange: e => this.setRange.emit(e),
                                    getData: () => this.getData()
                                })
                            }
                            columnServiceSet() {
                                var e;
                                null === (e = this.columnService) || void 0 === e || e.destroy(), this.columnService = new Ko(this.dataStore, this.colData), this.createAutoFillService(), this.createClipboardService()
                            }
                            createClipboardService() {
                                this.clipboardService = new qs({
                                    selectionStoreService: this.selectionStoreService,
                                    columnService: this.columnService,
                                    dataStore: this.dataStore,
                                    onRangeApply: (e, t) => this.autoFillService.onRangeApply(e, t),
                                    internalCopy: () => this.internalCopy.emit()
                                })
                            }
                            connectedCallback() {
                                this.columnServiceSet(), this.selectionServiceSet(this.selectionStore)
                            }
                            disconnectedCallback() {
                                var e;
                                null === (e = this.columnService) || void 0 === e || e.destroy()
                            }
                            renderRange(e) {
                                const t = bs(e, this.dimensionRow.state, this.dimensionCol.state);
                                return [z("div", {
                                    class: "selection-border-range",
                                    style: t
                                })]
                            }
                            renderEditCell() {
                                const e = this.selectionStore.get("edit");
                                if (this.readonly || !e) return;
                                const t = e.val || this.columnService.getCellData(e.y, e.x),
                                    r = Object.assign(Object.assign({}, e), this.columnService.getSaveData(e.y, e.x, t)),
                                    n = bs(Object.assign(Object.assign({}, e), {
                                        x1: e.x,
                                        y1: e.y
                                    }), this.dimensionRow.state, this.dimensionCol.state);
                                return z("revogr-edit", {
                                    onCellEdit: e => this.onCellEdit(e.detail),
                                    onCloseEdit: e => this.closeEdit(e),
                                    editCell: r,
                                    column: this.columnService.columns[e.x],
                                    editor: this.columnService.getCellEditor(e.y, e.x, this.editors),
                                    style: n
                                })
                            }
                            render() {
                                const e = this.selectionStoreService.ranged,
                                    t = this.selectionStoreService.focused,
                                    r = [];
                                (e || t) && this.useClipboard && r.push(this.clipboardService.renderClipboard()), e && r.push(...this.renderRange(e));
                                const n = this.renderEditCell();
                                return n && r.push(n), t && !this.readonly && !n && this.range && r.push(this.autoFillService.renderAutofill(e, t)), this.canDrag && r.push(z("revogr-order-editor", {
                                    ref: e => this.orderEditor = e,
                                    dataStore: this.dataStore,
                                    dimensionRow: this.dimensionRow,
                                    dimensionCol: this.dimensionCol,
                                    parent: this.element,
                                    onInternalRowDragStart: e => this.onRowDragStart(e)
                                })), z(O, {
                                    onDblClick: () => this.doEdit(),
                                    onMouseDown: e => this.onElementMouseDown(e)
                                }, r, z("slot", {
                                    name: "data"
                                }))
                            }
                            onElementMouseDown(e) {
                                if (null == (t = e.target) ? void 0 : t.closest(`.${lo}`)) return;
                                var t;
                                const r = this.getData();
                                if (e.defaultPrevented) return;
                                const n = ms({
                                    x: e.x,
                                    y: e.y
                                }, r);
                                this.selectionStoreService.focus(n, this.range && e.shiftKey), this.range && this.autoFillService.selectionStart(e, r)
                            }
                            doEdit(e = "", t = !1) {
                                var r;
                                if (this.canEdit()) {
                                    const n = this.selectionStore.get("focus"),
                                        i = this.columnService.getSaveData(n.y, n.x);
                                    null === (r = this.setEdit) || void 0 === r || r.emit(Object.assign(Object.assign({}, i), {
                                        isCancel: t,
                                        val: e
                                    }))
                                }
                            }
                            closeEdit(e) {
                                this.doEdit(void 0, !0), (null == e ? void 0 : e.detail) && this.focusNext()
                            }
                            async focusNext() {
                                await this.keyboardService.keyChangeSelection(new KeyboardEvent("keydown", {
                                    code: rs.ARROW_DOWN
                                }), this.range) || this.closeEdit()
                            }
                            clearCell() {
                                if (!this.selectionStoreService.ranged || (e = this.selectionStoreService.ranged).x === e.x1 && e.y === e.y1) {
                                    if (this.canEdit()) {
                                        const e = this.selectionStoreService.focused;
                                        this.onCellEdit({
                                            rgRow: e.y,
                                            rgCol: e.x,
                                            val: ""
                                        }, !0)
                                    }
                                } else {
                                    const e = this.columnService.getRangeStaticData(this.selectionStoreService.ranged, "");
                                    this.autoFillService.onRangeApply(e, this.selectionStoreService.ranged)
                                }
                                var e
                            }
                            onCellEdit(e, t = !1) {
                                const r = this.columnService.getSaveData(e.rgRow, e.rgCol, e.val);
                                this.internalCellEdit.emit(r), t || e.preventFocus || this.focusNext()
                            }
                            onRowDragStart({
                                detail: e
                            }) {
                                e.text = this.columnService.getCellData(e.cell.y, e.cell.x)
                            }
                            canEdit() {
                                var e;
                                if (this.readonly) return !1;
                                const t = this.selectionStoreService.focused;
                                return t && !(null === (e = this.columnService) || void 0 === e ? void 0 : e.isReadOnly(t.y, t.x))
                            }
                            getData() {
                                return {
                                    el: this.element,
                                    rows: this.dimensionRow.state,
                                    cols: this.dimensionCol.state,
                                    lastCell: this.lastCell
                                }
                            }
                            get element() {
                                return this
                            }
                            static get watchers() {
                                return {
                                    selectionStore: ["selectionServiceSet"],
                                    dimensionRow: ["createAutoFillService"],
                                    dimensionCol: ["createAutoFillService"],
                                    dataStore: ["columnServiceSet"],
                                    colData: ["columnServiceSet"]
                                }
                            }
                            static get style() {
                                return ".revo-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.revo-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.revo-button.green{background-color:#2ee072;border:1px solid #20d565}.revo-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}revogr-overlay-selection{display:block;position:relative;width:100%}revogr-overlay-selection .autofill-handle{position:absolute;width:10px;height:10px;background:#0d63e8;margin-left:-9px;margin-top:-9px;border:1px solid white;box-sizing:border-box;z-index:10;cursor:crosshair}revogr-overlay-selection .selection-border-range{position:absolute;pointer-events:none;z-index:9}revogr-overlay-selection .selection-border-range{box-shadow:-1px 0 0 #0d63e8 inset, 1px 0 0 #0d63e8 inset, 0 -1px 0 #0d63e8 inset, 0 1px 0 #0d63e8 inset}revogr-overlay-selection revogr-edit{z-index:10}"
                            }
                        },
                        Ks = e => (t, {
                            rowIndex: r
                        }) => e + r,
                        Ys = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.scrollViewport = ee(this, "scrollViewport", 3), this.elementToScroll = ee(this, "elementToScroll", 3)
                            }
                            render() {
                                var e;
                                const t = [],
                                    r = new bi;
                                let n = 1;
                                for (let e of this.dataPorts) {
                                    const i = e.dataStore.get("items").length,
                                        o = new Nn(e.type);
                                    o.updateData(e.dataStore.get("source"));
                                    const s = new Nn("colPinStart"),
                                        a = Object.assign({
                                            cellTemplate: Ks(n)
                                        }, this.rowHeaderColumn);
                                    s.updateData([a]);
                                    const l = Object.assign(Object.assign({}, e), {
                                        dataStore: o.store,
                                        colData: s.store,
                                        viewportCol: r.store,
                                        readonly: !0,
                                        range: !1
                                    });
                                    t.push(z("revogr-data", Object.assign({}, l))), n += i
                                }
                                const i = (null === (e = this.rowHeaderColumn) || void 0 === e ? void 0 : e.size) || 10 * (n.toString().length + 1);
                                r.setViewport({
                                    realCount: 1,
                                    virtualSize: 0,
                                    items: [{
                                        size: i,
                                        start: 0,
                                        end: i,
                                        itemIndex: 0
                                    }]
                                });
                                const o = `${this.uiid}-rowHeaders`,
                                    s = {
                                        [io]: o,
                                        contentHeight: this.height,
                                        contentWidth: 0,
                                        style: {
                                            minWidth: `${i}px`
                                        },
                                        ref: e => this.elementToScroll.emit(e),
                                        onScrollViewport: e => this.scrollViewport.emit(e.detail)
                                    },
                                    a = Object.assign(Object.assign({}, this.headerProp), {
                                        colData: "object" == typeof this.rowHeaderColumn ? [this.rowHeaderColumn] : [],
                                        viewportCol: r.store,
                                        canResize: !1,
                                        parent: o,
                                        slot: "header"
                                    });
                                return z(O, {
                                    class: "rowHeaders",
                                    key: "rowHeaders"
                                }, z("revogr-viewport-scroll", Object.assign({}, s), z("revogr-header", Object.assign({}, a)), t))
                            }
                        },
                        Js = {
                            contentSize: 0,
                            clientSize: 0,
                            virtualSize: 0,
                            maxSize: 0
                        };
                    class Qs {
                        constructor(e) {
                            this.cfg = e, this.preventArtificialScroll = {
                                rgRow: null,
                                rgCol: null
                            }, this.previousScroll = {
                                rgRow: 0,
                                rgCol: 0
                            }, this.params = {
                                rgRow: Object.assign({}, Js),
                                rgCol: Object.assign({}, Js)
                            }
                        }
                        static getVirtualContentSize(e, t, r = 0) {
                            return e + (r ? t - r : 0)
                        }
                        setParams(e, t) {
                            const r = Qs.getVirtualContentSize(e.contentSize, e.clientSize, e.virtualSize);
                            this.params[t] = Object.assign(Object.assign({}, e), {
                                maxSize: r - e.clientSize,
                                virtualContentSize: r
                            })
                        }
                        setScroll(e) {
                            this.cancelScroll(e.dimension), this.preventArtificialScroll[e.dimension] = window.requestAnimationFrame((() => {
                                const t = this.getParams(e.dimension);
                                e.coordinate = Math.ceil(e.coordinate), this.previousScroll[e.dimension] = this.wrapCoordinate(e.coordinate, t), this.preventArtificialScroll[e.dimension] = null, this.cfg.afterScroll(Object.assign(Object.assign({}, e), {
                                    coordinate: t.virtualSize ? this.convert(e.coordinate, t, !1) : e.coordinate
                                }))
                            }))
                        }
                        scroll(e, t, r = !1, n) {
                            if (this.cancelScroll(t), !r && this.previousScroll[t] === e) return void(this.previousScroll[t] = 0);
                            const i = this.getParams(t);
                            this.cfg.beforeScroll({
                                dimension: t,
                                coordinate: i.virtualSize ? this.convert(e, i) : e,
                                delta: n
                            })
                        }
                        getParams(e) {
                            return this.params[e]
                        }
                        wrapCoordinate(e, t) {
                            return e < 0 ? 0 : e > t.maxSize ? t.maxSize : e
                        }
                        cancelScroll(e) {
                            return "number" == typeof this.preventArtificialScroll[e] && (window.cancelAnimationFrame(this.preventArtificialScroll[e]), this.preventArtificialScroll[e] = null, !0)
                        }
                        convert(e, t, r = !0) {
                            const n = t.clientSize,
                                i = [0, t.virtualContentSize - n],
                                o = [0, t.contentSize - t.virtualSize];
                            return r ? ai(e, i, o) : ai(e, o, i)
                        }
                    }
                    const ea = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.scrollVirtual = ee(this, "scrollVirtual", 7), this.scrollSize = 0, this.isAutoHide = !1, this.autoHideTimeout = 0, this.dimension = "rgRow"
                            }
                            async setScroll(e) {
                                var t;
                                this.dimension === e.dimension && (null === (t = this.scrollService) || void 0 === t || t.setScroll(e))
                            }
                            async changeScroll(e) {
                                if (e.delta) {
                                    switch (e.dimension) {
                                        case "rgCol":
                                            e.coordinate = this.element.scrollLeft + e.delta;
                                            break;
                                        case "rgRow":
                                            e.coordinate = this.element.scrollTop + e.delta
                                    }
                                    this.setScroll(e)
                                }
                                return e
                            }
                            set size(e) {
                                "rgRow" !== this.dimension ? this.element.style.minHeight = `${e}px` : this.element.style.minWidth = `${e}px`
                            }
                            get size() {
                                return "rgRow" === this.dimension ? this.element.clientHeight : this.element.clientWidth
                            }
                            connectedCallback() {
                                this.scrollService = new Qs({
                                    beforeScroll: e => this.scrollVirtual.emit(e),
                                    afterScroll: e => {
                                        const t = "rgRow" === e.dimension ? "scrollTop" : "scrollLeft";
                                        this.element[t] = e.coordinate
                                    }
                                })
                            }
                            disconnectedCallback() {
                                clearTimeout(this.autoHideTimeout)
                            }
                            componentWillLoad() {
                                this.scrollSize = si(document), this.isAutoHide = !this.scrollSize
                            }
                            componentDidRender() {
                                const e = "rgRow" === this.dimension ? "scrollHeight" : "scrollWidth";
                                this.element[e] > this.size ? this.size = this.scrollSize : this.size = 0, this.scrollService.setParams({
                                    contentSize: this.dimensionStore.get("realSize"),
                                    clientSize: this.size,
                                    virtualSize: this.viewportStore.get("virtualSize")
                                }, this.dimension)
                            }
                            onScroll(e) {
                                var t;
                                let r = "scrollLeft";
                                "rgRow" === this.dimension && (r = "scrollTop"), this.isAutoHide && (this.size = 20, this.autoHideTimeout = this.autoHide(this.autoHideTimeout));
                                const n = e.target;
                                null === (t = this.scrollService) || void 0 === t || t.scroll(n[r] || 0, this.dimension)
                            }
                            autoHide(e) {
                                return clearTimeout(e), setTimeout((() => {
                                    this.size = 0
                                }), 6e3)
                            }
                            render() {
                                const e = "rgRow" === this.dimension ? "height" : "width";
                                return z(O, Object.assign({}, {
                                    "auto-hide": this.isAutoHide
                                }, {
                                    onScroll: e => this.onScroll(e)
                                }), z("div", {
                                    style: {
                                        [e]: `${this.extContentSize(this.viewportStore.get("virtualSize"),this.dimensionStore.get("realSize"))}px`
                                    }
                                }))
                            }
                            extContentSize(e, t) {
                                return Qs.getVirtualContentSize(t, this.size, e)
                            }
                            get element() {
                                return this
                            }
                            static get style() {
                                return ".revo-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.revo-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.revo-button.green{background-color:#2ee072;border:1px solid #20d565}.revo-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}revogr-scroll-virtual[auto-hide]{position:absolute;z-index:100}revogr-scroll-virtual[auto-hide].vertical{right:0;top:0}revogr-scroll-virtual[auto-hide].vertical:hover{min-width:20px}revogr-scroll-virtual[auto-hide].horizontal{bottom:0;left:0}revogr-scroll-virtual[auto-hide].horizontal:hover{min-height:20px}revogr-scroll-virtual.vertical{overflow-y:auto;overflow-x:hidden;height:100%}revogr-scroll-virtual.vertical>div{width:1px}revogr-scroll-virtual.horizontal{overflow-x:auto;overflow-y:hidden;width:100%}revogr-scroll-virtual.horizontal>div{height:1px}"
                            }
                        },
                        ta = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.onChange = Uo.throttle((e => this.doChange(e)), 300)
                            }
                            doChange(e) {
                                null == e || e.scrollIntoView({
                                    block: "nearest",
                                    inline: "nearest"
                                })
                            }
                            componentDidRender() {
                                this.el && this.onChange(this.el)
                            }
                            render() {
                                const e = this.selectionStore.get("tempRange"),
                                    t = this.selectionStore.get("tempRangeType");
                                if (!e) return;
                                let r = "bottom",
                                    n = "right";
                                const i = this.getRange();
                                if (!i) return;
                                e.y < i.y && (r = "top"), e.x < i.x && (n = "left");
                                const o = `${n} ${r}`,
                                    s = bs(e, this.dimensionRow.state, this.dimensionCol.state);
                                return z(O, {
                                    class: {
                                        "temp-bg-range": !0, [t || ""]: !0
                                    },
                                    style: s
                                }, z("div", {
                                    class: o,
                                    ref: e => this.el = e
                                }))
                            }
                            getRange() {
                                const e = this.selectionStore.get("range");
                                if (e) return e;
                                const t = this.selectionStore.get("focus");
                                return t ? Object.assign(Object.assign({}, t), {
                                    x1: t.x,
                                    y1: t.y
                                }) : null
                            }
                            static get style() {
                                return ".revo-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.revo-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.revo-button.green{background-color:#2ee072;border:1px solid #20d565}.revo-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}.temp-bg-range{display:block;position:absolute;pointer-events:none;z-index:9;border:1px solid #ff5e00;box-sizing:border-box}.temp-bg-range.Selection{border:1px dashed gray}.temp-bg-range>div{width:1px;height:1px;position:absolute}.temp-bg-range>div.top{top:-1px}.temp-bg-range>div.bottom{bottom:-1px}.temp-bg-range>div.left{left:-1px}.temp-bg-range>div.right{right:-1px}"
                            }
                        };
                    class ra {
                        constructor(e, t) {
                            this.events = t, this.resizeObserver = null, this.resize = function(e, t, r) {
                                var n = !0,
                                    i = !0;
                                if ("function" != typeof e) throw new TypeError("Expected a function");
                                return yt(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Hs(e, t, {
                                    leading: n,
                                    maxWait: t,
                                    trailing: i
                                })
                            }(((e, t) => {
                                var r;
                                return null === (r = this.events) || void 0 === r ? void 0 : r.resize(e, t)
                            }), 10), this.init(e)
                        }
                        async init(e) {
                            var t;
                            await async function() {
                                if (!("ResizeObserver" in window)) {
                                    const e = await r.e(497).then(r.bind(r, 497));
                                    window.ResizeObserver = e.ResizeObserver
                                }
                            }(), this.resizeObserver = new ResizeObserver(this.resize), null === (t = this.resizeObserver) || void 0 === t || t.observe(e)
                        }
                        destroy() {
                            var e;
                            null === (e = this.resizeObserver) || void 0 === e || e.disconnect(), this.resizeObserver = null
                        }
                    }
                    const na = class extends HTMLElement {
                            constructor() {
                                super(), this.__registerHost(), this.scrollViewport = ee(this, "scrollViewport", 3), this.resizeViewport = ee(this, "resizeViewport", 7), this.scrollchange = ee(this, "scrollchange", 7), this.scrollThrottling = 30, this.contentWidth = 0, this.contentHeight = 0, this.oldValY = this.contentHeight, this.oldValX = this.contentWidth, this.mouseWheelScroll = {
                                    rgCol: 0,
                                    rgRow: 0
                                }
                            }
                            async setScroll(e) {
                                var t;
                                this.latestScrollUpdate(e.dimension), null === (t = this.scrollService) || void 0 === t || t.setScroll(e)
                            }
                            async changeScroll(e) {
                                if (e.delta) {
                                    switch (e.dimension) {
                                        case "rgCol":
                                            e.coordinate = this.horizontalScroll.scrollLeft + e.delta;
                                            break;
                                        case "rgRow":
                                            e.coordinate = this.verticalScroll.scrollTop + e.delta
                                    }
                                    this.setScroll(e)
                                }
                                return e
                            }
                            connectedCallback() {
                                "ontouchstart" in document.documentElement ? this.scrollThrottling = 0 : (this.verticalMouseWheel = this.onVerticalMouseWheel.bind(this, "rgRow", "deltaY"), this.horizontalMouseWheel = this.onHorizontalMouseWheel.bind(this, "rgCol", "deltaX")), this.scrollService = new Qs({
                                    beforeScroll: e => this.scrollViewport.emit(e),
                                    afterScroll: e => {
                                        switch (e.dimension) {
                                            case "rgCol":
                                                this.horizontalScroll.scrollLeft = e.coordinate;
                                                break;
                                            case "rgRow":
                                                this.verticalScroll.scrollTop = e.coordinate
                                        }
                                    }
                                })
                            }
                            componentDidLoad() {
                                this.horisontalResize = new ra(this.horizontalScroll, {
                                    resize: e => {
                                        var t, r;
                                        let n = (null === (t = e[0]) || void 0 === t ? void 0 : t.contentRect.height) || 0;
                                        n && (n -= this.header.clientHeight + this.footer.clientHeight);
                                        const i = {
                                            rgRow: {
                                                size: n,
                                                contentSize: this.contentHeight,
                                                scroll: this.verticalScroll.scrollTop
                                            },
                                            rgCol: {
                                                size: (null === (r = e[0]) || void 0 === r ? void 0 : r.contentRect.width) || 0,
                                                contentSize: this.contentWidth,
                                                scroll: this.horizontalScroll.scrollLeft
                                            }
                                        };
                                        Cn(i, ((e, t) => {
                                            var r;
                                            this.resizeViewport.emit({
                                                dimension: t,
                                                size: e.size
                                            }), null === (r = this.scrollService) || void 0 === r || r.scroll(e.scroll, t, !0), this.setScrollVisibility(t, e.size, e.contentSize)
                                        }))
                                    }
                                })
                            }
                            setScrollVisibility(e, t, r) {
                                const n = t < r;
                                let i, o;
                                switch (e) {
                                    case "rgCol":
                                        i = this.horizontalScroll, o = this.horizontalMouseWheel;
                                        break;
                                    case "rgRow":
                                        i = this.verticalScroll, o = this.verticalMouseWheel
                                }
                                n ? (i.classList.add(`scroll-${e}`), i.addEventListener("mousewheel", o)) : (i.classList.remove(`scroll-${e}`), i.removeEventListener("mousewheel", o)), this.scrollchange.emit({
                                    type: e,
                                    hasScroll: n
                                })
                            }
                            disconnectedCallback() {
                                this.verticalScroll.removeEventListener("mousewheel", this.verticalMouseWheel), this.horizontalScroll.removeEventListener("mousewheel", this.horizontalMouseWheel), this.horisontalResize.destroy()
                            }
                            async componentDidRender() {
                                this.contentHeight < this.oldValY && this.verticalScroll && (this.verticalScroll.scrollTop += this.contentHeight - this.oldValY), this.oldValY = this.contentHeight, this.contentWidth < this.oldValX && (this.horizontalScroll.scrollLeft += this.contentWidth - this.oldValX), this.oldValX = this.contentWidth, this.scrollService.setParams({
                                    contentSize: this.contentHeight,
                                    clientSize: this.verticalScroll.clientHeight,
                                    virtualSize: 0
                                }, "rgRow"), this.scrollService.setParams({
                                    contentSize: this.contentWidth,
                                    clientSize: this.horizontalScroll.clientWidth,
                                    virtualSize: 0
                                }, "rgCol"), this.setScrollVisibility("rgRow", this.verticalScroll.clientHeight, this.contentHeight), this.setScrollVisibility("rgCol", this.horizontalScroll.clientWidth, this.contentWidth)
                            }
                            render() {
                                return z(O, {
                                    onScroll: e => this.onScroll("rgCol", e)
                                }, z("div", {
                                    class: "inner-content-table",
                                    style: {
                                        width: `${this.contentWidth}px`
                                    }
                                }, z("div", {
                                    class: "header-wrapper",
                                    ref: e => this.header = e
                                }, z("slot", {
                                    name: Io
                                })), z("div", {
                                    class: "vertical-inner",
                                    ref: e => this.verticalScroll = e,
                                    onScroll: e => this.onScroll("rgRow", e)
                                }, z("div", {
                                    class: "content-wrapper",
                                    style: {
                                        height: `${this.contentHeight}px`
                                    }
                                }, z("slot", {
                                    name: No
                                }))), z("div", {
                                    class: "footer-wrapper",
                                    ref: e => this.footer = e
                                }, z("slot", {
                                    name: Ho
                                }))))
                            }
                            onScroll(e, t) {
                                var r;
                                const n = t.target;
                                let i = 0;
                                switch (e) {
                                    case "rgCol":
                                        i = null == n ? void 0 : n.scrollLeft;
                                        break;
                                    case "rgRow":
                                        i = null == n ? void 0 : n.scrollTop
                                }(new Date).getTime() - this.mouseWheelScroll[e] > this.scrollThrottling && (null === (r = this.scrollService) || void 0 === r || r.scroll(i, e))
                            }
                            latestScrollUpdate(e) {
                                this.mouseWheelScroll[e] = (new Date).getTime()
                            }
                            onVerticalMouseWheel(e, t, r) {
                                var n;
                                r.preventDefault();
                                const i = this.verticalScroll.scrollTop + r[t];
                                null === (n = this.scrollService) || void 0 === n || n.scroll(i, e, void 0, r[t]), this.latestScrollUpdate(e)
                            }
                            onHorizontalMouseWheel(e, t, r) {
                                var n;
                                r.preventDefault();
                                const i = this.horizontalScroll.scrollLeft + r[t];
                                null === (n = this.scrollService) || void 0 === n || n.scroll(i, e, void 0, r[t]), this.latestScrollUpdate(e)
                            }
                            get horizontalScroll() {
                                return this
                            }
                            static get style() {
                                return ".revo-drag-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 438 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M421.875,70.40625 C426.432292,70.40625 430.175781,68.9414062 433.105469,66.0117188 C436.035156,63.0820312 437.5,59.3385417 437.5,54.78125 L437.5,54.78125 L437.5,15.71875 C437.5,11.1614583 436.035156,7.41796875 433.105469,4.48828125 C430.175781,1.55859375 426.432292,0.09375 421.875,0.09375 L421.875,0.09375 L15.625,0.09375 C11.0677083,0.09375 7.32421875,1.55859375 4.39453125,4.48828125 C1.46484375,7.41796875 0,11.1614583 0,15.71875 L0,15.71875 L0,54.78125 C0,59.3385417 1.46484375,63.0820312 4.39453125,66.0117188 C7.32421875,68.9414062 11.0677083,70.40625 15.625,70.40625 L15.625,70.40625 L421.875,70.40625 Z M421.875,226.65625 C426.432292,226.65625 430.175781,225.191406 433.105469,222.261719 C436.035156,219.332031 437.5,215.588542 437.5,211.03125 L437.5,211.03125 L437.5,171.96875 C437.5,167.411458 436.035156,163.667969 433.105469,160.738281 C430.175781,157.808594 426.432292,156.34375 421.875,156.34375 L421.875,156.34375 L15.625,156.34375 C11.0677083,156.34375 7.32421875,157.808594 4.39453125,160.738281 C1.46484375,163.667969 0,167.411458 0,171.96875 L0,171.96875 L0,211.03125 C0,215.588542 1.46484375,219.332031 4.39453125,222.261719 C7.32421875,225.191406 11.0677083,226.65625 15.625,226.65625 L15.625,226.65625 L421.875,226.65625 Z M421.875,382.90625 C426.432292,382.90625 430.175781,381.441406 433.105469,378.511719 C436.035156,375.582031 437.5,371.838542 437.5,367.28125 L437.5,367.28125 L437.5,328.21875 C437.5,323.661458 436.035156,319.917969 433.105469,316.988281 C430.175781,314.058594 426.432292,312.59375 421.875,312.59375 L421.875,312.59375 L15.625,312.59375 C11.0677083,312.59375 7.32421875,314.058594 4.39453125,316.988281 C1.46484375,319.917969 0,323.661458 0,328.21875 L0,328.21875 L0,367.28125 C0,371.838542 1.46484375,375.582031 4.39453125,378.511719 C7.32421875,381.441406 11.0677083,382.90625 15.625,382.90625 L15.625,382.90625 L421.875,382.90625 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:7px;background-size:cover;background-repeat:no-repeat}.revo-alt-icon{-webkit-mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg viewBox='0 0 384 383' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cpath d='M192.4375,383 C197.424479,383 201.663411,381.254557 205.154297,377.763672 L205.154297,377.763672 L264.25,318.667969 C270.234375,312.683594 271.605794,306.075846 268.364258,298.844727 C265.122721,291.613607 259.51237,287.998047 251.533203,287.998047 L251.533203,287.998047 L213.382812,287.998047 L213.382812,212.445312 L288.935547,212.445312 L288.935547,250.595703 C288.935547,258.57487 292.551107,264.185221 299.782227,267.426758 C307.013346,270.668294 313.621094,269.296875 319.605469,263.3125 L319.605469,263.3125 L378.701172,204.216797 C382.192057,200.725911 383.9375,196.486979 383.9375,191.5 C383.9375,186.513021 382.192057,182.274089 378.701172,178.783203 L378.701172,178.783203 L319.605469,119.6875 C313.621094,114.201823 307.013346,112.955078 299.782227,115.947266 C292.551107,118.939453 288.935547,124.42513 288.935547,132.404297 L288.935547,132.404297 L288.935547,170.554688 L213.382812,170.554688 L213.382812,95.0019531 L251.533203,95.0019531 C259.51237,95.0019531 264.998047,91.3863932 267.990234,84.1552734 C270.982422,76.9241536 269.735677,70.3164062 264.25,64.3320312 L264.25,64.3320312 L205.154297,5.23632812 C201.663411,1.74544271 197.424479,0 192.4375,0 C187.450521,0 183.211589,1.74544271 179.720703,5.23632812 L179.720703,5.23632812 L120.625,64.3320312 C114.640625,70.3164062 113.269206,76.9241536 116.510742,84.1552734 C119.752279,91.3863932 125.36263,95.0019531 133.341797,95.0019531 L133.341797,95.0019531 L171.492188,95.0019531 L171.492188,170.554688 L95.9394531,170.554688 L95.9394531,132.404297 C95.9394531,124.42513 92.3238932,118.814779 85.0927734,115.573242 C77.8616536,112.331706 71.2539062,113.703125 65.2695312,119.6875 L65.2695312,119.6875 L6.17382812,178.783203 C2.68294271,182.274089 0.9375,186.513021 0.9375,191.5 C0.9375,196.486979 2.68294271,200.725911 6.17382812,204.216797 L6.17382812,204.216797 L65.2695312,263.3125 C71.2539062,268.798177 77.8616536,270.044922 85.0927734,267.052734 C92.3238932,264.060547 95.9394531,258.57487 95.9394531,250.595703 L95.9394531,250.595703 L95.9394531,212.445312 L171.492188,212.445312 L171.492188,287.998047 L133.341797,287.998047 C125.36263,287.998047 119.876953,291.613607 116.884766,298.844727 C113.892578,306.075846 115.139323,312.683594 120.625,318.667969 L120.625,318.667969 L179.720703,377.763672 C183.211589,381.254557 187.450521,383 192.4375,383 Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\");width:11px;height:11px;background-size:cover;background-repeat:no-repeat}.arrow-down{position:absolute;right:5px;top:0}.arrow-down svg{width:8px;margin-top:5px;margin-left:5px;opacity:0.4}.cell-value-wrapper{margin-right:10px;overflow:hidden;text-overflow:ellipsis}.revo-button{position:relative;overflow:hidden;color:#fff;background-color:#6200ee;height:34px;line-height:34px;padding:0 15px;outline:0;border:0;border-radius:7px;box-sizing:border-box;cursor:pointer}.revo-button.green{background-color:#2ee072;border:1px solid #20d565}.revo-button.light{border:2px solid #cedefa;line-height:32px;background:none;color:#4876ca;box-shadow:none}.rowHeaders{z-index:2;font-size:10px;display:flex;height:100%}.rowHeaders revogr-data .rgCell{text-align:center}.rowHeaders .rgCell{padding:0 1em !important;min-width:100%}revogr-viewport-scroll{-ms-overflow-style:none;scrollbar-width:none;overflow-x:auto;overflow-y:hidden;position:relative;z-index:1;height:100%}revogr-viewport-scroll::-webkit-scrollbar{display:none;-webkit-appearance:none}revogr-viewport-scroll.colPinStart,revogr-viewport-scroll.colPinEnd{z-index:2}revogr-viewport-scroll.rgCol{flex-grow:1}revogr-viewport-scroll .content-wrapper{overflow:hidden}revogr-viewport-scroll .inner-content-table{display:flex;flex-direction:column;max-height:100%;width:100%;min-width:100%;position:relative;z-index:0}revogr-viewport-scroll .vertical-inner{overflow-y:auto;position:relative;width:100%;flex-grow:1;-ms-overflow-style:none;scrollbar-width:none;}revogr-viewport-scroll .vertical-inner::-webkit-scrollbar{display:none;-webkit-appearance:none}revogr-viewport-scroll .vertical-inner revogr-data,revogr-viewport-scroll .vertical-inner revogr-overlay-selection{height:100%}"
                            }
                        },
                        ia = pe(qo, [0, "revo-grid", {
                                rowHeaders: [4, "row-headers"],
                                frameSize: [2, "frame-size"],
                                rowSize: [2, "row-size"],
                                colSize: [2, "col-size"],
                                range: [4],
                                readonly: [4],
                                resize: [4],
                                canFocus: [4, "can-focus"],
                                useClipboard: [4, "use-clipboard"],
                                columns: [16],
                                source: [16],
                                pinnedTopSource: [16],
                                pinnedBottomSource: [16],
                                rowDefinitions: [16],
                                editors: [16],
                                plugins: [16],
                                columnTypes: [16],
                                theme: [1537],
                                rowClass: [513, "row-class"],
                                autoSizeColumn: [4, "auto-size-column"],
                                filter: [4],
                                trimmedRows: [16],
                                exporting: [4],
                                grouping: [16],
                                stretch: [8],
                                extraElements: [32]
                            },
                            [
                                [0, "internalRowDragStart", "onRowDragStarted"],
                                [0, "internalRowDragEnd", "onRowDragEnd"],
                                [0, "internalRowDrag", "onRowDrag"],
                                [0, "internalRowMouseMove", "onRowMouseMove"],
                                [0, "internalCellEdit", "onBeforeEdit"],
                                [0, "internalRangeDataApply", "onBeforeRangeEdit"],
                                [0, "internalSelectionChanged", "onRangeChanged"],
                                [0, "initialRowDropped", "onRowDropped"],
                                [0, "initialHeaderClick", "onHeaderClick"],
                                [0, "internalFocusCell", "onCellFocus"]
                            ]
                        ]),
                        oa = pe(Xo, [0, "revogr-clipboard", null, [
                            [4, "paste", "onPaste"],
                            [4, "copy", "copyStarted"]
                        ]]),
                        sa = pe(es, [0, "revogr-data", {
                            readonly: [4],
                            range: [4],
                            canDrag: [4, "can-drag"],
                            rowClass: [1, "row-class"],
                            rowSelectionStore: [16],
                            viewportRow: [16],
                            viewportCol: [16],
                            dimensionRow: [16],
                            colData: [16],
                            dataStore: [16]
                        }]),
                        aa = pe(gs, [0, "revogr-edit", {
                            editCell: [16],
                            column: [16],
                            editor: [16]
                        }]),
                        la = pe(vs, [0, "revogr-filter-panel", {
                                uuid: [1537],
                                filterTypes: [16],
                                filterNames: [16],
                                filterEntities: [16],
                                changes: [32]
                            },
                            [
                                [5, "mousedown", "onMouseDown"]
                            ]
                        ]),
                        ca = pe(Ls, [0, "revogr-focus", {
                            selectionStore: [16],
                            dimensionRow: [16],
                            dimensionCol: [16]
                        }]),
                        ua = pe(Ds, [0, "revogr-header", {
                            viewportCol: [16],
                            dimensionCol: [16],
                            selectionStore: [16],
                            parent: [1],
                            groups: [16],
                            groupingDepth: [2, "grouping-depth"],
                            canResize: [4, "can-resize"],
                            colData: [16],
                            columnFilter: [4, "column-filter"]
                        }]),
                        ha = pe(Bs, [0, "revogr-order-editor", {
                                parent: [16],
                                dimensionRow: [16],
                                dimensionCol: [16],
                                dataStore: [16]
                            },
                            [
                                [5, "mouseleave", "onMouseOut"],
                                [5, "mouseup", "onMouseUp"]
                            ]
                        ]),
                        da = pe(Xs, [4, "revogr-overlay-selection", {
                                readonly: [4],
                                range: [4],
                                canDrag: [4, "can-drag"],
                                useClipboard: [4, "use-clipboard"],
                                selectionStore: [16],
                                dimensionRow: [16],
                                dimensionCol: [16],
                                dataStore: [16],
                                colData: [16],
                                lastCell: [16],
                                editors: [16]
                            },
                            [
                                [5, "mousemove", "onMouseMove"],
                                [5, "mouseleave", "onMouseOut"],
                                [5, "mouseup", "onMouseUp"],
                                [0, "dragStartCell", "onCellDrag"],
                                [4, "keyup", "onKeyUp"],
                                [4, "keydown", "onKeyDown"]
                            ]
                        ]),
                        ga = pe(Ys, [0, "revogr-row-headers", {
                            height: [2],
                            dataPorts: [16],
                            headerProp: [16],
                            uiid: [1],
                            resize: [4],
                            rowHeaderColumn: [16]
                        }]),
                        fa = pe(ea, [0, "revogr-scroll-virtual", {
                            dimension: [1],
                            viewportStore: [16],
                            dimensionStore: [16]
                        }]),
                        pa = pe(ta, [0, "revogr-temp-range", {
                            selectionStore: [16],
                            dimensionRow: [16],
                            dimensionCol: [16]
                        }]),
                        va = pe(na, [4, "revogr-viewport-scroll", {
                            contentWidth: [2, "content-width"],
                            contentHeight: [2, "content-height"]
                        }]),
                        ma = e => {
                            "undefined" != typeof customElements && [ia, oa, sa, aa, la, ca, ua, ha, da, ga, fa, pa, va].forEach((t => {
                                customElements.get(t.is) || customElements.define(t.is, t, e)
                            }))
                        },
                        Ca = Symbol(),
                        wa = "update:modelValue",
                        ba = e => {
                            var t;
                            return (null === (t = e) || void 0 === t ? void 0 : t.split(" ")) || []
                        },
                        La = (e, t, r = []) => {
                            var n;
                            return [...Array.from((null === (n = e.value) || void 0 === n ? void 0 : n.classList) || []), ...r].filter(((e, r, n) => !t.has(e) && n.indexOf(e) === r))
                        },
                        xa = ((e, [...t] = [], r = {}) => {
                            const {
                                modelProp: n,
                                modelUpdateEvent: o
                            } = r, s = (0, i.defineComponent)(((t, {
                                attrs: r,
                                slots: s,
                                emit: a
                            }) => {
                                var l;
                                let c = t[n];
                                const u = (0, i.ref)(),
                                    h = new Set(ba(r.class)),
                                    d = e => {
                                        e.el && e.el.addEventListener(o.toLowerCase(), (e => {
                                            c = (null == e ? void 0 : e.target)[n], a(wa, c), a(o, e), e.stopImmediatePropagation()
                                        }))
                                    },
                                    g = (0, i.getCurrentInstance)(),
                                    f = (null === (l = null == g ? void 0 : g.appContext) || void 0 === l ? void 0 : l.provides.navManager) ? (0, i.inject)("navManager") : void 0;
                                return () => {
                                    ba(r.class).forEach((e => {
                                        h.add(e)
                                    }));
                                    const a = t.onClick;
                                    let l = {
                                        ref: u,
                                        class: La(u, h),
                                        onClick: e => {
                                            void 0 !== a && a(e), e.defaultPrevented || (e => {
                                                const {
                                                    routerLink: r
                                                } = t;
                                                if (!r) return;
                                                const n = Object.keys(t).filter((e => e.startsWith("router")));
                                                if (void 0 !== f) {
                                                    let r = {
                                                        event: e
                                                    };
                                                    n.forEach((e => {
                                                        r[e] = t[e]
                                                    })), f.navigate(r)
                                                } else console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.")
                                            })(e)
                                        },
                                        onVnodeBeforeMount: o ? d : void 0
                                    };
                                    for (const [e, r] of Object.entries(t)) r !== Ca && (l[e] = r);
                                    return n && (l = Object.assign(Object.assign({}, l), {
                                        [n]: t.modelValue !== Ca ? t.modelValue : c
                                    })), (0, i.h)(e, l, s.default && s.default())
                                }
                            }));
                            s.displayName = e, t.push("routerLink"), n && (t.push("modelValue"), s.emits = [wa, o]), s.props = {};
                            for (const e of t) s.props[e] = {
                                default: Ca
                            };
                            return s
                        })("revo-grid", ["rowHeaders", "frameSize", "rowSize", "colSize", "range", "readonly", "resize", "canFocus", "useClipboard", "columns", "source", "pinnedTopSource", "pinnedBottomSource", "rowDefinitions", "editors", "plugins", "columnTypes", "theme", "rowClass", "autoSizeColumn", "filter", "trimmedRows", "exporting", "grouping", "stretch", "beforeedit", "beforerangeedit", "afteredit", "beforeautofill", "beforeaange", "roworderchanged", "beforesourcesortingapply", "beforesortingapply", "beforesorting", "rowdragstart", "headerclick", "beforecellfocus", "beforefocuslost", "beforesourceset", "aftersourceset", "beforecolumnsset", "beforecolumnapplied", "aftercolumnsset", "beforefilterapply", "beforefiltertrimmed", "beforetrimmed", "aftertrimmed", "viewportscroll", "beforeexport", "beforeeditstart"]),
                        ya = (e, t, r) => {
                            if (!t) return null;
                            let n;
                            (null == t ? void 0 : t.childNodes.length) && (n = t.childNodes[0]), n || (n = document.createElement("span"), t.appendChild(n));
                            let o = n._vnode;
                            if (o)
                                for (const e in r) o.component.props[e] = r[e];
                            else {
                                const t = (0, i.createVNode)(e, r);
                                (0, i.render)(t, n)
                            }
                            return o
                        };
                    class Sa {
                        constructor(e, t, r, n) {
                            this.VueEditorConstructor = e, this.column = t, this.save = r, this.close = n, this.element = null, this.editCell = null
                        }
                        componentDidRender() {}
                        disconnectedCallback() {
                            var e;
                            null === (e = this.vueEl) || void 0 === e || e.$destroy(), this.vueEl = void 0
                        }
                        render(e) {
                            return e("span", {
                                ref: e => {
                                    this.vueEl = ya(this.VueEditorConstructor, e, Object.assign(Object.assign({}, this.editCell), {
                                        save: this.save,
                                        close: this.close
                                    }))
                                }
                            })
                        }
                    }
                    let _a = !1;
                    const Ea = (0, i.defineAsyncComponent)((() => new Promise((e => (!_a && n && (ma(), _a = !0), e(xa))))));
                    let ka = !1;
                    const Ra = {
                            install(e) {
                                ka || (ka = !0, e.component("vue-data-grid", Ea))
                            }
                        },
                        za = e => (t, r) => t("span", {
                            ref: t => ya(e, t, r)
                        }),
                        $a = ya,
                        Oa = e => function(t, r, n) {
                            return new Sa(e, t, r, n)
                        },
                        Fa = Ea
                },
                103: t => {
                    "use strict";
                    t.exports = e
                }
            },
            i = {};

        function o(e) {
            if (i[e]) return i[e].exports;
            var t = i[e] = {
                exports: {}
            };
            return n[e](t, t.exports, o), t.exports
        }
        return o.m = n, o.d = (e, t) => {
            for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce(((t, r) => (o.f[r](e, t), t)), [])), o.u = e => e + ".js", o.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), t = {}, r = "VGrid:", o.l = (e, n, i, s) => {
            if (t[e]) t[e].push(n);
            else {
                var a, l;
                if (void 0 !== i)
                    for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                        var h = c[u];
                        if (h.getAttribute("src") == e || h.getAttribute("data-webpack") == r + i) {
                            a = h;
                            break
                        }
                    }
                a || (l = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, o.nc && a.setAttribute("nonce", o.nc), a.setAttribute("data-webpack", r + i), a.src = e), t[e] = [n];
                var d = (r, n) => {
                        a.onerror = a.onload = null, clearTimeout(g);
                        var i = t[e];
                        if (delete t[e], a.parentNode && a.parentNode.removeChild(a), i && i.forEach((e => e(n))), r) return r(n)
                    },
                    g = setTimeout(d.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), l && document.head.appendChild(a)
            }
        }, o.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, (() => {
            var e;
            o.g.importScripts && (e = o.g.location + "");
            var t = o.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var r = t.getElementsByTagName("script");
                r.length && (e = r[r.length - 1].src)
            }
            // if (!e) throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
        })(), (() => {
            var e = {
                850: 0
            };
            o.f.j = (t, r) => {
                var n = o.o(e, t) ? e[t] : void 0;
                if (0 !== n)
                    if (n) r.push(n[2]);
                    else {
                        var i = new Promise(((r, i) => {
                            n = e[t] = [r, i]
                        }));
                        r.push(n[2] = i);
                        var s = o.p + o.u(t),
                            a = new Error;
                        o.l(s, (r => {
                            if (o.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                                var i = r && ("load" === r.type ? "missing" : r.type),
                                    s = r && r.target && r.target.src;
                                a.message = "Loading chunk " + t + " failed.\n(" + i + ": " + s + ")", a.name = "ChunkLoadError", a.type = i, a.request = s, n[1](a)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = (t, r) => {
                    for (var n, i, [s, a, l] = r, c = 0, u = []; c < s.length; c++) i = s[c], o.o(e, i) && e[i] && u.push(e[i][0]), e[i] = 0;
                    for (n in a) o.o(a, n) && (o.m[n] = a[n]);
                    for (l && l(o), t && t(r); u.length;) u.shift()()
                },
                r = self.webpackChunkVGrid = self.webpackChunkVGrid || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), o(504)
    })()
}));
/* jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a)
                    return k.call(a, b);
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c,
                d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h)
                    return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d,
                e,
                g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a)
                    e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c,
                d,
                f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b)
                        return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s,
                w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j), d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0, a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b,
                e,
                g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b)
                    return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b)
                    return l = !0, 0;
                var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b,
                d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b,
                        c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b))
                                        break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;
                        while (g--)
                            d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                            return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)
                        a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)
                        a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            } : function(b, c, g) {
                var h,
                    i,
                    j,
                    k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l,
                        o,
                        q,
                        r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++])
                            q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--)
                                    t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)
                    f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i,
                j,
                k,
                l,
                m,
                n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b)
                        return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a)
                            return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b,
                c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (n.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A,
        B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e,
                f;
            if (!a)
                return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b)
                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b)
                            n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2])
                        return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b,
                c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length)
                        f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1)
                            f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i,
                j,
                k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });
    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }
    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll)
                a.setTimeout(n.ready);
            else if (d.addEventListener)
                d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll && !function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(), n.ready()
                    }
                }()
            }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l))
        break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
        var a,
            b,
            c,
            e;
        c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    }), function() {
        var a = d.createElement("div");
        l.deleteExpando = !0;
        try {
            delete a.test
        } catch (b) {
            l.deleteExpando = !1
        }
        a = null
    }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else
                c = void 0;
        }
        return c
    }
    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function R(a, b, d, e) {
        if (M(a)) {
            var f,
                g,
                h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }
    function S(a, b, c) {
        if (M(a)) {
            var d,
                e,
                f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c,
                d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)
                c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    }), function() {
        var a;
        l.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b,
                c,
                e;
            return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
        }
    }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };
    function X(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c)
                    Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(n(a), c)
            })), b))
                for (; i > h; h++)
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    !function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;
    function ea(a, b) {
        var c,
            d,
            e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }
    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;
    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }
    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g))
                    n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
                    i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
                    while (f--)
                        i = i.lastChild;
                    if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                        while (f--)
                            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                    }
                    n.merge(q, i.childNodes), i.textContent = "";
                    while (i.firstChild)
                        i.removeChild(i.firstChild);
                    i = p.lastChild
                } else
                    q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1)
                e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
                f = 0;
                while (g = i[f++])
                    _.test(g.type || "") && c.push(g)
            }
        return i = null, p
    }
    !function() {
        var b,
            c,
            e = d.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return !0
    }
    function qa() {
        return !1
    }
    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function sa(a, b, c, d, e, f) {
        var g,
            h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b)
                sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1)
            e = qa;
        else if (!e)
            return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--)
                    f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--)
                            g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g,
                h,
                i,
                j,
                l,
                m,
                o,
                p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode)
                        p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped())
                    b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b,
                c,
                d,
                f,
                g,
                h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b,
                c,
                e,
                f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--)
                c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c,
                    e,
                    f,
                    g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d,
                e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c,
                d,
                e,
                f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++)
                        n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }
    function Ga(a, b) {
        var c,
            d,
            e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events)
                    n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }
    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e,
            g,
            h,
            i,
            j,
            k,
            m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
            });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++)
                g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++)
                    g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }
    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g)
                    d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++)
                        Fa(e, d[g]);
                else
                    Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja,
        Ka = {
            HTML: "block",
            BODY: "block"
        };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }
    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b)
                g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    !function() {
        var b,
            c,
            e,
            f,
            g,
            h,
            i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });
            function k() {
                var k,
                    l,
                    m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra,
        Sa,
        Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab)
            return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab)
                return a
    }
    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }
    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c)
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e,
                f,
                g,
                h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b,
                c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb,
        ib,
        jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;
    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }
    function mb(a, b) {
        var c,
            d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }
    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ob(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(o))
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o)
                    n.style(a, b, o[b])
            });
            for (d in o)
                g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function pb(a, b) {
        var c,
            d,
            e,
            f,
            g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function qb(a, b, c) {
        var d,
            e,
            f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e)
                    return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                    j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e)
                        return this;
                    for (e = !0; d > c; c++)
                        j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return X(c.elem, a, U.exec(b), c), c
            }]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
        },
        prefilters: [ob],
        prefilter: function(a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function() {
                    var b = qb(this, n.extend({}, a), f);
                    (e || n._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = n._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && kb.test(e) && d(g[e]);
                for (e = f.length; e--;)
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b,
                    c = n._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a,
            b = n.timers,
            c = 0;
        for (hb = n.now(); c < b.length; c++)
            a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(), hb = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        a.clearInterval(ib), ib = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }, function() {
        var a,
            b = d.createElement("input"),
            c = d.createElement("div"),
            e = d.createElement("select"),
            f = e.appendChild(d.createElement("option"));
        c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
    }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b,
                c,
                d,
                e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb,
        ub,
        vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d,
                e,
                f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c,
                d,
                e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e,
                f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d,
                e,
                f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b,
                    d,
                    e,
                    f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b,
                c,
                d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c,
            d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c,
            d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d,
                e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Vb(a, b) {
        var c,
            d,
            e = n.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }
    function Wb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0])
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function Xb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g))
                                    k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a)
                                    r[b] = [r[b], a[b]];
                            else
                                w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u)
                return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers)
                w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
                return w.abort();
            v = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u)
                    return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u))
                        throw x;
                    y(-1, x)
                }
            } else
                y(-1, "No Transport");
            function y(b, c, d, e) {
                var k,
                    s,
                    t,
                    v,
                    x,
                    y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }
    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a))
            return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c,
            d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc)
            fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f,
                        g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields)
                            g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d)
                        void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f,
                            i,
                            j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d)
                                4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b,
                c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc)
            return lc.apply(this, arguments);
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b,
                c,
                d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a,
                    b,
                    c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});
jQuery.noConflict();
;
/* jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function(a, b, c) {
    function d(c) {
        var d = b.console;
        f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }
    function e(b, c, e, f) {
        if (Object.defineProperty)
            try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
        a._definePropertyBroken = !0, b[c] = e
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
        f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {
            size: 1
        }).attr("size") && a.attrFn,
        h = a.attr,
        i = a.attrHooks.value && a.attrHooks.value.get || function() {
            return null
        },
        j = a.attrHooks.value && a.attrHooks.value.set || function() {
            return c
        },
        k = /^(?:input|button)$/i,
        l = /^[238]$/,
        m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
        var j = e.toLowerCase(),
            o = b && b.nodeType;
        return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
            get: function(b, d) {
                var e,
                    f = a.prop(b, d);
                return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
            },
            set: function(b, c, d) {
                var e;
                return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
            }
        }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
        get: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
        },
        set: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void (a.value = b))
        }
    };
    var o,
        p,
        q = a.fn.init,
        r = a.find,
        s = a.parseJSON,
        t = /^\s*</,
        u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
        w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, e, f) {
        var g,
            h;
        return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function(a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a))
            try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
        return r.apply(this, b)
    };
    var x;
    for (x in r)
        Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function(a) {
        return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function(a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
        function b(a, c) {
            return new b.fn.init(a, c)
        }
        a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f)
        }, b.fn.init.prototype = b.fn;
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function() {
        return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d && (a.cssHooks[c].get = function() {
            var a;
            return y = !0, a = d.apply(this, arguments), y = !1, a
        })
    }), a.swap = function(a, b, c, e) {
        var f,
            g,
            h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b)
            h[g] = a.style[g], a.style[g] = b[g];
        f = c.apply(a, e || []);
        for (g in b)
            a.style[g] = h[g];
        return f
    }, a.ajaxSetup({
        converters: {
            "text json": a.parseJSON
        }
    });
    var z = a.fn.data;
    a.fn.data = function(b) {
        var e,
            f,
            g = this[0];
        return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function(b, c, e, f) {
        c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
        var g,
            h,
            i,
            j,
            k = [];
        if (a.merge(k, a.buildFragment(b, c).childNodes), e)
            for (i = function(a) {
                return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
            }, g = 0; null != (h = k[g]); g++)
                a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
        return k
    });
    var B = a.event.add,
        C = a.event.remove,
        D = a.event.trigger,
        E = a.fn.toggle,
        F = a.fn.live,
        G = a.fn.die,
        H = a.fn.load,
        I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        J = new RegExp("\\b(?:" + I + ")\\b"),
        K = /(?:^|\s)hover(\.\S+|)\b/,
        L = function(b) {
            return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
        };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
        a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function(a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function(b, c) {
        a.fn[c] = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
        }
    }), a.fn.toggle = function(b, c) {
        if (!a.isFunction(b) || !a.isFunction(c))
            return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments,
            f = b.guid || a.guid++,
            g = 0,
            h = function(c) {
                var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
            };
        for (h.guid = f; g < e.length;)
            e[g++].guid = f;
        return this.click(h)
    }, a.fn.live = function(b, c, e) {
        return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function(b, c) {
        return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function(a, b, c, e) {
        return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function(b, c) {
        a.event.special[c] = {
            setup: function() {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                    a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                }), a._data(this, c, a.guid++)), !1
            },
            teardown: function() {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
            }
        }
    }), a.event.special.ready = {
        setup: function() {
            this === document && d("'ready' event is deprecated")
        }
    };
    var M = a.fn.andSelf || a.fn.addBack,
        N = a.fn.find;
    if (a.fn.andSelf = function() {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
    }, a.fn.find = function(a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
    }, a.Callbacks) {
        var O = a.Deferred,
            P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
        a.Deferred = function(b) {
            var c = O(),
                e = c.promise();
            return c.pipe = e.pipe = function() {
                var b = arguments;
                return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                    a.each(P, function(f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function() {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                        })
                    }), b = null
                }).promise()
            }, c.isResolved = function() {
                return d("deferred.isResolved is deprecated"), "resolved" === c.state()
            }, c.isRejected = function() {
                return d("deferred.isRejected is deprecated"), "rejected" === c.state()
            }, b && b.call(c, c), c
        }
    }
}(jQuery, window);
;
/* picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
        var b,
            c = document.createElement("source"),
            d = function(a) {
                var b,
                    d,
                    e = a.parentNode;
                "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function() {
                    e.removeChild(b)
                })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function() {
                    a.sizes = d
                }))
            },
            e = function() {
                var a,
                    b = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (a = 0; a < b.length; a++)
                    d(b[a])
            },
            f = function() {
                clearTimeout(b), b = setTimeout(e, 99)
            },
            g = a.matchMedia && matchMedia("(orientation: landscape)"),
            h = function() {
                f(), g && g.addListener && g.addListener(f)
            };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
    }())
}(window), function(a, b, c) {
    "use strict";
    function d(a) {
        return " " === a || " " === a || "\n" === a || "\f" === a || "\r" === a
    }
    function e(b, c) {
        var d = new a.Image;
        return d.onerror = function() {
            A[b] = !1, ba()
        }, d.onload = function() {
            A[b] = 1 === d.width, ba()
        }, d.src = c, "pending"
    }
    function f() {
        M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em
    }
    function g(a, b, c, d) {
        var e,
            f,
            g,
            h;
        return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c
    }
    function h(a) {
        var b,
            c = s.getSet(a),
            d = !1;
        "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
    }
    function i(a, b) {
        return a.res - b.res
    }
    function j(a, b, c) {
        var d;
        return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d
    }
    function k(a, b) {
        var c,
            d,
            e;
        if (a && b)
            for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
                if (a === s.makeUrl(e[c].url)) {
                    d = e[c];
                    break
                }
        return d
    }
    function l(a, b) {
        var c,
            d,
            e,
            f,
            g = a.getElementsByTagName("source");
        for (c = 0, d = g.length; d > c; c++)
            e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
                srcset: f,
                media: e.getAttribute("media"),
                type: e.getAttribute("type"),
                sizes: e.getAttribute("sizes")
            })
    }
    function m(a, b) {
        function c(b) {
            var c,
                d = b.exec(a.substring(m));
            return d ? (c = d[0], m += c.length, c) : void 0
        }
        function e() {
            var a,
                c,
                d,
                e,
                f,
                i,
                j,
                k,
                l,
                m = !1,
                o = {};
            for (e = 0; e < h.length; e++)
                f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
            m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
        }
        function f() {
            for (c(T), i = "", j = "in descriptor";;) {
                if (k = a.charAt(m), "in descriptor" === j)
                    if (d(k))
                        i && (h.push(i), i = "", j = "after descriptor");
                    else {
                        if ("," === k)
                            return m += 1, i && h.push(i), void e();
                        if ("(" === k)
                            i += k, j = "in parens";
                        else {
                            if ("" === k)
                                return i && h.push(i), void e();
                            i += k
                        }
                    }
                else if ("in parens" === j)
                    if (")" === k)
                        i += k, j = "in descriptor";
                    else {
                        if ("" === k)
                            return h.push(i), void e();
                        i += k
                    }
                else if ("after descriptor" === j)
                    if (d(k))
                        ;
                    else {
                        if ("" === k)
                            return void e();
                        j = "in descriptor", m -= 1
                    }
                m += 1
            }
        }
        for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
            if (c(U), m >= l)
                return n;
            g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f()
        }
    }
    function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f), f = "")
            }
            function c() {
                g[0] && (h.push(g), g = [])
            }
            for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
                if (e = a.charAt(j), "" === e)
                    return b(), c(), h;
                if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1, j += 2, b();
                        continue
                    }
                    j += 1
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;
                            continue
                        }
                        if (0 === i) {
                            b(), j += 1;
                            continue
                        }
                        e = " "
                    } else if ("(" === e)
                        i += 1;
                    else if (")" === e)
                        i -= 1;
                    else {
                        if ("," === e) {
                            b(), c(), j += 1;
                            continue
                        }
                        if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0, j += 2;
                            continue
                        }
                    }
                    f += e, j += 1
                }
            }
        }
        function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
        }
        var e,
            f,
            g,
            h,
            i,
            j,
            k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (f = b(a), g = f.length, e = 0; g > e; e++)
            if (h = f[e], i = h[h.length - 1], c(i)) {
                if (j = i, h.pop(), 0 === h.length)
                    return j;
                if (h = h.join(" "), s.matchesMedia(h))
                    return j
            }
        return "100vw"
    }
    b.createElement("picture");
    var o,
        p,
        q,
        r,
        s = {},
        t = !1,
        u = function() {},
        v = b.createElement("img"),
        w = v.getAttribute,
        x = v.setAttribute,
        y = v.removeAttribute,
        z = b.documentElement,
        A = {},
        B = {
            algorithm: ""
        },
        C = "data-pfsrc",
        D = C + "set",
        E = navigator.userAgent,
        F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        G = "currentSrc",
        H = /\s+\+?\d+(e\d+)?w/,
        I = /(\([^)]+\))?\s*(.+)/,
        J = a.picturefillCFG,
        K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        L = "font-size:100%!important;",
        M = !0,
        N = {},
        O = {},
        P = a.devicePixelRatio,
        Q = {
            px: 1,
            "in": 96
        },
        R = b.createElement("a"),
        S = !1,
        T = /^[ \t\n\r\u000c]+/,
        U = /^[, \t\n\r\u000c]+/,
        V = /^[^ \t\n\r\u000c]+/,
        W = /[,]+$/,
        X = /^\d+$/,
        Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        Z = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        $ = function(a) {
            var b = {};
            return function(c) {
                return c in b || (b[c] = a(c)), b[c]
            }
        },
        _ = function() {
            var a = /^([\d\.]+)(em|vw|px)$/,
                b = function() {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a;)
                        c = c.replace(a[b], a[++b]);
                    return c
                },
                c = $(function(a) {
                    return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function(b, d) {
                var e;
                if (!(b in N))
                    if (N[b] = !1, d && (e = b.match(a)))
                        N[b] = e[1] * Q[e[2]];
                    else
                        try {
                            N[b] = new Function("e", c(b))(Q)
                        } catch (f) {}
                return N[b]
            }
        }(),
        aa = function(a, b) {
            return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a
        },
        ba = function(a) {
            if (t) {
                var c,
                    d,
                    e,
                    f = a || {};
                if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
                    for (s.setupRun(f), S = !0, d = 0; e > d; d++)
                        s.fillImg(c[d], f);
                    s.teardownRun(f)
                }
            }
        };
    o = a.console && console.warn ? function(a) {
        console.warn(a)
    } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && !function(a) {
        v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture
    }(b.createElement("img")), s.supSrcset && !s.supSizes ? !function() {
        var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
            c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            d = b.createElement("img"),
            e = function() {
                var a = d.width;
                2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba)
            };
        d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c
    }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function(a) {
        return R.href = a, R.href
    }), s.qsa = function(a, b) {
        return "querySelector" in a ? a.querySelectorAll(b) : []
    }, s.matchesMedia = function() {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
            return !a || matchMedia(a).matches
        } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
    }, s.mMQ = function(a) {
        return a ? _(a) : !0
    }, s.calcLength = function(a) {
        var b = _(a, !0) || !1;
        return 0 > b && (b = !1), b
    }, s.supportsType = function(a) {
        return a ? A[a] : !0
    }, s.parseSize = $(function(a) {
        var b = (a || "").match(I);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }), s.parseSet = function(a) {
        return a.cands || (a.cands = m(a.srcset, a)), a.cands
    }, s.getEmValue = function() {
        var a;
        if (!p && (a = b.body)) {
            var c = b.createElement("div"),
                d = z.style.cssText,
                e = a.style.cssText;
            c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e
        }
        return p || 16
    }, s.calcListLength = function(a) {
        if (!(a in O) || B.uT) {
            var b = s.calcLength(n(a));
            O[a] = b ? b : Q.width
        }
        return O[a]
    }, s.setRes = function(a) {
        var b;
        if (a) {
            b = s.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++)
                aa(b[c], a.sizes)
        }
        return b
    }, s.setRes.res = aa, s.applySetCandidate = function(a, b) {
        if (a.length) {
            var c,
                d,
                e,
                f,
                h,
                k,
                l,
                m,
                n,
                o = b[s.ns],
                p = s.DPR;
            if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h)
                for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
                    if (c = a[d], c.res >= p) {
                        e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                        break
                    }
            h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b))
        }
    }, s.setSrc = function(a, b) {
        var c;
        a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
    }, s.getSet = function(a) {
        var b,
            c,
            d,
            e = !1,
            f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++)
            if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                "pending" === d && (c = d), e = c;
                break
            }
        return e
    }, s.parseSets = function(a, b, d) {
        var e,
            f,
            g,
            h,
            i = b && "PICTURE" === b.nodeName.toUpperCase(),
            j = a[s.ns];
        (j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
            srcset: j.srcset,
            sizes: w.call(a, "sizes")
        }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
            url: j.src,
            d: 1,
            set: f
        }))) : j.src && j.sets.push({
            srcset: j.src,
            sizes: null
        }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
    }, s.fillImg = function(a, b) {
        var c,
            d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
    }, s.setupRun = function() {
        (!S || M || P !== a.devicePixelRatio) && f()
    }, s.supPicture ? (ba = u, s.fillImg = u) : !function() {
        var c,
            d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            e = function() {
                var a = b.readyState || "";
                f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
            },
            f = setTimeout(e, b.body ? 9 : 99),
            g = function(a, b) {
                var c,
                    d,
                    e = function() {
                        var f = new Date - d;
                        b > f ? c = setTimeout(e, b - f) : (c = null, a())
                    };
                return function() {
                    d = new Date, c || (c = setTimeout(e, b))
                }
            },
            h = z.clientHeight,
            i = function() {
                M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs()
            };
        Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e)
    }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = {
        pf: s,
        push: function(a) {
            var b = a.shift();
            "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; J && J.length;)
        a.picturefillCFG.push(J.shift());
    a.picturefill = ba, "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function() {
        return ba
    }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);
;
/* noUiSlider - 7.0.10 - 2014-12-27 14:50:47 */
!function() {
    "use strict";
    function a(a) {
        return a.split("").reverse().join("")
    }
    function b(a, b) {
        return a.substring(0, b.length) === b
    }
    function c(a, b) {
        return a.slice(-1 * b.length) === b
    }
    function d(a, b, c) {
        if ((a[b] || a[c]) && a[b] === a[c])
            throw new Error(b)
    }
    function e(a) {
        return "number" == typeof a && isFinite(a)
    }
    function f(a, b) {
        var c = Math.pow(10, b);
        return (Math.round(a * c) / c).toFixed(b)
    }
    function g(b, c, d, g, h, i, j, k, l, m, n, o) {
        var p,
            q,
            r,
            s = o,
            t = "",
            u = "";
        return i && (o = i(o)), e(o) ? (b !== !1 && 0 === parseFloat(o.toFixed(b)) && (o = 0), 0 > o && (p = !0, o = Math.abs(o)), b !== !1 && (o = f(o, b)), o = o.toString(), -1 !== o.indexOf(".") ? (q = o.split("."), r = q[0], d && (t = d + q[1])) : r = o, c && (r = a(r).match(/.{1,3}/g), r = a(r.join(a(c)))), p && k && (u += k), g && (u += g), p && l && (u += l), u += r, u += t, h && (u += h), m && (u = m(u, s)), u) : !1
    }
    function h(a, d, f, g, h, i, j, k, l, m, n, o) {
        var p,
            q = "";
        return n && (o = n(o)), o && "string" == typeof o ? (k && b(o, k) && (o = o.replace(k, ""), p = !0), g && b(o, g) && (o = o.replace(g, "")), l && b(o, l) && (o = o.replace(l, ""), p = !0), h && c(o, h) && (o = o.slice(0, -1 * h.length)), d && (o = o.split(d).join("")), f && (o = o.replace(f, ".")), p && (q += "-"), q += o, q = q.replace(/[^0-9\.\-.]/g, ""), "" === q ? !1 : (q = Number(q), j && (q = j(q)), e(q) ? q : !1)) : !1
    }
    function i(a) {
        var b,
            c,
            e,
            f = {};
        for (b = 0; b < l.length; b += 1)
            if (c = l[b], e = a[c], void 0 === e)
                f[c] = "negative" !== c || f.negativeBefore ? "mark" === c && "." !== f.thousand ? "." : !1 : "-";
            else if ("decimals" === c) {
                if (!(e >= 0 && 8 > e))
                    throw new Error(c);
                f[c] = e
            } else if ("encoder" === c || "decoder" === c || "edit" === c || "undo" === c) {
                if ("function" != typeof e)
                    throw new Error(c);
                f[c] = e
            } else {
                if ("string" != typeof e)
                    throw new Error(c);
                f[c] = e
            }
        return d(f, "mark", "thousand"), d(f, "prefix", "negative"), d(f, "prefix", "negativeBefore"), f
    }
    function j(a, b, c) {
        var d,
            e = [];
        for (d = 0; d < l.length; d += 1)
            e.push(a[l[d]]);
        return e.push(c), b.apply("", e)
    }
    function k(a) {
        return this instanceof k ? void ("object" == typeof a && (a = i(a), this.to = function(b) {
            return j(a, g, b)
        }, this.from = function(b) {
            return j(a, h, b)
        })) : new k(a)
    }
    var l = ["decimals", "thousand", "mark", "prefix", "postfix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
    window.wNumb = k
}(), function(a) {
    "use strict";
    function b(b) {
        return b instanceof a || a.zepto && a.zepto.isZ(b)
    }
    function c(b, c) {
        return "string" == typeof b && 0 === b.indexOf("-inline-") ? (this.method = c || "html", this.target = this.el = a(b.replace("-inline-", "") || "<div/>"), !0) : void 0
    }
    function d(b) {
        if ("string" == typeof b && 0 !== b.indexOf("-")) {
            this.method = "val";
            var c = document.createElement("input");
            return c.name = b, c.type = "hidden", this.target = this.el = a(c), !0
        }
    }
    function e(a) {
        return "function" == typeof a ? (this.target = !1, this.method = a, !0) : void 0
    }
    function f(a, c) {
        return b(a) && !c ? (a.is("input, select, textarea") ? (this.method = "val", this.target = a.on("change.liblink", this.changeHandler)) : (this.target = a, this.method = "html"), !0) : void 0
    }
    function g(a, c) {
        return b(a) && ("function" == typeof c || "string" == typeof c && a[c]) ? (this.method = c, this.target = a, !0) : void 0
    }
    function h(b, c, d) {
        var e = this,
            f = !1;
        if (this.changeHandler = function(b) {
            var c = e.formatInstance.from(a(this).val());
            return c === !1 || isNaN(c) ? (a(this).val(e.lastSetValue), !1) : void e.changeHandlerMethod.call("", b, c)
        }, this.el = !1, this.formatInstance = d, a.each(k, function(a, d) {
            return f = d.call(e, b, c), !f
        }), !f)
            throw new RangeError("(Link) Invalid Link.")
    }
    function i(a) {
        this.items = [], this.elements = [], this.origin = a
    }
    function j(b, c, d, e) {
        0 === b && (b = this.LinkDefaultFlag), this.linkAPI || (this.linkAPI = {}), this.linkAPI[b] || (this.linkAPI[b] = new i(this));
        var f = new h(c, d, e || this.LinkDefaultFormatter);
        f.target || (f.target = a(this)), f.changeHandlerMethod = this.LinkConfirm(b, f.el), this.linkAPI[b].push(f, f.el), this.LinkUpdate(b)
    }
    var k = [c, d, e, f, g];
    h.prototype.set = function(a) {
        var b = Array.prototype.slice.call(arguments),
            c = b.slice(1);
        this.lastSetValue = this.formatInstance.to(a), c.unshift(this.lastSetValue), ("function" == typeof this.method ? this.method : this.target[this.method]).apply(this.target, c)
    }, i.prototype.push = function(a, b) {
        this.items.push(a), b && this.elements.push(b)
    }, i.prototype.reconfirm = function(a) {
        var b;
        for (b = 0; b < this.elements.length; b += 1)
            this.origin.LinkConfirm(a, this.elements[b])
    }, i.prototype.remove = function() {
        var a;
        for (a = 0; a < this.items.length; a += 1)
            this.items[a].target.off(".liblink");
        for (a = 0; a < this.elements.length; a += 1)
            this.elements[a].remove()
    }, i.prototype.change = function(a) {
        if (this.origin.LinkIsEmitting)
            return !1;
        this.origin.LinkIsEmitting = !0;
        var b,
            c = Array.prototype.slice.call(arguments, 1);
        for (c.unshift(a), b = 0; b < this.items.length; b += 1)
            this.items[b].set.apply(this.items[b], c);
        this.origin.LinkIsEmitting = !1
    }, a.fn.Link = function(b) {
        var c = this;
        if (b === !1)
            return c.each(function() {
                this.linkAPI && (a.map(this.linkAPI, function(a) {
                    a.remove()
                }), delete this.linkAPI)
            });
        if (void 0 === b)
            b = 0;
        else if ("string" != typeof b)
            throw new Error("Flag must be string.");
        return {
            to: function(a, d, e) {
                return c.each(function() {
                    j.call(this, b, a, d, e)
                })
            }
        }
    }
}(window.jQuery || window.Zepto), function(a) {
    "use strict";
    function b(b) {
        return a.grep(b, function(c, d) {
            return d === a.inArray(c, b)
        })
    }
    function c(a, b) {
        return Math.round(a / b) * b
    }
    function d(a) {
        return "number" == typeof a && !isNaN(a) && isFinite(a)
    }
    function e(a) {
        var b = Math.pow(10, 7);
        return Number((Math.round(a * b) / b).toFixed(7))
    }
    function f(a, b, c) {
        a.addClass(b), setTimeout(function() {
            a.removeClass(b)
        }, c)
    }
    function g(a) {
        return Math.max(Math.min(a, 100), 0)
    }
    function h(b) {
        return a.isArray(b) ? b : [b]
    }
    function i(a) {
        var b = a.split(".");
        return b.length > 1 ? b[1].length : 0
    }
    function j(a, b) {
        return 100 / (b - a)
    }
    function k(a, b) {
        return 100 * b / (a[1] - a[0])
    }
    function l(a, b) {
        return k(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0])
    }
    function m(a, b) {
        return b * (a[1] - a[0]) / 100 + a[0]
    }
    function n(a, b) {
        for (var c = 1; a >= b[c];)
            c += 1;
        return c
    }
    function o(a, b, c) {
        if (c >= a.slice(-1)[0])
            return 100;
        var d,
            e,
            f,
            g,
            h = n(c, a);
        return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + l([d, e], c) / j(f, g)
    }
    function p(a, b, c) {
        if (c >= 100)
            return a.slice(-1)[0];
        var d,
            e,
            f,
            g,
            h = n(c, b);
        return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], m([d, e], (c - f) * j(f, g))
    }
    function q(a, b, d, e) {
        if (100 === e)
            return e;
        var f,
            g,
            h = n(e, a);
        return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : b[h - 1] ? a[h - 1] + c(e - a[h - 1], b[h - 1]) : e
    }
    function r(a, b, c) {
        var e;
        if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b))
            throw new Error("noUiSlider: 'range' contains invalid value.");
        if (e = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !d(e) || !d(b[0]))
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        c.xPct.push(e), c.xVal.push(b[0]), e ? c.xSteps.push(isNaN(b[1]) ? !1 : b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1])
    }
    function s(a, b, c) {
        return b ? void (c.xSteps[a] = k([c.xVal[a], c.xVal[a + 1]], b) / j(c.xPct[a], c.xPct[a + 1])) : !0
    }
    function t(a, b, c, d) {
        this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.snap = b, this.direction = c;
        var e,
            f = [];
        for (e in a)
            a.hasOwnProperty(e) && f.push([a[e], e]);
        for (f.sort(function(a, b) {
            return a[0] - b[0]
        }), e = 0; e < f.length; e++)
            r(f[e][1], f[e][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++)
            s(e, this.xNumSteps[e], this)
    }
    function u(a, b) {
        if (!d(b))
            throw new Error("noUiSlider: 'step' is not numeric.");
        a.singleStep = b
    }
    function v(b, c) {
        if ("object" != typeof c || a.isArray(c))
            throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === c.min || void 0 === c.max)
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        b.spectrum = new t(c, b.snap, b.dir, b.singleStep)
    }
    function w(b, c) {
        if (c = h(c), !a.isArray(c) || !c.length || c.length > 2)
            throw new Error("noUiSlider: 'start' option is incorrect.");
        b.handles = c.length, b.start = c
    }
    function x(a, b) {
        if (a.snap = b, "boolean" != typeof b)
            throw new Error("noUiSlider: 'snap' option must be a boolean.")
    }
    function y(a, b) {
        if (a.animate = b, "boolean" != typeof b)
            throw new Error("noUiSlider: 'animate' option must be a boolean.")
    }
    function z(a, b) {
        if ("lower" === b && 1 === a.handles)
            a.connect = 1;
        else if ("upper" === b && 1 === a.handles)
            a.connect = 2;
        else if (b === !0 && 2 === a.handles)
            a.connect = 3;
        else {
            if (b !== !1)
                throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            a.connect = 0
        }
    }
    function A(a, b) {
        switch (b) {
        case "horizontal":
            a.ort = 0;
            break;
        case "vertical":
            a.ort = 1;
            break;
        default:
            throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }
    function B(a, b) {
        if (!d(b))
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        if (a.margin = a.spectrum.getMargin(b), !a.margin)
            throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
    }
    function C(a, b) {
        if (!d(b))
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (a.limit = a.spectrum.getMargin(b), !a.limit)
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
    }
    function D(a, b) {
        switch (b) {
        case "ltr":
            a.dir = 0;
            break;
        case "rtl":
            a.dir = 1, a.connect = [0, 2, 1, 3][a.connect];
            break;
        default:
            throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }
    function E(a, b) {
        if ("string" != typeof b)
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var c = b.indexOf("tap") >= 0,
            d = b.indexOf("drag") >= 0,
            e = b.indexOf("fixed") >= 0,
            f = b.indexOf("snap") >= 0;
        a.events = {
            tap: c || f,
            drag: d,
            fixed: e,
            snap: f
        }
    }
    function F(a, b) {
        if (a.format = b, "function" == typeof b.to && "function" == typeof b.from)
            return !0;
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
    }
    function G(b) {
        var c,
            d = {
                margin: 0,
                limit: 0,
                animate: !0,
                format: Z
            };
        return c = {
            step: {
                r: !1,
                t: u
            },
            start: {
                r: !0,
                t: w
            },
            connect: {
                r: !0,
                t: z
            },
            direction: {
                r: !0,
                t: D
            },
            snap: {
                r: !1,
                t: x
            },
            animate: {
                r: !1,
                t: y
            },
            range: {
                r: !0,
                t: v
            },
            orientation: {
                r: !1,
                t: A
            },
            margin: {
                r: !1,
                t: B
            },
            limit: {
                r: !1,
                t: C
            },
            behaviour: {
                r: !0,
                t: E
            },
            format: {
                r: !1,
                t: F
            }
        }, b = a.extend({
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal"
        }, b), a.each(c, function(a, c) {
            if (void 0 === b[a]) {
                if (c.r)
                    throw new Error("noUiSlider: '" + a + "' is required.");
                return !0
            }
            c.t(d, b[a])
        }), d.style = d.ort ? "top" : "left", d
    }
    function H(a, b, c) {
        var d = a + b[0],
            e = a + b[1];
        return c ? (0 > d && (e += Math.abs(d)), e > 100 && (d -= e - 100), [g(d), g(e)]) : [d, e]
    }
    function I(a) {
        a.preventDefault();
        var b,
            c,
            d = 0 === a.type.indexOf("touch"),
            e = 0 === a.type.indexOf("mouse"),
            f = 0 === a.type.indexOf("pointer"),
            g = a;
        return 0 === a.type.indexOf("MSPointer") && (f = !0), a.originalEvent && (a = a.originalEvent), d && (b = a.changedTouches[0].pageX, c = a.changedTouches[0].pageY), (e || f) && (f || void 0 !== window.pageXOffset || (window.pageXOffset = document.documentElement.scrollLeft, window.pageYOffset = document.documentElement.scrollTop), b = a.clientX + window.pageXOffset, c = a.clientY + window.pageYOffset), g.points = [b, c], g.cursor = e, g
    }
    function J(b, c) {
        var d = a("<div><div/></div>").addClass(Y[2]),
            e = ["-lower", "-upper"];
        return b && e.reverse(), d.children().addClass(Y[3] + " " + Y[3] + e[c]), d
    }
    function K(a, b, c) {
        switch (a) {
        case 1:
            b.addClass(Y[7]), c[0].addClass(Y[6]);
            break;
        case 3:
            c[1].addClass(Y[6]);
        case 2:
            c[0].addClass(Y[7]);
        case 0:
            b.addClass(Y[6])
        }
    }
    function L(a, b, c) {
        var d,
            e = [];
        for (d = 0; a > d; d += 1)
            e.push(J(b, d).appendTo(c));
        return e
    }
    function M(b, c, d) {
        return d.addClass([Y[0], Y[8 + b], Y[4 + c]].join(" ")), a("<div/>").appendTo(d).addClass(Y[1])
    }
    function N(b, c, d) {
        function e() {
            return C[["width", "height"][c.ort]]()
        }
        function j(a) {
            var b,
                c = [E.val()];
            for (b = 0; b < a.length; b += 1)
                E.trigger(a[b], c)
        }
        function k(a) {
            return 1 === a.length ? a[0] : c.dir ? a.reverse() : a
        }
        function l(a) {
            return function(b, c) {
                E.val([a ? null : c, a ? c : null], !0)
            }
        }
        function m(b) {
            var c = a.inArray(b, N);
            E[0].linkAPI && E[0].linkAPI[b] && E[0].linkAPI[b].change(J[c], D[c].children(), E)
        }
        function n(b, d) {
            var e = a.inArray(b, N);
            return d && d.appendTo(D[e].children()), c.dir && c.handles > 1 && (e = 1 === e ? 0 : 1), l(e)
        }
        function o() {
            var a,
                b;
            for (a = 0; a < N.length; a += 1)
                this.linkAPI && this.linkAPI[b = N[a]] && this.linkAPI[b].reconfirm(b)
        }
        function p(a, b, d, e) {
            return a = a.replace(/\s/g, W + " ") + W, b.on(a, function(a) {
                return E.attr("disabled") ? !1 : E.hasClass(Y[14]) ? !1 : (a = I(a), a.calcPoint = a.points[c.ort], void d(a, e))
            })
        }
        function q(a, b) {
            var c,
                d = b.handles || D,
                f = !1,
                g = 100 * (a.calcPoint - b.start) / e(),
                h = d[0][0] !== D[0][0] ? 1 : 0;
            c = H(g, b.positions, d.length > 1), f = v(d[0], c[h], 1 === d.length), d.length > 1 && (f = v(d[1], c[h ? 0 : 1], !1) || f), f && j(["slide"])
        }
        function r(b) {
            a("." + Y[15]).removeClass(Y[15]), b.cursor && a("body").css("cursor", "").off(W), U.off(W), E.removeClass(Y[12]), j(["set", "change"])
        }
        function s(b, c) {
            1 === c.handles.length && c.handles[0].children().addClass(Y[15]), b.stopPropagation(), p(X.move, U, q, {
                start: b.calcPoint,
                handles: c.handles,
                positions: [F[0], F[D.length - 1]]
            }), p(X.end, U, r, null), b.cursor && (a("body").css("cursor", a(b.target).css("cursor")), D.length > 1 && E.addClass(Y[12]), a("body").on("selectstart" + W, !1))
        }
        function t(b) {
            var d,
                g = b.calcPoint,
                h = 0;
            b.stopPropagation(), a.each(D, function() {
                h += this.offset()[c.style]
            }), h = h / 2 > g || 1 === D.length ? 0 : 1, g -= C.offset()[c.style], d = 100 * g / e(), c.events.snap || f(E, Y[14], 300), v(D[h], d), j(["slide", "set", "change"]), c.events.snap && s(b, {
                handles: [D[h]]
            })
        }
        function u(a) {
            var b,
                c;
            if (!a.fixed)
                for (b = 0; b < D.length; b += 1)
                    p(X.start, D[b].children(), s, {
                        handles: [D[b]]
                    });
            a.tap && p(X.start, C, t, {
                handles: D
            }), a.drag && (c = C.find("." + Y[7]).addClass(Y[10]), a.fixed && (c = c.add(C.children().not(c).children())), p(X.start, c, s, {
                handles: D
            }))
        }
        function v(a, b, d) {
            var e = a[0] !== D[0][0] ? 1 : 0,
                f = F[0] + c.margin,
                h = F[1] - c.margin,
                i = F[0] + c.limit,
                j = F[1] - c.limit;
            return D.length > 1 && (b = e ? Math.max(b, f) : Math.min(b, h)), d !== !1 && c.limit && D.length > 1 && (b = e ? Math.min(b, i) : Math.max(b, j)), b = G.getStep(b), b = g(parseFloat(b.toFixed(7))), b === F[e] ? !1 : (a.css(c.style, b + "%"), a.is(":first-child") && a.toggleClass(Y[17], b > 50), F[e] = b, J[e] = G.fromStepping(b), m(N[e]), !0)
        }
        function w(a, b) {
            var d,
                e,
                f;
            for (c.limit && (a += 1), d = 0; a > d; d += 1)
                e = d % 2, f = b[e], null !== f && f !== !1 && ("number" == typeof f && (f = String(f)), f = c.format.from(f), (f === !1 || isNaN(f) || v(D[e], G.toStepping(f), d === 3 - c.dir) === !1) && m(N[e]))
        }
        function x(a) {
            if (E[0].LinkIsEmitting)
                return this;
            var b,
                d = h(a);
            return c.dir && c.handles > 1 && d.reverse(), c.animate && -1 !== F[0] && f(E, Y[14], 300), b = D.length > 1 ? 3 : 1, 1 === d.length && (b = 1), w(b, d), j(["set"]), this
        }
        function y() {
            var a,
                b = [];
            for (a = 0; a < c.handles; a += 1)
                b[a] = c.format.to(J[a]);
            return k(b)
        }
        function z() {
            return a(this).off(W).removeClass(Y.join(" ")).empty(), delete this.LinkUpdate, delete this.LinkConfirm, delete this.LinkDefaultFormatter, delete this.LinkDefaultFlag, delete this.reappend, delete this.vGet, delete this.vSet, delete this.getCurrentStep, delete this.getInfo, delete this.destroy, d
        }
        function A() {
            var b = a.map(F, function(a, b) {
                var c = G.getApplicableStep(a),
                    d = i(String(c[2])),
                    e = J[b],
                    f = 100 === a ? null : c[2],
                    g = Number((e - c[2]).toFixed(d)),
                    h = 0 === a ? null : g >= c[1] ? c[2] : c[0] || !1;
                return [[h, f]]
            });
            return k(b)
        }
        function B() {
            return d
        }
        var C,
            D,
            E = a(b),
            F = [-1, -1],
            G = c.spectrum,
            J = [],
            N = ["lower", "upper"].slice(0, c.handles);
        if (c.dir && N.reverse(), b.LinkUpdate = m, b.LinkConfirm = n, b.LinkDefaultFormatter = c.format, b.LinkDefaultFlag = "lower", b.reappend = o, E.hasClass(Y[0]))
            throw new Error("Slider was already initialized.");
        C = M(c.dir, c.ort, E), D = L(c.handles, c.dir, C), K(c.connect, E, D), u(c.events), b.vSet = x, b.vGet = y, b.destroy = z, b.getCurrentStep = A, b.getOriginalOptions = B, b.getInfo = function() {
            return [G, c.style, c.ort]
        }, E.val(c.start)
    }
    function O(a) {
        var b = G(a, this);
        return this.each(function() {
            N(this, b, a)
        })
    }
    function P(b) {
        return this.each(function() {
            if (!this.destroy)
                return void a(this).noUiSlider(b);
            var c = a(this).val(),
                d = this.destroy(),
                e = a.extend({}, d, b);
            a(this).noUiSlider(e), this.reappend(), d.start === e.start && a(this).val(c)
        })
    }
    function Q() {
        return this[0][arguments.length ? "vSet" : "vGet"].apply(this[0], arguments)
    }
    function R(b, c, d, e) {
        if ("range" === c || "steps" === c)
            return b.xVal;
        if ("count" === c) {
            var f,
                g = 100 / (d - 1),
                h = 0;
            for (d = []; (f = h++ * g) <= 100;)
                d.push(f);
            c = "positions"
        }
        return "positions" === c ? a.map(d, function(a) {
            return b.fromStepping(e ? b.getStep(a) : a)
        }) : "values" === c ? e ? a.map(d, function(a) {
            return b.fromStepping(b.getStep(b.toStepping(a)))
        }) : d : void 0
    }
    function S(c, d, e, f) {
        var g = c.direction,
            h = {},
            i = c.xVal[0],
            j = c.xVal[c.xVal.length - 1],
            k = !1,
            l = !1,
            m = 0;
        return c.direction = 0, f = b(f.slice().sort(function(a, b) {
            return a - b
        })), f[0] !== i && (f.unshift(i), k = !0), f[f.length - 1] !== j && (f.push(j), l = !0), a.each(f, function(b) {
            var g,
                i,
                j,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u = f[b],
                v = f[b + 1];
            if ("steps" === e && (g = c.xNumSteps[b]), g || (g = v - u), u !== !1 && void 0 !== v)
                for (i = u; v >= i; i += g) {
                    for (n = c.toStepping(i), o = n - m, r = o / d, s = Math.round(r), t = o / s, j = 1; s >= j; j += 1)
                        p = m + j * t, h[p.toFixed(5)] = ["x", 0];
                    q = a.inArray(i, f) > -1 ? 1 : "steps" === e ? 2 : 0, !b && k && (q = 0), i === v && l || (h[n.toFixed(5)] = [i, q]), m = n
                }
        }), c.direction = g, h
    }
    function T(b, c, d, e, f, g) {
        function h(a) {
            return ["-normal", "-large", "-sub"][a]
        }
        function i(a, c, d) {
            return 'class="' + c + " " + c + "-" + k + " " + c + h(d[1], d[0]) + '" style="' + b + ": " + a + '%"'
        }
        function j(a, b) {
            d && (a = 100 - a), b[1] = b[1] && f ? f(b[0], b[1]) : b[1], l.append("<div " + i(a, "noUi-marker", b) + "></div>"), b[1] && l.append("<div " + i(a, "noUi-value", b) + ">" + g.to(b[0]) + "</div>")
        }
        var k = ["horizontal", "vertical"][c],
            l = a("<div/>");
        return l.addClass("noUi-pips noUi-pips-" + k), a.each(e, j), l
    }
    var U = a(document),
        V = a.fn.val,
        W = ".nui",
        X = window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        },
        Y = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"];
    t.prototype.getMargin = function(a) {
        return 2 === this.xPct.length ? k(this.xVal, a) : !1
    }, t.prototype.toStepping = function(a) {
        return a = o(this.xVal, this.xPct, a), this.direction && (a = 100 - a), a
    }, t.prototype.fromStepping = function(a) {
        return this.direction && (a = 100 - a), e(p(this.xVal, this.xPct, a))
    }, t.prototype.getStep = function(a) {
        return this.direction && (a = 100 - a), a = q(this.xPct, this.xSteps, this.snap, a), this.direction && (a = 100 - a), a
    }, t.prototype.getApplicableStep = function(a) {
        var b = n(a, this.xPct),
            c = 100 === a ? 2 : 1;
        return [this.xNumSteps[b - 2], this.xVal[b - c], this.xNumSteps[b - c]]
    }, t.prototype.convert = function(a) {
        return this.getStep(this.toStepping(a))
    };
    var Z = {
        to: function(a) {
            return a.toFixed(2)
        },
        from: Number
    };
    a.fn.val = function(b) {
        function c(a) {
            return a.hasClass(Y[0]) ? Q : V
        }
        if (!arguments.length) {
            var d = a(this[0]);
            return c(d).call(d)
        }
        var e = a.isFunction(b);
        return this.each(function(d) {
            var f = b,
                g = a(this);
            e && (f = b.call(this, d, g.val())), c(g).call(g, f)
        })
    }, a.fn.noUiSlider = function(a, b) {
        switch (a) {
        case "step":
            return this[0].getCurrentStep();
        case "options":
            return this[0].getOriginalOptions()
        }
        return (b ? P : O).call(this, a)
    }, a.fn.noUiSlider_pips = function(b) {
        var c = b.mode,
            d = b.density || 1,
            e = b.filter || !1,
            f = b.values || !1,
            g = b.format || {
                to: Math.round
            },
            h = b.stepped || !1;
        return this.each(function() {
            var b = this.getInfo(),
                i = R(b[0], c, f, h),
                j = S(b[0], d, c, i);
            return a(this).append(T(b[1], b[2], b[0].direction, j, e, g))
        })
    }
}(window.jQuery || window.Zepto);
;
!function(a) {
    "undefined" == typeof a.fn.each2 && a.extend(a.fn, {
        each2: function(b) {
            for (var c = a([0]), d = -1, e = this.length; ++d < e && (c.context = c[0] = this[d]) && b.call(c[0], d, c) !== !1;)
                ;
            return this
        }
    })
}(jQuery), function(a, b) {
    "use strict";
    function n(b) {
        var c = a(document.createTextNode(""));
        b.before(c), c.before(b), c.remove()
    }
    function o(a) {
        function b(a) {
            return m[a] || a
        }
        return a.replace(/[^\u0000-\u007E]/g, b)
    }
    function p(a, b) {
        for (var c = 0, d = b.length; d > c; c += 1)
            if (r(a, b[c]))
                return c;
        return -1
    }
    function q() {
        var b = a(l);
        b.appendTo(document.body);
        var c = {
            width: b.width() - b[0].clientWidth,
            height: b.height() - b[0].clientHeight
        };
        return b.remove(), c
    }
    function r(a, c) {
        return a === c ? !0 : a === b || c === b ? !1 : null === a || null === c ? !1 : a.constructor === String ? a + "" == c + "" : c.constructor === String ? c + "" == a + "" : !1
    }
    function s(a, b, c) {
        var d,
            e,
            f;
        if (null === a || a.length < 1)
            return [];
        for (d = a.split(b), e = 0, f = d.length; f > e; e += 1)
            d[e] = c(d[e]);
        return d
    }
    function t(a) {
        return a.outerWidth(!1) - a.width()
    }
    function u(c) {
        var d = "keyup-change-value";
        c.on("keydown", function() {
            a.data(c, d) === b && a.data(c, d, c.val())
        }), c.on("keyup", function() {
            var e = a.data(c, d);
            e !== b && c.val() !== e && (a.removeData(c, d), c.trigger("keyup-change"))
        })
    }
    function v(c) {
        c.on("mousemove", function(c) {
            var d = h;
            (d === b || d.x !== c.pageX || d.y !== c.pageY) && a(c.target).trigger("mousemove-filtered", c)
        })
    }
    function w(a, c, d) {
        d = d || b;
        var e;
        return function() {
            var b = arguments;
            window.clearTimeout(e), e = window.setTimeout(function() {
                c.apply(d, b)
            }, a)
        }
    }
    function x(a, b) {
        var c = w(a, function(a) {
            b.trigger("scroll-debounced", a)
        });
        b.on("scroll", function(a) {
            p(a.target, b.get()) >= 0 && c(a)
        })
    }
    function y(a) {
        a[0] !== document.activeElement && window.setTimeout(function() {
            var d,
                b = a[0],
                c = a.val().length;
            a.focus();
            var e = b.offsetWidth > 0 || b.offsetHeight > 0;
            e && b === document.activeElement && (b.setSelectionRange ? b.setSelectionRange(c, c) : b.createTextRange && (d = b.createTextRange(), d.collapse(!1), d.select()))
        }, 0)
    }
    function z(b) {
        b = a(b)[0];
        var c = 0,
            d = 0;
        if ("selectionStart" in b)
            c = b.selectionStart, d = b.selectionEnd - c;
        else if ("selection" in document) {
            b.focus();
            var e = document.selection.createRange();
            d = document.selection.createRange().text.length, e.moveStart("character", -b.value.length), c = e.text.length - d
        }
        return {
            offset: c,
            length: d
        }
    }
    function A(a) {
        a.preventDefault(), a.stopPropagation()
    }
    function B(a) {
        a.preventDefault(), a.stopImmediatePropagation()
    }
    function C(b) {
        if (!g) {
            var c = b[0].currentStyle || window.getComputedStyle(b[0], null);
            g = a(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: c.fontSize,
                fontFamily: c.fontFamily,
                fontStyle: c.fontStyle,
                fontWeight: c.fontWeight,
                letterSpacing: c.letterSpacing,
                textTransform: c.textTransform,
                whiteSpace: "nowrap"
            }), g.attr("class", "select2-sizer"), a(document.body).append(g)
        }
        return g.text(b.val()), g.width()
    }
    function D(b, c, d) {
        var e,
            g,
            f = [];
        e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function() {
            0 === this.indexOf("select2-") && f.push(this)
        })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each2(function() {
            0 !== this.indexOf("select2-") && (g = d(this), g && f.push(g))
        })), b.attr("class", f.join(" "))
    }
    function E(a, b, c, d) {
        var e = o(a.toUpperCase()).indexOf(o(b.toUpperCase())),
            f = b.length;
        return 0 > e ? (c.push(d(a)), void 0) : (c.push(d(a.substring(0, e))), c.push("<span class='select2-match'>"), c.push(d(a.substring(e, e + f))), c.push("</span>"), c.push(d(a.substring(e + f, a.length))), void 0)
    }
    function F(a) {
        var b = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(a).replace(/[&<>"'\/\\]/g, function(a) {
            return b[a]
        })
    }
    function G(c) {
        var d,
            e = null,
            f = c.quietMillis || 100,
            g = c.url,
            h = this;
        return function(i) {
            window.clearTimeout(d), d = window.setTimeout(function() {
                var d = c.data,
                    f = g,
                    j = c.transport || a.fn.select2.ajaxDefaults.transport,
                    k = {
                        type: c.type || "GET",
                        cache: c.cache || !1,
                        jsonpCallback: c.jsonpCallback || b,
                        dataType: c.dataType || "json"
                    },
                    l = a.extend({}, a.fn.select2.ajaxDefaults.params, k);
                d = d ? d.call(h, i.term, i.page, i.context) : null, f = "function" == typeof f ? f.call(h, i.term, i.page, i.context) : f, e && "function" == typeof e.abort && e.abort(), c.params && (a.isFunction(c.params) ? a.extend(l, c.params.call(h)) : a.extend(l, c.params)), a.extend(l, {
                    url: f,
                    dataType: c.dataType,
                    data: d,
                    success: function(a) {
                        var b = c.results(a, i.page, i);
                        i.callback(b)
                    },
                    error: function(a, b, c) {
                        var d = {
                            hasError: !0,
                            jqXHR: a,
                            textStatus: b,
                            errorThrown: c
                        };
                        i.callback(d)
                    }
                }), e = j.call(h, l)
            }, f)
        }
    }
    function H(b) {
        var d,
            e,
            c = b,
            f = function(a) {
                return "" + a.text
            };
        a.isArray(c) && (e = c, c = {
            results: e
        }), a.isFunction(c) === !1 && (e = c, c = function() {
            return e
        });
        var g = c();
        return g.text && (f = g.text, a.isFunction(f) || (d = g.text, f = function(a) {
            return a[d]
        })), function(b) {
            var g,
                d = b.term,
                e = {
                    results: []
                };
            return "" === d ? (b.callback(c()), void 0) : (g = function(c, e) {
                var h,
                    i;
                if (c = c[0], c.children) {
                    h = {};
                    for (i in c)
                        c.hasOwnProperty(i) && (h[i] = c[i]);
                    h.children = [], a(c.children).each2(function(a, b) {
                        g(b, h.children)
                    }), (h.children.length || b.matcher(d, f(h), c)) && e.push(h)
                } else
                    b.matcher(d, f(c), c) && e.push(c)
            }, a(c().results).each2(function(a, b) {
                g(b, e.results)
            }), b.callback(e), void 0)
        }
    }
    function I(c) {
        var d = a.isFunction(c);
        return function(e) {
            var f = e.term,
                g = {
                    results: []
                },
                h = d ? c(e) : c;
            a.isArray(h) && (a(h).each(function() {
                var a = this.text !== b,
                    c = a ? this.text : this;
                ("" === f || e.matcher(f, c)) && g.results.push(a ? this : {
                    id: this,
                    text: this
                })
            }), e.callback(g))
        }
    }
    function J(b, c) {
        if (a.isFunction(b))
            return !0;
        if (!b)
            return !1;
        if ("string" == typeof b)
            return !0;
        throw new Error(c + " must be a string, function, or falsy value")
    }
    function K(b, c) {
        if (a.isFunction(b)) {
            var d = Array.prototype.slice.call(arguments, 2);
            return b.apply(c, d)
        }
        return b
    }
    function L(b) {
        var c = 0;
        return a.each(b, function(a, b) {
            b.children ? c += L(b.children) : c++
        }), c
    }
    function M(a, c, d, e) {
        var h,
            i,
            j,
            k,
            l,
            f = a,
            g = !1;
        if (!e.createSearchChoice || !e.tokenSeparators || e.tokenSeparators.length < 1)
            return b;
        for (;;) {
            for (i = -1, j = 0, k = e.tokenSeparators.length; k > j && (l = e.tokenSeparators[j], i = a.indexOf(l), !(i >= 0)); j++)
                ;
            if (0 > i)
                break;
            if (h = a.substring(0, i), a = a.substring(i + l.length), h.length > 0 && (h = e.createSearchChoice.call(this, h, c), h !== b && null !== h && e.id(h) !== b && null !== e.id(h))) {
                for (g = !1, j = 0, k = c.length; k > j; j++)
                    if (r(e.id(h), e.id(c[j]))) {
                        g = !0;
                        break
                    }
                g || d(h)
            }
        }
        return f !== a ? a : void 0
    }
    function N() {
        var b = this;
        a.each(arguments, function(a, c) {
            b[c].remove(), b[c] = null
        })
    }
    function O(b, c) {
        var d = function() {};
        return d.prototype = new b, d.prototype.constructor = d, d.prototype.parent = b.prototype, d.prototype = a.extend(d.prototype, c), d
    }
    if (window.Select2 === b) {
        var c,
            d,
            e,
            f,
            g,
            i,
            j,
            h = {
                x: 0,
                y: 0
            },
            k = {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46,
                isArrow: function(a) {
                    switch (a = a.which ? a.which : a) {
                    case k.LEFT:
                    case k.RIGHT:
                    case k.UP:
                    case k.DOWN:
                        return !0
                    }
                    return !1
                },
                isControl: function(a) {
                    var b = a.which;
                    switch (b) {
                    case k.SHIFT:
                    case k.CTRL:
                    case k.ALT:
                        return !0
                    }
                    return a.metaKey ? !0 : !1
                },
                isFunctionKey: function(a) {
                    return a = a.which ? a.which : a, a >= 112 && 123 >= a
                }
            },
            l = "<div class='select2-measure-scrollbar'></div>",
            m = {
                "\u24b6": "A",
                "\uff21": "A",
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\u1ea6": "A",
                "\u1ea4": "A",
                "\u1eaa": "A",
                "\u1ea8": "A",
                "\xc3": "A",
                "\u0100": "A",
                "\u0102": "A",
                "\u1eb0": "A",
                "\u1eae": "A",
                "\u1eb4": "A",
                "\u1eb2": "A",
                "\u0226": "A",
                "\u01e0": "A",
                "\xc4": "A",
                "\u01de": "A",
                "\u1ea2": "A",
                "\xc5": "A",
                "\u01fa": "A",
                "\u01cd": "A",
                "\u0200": "A",
                "\u0202": "A",
                "\u1ea0": "A",
                "\u1eac": "A",
                "\u1eb6": "A",
                "\u1e00": "A",
                "\u0104": "A",
                "\u023a": "A",
                "\u2c6f": "A",
                "\ua732": "AA",
                "\xc6": "AE",
                "\u01fc": "AE",
                "\u01e2": "AE",
                "\ua734": "AO",
                "\ua736": "AU",
                "\ua738": "AV",
                "\ua73a": "AV",
                "\ua73c": "AY",
                "\u24b7": "B",
                "\uff22": "B",
                "\u1e02": "B",
                "\u1e04": "B",
                "\u1e06": "B",
                "\u0243": "B",
                "\u0182": "B",
                "\u0181": "B",
                "\u24b8": "C",
                "\uff23": "C",
                "\u0106": "C",
                "\u0108": "C",
                "\u010a": "C",
                "\u010c": "C",
                "\xc7": "C",
                "\u1e08": "C",
                "\u0187": "C",
                "\u023b": "C",
                "\ua73e": "C",
                "\u24b9": "D",
                "\uff24": "D",
                "\u1e0a": "D",
                "\u010e": "D",
                "\u1e0c": "D",
                "\u1e10": "D",
                "\u1e12": "D",
                "\u1e0e": "D",
                "\u0110": "D",
                "\u018b": "D",
                "\u018a": "D",
                "\u0189": "D",
                "\ua779": "D",
                "\u01f1": "DZ",
                "\u01c4": "DZ",
                "\u01f2": "Dz",
                "\u01c5": "Dz",
                "\u24ba": "E",
                "\uff25": "E",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\u1ec0": "E",
                "\u1ebe": "E",
                "\u1ec4": "E",
                "\u1ec2": "E",
                "\u1ebc": "E",
                "\u0112": "E",
                "\u1e14": "E",
                "\u1e16": "E",
                "\u0114": "E",
                "\u0116": "E",
                "\xcb": "E",
                "\u1eba": "E",
                "\u011a": "E",
                "\u0204": "E",
                "\u0206": "E",
                "\u1eb8": "E",
                "\u1ec6": "E",
                "\u0228": "E",
                "\u1e1c": "E",
                "\u0118": "E",
                "\u1e18": "E",
                "\u1e1a": "E",
                "\u0190": "E",
                "\u018e": "E",
                "\u24bb": "F",
                "\uff26": "F",
                "\u1e1e": "F",
                "\u0191": "F",
                "\ua77b": "F",
                "\u24bc": "G",
                "\uff27": "G",
                "\u01f4": "G",
                "\u011c": "G",
                "\u1e20": "G",
                "\u011e": "G",
                "\u0120": "G",
                "\u01e6": "G",
                "\u0122": "G",
                "\u01e4": "G",
                "\u0193": "G",
                "\ua7a0": "G",
                "\ua77d": "G",
                "\ua77e": "G",
                "\u24bd": "H",
                "\uff28": "H",
                "\u0124": "H",
                "\u1e22": "H",
                "\u1e26": "H",
                "\u021e": "H",
                "\u1e24": "H",
                "\u1e28": "H",
                "\u1e2a": "H",
                "\u0126": "H",
                "\u2c67": "H",
                "\u2c75": "H",
                "\ua78d": "H",
                "\u24be": "I",
                "\uff29": "I",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\u0128": "I",
                "\u012a": "I",
                "\u012c": "I",
                "\u0130": "I",
                "\xcf": "I",
                "\u1e2e": "I",
                "\u1ec8": "I",
                "\u01cf": "I",
                "\u0208": "I",
                "\u020a": "I",
                "\u1eca": "I",
                "\u012e": "I",
                "\u1e2c": "I",
                "\u0197": "I",
                "\u24bf": "J",
                "\uff2a": "J",
                "\u0134": "J",
                "\u0248": "J",
                "\u24c0": "K",
                "\uff2b": "K",
                "\u1e30": "K",
                "\u01e8": "K",
                "\u1e32": "K",
                "\u0136": "K",
                "\u1e34": "K",
                "\u0198": "K",
                "\u2c69": "K",
                "\ua740": "K",
                "\ua742": "K",
                "\ua744": "K",
                "\ua7a2": "K",
                "\u24c1": "L",
                "\uff2c": "L",
                "\u013f": "L",
                "\u0139": "L",
                "\u013d": "L",
                "\u1e36": "L",
                "\u1e38": "L",
                "\u013b": "L",
                "\u1e3c": "L",
                "\u1e3a": "L",
                "\u0141": "L",
                "\u023d": "L",
                "\u2c62": "L",
                "\u2c60": "L",
                "\ua748": "L",
                "\ua746": "L",
                "\ua780": "L",
                "\u01c7": "LJ",
                "\u01c8": "Lj",
                "\u24c2": "M",
                "\uff2d": "M",
                "\u1e3e": "M",
                "\u1e40": "M",
                "\u1e42": "M",
                "\u2c6e": "M",
                "\u019c": "M",
                "\u24c3": "N",
                "\uff2e": "N",
                "\u01f8": "N",
                "\u0143": "N",
                "\xd1": "N",
                "\u1e44": "N",
                "\u0147": "N",
                "\u1e46": "N",
                "\u0145": "N",
                "\u1e4a": "N",
                "\u1e48": "N",
                "\u0220": "N",
                "\u019d": "N",
                "\ua790": "N",
                "\ua7a4": "N",
                "\u01ca": "NJ",
                "\u01cb": "Nj",
                "\u24c4": "O",
                "\uff2f": "O",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\u1ed2": "O",
                "\u1ed0": "O",
                "\u1ed6": "O",
                "\u1ed4": "O",
                "\xd5": "O",
                "\u1e4c": "O",
                "\u022c": "O",
                "\u1e4e": "O",
                "\u014c": "O",
                "\u1e50": "O",
                "\u1e52": "O",
                "\u014e": "O",
                "\u022e": "O",
                "\u0230": "O",
                "\xd6": "O",
                "\u022a": "O",
                "\u1ece": "O",
                "\u0150": "O",
                "\u01d1": "O",
                "\u020c": "O",
                "\u020e": "O",
                "\u01a0": "O",
                "\u1edc": "O",
                "\u1eda": "O",
                "\u1ee0": "O",
                "\u1ede": "O",
                "\u1ee2": "O",
                "\u1ecc": "O",
                "\u1ed8": "O",
                "\u01ea": "O",
                "\u01ec": "O",
                "\xd8": "O",
                "\u01fe": "O",
                "\u0186": "O",
                "\u019f": "O",
                "\ua74a": "O",
                "\ua74c": "O",
                "\u01a2": "OI",
                "\ua74e": "OO",
                "\u0222": "OU",
                "\u24c5": "P",
                "\uff30": "P",
                "\u1e54": "P",
                "\u1e56": "P",
                "\u01a4": "P",
                "\u2c63": "P",
                "\ua750": "P",
                "\ua752": "P",
                "\ua754": "P",
                "\u24c6": "Q",
                "\uff31": "Q",
                "\ua756": "Q",
                "\ua758": "Q",
                "\u024a": "Q",
                "\u24c7": "R",
                "\uff32": "R",
                "\u0154": "R",
                "\u1e58": "R",
                "\u0158": "R",
                "\u0210": "R",
                "\u0212": "R",
                "\u1e5a": "R",
                "\u1e5c": "R",
                "\u0156": "R",
                "\u1e5e": "R",
                "\u024c": "R",
                "\u2c64": "R",
                "\ua75a": "R",
                "\ua7a6": "R",
                "\ua782": "R",
                "\u24c8": "S",
                "\uff33": "S",
                "\u1e9e": "S",
                "\u015a": "S",
                "\u1e64": "S",
                "\u015c": "S",
                "\u1e60": "S",
                "\u0160": "S",
                "\u1e66": "S",
                "\u1e62": "S",
                "\u1e68": "S",
                "\u0218": "S",
                "\u015e": "S",
                "\u2c7e": "S",
                "\ua7a8": "S",
                "\ua784": "S",
                "\u24c9": "T",
                "\uff34": "T",
                "\u1e6a": "T",
                "\u0164": "T",
                "\u1e6c": "T",
                "\u021a": "T",
                "\u0162": "T",
                "\u1e70": "T",
                "\u1e6e": "T",
                "\u0166": "T",
                "\u01ac": "T",
                "\u01ae": "T",
                "\u023e": "T",
                "\ua786": "T",
                "\ua728": "TZ",
                "\u24ca": "U",
                "\uff35": "U",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\u0168": "U",
                "\u1e78": "U",
                "\u016a": "U",
                "\u1e7a": "U",
                "\u016c": "U",
                "\xdc": "U",
                "\u01db": "U",
                "\u01d7": "U",
                "\u01d5": "U",
                "\u01d9": "U",
                "\u1ee6": "U",
                "\u016e": "U",
                "\u0170": "U",
                "\u01d3": "U",
                "\u0214": "U",
                "\u0216": "U",
                "\u01af": "U",
                "\u1eea": "U",
                "\u1ee8": "U",
                "\u1eee": "U",
                "\u1eec": "U",
                "\u1ef0": "U",
                "\u1ee4": "U",
                "\u1e72": "U",
                "\u0172": "U",
                "\u1e76": "U",
                "\u1e74": "U",
                "\u0244": "U",
                "\u24cb": "V",
                "\uff36": "V",
                "\u1e7c": "V",
                "\u1e7e": "V",
                "\u01b2": "V",
                "\ua75e": "V",
                "\u0245": "V",
                "\ua760": "VY",
                "\u24cc": "W",
                "\uff37": "W",
                "\u1e80": "W",
                "\u1e82": "W",
                "\u0174": "W",
                "\u1e86": "W",
                "\u1e84": "W",
                "\u1e88": "W",
                "\u2c72": "W",
                "\u24cd": "X",
                "\uff38": "X",
                "\u1e8a": "X",
                "\u1e8c": "X",
                "\u24ce": "Y",
                "\uff39": "Y",
                "\u1ef2": "Y",
                "\xdd": "Y",
                "\u0176": "Y",
                "\u1ef8": "Y",
                "\u0232": "Y",
                "\u1e8e": "Y",
                "\u0178": "Y",
                "\u1ef6": "Y",
                "\u1ef4": "Y",
                "\u01b3": "Y",
                "\u024e": "Y",
                "\u1efe": "Y",
                "\u24cf": "Z",
                "\uff3a": "Z",
                "\u0179": "Z",
                "\u1e90": "Z",
                "\u017b": "Z",
                "\u017d": "Z",
                "\u1e92": "Z",
                "\u1e94": "Z",
                "\u01b5": "Z",
                "\u0224": "Z",
                "\u2c7f": "Z",
                "\u2c6b": "Z",
                "\ua762": "Z",
                "\u24d0": "a",
                "\uff41": "a",
                "\u1e9a": "a",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\u1ea7": "a",
                "\u1ea5": "a",
                "\u1eab": "a",
                "\u1ea9": "a",
                "\xe3": "a",
                "\u0101": "a",
                "\u0103": "a",
                "\u1eb1": "a",
                "\u1eaf": "a",
                "\u1eb5": "a",
                "\u1eb3": "a",
                "\u0227": "a",
                "\u01e1": "a",
                "\xe4": "a",
                "\u01df": "a",
                "\u1ea3": "a",
                "\xe5": "a",
                "\u01fb": "a",
                "\u01ce": "a",
                "\u0201": "a",
                "\u0203": "a",
                "\u1ea1": "a",
                "\u1ead": "a",
                "\u1eb7": "a",
                "\u1e01": "a",
                "\u0105": "a",
                "\u2c65": "a",
                "\u0250": "a",
                "\ua733": "aa",
                "\xe6": "ae",
                "\u01fd": "ae",
                "\u01e3": "ae",
                "\ua735": "ao",
                "\ua737": "au",
                "\ua739": "av",
                "\ua73b": "av",
                "\ua73d": "ay",
                "\u24d1": "b",
                "\uff42": "b",
                "\u1e03": "b",
                "\u1e05": "b",
                "\u1e07": "b",
                "\u0180": "b",
                "\u0183": "b",
                "\u0253": "b",
                "\u24d2": "c",
                "\uff43": "c",
                "\u0107": "c",
                "\u0109": "c",
                "\u010b": "c",
                "\u010d": "c",
                "\xe7": "c",
                "\u1e09": "c",
                "\u0188": "c",
                "\u023c": "c",
                "\ua73f": "c",
                "\u2184": "c",
                "\u24d3": "d",
                "\uff44": "d",
                "\u1e0b": "d",
                "\u010f": "d",
                "\u1e0d": "d",
                "\u1e11": "d",
                "\u1e13": "d",
                "\u1e0f": "d",
                "\u0111": "d",
                "\u018c": "d",
                "\u0256": "d",
                "\u0257": "d",
                "\ua77a": "d",
                "\u01f3": "dz",
                "\u01c6": "dz",
                "\u24d4": "e",
                "\uff45": "e",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\u1ec1": "e",
                "\u1ebf": "e",
                "\u1ec5": "e",
                "\u1ec3": "e",
                "\u1ebd": "e",
                "\u0113": "e",
                "\u1e15": "e",
                "\u1e17": "e",
                "\u0115": "e",
                "\u0117": "e",
                "\xeb": "e",
                "\u1ebb": "e",
                "\u011b": "e",
                "\u0205": "e",
                "\u0207": "e",
                "\u1eb9": "e",
                "\u1ec7": "e",
                "\u0229": "e",
                "\u1e1d": "e",
                "\u0119": "e",
                "\u1e19": "e",
                "\u1e1b": "e",
                "\u0247": "e",
                "\u025b": "e",
                "\u01dd": "e",
                "\u24d5": "f",
                "\uff46": "f",
                "\u1e1f": "f",
                "\u0192": "f",
                "\ua77c": "f",
                "\u24d6": "g",
                "\uff47": "g",
                "\u01f5": "g",
                "\u011d": "g",
                "\u1e21": "g",
                "\u011f": "g",
                "\u0121": "g",
                "\u01e7": "g",
                "\u0123": "g",
                "\u01e5": "g",
                "\u0260": "g",
                "\ua7a1": "g",
                "\u1d79": "g",
                "\ua77f": "g",
                "\u24d7": "h",
                "\uff48": "h",
                "\u0125": "h",
                "\u1e23": "h",
                "\u1e27": "h",
                "\u021f": "h",
                "\u1e25": "h",
                "\u1e29": "h",
                "\u1e2b": "h",
                "\u1e96": "h",
                "\u0127": "h",
                "\u2c68": "h",
                "\u2c76": "h",
                "\u0265": "h",
                "\u0195": "hv",
                "\u24d8": "i",
                "\uff49": "i",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\u0129": "i",
                "\u012b": "i",
                "\u012d": "i",
                "\xef": "i",
                "\u1e2f": "i",
                "\u1ec9": "i",
                "\u01d0": "i",
                "\u0209": "i",
                "\u020b": "i",
                "\u1ecb": "i",
                "\u012f": "i",
                "\u1e2d": "i",
                "\u0268": "i",
                "\u0131": "i",
                "\u24d9": "j",
                "\uff4a": "j",
                "\u0135": "j",
                "\u01f0": "j",
                "\u0249": "j",
                "\u24da": "k",
                "\uff4b": "k",
                "\u1e31": "k",
                "\u01e9": "k",
                "\u1e33": "k",
                "\u0137": "k",
                "\u1e35": "k",
                "\u0199": "k",
                "\u2c6a": "k",
                "\ua741": "k",
                "\ua743": "k",
                "\ua745": "k",
                "\ua7a3": "k",
                "\u24db": "l",
                "\uff4c": "l",
                "\u0140": "l",
                "\u013a": "l",
                "\u013e": "l",
                "\u1e37": "l",
                "\u1e39": "l",
                "\u013c": "l",
                "\u1e3d": "l",
                "\u1e3b": "l",
                "\u017f": "l",
                "\u0142": "l",
                "\u019a": "l",
                "\u026b": "l",
                "\u2c61": "l",
                "\ua749": "l",
                "\ua781": "l",
                "\ua747": "l",
                "\u01c9": "lj",
                "\u24dc": "m",
                "\uff4d": "m",
                "\u1e3f": "m",
                "\u1e41": "m",
                "\u1e43": "m",
                "\u0271": "m",
                "\u026f": "m",
                "\u24dd": "n",
                "\uff4e": "n",
                "\u01f9": "n",
                "\u0144": "n",
                "\xf1": "n",
                "\u1e45": "n",
                "\u0148": "n",
                "\u1e47": "n",
                "\u0146": "n",
                "\u1e4b": "n",
                "\u1e49": "n",
                "\u019e": "n",
                "\u0272": "n",
                "\u0149": "n",
                "\ua791": "n",
                "\ua7a5": "n",
                "\u01cc": "nj",
                "\u24de": "o",
                "\uff4f": "o",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\u1ed3": "o",
                "\u1ed1": "o",
                "\u1ed7": "o",
                "\u1ed5": "o",
                "\xf5": "o",
                "\u1e4d": "o",
                "\u022d": "o",
                "\u1e4f": "o",
                "\u014d": "o",
                "\u1e51": "o",
                "\u1e53": "o",
                "\u014f": "o",
                "\u022f": "o",
                "\u0231": "o",
                "\xf6": "o",
                "\u022b": "o",
                "\u1ecf": "o",
                "\u0151": "o",
                "\u01d2": "o",
                "\u020d": "o",
                "\u020f": "o",
                "\u01a1": "o",
                "\u1edd": "o",
                "\u1edb": "o",
                "\u1ee1": "o",
                "\u1edf": "o",
                "\u1ee3": "o",
                "\u1ecd": "o",
                "\u1ed9": "o",
                "\u01eb": "o",
                "\u01ed": "o",
                "\xf8": "o",
                "\u01ff": "o",
                "\u0254": "o",
                "\ua74b": "o",
                "\ua74d": "o",
                "\u0275": "o",
                "\u01a3": "oi",
                "\u0223": "ou",
                "\ua74f": "oo",
                "\u24df": "p",
                "\uff50": "p",
                "\u1e55": "p",
                "\u1e57": "p",
                "\u01a5": "p",
                "\u1d7d": "p",
                "\ua751": "p",
                "\ua753": "p",
                "\ua755": "p",
                "\u24e0": "q",
                "\uff51": "q",
                "\u024b": "q",
                "\ua757": "q",
                "\ua759": "q",
                "\u24e1": "r",
                "\uff52": "r",
                "\u0155": "r",
                "\u1e59": "r",
                "\u0159": "r",
                "\u0211": "r",
                "\u0213": "r",
                "\u1e5b": "r",
                "\u1e5d": "r",
                "\u0157": "r",
                "\u1e5f": "r",
                "\u024d": "r",
                "\u027d": "r",
                "\ua75b": "r",
                "\ua7a7": "r",
                "\ua783": "r",
                "\u24e2": "s",
                "\uff53": "s",
                "\xdf": "s",
                "\u015b": "s",
                "\u1e65": "s",
                "\u015d": "s",
                "\u1e61": "s",
                "\u0161": "s",
                "\u1e67": "s",
                "\u1e63": "s",
                "\u1e69": "s",
                "\u0219": "s",
                "\u015f": "s",
                "\u023f": "s",
                "\ua7a9": "s",
                "\ua785": "s",
                "\u1e9b": "s",
                "\u24e3": "t",
                "\uff54": "t",
                "\u1e6b": "t",
                "\u1e97": "t",
                "\u0165": "t",
                "\u1e6d": "t",
                "\u021b": "t",
                "\u0163": "t",
                "\u1e71": "t",
                "\u1e6f": "t",
                "\u0167": "t",
                "\u01ad": "t",
                "\u0288": "t",
                "\u2c66": "t",
                "\ua787": "t",
                "\ua729": "tz",
                "\u24e4": "u",
                "\uff55": "u",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\u0169": "u",
                "\u1e79": "u",
                "\u016b": "u",
                "\u1e7b": "u",
                "\u016d": "u",
                "\xfc": "u",
                "\u01dc": "u",
                "\u01d8": "u",
                "\u01d6": "u",
                "\u01da": "u",
                "\u1ee7": "u",
                "\u016f": "u",
                "\u0171": "u",
                "\u01d4": "u",
                "\u0215": "u",
                "\u0217": "u",
                "\u01b0": "u",
                "\u1eeb": "u",
                "\u1ee9": "u",
                "\u1eef": "u",
                "\u1eed": "u",
                "\u1ef1": "u",
                "\u1ee5": "u",
                "\u1e73": "u",
                "\u0173": "u",
                "\u1e77": "u",
                "\u1e75": "u",
                "\u0289": "u",
                "\u24e5": "v",
                "\uff56": "v",
                "\u1e7d": "v",
                "\u1e7f": "v",
                "\u028b": "v",
                "\ua75f": "v",
                "\u028c": "v",
                "\ua761": "vy",
                "\u24e6": "w",
                "\uff57": "w",
                "\u1e81": "w",
                "\u1e83": "w",
                "\u0175": "w",
                "\u1e87": "w",
                "\u1e85": "w",
                "\u1e98": "w",
                "\u1e89": "w",
                "\u2c73": "w",
                "\u24e7": "x",
                "\uff58": "x",
                "\u1e8b": "x",
                "\u1e8d": "x",
                "\u24e8": "y",
                "\uff59": "y",
                "\u1ef3": "y",
                "\xfd": "y",
                "\u0177": "y",
                "\u1ef9": "y",
                "\u0233": "y",
                "\u1e8f": "y",
                "\xff": "y",
                "\u1ef7": "y",
                "\u1e99": "y",
                "\u1ef5": "y",
                "\u01b4": "y",
                "\u024f": "y",
                "\u1eff": "y",
                "\u24e9": "z",
                "\uff5a": "z",
                "\u017a": "z",
                "\u1e91": "z",
                "\u017c": "z",
                "\u017e": "z",
                "\u1e93": "z",
                "\u1e95": "z",
                "\u01b6": "z",
                "\u0225": "z",
                "\u0240": "z",
                "\u2c6c": "z",
                "\ua763": "z",
                "\u0386": "\u0391",
                "\u0388": "\u0395",
                "\u0389": "\u0397",
                "\u038a": "\u0399",
                "\u03aa": "\u0399",
                "\u038c": "\u039f",
                "\u038e": "\u03a5",
                "\u03ab": "\u03a5",
                "\u038f": "\u03a9",
                "\u03ac": "\u03b1",
                "\u03ad": "\u03b5",
                "\u03ae": "\u03b7",
                "\u03af": "\u03b9",
                "\u03ca": "\u03b9",
                "\u0390": "\u03b9",
                "\u03cc": "\u03bf",
                "\u03cd": "\u03c5",
                "\u03cb": "\u03c5",
                "\u03b0": "\u03c5",
                "\u03c9": "\u03c9",
                "\u03c2": "\u03c3"
            };
        i = a(document), f = function() {
            var a = 1;
            return function() {
                return a++
            }
        }(), c = O(Object, {
            bind: function(a) {
                var b = this;
                return function() {
                    a.apply(b, arguments)
                }
            },
            init: function(c) {
                var d,
                    e,
                    g = ".select2-results";
                this.opts = c = this.prepareOpts(c), this.id = c.id, c.element.data("select2") !== b && null !== c.element.data("select2") && c.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = a(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = a("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (c.element.attr("id") || "autogen" + f()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", c.element.attr("title")), this.body = a(document.body), D(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", c.element.attr("style")), this.container.css(K(c.containerCss, this.opts.element)), this.container.addClass(K(c.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", A), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), D(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(K(c.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", A), this.results = d = this.container.find(g), this.search = e = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", A), v(this.results), this.dropdown.on("mousemove-filtered", g, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", g, this.bind(function(a) {
                    this._touchEvent = !0, this.highlightUnderEvent(a)
                })), this.dropdown.on("touchmove", g, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", g, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function() {
                    this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
                })), x(80, this.results), this.dropdown.on("scroll-debounced", g, this.bind(this.loadMoreIfNeeded)), a(this.container).on("change", ".select2-input", function(a) {
                    a.stopPropagation()
                }), a(this.dropdown).on("change", ".select2-input", function(a) {
                    a.stopPropagation()
                }), a.fn.mousewheel && d.mousewheel(function(a, b, c, e) {
                    var f = d.scrollTop();
                    e > 0 && 0 >= f - e ? (d.scrollTop(0), A(a)) : 0 > e && d.get(0).scrollHeight - d.scrollTop() + e <= d.height() && (d.scrollTop(d.get(0).scrollHeight - d.height()), A(a))
                }), u(e), e.on("keyup-change input paste", this.bind(this.updateResults)), e.on("focus", function() {
                    e.addClass("select2-focused")
                }), e.on("blur", function() {
                    e.removeClass("select2-focused")
                }), this.dropdown.on("mouseup", g, this.bind(function(b) {
                    a(b.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(b), this.selectHighlighted(b))
                })), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(a) {
                    a.stopPropagation()
                }), this.nextSearchTerm = b, a.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== c.maximumInputLength && this.search.attr("maxlength", c.maximumInputLength);
                var h = c.element.prop("disabled");
                h === b && (h = !1), this.enable(!h);
                var i = c.element.prop("readonly");
                i === b && (i = !1), this.readonly(i), j = j || q(), this.autofocus = c.element.prop("autofocus"), c.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", c.searchInputPlaceholder)
            },
            destroy: function() {
                var a = this.opts.element,
                    c = a.data("select2"),
                    d = this;
                this.close(), a.length && a[0].detachEvent && d._sync && a.each(function() {
                    d._sync && this.detachEvent("onpropertychange", d._sync)
                }), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, c !== b && (c.container.remove(), c.liveRegion.remove(), c.dropdown.remove(), a.show().removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? a.attr({
                    tabindex: this.elementTabIndex
                }) : a.removeAttr("tabindex"), a.show()), N.call(this, "container", "liveRegion", "dropdown", "results", "search")
            },
            optionToData: function(a) {
                return a.is("option") ? {
                    id: a.prop("value"),
                    text: a.text(),
                    element: a.get(),
                    css: a.attr("class"),
                    disabled: a.prop("disabled"),
                    locked: r(a.attr("locked"), "locked") || r(a.data("locked"), !0)
                } : a.is("optgroup") ? {
                    text: a.attr("label"),
                    children: [],
                    element: a.get(),
                    css: a.attr("class")
                } : void 0
            },
            prepareOpts: function(c) {
                var d,
                    e,
                    g,
                    h,
                    i = this;
                if (d = c.element, "select" === d.get(0).tagName.toLowerCase() && (this.select = e = c.element), e && a.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                    if (this in c)
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                }), c = a.extend({}, {
                    populateResults: function(d, e, g) {
                        var h,
                            j = this.opts.id,
                            k = this.liveRegion;
                        h = function(d, e, l) {
                            var m,
                                n,
                                o,
                                p,
                                q,
                                r,
                                s,
                                t,
                                u,
                                v;
                            d = c.sortResults(d, e, g);
                            var w = [];
                            for (m = 0, n = d.length; n > m; m += 1)
                                o = d[m], q = o.disabled === !0, p = !q && j(o) !== b, r = o.children && o.children.length > 0, s = a("<li></li>"), s.addClass("select2-results-dept-" + l), s.addClass("select2-result"), s.addClass(p ? "select2-result-selectable" : "select2-result-unselectable"), q && s.addClass("select2-disabled"), r && s.addClass("select2-result-with-children"), s.addClass(i.opts.formatResultCssClass(o)), s.attr("role", "presentation"), t = a(document.createElement("div")), t.addClass("select2-result-label"), t.attr("id", "select2-result-label-" + f()), t.attr("role", "option"), v = c.formatResult(o, t, g, i.opts.escapeMarkup), v !== b && (t.html(v), s.append(t)), r && (u = a("<ul></ul>"), u.addClass("select2-result-sub"), h(o.children, u, l + 1), s.append(u)), s.data("select2-data", o), w.push(s[0]);
                            e.append(w), k.text(c.formatMatches(d.length))
                        }, h(e, d, 0)
                    }
                }, a.fn.select2.defaults, c), "function" != typeof c.id && (g = c.id, c.id = function(a) {
                    return a[g]
                }), a.isArray(c.element.data("select2Tags"))) {
                    if ("tags" in c)
                        throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + c.element.attr("id");
                    c.tags = c.element.data("select2Tags")
                }
                if (e ? (c.query = this.bind(function(a) {
                    var f,
                        g,
                        h,
                        c = {
                            results: [],
                            more: !1
                        },
                        e = a.term;
                    h = function(b, c) {
                        var d;
                        b.is("option") ? a.matcher(e, b.text(), b) && c.push(i.optionToData(b)) : b.is("optgroup") && (d = i.optionToData(b), b.children().each2(function(a, b) {
                            h(b, d.children)
                        }), d.children.length > 0 && c.push(d))
                    }, f = d.children(), this.getPlaceholder() !== b && f.length > 0 && (g = this.getPlaceholderOption(), g && (f = f.not(g))), f.each2(function(a, b) {
                        h(b, c.results)
                    }), a.callback(c)
                }), c.id = function(a) {
                    return a.id
                }) : "query" in c || ("ajax" in c ? (h = c.element.data("ajax-url"), h && h.length > 0 && (c.ajax.url = h), c.query = G.call(c.element, c.ajax)) : "data" in c ? c.query = H(c.data) : "tags" in c && (c.query = I(c.tags), c.createSearchChoice === b && (c.createSearchChoice = function(b) {
                    return {
                        id: a.trim(b),
                        text: a.trim(b)
                    }
                }), c.initSelection === b && (c.initSelection = function(b, d) {
                    var e = [];
                    a(s(b.val(), c.separator, c.transformVal)).each(function() {
                        var b = {
                                id: this,
                                text: this
                            },
                            d = c.tags;
                        a.isFunction(d) && (d = d()), a(d).each(function() {
                            return r(this.id, b.id) ? (b = this, !1) : void 0
                        }), e.push(b)
                    }), d(e)
                }))), "function" != typeof c.query)
                    throw "query function not defined for Select2 " + c.element.attr("id");
                if ("top" === c.createSearchChoicePosition)
                    c.createSearchChoicePosition = function(a, b) {
                        a.unshift(b)
                    };
                else if ("bottom" === c.createSearchChoicePosition)
                    c.createSearchChoicePosition = function(a, b) {
                        a.push(b)
                    };
                else if ("function" != typeof c.createSearchChoicePosition)
                    throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                return c
            },
            monitorSource: function() {
                var d,
                    c = this.opts.element,
                    e = this;
                c.on("change.select2", this.bind(function() {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                })), this._sync = this.bind(function() {
                    var a = c.prop("disabled");
                    a === b && (a = !1), this.enable(!a);
                    var d = c.prop("readonly");
                    d === b && (d = !1), this.readonly(d), this.container && (D(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(K(this.opts.containerCssClass, this.opts.element))), this.dropdown && (D(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(K(this.opts.dropdownCssClass, this.opts.element)))
                }), c.length && c[0].attachEvent && c.each(function() {
                    this.attachEvent("onpropertychange", e._sync)
                }), d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, d !== b && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new d(function(b) {
                    a.each(b, e._sync)
                }), this.propertyObserver.observe(c.get(0), {
                    attributes: !0,
                    subtree: !1
                }))
            },
            triggerSelect: function(b) {
                var c = a.Event("select2-selecting", {
                    val: this.id(b),
                    object: b,
                    choice: b
                });
                return this.opts.element.trigger(c), !c.isDefaultPrevented()
            },
            triggerChange: function(b) {
                b = b || {}, b = a.extend({}, b, {
                    type: "change",
                    val: this.val()
                }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(b), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
            },
            isInterfaceEnabled: function() {
                return this.enabledInterface === !0
            },
            enableInterface: function() {
                var a = this._enabled && !this._readonly,
                    b = !a;
                return a === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", b), this.close(), this.enabledInterface = a, !0)
            },
            enable: function(a) {
                a === b && (a = !0), this._enabled !== a && (this._enabled = a, this.opts.element.prop("disabled", !a), this.enableInterface())
            },
            disable: function() {
                this.enable(!1)
            },
            readonly: function(a) {
                a === b && (a = !1), this._readonly !== a && (this._readonly = a, this.opts.element.prop("readonly", a), this.enableInterface())
            },
            opened: function() {
                return this.container ? this.container.hasClass("select2-dropdown-open") : !1
            },
            positionDropdown: function() {
                var v,
                    w,
                    x,
                    y,
                    z,
                    b = this.dropdown,
                    c = this.container,
                    d = c.offset(),
                    e = c.outerHeight(!1),
                    f = c.outerWidth(!1),
                    g = b.outerHeight(!1),
                    h = a(window),
                    i = h.width(),
                    k = h.height(),
                    l = h.scrollLeft() + i,
                    m = h.scrollTop() + k,
                    n = d.top + e,
                    o = d.left,
                    p = m >= n + g,
                    q = d.top - g >= h.scrollTop(),
                    r = b.outerWidth(!1),
                    s = function() {
                        return l >= o + r
                    },
                    t = function() {
                        return d.left + l + c.outerWidth(!1) > r
                    },
                    u = b.hasClass("select2-drop-above");
                u ? (w = !0, !q && p && (x = !0, w = !1)) : (w = !1, !p && q && (x = !0, w = !0)), x && (b.hide(), d = this.container.offset(), e = this.container.outerHeight(!1), f = this.container.outerWidth(!1), g = b.outerHeight(!1), l = h.scrollLeft() + i, m = h.scrollTop() + k, n = d.top + e, o = d.left, r = b.outerWidth(!1), b.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (z = a(".select2-results", b)[0], b.addClass("select2-drop-auto-width"), b.css("width", ""), r = b.outerWidth(!1) + (z.scrollHeight === z.clientHeight ? 0 : j.width), r > f ? f = r : r = f, g = b.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (v = this.body.offset(), n -= v.top, o -= v.left), !s() && t() && (o = d.left + this.container.outerWidth(!1) - r), y = {
                    left: o,
                    width: f
                }, w ? (y.top = d.top - g, y.bottom = "auto", this.container.addClass("select2-drop-above"), b.addClass("select2-drop-above")) : (y.top = n, y.bottom = "auto", this.container.removeClass("select2-drop-above"), b.removeClass("select2-drop-above")), y = a.extend(y, K(this.opts.dropdownCss, this.opts.element)), b.css(y)
            },
            shouldOpen: function() {
                var b;
                return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (b = a.Event("select2-opening"), this.opts.element.trigger(b), !b.isDefaultPrevented())
            },
            clearDropdownAlignmentPreference: function() {
                this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
            },
            open: function() {
                return this.shouldOpen() ? (this.opening(), i.on("mousemove.select2Event", function(a) {
                    h.x = a.pageX, h.y = a.pageY
                }), !0) : !1
            },
            opening: function() {
                var f,
                    b = this.containerEventName,
                    c = "scroll." + b,
                    d = "resize." + b,
                    e = "orientationchange." + b;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), f = a("#select2-drop-mask"), 0 === f.length && (f = a(document.createElement("div")), f.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), f.hide(), f.appendTo(this.body), f.on("mousedown touchstart click", function(b) {
                    n(f);
                    var d,
                        c = a("#select2-drop");
                    c.length > 0 && (d = c.data("select2"), d.opts.selectOnBlur && d.selectHighlighted({
                        noFocus: !0
                    }), d.close(), b.preventDefault(), b.stopPropagation())
                })), this.dropdown.prev()[0] !== f[0] && this.dropdown.before(f), a("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), f.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                var g = this;
                this.container.parents().add(window).each(function() {
                    a(this).on(d + " " + c + " " + e, function() {
                        g.opened() && g.positionDropdown()
                    })
                })
            },
            close: function() {
                if (this.opened()) {
                    var b = this.containerEventName,
                        c = "scroll." + b,
                        d = "resize." + b,
                        e = "orientationchange." + b;
                    this.container.parents().add(window).each(function() {
                        a(this).off(c).off(d).off(e)
                    }), this.clearDropdownAlignmentPreference(), a("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), i.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(a.Event("select2-close"))
                }
            },
            externalSearch: function(a) {
                this.open(), this.search.val(a), this.updateResults(!1)
            },
            clearSearch: function() {},
            getMaximumSelectionSize: function() {
                return K(this.opts.maximumSelectionSize, this.opts.element)
            },
            ensureHighlightVisible: function() {
                var c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    b = this.results;
                if (d = this.highlight(), !(0 > d)) {
                    if (0 == d)
                        return b.scrollTop(0), void 0;
                    c = this.findHighlightableChoices().find(".select2-result-label"), e = a(c[d]), j = (e.offset() || {}).top || 0, f = j + e.outerHeight(!0), d === c.length - 1 && (i = b.find("li.select2-more-results"), i.length > 0 && (f = i.offset().top + i.outerHeight(!0))), g = b.offset().top + b.outerHeight(!1), f > g && b.scrollTop(b.scrollTop() + (f - g)), h = j - b.offset().top, 0 > h && "none" != e.css("display") && b.scrollTop(b.scrollTop() + h)
                }
            },
            findHighlightableChoices: function() {
                return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
            },
            moveHighlight: function(b) {
                for (var c = this.findHighlightableChoices(), d = this.highlight(); d > -1 && d < c.length;) {
                    d += b;
                    var e = a(c[d]);
                    if (e.hasClass("select2-result-selectable") && !e.hasClass("select2-disabled") && !e.hasClass("select2-selected")) {
                        this.highlight(d);
                        break
                    }
                }
            },
            highlight: function(b) {
                var d,
                    e,
                    c = this.findHighlightableChoices();
                return 0 === arguments.length ? p(c.filter(".select2-highlighted")[0], c.get()) : (b >= c.length && (b = c.length - 1), 0 > b && (b = 0), this.removeHighlight(), d = a(c[b]), d.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", d.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(d.text()), e = d.data("select2-data"), e && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(e),
                    choice: e
                }), void 0)
            },
            removeHighlight: function() {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            },
            touchMoved: function() {
                this._touchMoved = !0
            },
            clearTouchMoved: function() {
                this._touchMoved = !1
            },
            countSelectableResults: function() {
                return this.findHighlightableChoices().length
            },
            highlightUnderEvent: function(b) {
                var c = a(b.target).closest(".select2-result-selectable");
                if (c.length > 0 && !c.is(".select2-highlighted")) {
                    var d = this.findHighlightableChoices();
                    this.highlight(d.index(c))
                } else
                    0 == c.length && this.removeHighlight()
            },
            loadMoreIfNeeded: function() {
                var c,
                    a = this.results,
                    b = a.find("li.select2-more-results"),
                    d = this.resultsPage + 1,
                    e = this,
                    f = this.search.val(),
                    g = this.context;
                0 !== b.length && (c = b.offset().top - a.offset().top - a.height(), c <= this.opts.loadMorePadding && (b.addClass("select2-active"), this.opts.query({
                    element: this.opts.element,
                    term: f,
                    page: d,
                    context: g,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(c) {
                        e.opened() && (e.opts.populateResults.call(this, a, c.results, {
                            term: f,
                            page: d,
                            context: g
                        }), e.postprocessResults(c, !1, !1), c.more === !0 ? (b.detach().appendTo(a).html(e.opts.escapeMarkup(K(e.opts.formatLoadMore, e.opts.element, d + 1))), window.setTimeout(function() {
                            e.loadMoreIfNeeded()
                        }, 10)) : b.remove(), e.positionDropdown(), e.resultsPage = d, e.context = c.context, this.opts.element.trigger({
                            type: "select2-loaded",
                            items: c
                        }))
                    })
                })))
            },
            tokenize: function() {},
            updateResults: function(c) {
                function m() {
                    d.removeClass("select2-active"), h.positionDropdown(), e.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? h.liveRegion.text(e.text()) : h.liveRegion.text(h.opts.formatMatches(e.find('.select2-result-selectable:not(".select2-selected")').length))
                }
                function n(a) {
                    e.html(a), m()
                }
                var g,
                    i,
                    l,
                    d = this.search,
                    e = this.results,
                    f = this.opts,
                    h = this,
                    j = d.val(),
                    k = a.data(this.container, "select2-last-term");
                if ((c === !0 || !k || !r(j, k)) && (a.data(this.container, "select2-last-term", j), c === !0 || this.showSearchInput !== !1 && this.opened())) {
                    l = ++this.queryCount;
                    var o = this.getMaximumSelectionSize();
                    if (o >= 1 && (g = this.data(), a.isArray(g) && g.length >= o && J(f.formatSelectionTooBig, "formatSelectionTooBig")))
                        return n("<li class='select2-selection-limit'>" + K(f.formatSelectionTooBig, f.element, o) + "</li>"), void 0;
                    if (d.val().length < f.minimumInputLength)
                        return J(f.formatInputTooShort, "formatInputTooShort") ? n("<li class='select2-no-results'>" + K(f.formatInputTooShort, f.element, d.val(), f.minimumInputLength) + "</li>") : n(""), c && this.showSearch && this.showSearch(!0), void 0;
                    if (f.maximumInputLength && d.val().length > f.maximumInputLength)
                        return J(f.formatInputTooLong, "formatInputTooLong") ? n("<li class='select2-no-results'>" + K(f.formatInputTooLong, f.element, d.val(), f.maximumInputLength) + "</li>") : n(""), void 0;
                    f.formatSearching && 0 === this.findHighlightableChoices().length && n("<li class='select2-searching'>" + K(f.formatSearching, f.element) + "</li>"), d.addClass("select2-active"), this.removeHighlight(), i = this.tokenize(), i != b && null != i && d.val(i), this.resultsPage = 1, f.query({
                        element: f.element,
                        term: d.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: f.matcher,
                        callback: this.bind(function(g) {
                            var i;
                            if (l == this.queryCount) {
                                if (!this.opened())
                                    return this.search.removeClass("select2-active"), void 0;
                                if (g.hasError !== b && J(f.formatAjaxError, "formatAjaxError"))
                                    return n("<li class='select2-ajax-error'>" + K(f.formatAjaxError, f.element, g.jqXHR, g.textStatus, g.errorThrown) + "</li>"), void 0;
                                if (this.context = g.context === b ? null : g.context, this.opts.createSearchChoice && "" !== d.val() && (i = this.opts.createSearchChoice.call(h, d.val(), g.results), i !== b && null !== i && h.id(i) !== b && null !== h.id(i) && 0 === a(g.results).filter(function() {
                                    return r(h.id(this), h.id(i))
                                }).length && this.opts.createSearchChoicePosition(g.results, i)), 0 === g.results.length && J(f.formatNoMatches, "formatNoMatches"))
                                    return n("<li class='select2-no-results'>" + K(f.formatNoMatches, f.element, d.val()) + "</li>"), void 0;
                                e.empty(), h.opts.populateResults.call(this, e, g.results, {
                                    term: d.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), g.more === !0 && J(f.formatLoadMore, "formatLoadMore") && (e.append("<li class='select2-more-results'>" + f.escapeMarkup(K(f.formatLoadMore, f.element, this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                    h.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(g, c), m(), this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: g
                                })
                            }
                        })
                    })
                }
            },
            cancel: function() {
                this.close()
            },
            blur: function() {
                this.opts.selectOnBlur && this.selectHighlighted({
                    noFocus: !0
                }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            },
            focusSearch: function() {
                y(this.search)
            },
            selectHighlighted: function(a) {
                if (this._touchMoved)
                    return this.clearTouchMoved(), void 0;
                var b = this.highlight(),
                    c = this.results.find(".select2-highlighted"),
                    d = c.closest(".select2-result").data("select2-data");
                d ? (this.highlight(b), this.onSelect(d, a)) : a && a.noFocus && this.close()
            },
            getPlaceholder: function() {
                var a;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((a = this.getPlaceholderOption()) !== b ? a.text() : b)
            },
            getPlaceholderOption: function() {
                if (this.select) {
                    var c = this.select.children("option").first();
                    if (this.opts.placeholderOption !== b)
                        return "first" === this.opts.placeholderOption && c || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                    if ("" === a.trim(c.text()) && "" === c.val())
                        return c
                }
            },
            initContainerWidth: function() {
                function c() {
                    var c,
                        d,
                        e,
                        f,
                        g,
                        h;
                    if ("off" === this.opts.width)
                        return null;
                    if ("element" === this.opts.width)
                        return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (c = this.opts.element.attr("style"), c !== b)
                            for (d = c.split(";"), f = 0, g = d.length; g > f; f += 1)
                                if (h = d[f].replace(/\s/g, ""), e = h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== e && e.length >= 1)
                                    return e[1];
                        return "resolve" === this.opts.width ? (c = this.opts.element.css("width"), c.indexOf("%") > 0 ? c : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return a.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var d = c.call(this);
                null !== d && this.container.css("width", d)
            }
        }), d = O(c, {
            createContainer: function() {
                var b = a(document.createElement("div")).attr({
                    "class": "select2-container"
                }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
                return b
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            },
            opening: function() {
                var c,
                    d,
                    e;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), c = this.search.get(0), c.createTextRange ? (d = c.createTextRange(), d.collapse(!1), d.select()) : c.setSelectionRange && (e = this.search.val().length, c.setSelectionRange(e, e))), "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(a.Event("select2-open"))
            },
            close: function() {
                this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            focus: function() {
                this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            isFocused: function() {
                return this.container.hasClass("select2-container-active")
            },
            cancel: function() {
                this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
            },
            destroy: function() {
                a("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), N.call(this, "selection", "focusser")
            },
            initContainer: function() {
                var b,
                    g,
                    c = this.container,
                    d = this.dropdown,
                    e = f();
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = b = c.find(".select2-choice"), this.focusser = c.find(".select2-focusser"), b.find(".select2-chosen").attr("id", "select2-chosen-" + e), this.focusser.attr("aria-labelledby", "select2-chosen-" + e), this.results.attr("id", "select2-results-" + e), this.search.attr("aria-owns", "select2-results-" + e), this.focusser.attr("id", "s2id_autogen" + e), g = a("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.focus(this.bind(function() {
                    this.focus()
                })), this.focusser.prev().text(g.text()).attr("for", this.focusser.attr("id"));
                var h = this.opts.element.attr("title");
                this.opts.element.attr("title", h || g.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(a("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled() && 229 != a.keyCode) {
                        if (a.which === k.PAGE_UP || a.which === k.PAGE_DOWN)
                            return A(a), void 0;
                        switch (a.which) {
                        case k.UP:
                        case k.DOWN:
                            return this.moveHighlight(a.which === k.UP ? -1 : 1), A(a), void 0;
                        case k.ENTER:
                            return this.selectHighlighted(), A(a), void 0;
                        case k.TAB:
                            return this.selectHighlighted({
                                noFocus: !0
                            }), void 0;
                        case k.ESC:
                            return this.cancel(a), A(a), void 0
                        }
                    }
                })), this.search.on("blur", this.bind(function() {
                    document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                        this.opened() && this.search.focus()
                    }), 0)
                })), this.focusser.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled() && a.which !== k.TAB && !k.isControl(a) && !k.isFunctionKey(a) && a.which !== k.ESC) {
                        if (this.opts.openOnEnter === !1 && a.which === k.ENTER)
                            return A(a), void 0;
                        if (a.which == k.DOWN || a.which == k.UP || a.which == k.ENTER && this.opts.openOnEnter) {
                            if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey)
                                return;
                            return this.open(), A(a), void 0
                        }
                        return a.which == k.DELETE || a.which == k.BACKSPACE ? (this.opts.allowClear && this.clear(), A(a), void 0) : void 0
                    }
                })), u(this.focusser), this.focusser.on("keyup-change input", this.bind(function(a) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (a.stopPropagation(), this.opened())
                            return;
                        this.open()
                    }
                })), b.on("mousedown touchstart", "abbr", this.bind(function(a) {
                    this.isInterfaceEnabled() && (this.clear(), B(a), this.close(), this.selection && this.selection.focus())
                })), b.on("mousedown touchstart", this.bind(function(c) {
                    n(b), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), A(c)
                })), d.on("mousedown touchstart", this.bind(function() {
                    this.opts.shouldFocusInput(this) && this.search.focus()
                })), b.on("focus", this.bind(function(a) {
                    A(a)
                })), this.focusser.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function() {
                    this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(a.Event("select2-blur")))
                })), this.search.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active")
                })), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
            },
            clear: function(b) {
                var c = this.selection.data("select2-data");
                if (c) {
                    var d = a.Event("select2-clearing");
                    if (this.opts.element.trigger(d), d.isDefaultPrevented())
                        return;
                    var e = this.getPlaceholderOption();
                    this.opts.element.val(e ? e.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), b !== !1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(c),
                        choice: c
                    }), this.triggerChange({
                        removed: c
                    }))
                }
            },
            initSelection: function() {
                if (this.isPlaceholderOptionSelected())
                    this.updateSelection(null), this.close(), this.setPlaceholder();
                else {
                    var c = this;
                    this.opts.initSelection.call(null, this.opts.element, function(a) {
                        a !== b && null !== a && (c.updateSelection(a), c.close(), c.setPlaceholder(), c.nextSearchTerm = c.opts.nextSearchTerm(a, c.search.val()))
                    })
                }
            },
            isPlaceholderOptionSelected: function() {
                var a;
                return this.getPlaceholder() === b ? !1 : (a = this.getPlaceholderOption()) !== b && a.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === b || null === this.opts.element.val()
            },
            prepareOpts: function() {
                var b = this.parent.prepareOpts.apply(this, arguments),
                    c = this;
                return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                    var d = a.find("option").filter(function() {
                        return this.selected && !this.disabled
                    });
                    b(c.optionToData(d))
                } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                    var e = c.val(),
                        f = null;
                    b.query({
                        matcher: function(a, c, d) {
                            var g = r(e, b.id(d));
                            return g && (f = d), g
                        },
                        callback: a.isFunction(d) ? function() {
                            d(f)
                        } : a.noop
                    })
                }), b
            },
            getPlaceholder: function() {
                return this.select && this.getPlaceholderOption() === b ? b : this.parent.getPlaceholder.apply(this, arguments)
            },
            setPlaceholder: function() {
                var a = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && a !== b) {
                    if (this.select && this.getPlaceholderOption() === b)
                        return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(a, b, c) {
                var d = 0,
                    e = this;
                if (this.findHighlightableChoices().each2(function(a, b) {
                    return r(e.id(b.data("select2-data")), e.opts.element.val()) ? (d = a, !1) : void 0
                }), c !== !1 && (b === !0 && d >= 0 ? this.highlight(d) : this.highlight(0)), b === !0) {
                    var g = this.opts.minimumResultsForSearch;
                    g >= 0 && this.showSearch(L(a.results) >= g)
                }
            },
            showSearch: function(b) {
                this.showSearchInput !== b && (this.showSearchInput = b, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !b), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !b), a(this.dropdown, this.container).toggleClass("select2-with-searchbox", b))
            },
            onSelect: function(a, b) {
                if (this.triggerSelect(a)) {
                    var c = this.opts.element.val(),
                        d = this.data();
                    this.opts.element.val(this.id(a)), this.updateSelection(a), this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(a),
                        choice: a
                    }), this.nextSearchTerm = this.opts.nextSearchTerm(a, this.search.val()), this.close(), b && b.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), r(c, this.id(a)) || this.triggerChange({
                        added: a,
                        removed: d
                    })
                }
            },
            updateSelection: function(a) {
                var d,
                    e,
                    c = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", a), c.empty(), null !== a && (d = this.opts.formatSelection(a, c, this.opts.escapeMarkup)), d !== b && c.append(d), e = this.opts.formatSelectionCssClass(a, c), e !== b && c.addClass(e), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== b && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var a,
                    c = !1,
                    d = null,
                    e = this,
                    f = this.data();
                if (0 === arguments.length)
                    return this.opts.element.val();
                if (a = arguments[0], arguments.length > 1 && (c = arguments[1]), this.select)
                    this.select.val(a).find("option").filter(function() {
                        return this.selected
                    }).each2(function(a, b) {
                        return d = e.optionToData(b), !1
                    }), this.updateSelection(d), this.setPlaceholder(), c && this.triggerChange({
                        added: d,
                        removed: f
                    });
                else {
                    if (!a && 0 !== a)
                        return this.clear(c), void 0;
                    if (this.opts.initSelection === b)
                        throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(a), this.opts.initSelection(this.opts.element, function(a) {
                        e.opts.element.val(a ? e.id(a) : ""), e.updateSelection(a), e.setPlaceholder(), c && e.triggerChange({
                            added: a,
                            removed: f
                        })
                    })
                }
            },
            clearSearch: function() {
                this.search.val(""), this.focusser.val("")
            },
            data: function(a) {
                var c,
                    d = !1;
                return 0 === arguments.length ? (c = this.selection.data("select2-data"), c == b && (c = null), c) : (arguments.length > 1 && (d = arguments[1]), a ? (c = this.data(), this.opts.element.val(a ? this.id(a) : ""), this.updateSelection(a), d && this.triggerChange({
                    added: a,
                    removed: c
                })) : this.clear(d), void 0)
            }
        }), e = O(c, {
            createContainer: function() {
                var b = a(document.createElement("div")).attr({
                    "class": "select2-container select2-container-multi"
                }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return b
            },
            prepareOpts: function() {
                var b = this.parent.prepareOpts.apply(this, arguments),
                    c = this;
                return "select" === b.element.get(0).tagName.toLowerCase() ? b.initSelection = function(a, b) {
                    var d = [];
                    a.find("option").filter(function() {
                        return this.selected && !this.disabled
                    }).each2(function(a, b) {
                        d.push(c.optionToData(b))
                    }), b(d)
                } : "data" in b && (b.initSelection = b.initSelection || function(c, d) {
                    var e = s(c.val(), b.separator, b.transformVal),
                        f = [];
                    b.query({
                        matcher: function(c, d, g) {
                            var h = a.grep(e, function(a) {
                                return r(a, b.id(g))
                            }).length;
                            return h && f.push(g), h
                        },
                        callback: a.isFunction(d) ? function() {
                            for (var a = [], c = 0; c < e.length; c++)
                                for (var g = e[c], h = 0; h < f.length; h++) {
                                    var i = f[h];
                                    if (r(g, b.id(i))) {
                                        a.push(i), f.splice(h, 1);
                                        break
                                    }
                                }
                            d(a)
                        } : a.noop
                    })
                }), b
            },
            selectChoice: function(a) {
                var b = this.container.find(".select2-search-choice-focus");
                b.length && a && a[0] == b[0] || (b.length && this.opts.element.trigger("choice-deselected", b), b.removeClass("select2-search-choice-focus"), a && a.length && (this.close(), a.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", a)))
            },
            destroy: function() {
                a("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), N.call(this, "searchContainer", "selection")
            },
            initContainer: function() {
                var c,
                    b = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = c = this.container.find(b);
                var d = this;
                this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function() {
                    d.search[0].focus(), d.selectChoice(a(this))
                }), this.search.attr("id", "s2id_autogen" + f()), this.search.prev().text(a("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.focus(this.bind(function() {
                    this.focus()
                })), this.search.on("input paste", this.bind(function() {
                    this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
                })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(a) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var b = c.find(".select2-search-choice-focus"),
                            d = b.prev(".select2-search-choice:not(.select2-locked)"),
                            e = b.next(".select2-search-choice:not(.select2-locked)"),
                            f = z(this.search);
                        if (b.length && (a.which == k.LEFT || a.which == k.RIGHT || a.which == k.BACKSPACE || a.which == k.DELETE || a.which == k.ENTER)) {
                            var g = b;
                            return a.which == k.LEFT && d.length ? g = d : a.which == k.RIGHT ? g = e.length ? e : null : a.which === k.BACKSPACE ? this.unselect(b.first()) && (this.search.width(10), g = d.length ? d : e) : a.which == k.DELETE ? this.unselect(b.first()) && (this.search.width(10), g = e.length ? e : null) : a.which == k.ENTER && (g = null), this.selectChoice(g), A(a), g && g.length || this.open(), void 0
                        }
                        if ((a.which === k.BACKSPACE && 1 == this.keydowns || a.which == k.LEFT) && 0 == f.offset && !f.length)
                            return this.selectChoice(c.find(".select2-search-choice:not(.select2-locked)").last()), A(a), void 0;
                        if (this.selectChoice(null), this.opened())
                            switch (a.which) {
                            case k.UP:
                            case k.DOWN:
                                return this.moveHighlight(a.which === k.UP ? -1 : 1), A(a), void 0;
                            case k.ENTER:
                                return this.selectHighlighted(), A(a), void 0;
                            case k.TAB:
                                return this.selectHighlighted({
                                    noFocus: !0
                                }), this.close(), void 0;
                            case k.ESC:
                                return this.cancel(a), A(a), void 0
                            }
                        if (a.which !== k.TAB && !k.isControl(a) && !k.isFunctionKey(a) && a.which !== k.BACKSPACE && a.which !== k.ESC) {
                            if (a.which === k.ENTER) {
                                if (this.opts.openOnEnter === !1)
                                    return;
                                if (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey)
                                    return
                            }
                            this.open(), (a.which === k.PAGE_UP || a.which === k.PAGE_DOWN) && A(a), a.which === k.ENTER && A(a)
                        }
                    }
                })), this.search.on("keyup", this.bind(function() {
                    this.keydowns = 0, this.resizeSearch()
                })), this.search.on("blur", this.bind(function(b) {
                    this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), b.stopImmediatePropagation(), this.opts.element.trigger(a.Event("select2-blur"))
                })), this.container.on("click", b, this.bind(function(b) {
                    this.isInterfaceEnabled() && (a(b.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.open(), this.focusSearch(), b.preventDefault()))
                })), this.container.on("focus", b, this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(a.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                })), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            },
            initSelection: function() {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var c = this;
                    this.opts.initSelection.call(null, this.opts.element, function(a) {
                        a !== b && null !== a && (c.updateSelection(a), c.close(), c.clearSearch())
                    })
                }
            },
            clearSearch: function() {
                var a = this.getPlaceholder(),
                    c = this.getMaxSearchWidth();
                a !== b && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(a).addClass("select2-default"), this.search.width(c > 0 ? c : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            },
            opening: function() {
                this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), "" === this.search.val() && this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.search.select()), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(a.Event("select2-open"))
            },
            close: function() {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function() {
                this.close(), this.search.focus()
            },
            isFocused: function() {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function(b) {
                var c = [],
                    d = [],
                    e = this;
                a(b).each(function() {
                    p(e.id(this), c) < 0 && (c.push(e.id(this)), d.push(this))
                }), b = d, this.selection.find(".select2-search-choice").remove(), a(b).each(function() {
                    e.addSelectedChoice(this)
                }), e.postprocessResults()
            },
            tokenize: function() {
                var a = this.search.val();
                a = this.opts.tokenizer.call(this, a, this.data(), this.bind(this.onSelect), this.opts), null != a && a != b && (this.search.val(a), a.length > 0 && this.open())
            },
            onSelect: function(a, c) {
                this.triggerSelect(a) && "" !== a.text && (this.addSelectedChoice(a), this.opts.element.trigger({
                    type: "selected",
                    val: this.id(a),
                    choice: a
                }), this.nextSearchTerm = this.opts.nextSearchTerm(a, this.search.val()), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(a, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != b && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                    added: a
                }), c && c.noFocus || this.focusSearch())
            },
            cancel: function() {
                this.close(), this.focusSearch()
            },
            addSelectedChoice: function(c) {
                var j,
                    k,
                    d = !c.locked,
                    e = a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                    f = a("<li class='select2-search-choice select2-locked'><div></div></li>"),
                    g = d ? e : f,
                    h = this.id(c),
                    i = this.getVal();
                j = this.opts.formatSelection(c, g.find("div"), this.opts.escapeMarkup), j != b && g.find("div").replaceWith(a("<div></div>").html(j)), k = this.opts.formatSelectionCssClass(c, g.find("div")), k != b && g.addClass(k), d && g.find(".select2-search-choice-close").on("mousedown", A).on("click dblclick", this.bind(function(b) {
                    this.isInterfaceEnabled() && (this.unselect(a(b.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), A(b), this.close(), this.focusSearch())
                })).on("focus", this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                })), g.data("select2-data", c), g.insertBefore(this.searchContainer), i.push(h), this.setVal(i)
            },
            unselect: function(b) {
                var d,
                    e,
                    c = this.getVal();
                if (b = b.closest(".select2-search-choice"), 0 === b.length)
                    throw "Invalid argument: " + b + ". Must be .select2-search-choice";
                if (d = b.data("select2-data")) {
                    var f = a.Event("select2-removing");
                    if (f.val = this.id(d), f.choice = d, this.opts.element.trigger(f), f.isDefaultPrevented())
                        return !1;
                    for (; (e = p(this.id(d), c)) >= 0;)
                        c.splice(e, 1), this.setVal(c), this.select && this.postprocessResults();
                    return b.remove(), this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(d),
                        choice: d
                    }), this.triggerChange({
                        removed: d
                    }), !0
                }
            },
            postprocessResults: function(a, b, c) {
                var d = this.getVal(),
                    e = this.results.find(".select2-result"),
                    f = this.results.find(".select2-result-with-children"),
                    g = this;
                e.each2(function(a, b) {
                    var c = g.id(b.data("select2-data"));
                    p(c, d) >= 0 && (b.addClass("select2-selected"), b.find(".select2-result-selectable").addClass("select2-selected"))
                }), f.each2(function(a, b) {
                    b.is(".select2-result-selectable") || 0 !== b.find(".select2-result-selectable:not(.select2-selected)").length || b.addClass("select2-selected")
                }), -1 == this.highlight() && c !== !1 && this.opts.closeOnSelect === !0 && g.highlight(0), !this.opts.createSearchChoice && !e.filter(".select2-result:not(.select2-selected)").length > 0 && (!a || a && !a.more && 0 === this.results.find(".select2-no-results").length) && J(g.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + K(g.opts.formatNoMatches, g.opts.element, g.search.val()) + "</li>")
            },
            getMaxSearchWidth: function() {
                return this.selection.width() - t(this.search)
            },
            resizeSearch: function() {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f = t(this.search);
                a = C(this.search) + 10, b = this.search.offset().left, c = this.selection.width(), d = this.selection.offset().left, e = c - (b - d) - f, a > e && (e = c - f), 40 > e && (e = c - f), 0 >= e && (e = a), this.search.width(Math.floor(e))
            },
            getVal: function() {
                var a;
                return this.select ? (a = this.select.val(), null === a ? [] : a) : (a = this.opts.element.val(), s(a, this.opts.separator, this.opts.transformVal))
            },
            setVal: function(b) {
                var c;
                this.select ? this.select.val(b) : (c = [], a(b).each(function() {
                    p(this, c) < 0 && c.push(this)
                }), this.opts.element.val(0 === c.length ? "" : c.join(this.opts.separator)))
            },
            buildChangeDetails: function(a, b) {
                for (var b = b.slice(0), a = a.slice(0), c = 0; c < b.length; c++)
                    for (var d = 0; d < a.length; d++)
                        r(this.opts.id(b[c]), this.opts.id(a[d])) && (b.splice(c, 1), c > 0 && c--, a.splice(d, 1), d--);
                return {
                    added: b,
                    removed: a
                }
            },
            val: function(c, d) {
                var e,
                    f = this;
                if (0 === arguments.length)
                    return this.getVal();
                if (e = this.data(), e.length || (e = []), !c && 0 !== c)
                    return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), d && this.triggerChange({
                        added: this.data(),
                        removed: e
                    }), void 0;
                if (this.setVal(c), this.select)
                    this.opts.initSelection(this.select, this.bind(this.updateSelection)), d && this.triggerChange(this.buildChangeDetails(e, this.data()));
                else {
                    if (this.opts.initSelection === b)
                        throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function(b) {
                        var c = a.map(b, f.id);
                        f.setVal(c), f.updateSelection(b), f.clearSearch(), d && f.triggerChange(f.buildChangeDetails(e, f.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function() {
                if (this.select)
                    throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0), this.searchContainer.hide()
            },
            onSortEnd: function() {
                var b = [],
                    c = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                    b.push(c.opts.id(a(this).data("select2-data")))
                }), this.setVal(b), this.triggerChange()
            },
            data: function(b, c) {
                var e,
                    f,
                    d = this;
                return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
                    return a(this).data("select2-data")
                }).get() : (f = this.data(), b || (b = []), e = a.map(b, function(a) {
                    return d.opts.id(a)
                }), this.setVal(e), this.updateSelection(b), this.clearSearch(), c && this.triggerChange(this.buildChangeDetails(f, this.data())), void 0)
            }
        }), a.fn.select2 = function() {
            var d,
                e,
                f,
                g,
                h,
                c = Array.prototype.slice.call(arguments, 0),
                i = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                j = ["opened", "isFocused", "container", "dropdown"],
                k = ["val", "data"],
                l = {
                    search: "externalSearch"
                };
            return this.each(function() {
                if (0 === c.length || "object" == typeof c[0])
                    d = 0 === c.length ? {} : a.extend({}, c[0]), d.element = a(this), "select" === d.element.get(0).tagName.toLowerCase() ? h = d.element.prop("multiple") : (h = d.multiple || !1, "tags" in d && (d.multiple = h = !0)), e = h ? new window.Select2["class"].multi : new window.Select2["class"].single, e.init(d);
                else {
                    if ("string" != typeof c[0])
                        throw "Invalid arguments to select2 plugin: " + c;
                    if (p(c[0], i) < 0)
                        throw "Unknown method: " + c[0];
                    if (g = b, e = a(this).data("select2"), e === b)
                        return;
                    if (f = c[0], "container" === f ? g = e.container : "dropdown" === f ? g = e.dropdown : (l[f] && (f = l[f]), g = e[f].apply(e, c.slice(1))), p(c[0], j) >= 0 || p(c[0], k) >= 0 && 1 == c.length)
                        return !1
                }
            }), g === b ? this : g
        }, a.fn.select2.defaults = {
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function(a, b, c, d) {
                var e = [];
                return E(this.text(a), c.term, e, d), e.join("")
            },
            transformVal: function(b) {
                return a.trim(b)
            },
            formatSelection: function(a, c, d) {
                return a ? d(this.text(a)) : b
            },
            sortResults: function(a) {
                return a
            },
            formatResultCssClass: function(a) {
                return a.css
            },
            formatSelectionCssClass: function() {
                return b
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function(a) {
                return a == b ? null : a.id
            },
            text: function(b) {
                return b && this.data && this.data.text ? a.isFunction(this.data.text) ? this.data.text(b) : b[this.data.text] : b.text
            },
            matcher: function(a, b) {
                return o("" + b).toUpperCase().indexOf(o("" + a).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: M,
            escapeMarkup: F,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function(a) {
                return a
            },
            adaptDropdownCssClass: function() {
                return null
            },
            nextSearchTerm: function() {
                return b
            },
            searchInputPlaceholder: "",
            createSearchChoicePosition: "top",
            shouldFocusInput: function(a) {
                var b = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
                return b ? a.opts.minimumResultsForSearch < 0 ? !1 : !0 : !0
            }
        }, a.fn.select2.locales = [], a.fn.select2.locales.en = {
            formatMatches: function(a) {
                return 1 === a ? "One result is available, press enter to select it." : a + " results are available, use up and down arrow keys to navigate."
            },
            formatNoMatches: function() {
                return "No matches found"
            },
            formatAjaxError: function() {
                return "Loading failed"
            },
            formatInputTooShort: function(a, b) {
                var c = b - a.length;
                return "Please enter " + c + " or more character" + (1 == c ? "" : "s")
            },
            formatInputTooLong: function(a, b) {
                var c = a.length - b;
                return "Please delete " + c + " character" + (1 == c ? "" : "s")
            },
            formatSelectionTooBig: function(a) {
                return "You can only select " + a + " item" + (1 == a ? "" : "s")
            },
            formatLoadMore: function() {
                return "Loading more results\u2026"
            },
            formatSearching: function() {
                return "Searching\u2026"
            }
        }, a.extend(a.fn.select2.defaults, a.fn.select2.locales.en), a.fn.select2.ajaxDefaults = {
            transport: a.ajax,
            params: {
                type: "GET",
                cache: !1,
                dataType: "json"
            }
        }, window.Select2 = {
            query: {
                ajax: G,
                local: H,
                tags: I
            },
            util: {
                debounce: w,
                markMatch: E,
                escapeMarkup: F,
                stripDiacritics: o
            },
            "class": {
                "abstract": c,
                single: d,
                multi: e
            }
        }
    }
}(jQuery);
;
/*
 * tipso - A Lightweight Responsive jQuery Tooltip Plugin v1.0.8
 * Copyright (c) 2014-2015 Bojan Petkovski
 * http://tipso.object505.com
 * Licensed under the MIT license
 * http://object505.mit-license.org/
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var pluginName = "tipso",
        defaults = {
            speed: 400,
            background: '#55b555',
            titleBackground: '#333333',
            color: '#ffffff',
            titleColor: '#ffffff',
            titleContent: '',
            showArrow: true,
            position: 'top',
            width: 200,
            maxWidth: '',
            delay: 200,
            hideDelay: 0,
            animationIn: '',
            animationOut: '',
            offsetX: 0,
            offsetY: 0,
            arrowWidth: 8,
            tooltipHover: false,
            content: null,
            ajaxContentUrl: null,
            ajaxContentBuffer: 0,
            contentElementId: null,
            useTitle: false,
            templateEngineFunc: null,
            onBeforeShow: null,
            onShow: null,
            onHide: null
        };
    function Plugin(element, options) {
        this.element = element;
        this.$element = $(this.element);
        this.doc = $(document);
        this.win = $(window);
        this.settings = $.extend({}, defaults, options);
        if (typeof (this.$element.data("tipso")) === "object")
        {
            $.extend(this.settings, this.$element.data("tipso"));
        }
        var data_keys = Object.keys(this.$element.data());
        var data_attrs = {};
        for (var i = 0; i < data_keys.length; i++)
        {
            var key = data_keys[i].replace(pluginName, "");
            if (key === "")
            {
                continue;
            }
            key = key.charAt(0).toLowerCase() + key.slice(1);
            data_attrs[key] = this.$element.data(data_keys[i]);
            for (var settings_key in this.settings)
            {
                if (settings_key.toLowerCase() == key)
                {
                    this.settings[settings_key] = data_attrs[key];
                }
            }
        }
        this._defaults = defaults;
        this._name = pluginName;
        this._title = this.$element.attr('title');
        this.mode = 'hide';
        this.ieFade = !supportsTransitions;
        this.settings.preferedPosition = this.settings.position;
        this.init();
    }
    $.extend(Plugin.prototype, {
        init: function() {
            var obj = this,
                $e = this.$element,
                $doc = this.doc;
            $e.addClass('tipso_style').removeAttr('title');
            if (obj.settings.tooltipHover) {
                var waitForHover = null,
                    hoverHelper = null;
                $e.on('mouseover' + '.' + pluginName, function() {
                    clearTimeout(waitForHover);
                    clearTimeout(hoverHelper);
                    hoverHelper = setTimeout(function() {
                        obj.show();
                    }, 150);
                });
                $e.on('mouseout' + '.' + pluginName, function() {
                    clearTimeout(waitForHover);
                    clearTimeout(hoverHelper);
                    waitForHover = setTimeout(function() {
                        obj.hide();
                    }, 200);
                    obj.tooltip().on('mouseover' + '.' + pluginName, function() {
                        obj.mode = 'tooltipHover';
                    }).on('mouseout' + '.' + pluginName, function() {
                        obj.mode = 'show';
                        clearTimeout(waitForHover);
                        waitForHover = setTimeout(function() {
                            obj.hide();
                        }, 200);
                    });
                });
            } else {
                $e.on('mouseover' + '.' + pluginName, function() {
                    obj.show();
                });
                $e.on('mouseout' + '.' + pluginName, function() {
                    obj.hide();
                });
            }
            if (obj.settings.ajaxContentUrl)
            {
                obj.ajaxContent = null;
            }
        },
        tooltip: function() {
            if (!this.tipso_bubble) {
                this.tipso_bubble = $('<div class="tipso_bubble"><div class="tipso_title"></div><div class="tipso_content_align"><div class="tipso_content"></div></div><div class="tipso_arrow"></div></div>');
            }
            return this.tipso_bubble;
        },
        show: function() {
            var tipso_bubble = this.tooltip(),
                obj = this,
                $win = this.win;
            if (obj.settings.showArrow === false) {
                tipso_bubble.find(".tipso_arrow").hide();
            }
            else {
                tipso_bubble.find(".tipso_arrow").show();
            }
            if (obj.mode === 'hide') {
                if ($.isFunction(obj.settings.onBeforeShow)) {
                    obj.settings.onBeforeShow(obj.$element, obj.element, obj);
                }
                if (obj.settings.size) {
                    tipso_bubble.addClass(obj.settings.size);
                }
                if (obj.settings.width) {
                    tipso_bubble.css({
                        background: obj.settings.background,
                        color: obj.settings.color,
                        width: obj.settings.width
                    }).hide();
                } else if (obj.settings.maxWidth) {
                    tipso_bubble.css({
                        background: obj.settings.background,
                        color: obj.settings.color,
                        maxWidth: obj.settings.maxWidth
                    }).hide();
                } else {
                    tipso_bubble.css({
                        background: obj.settings.background,
                        color: obj.settings.color,
                        width: 200
                    }).hide();
                }
                tipso_bubble.find('.tipso_title').css({
                    background: obj.settings.titleBackground,
                    color: obj.settings.titleColor
                });
                tipso_bubble.find('.tipso_content').html(obj.content());
                tipso_bubble.find('.tipso_title').html(obj.titleContent());
                obj.reposition();
                $win.on('resize' + '.' + pluginName, function tipsoResizeHandler() {
                    obj.settings.position = obj.settings.preferedPosition;
                    obj.reposition();
                });
                window.clearTimeout(obj.timeout);
                obj.timeout = null;
                obj.timeout = window.setTimeout(function() {
                    if (obj.ieFade || obj.settings.animationIn === '' || obj.settings.animationOut === '') {
                        tipso_bubble.appendTo('body').stop(true, true).fadeIn(obj.settings.speed, function() {
                            obj.mode = 'show';
                            if ($.isFunction(obj.settings.onShow)) {
                                obj.settings.onShow(obj.$element, obj.element, obj);
                            }
                        });
                    } else {
                        tipso_bubble.remove().appendTo('body').stop(true, true).removeClass('animated ' + obj.settings.animationOut).addClass('noAnimation').removeClass('noAnimation').addClass('animated ' + obj.settings.animationIn).fadeIn(obj.settings.speed, function() {
                            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass('animated ' + obj.settings.animationIn);
                            });
                            obj.mode = 'show';
                            if ($.isFunction(obj.settings.onShow)) {
                                obj.settings.onShow(obj.$element, obj.element, obj);
                            }
                            $win.off('resize' + '.' + pluginName, null, 'tipsoResizeHandler');
                        });
                    }
                }, obj.settings.delay);
            }
        },
        hide: function(force) {
            var obj = this,
                $win = this.win,
                tipso_bubble = this.tooltip(),
                hideDelay = obj.settings.hideDelay;
            if (force) {
                hideDelay = 0;
                obj.mode = 'show';
            }
            window.clearTimeout(obj.timeout);
            obj.timeout = null;
            obj.timeout = window.setTimeout(function() {
                if (obj.mode !== 'tooltipHover') {
                    if (obj.ieFade || obj.settings.animationIn === '' || obj.settings.animationOut === '') {
                        tipso_bubble.stop(true, true).fadeOut(obj.settings.speed, function() {
                            $(this).remove();
                            if ($.isFunction(obj.settings.onHide) && obj.mode === 'show') {
                                obj.settings.onHide(obj.$element, obj.element, obj);
                            }
                            obj.mode = 'hide';
                            $win.off('resize' + '.' + pluginName, null, 'tipsoResizeHandler');
                        });
                    } else {
                        tipso_bubble.stop(true, true).removeClass('animated ' + obj.settings.animationIn).addClass('noAnimation').removeClass('noAnimation').addClass('animated ' + obj.settings.animationOut).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass('animated ' + obj.settings.animationOut).remove();
                            if ($.isFunction(obj.settings.onHide) && obj.mode === 'show') {
                                obj.settings.onHide(obj.$element, obj.element, obj);
                            }
                            obj.mode = 'hide';
                            $win.off('resize' + '.' + pluginName, null, 'tipsoResizeHandler');
                        });
                    }
                }
            }, hideDelay);
        },
        close: function() {
            this.hide(true);
        },
        destroy: function() {
            var $e = this.$element,
                $win = this.win,
                $doc = this.doc;
            $e.off('.' + pluginName);
            $win.off('resize' + '.' + pluginName);
            $e.removeData(pluginName);
            $e.removeClass('tipso_style').attr('title', this._title);
        },
        titleContent: function() {
            var content,
                $e = this.$element,
                obj = this;
            if (obj.settings.titleContent)
            {
                content = obj.settings.titleContent;
            }
            else
            {
                content = $e.data('tipso-title');
            }
            return content;
        },
        content: function() {
            var content,
                $e = this.$element,
                obj = this,
                title = this._title;
            if (obj.settings.ajaxContentUrl)
            {
                if (obj._ajaxContent)
                {
                    content = obj._ajaxContent;
                }
                else
                {
                    obj._ajaxContent = content = $.ajax({
                        type: "GET",
                        url: obj.settings.ajaxContentUrl,
                        async: false
                    }).responseText;
                    if (obj.settings.ajaxContentBuffer > 0)
                    {
                        setTimeout(function() {
                            obj._ajaxContent = null;
                        }, obj.settings.ajaxContentBuffer);
                    }
                    else
                    {
                        obj._ajaxContent = null;
                    }
                }
            }
            else if (obj.settings.contentElementId)
            {
                content = $("#" + obj.settings.contentElementId).text();
            }
            else if (obj.settings.content)
            {
                content = obj.settings.content;
            }
            else
            {
                if (obj.settings.useTitle === true)
                {
                    content = title;
                }
                else
                {
                    if (typeof ($e.data("tipso")) === "string")
                    {
                        content = $e.data('tipso');
                    }
                }
            }
            if (obj.settings.templateEngineFunc !== null)
            {
                content = obj.settings.templateEngineFunc(content);
            }
            return content;
        },
        update: function(key, value) {
            var obj = this;
            if (value) {
                obj.settings[key] = value;
            } else {
                return obj.settings[key];
            }
        },
        reposition: function() {
            var thisthat = this,
                tipso_bubble = thisthat.tooltip(),
                $e = thisthat.$element,
                obj = thisthat,
                $win = $(window),
                arrow = 10,
                pos_top,
                pos_left,
                diff;
            var arrow_color = obj.settings.background;
            var title_content = obj.titleContent();
            if (title_content !== undefined && title_content !== '') {
                arrow_color = obj.settings.titleBackground;
            }
            if ($e.parent().outerWidth() > $win.outerWidth()) {
                $win = $e.parent();
            }
            switch (obj.settings.position)
            {
            case 'top-right':
                pos_left = $e.offset().left + ($e.outerWidth());
                pos_top = $e.offset().top - realHeight(tipso_bubble).height - arrow;
                tipso_bubble.find('.tipso_arrow').css({
                    marginLeft: -obj.settings.arrowWidth,
                    marginTop: '',
                });
                if (pos_top < $win.scrollTop())
                {
                    pos_top = $e.offset().top + $e.outerHeight() + arrow;
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-bottom-color': arrow_color,
                        'border-top-color': 'transparent',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.addClass("bottom_right_corner");
                    tipso_bubble.find(".tipso_title").addClass("bottom_right_corner");
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-left-color': arrow_color,
                    });
                    tipso_bubble.removeClass('top-right top bottom left right');
                    tipso_bubble.addClass('bottom');
                }
                else
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-top-color': obj.settings.background,
                        'border-bottom-color': 'transparent ',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.addClass("top_right_corner");
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-left-color': obj.settings.background,
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('top');
                }
                break;
            case 'top-left':
                pos_left = $e.offset().left - (realHeight(tipso_bubble).width);
                pos_top = $e.offset().top - realHeight(tipso_bubble).height - arrow;
                tipso_bubble.find('.tipso_arrow').css({
                    marginLeft: -obj.settings.arrowWidth,
                    marginTop: '',
                });
                if (pos_top < $win.scrollTop())
                {
                    pos_top = $e.offset().top + $e.outerHeight() + arrow;
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-bottom-color': arrow_color,
                        'border-top-color': 'transparent',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.addClass("bottom_left_corner");
                    tipso_bubble.find(".tipso_title").addClass("bottom_left_corner");
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-right-color': arrow_color,
                    });
                    tipso_bubble.removeClass('top-right top bottom left right');
                    tipso_bubble.addClass('bottom');
                }
                else
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-top-color': obj.settings.background,
                        'border-bottom-color': 'transparent ',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.addClass("top_left_corner");
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-right-color': obj.settings.background,
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('top');
                }
                break;
            case 'bottom-right':
                pos_left = $e.offset().left + ($e.outerWidth());
                pos_top = $e.offset().top + $e.outerHeight() + arrow;
                tipso_bubble.find('.tipso_arrow').css({
                    marginLeft: -obj.settings.arrowWidth,
                    marginTop: '',
                });
                if (pos_top + realHeight(tipso_bubble).height > $win.scrollTop() + $win.outerHeight())
                {
                    pos_top = $e.offset().top - realHeight(tipso_bubble).height - arrow;
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-bottom-color': 'transparent',
                        'border-top-color': obj.settings.background,
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.addClass("top_right_corner");
                    tipso_bubble.find(".tipso_title").addClass("top_left_corner");
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-left-color': obj.settings.background,
                    });
                    tipso_bubble.removeClass('top-right top bottom left right');
                    tipso_bubble.addClass('top');
                }
                else
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-top-color': 'transparent',
                        'border-bottom-color': arrow_color,
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.addClass("bottom_right_corner");
                    tipso_bubble.find(".tipso_title").addClass("bottom_right_corner");
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-left-color': arrow_color,
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('bottom');
                }
                break;
            case 'bottom-left':
                pos_left = $e.offset().left - (realHeight(tipso_bubble).width);
                pos_top = $e.offset().top + $e.outerHeight() + arrow;
                tipso_bubble.find('.tipso_arrow').css({
                    marginLeft: -obj.settings.arrowWidth,
                    marginTop: '',
                });
                if (pos_top + realHeight(tipso_bubble).height > $win.scrollTop() + $win.outerHeight())
                {
                    pos_top = $e.offset().top - realHeight(tipso_bubble).height - arrow;
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-bottom-color': 'transparent',
                        'border-top-color': obj.settings.background,
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.addClass("top_left_corner");
                    tipso_bubble.find(".tipso_title").addClass("top_left_corner");
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-right-color': obj.settings.background,
                    });
                    tipso_bubble.removeClass('top-right top bottom left right');
                    tipso_bubble.addClass('top');
                }
                else
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-top-color': 'transparent',
                        'border-bottom-color': arrow_color,
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.addClass("bottom_left_corner");
                    tipso_bubble.find(".tipso_title").addClass("bottom_left_corner");
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-right-color': arrow_color,
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('bottom');
                }
                break;
            case 'top':
                pos_left = $e.offset().left + ($e.outerWidth() / 2) - (realHeight(tipso_bubble).width / 2);
                pos_top = $e.offset().top - realHeight(tipso_bubble).height - arrow;
                tipso_bubble.find('.tipso_arrow').css({
                    marginLeft: -obj.settings.arrowWidth,
                    marginTop: '',
                });
                if (pos_top < $win.scrollTop())
                {
                    pos_top = $e.offset().top + $e.outerHeight() + arrow;
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-bottom-color': arrow_color,
                        'border-top-color': 'transparent',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('bottom');
                }
                else
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-top-color': obj.settings.background,
                        'border-bottom-color': 'transparent',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('top');
                }
                break;
            case 'bottom':
                pos_left = $e.offset().left + ($e.outerWidth() / 2) - (realHeight(tipso_bubble).width / 2);
                pos_top = $e.offset().top + $e.outerHeight() + arrow;
                tipso_bubble.find('.tipso_arrow').css({
                    marginLeft: -obj.settings.arrowWidth,
                    marginTop: '',
                });
                if (pos_top + realHeight(tipso_bubble).height > $win.scrollTop() + $win.outerHeight())
                {
                    pos_top = $e.offset().top - realHeight(tipso_bubble).height - arrow;
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-top-color': obj.settings.background,
                        'border-bottom-color': 'transparent',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('top');
                }
                else
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-bottom-color': arrow_color,
                        'border-top-color': 'transparent',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass(obj.settings.position);
                }
                break;
            case 'left':
                pos_left = $e.offset().left - realHeight(tipso_bubble).width - arrow;
                pos_top = $e.offset().top + ($e.outerHeight() / 2) - (realHeight(tipso_bubble).height / 2);
                tipso_bubble.find('.tipso_arrow').css({
                    marginTop: -obj.settings.arrowWidth,
                    marginLeft: ''
                });
                if (pos_left < $win.scrollLeft())
                {
                    pos_left = $e.offset().left + $e.outerWidth() + arrow;
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-right-color': obj.settings.background,
                        'border-left-color': 'transparent',
                        'border-top-color': 'transparent',
                        'border-bottom-color': 'transparent'
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('right');
                }
                else
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-left-color': obj.settings.background,
                        'border-right-color': 'transparent',
                        'border-top-color': 'transparent',
                        'border-bottom-color': 'transparent'
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass(obj.settings.position);
                }
                break;
            case 'right':
                pos_left = $e.offset().left + $e.outerWidth() + arrow;
                pos_top = $e.offset().top + ($e.outerHeight() / 2) - (realHeight(tipso_bubble).height / 2);
                tipso_bubble.find('.tipso_arrow').css({
                    marginTop: -obj.settings.arrowWidth,
                    marginLeft: ''
                });
                if (pos_left + arrow + obj.settings.width > $win.scrollLeft() + $win.outerWidth())
                {
                    pos_left = $e.offset().left - realHeight(tipso_bubble).width - arrow;
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-left-color': obj.settings.background,
                        'border-right-color': 'transparent',
                        'border-top-color': 'transparent',
                        'border-bottom-color': 'transparent'
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('left');
                }
                else
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-right-color': obj.settings.background,
                        'border-left-color': 'transparent',
                        'border-top-color': 'transparent',
                        'border-bottom-color': 'transparent'
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass(obj.settings.position);
                }
                break;
            }
            if (obj.settings.position === 'top-right')
            {
                tipso_bubble.find('.tipso_arrow').css({
                    'margin-left': -obj.settings.width / 2
                });
            }
            if (obj.settings.position === 'top-left')
            {
                var tipso_arrow = tipso_bubble.find(".tipso_arrow").eq(0);
                tipso_arrow.css({
                    'margin-left': obj.settings.width / 2 - 2 * obj.settings.arrowWidth
                });
            }
            if (obj.settings.position === 'bottom-right')
            {
                var tipso_arrow = tipso_bubble.find(".tipso_arrow").eq(0);
                tipso_arrow.css({
                    'margin-left': -obj.settings.width / 2,
                    'margin-top': ''
                });
            }
            if (obj.settings.position === 'bottom-left')
            {
                var tipso_arrow = tipso_bubble.find(".tipso_arrow").eq(0);
                tipso_arrow.css({
                    'margin-left': obj.settings.width / 2 - 2 * obj.settings.arrowWidth,
                    'margin-top': ''
                });
            }
            if (pos_left < $win.scrollLeft() && (obj.settings.position === 'bottom' || obj.settings.position === 'top'))
            {
                tipso_bubble.find('.tipso_arrow').css({
                    marginLeft: pos_left - obj.settings.arrowWidth
                });
                pos_left = 0;
            }
            if (pos_left + obj.settings.width > $win.outerWidth() && (obj.settings.position === 'bottom' || obj.settings.position === 'top'))
            {
                diff = $win.outerWidth() - (pos_left + obj.settings.width);
                tipso_bubble.find('.tipso_arrow').css({
                    marginLeft: -diff - obj.settings.arrowWidth,
                    marginTop: ''
                });
                pos_left = pos_left + diff;
            }
            if (pos_left < $win.scrollLeft() && (obj.settings.position === 'left' || obj.settings.position === 'right' || obj.settings.position === 'top-right' || obj.settings.position === 'top-left' || obj.settings.position === 'bottom-right' || obj.settings.position === 'bottom-left'))
            {
                pos_left = $e.offset().left + ($e.outerWidth() / 2) - (realHeight(tipso_bubble).width / 2);
                tipso_bubble.find('.tipso_arrow').css({
                    marginLeft: -obj.settings.arrowWidth,
                    marginTop: ''
                });
                pos_top = $e.offset().top - realHeight(tipso_bubble).height - arrow;
                if (pos_top < $win.scrollTop())
                {
                    pos_top = $e.offset().top + $e.outerHeight() + arrow;
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-bottom-color': arrow_color,
                        'border-top-color': 'transparent',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.addClass('bottom');
                }
                else
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-top-color': obj.settings.background,
                        'border-bottom-color': 'transparent',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    tipso_bubble.removeClass('top bottom left right');
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.addClass('top');
                }
                if (pos_left + obj.settings.width > $win.outerWidth())
                {
                    diff = $win.outerWidth() - (pos_left + obj.settings.width);
                    tipso_bubble.find('.tipso_arrow').css({
                        marginLeft: -diff - obj.settings.arrowWidth,
                        marginTop: ''
                    });
                    pos_left = pos_left + diff;
                }
                if (pos_left < $win.scrollLeft())
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        marginLeft: pos_left - obj.settings.arrowWidth
                    });
                    pos_left = 0;
                }
            }
            if (pos_left + realHeight(tipso_bubble).width > $win.outerWidth() && (obj.settings.position === 'left' || obj.settings.position === 'right' || obj.settings.position === 'top-right' || obj.settings.position === 'top-left' || obj.settings.position === 'bottom-right' || obj.settings.position === 'bottom-right'))
            {
                pos_left = $e.offset().left + ($e.outerWidth() / 2) - (realHeight(tipso_bubble).width / 2);
                tipso_bubble.find('.tipso_arrow').css({
                    marginLeft: -obj.settings.arrowWidth,
                    marginTop: ''
                });
                pos_top = $e.offset().top - realHeight(tipso_bubble).height - arrow;
                if (pos_top < $win.scrollTop())
                {
                    pos_top = $e.offset().top + $e.outerHeight() + arrow;
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-bottom-color': arrow_color,
                        'border-top-color': 'transparent',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('bottom');
                }
                else
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        'border-top-color': obj.settings.background,
                        'border-bottom-color': 'transparent',
                        'border-left-color': 'transparent',
                        'border-right-color': 'transparent'
                    });
                    removeCornerClasses(tipso_bubble);
                    tipso_bubble.removeClass('top bottom left right');
                    tipso_bubble.addClass('top');
                }
                if (pos_left + realHeight(tipso_bubble).width > $win.outerWidth())
                {
                    diff = $win.outerWidth() - (pos_left + realHeight(tipso_bubble).width);
                    tipso_bubble.find('.tipso_arrow').css({
                        marginLeft: -diff - obj.settings.arrowWidth,
                        marginTop: ''
                    });
                    pos_left = pos_left + diff;
                }
                if (pos_left < $win.scrollLeft())
                {
                    tipso_bubble.find('.tipso_arrow').css({
                        marginLeft: pos_left - obj.settings.arrowWidth
                    });
                    pos_left = 0;
                }
            }
            tipso_bubble.css({
                left: pos_left + obj.settings.offsetX,
                top: pos_top + obj.settings.offsetY
            });
            if (pos_top < $win.scrollTop() && (obj.settings.position === 'right' || obj.settings.position === 'left'))
            {
                $e.tipso('update', 'position', 'bottom');
                obj.reposition();
            }
            if (pos_top + realHeight(tipso_bubble).height > $win.scrollTop() + $win.outerHeight() && (obj.settings.position === 'right' || obj.settings.position === 'left'))
            {
                $e.tipso('update', 'position', 'top');
                obj.reposition();
            }
        }
    });
    function realHeight(obj) {
        var clone = obj.clone();
        clone.css("visibility", "hidden");
        $('body').append(clone);
        var height = clone.outerHeight();
        var width = clone.outerWidth();
        clone.remove();
        return {
            'width': width,
            'height': height
        };
    }
    var supportsTransitions = (function() {
        var s = document.createElement('p').style,
            v = ['ms', 'O', 'Moz', 'Webkit'];
        if (s['transition'] === '')
            return true;
        while (v.length)
            if (v.pop() + 'Transition' in s)
                return true;
        return false;
    })();
    function removeCornerClasses(obj) {
        obj.removeClass("top_right_corner bottom_right_corner top_left_corner bottom_left_corner");
        obj.find(".tipso_title").removeClass("top_right_corner bottom_right_corner top_left_corner bottom_left_corner");
    }
    $[pluginName] = $.fn[pluginName] = function(options) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            if (!(this instanceof $)) {
                $.extend(defaults, options);
            }
            return this.each(function() {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            var returns;
            this.each(function() {
                var instance = $.data(this, 'plugin_' + pluginName);
                if (!instance) {
                    instance = $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
                if (options === 'destroy') {
                    $.data(this, 'plugin_' + pluginName, null);
                }
            });
            return returns !== undefined ? returns : this;
        }
    };
}));
;
/* jQuery UI - v1.11.4+CommonJS - 2015-08-28
* http://jqueryui.com
* Includes: widget.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === "object") {
        factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}(function($) {
    /*
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
    var widget_uuid = 0,
        widget_slice = Array.prototype.slice;
    $.cleanData = (function(orig) {
        return function(elems) {
            var events,
                elem,
                i;
            for (i = 0; (elem = elems[i]) != null; i++) {
                try {
                    events = $._data(elem, "events");
                    if (events && events.remove) {
                        $(elem).triggerHandler("remove");
                    }
                } catch (e) {}
            }
            orig(elems);
        };
    })($.cleanData);
    $.widget = function(name, base, prototype) {
        var fullName,
            existingConstructor,
            constructor,
            basePrototype,
            proxiedPrototype = {},
            namespace = name.split(".")[0];
        name = name.split(".")[1];
        fullName = namespace + "-" + name;
        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }
        $.expr[":"][fullName.toLowerCase()] = function(elem) {
            return !!$.data(elem, fullName);
        };
        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function(options, element) {
            if (!this._createWidget) {
                return new constructor(options, element);
            }
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };
        $.extend(constructor, existingConstructor, {
            version: prototype.version,
            _proto: $.extend({}, prototype),
            _childConstructors: []
        });
        basePrototype = new base();
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function(prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = (function() {
                var _super = function() {
                        return base.prototype[prop].apply(this, arguments);
                    },
                    _superApply = function(args) {
                        return base.prototype[prop].apply(this, args);
                    };
                return function() {
                    var __super = this._super,
                        __superApply = this._superApply,
                        returnValue;
                    this._super = _super;
                    this._superApply = _superApply;
                    returnValue = value.apply(this, arguments);
                    this._super = __super;
                    this._superApply = __superApply;
                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend(basePrototype, {
            widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function(i, child) {
                var childPrototype = child.prototype;
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
            });
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }
        $.widget.bridge(name, constructor);
        return constructor;
    };
    $.widget.extend = function(target) {
        var input = widget_slice.call(arguments, 1),
            inputIndex = 0,
            inputLength = input.length,
            key,
            value;
        for (; inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value);
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };
    $.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function(options) {
            var isMethodCall = typeof options === "string",
                args = widget_slice.call(arguments, 1),
                returnValue = this;
            if (isMethodCall) {
                this.each(function() {
                    var methodValue,
                        instance = $.data(this, fullName);
                    if (options === "instance") {
                        returnValue = instance;
                        return false;
                    }
                    if (!instance) {
                        return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
                    }
                    if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                        return $.error("no such method '" + options + "' for " + name + " widget instance");
                    }
                    methodValue = instance[options].apply(instance, args);
                    if (methodValue !== instance && methodValue !== undefined) {
                        returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                        return false;
                    }
                });
            } else {
                if (args.length) {
                    options = $.widget.extend.apply(null, [options].concat(args));
                }
                this.each(function() {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {});
                        if (instance._init) {
                            instance._init();
                        }
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                });
            }
            return returnValue;
        };
    };
    $.Widget = function() {};
    $.Widget._childConstructors = [];
    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
            create: null
        },
        _createWidget: function(options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widget_uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ? element.ownerDocument : element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }
            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: $.noop,
        widget: function() {
            return this.element;
        },
        option: function(key, value) {
            var options = key,
                parts,
                curOption,
                i;
            if (arguments.length === 0) {
                return $.widget.extend({}, this.options);
            }
            if (typeof key === "string") {
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (arguments.length === 1) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (arguments.length === 1) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }
            this._setOptions(options);
            return this;
        },
        _setOptions: function(options) {
            var key;
            for (key in options) {
                this._setOption(key, options[key]);
            }
            return this;
        },
        _setOption: function(key, value) {
            this.options[key] = value;
            if (key === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled", !!value);
                if (value) {
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus");
                }
            }
            return this;
        },
        enable: function() {
            return this._setOptions({
                disabled: false
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: true
            });
        },
        _on: function(suppressDisabledCheck, element, handlers) {
            var delegateElement,
                instance = this;
            if (typeof suppressDisabledCheck !== "boolean") {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }
            $.each(handlers, function(event, handler) {
                function handlerProxy() {
                    if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
                        return;
                    }
                    return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                }
                if (typeof handler !== "string") {
                    handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
                }
                var match = event.match(/^([\w:-]*)\s*(.*)$/),
                    eventName = match[1] + instance.eventNamespace,
                    selector = match[2];
                if (selector) {
                    delegateElement.delegate(selector, eventName, handlerProxy);
                } else {
                    element.bind(eventName, handlerProxy);
                }
            });
        },
        _off: function(element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace;
            element.unbind(eventName).undelegate(eventName);
            this.bindings = $(this.bindings.not(element).get());
            this.focusable = $(this.focusable.not(element).get());
            this.hoverable = $(this.hoverable.not(element).get());
        },
        _delay: function(handler, delay) {
            function handlerProxy() {
                return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },
        _hoverable: function(element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function(event) {
                    $(event.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(event) {
                    $(event.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function(event) {
                    $(event.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(event) {
                    $(event.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(type, event, data) {
            var prop,
                orig,
                callback = this.options[type];
            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
            event.target = this.element[0];
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
            }
            this.element.trigger(event, data);
            return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
        }
    };
    $.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(method, defaultEffect) {
        $.Widget.prototype["_" + method] = function(element, options, callback) {
            if (typeof options === "string") {
                options = {
                    effect: options
                };
            }
            var hasOptions,
                effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
            options = options || {};
            if (typeof options === "number") {
                options = {
                    duration: options
                };
            }
            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;
            if (options.delay) {
                element.delay(options.delay);
            }
            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue(function(next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                });
            }
        };
    });
    var widget = $.widget;
}));
;
!function(e) {
    "use strict";
    var t = function(e, i, a) {
            var o,
                r,
                n = document.createElement("img");
            if (n.onerror = i, n.onload = function() {
                !r || a && a.noRevoke || t.revokeObjectURL(r), i && i(t.scale(n, a))
            }, t.isInstanceOf("Blob", e) || t.isInstanceOf("File", e))
                o = r = t.createObjectURL(e), n._type = e.type;
            else {
                if ("string" != typeof e)
                    return !1;
                o = e, a && a.crossOrigin && (n.crossOrigin = a.crossOrigin)
            }
            return o ? (n.src = o, n) : t.readFile(e, function(e) {
                var t = e.target;
                t && t.result ? n.src = t.result : i && i(e)
            })
        },
        i = window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL && webkitURL;
    t.isInstanceOf = function(e, t) {
        return Object.prototype.toString.call(t) === "[object " + e + "]"
    }, t.transformCoordinates = function() {}, t.getTransformedOptions = function(e, t) {
        var i,
            a,
            o,
            r,
            n = t.aspectRatio;
        if (!n)
            return t;
        i = {};
        for (a in t)
            t.hasOwnProperty(a) && (i[a] = t[a]);
        return i.crop = !0, o = e.naturalWidth || e.width, r = e.naturalHeight || e.height, o / r > n ? (i.maxWidth = r * n, i.maxHeight = r) : (i.maxWidth = o, i.maxHeight = o / n), i
    }, t.renderImageToCanvas = function(e, t, i, a, o, r, n, s, d, l) {
        return e.getContext("2d").drawImage(t, i, a, o, r, n, s, d, l), e
    }, t.hasCanvasOption = function(e) {
        return e.canvas || e.crop || e.aspectRatio
    }, t.scale = function(e, i) {
        i = i || {};
        var a,
            o,
            r,
            n,
            s,
            d,
            l,
            c,
            u,
            g = document.createElement("canvas"),
            f = e.getContext || t.hasCanvasOption(i) && g.getContext,
            h = e.naturalWidth || e.width,
            m = e.naturalHeight || e.height,
            p = h,
            S = m,
            b = function() {
                var e = Math.max((r || p) / p, (n || S) / S);
                e > 1 && (p *= e, S *= e)
            },
            x = function() {
                var e = Math.min((a || p) / p, (o || S) / S);
                1 > e && (p *= e, S *= e)
            };
        return f && (i = t.getTransformedOptions(e, i), l = i.left || 0, c = i.top || 0, i.sourceWidth ? (s = i.sourceWidth, void 0 !== i.right && void 0 === i.left && (l = h - s - i.right)) : s = h - l - (i.right || 0), i.sourceHeight ? (d = i.sourceHeight, void 0 !== i.bottom && void 0 === i.top && (c = m - d - i.bottom)) : d = m - c - (i.bottom || 0), p = s, S = d), a = i.maxWidth, o = i.maxHeight, r = i.minWidth, n = i.minHeight, f && a && o && i.crop ? (p = a, S = o, u = s / d - a / o, 0 > u ? (d = o * s / a, void 0 === i.top && void 0 === i.bottom && (c = (m - d) / 2)) : u > 0 && (s = a * d / o, void 0 === i.left && void 0 === i.right && (l = (h - s) / 2))) : ((i.contain || i.cover) && (r = a = a || r, n = o = o || n), i.cover ? (x(), b()) : (b(), x())), f ? (g.width = p, g.height = S, t.transformCoordinates(g, i), t.renderImageToCanvas(g, e, l, c, s, d, 0, 0, p, S)) : (e.width = p, e.height = S, e)
    }, t.createObjectURL = function(e) {
        return i ? i.createObjectURL(e) : !1
    }, t.revokeObjectURL = function(e) {
        return i ? i.revokeObjectURL(e) : !1
    }, t.readFile = function(e, t, i) {
        if (window.FileReader) {
            var a = new FileReader;
            if (a.onload = a.onerror = t, i = i || "readAsDataURL", a[i])
                return a[i](e), a
        }
        return !1
    }, "function" == typeof define && define.amd ? define(function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : e.loadImage = t
}(window), function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image"], e) : e("object" == typeof module && module.exports ? require("./load-image") : window.loadImage)
}(function(e) {
    "use strict";
    if (window.navigator && window.navigator.platform && /iP(hone|od|ad)/.test(window.navigator.platform)) {
        var t = e.renderImageToCanvas;
        e.detectSubsampling = function(e) {
            var t,
                i;
            return e.width * e.height > 1048576 ? (t = document.createElement("canvas"), t.width = t.height = 1, i = t.getContext("2d"), i.drawImage(e, -e.width + 1, 0), 0 === i.getImageData(0, 0, 1, 1).data[3]) : !1
        }, e.detectVerticalSquash = function(e, t) {
            var i,
                a,
                o,
                r,
                n,
                s = e.naturalHeight || e.height,
                d = document.createElement("canvas"),
                l = d.getContext("2d");
            for (t && (s /= 2), d.width = 1, d.height = s, l.drawImage(e, 0, 0), i = l.getImageData(0, 0, 1, s).data, a = 0, o = s, r = s; r > a;)
                n = i[4 * (r - 1) + 3], 0 === n ? o = r : a = r, r = o + a >> 1;
            return r / s || 1
        }, e.renderImageToCanvas = function(i, a, o, r, n, s, d, l, c, u) {
            if ("image/jpeg" === a._type) {
                var g,
                    f,
                    h,
                    m,
                    p = i.getContext("2d"),
                    S = document.createElement("canvas"),
                    b = 1024,
                    x = S.getContext("2d");
                if (S.width = b, S.height = b, p.save(), g = e.detectSubsampling(a), g && (o /= 2, r /= 2, n /= 2, s /= 2), f = e.detectVerticalSquash(a, g), g || 1 !== f) {
                    for (r *= f, c = Math.ceil(b * c / n), u = Math.ceil(b * u / s / f), l = 0, m = 0; s > m;) {
                        for (d = 0, h = 0; n > h;)
                            x.clearRect(0, 0, b, b), x.drawImage(a, o, r, n, s, -h, -m, n, s), p.drawImage(S, 0, 0, b, b, d, l, c, u), h += b, d += c;
                        m += b, l += u
                    }
                    return p.restore(), i
                }
            }
            return t(i, a, o, r, n, s, d, l, c, u)
        }
    }
}), function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image"], e) : e("object" == typeof module && module.exports ? require("./load-image") : window.loadImage)
}(function(e) {
    "use strict";
    var t = e.hasCanvasOption,
        i = e.transformCoordinates,
        a = e.getTransformedOptions;
    e.hasCanvasOption = function(i) {
        return t.call(e, i) || i.orientation
    }, e.transformCoordinates = function(t, a) {
        i.call(e, t, a);
        var o = t.getContext("2d"),
            r = t.width,
            n = t.height,
            s = a.orientation;
        if (s && !(s > 8))
            switch (s > 4 && (t.width = n, t.height = r), s) {
            case 2:
                o.translate(r, 0), o.scale(-1, 1);
                break;
            case 3:
                o.translate(r, n), o.rotate(Math.PI);
                break;
            case 4:
                o.translate(0, n), o.scale(1, -1);
                break;
            case 5:
                o.rotate(.5 * Math.PI), o.scale(1, -1);
                break;
            case 6:
                o.rotate(.5 * Math.PI), o.translate(0, -n);
                break;
            case 7:
                o.rotate(.5 * Math.PI), o.translate(r, -n), o.scale(-1, 1);
                break;
            case 8:
                o.rotate(-.5 * Math.PI), o.translate(-r, 0)
            }
    }, e.getTransformedOptions = function(t, i) {
        var o,
            r,
            n = a.call(e, t, i),
            s = n.orientation;
        if (!s || s > 8 || 1 === s)
            return n;
        o = {};
        for (r in n)
            n.hasOwnProperty(r) && (o[r] = n[r]);
        switch (n.orientation) {
        case 2:
            o.left = n.right, o.right = n.left;
            break;
        case 3:
            o.left = n.right, o.top = n.bottom, o.right = n.left, o.bottom = n.top;
            break;
        case 4:
            o.top = n.bottom, o.bottom = n.top;
            break;
        case 5:
            o.left = n.top, o.top = n.left, o.right = n.bottom, o.bottom = n.right;
            break;
        case 6:
            o.left = n.top, o.top = n.right, o.right = n.bottom, o.bottom = n.left;
            break;
        case 7:
            o.left = n.bottom, o.top = n.right, o.right = n.top, o.bottom = n.left;
            break;
        case 8:
            o.left = n.bottom, o.top = n.left, o.right = n.top, o.bottom = n.right
        }
        return n.orientation > 4 && (o.maxWidth = n.maxHeight, o.maxHeight = n.maxWidth, o.minWidth = n.minHeight, o.minHeight = n.minWidth, o.sourceWidth = n.sourceHeight, o.sourceHeight = n.sourceWidth), o
    }
}), function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image"], e) : e("object" == typeof module && module.exports ? require("./load-image") : window.loadImage)
}(function(e) {
    "use strict";
    var t = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
    e.blobSlice = t && function() {
        var e = this.slice || this.webkitSlice || this.mozSlice;
        return e.apply(this, arguments)
    }, e.metaDataParsers = {
        jpeg: {
            65505: []
        }
    }, e.parseMetaData = function(t, i, a) {
        a = a || {};
        var o = this,
            r = a.maxMetaDataSize || 262144,
            n = {},
            s = !(window.DataView && t && t.size >= 12 && "image/jpeg" === t.type && e.blobSlice);
        (s || !e.readFile(e.blobSlice.call(t, 0, r), function(t) {
            if (t.target.error)
                return console.log(t.target.error), void i(n);
            var r,
                s,
                d,
                l,
                c = t.target.result,
                u = new DataView(c),
                g = 2,
                f = u.byteLength - 4,
                h = g;
            if (65496 === u.getUint16(0)) {
                for (; f > g && (r = u.getUint16(g), r >= 65504 && 65519 >= r || 65534 === r);) {
                    if (s = u.getUint16(g + 2) + 2, g + s > u.byteLength) {
                        console.log("Invalid meta data: Invalid segment size.");
                        break
                    }
                    if (d = e.metaDataParsers.jpeg[r])
                        for (l = 0; l < d.length; l += 1)
                            d[l].call(o, u, g, s, n, a);
                    g += s, h = g
                }
                !a.disableImageHead && h > 6 && (c.slice ? n.imageHead = c.slice(0, h) : n.imageHead = new Uint8Array(c).subarray(0, h))
            } else
                console.log("Invalid JPEG file: Missing JPEG marker.");
            i(n)
        }, "readAsArrayBuffer")) && i(n)
    }
}), function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image", "load-image-meta"], e) : "object" == typeof module && module.exports ? e(require("./load-image"), require("./load-image-meta")) : e(window.loadImage)
}(function(e) {
    "use strict";
    e.ExifMap = function() {
        return this
    }, e.ExifMap.prototype.map = {
        Orientation: 274
    }, e.ExifMap.prototype.get = function(e) {
        return this[e] || this[this.map[e]]
    }, e.getExifThumbnail = function(e, t, i) {
        var a,
            o,
            r;
        if (!i || t + i > e.byteLength)
            return void console.log("Invalid Exif data: Invalid thumbnail data.");
        for (a = [], o = 0; i > o; o += 1)
            r = e.getUint8(t + o), a.push((16 > r ? "0" : "") + r.toString(16));
        return "data:image/jpeg,%" + a.join("%")
    }, e.exifTagTypes = {
        1: {
            getValue: function(e, t) {
                return e.getUint8(t)
            },
            size: 1
        },
        2: {
            getValue: function(e, t) {
                return String.fromCharCode(e.getUint8(t))
            },
            size: 1,
            ascii: !0
        },
        3: {
            getValue: function(e, t, i) {
                return e.getUint16(t, i)
            },
            size: 2
        },
        4: {
            getValue: function(e, t, i) {
                return e.getUint32(t, i)
            },
            size: 4
        },
        5: {
            getValue: function(e, t, i) {
                return e.getUint32(t, i) / e.getUint32(t + 4, i)
            },
            size: 8
        },
        9: {
            getValue: function(e, t, i) {
                return e.getInt32(t, i)
            },
            size: 4
        },
        10: {
            getValue: function(e, t, i) {
                return e.getInt32(t, i) / e.getInt32(t + 4, i)
            },
            size: 8
        }
    }, e.exifTagTypes[7] = e.exifTagTypes[1], e.getExifValue = function(t, i, a, o, r, n) {
        var s,
            d,
            l,
            c,
            u,
            g,
            f = e.exifTagTypes[o];
        if (!f)
            return void console.log("Invalid Exif data: Invalid tag type.");
        if (s = f.size * r, d = s > 4 ? i + t.getUint32(a + 8, n) : a + 8, d + s > t.byteLength)
            return void console.log("Invalid Exif data: Invalid data offset.");
        if (1 === r)
            return f.getValue(t, d, n);
        for (l = [], c = 0; r > c; c += 1)
            l[c] = f.getValue(t, d + c * f.size, n);
        if (f.ascii) {
            for (u = "", c = 0; c < l.length && (g = l[c], "\x00" !== g); c += 1)
                u += g;
            return u
        }
        return l
    }, e.parseExifTag = function(t, i, a, o, r) {
        var n = t.getUint16(a, o);
        r.exif[n] = e.getExifValue(t, i, a, t.getUint16(a + 2, o), t.getUint32(a + 4, o), o)
    }, e.parseExifTags = function(e, t, i, a, o) {
        var r,
            n,
            s;
        if (i + 6 > e.byteLength)
            return void console.log("Invalid Exif data: Invalid directory offset.");
        if (r = e.getUint16(i, a), n = i + 2 + 12 * r, n + 4 > e.byteLength)
            return void console.log("Invalid Exif data: Invalid directory size.");
        for (s = 0; r > s; s += 1)
            this.parseExifTag(e, t, i + 2 + 12 * s, a, o);
        return e.getUint32(n, a)
    }, e.parseExifData = function(t, i, a, o, r) {
        if (!r.disableExif) {
            var n,
                s,
                d,
                l = i + 10;
            if (1165519206 === t.getUint32(i + 4)) {
                if (l + 8 > t.byteLength)
                    return void console.log("Invalid Exif data: Invalid segment size.");
                if (0 !== t.getUint16(i + 8))
                    return void console.log("Invalid Exif data: Missing byte alignment offset.");
                switch (t.getUint16(l)) {
                case 18761:
                    n = !0;
                    break;
                case 19789:
                    n = !1;
                    break;
                default:
                    return void console.log("Invalid Exif data: Invalid byte alignment marker.")
                }
                if (42 !== t.getUint16(l + 2, n))
                    return void console.log("Invalid Exif data: Missing TIFF marker.");
                s = t.getUint32(l + 4, n), o.exif = new e.ExifMap, s = e.parseExifTags(t, l, l + s, n, o), s && !r.disableExifThumbnail && (d = {
                    exif: {}
                }, s = e.parseExifTags(t, l, l + s, n, d), d.exif[513] && (o.exif.Thumbnail = e.getExifThumbnail(t, l + d.exif[513], d.exif[514]))), o.exif[34665] && !r.disableExifSub && e.parseExifTags(t, l, l + o.exif[34665], n, o), o.exif[34853] && !r.disableExifGps && e.parseExifTags(t, l, l + o.exif[34853], n, o)
            }
        }
    }, e.metaDataParsers.jpeg[65505].push(e.parseExifData)
}), function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image", "load-image-exif"], e) : "object" == typeof module && module.exports ? e(require("./load-image"), require("./load-image-exif")) : e(window.loadImage)
}(function(e) {
    "use strict";
    e.ExifMap.prototype.tags = {
        256: "ImageWidth",
        257: "ImageHeight",
        34665: "ExifIFDPointer",
        34853: "GPSInfoIFDPointer",
        40965: "InteroperabilityIFDPointer",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        274: "Orientation",
        277: "SamplesPerPixel",
        284: "PlanarConfiguration",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        282: "XResolution",
        283: "YResolution",
        296: "ResolutionUnit",
        273: "StripOffsets",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        513: "JPEGInterchangeFormat",
        514: "JPEGInterchangeFormatLength",
        301: "TransferFunction",
        318: "WhitePoint",
        319: "PrimaryChromaticities",
        529: "YCbCrCoefficients",
        532: "ReferenceBlackWhite",
        306: "DateTime",
        270: "ImageDescription",
        271: "Make",
        272: "Model",
        305: "Software",
        315: "Artist",
        33432: "Copyright",
        36864: "ExifVersion",
        40960: "FlashpixVersion",
        40961: "ColorSpace",
        40962: "PixelXDimension",
        40963: "PixelYDimension",
        42240: "Gamma",
        37121: "ComponentsConfiguration",
        37122: "CompressedBitsPerPixel",
        37500: "MakerNote",
        37510: "UserComment",
        40964: "RelatedSoundFile",
        36867: "DateTimeOriginal",
        36868: "DateTimeDigitized",
        37520: "SubSecTime",
        37521: "SubSecTimeOriginal",
        37522: "SubSecTimeDigitized",
        33434: "ExposureTime",
        33437: "FNumber",
        34850: "ExposureProgram",
        34852: "SpectralSensitivity",
        34855: "PhotographicSensitivity",
        34856: "OECF",
        34864: "SensitivityType",
        34865: "StandardOutputSensitivity",
        34866: "RecommendedExposureIndex",
        34867: "ISOSpeed",
        34868: "ISOSpeedLatitudeyyy",
        34869: "ISOSpeedLatitudezzz",
        37377: "ShutterSpeedValue",
        37378: "ApertureValue",
        37379: "BrightnessValue",
        37380: "ExposureBias",
        37381: "MaxApertureValue",
        37382: "SubjectDistance",
        37383: "MeteringMode",
        37384: "LightSource",
        37385: "Flash",
        37396: "SubjectArea",
        37386: "FocalLength",
        41483: "FlashEnergy",
        41484: "SpatialFrequencyResponse",
        41486: "FocalPlaneXResolution",
        41487: "FocalPlaneYResolution",
        41488: "FocalPlaneResolutionUnit",
        41492: "SubjectLocation",
        41493: "ExposureIndex",
        41495: "SensingMethod",
        41728: "FileSource",
        41729: "SceneType",
        41730: "CFAPattern",
        41985: "CustomRendered",
        41986: "ExposureMode",
        41987: "WhiteBalance",
        41988: "DigitalZoomRatio",
        41989: "FocalLengthIn35mmFilm",
        41990: "SceneCaptureType",
        41991: "GainControl",
        41992: "Contrast",
        41993: "Saturation",
        41994: "Sharpness",
        41995: "DeviceSettingDescription",
        41996: "SubjectDistanceRange",
        42016: "ImageUniqueID",
        42032: "CameraOwnerName",
        42033: "BodySerialNumber",
        42034: "LensSpecification",
        42035: "LensMake",
        42036: "LensModel",
        42037: "LensSerialNumber",
        0: "GPSVersionID",
        1: "GPSLatitudeRef",
        2: "GPSLatitude",
        3: "GPSLongitudeRef",
        4: "GPSLongitude",
        5: "GPSAltitudeRef",
        6: "GPSAltitude",
        7: "GPSTimeStamp",
        8: "GPSSatellites",
        9: "GPSStatus",
        10: "GPSMeasureMode",
        11: "GPSDOP",
        12: "GPSSpeedRef",
        13: "GPSSpeed",
        14: "GPSTrackRef",
        15: "GPSTrack",
        16: "GPSImgDirectionRef",
        17: "GPSImgDirection",
        18: "GPSMapDatum",
        19: "GPSDestLatitudeRef",
        20: "GPSDestLatitude",
        21: "GPSDestLongitudeRef",
        22: "GPSDestLongitude",
        23: "GPSDestBearingRef",
        24: "GPSDestBearing",
        25: "GPSDestDistanceRef",
        26: "GPSDestDistance",
        27: "GPSProcessingMethod",
        28: "GPSAreaInformation",
        29: "GPSDateStamp",
        30: "GPSDifferential",
        31: "GPSHPositioningError"
    }, e.ExifMap.prototype.stringValues = {
        ExposureProgram: {
            0: "Undefined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        },
        MeteringMode: {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        },
        LightSource: {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        },
        Flash: {
            0: "Flash did not fire",
            1: "Flash fired",
            5: "Strobe return light not detected",
            7: "Strobe return light detected",
            9: "Flash fired, compulsory flash mode",
            13: "Flash fired, compulsory flash mode, return light not detected",
            15: "Flash fired, compulsory flash mode, return light detected",
            16: "Flash did not fire, compulsory flash mode",
            24: "Flash did not fire, auto mode",
            25: "Flash fired, auto mode",
            29: "Flash fired, auto mode, return light not detected",
            31: "Flash fired, auto mode, return light detected",
            32: "No flash function",
            65: "Flash fired, red-eye reduction mode",
            69: "Flash fired, red-eye reduction mode, return light not detected",
            71: "Flash fired, red-eye reduction mode, return light detected",
            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            89: "Flash fired, auto mode, red-eye reduction mode",
            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
            1: "Undefined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        },
        SceneCaptureType: {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night scene"
        },
        SceneType: {
            1: "Directly photographed"
        },
        CustomRendered: {
            0: "Normal process",
            1: "Custom process"
        },
        WhiteBalance: {
            0: "Auto white balance",
            1: "Manual white balance"
        },
        GainControl: {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        },
        Contrast: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        Saturation: {
            0: "Normal",
            1: "Low saturation",
            2: "High saturation"
        },
        Sharpness: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        SubjectDistanceRange: {
            0: "Unknown",
            1: "Macro",
            2: "Close view",
            3: "Distant view"
        },
        FileSource: {
            3: "DSC"
        },
        ComponentsConfiguration: {
            0: "",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        },
        Orientation: {
            1: "top-left",
            2: "top-right",
            3: "bottom-right",
            4: "bottom-left",
            5: "left-top",
            6: "right-top",
            7: "right-bottom",
            8: "left-bottom"
        }
    }, e.ExifMap.prototype.getText = function(e) {
        var t = this.get(e);
        switch (e) {
        case "LightSource":
        case "Flash":
        case "MeteringMode":
        case "ExposureProgram":
        case "SensingMethod":
        case "SceneCaptureType":
        case "SceneType":
        case "CustomRendered":
        case "WhiteBalance":
        case "GainControl":
        case "Contrast":
        case "Saturation":
        case "Sharpness":
        case "SubjectDistanceRange":
        case "FileSource":
        case "Orientation":
            return this.stringValues[e][t];
        case "ExifVersion":
        case "FlashpixVersion":
            return String.fromCharCode(t[0], t[1], t[2], t[3]);
        case "ComponentsConfiguration":
            return this.stringValues[e][t[0]] + this.stringValues[e][t[1]] + this.stringValues[e][t[2]] + this.stringValues[e][t[3]];
        case "GPSVersionID":
            return t[0] + "." + t[1] + "." + t[2] + "." + t[3]
        }
        return String(t)
    }, function(e) {
        var t,
            i = e.tags,
            a = e.map;
        for (t in i)
            i.hasOwnProperty(t) && (a[i[t]] = t)
    }(e.ExifMap.prototype), e.ExifMap.prototype.getAll = function() {
        var e,
            t,
            i = {};
        for (e in this)
            this.hasOwnProperty(e) && (t = this.tags[e], t && (i[t] = this.getText(t)));
        return i
    }
});
;
!function(t) {
    "use strict";
    var e = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype,
        o = t.Blob && function() {
            try {
                return Boolean(new Blob)
            } catch (t) {
                return !1
            }
        }(),
        n = o && t.Uint8Array && function() {
            try {
                return 100 === new Blob([new Uint8Array(100)]).size
            } catch (t) {
                return !1
            }
        }(),
        r = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder,
        a = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
        i = (o || r) && t.atob && t.ArrayBuffer && t.Uint8Array && function(t) {
            var e,
                i,
                l,
                u,
                b,
                c,
                d,
                B,
                f;
            if (e = t.match(a), !e)
                throw new Error("invalid data URI");
            for (i = e[2] ? e[1] : "text/plain" + (e[3] || ";charset=US-ASCII"), l = !!e[4], u = t.slice(e[0].length), b = l ? atob(u) : decodeURIComponent(u), c = new ArrayBuffer(b.length), d = new Uint8Array(c), B = 0; B < b.length; B += 1)
                d[B] = b.charCodeAt(B);
            return o ? new Blob([n ? d : c], {
                type: i
            }) : (f = new r, f.append(c), f.getBlob(i))
        };
    t.HTMLCanvasElement && !e.toBlob && (e.mozGetAsFile ? e.toBlob = function(t, o, n) {
        t(n && e.toDataURL && i ? i(this.toDataURL(o, n)) : this.mozGetAsFile("blob", o))
    } : e.toDataURL && i && (e.toBlob = function(t, e, o) {
        t(i(this.toDataURL(e, o)))
    })), "function" == typeof define && define.amd ? define(function() {
        return i
    }) : "object" == typeof module && module.exports ? module.exports = i : t.dataURLtoBlob = i
}(window);
;
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
}(function($) {
    'use strict';
    var counter = 0;
    $.ajaxTransport('iframe', function(options) {
        if (options.async) {
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
                form,
                iframe,
                addParamChar;
            return {
                send: function(_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    counter += 1;
                    iframe = $('<iframe src="' + initialIframeSrc + '" name="iframe-transport-' + counter + '"></iframe>').bind('load', function() {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ? options.paramName : [options.paramName];
                        iframe.unbind('load').bind('load', function() {
                            var response;
                            try {
                                response = iframe.contents();
                                if (!response.length || !response[0].firstChild) {
                                    throw new Error();
                                }
                            } catch (e) {
                                response = undefined;
                            }
                            completeCallback(200, 'success', {
                                'iframe': response
                            });
                            $('<iframe src="' + initialIframeSrc + '"></iframe>').appendTo(form);
                            window.setTimeout(function() {
                                form.remove();
                            }, 0);
                        });
                        form.prop('target', iframe.prop('name')).prop('action', options.url).prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function(index, field) {
                                $('<input type="hidden"/>').prop('name', field.name).val(field.value).appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length && options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            options.fileInput.after(function(index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function(index) {
                                    $(this).prop('name', paramNames[index] || options.paramName);
                                });
                            }
                            form.append(options.fileInput).prop('enctype', 'multipart/form-data').prop('encoding', 'multipart/form-data');
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function(index, input) {
                                var clone = $(fileInputClones[index]);
                                $(input).prop('name', clone.prop('name')).attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function() {
                    if (iframe) {
                        iframe.unbind('load').prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });
    $.ajaxSetup({
        converters: {
            'iframe text': function(iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function(iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function(iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function(iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc : $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) || $(xmlDoc.body).html());
            },
            'iframe script': function(iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });
}));
;
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'jquery.ui.widget'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('./vendor/jquery.ui.widget'));
    } else {
        factory(window.jQuery);
    }
}(function($) {
    'use strict';
    $.support.fileInput = !(new RegExp('(Android (1\\.[0156]|2\\.[01]))' + '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' + '|(w(eb)?OSBrowser)|(webOS)' + '|(Kindle/(1\\.0|2\\.[05]|3\\.0))').test(window.navigator.userAgent) || $('<input type="file">').prop('disabled'));
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;
    $.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function(e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 && this._trigger(type, $.Event(type, {
                delegatedEvent: e
            })) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }
    $.widget('blueimp.fileupload', {
        options: {
            dropZone: $(document),
            pasteZone: undefined,
            fileInput: undefined,
            replaceFileInput: true,
            paramName: undefined,
            singleFileUploads: true,
            limitMultiFileUploads: undefined,
            limitMultiFileUploadSize: undefined,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: false,
            limitConcurrentUploads: undefined,
            forceIframeTransport: false,
            redirect: undefined,
            redirectParamName: undefined,
            postMessage: undefined,
            multipart: true,
            maxChunkSize: undefined,
            uploadedBytes: undefined,
            recalculateProgress: true,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: true,
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },
            i18n: function(message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function(key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },
            formData: function(form) {
                return form.serializeArray();
            },
            add: function(e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false && $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function() {
                        data.submit();
                    });
                }
            },
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },
        _specialOptions: ['fileInput', 'dropZone', 'pasteZone', 'multipart', 'forceIframeTransport'],
        _blobSlice: $.support.blobSlice && function() {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },
        _BitrateTimer: function() {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function(now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },
        _isXHRUpload: function(options) {
            return !options.forceIframeTransport && ((!options.multipart && $.support.xhrFileUpload) || $.support.xhrFormDataFileUpload);
        },
        _getFormData: function(options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function(name, value) {
                    formData.push({
                        name: name,
                        value: value
                    });
                });
                return formData;
            }
            return [];
        },
        _getTotal: function(files) {
            var total = 0;
            $.each(files, function(index, file) {
                total += file.size || 1;
            });
            return total;
        },
        _initProgressObject: function(obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },
        _initResponseObject: function(obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },
        _onProgress: function(e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval && (now - data._time < data.progressInterval) && e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(e.loaded / e.total * (data.chunkSize || data._progress.total)) + (data.uploadedBytes || 0);
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(now, this._progress.loaded, data.bitrateInterval);
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(now, loaded, data.bitrateInterval);
                this._trigger('progress', $.Event('progress', {
                    delegatedEvent: e
                }), data);
                this._trigger('progressall', $.Event('progressall', {
                    delegatedEvent: e
                }), this._progress);
            }
        },
        _initProgressListener: function(options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function(e) {
                    var oe = e.originalEvent;
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function() {
                    return xhr;
                };
            }
        },
        _isInstanceOf: function(type, obj) {
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },
        _initXHRData: function(options) {
            var that = this,
                formData,
                file = options.files[0],
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ? options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function(index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' && options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function(index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function(index, file) {
                            if (that._isInstanceOf('File', file) || that._isInstanceOf('Blob', file)) {
                                formData.append(($.type(options.paramName) === 'array' && options.paramName[index]) || paramName, file, file.uploadName || file.name);
                            }
                        });
                    }
                }
                options.data = formData;
            }
            options.blob = null;
        },
        _initIframeSettings: function(options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            options.dataType = 'iframe ' + (options.dataType || '');
            options.formData = this._getFormData(options);
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },
        _initDataSettings: function(options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },
        _getParamName: function(options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function() {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },
        _initFormSettings: function(options) {
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            options.type = (options.type || ($.type(options.form.prop('method')) === 'string' && options.form.prop('method')) || '').toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' && options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },
        _getAJAXSettings: function(data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },
        _getDeferredState: function(deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },
        _enhancePromise: function(promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },
        _getXHRPromise: function(resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },
        _addConvenienceMethods: function(e, data) {
            var that = this,
                getPromise = function(args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function(resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue = (this._processQueue || getPromise([this])).pipe(function() {
                        if (data.errorThrown) {
                            return $.Deferred().rejectWith(that, [data]).promise();
                        }
                        return getPromise(arguments);
                    }).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function() {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR = (that._trigger('submit', $.Event('submit', {
                        delegatedEvent: e
                    }), this) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function() {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function() {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function() {
                return !this.jqXHR && this._processQueue && that._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function() {
                return this._progress;
            };
            data.response = function() {
                return this._response;
            };
        },
        _getUploadedBytes: function(jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 && parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },
        _chunkedUpload: function(options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) || options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(false, options.context, [null, 'error', file.error]);
            }
            upload = function() {
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(file, ub, ub + mcs, file.type);
                o.chunkSize = o.blob.size;
                o.contentRange = 'bytes ' + ub + '-' +
                (ub + o.chunkSize - 1) + '/' + fs;
                that._initXHRData(o);
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) || that._getXHRPromise(false, o.context)).done(function(result, textStatus, jqXHR) {
                    ub = that._getUploadedBytes(jqXHR) || (ub + o.chunkSize);
                    if (currentLoaded + o.chunkSize - o._progress.loaded) {
                        that._onProgress($.Event('progress', {
                            lengthComputable: true,
                            loaded: ub - o.uploadedBytes,
                            total: ub - o.uploadedBytes
                        }), o);
                    }
                    options.uploadedBytes = o.uploadedBytes = ub;
                    o.result = result;
                    o.textStatus = textStatus;
                    o.jqXHR = jqXHR;
                    that._trigger('chunkdone', null, o);
                    that._trigger('chunkalways', null, o);
                    if (ub < fs) {
                        upload();
                    } else {
                        dfd.resolveWith(o.context, [result, textStatus, jqXHR]);
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    o.jqXHR = jqXHR;
                    o.textStatus = textStatus;
                    o.errorThrown = errorThrown;
                    that._trigger('chunkfail', null, o);
                    that._trigger('chunkalways', null, o);
                    dfd.rejectWith(o.context, [jqXHR, textStatus, errorThrown]);
                });
            };
            this._enhancePromise(promise);
            promise.abort = function() {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },
        _beforeSend: function(e, data) {
            if (this._active === 0) {
                this._trigger('start');
                this._bitrateTimer = new this._BitrateTimer();
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },
        _onDone: function(result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },
        _onFail: function(jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },
        _onAlways: function(jqXHRorResult, textStatus, jqXHRorError, options) {
            this._trigger('always', null, options);
        },
        _onSend: function(e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function() {
                    that._sending += 1;
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (((aborted || that._trigger('send', $.Event('send', {
                        delegatedEvent: e
                    }), options) === false) && that._getXHRPromise(false, options.context, aborted)) || that._chunkedUpload(options) || $.ajax(options)).done(function(result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function(jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function(jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(jqXHRorResult, textStatus, jqXHRorError, options);
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads && options.limitConcurrentUploads > that._sending) {
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads || (this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                pipe.abort = function() {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },
        _onAdd: function(e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (!filesLength) {
                return false;
            }
            if (limitSize && files[0].size === undefined) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) || !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength || ((batchSize + files[i + 1].size + overhead) > limitSize) || (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function(index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger('add', $.Event('add', {
                    delegatedEvent: e
                }), newData);
                return result;
            });
            return result;
        },
        _replaceFileInput: function(data) {
            var input = data.fileInput,
                inputClone = input.clone(true),
                restoreFocus = input.is(document.activeElement);
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            input.after(inputClone).detach();
            if (restoreFocus) {
                inputClone.focus();
            }
            $.cleanData(input.unbind('remove'));
            this.options.fileInput = this.options.fileInput.map(function(i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },
        _handleFileTreeEntry: function(entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function(e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    dfd.resolve([e]);
                },
                successHandler = function(entries) {
                    that._handleFileTreeEntries(entries, path + entry.name + '/').done(function(files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function() {
                    dirReader.readEntries(function(results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader,
                entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function(file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                dfd.resolve([]);
            }
            return dfd.promise();
        },
        _handleFileTreeEntries: function(entries, path) {
            var that = this;
            return $.when.apply($, $.map(entries, function(entry) {
                return that._handleFileTreeEntry(entry, path);
            })).pipe(function() {
                return Array.prototype.concat.apply([], arguments);
            });
        },
        _getDroppedFiles: function(dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
                return this._handleFileTreeEntries($.map(items, function(item) {
                    var entry;
                    if (item.webkitGetAsEntry) {
                        entry = item.webkitGetAsEntry();
                        if (entry) {
                            entry._file = item.getAsFile();
                        }
                        return entry;
                    }
                    return item.getAsEntry();
                }));
            }
            return $.Deferred().resolve($.makeArray(dataTransfer.files)).promise();
        },
        _getSingleFileInputFiles: function(fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') || fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                files = [{
                    name: value.replace(/^.*\\/, '')
                }];
            } else if (files[0].name === undefined && files[0].fileName) {
                $.each(files, function(index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },
        _getFileInputFiles: function(fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply($, $.map(fileInput, this._getSingleFileInputFiles)).pipe(function() {
                return Array.prototype.concat.apply([], arguments);
            });
        },
        _onChange: function(e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function(files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger('change', $.Event('change', {
                    delegatedEvent: e
                }), data) !== false) {
                    that._onAdd(e, data);
                }
            });
        },
        _onPaste: function(e) {
            var items = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
                data = {
                    files: []
                };
            if (items && items.length) {
                $.each(items, function(index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger('paste', $.Event('paste', {
                    delegatedEvent: e
                }), data) !== false) {
                    this._onAdd(e, data);
                }
            }
        },
        _onDrop: function(e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function(files) {
                    data.files = files;
                    if (that._trigger('drop', $.Event('drop', {
                        delegatedEvent: e
                    }), data) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },
        _onDragOver: getDragHandler('dragover'),
        _onDragEnter: getDragHandler('dragenter'),
        _onDragLeave: getDragHandler('dragleave'),
        _initEventHandlers: function() {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    dragenter: this._onDragEnter,
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },
        _destroyEventHandlers: function() {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },
        _setOption: function(key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },
        _initSpecialOptions: function() {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },
        _getRegExp: function(str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },
        _isRegExpOption: function(key, value) {
            return key !== 'url' && $.type(value) === 'string' && /^\/.*\/[igm]{0,3}$/.test(value);
        },
        _initDataAttributes: function() {
            var that = this,
                options = this.options,
                data = this.element.data();
            $.each(this.element[0].attributes, function(index, attr) {
                var key = attr.name.toLowerCase(),
                    value;
                if (/^data-/.test(key)) {
                    key = key.slice(5).replace(/-[a-z]/g, function(str) {
                        return str.charAt(1).toUpperCase();
                    });
                    value = data[key];
                    if (that._isRegExpOption(key, value)) {
                        value = that._getRegExp(value);
                    }
                    options[key] = value;
                }
            });
        },
        _create: function() {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },
        active: function() {
            return this._active;
        },
        progress: function() {
            return this._progress;
        },
        add: function(data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function(files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },
        send: function(data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function() {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(function(files) {
                        if (aborted) {
                            return;
                        }
                        if (!files.length) {
                            dfd.reject();
                            return;
                        }
                        data.files = files;
                        jqXHR = that._onSend(null, data);
                        jqXHR.then(function(result, textStatus, jqXHR) {
                            dfd.resolve(result, textStatus, jqXHR);
                        }, function(jqXHR, textStatus, errorThrown) {
                            dfd.reject(jqXHR, textStatus, errorThrown);
                        });
                    });
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }
    });
}));
;
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery', './jquery.fileupload'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
}(function($) {
    'use strict';
    var originalAdd = $.blueimp.fileupload.prototype.options.add;
    $.widget('blueimp.fileupload', $.blueimp.fileupload, {
        options: {
            processQueue: [],
            add: function(e, data) {
                var $this = $(this);
                data.process(function() {
                    return $this.fileupload('process', data);
                });
                originalAdd.call(this, e, data);
            }
        },
        processActions: {},
        _processFile: function(data, originalData) {
            var that = this,
                dfd = $.Deferred().resolveWith(that, [data]),
                chain = dfd.promise();
            this._trigger('process', null, data);
            $.each(data.processQueue, function(i, settings) {
                var func = function(data) {
                    if (originalData.errorThrown) {
                        return $.Deferred().rejectWith(that, [originalData]).promise();
                    }
                    return that.processActions[settings.action].call(that, data, settings);
                };
                chain = chain.pipe(func, settings.always && func);
            });
            chain.done(function() {
                that._trigger('processdone', null, data);
                that._trigger('processalways', null, data);
            }).fail(function() {
                that._trigger('processfail', null, data);
                that._trigger('processalways', null, data);
            });
            return chain;
        },
        _transformProcessQueue: function(options) {
            var processQueue = [];
            $.each(options.processQueue, function() {
                var settings = {},
                    action = this.action,
                    prefix = this.prefix === true ? action : this.prefix;
                $.each(this, function(key, value) {
                    if ($.type(value) === 'string' && value.charAt(0) === '@') {
                        settings[key] = options[value.slice(1) || (prefix ? prefix +
                        key.charAt(0).toUpperCase() + key.slice(1) : key)];
                    } else {
                        settings[key] = value;
                    }
                });
                processQueue.push(settings);
            });
            options.processQueue = processQueue;
        },
        processing: function() {
            return this._processing;
        },
        process: function(data) {
            var that = this,
                options = $.extend({}, this.options, data);
            if (options.processQueue && options.processQueue.length) {
                this._transformProcessQueue(options);
                if (this._processing === 0) {
                    this._trigger('processstart');
                }
                $.each(data.files, function(index) {
                    var opts = index ? $.extend({}, options) : options,
                        func = function() {
                            if (data.errorThrown) {
                                return $.Deferred().rejectWith(that, [data]).promise();
                            }
                            return that._processFile(opts, data);
                        };
                    opts.index = index;
                    that._processing += 1;
                    that._processingQueue = that._processingQueue.pipe(func, func).always(function() {
                        that._processing -= 1;
                        if (that._processing === 0) {
                            that._trigger('processstop');
                        }
                    });
                });
            }
            return this._processingQueue;
        },
        _create: function() {
            this._super();
            this._processing = 0;
            this._processingQueue = $.Deferred().resolveWith(this).promise();
        }
    });
}));
;
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'load-image', 'load-image-meta', 'load-image-exif', 'load-image-ios', 'canvas-to-blob', './jquery.fileupload-process'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('load-image'));
    } else {
        factory(window.jQuery, window.loadImage);
    }
}(function($, loadImage) {
    'use strict';
    $.blueimp.fileupload.prototype.options.processQueue.unshift({
        action: 'loadImageMetaData',
        disableImageHead: '@',
        disableExif: '@',
        disableExifThumbnail: '@',
        disableExifSub: '@',
        disableExifGps: '@',
        disabled: '@disableImageMetaDataLoad'
    }, {
        action: 'loadImage',
        prefix: true,
        fileTypes: '@',
        maxFileSize: '@',
        noRevoke: '@',
        disabled: '@disableImageLoad'
    }, {
        action: 'resizeImage',
        prefix: 'image',
        maxWidth: '@',
        maxHeight: '@',
        minWidth: '@',
        minHeight: '@',
        crop: '@',
        orientation: '@',
        forceResize: '@',
        disabled: '@disableImageResize'
    }, {
        action: 'saveImage',
        quality: '@imageQuality',
        type: '@imageType',
        disabled: '@disableImageResize'
    }, {
        action: 'saveImageMetaData',
        disabled: '@disableImageMetaDataSave'
    }, {
        action: 'resizeImage',
        prefix: 'preview',
        maxWidth: '@',
        maxHeight: '@',
        minWidth: '@',
        minHeight: '@',
        crop: '@',
        orientation: '@',
        thumbnail: '@',
        canvas: '@',
        disabled: '@disableImagePreview'
    }, {
        action: 'setImage',
        name: '@imagePreviewName',
        disabled: '@disableImagePreview'
    }, {
        action: 'deleteImageReferences',
        disabled: '@disableImageReferencesDeletion'
    });
    $.widget('blueimp.fileupload', $.blueimp.fileupload, {
        options: {
            loadImageFileTypes: /^image\/(gif|jpeg|png|svg\+xml)$/,
            loadImageMaxFileSize: 10000000,
            imageMaxWidth: 1920,
            imageMaxHeight: 1080,
            imageOrientation: false,
            imageCrop: false,
            disableImageResize: true,
            previewMaxWidth: 80,
            previewMaxHeight: 80,
            previewOrientation: true,
            previewThumbnail: true,
            previewCrop: false,
            previewCanvas: true
        },
        processActions: {
            loadImage: function(data, options) {
                if (options.disabled) {
                    return data;
                }
                var that = this,
                    file = data.files[data.index],
                    dfd = $.Deferred();
                if (($.type(options.maxFileSize) === 'number' && file.size > options.maxFileSize) || (options.fileTypes && !options.fileTypes.test(file.type)) || !loadImage(file, function(img) {
                    if (img.src) {
                        data.img = img;
                    }
                    dfd.resolveWith(that, [data]);
                }, options)) {
                    return data;
                }
                return dfd.promise();
            },
            resizeImage: function(data, options) {
                if (options.disabled || !(data.canvas || data.img)) {
                    return data;
                }
                options = $.extend({
                    canvas: true
                }, options);
                var that = this,
                    dfd = $.Deferred(),
                    img = (options.canvas && data.canvas) || data.img,
                    resolve = function(newImg) {
                        if (newImg && (newImg.width !== img.width || newImg.height !== img.height || options.forceResize)) {
                            data[newImg.getContext ? 'canvas' : 'img'] = newImg;
                        }
                        data.preview = newImg;
                        dfd.resolveWith(that, [data]);
                    },
                    thumbnail;
                if (data.exif) {
                    if (options.orientation === true) {
                        options.orientation = data.exif.get('Orientation');
                    }
                    if (options.thumbnail) {
                        thumbnail = data.exif.get('Thumbnail');
                        if (thumbnail) {
                            loadImage(thumbnail, resolve, options);
                            return dfd.promise();
                        }
                    }
                    if (data.orientation) {
                        delete options.orientation;
                    } else {
                        data.orientation = options.orientation;
                    }
                }
                if (img) {
                    resolve(loadImage.scale(img, options));
                    return dfd.promise();
                }
                return data;
            },
            saveImage: function(data, options) {
                if (!data.canvas || options.disabled) {
                    return data;
                }
                var that = this,
                    file = data.files[data.index],
                    dfd = $.Deferred();
                if (data.canvas.toBlob) {
                    data.canvas.toBlob(function(blob) {
                        if (!blob.name) {
                            if (file.type === blob.type) {
                                blob.name = file.name;
                            } else if (file.name) {
                                blob.name = file.name.replace(/\.\w+$/, '.' + blob.type.substr(6));
                            }
                        }
                        if (file.type !== blob.type) {
                            delete data.imageHead;
                        }
                        data.files[data.index] = blob;
                        dfd.resolveWith(that, [data]);
                    }, options.type || file.type, options.quality);
                } else {
                    return data;
                }
                return dfd.promise();
            },
            loadImageMetaData: function(data, options) {
                if (options.disabled) {
                    return data;
                }
                var that = this,
                    dfd = $.Deferred();
                loadImage.parseMetaData(data.files[data.index], function(result) {
                    $.extend(data, result);
                    dfd.resolveWith(that, [data]);
                }, options);
                return dfd.promise();
            },
            saveImageMetaData: function(data, options) {
                if (!(data.imageHead && data.canvas && data.canvas.toBlob && !options.disabled)) {
                    return data;
                }
                var file = data.files[data.index],
                    blob = new Blob([data.imageHead, this._blobSlice.call(file, 20)], {
                        type: file.type
                    });
                blob.name = file.name;
                data.files[data.index] = blob;
                return data;
            },
            setImage: function(data, options) {
                if (data.preview && !options.disabled) {
                    data.files[data.index][options.name || 'preview'] = data.preview;
                }
                return data;
            },
            deleteImageReferences: function(data, options) {
                if (!options.disabled) {
                    delete data.img;
                    delete data.canvas;
                    delete data.preview;
                    delete data.imageHead;
                }
                return data;
            }
        }
    });
}));
;
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery', './jquery.fileupload-process'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
}(function($) {
    'use strict';
    $.blueimp.fileupload.prototype.options.processQueue.push({
        action: 'validate',
        always: true,
        acceptFileTypes: '@',
        maxFileSize: '@',
        minFileSize: '@',
        maxNumberOfFiles: '@',
        disabled: '@disableValidation'
    });
    $.widget('blueimp.fileupload', $.blueimp.fileupload, {
        options: {
            getNumberOfFiles: $.noop,
            messages: {
                maxNumberOfFiles: 'Maximum number of files exceeded',
                acceptFileTypes: 'File type not allowed',
                maxFileSize: 'File is too large',
                minFileSize: 'File is too small'
            }
        },
        processActions: {
            validate: function(data, options) {
                if (options.disabled) {
                    return data;
                }
                var dfd = $.Deferred(),
                    settings = this.options,
                    file = data.files[data.index],
                    fileSize;
                if (options.minFileSize || options.maxFileSize) {
                    fileSize = file.size;
                }
                if ($.type(options.maxNumberOfFiles) === 'number' && (settings.getNumberOfFiles() || 0) + data.files.length > options.maxNumberOfFiles) {
                    file.error = settings.i18n('maxNumberOfFiles');
                } else if (options.acceptFileTypes && !(options.acceptFileTypes.test(file.type) || options.acceptFileTypes.test(file.name))) {
                    file.error = settings.i18n('acceptFileTypes');
                } else if (fileSize > options.maxFileSize) {
                    file.error = settings.i18n('maxFileSize');
                } else if ($.type(fileSize) === 'number' && fileSize < options.minFileSize) {
                    file.error = settings.i18n('minFileSize');
                } else {
                    delete file.error;
                }
                if (file.error || data.files.error) {
                    data.files.error = true;
                    dfd.rejectWith(this, [data]);
                } else {
                    dfd.resolveWith(this, [data]);
                }
                return dfd.promise();
            }
        }
    });
}));
;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require, exports, module);
    } else {
        root.ScrollReveal = factory();
    }
}(this, function(require, exports, module) {
    (function() {
        var Tools,
            sr,
            _requestAnimationFrame;
        this.ScrollReveal = (function() {
            ScrollReveal.prototype.defaults = {
                origin: 'bottom',
                distance: '20px',
                duration: 500,
                delay: 0,
                rotate: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                opacity: 0,
                scale: 0.9,
                easing: 'cubic-bezier( 0.6, 0.2, 0.1, 1 )',
                container: null,
                mobile: true,
                reset: false,
                useDelay: 'always',
                viewFactor: 0.2,
                viewOffset: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                afterReveal: function(domEl) {},
                afterReset: function(domEl) {}
            };
            function ScrollReveal(config) {
                if (window == this) {
                    return new ScrollReveal(config);
                }
                sr = this;
                sr.tools = new Tools();
                sr.tools.extend(sr.defaults, config || {});
                if (!sr.supported()) {
                    console.log('ScrollReveal is not supported in this browser.');
                }
                sr.store = {
                    elements: {},
                    containers: []
                };
                sr.history = [];
                sr.counter = 0;
                sr.initialized = false;
                return sr;
            }
            ScrollReveal.prototype.supported = function() {
                var style = document.documentElement.style;
                return ('WebkitTransition' in style && 'WebkitTransform' in style || 'transition' in style && 'transform' in style) ? true : false;
            };
            ScrollReveal.prototype.reveal = function(selector, config, sync) {
                var elements,
                    container,
                    elem,
                    elemId;
                if (config && config.container) {
                    container = config.container;
                } else if (sr.defaults.container) {
                    container = sr.defaults.container;
                } else {
                    container = window.document.documentElement;
                }
                elements = Array.prototype.slice.call(container.querySelectorAll(selector));
                if (!elements.length) {
                    console.log();
                    return sr;
                }
                for (var i = 0; i < elements.length; i++) {
                    elemId = elements[i].getAttribute('data-sr-id');
                    if (elemId) {
                        elem = sr.store.elements[elemId];
                    }
                    else {
                        elem = {
                            id: ++sr.counter,
                            domEl: elements[i],
                            seen: false,
                            revealed: false
                        };
                        elem.domEl.setAttribute('data-sr-id', elem.id);
                    }
                    _configure(elem, config || {});
                    _style(elem);
                    _updateStore(elem);
                    if (sr.tools.isMobile() && !elem.config.mobile || !sr.supported()) {
                        elem.domEl.setAttribute('style', elem.styles.inline);
                        elem.disabled = true;
                    }
                    else if (!elem.revealed) {
                        elem.domEl.setAttribute('style', elem.styles.inline
                        + elem.styles.transform.initial);
                    }
                }
                if (!sync && sr.supported()) {
                    _record(selector, config);
                    if (sr.initTimeout) {
                        window.clearTimeout(sr.initTimeout);
                    }
                    sr.initTimeout = window.setTimeout(_init, 0);
                }
                return sr;
            };
            ScrollReveal.prototype.sync = function() {
                if (sr.history.length && sr.supported()) {
                    for (var i = 0; i < sr.history.length; i++) {
                        var record = sr.history[i];
                        sr.reveal(record.selector, record.config, true);
                    }
                    ;
                    _init();
                } else {
                    console.log('sync() failed: no reveals found.');
                }
                return sr;
            };
            function _configure(elem, config) {
                if (!elem.config) {
                    elem.config = sr.tools.extendClone(sr.defaults, config);
                }
                else {
                    elem.config = sr.tools.extendClone(elem.config, config);
                }
                if (elem.config.origin === 'top' || elem.config.origin === 'bottom') {
                    elem.config.axis = 'Y';
                } else {
                    elem.config.axis = 'X';
                }
                if (elem.config.origin === 'top' || elem.config.origin === 'left') {
                    elem.config.distance = '-' + elem.config.distance;
                }
            }
            function _style(elem) {
                var config = elem.config;
                var computed = window.getComputedStyle(elem.domEl);
                if (!elem.styles) {
                    elem.styles = {
                        transition: {},
                        transform: {},
                        computed: {}
                    };
                    elem.styles.inline = elem.domEl.getAttribute('style') || '';
                    elem.styles.inline += '; visibility: visible; ';
                    elem.styles.computed.opacity = computed.opacity;
                    if (!computed.transition || computed.transition == 'all 0s ease 0s') {
                        elem.styles.computed.transition = '';
                    } else {
                        elem.styles.computed.transition = computed.transition + ', ';
                    }
                }
                elem.styles.transition.instant = '-webkit-transition: ' + elem.styles.computed.transition + '-webkit-transform ' + config.duration / 1000 + 's ' + config.easing + ' 0s, opacity ' + config.duration / 1000 + 's ' + config.easing + ' 0s; ' + 'transition: ' + elem.styles.computed.transition + 'transform ' + config.duration / 1000 + 's ' + config.easing + ' 0s, opacity ' + config.duration / 1000 + 's ' + config.easing + ' 0s; ';
                elem.styles.transition.delayed = '-webkit-transition: ' + elem.styles.computed.transition + '-webkit-transform ' + config.duration / 1000 + 's ' + config.easing + ' ' + config.delay / 1000 + 's, opacity ' + config.duration / 1000 + 's ' + config.easing + ' ' + config.delay / 1000 + 's; ' + 'transition: ' + elem.styles.computed.transition + 'transform ' + config.duration / 1000 + 's ' + config.easing + ' ' + config.delay / 1000 + 's, opacity ' + config.duration / 1000 + 's ' + config.easing + ' ' + config.delay / 1000 + 's; ';
                elem.styles.transform.initial = ' -webkit-transform:';
                elem.styles.transform.target = ' -webkit-transform:';
                generateTransform(elem.styles.transform);
                elem.styles.transform.initial += 'transform:';
                elem.styles.transform.target += 'transform:';
                generateTransform(elem.styles.transform);
                function generateTransform(transform) {
                    if (parseInt(config.distance)) {
                        transform.initial += ' translate' + config.axis + '(' + config.distance + ')';
                        transform.target += ' translate' + config.axis + '(0)';
                    }
                    if (config.scale) {
                        transform.initial += ' scale(' + config.scale + ')';
                        transform.target += ' scale(1)';
                    }
                    if (config.rotate.x) {
                        transform.initial += ' rotateX(' + config.rotate.x + 'deg)';
                        transform.target += ' rotateX(0)';
                    }
                    if (config.rotate.y) {
                        transform.initial += ' rotateY(' + config.rotate.y + 'deg)';
                        transform.target += ' rotateY(0)';
                    }
                    if (config.rotate.z) {
                        transform.initial += ' rotateZ(' + config.rotate.z + 'deg)';
                        transform.target += ' rotateZ(0)';
                    }
                    transform.initial += '; opacity: ' + config.opacity + ';';
                    transform.target += '; opacity: ' + elem.styles.computed.opacity + ';';
                }
            }
            function _updateStore(elem) {
                var container = elem.config.container;
                if (container && sr.store.containers.indexOf(container) == -1) {
                    sr.store.containers.push(elem.config.container);
                }
                sr.store.elements[elem.id] = elem;
            }
            ;
            function _record(selector, config) {
                var record = {
                    selector: selector,
                    config: config
                };
                sr.history.push(record);
            }
            function _init() {
                if (sr.supported()) {
                    _animate();
                    for (var i = 0; i < sr.store.containers.length; i++) {
                        sr.store.containers[i].addEventListener('scroll', _handler);
                        sr.store.containers[i].addEventListener('resize', _handler);
                    }
                    if (!sr.initialized) {
                        window.addEventListener('scroll', _handler);
                        window.addEventListener('resize', _handler);
                        sr.initialized = true;
                    }
                }
                return sr;
            }
            function _handler() {
                _requestAnimationFrame(_animate);
            }
            function _animate() {
                var elem,
                    visible;
                sr.tools.forOwn(sr.store.elements, function(elemId) {
                    elem = sr.store.elements[elemId];
                    visible = _isElemVisible(elem);
                    if (visible && !elem.revealed && !elem.disabled) {
                        if (elem.config.useDelay === 'always' || (elem.config.useDelay === 'onload' && !sr.initialized) || (elem.config.useDelay === 'once' && !elem.seen)) {
                            elem.domEl.setAttribute('style', elem.styles.inline
                            + elem.styles.transform.target
                            + elem.styles.transition.delayed);
                        }
                        else {
                            elem.domEl.setAttribute('style', elem.styles.inline
                            + elem.styles.transform.target
                            + elem.styles.transition.instant);
                        }
                        queueCallback('reveal', elem);
                        return elem.seen = true;
                    }
                    if (!visible && elem.config.reset && elem.revealed && !elem.disabled) {
                        elem.domEl.setAttribute('style', elem.styles.inline
                        + elem.styles.transform.initial
                        + elem.styles.transition.instant);
                        queueCallback('reset', elem);
                    }
                });
                function queueCallback(type, elem) {
                    var elapsed = 0;
                    var duration = 0;
                    var callback = 'after';
                    switch (type) {
                    case 'reveal':
                        duration = elem.config.duration + elem.config.delay;
                        callback += 'Reveal';
                        break;
                    case 'reset':
                        duration = elem.config.duration;
                        callback += 'Reset';
                        break;
                    }
                    if (elem.timer) {
                        elapsed = Math.abs(elem.timer.started - new Date());
                        window.clearTimeout(elem.timer.clock);
                    }
                    elem.timer = {
                        started: new Date()
                    };
                    elem.timer.clock = window.setTimeout(function() {
                        elem.config[callback](elem.domEl);
                        elem.timer = null;
                    }, duration - elapsed);
                    return type === 'reveal' ? elem.revealed = true : elem.revealed = false;
                }
            }
            function _getContainer(container) {
                if (!container) {
                    container = window.document.documentElement;
                }
                var w = container.clientWidth;
                var h = container.clientHeight;
                return {
                    width: w,
                    height: h
                };
            }
            function _getScrolled(container) {
                if (container) {
                    var offset = _getOffset(container);
                    return {
                        x: container.scrollLeft + offset.left,
                        y: container.scrollTop + offset.top
                    };
                }
                else {
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    };
                }
            }
            function _getOffset(domEl) {
                var offsetTop = 0;
                var offsetLeft = 0;
                var offsetHeight = domEl.offsetHeight;
                var offsetWidth = domEl.offsetWidth;
                do {
                    if (!isNaN(domEl.offsetTop)) {
                        offsetTop += domEl.offsetTop;
                    }
                    if (!isNaN(domEl.offsetLeft)) {
                        offsetLeft += domEl.offsetLeft;
                    }
                } while (domEl = domEl.offsetParent);
                return {
                    top: offsetTop,
                    left: offsetLeft,
                    height: offsetHeight,
                    width: offsetWidth
                };
            }
            function _isElemVisible(elem) {
                var offset = _getOffset(elem.domEl);
                var container = _getContainer(elem.config.container);
                var scrolled = _getScrolled(elem.config.container);
                var vF = elem.config.viewFactor;
                var elemHeight = offset.height;
                var elemWidth = offset.width;
                var elemTop = offset.top;
                var elemLeft = offset.left;
                var elemBottom = elemTop + elemHeight;
                var elemRight = elemLeft + elemWidth;
                return ( confirmBounds() || isPositionFixed()) ;
                function confirmBounds() {
                    var top = elemTop + elemHeight * vF;
                    var left = elemLeft + elemWidth * vF;
                    var bottom = elemBottom - elemHeight * vF;
                    var right = elemRight - elemWidth * vF;
                    var viewTop = scrolled.y + elem.config.viewOffset.top;
                    var viewLeft = scrolled.x + elem.config.viewOffset.left;
                    var viewBottom = scrolled.y - elem.config.viewOffset.bottom + container.height;
                    var viewRight = scrolled.x - elem.config.viewOffset.right + container.width;
                    return (top < viewBottom) && (bottom > viewTop) && (left > viewLeft) && (right < viewRight);
                }
                function isPositionFixed() {
                    return ( window.getComputedStyle(elem.domEl).position === 'fixed') ;
                }
            }
            return ScrollReveal;
        })();
        var Tools = (function() {
            Tools.prototype.isObject = function(object) {
                return object !== null && typeof object === 'object' && object.constructor == Object;
            };
            Tools.prototype.forOwn = function(object, callback) {
                if (!this.isObject(object)) {
                    throw new TypeError('Expected \'object\', but received \'' + typeof object + '\'.');
                } else {
                    for (var property in object) {
                        if (object.hasOwnProperty(property)) {
                            callback(property);
                        }
                    }
                }
            };
            Tools.prototype.extend = function(target, source) {
                this.forOwn(source, function(property) {
                    if (this.isObject(source[property])) {
                        if (!target[property] || !this.isObject(target[property])) {
                            target[property] = {};
                        }
                        this.extend(target[property], source[property]);
                    } else {
                        target[property] = source[property];
                    }
                }.bind(this));
                return target;
            };
            Tools.prototype.extendClone = function(target, source) {
                return this.extend(this.extend({}, target), source);
            };
            Tools.prototype.isMobile = function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            };
            function Tools() {}
            ;
            return Tools;
        })();
        var _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
    }).call(this);
    return this.ScrollReveal;
}));
;
(function(b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
        a;
    $.throttle = a = function(e, f, j, i) {
        var h,
            d = 0;
        if (typeof f !== "boolean") {
            i = j;
            j = f;
            f = c
        }
        function g() {
            var o = this,
                m = +new Date() - d,
                n = arguments;
            function l() {
                d = +new Date();
                j.apply(o, n)
            }
            function k() {
                h = c
            }
            if (i && !h) {
                l()
            }
            h && clearTimeout(h);
            if (i === c && m > e) {
                l()
            } else {
                if (f !== true) {
                    h = setTimeout(i ? k : l, i === c ? e - m : e)
                }
            }
        }
        if ($.guid) {
            g.guid = j.guid = j.guid || $.guid++
        }
        return g
    };
    $.debounce = function(d, e, f) {
        return f === c ? a(d, e, false) : a(d, f, e !== false)
    }
})(this);
;
jQuery.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    jQuery.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
function add_project_planner(form, filesList, redirect) {
    var dataToSave = form.serializeObject(),
        start_day = jQuery('#start-calendar .date-selected').text(),
        end_day = jQuery('#end-calendar .date-selected').text();
    if (start_day && end_day) {
        dataToSave['start_date'] = start_day + dataToSave['start_date'];
        dataToSave['end_date'] = end_day + dataToSave['end_date'];
    }
    if (filesList.length > 0) {
        jQuery('#fileupload').fileupload('send', {
            files: filesList
        }).success(function(result, textStatus, jqXHR) {
            if (result.success) {
                dataToSave['file_names'] = result.fileIDs;
                addPlannerAjax(dataToSave, filesList, redirect);
            }
        }).error(function(jqXHR, textStatus, errorThrown) {
            var tpl = '<div class="table"><div class="tcell"><div class="project-planner-content pp-closing clearfix post"><h2>Whooops!</h2><p>' + errorThrown + '</p><p><a href="/lets-work">Please try again.</a></p></div></div></div>';
            jQuery('.project-planner-content-wrap').fadeOut(function() {
                jQuery('tipso').tipso('destroy');
                jQuery(this).empty().html(tpl).fadeIn();
            });
        }).complete(function(result, textStatus, jqXHR) {});
    } else {
        addPlannerAjax(dataToSave, filesList, redirect);
    }
}
function addPlannerAjax(dataToSave, filesList, redirect) {
    jQuery.ajax({
        url: pogon_ajax_script.ajax_url,
        dataType: 'json',
        type: 'POST',
        data: {
            nonce: pogon_ajax_script._nonce,
            action: 'add_project_planner',
            form_sent: dataToSave
        },
        beforeSend: function() {
            if (filesList.length <= 0) {
                var tpl = '<div class="table"><div class="tcell"><div class="project-planner-content pp-closing clearfix"><div class="loader-wrap"><div class="loader"></div></div></div></div></div>';
                jQuery('.project-planner-content-wrap').fadeOut(function() {
                    jQuery('tipso').tipso('destroy');
                    jQuery(this).empty().html(tpl).fadeIn();
                });
            }
        },
        complete: function(data) {
            if (data.responseText.indexOf('444222') != -1) {
                var tpl = '<div class="table"><div class="tcell"><div class="project-planner-content pp-closing clearfix post"><h2>Whooops!</h2><p>Something went wrong.</p><p><a href="/lets-work">Please try again.</a></p></div></div></div>';
                jQuery('.project-planner-content-wrap').fadeOut(function() {
                    jQuery('tipso').tipso('destroy');
                    jQuery(this).empty().html(tpl).fadeIn();
                });
            } else {
                window.location = redirect;
            }
        }
    });
}
function form_steps(form, step, filesList) {
    var dataToSave = form.serializeObject(),
        start_day = jQuery('#start-calendar .date-selected').text(),
        end_day = jQuery('#end-calendar .date-selected').text();
    dataToSave['step'] = step;
    if (start_day && end_day) {
        dataToSave['start_date'] = start_day + dataToSave['start_date'];
        dataToSave['end_date'] = end_day + dataToSave['end_date'];
    }
    form_steps_ajax(dataToSave, filesList);
}
function form_steps_ajax(dataToSave, filesList) {
    jQuery.ajax({
        url: pogon_ajax_script.ajax_url,
        dataType: 'json',
        type: 'POST',
        data: {
            nonce: pogon_ajax_script._nonce,
            action: 'add_project_planner_incomplete',
            form_sent: dataToSave
        },
        complete: function(data) {}
    });
}
function form_steps_estimate_ajax(form) {
    var dataToSave = form.serializeObject();
    jQuery.ajax({
        url: pogon_ajax_script.ajax_url,
        dataType: 'json',
        type: 'POST',
        data: {
            nonce: pogon_ajax_script._nonce,
            action: 'add_free_estimate',
            form_sent: dataToSave
        },
        complete: function(data) {
            if (typeof (data.responseJSON) == 'string') {
                data = $.parseJSON(data.responseJSON);
            } else {
                data = data.responseJSON;
            }
            if (typeof (data.success) != 'undefined' && data.success && typeof (data.uri) != 'undefined' && data.uri) {
                window.location = data.uri;
            } else {
                var tpl = '<div class="c12 free-estimates-thanks"><h3>Whooops!</h3><p>Something went wrong.</p><p><a href="/free-estimate">Please try again.</a></p></div>';
                jQuery('.free-estimates-form-wrap').fadeOut(function() {
                    jQuery(this).empty().html(tpl).fadeIn();
                });
            }
        }
    });
}
;
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f,
                e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c)
            d = c, c = null;
        else if (0 > c || c >= e.slideCount)
            return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.options.asNavFor;
        d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c,
            d,
            b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1)
                d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.html(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e,
            f,
            g,
            d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints)
                d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f,
            g,
            h,
            d = this,
            e = a(b.target);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
        case "previous":
            g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
            break;
        case "next":
            g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
            break;
        case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
            break;
        default:
            return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c,
            d,
            b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1])
            a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpRows = function() {
        var b,
            a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;)
                ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0)
            d = a.slideCount;
        else
            for (; b < a.slideCount;)
                ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c,
            d,
            f,
            b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e,
            a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;)
            d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c,
            d,
            e,
            b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this),
                    c = a(this).attr("data-lazy"),
                    d = document.createElement("img");
                d.onload = function() {
                    b.animate({
                        opacity: 0
                    }, 100, function() {
                        b.attr("src", c).animate({
                            opacity: 1
                        }, 200, function() {
                            b.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, d.src = c
            })
        }
        var c,
            d,
            e,
            f,
            b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.paused = !1, a.autoPlay()
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function() {
        var c,
            d,
            b = this;
        c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
        }).error(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function(b) {
        var d,
            e,
            c = this;
        e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c,
            d,
            e,
            b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;)
                        b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d,
            e,
            b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c,
            b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d) {
        var f,
            g,
            e = this;
        if ("responsive" === b && "array" === a.type(c))
            for (g in c)
                if ("array" !== a.type(e.options.responsive))
                    e.options.responsive = [c[g]];
                else {
                    for (f = e.options.responsive.length - 1; f >= 0;)
                        e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
                    e.options.responsive.push(c[g])
                }
        else
            e.options[b] = c;
        d === !0 && (e.unload(), e.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c,
            d,
            e,
            f,
            b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c,
            d,
            e,
            b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1)
                d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1)
                d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.setPaused = function(a) {
        var b = this;
        b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d,
            e,
            f,
            g,
            h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d);
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a,
            b,
            c,
            d,
            e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c,
            b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX)
            return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe)
            switch (b.swipeDirection()) {
            case "left":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                break;
            case "right":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
            }
        else
            b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
            switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
            }
    }, b.prototype.swipeMove = function(a) {
        var d,
            e,
            f,
            g,
            h,
            b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c,
            b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b,
            a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.on("focus.slick blur.slick", "*", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
            }, 0)
        })
    }, a.fn.slick = function() {
        var f,
            g,
            a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g)
                return g;
        return a
    }
});
;
!function(t) {
    var e = {},
        s = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            slideZIndex: 50,
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function() {},
            onSlideBefore: function() {},
            onSlideAfter: function() {},
            onSlideNext: function() {},
            onSlidePrev: function() {},
            onSliderResize: function() {}
        };
    t.fn.bxSlider = function(n) {
        if (0 == this.length)
            return this;
        if (this.length > 1)
            return this.each(function() {
                t(this).bxSlider(n)
            }), this;
        var o = {},
            r = this;
        e.el = this;
        var a = t(window).width(),
            l = t(window).height(),
            d = function() {
                o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                    index: o.settings.startSlide
                }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
                    var t = document.createElement("div"),
                        e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in e)
                        if (void 0 !== t.style[e[i]])
                            return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                    return !1
                }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() {
                    t(this).data("origStyle", t(this).attr("style"))
                }), c()
            },
            c = function() {
                r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
                    width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), o.viewport.parent().css({
                    maxWidth: p()
                }), o.settings.pager || o.viewport.parent().css({
                    margin: "0 auto 0px"
                }), o.children.css({
                    "float": "horizontal" == o.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), o.children.eq(o.settings.startSlide).css({
                    zIndex: o.settings.slideZIndex,
                    display: "block"
                })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
                var e = o.children.eq(o.settings.startSlide);
                "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
            },
            g = function(e, i) {
                var s = e.find("img, iframe").length;
                if (0 == s)
                    return i(), void 0;
                var n = 0;
                e.find("img, iframe").each(function() {
                    t(this).one("load", function() {
                        ++n == s && i()
                    }).each(function() {
                        this.complete && t(this).load()
                    })
                })
            },
            h = function() {
                if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                    var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                        i = o.children.slice(0, e).clone().addClass("bx-clone"),
                        s = o.children.slice(-e).clone().addClass("bx-clone");
                    r.append(i).prepend(s)
                }
                o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
            },
            v = function() {
                var e = 0,
                    s = t();
                if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                    if (o.carousel) {
                        var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
                        for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++)
                            s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
                    } else
                        s = o.children.eq(o.active.index);
                else
                    s = o.children;
                return "vertical" == o.settings.mode ? (s.each(function() {
                    e += t(this).outerHeight()
                }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() {
                    return t(this).outerHeight(!1)
                }).get()), e
            },
            p = function() {
                var t = "100%";
                return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
            },
            u = function() {
                var t = o.settings.slideWidth,
                    e = o.viewport.width();
                return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
            },
            f = function() {
                var t = 1;
                if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                    if (o.viewport.width() < o.minThreshold)
                        t = o.settings.minSlides;
                    else if (o.viewport.width() > o.maxThreshold)
                        t = o.settings.maxSlides;
                    else {
                        var e = o.children.first().width();
                        t = Math.floor(o.viewport.width() / e)
                    }
                else
                    "vertical" == o.settings.mode && (t = o.settings.minSlides);
                return t
            },
            x = function() {
                var t = 0;
                if (o.settings.moveSlides > 0)
                    if (o.settings.infiniteLoop)
                        t = o.children.length / m();
                    else
                        for (var e = 0, i = 0; e < o.children.length;)
                            ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
                else
                    t = Math.ceil(o.children.length / f());
                return t
            },
            m = function() {
                return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
            },
            S = function() {
                if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                    if ("horizontal" == o.settings.mode) {
                        var t = o.children.last(),
                            e = t.position();
                        b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                    } else if ("vertical" == o.settings.mode) {
                        var i = o.children.length - o.settings.minSlides,
                            e = o.children.eq(i).position();
                        b(-e.top, "reset", 0)
                    }
                } else {
                    var e = o.children.eq(o.active.index * m()).position();
                    o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
                }
            },
            b = function(t, e, i, s) {
                if (o.usingCSS) {
                    var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                    r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
                    })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
                    }))
                } else {
                    var a = {};
                    a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function() {
                        D()
                    }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
                        b(s.resetValue, "reset", 0), N()
                    })
                }
            },
            w = function() {
                for (var e = "", i = x(), s = 0; i > s; s++) {
                    var n = "";
                    o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
                }
                o.pagerEl.html(e)
            },
            T = function() {
                o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
            },
            C = function() {
                o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
            },
            E = function() {
                o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
            },
            P = function() {
                o.children.each(function() {
                    var e = t(this).find("img:first").attr("title");
                    void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                })
            },
            y = function(t) {
                o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
            },
            z = function(t) {
                o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
            },
            k = function(t) {
                r.startAuto(), t.preventDefault()
            },
            M = function(t) {
                r.stopAuto(), t.preventDefault()
            },
            I = function(e) {
                o.settings.auto && r.stopAuto();
                var i = t(e.currentTarget),
                    s = parseInt(i.attr("data-slide-index"));
                s != o.active.index && r.goToSlide(s), e.preventDefault()
            },
            q = function(e) {
                var i = o.children.length;
                return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(i, s) {
                    t(s).find("a").eq(e).addClass("active")
                }), void 0)
            },
            D = function() {
                if (o.settings.infiniteLoop) {
                    var t = "";
                    0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
                }
                o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
            },
            A = function(t) {
                o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
            },
            W = function() {
                1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
            },
            H = function() {
                o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() {
                    o.interval && (r.stopAuto(!0), o.autoPaused = !0)
                }, function() {
                    o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
                })
            },
            L = function() {
                var e = 0;
                if ("next" == o.settings.autoDirection)
                    r.append(o.children.clone().addClass("bx-clone"));
                else {
                    r.prepend(o.children.clone().addClass("bx-clone"));
                    var i = o.children.first().position();
                    e = "horizontal" == o.settings.mode ? -i.left : -i.top
                }
                b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
                    r.stop()
                }, function() {
                    var e = 0;
                    o.children.each(function() {
                        e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                    });
                    var i = o.settings.speed / e,
                        s = "horizontal" == o.settings.mode ? "left" : "top",
                        n = i * (e - Math.abs(parseInt(r.css(s))));
                    N(n)
                }), N()
            },
            N = function(t) {
                speed = t ? t : o.settings.speed;
                var e = {
                        left: 0,
                        top: 0
                    },
                    i = {
                        left: 0,
                        top: 0
                    };
                "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
                var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
                    n = "horizontal" == o.settings.mode ? -i.left : -i.top,
                    a = {
                        resetValue: n
                    };
                b(s, "ticker", speed, a)
            },
            O = function() {
                o.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                }, o.viewport.bind("touchstart", X)
            },
            X = function(t) {
                if (o.working)
                    t.preventDefault();
                else {
                    o.touch.originalPos = r.position();
                    var e = t.originalEvent;
                    o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
                }
            },
            Y = function(t) {
                var e = t.originalEvent,
                    i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
                    s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
                if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                    var n = 0;
                    if ("horizontal" == o.settings.mode) {
                        var r = e.changedTouches[0].pageX - o.touch.start.x;
                        n = o.touch.originalPos.left + r
                    } else {
                        var r = e.changedTouches[0].pageY - o.touch.start.y;
                        n = o.touch.originalPos.top + r
                    }
                    b(n, "reset", 0)
                }
            },
            V = function(t) {
                o.viewport.unbind("touchmove", Y);
                var e = t.originalEvent,
                    i = 0;
                if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
                    var s = Math.abs(o.touch.start.x - o.touch.end.x);
                    s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
                } else {
                    var s = 0;
                    "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
                }
                o.viewport.unbind("touchend", V)
            },
            Z = function() {
                var e = t(window).width(),
                    i = t(window).height();
                (a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
            };
        return r.goToSlide = function(e, i) {
            if (!o.working && o.active.index != e)
                if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode)
                    o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                        height: v()
                    }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                        zIndex: 0
                    }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
                        t(this).css("zIndex", o.settings.slideZIndex), D()
                    });
                else {
                    o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                        height: v()
                    }, o.settings.adaptiveHeightSpeed);
                    var s = 0,
                        n = {
                            left: 0,
                            top: 0
                        };
                    if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                        if ("horizontal" == o.settings.mode) {
                            var a = o.children.eq(o.children.length - 1);
                            n = a.position(), s = o.viewport.width() - a.outerWidth()
                        } else {
                            var l = o.children.length - o.settings.minSlides;
                            n = o.children.eq(l).position()
                        }
                    else if (o.carousel && o.active.last && "prev" == i) {
                        var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
                            a = r.children(".bx-clone").eq(d);
                        n = a.position()
                    } else if ("next" == i && 0 == o.active.index)
                        n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                    else if (e >= 0) {
                        var c = e * m();
                        n = o.children.eq(c).position()
                    }
                    if ("undefined" != typeof n) {
                        var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
                        b(g, "slide", o.settings.speed)
                    }
                }
        }, r.goToNextSlide = function() {
            if (o.settings.infiniteLoop || !o.active.last) {
                var t = parseInt(o.active.index) + 1;
                r.goToSlide(t, "next")
            }
        }, r.goToPrevSlide = function() {
            if (o.settings.infiniteLoop || 0 != o.active.index) {
                var t = parseInt(o.active.index) - 1;
                r.goToSlide(t, "prev")
            }
        }, r.startAuto = function(t) {
            o.interval || (o.interval = setInterval(function() {
                "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
            }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
        }, r.stopAuto = function(t) {
            o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
        }, r.getCurrentSlide = function() {
            return o.active.index
        }, r.getCurrentSlideElement = function() {
            return o.children.eq(o.active.index)
        }, r.getSlideCount = function() {
            return o.children.length
        }, r.redrawSlider = function() {
            o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
        }, r.destroySlider = function() {
            o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
                void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
            }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
        }, r.reloadSlider = function(t) {
            void 0 != t && (n = t), r.destroySlider(), d()
        }, d(), this
    }
}(jQuery);
;
jQuery(document).ready(function() {
    var slickArgs = {
        draggable: false,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        useCSS: true
    };
    var slickSlider = jQuery('.header-content .slider').slick(slickArgs);
    jQuery('.header-content .slider').fadeIn();
    slickSlider.on('init reInit', function(event, slick, direction) {
        jQuery('.header-content .slider').fadeIn();
    });
    jQuery('.menu-button-wrap').on('click', function() {
        jQuery(this).toggleClass('open');
        jQuery('.menu-button').toggleClass('open animate');
        jQuery('.menu-wrap, header, footer').toggleClass('open');
    });
    function animateMenu() {
        jQuery('.menu-button:not(.open)').css({
            opacity: 1
        }).animate({
            width: 26
        }, 600, function() {
            jQuery(this).delay(2000).animate({
                opacity: 0
            }, 400, function() {
                jQuery(this).css({
                    width: 0
                });
                animateMenu();
            });
        });
    }
    jQuery('#main').on('click', function() {
        if (jQuery('.menu-button-wrap').hasClass('open')) {
            jQuery('.menu-button-wrap').trigger('click');
        }
    });
    var iframes = jQuery('body').find('iframe');
    if (iframes.length && !iframes.parent().hasClass('pogon-fluid-iframe')) {
        for (var i = 0; i < iframes.length; i++) {
            var iframe = iframes[i],
                players = /www.youtube.com|player.vimeo.com|google.com\/maps/;
            if (iframe.src.search(players) > 0) {
                var videoRatio = (iframe.height / iframe.width) * 100;
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                iframe.width = '100%';
                iframe.height = '100%';
                var wrap = document.createElement('div');
                wrap.className = 'pogon-fluid-iframe';
                wrap.style.width = '100%';
                wrap.style.position = 'relative';
                wrap.style.paddingTop = videoRatio + '%';
                var iframeParent = iframe.parentNode;
                iframeParent.insertBefore(wrap, iframe);
                wrap.appendChild(iframe);
            }
        }
    }
    window.sr = ScrollReveal({
        scale: 1,
        distance: '100px',
        duration: 1000,
    });
    sr.reveal('.projects-grid .c6');
    sr.reveal('#content-single .post-byline, #content-single h2, #content-single h3, #content-single p, #content-single img, #content-single .work-post-share, #content-single .work-project-starter-wrap, #content-single .mola-icons-wrap .c4, #content-single .mola-icons-wrap .c3, #content-single .icons-divider, #content-single .pogon-fluid-iframe');
    sr.reveal('.page-template-template-contact-php #content h2, .page-template-template-contact-php #content h3, .page-template-template-contact-php #content p, .page-template-template-contact-php #content #contact-map');
    sr.reveal('#content-work h2, #content-work p, #content-work .work-icons-list li, .work-project-services i, .bioconsert-box-item, .work-content-intro');
    sr.reveal('#content-about .team-list .c6');
    sr.reveal('.social-connect-list li, #content-single ul li, #content-single ol li');
    sr.reveal('.page-template-template-about #content h3, .page-template-template-about #content p');
    jQuery('.tipso').tipso({
        background: '#0003D1',
        showArrow: false,
        width: '',
        maxWidth: 200,
        speed: 100,
        position: 'right',
        offsetY: -3
    });
    var canvas,
        ctx,
        scoreText,
        w,
        h,
        snake,
        size = 15,
        speed = 15,
        dir,
        game_loop,
        over = 0;
    function init() {
        var reset,
            score = 0;
        window.addEventListener('resize', resizeCanvas, false);
        function paintCanvas() {
            ctx.fillStyle = "#0003D1";
            ctx.fillRect(0, 0, w, h);
        }
        var Food = function() {
            this.x = Math.round(Math.random() * (w - size) / size);
            this.y = Math.round(Math.random() * (h - size) / size);
            var fills = ['#ffffff', '#FF3903'];
            var randFill = fills[Math.floor(Math.random() * fills.length)];
            this.draw = function() {
                ctx.fillStyle = randFill;
                ctx.fillRect(this.x * size, this.y * size, size, size);
            }
        }
        var f = new Food();
        function initSnake() {
            var length = 10;
            snake = [];
            for (var i = length - 1; i >= 0; i--) {
                snake.push({
                    x: i,
                    y: 0
                });
            }
        }
        function paintSnake() {
            for (var i = 0; i < snake.length; i++) {
                var s = snake[i];
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(s.x * size, s.y * size, size, size);
            }
        }
        function updateSnake() {
            var head_x = snake[0].x;
            var head_y = snake[0].y;
            switch (dir) {
            case "right":
                head_x++;
                break;
            case "left":
                head_x--;
                break;
            case "up":
                head_y--;
                break;
            case "down":
                head_y++;
                break;
            }
            document.onkeydown = function(e) {
                var key = e.keyCode;
                if (key == 37 && dir != "right")
                    setTimeout(function() {
                        dir = "left";
                    }, 30);
                else if (key == 38 && dir != "down")
                    setTimeout(function() {
                        dir = "up";
                    }, 30);
                else if (key == 39 && dir != "left")
                    setTimeout(function() {
                        dir = "right";
                    }, 30);
                else if (key == 40 && dir != "up")
                    setTimeout(function() {
                        dir = "down";
                    }, 30);
                if (key)
                    e.preventDefault();
            }
            canvas.onmousedown = function(e) {
                switch (dir) {
                case "right":
                    setTimeout(function() {
                        dir = "down";
                    }, 50);
                    break;
                case "left":
                    setTimeout(function() {
                        dir = "up";
                    }, 50);
                    break;
                case "up":
                    setTimeout(function() {
                        dir = "right";
                    }, 50);
                    break;
                case "down":
                    setTimeout(function() {
                        dir = "left";
                    }, 50);
                    break;
                }
                e.preventDefault();
            }
            var tail = snake.pop();
            tail.x = head_x;
            tail.y = head_y;
            snake.unshift(tail);
            if (head_x >= w / size || head_x <= -1 || head_y >= h / size || head_y <= -1) {
                if (over == 0) {
                    gameover();
                }
                over++;
            }
            if (head_x == f.x && head_y == f.y) {
                coll = 1;
                f = new Food();
                var tail = {
                    x: head_x,
                    y: head_y
                };
                snake.unshift(tail);
                score += 1;
                scoreText.innerHTML = score;
                if (speed <= 45)
                    speed++;
                clearInterval(game_loop);
                game_loop = setInterval(draw, 1000 / speed);
            }
            else {
                for (var j = 1; j < snake.length; j++) {
                    var s = snake[j];
                    if (head_x == s.x && head_y == s.y) {
                        if (over == 0) {
                            gameover();
                        }
                        over++;
                    }
                }
            }
        }
        function draw() {
            paintCanvas();
            paintSnake();
            updateSnake();
            f.draw();
        }
        function resizeCanvas() {
            w = jQuery('.snake-play-screen').width();
            h = jQuery('.snake-play-screen').height();
            canvas.height = Math.floor(h / size) * size;
            canvas.width = Math.floor(w / size) * size;
            gameover();
        }
        reset = function() {
            initSnake();
            f = new Food();
            dir = "right";
            over = 0;
            speed = 15;
            canvas.height = Math.floor(h / size) * size;
            canvas.width = Math.floor(w / size) * size;
            if (typeof game_loop != "undefined")
                clearInterval(game_loop);
            game_loop = setInterval(draw, 1000 / speed);
            score = 0;
            scoreText.innerHTML = score;
            return;
        }
        function gameover() {
            clearInterval(game_loop);
            jQuery('.start-snake').hide();
            jQuery('.restart-snake').show().css({
                display: 'inline-block'
            });
            jQuery('.snake-play-screen').fadeOut(function() {
                jQuery('.snake-start-screen').fadeIn(function() {});
            });
        }
        reset();
        jQuery('.restart-snake').on('click', function(e) {
            e.preventDefault();
            jQuery('.snake-start-screen').fadeOut(function() {
                jQuery('.snake-play-screen').fadeIn(function() {
                    reset();
                });
            });
        });
        jQuery('.close-snake').on('click', function(e) {
            e.preventDefault();
            jQuery('.snake-play-screen').fadeOut(100, function() {
                gameover();
            });
        });
    }
    jQuery('.play-snake').on('click', function(e) {
        e.preventDefault();
        jQuery('#snake-wrap').addClass('play');
    });
    jQuery('.close-snake').on('click', function(e) {
        e.preventDefault();
        jQuery('#snake-wrap').removeClass('play');
    });
    jQuery('.start-snake').on('click', function(e) {
        e.preventDefault();
        canvas = document.getElementById("snake-canvas");
        ctx = canvas.getContext("2d");
        scoreText = document.getElementById('snake-score');
        jQuery('.snake-start-screen').fadeOut(function() {
            jQuery('.snake-play-screen').fadeIn(function() {
                w = jQuery('.snake-play-screen').width();
                h = jQuery('.snake-play-screen').height();
                canvas.height = Math.floor(h / size) * size;
                canvas.width = Math.floor(w / size) * size;
                init();
            });
        });
    });
    jQuery('.work-share-button').on('click', function(e) {
        e.preventDefault();
        jQuery(this).hide();
        jQuery('.work-share-wrap').fadeIn();
    });
    var map;
    var mapStyle = [{
        "stylers": [{
            "saturation": -100
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "color": "#c5852a"
        }, {
            "visibility": "on"
        }, {
            "saturation": -100
        }, {
            "lightness": 75
        }]
    }, {
        "featureType": "landscape",
        "stylers": [{
            "lightness": 74
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi",
        "stylers": [{
            "visibility": "off"
        }]
    }, {}, {}];
    if (jQuery('#contact-map').length) {
        function initialize() {
            var map_center = new google.maps.LatLng(41.990195, 21.419967);
            var mapOptions = {
                zoom: 4,
                center: map_center,
                disableDefaultUI: true,
                styles: mapStyle
            };
            map = new google.maps.Map(document.getElementById('contact-map'), mapOptions);
            var marker_image = {
                url: 'http://pogon.co/wp-content/themes/pogon/images/ui/mark.png',
                size: new google.maps.Size(56, 56),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(28, 28),
                scaledSize: new google.maps.Size(56, 56)
            };
            marker = new google.maps.Marker({
                position: map_center,
                map: map,
                icon: marker_image,
                size: new google.maps.Size(56, 56),
                animation: google.maps.Animation.DROP,
                title: "Pogon Collective"
            });
            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter(map_center);
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
    jQuery('.pp-date-select').select2({
        minimumResultsForSearch: -1
    });
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validateSection(sectionID) {
        var theReturn = false;
        if (sectionID == 1) {
            if (jQuery('.first_name').val().length < 2) {
                jQuery('.first_name').addClass('error');
            }
            if (!validateEmail(jQuery('.email_addr').val())) {
                jQuery('.email_addr').addClass('error');
            }
            if (validateEmail(jQuery('.email_addr').val()) && jQuery('.first_name').val().length > 1) {
                jQuery('.email_addr').removeClass('error');
                jQuery('.first_name').removeClass('error');
                theReturn = true;
            }
        }
        else if (sectionID == 2) {
            if (jQuery('.the-type-wrap input[type=radio]:checked').length) {
                theReturn = true;
            }
        }
        else if (sectionID == 3) {
            if (jQuery('.work-icons-list input[type=checkbox]:checked').length) {
                theReturn = true;
            }
        }
        else if (sectionID == 4) {
            if (jQuery('.brief_desc').val().length > 1) {
                theReturn = true;
            }
        }
        else if (sectionID == 5) {
            if (jQuery('#start-calendar .day-number').hasClass('date-selected') && jQuery('#end-calendar .day-number').hasClass('date-selected')) {
                var start_date = jQuery('[name="start_date"]').val(),
                    end_date = jQuery('[name="end_date"]').val(),
                    start_day = jQuery('#start-calendar .date-selected').text(),
                    end_day = jQuery('#end-calendar .date-selected').text();
                if ((new Date(start_date.substring(2, 6), start_date.substring(0, 2), start_day).getTime() < new Date(end_date.substring(2, 6), end_date.substring(0, 2), end_day).getTime())) {
                    theReturn = true;
                }
            }
        }
        else if (sectionID == 6) {
            if (parseInt(jQuery('.right-budget').text()) > 999) {
                theReturn = true;
            }
        }
        return theReturn;
    }
    var animated = false;
    var filesList = [];
    jQuery('.project-planner-navigation a').on('click', function(e) {
        e.preventDefault();
        var $this = jQuery(this),
            sectionID = jQuery('fieldset.active').data('section'),
            passedNext = sectionID + 1,
            passedPrev = sectionID - 1;
        $this.addClass('disable');
        if ($this.hasClass('pp-submit') && !animated) {
            $this.tipso('hide');
            $this.tipso('destroy');
            add_project_planner(jQuery('#project-planner'), filesList, $this.data('thanks'));
        }
        if ($this.hasClass('next') && !animated) {
            if (validateSection(sectionID)) {
                animated = true;
                if (sectionID - 1 != 1) {
                    jQuery('.project-planner-navigation a.prev').removeClass('hide');
                }
                if (sectionID + 1 == 6) {
                    jQuery('.project-planner-navigation a.next').addClass('hide');
                    jQuery('.project-planner-navigation a.pp-submit').removeClass('hide');
                } else {
                    jQuery('.project-planner-navigation a.next').removeClass('hide');
                }
                var nextSectionID = sectionID + 1;
                jQuery('fieldset.active').removeClass('active');
                jQuery('[data-section=' + nextSectionID + ']').addClass('active');
                moveRight(sectionID);
                form_steps(jQuery('#project-planner'), sectionID, filesList);
            } else {
                $this.tipso({
                    background: '#0003D1',
                    showArrow: false,
                    width: '',
                    maxWidth: 300,
                    speed: 200,
                    delay: 50,
                    hideDelay: 1000,
                    tooltipHover: true,
                    position: 'left',
                    animationIn: 'fadeIn',
                    animationOut: 'fadeOut',
                    offsetY: -3,
                    content: function() {
                        return pogon_ajax_script.translations.fillAll;
                    }
                });
                $this.tipso('show');
                $this.on('mouseout', function() {
                    $this.tipso('hide');
                    $this.tipso('destroy');
                });
            }
        } else if ($this.hasClass('prev') && !animated) {
            animated = true;
            if (sectionID + 1 != 6) {
                jQuery('.project-planner-navigation a.next').removeClass('hide');
                jQuery('.project-planner-navigation a.pp-submit').addClass('hide');
            }
            if (sectionID - 1 == 1) {
                jQuery('.project-planner-navigation a.prev').addClass('hide');
            } else {
                jQuery('.project-planner-navigation a.prev').removeClass('hide');
            }
            var prevSectionID = sectionID - 1;
            jQuery('fieldset.active').removeClass('active');
            jQuery('[data-section=' + prevSectionID + ']').addClass('active');
            moveLeft(prevSectionID - 1);
        }
        if ($this.hasClass('disable') && animated) {
            return false;
        }
    });
    var slideCount = jQuery('#project-planner fieldset').length;
    var slideWidth = jQuery('.project-planner-content-wrap').outerWidth();
    var sliderUlWidth = slideCount * slideWidth;
    jQuery('#project-planner').css({
        width: sliderUlWidth
    });
    jQuery('#project-planner fieldset').css({
        'max-width': slideWidth
    });
    jQuery(window).resize(function() {
        var activeSectionId = jQuery('#project-planner .active').data('section') - 1;
        slideWidth = jQuery('.project-planner-content-wrap').outerWidth();
        sliderUlWidth = slideCount * slideWidth;
        jQuery('#project-planner').css({
            width: sliderUlWidth
        });
        jQuery('#project-planner fieldset').css({
            'max-width': slideWidth
        });
    });
    function moveLeft(sectionID) {
        jQuery('#project-planner fieldset').stop().fadeOut(400);
        jQuery('#project-planner').stop().animate({
            left: +slideWidth
        }, 400, function() {
            animated = false;
            jQuery('.project-planner-navigation a').removeClass('disable');
            jQuery('#project-planner').css('left', 0);
            jQuery('#project-planner fieldset.active').stop().fadeIn(300);
            jQuery('html, body').animate({
                scrollTop: jQuery('#project-planner').offset().top - 120
            }, 400);
        });
    }
    ;
    function moveRight(sectionID) {
        jQuery('#project-planner fieldset').stop().fadeOut(400);
        jQuery('#project-planner').stop().animate({
            left: -slideWidth
        }, 400, function() {
            animated = false;
            jQuery('.project-planner-navigation a').removeClass('disable');
            jQuery('#project-planner').css('left', 0);
            jQuery('#project-planner fieldset.active').stop().fadeIn(300);
            jQuery('html, body').animate({
                scrollTop: jQuery('#project-planner').offset().top - 120
            }, 400);
        });
    }
    ;
    jQuery('select.pp-date-select').on('change', function(e) {
        var $this = jQuery(this),
            theValue = $this.val(),
            theMonth = theValue.substring(0, 2),
            theMonth = parseInt(theMonth),
            theYear = theValue.substring(2, 6),
            theYear = parseInt(theYear);
        jQuery.ajax({
            url: '/wp-admin/admin-ajax.php',
            type: 'POST',
            data: {
                action: 'draw_calendar',
                month: theMonth,
                year: theYear
            },
        }).done(function(data) {
            $this.parent().find('.calendar-wrap').html(data);
        }).fail(function() {
            console.log("error");
        });
    });
    jQuery('body').on('click', '#start-calendar .day-number', function(e) {
        var $this = jQuery(this);
        jQuery('#start-calendar .day-number').removeClass('date-selected');
        jQuery(this).addClass('date-selected');
    });
    jQuery('body').on('click', '#end-calendar .day-number', function(e) {
        var $this = jQuery(this);
        jQuery('#end-calendar .day-number').removeClass('date-selected');
        jQuery(this).addClass('date-selected');
    });
    jQuery('#slider-budget').noUiSlider({
        start: [1000],
        step: 500,
        range: {
            'min': [1000],
            'max': [15000]
        }
    });
    jQuery('#slider-budget').on({
        change: function(i, e) {
            jQuery('#budget-amount').val(e);
            if (parseInt(e) == 15000) {
                jQuery('.right-budget').text('15000+');
            }
        },
        slide: function(i, e) {
            if (parseInt(e) <= 14500) {
                var slideLeft = jQuery('.noUi-origin').position().left - 25;
                jQuery('.right-budget').css('left', slideLeft);
            }
        }
    });
    jQuery('#slider-budget').Link('lower').to(jQuery('.right-budget'), null, wNumb({
        decimals: 0
    }));
    var trash = '<svg class="icon-trash" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="16.499px" height="21.492px" viewBox="0 0 16.499 21.492" enable-background="new 0 0 16.499 21.492" xml:space="preserve"><g><path fill="#FFFFFF" d="M16.5 6.105c0 0.211-0.164 0.375-0.375 0.375H15V17.59c0 1.289-0.844 2.391-1.875 2.391h-9.75c-1.031 0-1.875-1.055-1.875-2.344V6.48H0.375C0.164 6.48 0 6.316 0 6.105v-0.75C0 5.145 0.164 4.98 0.375 4.98h3.621l0.82-1.957C5.051 2.449 5.754 1.98 6.375 1.98h3.75c0.621 0 1.324 0.469 1.559 1.043l0.82 1.957h3.621c0.211 0 0.375 0.164 0.375 0.375V6.105zM13.5 6.48H3V17.59c0 0.562 0.316 0.891 0.375 0.891h9.75c0.059 0 0.375-0.328 0.375-0.891V6.48zM6 15.855c0 0.211-0.164 0.375-0.375 0.375h-0.75c-0.211 0-0.375-0.164-0.375-0.375v-6.75c0-0.211 0.164-0.375 0.375-0.375h0.75C5.836 8.73 6 8.895 6 9.105V15.855zM10.875 4.98l-0.562-1.371c-0.035-0.047-0.141-0.117-0.199-0.129H6.398c-0.07 0.012-0.164 0.082-0.199 0.129L5.625 4.98H10.875zM9 15.855c0 0.211-0.164 0.375-0.375 0.375h-0.75c-0.211 0-0.375-0.164-0.375-0.375v-6.75c0-0.211 0.164-0.375 0.375-0.375h0.75C8.836 8.73 9 8.895 9 9.105V15.855zM12 15.855c0 0.211-0.164 0.375-0.375 0.375h-0.75c-0.211 0-0.375-0.164-0.375-0.375v-6.75c0-0.211 0.164-0.375 0.375-0.375h0.75C11.836 8.73 12 8.895 12 9.105V15.855z"/></g></svg>';
    jQuery('#fileupload').fileupload({
        url: pogon_ajax_script.ajax_url,
        formData: {
            nonce: pogon_ajax_script._nonce,
            action: 'add_project_planner_files',
        },
        dataType: 'json',
        dropZone: jQuery('#dropzone'),
        singleFileUploads: false,
        autoUpload: false,
        previewMaxWidth: 50,
        previewMaxHeight: 50,
        previewCrop: false,
        maxFileSize: 8000000,
        maxNumberOfFiles: 8
    }).on('fileuploadadd', function(e, data) {
        if (jQuery('.text-danger').length) {
            jQuery('.text-danger').fadeOut(100, function() {
                jQuery(this).remove();
            });
        }
        data.context = jQuery('<div/>', {
            class: 'drop'
        }).appendTo('#files');
        jQuery.each(data.files, function(index, file) {
            filesList.push(data.files[index]);
            var node = jQuery('<p/>', {
                class: 'thumbnail'
            }).data('file', file).append(jQuery('<span/>').text(getFilePathExtension(file.name)));
            node.append(jQuery('<div/>', {
                class: 'trash'
            }).html(trash));
            node.appendTo(data.context);
        });
        jQuery('.fileupload-wrap').fadeOut(50, function() {
            jQuery('#files').fadeIn().css('display', 'table-cell');
        });
    }).on('fileuploadprocessalways', function(e, data) {
        var index = data.index,
            file = data.files[index],
            node = jQuery(data.context.children()[index]);
        if (file.error) {
            node.remove();
            jQuery('<p class="text-danger"/>').html('Error with file ' + file.name + ' <br/> ' + file.error).appendTo('#files');
            for (var i = filesList.length - 1; i >= 0; i--) {
                if (filesList[i].name == file.name) {
                    filesList.splice(i, 1);
                }
            }
        } else {
            if (file.preview) {
                node.find('span').remove();
                node.prepend(file.preview);
            } else {
                node.find('span').addClass('no-preview');
            }
        }
    }).on('fileuploadprogressall', function(e, data) {
        var tpl = '<div class="table"><div class="tcell"><div class="project-planner-content pp-closing clearfix"><div class="loader-wrap"><div class="loader"></div></div></div></div></div>';
        jQuery('.project-planner-content-wrap').fadeOut(function() {
            jQuery('tipso').tipso('destroy');
            jQuery(this).empty().html(tpl).fadeIn();
        });
    }).prop('disabled', !jQuery.support.fileInput).parent().addClass(jQuery.support.fileInput ? undefined : 'disabled');
    jQuery('.js-drop-wrap').on('click', function() {
        jQuery('#label-fileupload').trigger('click');
    });
    jQuery('.js-drop-wrap').on('click', '.icon-trash', function(e) {
        e.stopPropagation();
        var thumb = jQuery(this).parents('.thumbnail'),
            thumbFile = thumb.data('file');
        for (var i = filesList.length - 1; i >= 0; i--) {
            if (filesList[i] == thumbFile) {
                filesList.splice(i, 1);
                break;
            }
        }
        thumb.fadeOut(function() {
            jQuery(this).remove();
        });
        if (filesList.length <= 0) {
            jQuery('#files').fadeOut(50, function() {
                jQuery('.fileupload-wrap').fadeIn().css('display', 'table');
            });
        }
    });
    jQuery(document).bind('drop dragover', function(e) {
        e.preventDefault();
    });
    function getFilePathExtension(path) {
        var filename = path.split('\\').pop().split('/').pop();
        var lastIndex = filename.lastIndexOf(".");
        if (lastIndex < 1)
            return "";
        return filename.substr(lastIndex + 1);
    }
    var userAgent = navigator.userAgent.toLowerCase();
    var isiOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
    if (isiOS) {
        jQuery('.project-planner-content .work-icons-list li label').on('touchstart', function() {
            jQuery(this).find('input[type="checkbox"]').trigger('click');
        });
    }
    jQuery('.bioconsert-box-wrap').on('click', function() {
        var $this = jQuery(this),
            content = $this.data('content'),
            parentWidth = jQuery('.bioconsert-boxes-wrap').outerWidth();
        if ($this.outerWidth() >= (parentWidth / 2.5)) {
            jQuery('.bioconsert-box-content-full').hide();
            if ($this.hasClass('open')) {
                jQuery('.bioconsert-box-wrap, .bioconsert-box-content-full, .bioconsert-box-content-half').removeClass('open');
                jQuery('.bioconsert-box-content-half').stop().slideUp(function() {
                    jQuery(this).find('.bioconsert-box-content-wrap').html('');
                });
            } else {
                jQuery('.bioconsert-box-wrap').removeClass('open');
                $this.addClass('open');
                if ($this.parent().nextAll('.bioconsert-box-content-half').eq(0).is(':visible')) {
                    $this.parent().nextAll('.bioconsert-box-content-half').eq(0).find('.bioconsert-box-content-wrap').animate({
                        opacity: 0
                    }, 300, function() {
                        jQuery(this).html(content).animate({
                            opacity: 1
                        }, 300);
                    });
                } else {
                    jQuery('.bioconsert-box-content-half').stop().slideUp().promise().done(function() {
                        console.log('up up');
                        $this.parent().nextAll('.bioconsert-box-content-half').eq(0).addClass('open');
                        $this.parent().nextAll('.bioconsert-box-content-half').eq(0).find('.bioconsert-box-content-wrap').html(content);
                        $this.parent().nextAll('.bioconsert-box-content-half').eq(0).slideDown();
                    });
                }
            }
        } else {
            jQuery('.bioconsert-box-content-half').hide();
            if ($this.hasClass('open')) {
                jQuery('.bioconsert-box-wrap, .bioconsert-box-content-full').removeClass('open');
                jQuery('.bioconsert-box-content-full').stop().slideUp(function() {
                    jQuery(this).find('.bioconsert-box-content-wrap').html('');
                });
            } else {
                jQuery('.bioconsert-box-wrap').removeClass('open');
                $this.addClass('open');
                if (jQuery('.bioconsert-box-content-full').hasClass('open')) {
                    jQuery('.bioconsert-box-content-full').find('.bioconsert-box-content-wrap').animate({
                        opacity: 0
                    }, 300, function() {
                        jQuery(this).html(content).animate({
                            opacity: 1
                        }, 300);
                    });
                } else {
                    jQuery('.bioconsert-box-content-full').addClass('open');
                    jQuery('.bioconsert-box-content-full').find('.bioconsert-box-content-wrap').html(content);
                    jQuery('.bioconsert-box-content-full').slideDown();
                }
            }
        }
    });
    if (jQuery('.bioconsert-box-wrap').length) {
        jQuery(window).on('resize', function() {
            jQuery('.bioconsert-box-wrap, .bioconsert-box-content-full, .bioconsert-box-content-half').removeClass('open');
            jQuery('.bioconsert-box-content-full, .bioconsert-box-content-half').hide();
        })
    }
    if (jQuery('.agentur-slider').length) {
        var agenturSlider = jQuery('.agentur-slider').bxSlider({
            controls: false,
            pagerCustom: '#agentur-pager'
        });
    }
    function validateEstimateForm() {
        var isFormValid = false;
        if (jQuery('.first_name').val().length < 2) {
            jQuery('.first_name').addClass('error');
        }
        if (!validateEmail(jQuery('.email_addr').val())) {
            jQuery('.email_addr').addClass('error');
        }
        if (validateEmail(jQuery('.email_addr').val()) && jQuery('.first_name').val().length > 1 && jQuery('.the-type-wrap input[type=radio]:checked').length && jQuery('.brief_desc').val().length > 1) {
            jQuery('.email_addr').removeClass('error');
            jQuery('.first_name').removeClass('error');
            isFormValid = true;
        }
        return isFormValid;
    }
    jQuery('#free-estimates').on('submit', function(e) {
        e.preventDefault();
        var $this = jQuery(this),
            submitBtn = jQuery('#free-estimate-submit');
        if (validateEstimateForm()) {
            submitBtn.tipso('destroy');
            form_steps_estimate_ajax($this);
        } else {
            submitBtn.tipso({
                background: '#0003D1',
                showArrow: false,
                width: '',
                maxWidth: 300,
                speed: 200,
                delay: 50,
                hideDelay: 1000,
                tooltipHover: true,
                position: 'left',
                animationIn: 'fadeIn',
                animationOut: 'fadeOut',
                offsetY: -3,
                content: function() {
                    return pogon_ajax_script.translations.fillAll;
                }
            });
            submitBtn.tipso('show');
            submitBtn.on('mouseout', function() {
                submitBtn.tipso('hide');
                submitBtn.tipso('destroy');
            });
        }
    });
    jQuery('.js-free-estimate').on('click', function() {
        jQuery('html, body').animate({
            scrollTop: jQuery('#content').offset().top
        }, 600);
        return false;
    });
    jQuery('.page-template-template-estimates_alt').on('click', function(e) {
        if (jQuery('.estimates-alt-show-selection').hasClass('active')) {
            jQuery('.estimates-alt-show-selection').removeClass('active');
            jQuery('.free-estimates-alt-form-wrap .the-type-wrap').stop().slideUp();
        }
    });
    jQuery('.estimates-alt-the-type-wrap').on('click', function(e) {
        e.stopPropagation();
    });
    jQuery('.estimates-alt-show-selection').on('click', function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.free-estimates-alt-form-wrap .the-type-wrap').stop().slideToggle();
    });
    jQuery('.free-estimates-alt-form-wrap').on('change', '[name="type"]', function() {
        jQuery('.estimates-alt-show-selection').text(this.value);
        jQuery('.estimates-alt-show-selection').removeClass('active');
        jQuery('.free-estimates-alt-form-wrap .the-type-wrap').stop().slideUp();
    });
    jQuery('.service-intro:not(.stuck)').on('click', function() {
        var $this = jQuery(this);
        if ($this.hasClass('open')) {
            jQuery(this).removeClass('open');
            jQuery(this).next('.service-description').stop().slideUp(400);
        } else {
            jQuery('.service-intro').removeClass('open');
            jQuery('.service-description').slideUp(400, function() {
                jQuery('html, body').stop().animate({
                    scrollTop: $this.offset().top - 140
                }, 200, function() {
                    $this.addClass('open');
                    $this.next('.service-description').stop().slideDown(400);
                });
            });
        }
    });
    function contractMenu() {
        var $window = jQuery(window),
            wWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (wWidth > 1000) {
            if ($window.scrollTop() > 0) {
                jQuery('body').addClass('contract-menu');
                if (jQuery('.menu-button-wrap').hasClass('open')) {
                    jQuery('.menu-button-wrap').trigger('click');
                }
            } else {
                jQuery('body').removeClass('contract-menu');
            }
        } else {
            jQuery('body').removeClass('contract-menu');
        }
        if (jQuery('#contact-map').length) {
            google.maps.event.trigger(map, 'resize');
        }
    }
    jQuery('header').hover(function() {
        var $body = jQuery('body');
        if ($body.hasClass('contract-menu')) {
            $body.addClass('contract-suspend');
            setTimeout(function() {
                jQuery('.header-content .slider').slick('slickSetOption', 'pogon', 1, true);
            }, 600);
        }
    }, function() {
        var $body = jQuery('body');
        if ($body.hasClass('contract-menu')) {
            if (jQuery('.menu-button-wrap').hasClass('open')) {
                jQuery('.menu-button-wrap').trigger('click');
            }
        }
        $body.removeClass('contract-suspend');
    });
    if (jQuery('.agentur-slider').length) {
        jQuery(jQuery('#content-resize-helper')[0].contentWindow).resize(jQuery.throttle(250, function() {
            agenturSlider.reloadSlider();
        }));
    }
    jQuery(window).scroll(jQuery.throttle(250, contractMenu));
    jQuery(window).resize(jQuery.throttle(250, contractMenu));
});


(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/ScrollCircleIndicator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ScrollCircleIndicator = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollCircleIndicator.useEffect": ()=>{
            const progressCircleBar = document.querySelector('.progress-circle-bar');
            const scrollToTopElement = document.querySelector('.scroll-to-top');
            const updateProgressCircle = {
                "ScrollCircleIndicator.useEffect.updateProgressCircle": ()=>{
                    const totalHeight = document.body.scrollHeight - window.innerHeight;
                    const scrolled = window.pageYOffset;
                    let progress = scrolled / totalHeight * 283;
                    progress = Math.min(progress, 283);
                    if (progressCircleBar) {
                        progressCircleBar.style.setProperty('--stroke-dashoffset', (283 - progress).toString());
                    }
                    if (scrollToTopElement) {
                        if (window.innerHeight + scrolled >= document.body.offsetHeight) {
                            scrollToTopElement.style.setProperty('--scroll-to-top-opacity', '1');
                        } else {
                            scrollToTopElement.style.setProperty('--scroll-to-top-opacity', '0');
                        }
                    }
                }
            }["ScrollCircleIndicator.useEffect.updateProgressCircle"];
            const scrollToTop = {
                "ScrollCircleIndicator.useEffect.scrollToTop": ()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }["ScrollCircleIndicator.useEffect.scrollToTop"];
            if (scrollToTopElement) {
                scrollToTopElement.addEventListener('click', scrollToTop);
            }
            updateProgressCircle();
            window.addEventListener('scroll', updateProgressCircle);
            window.addEventListener('resize', updateProgressCircle);
            return ({
                "ScrollCircleIndicator.useEffect": ()=>{
                    window.removeEventListener('scroll', updateProgressCircle);
                    window.removeEventListener('resize', updateProgressCircle);
                    if (scrollToTopElement) {
                        scrollToTopElement.removeEventListener('click', scrollToTop);
                    }
                }
            })["ScrollCircleIndicator.useEffect"];
        }
    }["ScrollCircleIndicator.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "progress-circle-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "progress-circle",
                viewBox: "0 0 100 100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "progress-background",
                        cx: "50",
                        cy: "50",
                        r: "45"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ScrollCircleIndicator.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "progress-circle-bar",
                        cx: "50",
                        cy: "50",
                        r: "45"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ScrollCircleIndicator.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ScrollCircleIndicator.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scroll-to-top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 19V5M5 12l7-7 7 7"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ScrollCircleIndicator.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ScrollCircleIndicator.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ScrollCircleIndicator.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ScrollCircleIndicator.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
};
_s(ScrollCircleIndicator, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ScrollCircleIndicator;
const __TURBOPACK__default__export__ = ScrollCircleIndicator;
var _c;
__turbopack_context__.k.register(_c, "ScrollCircleIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_ScrollCircleIndicator_tsx_9d7bf61c._.js.map
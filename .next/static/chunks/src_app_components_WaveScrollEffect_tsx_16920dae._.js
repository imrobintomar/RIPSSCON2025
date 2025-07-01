(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/WaveScrollEffect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const WaveScrollEffect = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveScrollEffect.useEffect": ()=>{
            const root = document.documentElement;
            const section1 = document.querySelector('.header'); // Assuming .header is the element to watch for scroll
            const handleScroll = {
                "WaveScrollEffect.useEffect.handleScroll": ()=>{
                    const y = 1 + (window.scrollY || window.pageYOffset);
                    root.style.setProperty('--gradient-percent', y * 4 + "px");
                    console.log(y); // Keep console.log for now, can be removed later
                }
            }["WaveScrollEffect.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "WaveScrollEffect.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                }
            })["WaveScrollEffect.useEffect"];
        }
    }["WaveScrollEffect.useEffect"], []); // Empty dependency array means this effect runs once on mount and cleans up on unmount
    return null; // This component doesn't render anything itself
};
_s(WaveScrollEffect, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = WaveScrollEffect;
const __TURBOPACK__default__export__ = WaveScrollEffect;
var _c;
__turbopack_context__.k.register(_c, "WaveScrollEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_WaveScrollEffect_tsx_16920dae._.js.map
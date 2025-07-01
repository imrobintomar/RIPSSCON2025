module.exports = {

"[project]/src/app/components/WaveScrollEffect.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const WaveScrollEffect = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = document.documentElement;
        const section1 = document.querySelector('.header'); // Assuming .header is the element to watch for scroll
        const handleScroll = ()=>{
            const y = 1 + (window.scrollY || window.pageYOffset);
            root.style.setProperty('--gradient-percent', y * 4 + "px");
            console.log(y); // Keep console.log for now, can be removed later
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount
    return null; // This component doesn't render anything itself
};
const __TURBOPACK__default__export__ = WaveScrollEffect;
}}),

};

//# sourceMappingURL=src_app_components_WaveScrollEffect_tsx_1a59fa67._.js.map
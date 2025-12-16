module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/context/config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const config = {
    activeDir: 'ltr',
    activeMode: 'light',
    activeTheme: 'BLUE_THEME',
    activeLayout: 'vertical',
    isLayout: 'boxed',
    isSidebarHover: false,
    isCollapse: 'full-sidebar',
    isLanguage: 'en',
    isCardShadow: true,
    isMobileSidebar: false,
    isHorizontal: false,
    isBorderRadius: 7,
    sidebarWidth: 270,
    miniSidebarWidth: 87,
    topbarHeight: 70
};
const __TURBOPACK__default__export__ = config;
}),
"[project]/src/app/context/customizerContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomizerContext",
    ()=>CustomizerContext,
    "CustomizerContextProvider",
    ()=>CustomizerContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/config.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const CustomizerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const CustomizerContextProvider = ({ children })=>{
    const [activeDir, setActiveDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].activeDir);
    const [activeMode, setActiveMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].activeMode);
    const [activeTheme, setActiveTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].activeTheme);
    const [activeLayout, setActiveLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].activeLayout);
    const [isCardShadow, setIsCardShadow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isCardShadow);
    const [isLayout, setIsLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isLayout);
    const [isBorderRadius, setIsBorderRadius] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isBorderRadius);
    const [isCollapse, setIsCollapse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isCollapse);
    const [isLanguage, setIsLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isLanguage);
    const [isSidebarHover, setIsSidebarHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileSidebar, setIsMobileSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Set attributes immediately
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.setAttribute("class", activeMode);
        document.documentElement.setAttribute("dir", activeDir);
        document.documentElement.setAttribute('data-color-theme', activeTheme);
        document.documentElement.setAttribute("data-layout", activeLayout);
        document.documentElement.setAttribute("data-boxed-layout", isLayout);
        document.documentElement.setAttribute("data-sidebar-type", isCollapse);
    }, [
        activeMode,
        activeDir,
        activeTheme,
        activeLayout,
        isLayout,
        isCollapse
    ]);
    console.log('activeMode', activeMode);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomizerContext.Provider, {
        value: {
            activeDir,
            setActiveDir,
            activeMode,
            setActiveMode,
            activeTheme,
            setActiveTheme,
            activeLayout,
            setActiveLayout,
            isCardShadow,
            setIsCardShadow,
            isLayout,
            setIsLayout,
            isBorderRadius,
            setIsBorderRadius,
            isCollapse,
            setIsCollapse,
            isLanguage,
            setIsLanguage,
            isSidebarHover,
            setIsSidebarHover,
            isMobileSidebar,
            setIsMobileSidebar
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/customizerContext.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/store/authSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "login",
    ()=>login,
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
"use client";
;
const initialState = {
    token: null,
    email: null,
    role: null,
    name: null,
    image: null
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action)=>{
            const { token, email, role, name, image } = action.payload;
            state.token = token;
            state.email = email;
            state.role = role;
            state.image = image;
            state.name = name;
        },
        logout: (state)=>{
            state.token = null;
            state.email = null;
            state.role = null;
            state.image = null;
            state.name = null;
        }
    }
});
const { login, logout } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
}),
"[project]/src/app/store/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "persistor",
    ()=>persistor,
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/dist/redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistStore.js [app-ssr] (ecmascript) <export default as persistStore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistReducer.js [app-ssr] (ecmascript) <export default as persistReducer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/lib/storage/index.js [app-ssr] (ecmascript)"); // defaults to localStorage
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$authSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/authSlice.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const persistConfig = {
    key: "root",
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    whitelist: [
        "auth"
    ]
};
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineReducers"])({
    auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$authSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
const persistedReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__["persistReducer"])(persistConfig, rootReducer);
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
const persistor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__["persistStore"])(store);
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/(DashboardLayout)/layout/shared/customizer/RTL.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/cache/dist/emotion-cache.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__CacheProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript) <export C as CacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stylis-plugin-rtl/dist/stylis-rtl.js [app-ssr] (ecmascript)");
;
;
;
;
;
const styleCache = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        key: 'rtl',
        prepend: true,
        // We have to temporary ignore this due to incorrect definitions
        // in the stylis-plugin-rtl module
        // @see https://github.com/styled-components/stylis-plugin-rtl/issues/23
        stylisPlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        ]
    });
const RTL = (props)=>{
    const { children, direction } = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.dir = direction;
    }, [
        direction
    ]);
    if (direction === 'rtl') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__C__as__CacheProvider$3e$__["CacheProvider"], {
            value: styleCache(),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/(DashboardLayout)/layout/shared/customizer/RTL.jsx",
            lineNumber: 27,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
const __TURBOPACK__default__export__ = RTL;
}),
"[project]/src/utils/theme/DefaultColors.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseDarkTheme",
    ()=>baseDarkTheme,
    "baselightTheme",
    ()=>baselightTheme
]);
const baselightTheme = {
    direction: 'ltr',
    palette: {
        primary: {
            main: '#5D87FF',
            light: '#ECF2FF',
            dark: '#4570EA'
        },
        secondary: {
            main: '#49BEFF',
            light: '#E8F7FF',
            dark: '#23afdb'
        },
        success: {
            main: '#13DEB9',
            light: '#E6FFFA',
            dark: '#02b3a9',
            contrastText: '#ffffff'
        },
        info: {
            main: '#539BFF',
            light: '#EBF3FE',
            dark: '#1682d4',
            contrastText: '#ffffff'
        },
        error: {
            main: '#FA896B',
            light: '#FDEDE8',
            dark: '#f3704d',
            contrastText: '#ffffff'
        },
        warning: {
            main: '#FFAE1F',
            light: '#FEF5E5',
            dark: '#ae8e59',
            contrastText: '#ffffff'
        },
        purple: {
            A50: '#EBF3FE',
            A100: '#6610f2',
            A200: '#557fb9'
        },
        grey: {
            100: '#F2F6FA',
            200: '#EAEFF4',
            300: '#DFE5EF',
            400: '#7C8FAC',
            500: '#5A6A85',
            600: '#2A3547'
        },
        text: {
            primary: '#2A3547',
            secondary: '#2A3547'
        },
        action: {
            disabledBackground: 'rgba(73,82,88,0.12)',
            hoverOpacity: 0.02,
            hover: '#f6f9fc'
        },
        divider: '#e5eaef'
    }
};
const baseDarkTheme = {
    direction: 'ltr',
    palette: {
        primary: {
            main: '#5D87FF',
            light: '#ECF2FF',
            dark: '#4570EA'
        },
        secondary: {
            main: '#777e89',
            light: '#1C455D',
            dark: '#173f98'
        },
        success: {
            main: '#13DEB9',
            light: '#1B3C48',
            dark: '#02b3a9',
            contrastText: '#ffffff'
        },
        info: {
            main: '#539BFF',
            light: '#223662',
            dark: '#1682d4',
            contrastText: '#ffffff'
        },
        error: {
            main: '#FA896B',
            light: '#4B313D',
            dark: '#f3704d',
            contrastText: '#ffffff'
        },
        warning: {
            main: '#FFAE1F',
            light: '#4D3A2A',
            dark: '#ae8e59',
            contrastText: '#ffffff'
        },
        purple: {
            A50: '#EBF3FE',
            A100: '#6610f2',
            A200: '#557fb9'
        },
        grey: {
            100: '#333F55',
            200: '#465670',
            300: '#7C8FAC',
            400: '#DFE5EF',
            500: '#EAEFF4',
            600: '#F2F6FA'
        },
        text: {
            primary: '#EAEFF4',
            secondary: '#7C8FAC'
        },
        action: {
            disabledBackground: 'rgba(73,82,88,0.12)',
            hoverOpacity: 0.02,
            hover: '#333F55'
        },
        divider: '#333F55',
        background: {
            default: '#171c23',
            dark: '#171c23',
            paper: '#171c23'
        }
    }
};
;
}),
"[project]/src/utils/theme/Components.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// project imports
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/DefaultColors.jsx [app-ssr] (ecmascript)");
;
const components = (theme)=>{
    return {
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box"
                },
                html: {
                    height: "100%",
                    width: "100%"
                },
                a: {
                    textDecoration: "none"
                },
                body: {
                    height: "100%",
                    margin: 0,
                    padding: 0
                },
                "#root": {
                    height: "100%"
                },
                '.mui-nniyr1-MuiCollapse-root-MenuBar-root-RichTextField-menuBar-MenuBar-sticky, .mui-anumxs-FieldContainer-notchedOutline': {
                    borderColor: `${theme.palette.divider} !important`
                },
                "*[dir='rtl'] .buyNowImg": {
                    transform: "scaleX(-1)"
                },
                ".border-none": {
                    border: "0px",
                    td: {
                        border: "0px"
                    }
                },
                ".btn-xs": {
                    minWidth: "30px !important",
                    width: "30px",
                    height: "30px",
                    borderRadius: "6px !important",
                    padding: "0px !important"
                },
                ".hover-text-primary:hover .text-hover": {
                    color: theme.palette.primary.main
                },
                ".code-dialog pre": {
                    background: `${theme.palette.primary.light} !important`,
                    borderRadius: theme.shape.borderRadius
                },
                ".hoverCard:hover": {
                    scale: "1.01",
                    transition: " 0.1s ease-in"
                },
                ".signup-bg": {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    height: "100%"
                },
                ".MuiBox-root": {
                    borderRadius: theme.shape.borderRadius
                },
                ".MuiCardHeader-action": {
                    alignSelf: "center !important"
                },
                ".emoji-picker-react .emoji-scroll-wrapper": {
                    overflowX: "hidden"
                },
                ".scrollbar-container": {
                    borderRight: "0 !important"
                },
                ".theme-timeline .MuiTimelineOppositeContent-root": {
                    minWidth: "90px"
                },
                ".MuiAlert-root .MuiAlert-icon": {
                    color: "inherit!important"
                },
                ".MuiTimelineConnector-root": {
                    width: "1px !important"
                },
                " .simplebar-scrollbar:before": {
                    background: `${theme.palette.grey[300]} !important`
                },
                hr: {
                    height: "1px",
                    border: 0,
                    borderTop: `1px solid ${theme.palette.divider}`
                },
                "@keyframes marquee": {
                    "0%": {
                        transform: "translate3d(0,0,0)"
                    },
                    "100% ": {
                        transform: "translate3d(-2086px,0,0)"
                    }
                },
                "@keyframes marquee2": {
                    "0%": {
                        transform: "translate3d(-2086px,0,0)"
                    },
                    "100% ": {
                        transform: "translate3d(0,0,0)"
                    }
                },
                "@keyframes gradient": {
                    "0%": {
                        backgroundPosition: "0% 50%"
                    },
                    "50%": {
                        backgroundPosition: " 100% 50%"
                    },
                    "100% ": {
                        backgroundPosition: " 0% 50%"
                    }
                },
                ".rounded-bars .apexcharts-bar-series.apexcharts-plot-series .apexcharts-series path": {
                    clipPath: "inset(0 0 5% 0 round 20px)"
                }
            }
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    ":before": {
                        backgroundColor: theme.palette.grey[100]
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        },
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: theme.palette.divider
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                },
                sizeSmall: {
                    width: 30,
                    height: 30,
                    minHeight: 30
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.main
                    }
                },
                colorPrimary: {
                    "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: "white"
                    }
                },
                colorSecondary: {
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.main,
                        color: "white"
                    }
                },
                colorSuccess: {
                    "&:hover": {
                        backgroundColor: theme.palette.success.main,
                        color: "white"
                    }
                },
                colorError: {
                    "&:hover": {
                        backgroundColor: theme.palette.error.main,
                        color: "white"
                    }
                },
                colorWarning: {
                    "&:hover": {
                        backgroundColor: theme.palette.warning.main,
                        color: "white"
                    }
                },
                colorInfo: {
                    "&:hover": {
                        backgroundColor: theme.palette.info.main,
                        color: "white"
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    boxShadow: "none"
                },
                text: {
                    padding: "5px 15px",
                    "&:hover": {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.main
                    }
                },
                textPrimary: {
                    backgroundColor: theme.palette.primary.light,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: "white"
                    }
                },
                textSecondary: {
                    backgroundColor: theme.palette.secondary.light,
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.main,
                        color: "white"
                    }
                },
                textSuccess: {
                    backgroundColor: theme.palette.success.light,
                    "&:hover": {
                        backgroundColor: theme.palette.success.main,
                        color: "white"
                    }
                },
                textError: {
                    backgroundColor: theme.palette.error.light,
                    "&:hover": {
                        backgroundColor: theme.palette.error.main,
                        color: "white"
                    }
                },
                textInfo: {
                    backgroundColor: theme.palette.info.light,
                    "&:hover": {
                        backgroundColor: theme.palette.info.main,
                        color: "white"
                    }
                },
                textWarning: {
                    backgroundColor: theme.palette.warning.light,
                    "&:hover": {
                        backgroundColor: theme.palette.warning.main,
                        color: "white"
                    }
                },
                outlinedPrimary: {
                    "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: "white"
                    }
                },
                outlinedSecondary: {
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.main,
                        color: "white"
                    }
                },
                outlinedError: {
                    "&:hover": {
                        backgroundColor: theme.palette.error.main,
                        color: "white"
                    }
                },
                outlinedSuccess: {
                    "&:hover": {
                        backgroundColor: theme.palette.success.main,
                        color: "white"
                    }
                },
                outlinedInfo: {
                    "&:hover": {
                        backgroundColor: theme.palette.info.main,
                        color: "white"
                    }
                },
                outlinedWarning: {
                    "&:hover": {
                        backgroundColor: theme.palette.warning.main,
                        color: "white"
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: "16px 24px"
                },
                title: {
                    fontSize: "1.125rem"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    width: "100%",
                    padding: "15px",
                    backgroundImage: "none"
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "24px"
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&:last-child td": {
                        borderBottom: 0
                    }
                }
            }
        },
        MuiGridItem: {
            styleOverrides: {
                root: {
                    paddingTop: "30px",
                    paddingLeft: "30px !important"
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[200],
                    borderRadius: "6px"
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: theme.palette.divider
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    fontSize: "0.75rem"
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                filledSuccess: {
                    color: "white"
                },
                filledInfo: {
                    color: "white"
                },
                filledError: {
                    color: "white"
                },
                filledWarning: {
                    color: "white"
                },
                standardSuccess: {
                    backgroundColor: theme.palette.success.light,
                    color: theme.palette.success.main
                },
                standardError: {
                    backgroundColor: theme.palette.error.light,
                    color: theme.palette.error.main
                },
                standardWarning: {
                    backgroundColor: theme.palette.warning.light,
                    color: theme.palette.warning.main
                },
                standardInfo: {
                    backgroundColor: theme.palette.info.light,
                    color: theme.palette.info.main
                },
                outlinedSuccess: {
                    borderColor: theme.palette.success.main,
                    color: theme.palette.success.main
                },
                outlinedWarning: {
                    borderColor: theme.palette.warning.main,
                    color: theme.palette.warning.main
                },
                outlinedError: {
                    borderColor: theme.palette.error.main,
                    color: theme.palette.error.main
                },
                outlinedInfo: {
                    borderColor: theme.palette.info.main,
                    color: theme.palette.info.main
                },
                successIcon: {
                    color: theme.palette.info.main
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.mode === "dark" ? theme.palette.grey[200] : theme.palette.grey[300]
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main
                    }
                },
                input: {
                    padding: "12px 14px"
                },
                inputSizeSmall: {
                    padding: "8px 14px"
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        padding: '4px 9px'
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: theme.palette.background.paper,
                    background: theme.palette.text.primary
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    borderColor: `${theme.palette.divider}`
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontSize: "1.25rem"
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    boxShadow: "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px"
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = components;
}),
"[next]/internal/font/google/poppins_5488b96a.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "poppins_5488b96a-module__tZ5VEG__className",
});
}),
"[next]/internal/font/google/poppins_5488b96a.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_5488b96a$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_5488b96a.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_5488b96a$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_5488b96a$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_5488b96a$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/utils/theme/Typography.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_5488b96a$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_5488b96a.js [app-ssr] (ecmascript)");
;
const typography = {
    fontFamily: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_5488b96a$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].style.fontFamily,
    h1: {
        fontWeight: 500,
        fontSize: '2.25rem',
        lineHeight: '2.75rem'
    },
    h2: {
        fontWeight: 500,
        fontSize: '1.875rem',
        lineHeight: '2.25rem'
    },
    h3: {
        fontWeight: 500,
        fontSize: '1.5rem',
        lineHeight: '1.75rem'
    },
    h4: {
        fontWeight: 500,
        fontSize: '1.3125rem',
        lineHeight: '1.6rem'
    },
    h5: {
        fontWeight: 500,
        fontSize: '1.125rem',
        lineHeight: '1.6rem'
    },
    h6: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: '1.2rem'
    },
    button: {
        textTransform: 'capitalize',
        fontWeight: 400
    },
    body1: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.334rem'
    },
    body2: {
        fontSize: '0.75rem',
        letterSpacing: '0rem',
        fontWeight: 400,
        lineHeight: '1rem'
    },
    subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 400
    },
    subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 400
    }
};
const __TURBOPACK__default__export__ = typography;
;
}),
"[project]/src/utils/theme/Shadows.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "darkshadows",
    ()=>darkshadows,
    "shadows",
    ()=>shadows
]);
const shadows = [
    "none",
    "0px 2px 3px rgba(0,0,0,0.10)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)",
    "0 9px 17.5px rgb(0,0,0,0.05)",
    "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
    "0px 6px 12px rgba(127, 145, 156, 0.12)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"
];
const darkshadows = [
    "none",
    "0px 2px 3px rgba(0,0,0,0.10)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)",
    "0 9px 17.5px rgb(0,0,0,0.05)",
    "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 2%) 0px 12px 24px -4px",
    "0px 6px 12px rgba(127, 145, 156, 0.12)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)",
    "0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"
];
;
}),
"[project]/src/utils/theme/DarkThemeColors.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DarkThemeColors",
    ()=>DarkThemeColors
]);
const DarkThemeColors = [
    {
        name: 'BLUE_THEME',
        palette: {
            primary: {
                main: '#5D87FF',
                light: '#253662',
                dark: '#4570EA',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#49BEFF',
                light: '#1C455D',
                dark: '#23afdb',
                contrastText: '#ffffff'
            },
            background: {
                default: '#2A3447',
                dark: '#2A3547',
                paper: '#2A3447'
            }
        }
    },
    {
        name: 'AQUA_THEME',
        palette: {
            primary: {
                main: '#0074BA',
                light: '#103247',
                dark: '#006DAF',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#47D7BC',
                light: '#0C4339',
                dark: '#39C7AD',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'PURPLE_THEME',
        palette: {
            primary: {
                main: '#763EBD',
                light: '#26153C',
                dark: '#6E35B7',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#95CFD5',
                light: '#09454B',
                dark: '#8BC8CE',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'GREEN_THEME',
        palette: {
            primary: {
                main: '#0A7EA4',
                light: '#05313F',
                dark: '#06769A',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#CCDA4E',
                light: '#282917',
                dark: '#C3D046',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'CYAN_THEME',
        palette: {
            primary: {
                main: '#01C0C8',
                light: '#003638',
                dark: '#00B9C0',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#FB9678',
                light: '#40241C',
                dark: '#F48B6C',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'ORANGE_THEME',
        palette: {
            primary: {
                main: '#FA896B',
                light: '#402E32',
                dark: '#F48162',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#0074BA',
                light: '#082E45',
                dark: '#006FB1',
                contrastText: '#ffffff'
            }
        }
    }
];
;
}),
"[project]/src/utils/theme/LightThemeColors.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightThemeColors",
    ()=>LightThemeColors
]);
const LightThemeColors = [
    {
        name: 'BLUE_THEME',
        palette: {
            primary: {
                main: '#5D87FF',
                light: '#ECF2FF',
                dark: '#4570EA',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#49BEFF',
                light: '#E8F7FF',
                dark: '#23afdb',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'AQUA_THEME',
        palette: {
            primary: {
                main: '#0074BA',
                light: '#EFF9FF',
                dark: '#006DAF',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#47D7BC',
                light: '#EDFBF7',
                dark: '#39C7AD',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'PURPLE_THEME',
        palette: {
            primary: {
                main: '#763EBD',
                light: '#F2ECF9',
                dark: '#6E35B7',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#95CFD5',
                light: '#EDF8FA',
                dark: '#8BC8CE',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'GREEN_THEME',
        palette: {
            primary: {
                main: '#0A7EA4',
                light: '#F4F9FB',
                dark: '#06769A',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#CCDA4E',
                light: '#FAFBEF',
                dark: '#C3D046',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'CYAN_THEME',
        palette: {
            primary: {
                main: '#01C0C8',
                light: '#EBF9FA',
                dark: '#00B9C0',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#FB9678',
                light: '#FFF5F2',
                dark: '#F48B6C',
                contrastText: '#ffffff'
            }
        }
    },
    {
        name: 'ORANGE_THEME',
        palette: {
            primary: {
                main: '#FA896B',
                light: '#FBF2EF',
                dark: '#F48162',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#0074BA',
                light: '#EFF9FF',
                dark: '#006FB1',
                contrastText: '#ffffff'
            }
        }
    }
];
;
}),
"[project]/src/utils/theme/Theme.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildTheme",
    ()=>BuildTheme,
    "ThemeSettings",
    ()=>ThemeSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash/lodash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Components$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/Components.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Typography$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/utils/theme/Typography.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Shadows$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/Shadows.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DarkThemeColors$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/DarkThemeColors.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$LightThemeColors$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/LightThemeColors.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/DefaultColors.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$locale$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/locale/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$customizerContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/customizerContext.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const BuildTheme = (config = {})=>{
    const { activeMode, isBorderRadius } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$customizerContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomizerContext"]);
    const themeOptions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$LightThemeColors$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightThemeColors"].find((theme)=>theme.name === config.theme);
    const darkthemeOptions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DarkThemeColors$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DarkThemeColors"].find((theme)=>theme.name === config.theme);
    const defaultTheme = activeMode === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseDarkTheme"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baselightTheme"];
    const defaultShadow = activeMode === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Shadows$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["darkshadows"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Shadows$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"];
    const themeSelect = activeMode === 'dark' ? darkthemeOptions : themeOptions;
    const baseMode = {
        palette: {
            mode: activeMode
        },
        shape: {
            borderRadius: isBorderRadius
        },
        shadows: defaultShadow,
        typography: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Typography$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    };
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].merge({}, baseMode, defaultTheme, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$locale$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, themeSelect, {
        direction: config.direction
    }));
    theme.components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Components$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme);
    return theme;
};
const ThemeSettings = ()=>{
    const { activeDir, activeTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$customizerContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomizerContext"]);
    const theme = BuildTheme({
        direction: activeDir,
        theme: activeTheme
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.dir = activeDir;
    }, [
        activeDir
    ]);
    return theme;
};
;
}),
"[project]/src/utils/languages/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"Starter":"Starter","Menu Level":"Menu Level","Disabled":"Disabled","SubCaption":"SubCaption","Chip":"Chip","Outlined":"Outlined","External Link":"External Link"});}),
"[project]/src/utils/languages/fr.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"Starter":"entrée","Menu Level":"Niveau menu","Disabled":"Désactivé","SubCaption":"Sous-titre","Chip":"Ébrécher","Outlined":"Décrite","External Link":"lien externe"});}),
"[project]/src/utils/languages/ar.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"Starter":"بداية","Menu Level":"مستوى القائمة","Disabled":"عاجز","SubCaption":"التسمية الفرعية","Chip":"رقاقة","Outlined":"موجز","External Link":"رابط خارجي"});}),
"[project]/src/utils/languages/ch.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"Starter":"起动机","Menu Level":"菜单层","Disabled":"残疾人","SubCaption":"字幕","Chip":"芯片","Outlined":"概述","External Link":"外部链接"});}),
"[project]/src/utils/i18n.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/utils/languages/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$fr$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/utils/languages/fr.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$ar$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/utils/languages/ar.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$ch$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/utils/languages/ch.json (json)");
;
;
;
;
;
;
const resources = {
    en: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$en$2e$json__$28$json$29$__["default"]
    },
    fr: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$fr$2e$json__$28$json$29$__["default"]
    },
    ar: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$ar$2e$json__$28$json$29$__["default"]
    },
    ch: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$ch$2e$json__$28$json$29$__["default"]
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initReactI18next"]) // passes i18n down to react-i18next
.init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/src/app/app.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$DashboardLayout$292f$layout$2f$shared$2f$customizer$2f$RTL$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(DashboardLayout)/layout/shared/customizer/RTL.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/theme/Theme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$customizerContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/customizerContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$esm$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material-nextjs/esm/v13-appRouter/appRouterV13.js [app-ssr] (ecmascript) <export default as AppRouterCacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/i18n.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const MyApp = ({ children })=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Theme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeSettings"])();
    const { activeDir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$customizerContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomizerContext"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const isLoginPage = pathname.startsWith("/auth/auth1/login");
        const storedUser = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        const userData = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        setUser(userData);
        if (!userData && !isLoginPage) {
            setLoading(true);
            setTimeout(()=>{
                router.replace("/auth/auth1/login");
            }, 500);
        } else {
            setLoading(false);
        }
    }, [
        pathname,
        router
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/app.jsx",
            lineNumber: 40,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    console.log("🔍 Session user:", user);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$esm$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__["AppRouterCacheProvider"], {
        options: {
            enableCssLayer: true
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: theme,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$DashboardLayout$292f$layout$2f$shared$2f$customizer$2f$RTL$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                direction: activeDir,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/app.jsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/app.jsx",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/app.jsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/app.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MyApp;
}),
"[project]/src/app/providers.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/integration/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/app.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PersistGate"], {
            loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/providers.jsx",
                lineNumber: 11,
                columnNumber: 29
            }, void 0),
            persistor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistor"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$app$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/providers.jsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/providers.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/providers.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f97f703d._.js.map
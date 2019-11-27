import "core-js/stable";
import "regenerator-runtime/runtime";
import { validators } from "./validator";
export var BrowserType;
(function (BrowserType) {
    BrowserType["EDGE"] = "edge";
    BrowserType["IE11"] = "ie11";
    BrowserType["IE10"] = "ie10";
    BrowserType["IE9"] = "ie9";
    BrowserType["IE8"] = "ie8,";
    BrowserType["IE7"] = "ie7";
    BrowserType["QQ_SE"] = "qq_browser_extreme_speed";
    BrowserType["QQ_CP"] = "qq_compatible";
    BrowserType["MAXTHON"] = "maxthon";
    BrowserType["CHROME"] = "chrome";
    BrowserType["QIHU_EE"] = "qihu_ee";
    BrowserType["QIHU_SE"] = "qihu_se";
    BrowserType["UC"] = "ubrowser";
    BrowserType["METASR"] = "metaSr";
    BrowserType["FIREFOX"] = "firefox";
})(BrowserType || (BrowserType = {}));
export function getBrowserType() {
    const ua = navigator.userAgent.toLowerCase();
    const ar = validators.filter((validator) => {
        console.log(validator.partten.test(ua));
    });
    console.log(ar);
}
export function getMetaRenderer() {
    return document.head.children.namedItem("renderer");
}
export function main() {
    getBrowserType();
}
//# sourceMappingURL=browser.js.map
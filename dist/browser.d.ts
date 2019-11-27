import "core-js/stable";
import "regenerator-runtime/runtime";
export declare enum BrowserType {
    EDGE = "edge",
    IE11 = "ie11",
    IE10 = "ie10",
    IE9 = "ie9",
    IE8 = "ie8,",
    IE7 = "ie7",
    QQ_SE = "qq_browser_extreme_speed",
    QQ_CP = "qq_compatible",
    MAXTHON = "maxthon",
    CHROME = "chrome",
    QIHU_EE = "qihu_ee",
    QIHU_SE = "qihu_se",
    UC = "ubrowser",
    METASR = "metaSr",
    FIREFOX = "firefox"
}
export declare function getBrowserType(): void;
export declare function getMetaRenderer(): Element;
export declare function main(): void;

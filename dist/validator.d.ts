export interface Browser {
    name: BrowserType;
    ua: string;
}
export declare enum BrowserType {
    EDGE = "edge",
    IE11 = "ie11",
    IE10 = "ie10",
    IE9 = "ie9",
    IE8 = "ie8,",
    IE7 = "ie7",
    QQ = "qq",
    MAXTHON = "maxthon",
    CHROME = "chrome",
    QIHU_EE = "qihu_ee",
    QIHU_SE = "qihu_se",
    UC = "ubrowser",
    METASR = "metasr",
    FIREFOX = "firefox",
    SAFARI = "safari"
}
export interface Validator {
    name: BrowserType;
    validate: (ua: string, ...args: any[]) => boolean;
}
export declare const validators: Array<Validator>;

export var BrowserType;
(function (BrowserType) {
    BrowserType["EDGE"] = "edge";
    BrowserType["IE11"] = "ie11";
    BrowserType["IE10"] = "ie10";
    BrowserType["IE9"] = "ie9";
    BrowserType["IE8"] = "ie8,";
    BrowserType["IE7"] = "ie7";
    BrowserType["QQ"] = "qq";
    BrowserType["MAXTHON"] = "maxthon";
    BrowserType["CHROME"] = "chrome";
    BrowserType["QIHU_EE"] = "qihu_ee";
    BrowserType["QIHU_SE"] = "qihu_se";
    BrowserType["UC"] = "ubrowser";
    BrowserType["METASR"] = "metasr";
    BrowserType["FIREFOX"] = "firefox";
    BrowserType["SAFARI"] = "safari";
})(BrowserType || (BrowserType = {}));
export const validators = [
    {
        name: BrowserType.EDGE, validate: (ua, ...args) => {
            return new RegExp(/edge\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.IE11, validate: (ua, ...args) => {
            return new RegExp(/rv:11.0/).test(ua);
        }
    },
    {
        name: BrowserType.IE10, validate: (ua, ...args) => {
            return new RegExp(/msie\s*10/).test(ua);
        }
    },
    {
        name: BrowserType.IE9, validate: (ua, ...args) => {
            return new RegExp(/msie\s*9/).test(ua);
        }
    },
    {
        name: BrowserType.IE8, validate: (ua, ...args) => {
            return new RegExp(/msie\s*8/).test(ua);
        }
    },
    {
        name: BrowserType.IE7, validate: (ua, ...args) => {
            return new RegExp(/msie\s*7/).test(ua);
        }
    },
    {
        name: BrowserType.QQ, validate: (ua, ...args) => {
            return new RegExp(/qqbrowser\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.MAXTHON, validate: (ua, ...args) => {
            return new RegExp(/maxthon\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.CHROME, validate: (ua, ...args) => {
            return new RegExp(/chrome\d*/).test(ua) &&
                !new RegExp(/qqbrowser\/\d*/).test(ua) &&
                !new RegExp(/edge/).test(ua) &&
                !new RegExp(/maxthon\/\d*/).test(ua) &&
                !new RegExp(/qihu\s*360ee/).test(ua) &&
                !new RegExp(/qihu\s*360se/).test(ua) &&
                !new RegExp(/ubrowser\/\d*/).test(ua) &&
                !new RegExp(/metasr\s*\d*/).test(ua);
        }
    },
    {
        name: BrowserType.QIHU_EE, validate: (ua, ...args) => {
            return new RegExp(/qihu\s*360ee/).test(ua);
        }
    },
    {
        name: BrowserType.QIHU_SE, validate: (ua, ...args) => {
            return new RegExp(/qihu\s*360se/).test(ua);
        }
    },
    {
        name: BrowserType.UC, validate: (ua, ...args) => {
            return new RegExp(/ubrowser\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.METASR, validate: (ua, ...args) => {
            return new RegExp(/metasr\s*\d*/).test(ua);
        }
    },
    {
        name: BrowserType.FIREFOX, validate: (ua, ...args) => {
            return new RegExp(/firefox\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.SAFARI, validate: (ua, ...args) => {
            return new RegExp(/safari\/\d*/).test(ua) &&
                !new RegExp(/metasr\s*\d*/).test(ua) &&
                !new RegExp(/qqbrowser\/\d*/).test(ua) &&
                !new RegExp(/maxthon\/\d*/).test(ua) &&
                !new RegExp(/chrome\d*/).test(ua) &&
                !new RegExp(/qihu\s*360ee/).test(ua) &&
                !new RegExp(/qihu\s*360se/).test(ua) &&
                !new RegExp(/ubrowser\/\d*/).test(ua) &&
                !new RegExp(/metasr\s*\d*/).test(ua) &&
                !new RegExp(/firefox\/\d*/).test(ua);
        }
    }
];
//# sourceMappingURL=validator.js.map
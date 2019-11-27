export interface Browser {
    name: BrowserType,
    ua: string
}

export enum BrowserType {
    EDGE = 'edge',
    IE11 = 'ie11',
    IE10 = 'ie10',
    IE9 = 'ie9',
    IE8 = 'ie8,',
    IE7 = 'ie7',
    QQ = 'qq',
    MAXTHON = 'maxthon',
    CHROME = 'chrome',
    QIHU_EE = 'qihu_ee',
    QIHU_SE = 'qihu_se',
    UC = 'ubrowser',
    METASR = 'metasr',
    FIREFOX = 'firefox',
    SAFARI = 'safari',
    QQCP = 'qqcp',
    UCCP = 'uccp',
    METASRCP = 'metasrcp'
}

export interface Validator {
    name: BrowserType,
    validate: (ua: string, ...args) => boolean;
}

export const validators: Array<Validator> = [
    {
        name: BrowserType.EDGE, validate: (ua: string, ...args) => {
            return new RegExp(/edge\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.IE11, validate: (ua: string, ...args) => {
            return ua === "mozilla/5.0 (windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; rv:11.0) like gecko";
        }
    },
    {
        name: BrowserType.IE10, validate: (ua: string, ...args) => {
            return new RegExp(/msie\s*10/).test(ua);
        }
    },
    {
        name: BrowserType.IE9, validate: (ua: string, ...args) => {
            return new RegExp(/msie\s*9/).test(ua);
        }
    },
    {
        name: BrowserType.IE8, validate: (ua: string, ...args) => {
            return new RegExp(/msie\s*8/).test(ua);
        }
    },
    {
        name: BrowserType.IE7, validate: (ua: string, ...args) => {
            return new RegExp(/msie\s*7/).test(ua);
        }
    },
    {
        name: BrowserType.QQ, validate: (ua: string, ...args) => {
            return new RegExp(/qqbrowser\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.MAXTHON, validate: (ua: string, ...args) => {
            return new RegExp(/maxthon\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.CHROME, validate: (ua: string, ...args) => {
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
        name: BrowserType.QIHU_EE, validate: (ua: string, ...args) => {
            return new RegExp(/qihu\s*360ee/).test(ua);
        }
    },
    {
        name: BrowserType.QIHU_SE, validate: (ua: string, ...args) => {
            return new RegExp(/qihu\s*360se/).test(ua);
        }
    },
    {
        name: BrowserType.UC, validate: (ua: string, ...args) => {
            return new RegExp(/ubrowser\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.METASR, validate: (ua: string, ...args) => {
            return new RegExp(/metasr\s*\d*/).test(ua);
        }
    },
    {
        name: BrowserType.FIREFOX, validate: (ua: string, ...args) => {
            return new RegExp(/firefox\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.SAFARI, validate: (ua: string, ...args) => {
            return new RegExp(/safari\/\d*/).test(ua) &&
                !new RegExp(/metasr\s*\d*/).test(ua) &&
                !new RegExp(/qqbrowser\/\d*/).test(ua) &&
                !new RegExp(/maxthon\/\d*/).test(ua) &&
                !new RegExp(/chrome\d*/).test(ua) &&
                !new RegExp(/qihu\s*360ee/).test(ua) &&
                !new RegExp(/qihu\s*360se/).test(ua) &&
                !new RegExp(/ubrowser\/\d*/).test(ua) &&
                !new RegExp(/metasr\s*\d*/).test(ua) &&
                !new RegExp(/firefox\/\d*/).test(ua)
        }
    },
    {
        name: BrowserType.QQCP, validate: (ua: string, ...args) => {
            return new RegExp(/qqbrowser\/\d*/).test(ua) && new RegExp(/trident\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.METASRCP, validate: (ua: string, ...args) => {
            return new RegExp(/metasr\s*\d*/).test(ua) && new RegExp(/trident\/\d*/).test(ua);
        }
    },
    {
        name: BrowserType.UCCP, validate: (ua: string, ...args) => {
            return new RegExp(/ubrowser\/\d*/).test(ua) && new RegExp(/trident\/\d*/).test(ua);
        }
    }
];


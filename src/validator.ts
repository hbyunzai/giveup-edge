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
    QQ_SE = 'qq_se',
    MAXTHON = 'maxthon',
    CHROME = 'chrome',
    QIHU_EE = 'qihu_ee',
    QIHU_SE = 'qihu_se',
    UC = 'ubrowser',
    METASR = 'metasr',
    FIREFOX = 'firefox'
}

export interface Validator {
    name: BrowserType,
    validate: (ua: string, ...args) => boolean;
}

export const validators: Array<Validator> = [
    {
        name: BrowserType.IE11, validate: (ua: string, ...args) => {
            return new RegExp(/rv:11.0/).test(ua);
        }
    }
];


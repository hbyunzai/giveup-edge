import "core-js";
import "regenerator-runtime/runtime";
import {Validator, validators} from "./validator";
import {insertCSS, insertDOM} from "./dom";

export function getUserBrowser(): Array<Validator> | null {
    const ua: string = navigator.userAgent.toLowerCase();
    const userBrowser = [];
    for (let i = 0; i < validators.length; i++) {
        if (validators[i].validate(ua) === true) {
            userBrowser.push(validators[i]);
        }
    }
    return userBrowser;
}

export function getMetaRenderer(): Element {
    return document.head.children.namedItem("renderer");
}

export function main() {
    // 可以检测出的浏览器
    if (getMetaRenderer() && getUserBrowser().length > 0) {
        const currentBrowser = getUserBrowser()[0];
        // 插入css
        insertCSS();
        // 提供文档
        if (currentBrowser.name.includes("ie") || currentBrowser.name.includes("edge") || currentBrowser.name.includes("cp")) {
            // 插入dom
            insertDOM();
        }
    }
}

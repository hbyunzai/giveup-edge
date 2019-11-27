import "core-js";
import "regenerator-runtime/runtime";
import {Validator, validators} from "./validator";
import {generateChangeKernelDoc, generateDownLoadDoc, insertCSS, insertDOM, triggerModal} from "./dom";

export function getUserBrowser(): Array<Validator> | null {
    const ua: string = navigator.userAgent.toLowerCase();
    const userBrowser: Array<Validator> | null = validators.filter((validator: Validator) => {
        return validator.validate(ua);
    });
    return userBrowser;
}

export function getMetaRenderer(): Element {
    return document.head.children.namedItem("renderer");
}

export function main() {
    // 可以检测出的浏览器
    if (getMetaRenderer() && getUserBrowser().length > 0) {
        const currentBrowser = getUserBrowser()[0];
        insertCSS();
        // ie,重下浏览器
        if (currentBrowser.name.includes("ie") || currentBrowser.name.includes("edge")) {
            generateDownLoadDoc();
        }
        // 兼容模式
        if (currentBrowser.name.includes("cp")) {
            generateChangeKernelDoc();
        }
        insertDOM();
        triggerModal();
    }
    // 无法检测出的浏览器
    else {

    }
}

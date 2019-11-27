import "core-js";
import "regenerator-runtime/runtime";
import { validators } from "./validator";
export function getUserBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    const userBrowser = validators.filter((validator) => {
        return validator.validate(ua);
    });
    return userBrowser;
}
export function getMetaRenderer() {
    return document.head.children.namedItem("renderer");
}
export function main() {
    if (getMetaRenderer()) {
        console.log(getUserBrowser());
    }
}
//# sourceMappingURL=browser.js.map
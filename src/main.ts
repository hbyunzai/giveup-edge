import "core-js";
import "regenerator-runtime/runtime";
const { detect } = require('detect-browser');

window.onload = function () {
    const browser = detect();
    if (browser) {
        console.log(browser.name);
        console.log(browser.version);
        console.log(browser.os);
    }
}


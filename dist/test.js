import { validators } from "./validator";
export function test() {
    const json = require('./test.json');
    const browsers = json.browsers;
    browsers.forEach((browser) => {
        console.log(`==============${browser.name}==============`);
        validators.forEach((validator) => {
            console.log(`使用'${validator.name}'验证器验证'${browser.name}'验证结果为'${validator.validate(browser.ua)}'`);
        });
    });
}
//# sourceMappingURL=test.js.map
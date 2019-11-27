import {Browser, Validator, validators} from "./validator";


export function test() {
    const json = require('./test.json');
    const browsers: Array<Browser> = json.browsers;
    browsers.forEach((browser: Browser) => {
        console.log(`==============${browser.name}==============`);
        validators.forEach((validator: Validator) => {
            console.log(`使用'${validator.name}'验证器验证'${browser.name}'验证结果为'${validator.validate(browser.ua)}'`)
        })
    })
}

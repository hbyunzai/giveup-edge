import { BrowserType } from "./browser";
export interface Validator {
    name: BrowserType;
    partten: RegExp;
}
export declare const validators: Array<Validator>;

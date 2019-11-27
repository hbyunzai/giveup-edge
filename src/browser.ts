import "core-js/stable";
import "regenerator-runtime/runtime";
import {Validator, validators} from "./validator";


export function getBrowserType() {
}


export function getMetaRenderer(): Element {
    return document.head.children.namedItem("renderer");
}

export function main() {
    getBrowserType();
}

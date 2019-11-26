import {BrowserKernelType, getBrowserKernel} from "./kernel";

export const SPECIAL_BROWSERS: Array<string> = ['360ee']

export function main() {
    if (getMetaRender()) {
        switch (getBrowserKernel()) {
            case BrowserKernelType.APP_WEB_KIT:
            case BrowserKernelType.PRESTO:
            case BrowserKernelType.GECKO:
                break;
            case BrowserKernelType.TRIDENT:
                break;
        }
    }
}

export function getMetaRender() {
    return document.head.children.namedItem("renderer");
}

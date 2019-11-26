export var BrowserKernelType;
(function (BrowserKernelType) {
    BrowserKernelType["TRIDENT"] = "trident";
    BrowserKernelType["APP_WEB_KIT"] = "applewebkit";
    BrowserKernelType["PRESTO"] = "presto";
    BrowserKernelType["GECKO"] = "gecko";
})(BrowserKernelType || (BrowserKernelType = {}));
export function getBrowserKernel() {
    const agent = navigator.userAgent.toLowerCase();
    return filterAgent(agent);
}
export function filterAgent(agent) {
    if (agent.includes(BrowserKernelType.TRIDENT)) {
        return BrowserKernelType.TRIDENT;
    }
    if (agent.includes(BrowserKernelType.APP_WEB_KIT)) {
        return BrowserKernelType.APP_WEB_KIT;
    }
    if (agent.includes(BrowserKernelType.PRESTO)) {
        return BrowserKernelType.PRESTO;
    }
    if (agent.includes(BrowserKernelType.GECKO)) {
        return BrowserKernelType.GECKO;
    }
}
//# sourceMappingURL=kernel.js.map
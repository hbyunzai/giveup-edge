export declare enum BrowserKernelType {
    TRIDENT = "trident",
    APP_WEB_KIT = "applewebkit",
    PRESTO = "presto",
    GECKO = "gecko"
}
export declare function getBrowserKernel(): BrowserKernelType;
export declare function filterAgent(agent: string): BrowserKernelType;

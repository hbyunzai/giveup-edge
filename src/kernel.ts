export enum BrowserKernelType {
    TRIDENT = 'trident',
    APP_WEB_KIT = 'applewebkit',
    PRESTO = 'presto',
    GECKO = 'gecko'
}

export function getBrowserKernel(): BrowserKernelType {
    const agent = navigator.userAgent.toLowerCase();
    console.log(agent);
    return filterAgent(agent);
}

export function filterAgent(agent: string) {
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


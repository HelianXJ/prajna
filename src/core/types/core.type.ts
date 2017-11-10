import Core from '../core';

export interface InitOption {
    pageId: string, // 当前页面 ID
    pageUrl: string, // 当前页面的 URL
    channel: string, // 当前页面进入的渠道
    env: string, // 当前上报环境
    autopv: boolean, // 是否自动打PV点
}

export interface Prajna {
    init: (opt: InitOption) => Core
    pageView?: (target: any, key: string, descriptor: any) => any
}

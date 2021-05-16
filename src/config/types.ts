export interface Contract {
  56: string
  97: string
}

export interface Token {
  name: string
  symbol: string
  url: string
  icon: string
  contract: Contract
  chain: Chain
}

export interface Farm {
  contract: string
  stakedToken: Token
  rewardToken: Token | 'default'
}

export enum Chain {
  BSC = 'BSC',
}

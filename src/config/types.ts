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
  description?: string[]
}

export interface Farm {
  contract: string
  stakedToken: Token
  rewardToken: Token | 'default'
}

export enum FarmTypes {
  Staked = 'staked',
  Fee = 'fee',
}

export interface FarmContract {
  contract: Contract
  type: FarmTypes
  rewardToken: Token
}

export enum Chain {
  BSC = 'BSC',
}

export interface SocialLink {
  link: string
}

export type SocialPlatforms = {
  [key: string]: SocialLink
}

export interface NavLink {
  url: string
  label: string
  title: string
}

export interface SiteInfo {
  title: string
  description: string
  socialLinks: SocialPlatforms
  navLinks: NavLink[]
}

import { Farm, Chain } from '../types'
const stakedFarms: Farm[] = [
  {
    contract: '0xbAAC754494CC9dE3B1CC43543118ddB6c4b4AaAf',
    stakedToken: {
      name: 'Monster Slayer Shares',
      icon: '',
      symbol: 'MSS',
      contract: {
        56: '',
        97: '0x7c15EBCbF6838C46b851A5CFD155C25bEfAF5657',
      },
      url: '/',
      chain: Chain.BSC,
    },
    rewardToken: 'default',
  },
  {
    contract: '',
    stakedToken: {
      name: 'Monster Slayer Cash',
      icon: '',
      symbol: 'MSC',
      contract: {
        56: '',
        97: '',
      },
      url: '/',
      chain: Chain.BSC,
    },
    rewardToken: 'default',
  },
]

export default stakedFarms

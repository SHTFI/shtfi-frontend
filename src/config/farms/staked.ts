import { Farm, Chain } from '../types'
const farms: Farm[] = [
  {
    contract: '0x6a02e48EA47F14010FBBe613F42a7f5784703f78',
    stakedToken: {
      name: 'Monster Slayer Shares',
      icon: '',
      symbol: 'MSS',
      contract: {
        56: '',
        97: '0x42942d731496287496274fe3b727dc0cdba9aa25',
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

export default farms

import { Farm, Chain } from '../types'
const stakedFarms: Farm[] = [
  {
    contract: '0xbAAC754494CC9dE3B1CC43543118ddB6c4b4AaAf',
    stakedToken: {
      name: 'Mock Token',
      icon: '/images/token-icons/mock.svg',
      description: [
        'Mock Token was a token which was rug pulled on 12/2/2021',
        'At the point of rug it had a total market-cap of ~$12m and an all time high of ~$3 USD',
      ],
      symbol: 'MOCK',
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
    contract: '0xbAAC754494CC9dE3B1CC43543118ddB6c4b4AaAf',
    stakedToken: {
      name: 'Monster Slayer Shares',
      icon: '',
      symbol: 'MSS',
      contract: {
        56: '',
        97: '',
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

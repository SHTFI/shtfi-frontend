import { FarmTypes, FarmContract } from '../types'
import { tokens } from './tokens'

export const farms: FarmContract[] = [
  {
    type: FarmTypes.Staked,
    contract: {
      56: '',
      97: '0xbAAC754494CC9dE3B1CC43543118ddB6c4b4AaAf',
    },
    rewardToken: tokens[0],
  },
]

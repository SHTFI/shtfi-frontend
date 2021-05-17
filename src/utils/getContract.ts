import { httpWeb3 } from './'
import { AbiItem } from 'web3-utils'

export const getContract = (abi: any, address: string, web3?: any) => {
  const _web3 = web3 ?? httpWeb3
  return new _web3.eth.Contract(abi as unknown as AbiItem, address)
}

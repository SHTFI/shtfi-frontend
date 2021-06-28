import { Contract, ContractInterface } from '@ethersproject/contracts'

export const getContract = (abi: any, address: string, web3?: any) => {
  return new Contract(address, abi as unknown as ContractInterface)
}

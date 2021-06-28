export interface NodeList {
  97: string[]
}

export const getNodeUrls = (): NodeList => {
  const BSC_NODES = JSON.parse(process.env.REACT_APP_NODES_BSC as string)
  return { ...BSC_NODES }
}

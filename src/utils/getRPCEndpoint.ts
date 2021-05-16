export const getNodeUrls = (): string[] => {
  const NODE_1 = process.env.REACT_APP_NODE_1
  const NODE_2 = process.env.REACT_APP_NODE_2
  const NODE_3 = process.env.REACT_APP_NODE_3
  const output = []
  if (NODE_1) output.push(NODE_1)
  if (NODE_2) output.push(NODE_2)
  if (NODE_3) output.push(NODE_3)
  return output
}

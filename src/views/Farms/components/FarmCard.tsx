import React from 'react'
import { Farm } from '../../../config/types'

const FarmCard: React.FC<{ farm: Farm }> = ({ farm }) => {
  return (
    <div>
      {' '}
      <img
        src={`/images/token-icons/${farm.stakedToken.symbol.toLocaleLowerCase()}.svg`}
        alt={`Logo for ${farm.stakedToken.name}`}
        width="50"
        height="50"
      />
      {farm.stakedToken.name}
    </div>
  )
}

export default FarmCard

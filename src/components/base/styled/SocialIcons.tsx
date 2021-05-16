import React from 'react'
import SocialIcon from '../raw/SocialIcon'
import styled from 'styled-components'
import { siteInfo } from '../../../config'

const SocialIcons: React.FC = () => {
  const iconKeys = Object.keys(siteInfo.socialLinks)
  return (
    <StyledSocialIcons>
      {iconKeys.map((key) => (
        <a href={siteInfo.socialLinks[key].link} title={`Go to our ${key}`}>
          <SocialIcon icon={key} />
        </a>
      ))}
    </StyledSocialIcons>
  )
}

const StyledSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;

  a {
    color: ${(props) => props.theme.colorPallette.white};
    margin: 2px;
  }
`

export default SocialIcons

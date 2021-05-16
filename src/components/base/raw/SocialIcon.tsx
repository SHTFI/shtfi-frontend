import React from 'react'
import { FaTwitter, FaTelegram, FaNewspaper } from 'react-icons/fa'

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'twitter':
      return <FaTwitter />
    case 'telegram':
      return <FaTelegram />
    case 'blog':
      return <FaNewspaper />
    default:
      return null
  }
}

export default SocialIcon

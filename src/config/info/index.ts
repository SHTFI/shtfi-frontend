interface SocialLink {
  link: string
}

type SocialPlatforms = {
  [key: string]: SocialLink
}

interface NavLink {
  url: string
  label: string
  title: string
}

interface SiteInfo {
  title: string
  description: string
  socialLinks: SocialPlatforms
  navLinks: NavLink[]
}

const siteInfo: SiteInfo = {
  title: 'Shit Defi',
  description: 'Shit defi is the best',
  socialLinks: {
    twitter: {
      link: 'https://twitter.com/shitdefi',
    },
    telegram: {
      link: 'https://twitter.com/shitdefi',
    },
    blog: {
      link: 'https://twitter.com/shitdefi',
    },
  },
  navLinks: [
    {
      url: '/',
      label: 'Home',
      title: 'Go back to the homepage',
    },
    {
      url: '/farms',
      label: 'Farms',
      title: 'Go to the farms page',
    },
    {
      url: '/about',
      label: 'About',
      title: 'Go to about us page',
    },
    {
      url: '/contact',
      label: 'Contact',
      title: 'Go to contact us page',
    },
  ],
}

export default siteInfo

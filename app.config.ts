export default defineAppConfig({
  long_title: 'Inland Empire Democratic Socialists of America',
  medium_title: 'Inland Empire Democratic Socialists',
  short_title: 'Inland Empire DSA',
  events_feed: 'https://marvinroman.github.io/action-network-fetch/events.json',
  socials: [
    {
      link: 'https://www.facebook.com/InlandEmpireDSA',
      icon: 'mdi-facebook',
    },
    { link: 'https://twitter.com/InlandEmpireDSA', icon: 'mdi-twitter' },
    {
      link: 'https://www.instagram.com/InlandEmpireDSA',
      icon: 'mdi-instagram',
    },
    { link: 'https://twitch.tv/inlandempiredsa', icon: 'mdi-twitch' },
    { link: 'mailto:inlanddsa@gmail.com', icon: 'mdi-email-outline' },
  ],
  menu: [
    {
      name: 'Home',
      icon: 'mdi-home',
      path: '/',
    },
    {
      name: 'Branches',
      icon: 'mdi-map-marker-radius-outline',
      path: '/branches',
    },
    {
      name: 'Donate',
      icon: 'mdi-gift-outline',
      path: '/donate',
    },
    {
      name: 'News',
      icon: 'mdi-newspaper-variant-multiple-outline',
      items: [
        {
          name: 'Articles',
          icon: 'mdi-newspaper-variant-outline',
          path: '/articles',
        },
        {
          name: 'Statements',
          icon: 'mdi-bullhorn-variant-outline',
          path: '/statements',
        },
      ],
    },
    {
      name: 'Calendar',
      icon: 'mdi-calendar-month-outline',
      href: 'https://calendar.iedsa.org',
    },
    {
      name: 'Join',
      icon: 'mdi-handshake-outline',
      href: 'https://act.dsausa.org/donate/membership',
    },
  ],
})

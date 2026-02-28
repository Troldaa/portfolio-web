export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      posts: 'Posts',
      contact: 'Contact',
    },
    sidebar: {
      title: 'Minecraft Enthusiast & Creator',
      exp: 'Years of Experience',
      expUnit: 'years',
      promoted: 'Servers Promoted',
      visitors: 'Total Visitors',
      socials: 'Social Links',
      hire: 'Hire Me / Contact',
    },
    hero: {
      redPill: 'Do you want to have a quality context for your project? 🔥',
      bluePill: 'Or do you want to continue posting shit and procrastinating? 💊',
      nametag: 'MiniOmega_69',
      welcome: 'Welcome to my world! Let\'s build something epic! 🌍✨',
    },
    sections: {
      story: {
        title: 'My Story',
        content: 'Started as casual player. Ave grown into a possionate content creator. I love making shorts videos, and more complex ones.',
      },
      goals: {
        title: 'My Goals',
        content: 'My goal is to master editing, and start my own editing agency.',
      },
      posts: {
        title: 'Recent Posts',
        subtitle: 'Stay updated with my latest creations',
        viewAll: 'View All',
        watchFull: 'Watch Full',
        visit: 'Visit site',
        watch: 'Watch',
        clicks: 'Clicks',
        items: [
          {
            title: 'Hexado Hosting Promo',
            description: 'Promo for hosting, good czech hosting for FiveM, Minecraft, Discord bots and more.',
            link: 'https://www.hexado.pro/',
            date: 'Latest',
          },
          {
            title: 'Europe Minecraft SMP',
            description: 'Promo for europe minecraft SMP server. Join the community!',
            date: 'Recently',
          },
          {
            title: 'Survival Server (RIP)',
            description: 'Promo for czech survival server, the server is dead now xD',
            date: 'Archive',
          },
        ]
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Interested in working together? Reach out on any of my socials!',
      discord: 'Discord',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      youtube: 'YouTube',
      copy: 'Copy Username',
      copied: 'Copied!',
    },
  },
  cz: {
    nav: {
      home: 'Domů',
      about: 'O mně',
      posts: 'Příspěvky',
      contact: 'Kontakt',
    },
    sidebar: {
      title: 'Minecraft nadšenec a tvůrce',
      exp: 'Roky zkušeností',
      expUnit: 'let',
      promoted: 'Propagované servery',
      visitors: 'Celkem návštěvníků',
      socials: 'Sociální sítě',
      hire: 'Najmi mě / Kontakt',
    },
    hero: {
      redPill: 'Chceš mít kvalitní kontext pro svůj projekt? 🔥',
      bluePill: 'Nebo chceš pokračovat v postování hoven a prokrastinaci? 💊',
      nametag: 'MiniOmega_69',
      welcome: 'Vítej v mém světě! Pojďme postavit něco epického! 🌍✨',
    },
    sections: {
      story: {
        title: 'Můj Příběh',
        content: 'Začal jsem jako rekreační hráč. Postupně jsem vyrostl v zapáleného tvůrce obsahu. Rád tvořím krátká videa (shorts) i složitější projekty.',
      },
      goals: {
        title: 'Moje Cíle',
        content: 'Mým cílem je ovládnout střih videa a založit vlastní editační agenturu.',
      },
      posts: {
        title: 'Nedávné Příspěvky',
        subtitle: 'Sleduj mou nejnovější tvorbu',
        viewAll: 'Zobrazit vše',
        watchFull: 'Přehrát celé',
        visit: 'Navštívit web',
        watch: 'Přehrát',
        clicks: 'Kliknutí',
        items: [
          {
            title: 'Hexado Hosting Promo',
            description: 'Promo pro hosting, kvalitní český hosting pro FiveM, Minecraft, Discord boty a další.',
            link: 'https://www.hexado.pro/',
            date: 'Nejnovější',
          },
          {
            title: 'Europe Minecraft SMP',
            description: 'Promo pro evropský Minecraft SMP server. Připoj se ke komunitě!',
            date: 'Nedávno',
          },
          {
            title: 'Survival Server (RIP)',
            description: 'Promo pro český survival server, server je teď bohužel mrtvý xD',
            date: 'Archiv',
          },
        ]
      },
    },
    contact: {
      title: 'Kontaktujte mě',
      subtitle: 'Máte zájem o spolupráci? Ozvěte se mi na sociálních sítích!',
      discord: 'Discord',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      youtube: 'YouTube',
      copy: 'Kopírovat jméno',
      copied: 'Zkopírováno!',
    },
  },
};

export type Language = 'en' | 'cz';
export type TranslationKeys = typeof translations.en;

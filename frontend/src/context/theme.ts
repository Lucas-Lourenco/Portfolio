import IconSun from '/images/icon-sun.svg'
import IconMoon from '/images/icon-moon.svg'

export const ThemesConfig = {
  light: {
    name: 'light',
    layout: {
        heroClass: 'theme-light',
        background: '#ede6bc',
        textColor: '#212226',
        border:'#212226',
    },
    icon: IconMoon,
  },
  dark: {
    name: 'dark',
    layout: {
        heroClass: 'theme-dark',
        background:'#212226',
        textColor: ' #ede6bc',
        border: '#ede6bc',
    },
    icon: IconSun,
  },
}
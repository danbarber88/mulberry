import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.headerFontFamily = ['Roboto Condensed', 'sans-serif']
githubTheme.bodyFontFamily = ['Roboto Condensed', 'sans-serif']
githubTheme.googleFonts = [
  {
    name: 'Roboto Condensed',
    styles: ['200', '400', '700'],
  },
]

const typography = new Typography(githubTheme)

export default typography

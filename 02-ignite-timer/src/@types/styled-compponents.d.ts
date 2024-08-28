import 'styled-components'
import { defaulTheme } from '../styles/themes/default'

type ThemeType = typeof defaulTheme ;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
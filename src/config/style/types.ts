interface ColorScheme {
  [key: string]: string
}

export interface Theme {
  light: ColorScheme
  dark: ColorScheme
}

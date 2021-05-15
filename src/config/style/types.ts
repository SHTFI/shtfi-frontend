interface ColorScheme {
  [key: string]: {
    [key: string]: string
  }
}

export interface Theme {
  light: ColorScheme
  dark: ColorScheme
}

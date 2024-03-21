const Colors: Record<ColorThemeName, ThemeColors> = {
  light: {
    white: "#FFFFFF",
    headerColor: "#6E6553",
    appColor: "#254A56",
    nameColor: "#608C96",
    background: '#F1E8D6',
    desColor: "#6E6553",
    authTitleColor: "#254A56",
    inputColor: "#858585",
    iconColor: "#628C92",
    forgotColor: "#254A56",
    loginButtonColor: "#FCF7EE",
    colorBorder: "#E1D7C2",
    orColor: "#7D735E",
    loginColor: "#254A56",
    dontHaveColor: "#7D735E",
    pinColor: "#6E6553",
    listColor: "#E3DBCB",
    listBorder: '#BDB29D',
    infoColor: "#628C92",
    termsColor: "#6E6553",
    green: "#34A853",
    playColor: "#254A56",
    arrowColor: "#6E6553",
    dayColor: "#7E7563",
    monthColor: "#254A56",
    textDisabled: '#D3D3D3',
    disabledArrowColor: '#D3D3D3',
    indicatorColor: '#254A56',
    calenderBackground: "#E3DBCB",
    accent: "#608C96",
  },
  dark: {
    white: "#FFFFFF",
    headerColor: "#6E6553",
    appColor: "#254A56",
    nameColor: "#608C96",
    background: '#312D24',
    desColor: "#E1D7C2",
    authTitleColor: "#FFFFFF",
    inputColor: "#858585",
    iconColor: "#628C92",
    forgotColor: "#BDB29D",
    loginButtonColor: "#FCF7EE",
    colorBorder: "#6E6553",
    orColor: "#FFFFFF",
    loginColor: "#BDB29D",
    dontHaveColor: "#7D735E",
    pinColor: "#BDB29D",
    listColor: "#312D24",
    listBorder: '#5F5848',
    infoColor: "#BDB29D",
    termsColor: "#7E7563",
    green: "#34A853",
    playColor: "#628C92",
    arrowColor: "#BDB29D",
    dayColor: "#BDB29D",
    monthColor: "#FFFFFF",
    textDisabled: '#A9A9A9', 
    disabledArrowColor: '#A9A9A9',
    indicatorColor: '#608C96',
    calenderBackground: "#6E6553",
    accent: "#34A853",
  },
};

export default Colors;

export type ThemeColors = {
  text: string | undefined;
  disabledText: string;
  disabledArrowColor: string;
  indicatorColor: string;
  white: string;
  headerColor: string;
  appColor: string;
  nameColor: string;
  background: string;
  desColor: string;
  authTitleColor: string;
  inputColor: string;
  iconColor: string;
  forgotColor: string;
  loginButtonColor: string;
  colorBorder: string;
  orColor: string;
  loginColor: string;
  dontHaveColor: string;
  pinColor: string;
  listColor: string;
  listBorder: string;
  infoColor: string;
  termsColor: string;
  green: string;
  playColor: string;
  arrowColor: string;
  dayColor: string;
  monthColor: string;
  calenderBackground: string;
  textDisabled: string;
  accent: string;
};

export type ColorThemeName = 'light' | 'dark';
enum TextElements {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  pre = "pre",
  small = "small",
  span = "span",
  caption = "caption",
}

export enum TextWeights {
  thin = "font-thin",
  extralight = "font-extralight",
  light = "font-light",
  normal = "font-normal",
  medium = "font-medium",
  semibold = "font-semibold",
  bold = "font-bold",
  extrabold = "font-extrabold",
  black = "font-black",
}

export enum TextColors {
  primary100 = "text-teal-200",
  primary200 = "text-teal-400",
  primary300 = "text-teal-600",
  primary400 = "text-teal-800",
  primary500 = "text-teal-950",

  secondary100 = "text-fuchsia-200",
  secondary200 = "text-fuchsia-400",
  secondary300 = "text-fuchsia-600",
  secondary400 = "text-fuchsia-800",
  secondary500 = "text-fuchsia-950",

  tertiary100 = "text-yellow-200",
  tertiary200 = "text-yellow-400",
  tertiary300 = "text-yellow-600",
  tertiary400 = "text-yellow-800",
  tertiary500 = "text-yellow-950",

  quaternary100 = "text-blue-200",
  quaternary200 = "text-blue-400",
  quaternary300 = "text-blue-600",
  quaternary400 = "text-blue-800",
  quaternary500 = "text-blue-950",

  quinary100 = "text-orange-200",
  quinary200 = "text-orange-400",
  quinary300 = "text-orange-600",
  quinary400 = "text-orange-800",
  quinary500 = "text-orange-950",

  grayscale100 = "text-slate-100",
  grayscale200 = "text-slate-200",
  grayscale300 = "text-slate-300",
  grayscale400 = "text-slate-400",
  grayscale500 = "text-slate-500",
  grayscale600 = "text-slate-600",
  grayscale700 = "text-slate-700",
  grayscale800 = "text-slate-800",
  grayscale900 = "text-slate-900",
  grayscale950 = "text-slate-950",

  success100 = "text-green-200",
  success200 = "text-green-400",
  success300 = "text-green-600",
  success400 = "text-green-800",
  success500 = "text-green-950",

  failure100 = "text-red-200",
  failure200 = "text-red-400",
  failure300 = "text-red-600",
  failure400 = "text-red-800",
  failure500 = "text-red-950",

  warning100 = "text-amber-200",
  warning200 = "text-amber-400",
  warning300 = "text-amber-600",
  warning400 = "text-amber-800",
  warning500 = "text-amber-950",

  darkColor = "text-slate-950",
  lightColor = "text-slate-50",
}

export enum TextAligns {
  left = "text-left",
  center = "text-center",
  right = "text-right",
  justify = "text-justify",
  start = "text-start",
  end = "text-end",
}

export enum TextTansforms {
  capitalize = "capitalize",
  lowercase = "lowercase",
  uppercase = "uppercase",
  "normal-case" = "",
}

export enum TextDecorations {
  overline = "overline",
  "line-through" = "line-through",
  underline = "underline",
  "no-underline" = "",
}

export enum TextSizes {
  "xs" = "text-xs",
  "sm" = "text-sm",
  "base" = "text-base",
  "lg" = "text-lg",
  "xl" = "text-xl",
  "2xl" = "text-2xl",
  "3xl" = "text-3xl",
  "4xl	" = "text-4xl",
  "5xl" = "text-5xl",
  "6xl" = "text-6xl",
  "7xl" = "text-7xl",
  "8xl	" = "text-8xl",
  "9xl" = "text-9xl",
}

export interface TextProps {
  children: React.ReactNode;
  element?: keyof typeof TextElements;
  className?: string;
  weight?: keyof typeof TextWeights;
  color?: keyof typeof TextColors;
  align?: keyof typeof TextAligns;
  italic?: boolean;
  transform?: keyof typeof TextTansforms;
  decoration?: keyof typeof TextDecorations;
  size?: keyof typeof TextSizes;
}

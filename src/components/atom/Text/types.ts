import { Colors } from "@/types/globals";

enum TextElements {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  pre = 'pre',
  small = 'small',
  span = 'span',
  caption = 'caption',
}

export enum TextWeights {
  thin = 'font-thin',
  extralight = 'font-extralight',
  light = 'font-light',
  normal = 'font-normal',
  medium = 'font-medium',
  semibold = 'font-semibold',
  bold = 'font-bold',
  extrabold = 'font-extrabold',
  black = 'font-black',
}

export enum TextAligns {
  left = 'text-left',
  center = 'text-center',
  right = 'text-right',
  justify = 'text-justify',
  start = 'text-start',
  end = 'text-end',
}

export enum TextTansforms {
  capitalize = 'capitalize',
  lowercase = 'lowercase',
  uppercase = 'uppercase',
  'normal-case' = '',
}

export enum TextDecorations {
  overline = 'overline',
  'line-through' = 'line-through',
  underline = 'underline',
  'no-underline' = '',
}

export enum TextSizes {
  'xs' = 'text-xs',
  'sm' = 'text-sm',
  'base' = 'text-base',
  'lg' = 'text-lg',
  'xl' = 'text-xl',
  '2xl' = 'text-2xl',
  '3xl' = 'text-3xl',
  '4xl	' = 'text-4xl',
  '5xl' = 'text-5xl',
  '6xl' = 'text-6xl',
  '7xl' = 'text-7xl',
  '8xl	' = 'text-8xl',
  '9xl' = 'text-9xl',
}

export interface TextProps {
  children: React.ReactNode;
  element?: keyof typeof TextElements;
  className?: string;
  weight?: keyof typeof TextWeights;
  color?: keyof typeof Colors;
  align?: keyof typeof TextAligns;
  italic?: boolean;
  transform?: keyof typeof TextTansforms;
  decoration?: keyof typeof TextDecorations;
  size?: keyof typeof TextSizes;
}

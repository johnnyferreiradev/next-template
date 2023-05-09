import {
  TextProps,
  TextWeights,
  TextSizes,
  TextAligns,
  TextDecorations,
  TextTansforms,
  TextColors,
} from "./types";

function TextElement(props: TextProps) {
  const { element } = props;

  if (element === "h1") return <h1 {...props}></h1>;
  if (element === "h2") return <h2 {...props}></h2>;
  if (element === "h3") return <h3 {...props}></h3>;
  if (element === "h4") return <h4 {...props}></h4>;
  if (element === "h5") return <h5 {...props}></h5>;
  if (element === "h6") return <h6 {...props}></h6>;

  if (element === "p") return <p {...props}></p>;
  if (element === "pre") return <pre {...props}></pre>;
  if (element === "small") return <small {...props}></small>;
  if (element === "span") return <span {...props}></span>;
  if (element === "caption") return <caption {...props}></caption>;

  return <p {...props}></p>;
}

export default function Text({
  children,
  element,
  className = "",
  weight = "normal",
  color = "darkColor",
  align = "start",
  decoration = "no-underline",
  italic = false,
  transform = "normal-case",
  size = "base",
}: TextProps) {
  let customClassName = "text";

  customClassName += ` ${TextSizes[size]}`;
  customClassName += ` ${TextWeights[weight]}`;
  customClassName += ` ${TextAligns[align]}`;
  customClassName += ` ${TextColors[color]}`;
  customClassName += ` ${TextDecorations[decoration]}`.trim();
  customClassName += ` ${TextTansforms[transform]}`.trim();
  customClassName += ` ${italic ? "italic" : "not-italic"}`;
  customClassName += ` ${className || ""}`;

  return (
    <TextElement className={customClassName} element={element}>
      {children}
    </TextElement>
  );
}

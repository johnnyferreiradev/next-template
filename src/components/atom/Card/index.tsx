import {
  CardProps,
  CardColors,
  CardBorderColors,
  CardBoxShadows,
} from "./types";

export default function Card({
  className = "",
  color = "grayscale100",
  withBorder = false,
  borderColor = "grayscale200",
  boxShadow = "shadow-none",
  children,
}: CardProps) {
  let customClassName = "card";

  customClassName += ` ${CardColors[color]}`;
  customClassName += withBorder ? ` ${CardBorderColors[borderColor]}` : "";
  customClassName += ` ${CardBoxShadows[boxShadow]}`;
  customClassName += ` ${className}`;

  return <div className={customClassName.trim()}>{children}</div>;
}

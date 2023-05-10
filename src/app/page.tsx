import Text from "@/components/atom/Text";
import Card from "@/components/atom/Card";

import { TextColors } from "@/components/atom/Text/types";

export default function Home() {
  const colorValueArray = Object.keys(TextColors);

  return (
    <main>
      <Card className="p-2">Opa</Card>

      <Text size="2xl" element="h1" weight="bold">
        Hello World
      </Text>
      <Text
        size="2xl"
        element="h1"
        weight="bold"
        align="end"
        decoration="underline"
        transform="uppercase"
      >
        Hello World
      </Text>
      <Text>Colors</Text>

      {colorValueArray.map((color, index) => (
        <Text
          color={color as keyof typeof TextColors}
          size="2xl"
          weight="bold"
          key={index}
        >
          aA
        </Text>
      ))}
    </main>
  );
}

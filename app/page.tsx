import { Button, Flex, Text } from "@radix-ui/themes";
import { ThemeSwitch } from "@/components";

export default function Home() {
  return (
    <Flex direction="row" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let&apos;s go</Button>
      <ThemeSwitch />
    </Flex>
  );
}

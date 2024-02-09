import { config } from "./config/gluestack-ui.config";
import {
  Button,
  ButtonText,
  GluestackUIProvider,
  Text,
  Theme,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";

export default function App() {
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");
  const toggleColorMode = () => {
    setColorMode((mode) => {
      if (mode === "light") return "dark";
      else return "light";
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
        <Button onPress={toggleColorMode} p="$3" mx="auto" mt="$16">
          <ButtonText>{colorMode}</ButtonText>
        </Button>

        <Theme name={colorMode}>
          <Text mt="$16" color="$red900" fontWeight="$bold">
            hello world
          </Text>
        </Theme>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
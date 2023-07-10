import { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import * as NavigationBar from "expo-navigation-bar";

const image = {
  uri: "https://media.istockphoto.com/id/924418708/photo/wood-table-top-on-blurred-of-counter-cafe-shop-with-light-bulb-background-for-montage-product.webp?b=1&s=170667a&w=0&k=20&c=X79o5i7-tLc5xTfYDihW1C4pkHeEVyRRcvj5UooSUZQ=",
};
import { Tabs } from "./Tabs";

import { globalStyleVariables } from "@/style";

export default function Main(): React.ReactElement {
  const { goldColor } = globalStyleVariables;

  useEffect(() => {
    (async () => {
      await NavigationBar.setBackgroundColorAsync(goldColor);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={goldColor}
        barStyle={"light-content"}
        showHideTransition={"slide"}
        hidden={false}
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Tabs />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

import { ImageBackground, StyleSheet, View } from "react-native";
const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
import { Tabs } from "./Tabs";

export default function Main(): React.ReactElement {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Tabs />
      </ImageBackground>
    </View>
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

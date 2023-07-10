import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { globalStyleVariables } from "@/style";

import { Products } from "./Products";
import { AddProduct } from "./AddProduct";

const Tab = createBottomTabNavigator();
const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "none",
  },
};

const screens = [
  { name: "Products", component: Products },
  { name: "Add product", component: AddProduct },
];

export const Tabs = (): JSX.Element => {
  const { goldColor, whiteColor } = globalStyleVariables;

  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
          tabBarStyle: {
            minHeight: 80,
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: "transparent",
            borderTopColor: whiteColor,
            borderTopWidth: 1,
            elevation: 0,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";

            switch (route.name) {
              case "Products":
                iconName = focused ? "ios-list" : "ios-list-outline";
                break;
              case "Add product":
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
                break;
              default:
                iconName = "";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: goldColor,
          tabBarInactiveTintColor: whiteColor,
        })}
      >
        {screens.map(({ name, component }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              headerStyle: {
                backgroundColor: "transparent",
                borderBottomColor: goldColor,
                borderBottomWidth: 1,
                elevation: 0,
              },
              headerTintColor: whiteColor,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

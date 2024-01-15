// App.js
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import YourComponent from "YourComponent";
import { initDatabase } from "database";
import { configureNotifications } from "pushNotifications";
import { AppRegistry } from "react-native";
import App from "App.js"; // or the path to your main component
import { name as appName } from "app.json";
export default App;

AppRegistry.registerComponent(appName, () => App);

const Stack = createStackNavigator();

useEffect(() => {
  initDatabase(); // Initialize SQLite database
  configureNotifications(); // Configure push notifications
}, []);
App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="YourComponent">
        <Stack.Screen name="YourComponent" component={YourComponent} />
        {/* Add more screens as needed*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTag from './src/screens/NavigationTag';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mechanism from './src/screens/Report/Mechanism';
import TrainReport from './src/screens/Report/TrainReport';
import { useEffect } from 'react';
export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);
  return (
      <NavigationContainer >
        <StatusBar
          animated={true}
          backgroundColor="red"
        />
        <Stack.Navigator >
          <Stack.Screen name="Home" component={NavigationTag} options={{ headerShown: false }} />
          <Stack.Screen name="Cơ chế" component={Mechanism} />
          <Stack.Screen name="Đào tạo" component={TrainReport} />
        </Stack.Navigator>
      </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

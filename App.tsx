/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';
import New from './src/New';

function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-xl font-bold">
        Hello Tailwind in React Native!
      </Text>
      <New />
    </SafeAreaView>
  );
}

export default App;

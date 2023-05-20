import { StatusBar, View, SafeAreaView } from 'react-native';
import Basket from './src/screens/Basket';
import mock from './src/mocks/basket';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loadedFont] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  });
  
  if (!loadedFont) {
    return <AppLoading />
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Basket {...mock}/>
      <StatusBar />
    </SafeAreaView>
  );
}
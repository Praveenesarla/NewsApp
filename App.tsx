import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TabNavigation from './src/TabNavigation';
import SearchScreen from './src/screens/SearchScreen';
import NewsListing from './src/screens/NewsListing';
import ArticlesDetails from './src/components/ArticlesDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    getUser();
  });
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const getUser = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem('Auth'));
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Tab" component={TabNavigation} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="NewsList" component={NewsListing} />
          <Stack.Screen name="Detail" component={ArticlesDetails} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;

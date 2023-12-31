// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './src/stacks/HomeScreen'; // Update the path
import SearchStack from './src/stacks/Searchpage'; // Update the path
import BottomNavigation from './src/components/bottom-nav/Bottomnav'; // Update the path

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeStack />
      <SearchStack />
      <BottomNavigation navigateTo={(screen) => console.log(`Navigating to ${screen}`)} />
    </NavigationContainer>
  );
};

export default App;

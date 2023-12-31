import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/stacks/HomeScreen';
import SearchStack from './src/stacks/Searchpage';
import BottomNavigation from './src/components/bottom-nav/Bottomnav';
import { useWalletConnectModal } from '@walletconnect/modal-react-native';

const App: React.FC = () => {
  const { isConnected } = useWalletConnectModal();
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    setIsUserConnected(isConnected);
  }, [isConnected]);

  const showSearch = () => {
    setIsSearchVisible(true);
  };

  const hideSearch = () => {
    setIsSearchVisible(false);
  };

  return (
    <NavigationContainer>
      <HomeStack />
      {isSearchVisible && <SearchStack />}
      {isUserConnected && <BottomNavigation navigateTo={(screen) => console.log(`Navigating to ${screen}`)} />}
    </NavigationContainer>
  );
};

export default App;

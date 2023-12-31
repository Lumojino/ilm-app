// HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { WalletConnectModal, useWalletConnectModal } from '@walletconnect/modal-react-native';
import * as Animatable from 'react-native-animatable';
import loadingGif from '../../assets/ILM_Loader_gif.gif';
import Header from '../components/header/Header';
import BottomNavigation from '../components/bottom-nav/Bottomnav';


const abbreviateAddress = (address: string | undefined, length = 6) => {
    if (address) {
      return `${address.substring(0, length)}...`;
    }
    return 'Unknown';
  };
  
  const navigateTo = (screen: string) => {
    console.log(`Navigating to ${screen}`);
  };
  

const HomeScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { open, isConnected, provider, address } = useWalletConnectModal();

  const projectId = '6e8be56751cb03754ddaae17dc5ee373';

  const providerMetadata = {
    name: 'YOUR_PROJECT_NAME',
    description: 'YOUR_PROJECT_DESCRIPTION',
    url: 'https://your-project-website.com/',
    icons: ['https://your-project-logo.com/'],
    redirect: {
      native: 'YOUR_APP_SCHEME://',
      universal: 'YOUR_APP_UNIVERSAL_LINK.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const onPress = () => {
    if (isConnected && provider) {
      provider.disconnect();
    } else {
      open();
    }
  };

  const buttonText = isConnected ? abbreviateAddress(address) : 'CONNECT';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {isLoading ? (
        <Image source={loadingGif} style={styles.gif} />
      ) : (
        <>
          <Header isConnected={isConnected} />
          <Animatable.Text
            animation={{
              from: { translateY: -500 },
              to: { translateY: -250 },
            }}
            duration={1000}
            style={styles.text}
          >
            ENTER A NEW AGE OF WEB3 {'\n'} DONATIONS & ADVERTISING
          </Animatable.Text>

          <View style={styles.connectedAddressContainer}>
            <Text style={styles.connectedAddressText}>{`CONNECTED ADDRESS: `}</Text>
            <Pressable onPress={onPress} style={styles.walletConnectButton}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
          </View>

          <WalletConnectModal projectId={projectId} providerMetadata={providerMetadata} />
          {isConnected && <BottomNavigation navigateTo={navigateTo} />}
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 20,
  },
  gif: {
    width: 200,
    height: 200,
  },
  walletConnectButton: {
    zIndex: 1,
    marginTop: 21,
    padding: 6,
    backgroundColor: 'rgba(98, 0, 232, 0.2)',
    borderRadiusBottom: 5,
    borderWidth: 2,
    borderColor: '#6200E8',
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
  connectedAddressContainer: {
    flexDirection: 'row',
    marginTop: -250,
  },
  connectedAddressText: {
    marginTop: 30,
    marginRight: 10,
    color: 'white',
  },
});

export default HomeScreen;

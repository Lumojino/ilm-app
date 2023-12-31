import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import logoImage from '../../../assets/White.png';

interface HeaderProps {
  isConnected: boolean;
}

export default function Header({ isConnected }: HeaderProps) {
  const [isSearchPageVisible, setIsSearchPageVisible] = useState(false);

  const handleSearchIconPress = () => {
    setIsSearchPageVisible(true);
  };

  const handleGoBack = () => {
    setIsSearchPageVisible(false);
  };

  const SearchPage: React.FC = () => (
    <View style={styles.searchPageContainer}>
      {/* Your search page content goes here */}
      <TouchableOpacity onPress={handleGoBack}>
        {/* Use your back arrow icon here */}
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.headerContainer}>
      {!isSearchPageVisible && (
        <Image source={logoImage} style={styles.logo} />
      )}

      {isConnected && !isSearchPageVisible && (
        <TouchableOpacity onPress={handleSearchIconPress}>
          <Icon name="search" size={20} color="white" style={styles.searchIcon} />
        </TouchableOpacity>
      )}

      {isSearchPageVisible && (
        <SearchPage />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'transparent',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 20,
    width: '100%',
  },
  logo: {
    marginLeft: 10,
    width: 30,
    height: 30,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchPageContainer: {
    flex: 1,
    backgroundColor: 'white', // Adjust the background color as needed
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

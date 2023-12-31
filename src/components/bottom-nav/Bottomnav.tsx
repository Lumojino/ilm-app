import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';



interface BottomNavigationProps {
  navigateTo: (screen: string) => void;
}

export default function BottomNavigation({ navigateTo }: BottomNavigationProps) {
  const translateY = useRef(new Animated.Value(50)).current; // Initial translateY set to hide the container

  useEffect(() => {
    // Animate the translateY property to bring the container from offscreen to the bottom
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <TouchableOpacity onPress={() => navigateTo('Home')} style={styles.tab}>
        <Text style={styles.tabText}>REVENUE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Ads')} style={styles.tab}>
        <Text style={styles.tabText}>EARN ILM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Revenue')} style={styles.tab}>
        <Text style={styles.tabText}>MANAGE ADS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('EarnILM')} style={styles.tab}>
        <Text style={styles.tabText}>YOU</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(98, 0, 232, 0.27)', // #6200E8 with 0.27 opacity
    height: 50, // Set the height according to your design
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
    fontSize: 10,
  },
});

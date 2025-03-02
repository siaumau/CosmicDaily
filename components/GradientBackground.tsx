import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export default function GradientBackground({ children }: GradientBackgroundProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#12102D', '#1E1B4B', '#2D2A6E']}
        style={styles.gradient}
      />
      <View style={styles.starsContainer}>
        {Array.from({ length: 50 }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.star,
              {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                opacity: Math.random() * 0.8 + 0.2,
              },
            ]}
          />
        ))}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  starsContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  star: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
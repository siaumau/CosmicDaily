import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

interface CompatibilityMeterProps {
  percentage: number;
  label: string;
}

export default function CompatibilityMeter({ percentage, label }: CompatibilityMeterProps) {
  const progress = useSharedValue(0);
  
  useEffect(() => {
    progress.value = withTiming(percentage / 100, {
      duration: 1500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [percentage]);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
    };
  });
  
  const getColor = () => {
    if (percentage >= 80) return ['#03DAC6', '#018786'];
    if (percentage >= 60) return ['#BB86FC', '#6200EE'];
    if (percentage >= 40) return ['#FFAB40', '#FF6D00'];
    return ['#CF6679', '#B00020'];
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.percentage}>{percentage}%</Text>
      </View>
      <View style={styles.meterContainer}>
        <Animated.View style={[styles.meterFill, animatedStyle]}>
          <LinearGradient
            colors={getColor()}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  percentage: {
    fontSize: 14,
    color: '#BB86FC',
    fontWeight: '600',
  },
  meterContainer: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  meterFill: {
    height: '100%',
    borderRadius: 4,
  },
  gradient: {
    flex: 1,
  },
});
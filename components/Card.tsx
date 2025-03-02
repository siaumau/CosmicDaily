import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  gradient?: boolean;
}

export default function Card({ 
  title, 
  children, 
  onPress, 
  style, 
  titleStyle,
  gradient = false 
}: CardProps) {
  const CardComponent = onPress ? TouchableOpacity : View;
  
  const content = (
    <>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {children}
    </>
  );
  
  if (gradient) {
    return (
      <CardComponent style={[styles.container, style]} onPress={onPress}>
        <LinearGradient
          colors={['rgba(187, 134, 252, 0.15)', 'rgba(98, 0, 238, 0.1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        />
        {content}
      </CardComponent>
    );
  }
  
  return (
    <CardComponent style={[styles.container, style]} onPress={onPress}>
      {content}
    </CardComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(187, 134, 252, 0.2)',
    overflow: 'hidden',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
});
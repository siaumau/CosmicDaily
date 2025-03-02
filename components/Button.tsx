import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  style,
  textStyle,
  icon,
}: ButtonProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return styles.outlineButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryText;
      case 'secondary':
        return styles.secondaryText;
      case 'outline':
        return styles.outlineText;
      default:
        return styles.primaryText;
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.smallButton;
      case 'medium':
        return styles.mediumButton;
      case 'large':
        return styles.largeButton;
      default:
        return styles.mediumButton;
    }
  };

  const getTextSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.smallText;
      case 'medium':
        return styles.mediumText;
      case 'large':
        return styles.largeText;
      default:
        return styles.mediumText;
    }
  };

  const isPrimary = variant === 'primary';

  const buttonContent = (
    <>
      {loading ? (
        <ActivityIndicator color={isPrimary ? '#fff' : '#BB86FC'} />
      ) : (
        <>
          {icon}
          <Text
            style={[
              styles.text,
              getTextStyle(),
              getTextSizeStyle(),
              icon && { marginLeft: 8 },
              textStyle,
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </>
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        getButtonStyle(),
        getSizeStyle(),
        disabled && styles.disabledButton,
        style,
      ]}
    >
      {isPrimary ? (
        <LinearGradient
          colors={disabled ? ['#666', '#444'] : ['#BB86FC', '#6200EE']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          {buttonContent}
        </LinearGradient>
      ) : (
        buttonContent
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: 'transparent',
  },
  secondaryButton: {
    backgroundColor: 'rgba(187, 134, 252, 0.15)',
    borderWidth: 1,
    borderColor: '#BB86FC',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#BB86FC',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#BB86FC',
  },
  outlineText: {
    color: '#BB86FC',
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mediumButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
});
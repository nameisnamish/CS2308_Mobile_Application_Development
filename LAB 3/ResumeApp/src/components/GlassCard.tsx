import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {colors, borderRadius} from '../theme/colors';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'red';
  style?: ViewStyle;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'dark',
  style,
}) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'light':
        return colors.glassLight;
      case 'red':
        return colors.glassRed;
      default:
        return colors.glassDark;
    }
  };

  const getBorderColor = () => {
    switch (variant) {
      case 'red':
        return colors.glassBorderRed;
      default:
        return colors.glassBorder;
    }
  };

  return (
    <View style={[styles.container, style]}>
      <BlurView
        style={styles.blur}
        blurType="dark"
        blurAmount={20}
        reducedTransparencyFallbackColor={colors.backgroundDark}
      />
      <View
        style={[
          styles.content,
          {
            backgroundColor: getBackgroundColor(),
            borderColor: getBorderColor(),
          },
        ]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    padding: 20,
  },
});

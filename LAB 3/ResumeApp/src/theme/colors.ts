// Material 3 Expressive Theme - Red, Black, White with Glassmorphism
export const colors = {
  // Primary Colors
  primary: '#E53935',
  primaryDark: '#D32F2F',
  primaryLight: '#FF6B6B',

  // Secondary/Accent Colors
  secondary: '#FF5722',
  accent: '#FF6B6B',

  // Background Colors
  backgroundDark: '#0A0A0A',
  backgroundDeepRed: '#1A0000',
  backgroundPure: '#000000',

  // Glass Effect Colors
  glassDark: 'rgba(0, 0, 0, 0.75)',
  glassLight: 'rgba(255, 255, 255, 0.15)',
  glassRed: 'rgba(229, 57, 53, 0.25)',
  glassBorder: 'rgba(255, 255, 255, 0.2)',
  glassBorderRed: 'rgba(229, 57, 53, 0.4)',

  // Text Colors
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textOnLight: '#0A0A0A',
  textOnRed: '#FFFFFF',

  // UI Colors
  white: '#FFFFFF',
  black: '#000000',
  shadow: 'rgba(229, 57, 53, 0.3)',

  // Gradient Arrays
  gradientBackground: ['#0A0A0A', '#1A0000', '#0A0A0A'],
  gradientRed: ['#E53935', '#D32F2F'],
  gradientAccent: ['#FF5722', '#E53935'],
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  full: 9999,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: '800' as const,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700' as const,
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 12,
    fontWeight: '500' as const,
  },
  button: {
    fontSize: 14,
    fontWeight: '600' as const,
    letterSpacing: 0.5,
  },
};

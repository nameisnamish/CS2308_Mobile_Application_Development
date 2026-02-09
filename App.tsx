import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';

import {HomeScreen} from './src/screens/HomeScreen';
import {SkillsScreen} from './src/screens/SkillsScreen';
import {ProjectsScreen} from './src/screens/ProjectsScreen';
import {CertificationsScreen} from './src/screens/CertificationsScreen';
import {colors} from './src/theme/colors';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.tabBarContainer}>
      <BlurView
        style={styles.tabBarBlur}
        blurType="dark"
        blurAmount={25}
        reducedTransparencyFallbackColor={colors.backgroundDark}
      />
      <View style={styles.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const getIcon = (routeName: string) => {
            switch (routeName) {
              case 'Home':
                return 'account';
              case 'Skills':
                return 'code-braces';
              case 'Projects':
                return 'folder-multiple';
              case 'Certifications':
                return 'certificate';
              default:
                return 'circle';
            }
          };

          return (
            <View key={route.key} style={styles.tabItem}>
              {isFocused ? (
                <LinearGradient
                  colors={colors.gradientRed}
                  style={styles.activeTabBg}>
                  <Icon
                    name={getIcon(route.name)}
                    size={24}
                    color={colors.white}
                  />
                </LinearGradient>
              ) : (
                <View style={styles.inactiveTabBg}>
                  <Icon
                    name={getIcon(route.name)}
                    size={22}
                    color={colors.textSecondary}
                    onPress={onPress}
                  />
                </View>
              )}
              {!isFocused && (
                <View style={styles.touchArea} onTouchEnd={onPress} />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <CustomTabBar {...props} />}
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Skills" component={SkillsScreen} />
          <Tab.Screen name="Projects" component={ProjectsScreen} />
          <Tab.Screen name="Certifications" component={CertificationsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 15,
  },
  tabBarBlur: {
    ...StyleSheet.absoluteFillObject,
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
  },
  activeTabBg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  inactiveTabBg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  touchArea: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;

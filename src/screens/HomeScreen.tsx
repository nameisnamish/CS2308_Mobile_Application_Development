import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlassCard} from '../components/GlassCard';
import {colors, spacing, borderRadius, typography} from '../theme/colors';

const {width} = Dimensions.get('window');

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const navigateToSection = (section: string) => {
    navigation.navigate(section);
  };

  return (
    <LinearGradient colors={colors.gradientBackground} style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          {/* Profile Photo Container with Glass Effect */}
          <View style={styles.photoContainer}>
            <LinearGradient
              colors={colors.gradientRed}
              style={styles.photoGradientBorder}>
              <View style={styles.photoInnerContainer}>
                <Image
                  source={require('../assets/images/profile.jpeg')}
                  style={styles.profileImage}
                />
              </View>
            </LinearGradient>
          </View>

          {/* Name and Title */}
          <Text style={styles.name}>Namish M S</Text>
          <View style={styles.titleBadge}>
            <LinearGradient
              colors={colors.gradientAccent}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.titleGradient}>
              <Text style={styles.title}>Data Science & Analytics Enthusiast</Text>
            </LinearGradient>
          </View>
        </View>

        {/* Bio Section */}
        <GlassCard variant="dark" style={styles.bioCard}>
          <View style={styles.bioHeader}>
            <Icon name="account-details" size={24} color={colors.primary} />
            <Text style={styles.bioTitle}>About Me</Text>
          </View>
          <Text style={styles.bioText}>
            Passionate about transforming raw data into actionable insights. Currently
            pursuing BCA (Honors) in Data Science with a focus on machine learning,
            analytics, and data visualization. Eager to solve real-world problems
            through data-driven solutions.
          </Text>
        </GlassCard>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <GlassCard variant="red" style={styles.statCard}>
            <Text style={styles.statNumber}>3+</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </GlassCard>
          <GlassCard variant="light" style={styles.statCard}>
            <Text style={[styles.statNumber, {color: colors.white}]}>5+</Text>
            <Text style={[styles.statLabel, {color: colors.textSecondary}]}>Skills</Text>
          </GlassCard>
          <GlassCard variant="red" style={styles.statCard}>
            <Text style={styles.statNumber}>3+</Text>
            <Text style={styles.statLabel}>Certs</Text>
          </GlassCard>
        </View>

        {/* Navigation Cards */}
        <Text style={styles.sectionTitle}>Explore</Text>
        
        <TouchableOpacity onPress={() => navigateToSection('Skills')}>
          <GlassCard variant="dark" style={styles.navCard}>
            <View style={styles.navCardContent}>
              <View style={styles.navIconContainer}>
                <LinearGradient colors={colors.gradientRed} style={styles.navIconBg}>
                  <Icon name="code-braces" size={28} color={colors.white} />
                </LinearGradient>
              </View>
              <View style={styles.navTextContainer}>
                <Text style={styles.navTitle}>Skills & Education</Text>
                <Text style={styles.navSubtitle}>Technical expertise & academic journey</Text>
              </View>
              <Icon name="chevron-right" size={24} color={colors.textSecondary} />
            </View>
          </GlassCard>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToSection('Projects')}>
          <GlassCard variant="light" style={styles.navCard}>
            <View style={styles.navCardContent}>
              <View style={styles.navIconContainer}>
                <LinearGradient colors={colors.gradientAccent} style={styles.navIconBg}>
                  <Icon name="folder-multiple" size={28} color={colors.white} />
                </LinearGradient>
              </View>
              <View style={styles.navTextContainer}>
                <Text style={styles.navTitle}>Projects</Text>
                <Text style={styles.navSubtitle}>Featured work & case studies</Text>
              </View>
              <Icon name="chevron-right" size={24} color={colors.textSecondary} />
            </View>
          </GlassCard>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToSection('Certifications')}>
          <GlassCard variant="red" style={styles.navCard}>
            <View style={styles.navCardContent}>
              <View style={styles.navIconContainer}>
                <View style={[styles.navIconBg, {backgroundColor: colors.white}]}>
                  <Icon name="certificate" size={28} color={colors.primary} />
                </View>
              </View>
              <View style={styles.navTextContainer}>
                <Text style={styles.navTitle}>Certifications</Text>
                <Text style={styles.navSubtitle}>Professional credentials</Text>
              </View>
              <Icon name="chevron-right" size={24} color={colors.white} />
            </View>
          </GlassCard>
        </TouchableOpacity>

        {/* Contact Section */}
        <GlassCard variant="dark" style={styles.contactCard}>
          <Text style={styles.contactTitle}>Get In Touch</Text>
          <View style={styles.contactIcons}>
            <TouchableOpacity style={styles.contactIconBtn}>
              <LinearGradient colors={colors.gradientRed} style={styles.contactIconBg}>
                <Icon name="email" size={22} color={colors.white} />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactIconBtn}>
              <LinearGradient colors={colors.gradientRed} style={styles.contactIconBg}>
                <Icon name="linkedin" size={22} color={colors.white} />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactIconBtn}>
              <LinearGradient colors={colors.gradientRed} style={styles.contactIconBg}>
                <Icon name="github" size={22} color={colors.white} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </GlassCard>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  photoContainer: {
    marginBottom: spacing.lg,
  },
  photoGradientBorder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    padding: 4,
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
  },
  photoInnerContainer: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    borderRadius: 68,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  name: {
    ...typography.h1,
    color: colors.white,
    marginBottom: spacing.sm,
  },
  titleBadge: {
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  titleGradient: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
  },
  title: {
    ...typography.bodySmall,
    color: colors.white,
    fontWeight: '600',
  },
  bioCard: {
    marginBottom: spacing.lg,
  },
  bioHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  bioTitle: {
    ...typography.h3,
    color: colors.white,
    marginLeft: spacing.sm,
  },
  bioText: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  statCard: {
    flex: 1,
    marginHorizontal: spacing.xs,
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  statNumber: {
    ...typography.h1,
    color: colors.white,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.white,
    marginBottom: spacing.md,
  },
  navCard: {
    marginBottom: spacing.md,
  },
  navCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navIconContainer: {
    marginRight: spacing.md,
  },
  navIconBg: {
    width: 50,
    height: 50,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTextContainer: {
    flex: 1,
  },
  navTitle: {
    ...typography.h3,
    color: colors.white,
    marginBottom: 4,
  },
  navSubtitle: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  contactCard: {
    marginTop: spacing.lg,
    alignItems: 'center',
  },
  contactTitle: {
    ...typography.h3,
    color: colors.white,
    marginBottom: spacing.md,
  },
  contactIcons: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  contactIconBtn: {
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  contactIconBg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSpacer: {
    height: 100,
  },
});

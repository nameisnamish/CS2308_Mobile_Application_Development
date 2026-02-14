import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlassCard} from '../components/GlassCard';
import {colors, spacing, borderRadius, typography} from '../theme/colors';

interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  color?: string;
}

const skills: Skill[] = [
  {name: 'Python', icon: 'language-python', level: 85, color: '#3776AB'},
  {name: 'Machine Learning', icon: 'brain', level: 75, color: '#FF6B6B'},
  {name: 'Power BI', icon: 'chart-bar', level: 90, color: '#F2C811'},
  {name: 'SQL', icon: 'database', level: 80, color: '#4479A1'},
  {name: 'Tableau', icon: 'chart-areaspline', level: 70, color: '#E97627'},
  {name: 'Excel', icon: 'microsoft-excel', level: 85, color: '#217346'},
  {name: 'MS Office', icon: 'microsoft-office', level: 90, color: '#D83B01'},
];

export const SkillsScreen: React.FC = () => {
  const renderSkillBar = (skill: Skill) => (
    <GlassCard
      key={skill.name}
      variant={skills.indexOf(skill) % 2 === 0 ? 'dark' : 'light'}
      style={styles.skillCard}>
      <View style={styles.skillHeader}>
        <View style={styles.skillIconContainer}>
          <Icon name={skill.icon} size={24} color={skill.color || colors.primary} />
        </View>
        <Text style={styles.skillName}>{skill.name}</Text>
        <Text style={styles.skillLevel}>{skill.level}%</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressTrack}>
          <LinearGradient
            colors={[colors.primary, colors.accent]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={[styles.progressFill, {width: `${skill.level}%`}]}
          />
        </View>
      </View>
    </GlassCard>
  );

  return (
    <LinearGradient colors={colors.gradientBackground} style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <LinearGradient
            colors={colors.gradientRed}
            style={styles.headerIconBg}>
            <Icon name="code-braces-box" size={32} color={colors.white} />
          </LinearGradient>
          <Text style={styles.headerTitle}>Skills & Education</Text>
          <Text style={styles.headerSubtitle}>Technical expertise & academic background</Text>
        </View>

        {/* Technical Skills Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="lightning-bolt" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Technical Skills</Text>
          </View>
          
          {skills.map(renderSkillBar)}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="school" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Education</Text>
          </View>

          <GlassCard variant="red" style={styles.educationCard}>
            <View style={styles.educationHeader}>
              <View style={styles.educationIconBg}>
                <Icon name="school-outline" size={32} color={colors.white} />
              </View>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Currently Pursuing</Text>
              </View>
            </View>

            <Text style={styles.degree}>BCA (Honors)</Text>
            <Text style={styles.specialization}>Data Science</Text>
            
            <View style={styles.divider} />
            
            <View style={styles.universityRow}>
              <Icon name="map-marker" size={18} color={colors.textSecondary} />
              <Text style={styles.university}>RV University, Bangalore</Text>
            </View>
            
            <View style={styles.durationRow}>
              <Icon name="calendar-range" size={18} color={colors.textSecondary} />
              <Text style={styles.duration}>2024 - 2028</Text>
            </View>

            <View style={styles.courseworkSection}>
              <Text style={styles.courseworkTitle}>Key Coursework</Text>
              <View style={styles.courseworkTags}>
                {['Data Structures', 'Statistics', 'Machine Learning', 'Database Systems'].map(course => (
                  <View key={course} style={styles.courseTag}>
                    <Text style={styles.courseTagText}>{course}</Text>
                  </View>
                ))}
              </View>
            </View>
          </GlassCard>
        </View>

        {/* Additional Info */}
        <GlassCard variant="light" style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Icon name="target" size={20} color={colors.primary} />
            <Text style={styles.infoText}>Focused on practical applications of AI/ML</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="chart-timeline-variant-shimmer" size={20} color={colors.primary} />
            <Text style={styles.infoText}>Building real-world data science projects</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="account-group" size={20} color={colors.primary} />
            <Text style={styles.infoText}>Active in coding communities & hackathons</Text>
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
    paddingTop: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  headerIconBg: {
    width: 70,
    height: 70,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  headerTitle: {
    ...typography.h1,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    ...typography.body,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.white,
    marginLeft: spacing.sm,
  },
  skillCard: {
    marginBottom: spacing.md,
  },
  skillHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  skillIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  skillName: {
    ...typography.h3,
    color: colors.white,
    flex: 1,
  },
  skillLevel: {
    ...typography.button,
    color: colors.primary,
  },
  progressContainer: {
    marginTop: spacing.xs,
  },
  progressTrack: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: borderRadius.full,
  },
  educationCard: {
    padding: spacing.lg,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  educationIconBg: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBadge: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  statusText: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: '700',
  },
  degree: {
    ...typography.h1,
    color: colors.white,
    marginBottom: 4,
  },
  specialization: {
    ...typography.h3,
    color: colors.accent,
    marginBottom: spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginVertical: spacing.md,
  },
  universityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  university: {
    ...typography.body,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  duration: {
    ...typography.body,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  courseworkSection: {
    marginTop: spacing.sm,
  },
  courseworkTitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  courseworkTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  courseTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  courseTagText: {
    ...typography.caption,
    color: colors.white,
  },
  infoCard: {
    marginBottom: spacing.xl,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  infoText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.md,
    flex: 1,
  },
  bottomSpacer: {
    height: 100,
  },
});

import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlassCard} from '../components/GlassCard';
import {colors, spacing, borderRadius, typography} from '../theme/colors';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  icon: string;
  iconColor: string;
  date?: string;
  credentialId?: string;
  skills: string[];
  variant: 'dark' | 'light' | 'red';
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    icon: 'google',
    iconColor: '#4285F4',
    date: '2024',
    credentialId: 'GDAPC-2024',
    skills: ['Data Analysis', 'SQL', 'R Programming', 'Data Visualization', 'Spreadsheets'],
    variant: 'red',
  },
  {
    id: '2',
    title: 'Python for Data Science',
    issuer: 'Coursera / IBM',
    icon: 'language-python',
    iconColor: '#3776AB',
    date: '2024',
    credentialId: 'PY-DS-2024',
    skills: ['Python', 'NumPy', 'Pandas', 'Data Manipulation'],
    variant: 'dark',
  },
  {
    id: '3',
    title: 'Microsoft Power BI Data Analyst',
    issuer: 'Microsoft',
    icon: 'microsoft-power-bi',
    iconColor: '#F2C811',
    date: '2024',
    credentialId: 'PBI-DA-2024',
    skills: ['Power BI', 'DAX', 'Data Modeling', 'Report Building'],
    variant: 'light',
  },
];

export const CertificationsScreen: React.FC = () => {
  const renderCertificationCard = (cert: Certification) => (
    <GlassCard key={cert.id} variant={cert.variant} style={styles.certCard}>
      <View style={styles.certHeader}>
        <View style={[styles.certIconContainer, {backgroundColor: `${cert.iconColor}20`}]}>
          <Icon name={cert.icon} size={36} color={cert.iconColor} />
        </View>
        <View style={styles.certBadge}>
          <Icon name="shield-check" size={14} color={colors.primary} />
          <Text style={styles.certBadgeText}>Verified</Text>
        </View>
      </View>

      <Text style={styles.certTitle}>{cert.title}</Text>
      
      <View style={styles.issuerRow}>
        <Icon name="domain" size={16} color={colors.textSecondary} />
        <Text style={styles.issuerText}>{cert.issuer}</Text>
      </View>

      {cert.date && (
        <View style={styles.dateRow}>
          <Icon name="calendar-check" size={16} color={colors.textSecondary} />
          <Text style={styles.dateText}>Issued: {cert.date}</Text>
        </View>
      )}

      {cert.credentialId && (
        <View style={styles.credentialRow}>
          <Icon name="identifier" size={16} color={colors.textSecondary} />
          <Text style={styles.credentialText}>ID: {cert.credentialId}</Text>
        </View>
      )}

      <View style={styles.divider} />

      <View style={styles.skillsSection}>
        <Text style={styles.skillsLabel}>Skills Covered</Text>
        <View style={styles.skillsTags}>
          {cert.skills.map((skill, index) => (
            <View key={index} style={styles.skillTag}>
              <Text style={styles.skillTagText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.viewCredentialBtn}>
        <LinearGradient
          colors={colors.gradientRed}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.viewCredentialGradient}>
          <Icon name="open-in-new" size={16} color={colors.white} />
          <Text style={styles.viewCredentialText}>View Credential</Text>
        </LinearGradient>
      </TouchableOpacity>
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
          <LinearGradient colors={colors.gradientRed} style={styles.headerIconBg}>
            <Icon name="certificate" size={36} color={colors.white} />
          </LinearGradient>
          <Text style={styles.headerTitle}>Certifications</Text>
          <Text style={styles.headerSubtitle}>Professional credentials & achievements</Text>
        </View>

        {/* Summary Stats */}
        <GlassCard variant="red" style={styles.summaryCard}>
          <View style={styles.summaryContent}>
            <View style={styles.summaryItem}>
              <Icon name="medal" size={28} color={colors.white} />
              <Text style={styles.summaryNumber}>{certifications.length}</Text>
              <Text style={styles.summaryLabel}>Certifications</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryItem}>
              <Icon name="shield-star" size={28} color={colors.white} />
              <Text style={styles.summaryNumber}>3</Text>
              <Text style={styles.summaryLabel}>Top Issuers</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryItem}>
              <Icon name="trending-up" size={28} color={colors.white} />
              <Text style={styles.summaryNumber}>Active</Text>
              <Text style={styles.summaryLabel}>Learning</Text>
            </View>
          </View>
        </GlassCard>

        {/* Certifications List */}
        <View style={styles.certSection}>
          <View style={styles.sectionHeader}>
            <Icon name="trophy-variant" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>My Credentials</Text>
          </View>

          {certifications.map(renderCertificationCard)}
        </View>

        {/* In Progress Section */}
        <View style={styles.inProgressSection}>
          <View style={styles.sectionHeader}>
            <Icon name="progress-clock" size={24} color={colors.secondary} />
            <Text style={styles.sectionTitle}>Currently Pursuing</Text>
          </View>

          <GlassCard variant="dark" style={styles.inProgressCard}>
            <View style={styles.inProgressItem}>
              <View style={styles.inProgressIcon}>
                <Icon name="aws" size={24} color="#FF9900" />
              </View>
              <View style={styles.inProgressInfo}>
                <Text style={styles.inProgressTitle}>AWS Cloud Practitioner</Text>
                <Text style={styles.inProgressIssuer}>Amazon Web Services</Text>
              </View>
              <View style={styles.progressBadge}>
                <Text style={styles.progressBadgeText}>60%</Text>
              </View>
            </View>

            <View style={styles.progressBarContainer}>
              <View style={styles.progressTrack}>
                <LinearGradient
                  colors={colors.gradientRed}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={[styles.progressFill, {width: '60%'}]}
                />
              </View>
            </View>
          </GlassCard>

          <GlassCard variant="light" style={styles.inProgressCard}>
            <View style={styles.inProgressItem}>
              <View style={styles.inProgressIcon}>
                <Icon name="tensorflow" size={24} color="#FF6F00" />
              </View>
              <View style={styles.inProgressInfo}>
                <Text style={styles.inProgressTitle}>TensorFlow Developer</Text>
                <Text style={styles.inProgressIssuer}>Google</Text>
              </View>
              <View style={styles.progressBadge}>
                <Text style={styles.progressBadgeText}>30%</Text>
              </View>
            </View>

            <View style={styles.progressBarContainer}>
              <View style={styles.progressTrack}>
                <LinearGradient
                  colors={colors.gradientAccent}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={[styles.progressFill, {width: '30%'}]}
                />
              </View>
            </View>
          </GlassCard>
        </View>

        {/* Learning Goals */}
        <GlassCard variant="dark" style={styles.goalsCard}>
          <View style={styles.goalsHeader}>
            <Icon name="target" size={24} color={colors.primary} />
            <Text style={styles.goalsTitle}>Learning Goals</Text>
          </View>
          <View style={styles.goalsList}>
            <View style={styles.goalItem}>
              <Icon name="checkbox-marked-circle" size={18} color={colors.accent} />
              <Text style={styles.goalText}>Complete AWS certification by Q2 2025</Text>
            </View>
            <View style={styles.goalItem}>
              <Icon name="checkbox-blank-circle-outline" size={18} color={colors.textSecondary} />
              <Text style={styles.goalText}>Master deep learning frameworks</Text>
            </View>
            <View style={styles.goalItem}>
              <Icon name="checkbox-blank-circle-outline" size={18} color={colors.textSecondary} />
              <Text style={styles.goalText}>Achieve Azure Data Engineer Associate</Text>
            </View>
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
    width: 80,
    height: 80,
    borderRadius: borderRadius.xl,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
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
  summaryCard: {
    marginBottom: spacing.xl,
  },
  summaryContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  summaryItem: {
    alignItems: 'center',
    flex: 1,
  },
  summaryNumber: {
    ...typography.h2,
    color: colors.white,
    marginTop: spacing.xs,
  },
  summaryLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
  summaryDivider: {
    width: 1,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  certSection: {
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
  certCard: {
    marginBottom: spacing.lg,
  },
  certHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  certIconContainer: {
    width: 70,
    height: 70,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  certBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(229, 57, 53, 0.2)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    gap: 4,
  },
  certBadgeText: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: '600',
  },
  certTitle: {
    ...typography.h3,
    color: colors.white,
    marginBottom: spacing.md,
  },
  issuerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  issuerText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  dateText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  credentialRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  credentialText: {
    ...typography.caption,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginVertical: spacing.md,
  },
  skillsSection: {
    marginBottom: spacing.md,
  },
  skillsLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  skillsTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  skillTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },
  skillTagText: {
    ...typography.caption,
    color: colors.white,
  },
  viewCredentialBtn: {
    marginTop: spacing.sm,
  },
  viewCredentialGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    gap: spacing.sm,
  },
  viewCredentialText: {
    ...typography.button,
    color: colors.white,
  },
  inProgressSection: {
    marginBottom: spacing.xl,
  },
  inProgressCard: {
    marginBottom: spacing.md,
  },
  inProgressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  inProgressIcon: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  inProgressInfo: {
    flex: 1,
  },
  inProgressTitle: {
    ...typography.body,
    color: colors.white,
    fontWeight: '600',
  },
  inProgressIssuer: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  progressBadge: {
    backgroundColor: colors.glassRed,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  progressBadgeText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: '700',
  },
  progressBarContainer: {
    marginTop: spacing.xs,
  },
  progressTrack: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: borderRadius.full,
  },
  goalsCard: {
    marginBottom: spacing.lg,
  },
  goalsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  goalsTitle: {
    ...typography.h3,
    color: colors.white,
    marginLeft: spacing.sm,
  },
  goalsList: {
    gap: spacing.md,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.md,
    flex: 1,
  },
  bottomSpacer: {
    height: 100,
  },
});

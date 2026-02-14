import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlassCard} from '../components/GlassCard';
import {colors, spacing, borderRadius, typography} from '../theme/colors';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  icon: string;
  variant: 'dark' | 'light' | 'red';
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Movie Recommendation System',
    description:
      'An intelligent recommendation engine that suggests movies based on user preferences using collaborative filtering and content-based filtering algorithms. Implemented using Python and various ML libraries.',
    techStack: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Flask'],
    icon: 'movie-open',
    variant: 'red',
    featured: true,
  },
  {
    id: '2',
    title: 'HR Analytics Dashboard',
    description:
      'Interactive Power BI dashboard analyzing employee data, attrition rates, performance metrics, and workforce demographics. Provides actionable insights for HR decision-making.',
    techStack: ['Power BI', 'DAX', 'Data Modeling', 'ETL'],
    icon: 'chart-box',
    variant: 'dark',
    featured: true,
  },
  {
    id: '3',
    title: 'Sales Analysis Dashboard',
    description:
      'Comprehensive sales analytics solution tracking revenue, customer segments, product performance, and regional sales trends with dynamic filtering capabilities.',
    techStack: ['Tableau', 'SQL', 'Excel'],
    icon: 'shopping-outline',
    variant: 'light',
  },
];

const getTechColor = (tech: string): string => {
  const techColors: {[key: string]: string} = {
    Python: '#3776AB',
    'Machine Learning': '#FF6B6B',
    Pandas: '#150458',
    'Scikit-learn': '#F7931E',
    Flask: '#000000',
    'Power BI': '#F2C811',
    DAX: '#E97627',
    'Data Modeling': '#4479A1',
    ETL: '#00A36C',
    Tableau: '#E97627',
    SQL: '#4479A1',
    Excel: '#217346',
  };
  return techColors[tech] || colors.primary;
};

export const ProjectsScreen: React.FC = () => {
  const renderProjectCard = (project: Project) => (
    <GlassCard key={project.id} variant={project.variant} style={styles.projectCard}>
      {project.featured && (
        <View style={styles.featuredBadge}>
          <LinearGradient
            colors={colors.gradientRed}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.featuredGradient}>
            <Icon name="star" size={12} color={colors.white} />
            <Text style={styles.featuredText}>Featured</Text>
          </LinearGradient>
        </View>
      )}

      <View style={styles.projectHeader}>
        <View style={styles.projectIconContainer}>
          <LinearGradient
            colors={project.variant === 'red' ? [colors.white, '#EEEEEE'] : colors.gradientRed}
            style={styles.projectIconBg}>
            <Icon
              name={project.icon}
              size={32}
              color={project.variant === 'red' ? colors.primary : colors.white}
            />
          </LinearGradient>
        </View>
        <View style={styles.projectTitleContainer}>
          <Text style={styles.projectTitle}>{project.title}</Text>
        </View>
      </View>

      <Text style={styles.projectDescription}>{project.description}</Text>

      <View style={styles.techStackSection}>
        <Text style={styles.techStackLabel}>Tech Stack</Text>
        <View style={styles.techTags}>
          {project.techStack.map((tech, index) => (
            <View
              key={index}
              style={[
                styles.techTag,
                {
                  borderColor:
                    project.variant === 'light'
                      ? 'rgba(255, 255, 255, 0.3)'
                      : 'rgba(255, 255, 255, 0.2)',
                },
              ]}>
              <View
                style={[styles.techDot, {backgroundColor: getTechColor(tech)}]}
              />
              <Text style={styles.techTagText}>{tech}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.projectActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="github" size={18} color={colors.textSecondary} />
          <Text style={styles.actionButtonText}>View Code</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={colors.gradientRed}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.primaryActionButton}>
            <Text style={styles.primaryActionText}>Details</Text>
            <Icon name="arrow-right" size={18} color={colors.white} />
          </LinearGradient>
        </TouchableOpacity>
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
            colors={colors.gradientAccent}
            style={styles.headerIconBg}>
            <Icon name="folder-star" size={32} color={colors.white} />
          </LinearGradient>
          <Text style={styles.headerTitle}>My Projects</Text>
          <Text style={styles.headerSubtitle}>Showcasing data-driven solutions</Text>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <GlassCard variant="dark" style={styles.statItem}>
            <Text style={styles.statNumber}>{projects.length}</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </GlassCard>
          <GlassCard variant="red" style={styles.statItem}>
            <Text style={styles.statNumber}>
              {projects.filter(p => p.featured).length}
            </Text>
            <Text style={styles.statLabel}>Featured</Text>
          </GlassCard>
          <GlassCard variant="light" style={styles.statItem}>
            <Text style={styles.statNumber}>5+</Text>
            <Text style={styles.statLabel}>Tech Used</Text>
          </GlassCard>
        </View>

        {/* Project Cards */}
        <View style={styles.projectsSection}>
          <View style={styles.sectionHeader}>
            <Icon name="rocket-launch" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Featured Work</Text>
          </View>

          {projects.map(renderProjectCard)}
        </View>

        {/* More Projects Coming */}
        <GlassCard variant="dark" style={styles.comingSoonCard}>
          <View style={styles.comingSoonContent}>
            <Icon name="plus-circle-outline" size={48} color={colors.primary} />
            <Text style={styles.comingSoonTitle}>More Projects Coming</Text>
            <Text style={styles.comingSoonText}>
              Currently working on exciting new data science projects. Stay tuned!
            </Text>
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
    shadowColor: colors.secondary,
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  statItem: {
    flex: 1,
    marginHorizontal: spacing.xs,
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  statNumber: {
    ...typography.h2,
    color: colors.white,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 4,
  },
  projectsSection: {
    marginBottom: spacing.lg,
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
  projectCard: {
    marginBottom: spacing.lg,
    position: 'relative',
  },
  featuredBadge: {
    position: 'absolute',
    top: -8,
    right: 16,
    zIndex: 10,
  },
  featuredGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    gap: 4,
  },
  featuredText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: '700',
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  projectIconContainer: {
    marginRight: spacing.md,
  },
  projectIconBg: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  projectTitleContainer: {
    flex: 1,
  },
  projectTitle: {
    ...typography.h2,
    color: colors.white,
  },
  projectDescription: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  techStackSection: {
    marginBottom: spacing.lg,
  },
  techStackLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  techTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    borderWidth: 1,
  },
  techDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing.xs,
  },
  techTagText: {
    ...typography.caption,
    color: colors.white,
  },
  projectActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: spacing.md,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  actionButtonText: {
    ...typography.button,
    color: colors.textSecondary,
  },
  primaryActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    gap: spacing.xs,
  },
  primaryActionText: {
    ...typography.button,
    color: colors.white,
  },
  comingSoonCard: {
    marginBottom: spacing.lg,
  },
  comingSoonContent: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  comingSoonTitle: {
    ...typography.h3,
    color: colors.white,
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
  comingSoonText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bottomSpacer: {
    height: 100,
  },
});

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  useColorScheme,
  StatusBar,
  ListRenderItemInfo,
} from 'react-native';

const STORY_SIZE = 70;

// Theme colors
const themes = {
  light: {
    background: '#ffffff',
    surface: '#f5f5f5',
    card: '#ffffff',
    text: '#000000',
    textSecondary: '#666666',
    textMuted: '#999999',
    border: '#dbdbdb',
    accent: '#e6683c',
    icon: '#262626',
  },
  dark: {
    background: '#000000',
    surface: '#121212',
    card: '#1c1c1c',
    text: '#ffffff',
    textSecondary: '#b3b3b3',
    textMuted: '#666666',
    border: '#333333',
    accent: '#e6683c',
    icon: '#f5f5f5',
  },
};

interface Story {
  id: string;
  username: string;
  image: string;
  hasStory: boolean;
}

interface Post {
  id: string;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
  timeAgo: string;
}

// Sample story data
const stories: Story[] = [
  { id: '1', username: 'Your Story', image: 'https://picsum.photos/200/300?random=1', hasStory: true },
  { id: '2', username: 'john_doe', image: 'https://picsum.photos/200/300?random=2', hasStory: true },
  { id: '3', username: 'jane_smith', image: 'https://picsum.photos/200/300?random=3', hasStory: true },
  { id: '4', username: 'alex_wilson', image: 'https://picsum.photos/200/300?random=4', hasStory: true },
  { id: '5', username: 'sarah_jones', image: 'https://picsum.photos/200/300?random=5', hasStory: true },
  { id: '6', username: 'mike_brown', image: 'https://picsum.photos/200/300?random=6', hasStory: true },
  { id: '7', username: 'emma_davis', image: 'https://picsum.photos/200/300?random=7', hasStory: true },
  { id: '8', username: 'chris_miller', image: 'https://picsum.photos/200/300?random=8', hasStory: true },
];

// Sample posts data
const posts: Post[] = [
  {
    id: '1',
    username: 'john_doe',
    avatar: 'https://picsum.photos/100/100?random=10',
    image: 'https://picsum.photos/400/400?random=11',
    likes: 1234,
    caption: 'Beautiful sunset today! 🌅',
    timeAgo: '2 hours ago',
  },
  {
    id: '2',
    username: 'jane_smith',
    avatar: 'https://picsum.photos/100/100?random=12',
    image: 'https://picsum.photos/400/400?random=13',
    likes: 567,
    caption: 'Coffee time ☕ #morningvibes',
    timeAgo: '5 hours ago',
  },
  {
    id: '3',
    username: 'alex_wilson',
    avatar: 'https://picsum.photos/100/100?random=14',
    image: 'https://picsum.photos/400/400?random=15',
    likes: 890,
    caption: 'Nature walk 🌿',
    timeAgo: '8 hours ago',
  },
];

export default function App() {
  const systemColorScheme = useColorScheme();
  const [manualMode, setManualMode] = useState<'light' | 'dark' | null>(null);
  
  // Use manual mode if set, otherwise fall back to system
  const isDark = manualMode !== null ? manualMode === 'dark' : systemColorScheme === 'dark';
  const theme = isDark ? themes.dark : themes.light;

  const toggleTheme = () => {
    setManualMode(isDark ? 'light' : 'dark');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 0.5,
      borderBottomColor: theme.border,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.text,
    },
    modeIndicator: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 16,
      backgroundColor: theme.surface,
      borderWidth: 1,
      borderColor: theme.border,
    },
    modeText: {
      fontSize: 14,
      color: theme.text,
      fontWeight: '600',
    },
    storiesContainer: {
      paddingVertical: 12,
      paddingHorizontal: 8,
    },
    storiesSection: {
      borderBottomWidth: 0.5,
      borderBottomColor: theme.border,
      backgroundColor: theme.background,
    },
    storyItem: {
      alignItems: 'center',
      marginHorizontal: 8,
    },
    storyImageContainer: {
      padding: 2,
    },
    storyImage: {
      width: STORY_SIZE,
      height: STORY_SIZE,
      borderRadius: STORY_SIZE / 2,
      borderWidth: 3,
      borderColor: theme.background,
    },
    username: {
      marginTop: 4,
      fontSize: 12,
      color: theme.text,
      maxWidth: STORY_SIZE + 10,
      textAlign: 'center',
    },
    // Post styles
    postContainer: {
      backgroundColor: theme.card,
      marginBottom: 8,
      borderBottomWidth: 0.5,
      borderBottomColor: theme.border,
    },
    postHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
    },
    postAvatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      marginRight: 10,
    },
    postUsername: {
      fontWeight: '600',
      color: theme.text,
      fontSize: 14,
    },
    postImage: {
      width: '100%',
      aspectRatio: 1,
    },
    postActions: {
      flexDirection: 'row',
      padding: 12,
    },
    actionButton: {
      marginRight: 16,
    },
    actionText: {
      fontSize: 24,
      color: theme.icon,
    },
    postLikes: {
      paddingHorizontal: 12,
      marginBottom: 4,
    },
    likesText: {
      fontWeight: '600',
      color: theme.text,
      fontSize: 14,
    },
    postCaption: {
      paddingHorizontal: 12,
      marginBottom: 4,
    },
    captionText: {
      color: theme.text,
      fontSize: 14,
    },
    captionUsername: {
      fontWeight: '600',
    },
    postTime: {
      paddingHorizontal: 12,
      paddingBottom: 12,
    },
    timeText: {
      color: theme.textMuted,
      fontSize: 12,
    },
    feedContainer: {
      flex: 1,
      backgroundColor: theme.surface,
    },
  });

  const renderStory = ({ item, index }: ListRenderItemInfo<Story>) => (
    <TouchableOpacity style={styles.storyItem}>
      <View
        style={[
          styles.storyImageContainer,
          {
            borderRadius: STORY_SIZE / 2 + 2,
            width: STORY_SIZE + 4,
            height: STORY_SIZE + 4,
            borderWidth: 2,
            borderColor: item.hasStory ? theme.accent : theme.textMuted,
          },
        ]}
      >
        <Image
          source={{ uri: item.image }}
          style={styles.storyImage}
        />
      </View>
      <Text style={styles.username} numberOfLines={1}>
        {index === 0 ? 'Your Story' : item.username}
      </Text>
    </TouchableOpacity>
  );

  const renderPost = ({ item }: ListRenderItemInfo<Post>) => (
    <View style={styles.postContainer}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Image source={{ uri: item.avatar }} style={styles.postAvatar} />
        <Text style={styles.postUsername}>{item.username}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: item.image }} style={styles.postImage} />

      {/* Actions */}
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>↗</Text>
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <View style={styles.postLikes}>
        <Text style={styles.likesText}>{item.likes.toLocaleString()} likes</Text>
      </View>

      {/* Caption */}
      <View style={styles.postCaption}>
        <Text style={styles.captionText}>
          <Text style={styles.captionUsername}>{item.username}</Text> {item.caption}
        </Text>
      </View>

      {/* Time */}
      <View style={styles.postTime}>
        <Text style={styles.timeText}>{item.timeAgo}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Stories</Text>
        <Pressable 
          style={({pressed}) => [
            styles.modeIndicator, 
            {opacity: pressed ? 0.5 : 1}
          ]} 
          onPress={toggleTheme}
        >
          <Text style={styles.modeText}>{isDark ? '🌙 Dark' : '☀️ Light'}</Text>
        </Pressable>
      </View>

      {/* Stories Row */}
      <View style={styles.storiesSection}>
        <FlatList
          data={stories}
          renderItem={renderStory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContainer}
        />
      </View>

      {/* Feed with Posts */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        style={styles.feedContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
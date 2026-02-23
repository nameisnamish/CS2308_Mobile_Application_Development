import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

import menuData from './menu.json';

// Define the type for menu items
interface MenuItem {
  id: number;
  name: string;
  category: 'Veg' | 'Non-Veg' | 'Beverage';
  price: number;
  rating: number;
}

// Get card background color based on category
const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'Veg':
      return '#E8F5E9'; // Light Green
    case 'Non-Veg':
      return '#FFEBEE'; // Light Red
    case 'Beverage':
      return '#E3F2FD'; // Light Blue
    default:
      return '#FFFFFF';
  }
};

// Format price with rupee symbol
const formatPrice = (price: number): string => {
  return `₹${price}`;
};

// Food Item Card Component
const FoodCard = ({item}: {item: MenuItem}) => {
  return (
    <View style={[styles.card, {backgroundColor: getCategoryColor(item.category)}]}>
      <Text style={styles.foodName}>🍽 {item.name}</Text>
      <Text style={styles.category}>📂 {item.category}</Text>
      <Text style={styles.price}>💰 {formatPrice(item.price)}</Text>
      <Text style={styles.rating}>⭐ {item.rating}</Text>
    </View>
  );
};

// Header Component
const ListHeader = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>🍴 Restaurant Menu</Text>
  </View>
);

// Footer Component
const ListFooter = () => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerText}>Thank You for Visiting! 🙏</Text>
  </View>
);

// Separator Component
const ItemSeparator = () => <View style={styles.separator} />;

// Empty List Component
const EmptyList = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>No menu items available</Text>
  </View>
);

const App = () => {
  const renderItem = ({item}: {item: MenuItem}) => <FoodCard item={item} />;

  const keyExtractor = (item: MenuItem) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF8E1" />
      <FlatList
        data={menuData as MenuItem[]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    paddingTop: 20,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  card: {
    width: 200,
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#FF8F00',
  },
  headerContainer: {
    paddingRight: 16,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  footerContainer: {
    paddingLeft: 16,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  separator: {
    width: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
  },
});

export default App;

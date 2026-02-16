import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Types
type RootStackParamList = {
  HotelSelection: undefined;
  Payment: undefined;
};

type Hotel = {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: string;
  image: string;
};

type PaymentOption = {
  id: string;
  name: string;
  logo: string;
};

// Sample hotel data
const hotelsData: Hotel[] = [
  {id: '1', name: 'Hotel One', location: 'Indonesia', rating: 4, price: '$65.00', image: 'hotel1'},
  {id: '2', name: 'Hotel Two', location: 'Indonesia', rating: 4, price: '$65.00', image: 'hotel2'},
  {id: '3', name: 'Hotel Three', location: 'Indonesia', rating: 4, price: '$65.00', image: 'hotel3'},
  {id: '4', name: 'Hotel Four', location: 'Indonesia', rating: 4, price: '$65.00', image: 'hotel4'},
  {id: '5', name: 'Hotel One', location: 'Indonesia', rating: 4, price: '$65.00', image: 'hotel1'},
  {id: '6', name: 'Hotel Two', location: 'Indonesia', rating: 4, price: '$65.00', image: 'hotel2'},
  {id: '7', name: 'Hotel Three', location: 'Indonesia', rating: 4, price: '$65.00', image: 'hotel3'},
  {id: '8', name: 'Hotel Four', location: 'Indonesia', rating: 4, price: '$65.00', image: 'hotel4'},
  {id: '9', name: 'Hotel One', location: 'Indonesia', rating: 4, price: '$65.00', image: 'hotel1'},
];

// Bank transfer options
const bankTransferOptions: PaymentOption[] = [
  {id: '1', name: 'Bank Mandiri', logo: 'mandiri'},
  {id: '2', name: 'Bank BCA', logo: 'bca'},
  {id: '3', name: 'Bank BNI', logo: 'bni'},
  {id: '4', name: 'Bank Mega', logo: 'mega'},
];

// Virtual account options
const virtualAccountOptions: PaymentOption[] = [
  {id: '1', name: 'Virtual Account Mandiri', logo: 'mandiri'},
  {id: '2', name: 'Virtual Account BCA', logo: 'bca'},
  {id: '3', name: 'Virtual Account BNI', logo: 'bni'},
  {id: '4', name: 'Virtual Account Mega', logo: 'mega'},
];

// Installment options
const installmentOptions: PaymentOption[] = [
  {id: '1', name: 'Kredivo', logo: 'kredivo'},
  {id: '2', name: '< 17 Years (T&C Apply)', logo: 'installment'},
];

// Star Rating Component
const StarRating = ({rating}: {rating: number}) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Text key={i} style={styles.star}>
        {i < rating ? '★' : '☆'}
      </Text>,
    );
  }
  return <View style={styles.starContainer}>{stars}</View>;
};

// Hotel Card Component
const HotelCard = ({hotel, onPress}: {hotel: Hotel; onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.hotelCard} onPress={onPress}>
      <View style={styles.hotelImageContainer}>
        <Image
          source={{uri: `https://picsum.photos/seed/${hotel.image}/200/150`}}
          style={styles.hotelImage}
        />
      </View>
      <View style={styles.hotelInfo}>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>{hotel.location}</Text>
        </View>
        <StarRating rating={hotel.rating} />
      </View>
      <Text style={styles.hotelPrice}>{hotel.price}</Text>
    </TouchableOpacity>
  );
};

// Payment Option Row Component
const PaymentOptionRow = ({option, logoComponent}: {option: PaymentOption; logoComponent: React.ReactNode}) => {
  return (
    <TouchableOpacity style={styles.paymentOptionRow}>
      <View style={styles.paymentOptionLeft}>
        {logoComponent}
        <Text style={styles.paymentOptionName}>{option.name}</Text>
      </View>
      <View style={styles.paymentOptionArrow}>
        <Text style={styles.arrowIcon}>›</Text>
      </View>
    </TouchableOpacity>
  );
};

// Bank Logo Component
const BankLogo = ({type}: {type: string}) => {
  const logos: {[key: string]: {text: string; color: string; bgColor?: string}} = {
    mandiri: {text: 'mandiri', color: '#003366'},
    bca: {text: 'BCA', color: '#0066b3'},
    bni: {text: 'BNI', color: '#f15a22'},
    mega: {text: 'M', color: '#00529B', bgColor: '#FFD700'},
    kredivo: {text: '💳', color: '#4CAF50'},
    installment: {text: '💳', color: '#9E9E9E'},
  };

  const logo = logos[type] || {text: type, color: '#333'};

  return (
    <View style={[styles.bankLogoContainer, logo.bgColor ? {backgroundColor: logo.bgColor} : {}]}>
      <Text style={[styles.bankLogoText, {color: logo.color}]}>{logo.text}</Text>
    </View>
  );
};

// Hotel Selection Screen
const HotelSelectionScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#7C3AED" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hotel Selection</Text>
      </View>
      <FlatList
        data={hotelsData}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <HotelCard
            hotel={item}
            onPress={() => navigation.navigate('Payment')}
          />
        )}
        contentContainerStyle={styles.hotelList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// Payment Screen
const PaymentScreen = ({navigation}: any) => {
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#7C3AED" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
      </View>

      <ScrollView style={styles.paymentContent} showsVerticalScrollIndicator={false}>
        {/* Timer */}
        <View style={styles.timerContainer}>
          <Text style={styles.timerLabel}>Complete your booking in</Text>
          <Text style={styles.timerValue}>{formatTime(timeLeft)}</Text>
        </View>

        {/* Transfer Bank Section */}
        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Transfer Bank</Text>
          {bankTransferOptions.map((option) => (
            <PaymentOptionRow
              key={option.id}
              option={option}
              logoComponent={<BankLogo type={option.logo} />}
            />
          ))}
        </View>

        {/* Virtual Account Section */}
        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Virtual Account</Text>
          {virtualAccountOptions.map((option) => (
            <PaymentOptionRow
              key={option.id}
              option={option}
              logoComponent={<BankLogo type={option.logo} />}
            />
          ))}
        </View>

        {/* Installment Section */}
        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Installment Without Credit Card</Text>
          {installmentOptions.map((option) => (
            <PaymentOptionRow
              key={option.id}
              option={option}
              logoComponent={<BankLogo type={option.logo} />}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

// Navigation Stack
const Stack = createNativeStackNavigator<RootStackParamList>();

// Main App
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HotelSelection" component={HotelSelectionScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#7C3AED',
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  hotelList: {
    padding: 15,
  },
  hotelCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hotelImageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  hotelImage: {
    width: 90,
    height: 70,
    borderRadius: 10,
  },
  hotelInfo: {
    flex: 1,
    marginLeft: 12,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#7C3AED',
  },
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    color: '#FFD700',
    fontSize: 14,
  },
  hotelPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7C3AED',
  },
  paymentContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  timerLabel: {
    fontSize: 14,
    color: '#7C3AED',
    marginRight: 10,
  },
  timerValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  paymentSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  paymentOptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  paymentOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankLogoContainer: {
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 4,
  },
  bankLogoText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  paymentOptionName: {
    fontSize: 14,
    color: '#333',
  },
  paymentOptionArrow: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#7C3AED',
  },
});

export default App;

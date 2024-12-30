import React, { useEffect, useState, useContext, createContext } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

// Context for managing click counts
const ClickContext = createContext();

export function ClickProvider({ children }) {
  const [clickCount, setClickCount] = useState(0);
  return (
    <ClickContext.Provider value={{ clickCount, setClickCount }}>
      {children}
    </ClickContext.Provider>
  );
}

export default function Home() {
  const route = useRoute();
  const { username } = route.params || {}; 
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { clickCount, setClickCount } = useContext(ClickContext);
  const [clickedCards, setClickedCards] = useState({}); 

  useEffect(() => {
    // Fetch data from the API
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDoctors(data); // Save the fetched data
        setLoading(false); // Stop the loader
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

 
  useEffect(() => {
    setFilteredDoctors(doctors); // Initialize filteredDoctors with the complete list
  }, [doctors]);

 
  const handleSearch = () => {
    const results = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.company.catchPhrase.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDoctors(results);
  };
  
  const handleCardClick = (id) => {
    setClickedCards((prev) => {
      if (prev[id]) {
        // If card is already clicked, toggle it off and decrement the count
        setClickCount((prevCount) => Math.max(0, prevCount - 1)); 
        return { ...prev, [id]: false };
      } else {
        // If card is not clicked, toggle it on and increment the count
        setClickCount((prevCount) => prevCount + 1);
        return { ...prev, [id]: true };
      }
    });
  };
  

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, {username || 'Guest'}</Text>
        <Text style={styles.welcome}>Welcome Back To Medi Help</Text>
      </View>

     
      <View style={styles.mainContent}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Doctor..."
            placeholderTextColor="#ccc"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity style={styles.searchIconContainer} onPress={handleSearch}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149852.png' }}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Doctor Cards */}
        <ScrollView>
          {filteredDoctors.map((doctor) => (
            <TouchableOpacity
              key={doctor.id}
              style={[
                styles.doctorCard,
                clickedCards[doctor.id] ? styles.clickedCard : null, // Change background color if clicked
              ]}
              onPress={() => handleCardClick(doctor.id)}
             
             
            >
              <Image
                source={{ uri: `https://robohash.org/${doctor.id}?set=set5` }}
                style={styles.doctorImage}
              />
              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.doctorCity}>City: {doctor.address.city}</Text>
                <Text style={styles.statusTag}>Available</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Floating Button */}
        <TouchableOpacity style={styles.floatingButton}>
          <Text style={styles.floatingButtonText}>{clickCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF', 
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  welcome: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
  searchIconContainer: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#666',
  },
  doctorCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  clickedCard: {
    backgroundColor: '#ADD8E6', 
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  statusTag: {
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: 'green',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  floatingButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

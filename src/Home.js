import React from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Image,ScrollView,} from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Smith</Text>
        <Text style={styles.welcome}>Welcome Back</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#ccc"
        />
      </View>

      {/* Categories */}
      <Text style={styles.categoryTitle}>Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Dental</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Heart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Eyes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Top Rated Doctors */}
      <Text style={styles.topRatedTitle}>Top Rated</Text>
      <View style={styles.doctorCard}>
        <Image
          source={require('../assets/doctor.jpg')} // Replace with your doctor image path
          style={styles.doctorImage}
        />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Dr. John Smith</Text>
          <Text style={styles.doctorSpecialty}>Urology</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF', // Blue background
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
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
  searchContainer: {
    marginVertical: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  categoryTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    width: 100,
    height: 100,
  },
  categoryText: {
    color: '#1E90FF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  topRatedTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 10,
  },
  doctorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
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
    color: '#1E90FF',
  },
});

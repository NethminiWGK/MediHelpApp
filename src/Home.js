import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Smith</Text>
        <Text style={styles.welcome}>Welcome Back</Text>
      

      {/* Main Content with White Background */}
     
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#ccc"
          />
        </View>
        </View>

        {/* Categories */}
        <View style={styles.mainContent}>
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
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>Ears</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Top Rated Doctors */}
        <Text style={styles.topRatedTitle}>Top Rated</Text>
        <View style={styles.doctorCard}>
          <Image
            source={require('../assets/doctor.png')} // Replace with your doctor image path
            style={styles.doctorImage}
          />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dr. John Smith</Text>
            <Text style={styles.doctorSpecialty}>Urology</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF', // Blue background for the header
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: '600',
    paddingTop:10,
  },
  welcome: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingBottom: 20,
    paddingTop: 20,

  },
  mainContent: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the rest of the page
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  categoryTitle: {
    fontSize: 20,
    color: '#1E90FF',
    fontWeight: '600',
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryItem: {
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    width: 100,
    height: 100,
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  topRatedTitle: {
    fontSize: 20,
    color: '#1E90FF',
    fontWeight: '600',
    marginBottom: 10,
  },
  doctorCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
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

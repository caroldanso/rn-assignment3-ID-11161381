import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'; // Import the Icon component

// Import local images from the assets folder
import workImage from './assets/work.jpeg';
import hobbyImage from './assets/hobby.jpeg';
import cleaningImage from './assets/cleaning.jpeg';
import shoppingImage from './assets/shopping.jpeg';
import cookingImage from './assets/cooking.jpeg';
import readingImage from './assets/reading.jpeg';

export default function Task() {
  const [searchQuery, setSearchQuery] = useState("");

  const tasks = [
    { key: '1', task: 'Mobile App Development' },
    { key: '2', task: 'Web Development' },
    { key: '3', task: 'Push Ups' },
    { key: '4', task: 'Study' },
    { key: '5', task: 'Exercise' },
    { key: '6', task: 'Meditation' },
    { key: '7', task: 'Reading a Book' },
    { key: '8', task: 'Writing a Blog Post' },
    { key: '9', task: 'Sketching' },
    { key: '10', task: 'coding' },
    { key: '11', task: 'Dancing Practice' },
    { key: '12', task: 'Music Practice' },
    { key: '13', task: 'Photo Editing' },
    { key: '14', task: 'Volunteering' },
    { key: '15', task: 'Travel Planning' },
  ];

  const categories = [
    { key: '1', title: 'Exercise', tasks: '12 Tasks', imageUri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8bult9z5lx-2%3A5?alt=media&token=2c70821d-8764-42a1-bd06-d2f1427b80c2' },
    { key: '2', title: 'Study', tasks: '12 Tasks', imageUri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8bult9z5lx-2%3A16?alt=media&token=d276ac1d-d09b-4105-8f98-a0857fee04f1' },
    { key: '3', title: 'Work', tasks: '8 Tasks', image: workImage },
    { key: '4', title: 'Hobby', tasks: '5 Tasks', image: hobbyImage },
    { key: '5', title: 'Cleaning', tasks: '3 Tasks', image: cleaningImage },
    { key: '6', title: 'Shopping', tasks: '4 Tasks', image: shoppingImage },
    { key: '7', title: 'Cooking', tasks: '6 Tasks', image: cookingImage },
    { key: '8', title: 'Reading', tasks: '7 Tasks', image: readingImage },
  ];

  const handleAddTask = () => {
    console.log("Add Task pressed");
  };

  return (
    <View style={styles.Task}>
      <ScrollView contentContainerStyle={styles.ScrollViewContent}>
        <View style={styles.Group794}>
          <View style={styles.Frame1}>
            <View style={styles.Group1}>
              <Text style={styles.HelloDevs}>Hello, Devs</Text>
              <Text style={styles._14TasksToday}>14 tasks today</Text>
            </View>
            <Image
              style={styles.ProfileImage}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8bult9z5lx-1%3A13?alt=media&token=a6466223-6168-457c-b23f-c2748bcb0d09",
              }}
            />
          </View>
          <View style={styles.SearchFilterContainer}>
            <View style={styles.SearchBarContainer}>
              <Icon name="search" size={20} color="black" style={styles.SearchIcon} />
              <TextInput
                style={styles.SearchBox}
                onChangeText={setSearchQuery}
                value={searchQuery}
                placeholder="Search"
              />
            </View>
            <Image
              style={styles.Filter}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8bult9z5lx-1%3A31?alt=media&token=b1c835a2-aacf-4323-a440-5169b3102372",
              }}
            />
          </View>
          <Text style={styles.Categories}>Categories</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.HorizontalScrollView}>
            {categories.map((category) => (
              <View key={category.key} style={styles.CategoriesCard}>
                <View style={styles.Group7}>
                  <Text style={styles.CategoryTitle}>{category.title}</Text>
                  <Text style={styles.CategoryTasks}>{category.tasks}</Text>
                </View>
                <Image
                  style={styles.CategoryImage}
                  source={category.imageUri ? { uri: category.imageUri } : category.image}
                />
              </View>
            ))}
          </ScrollView>
          <Text style={styles.OngoingTask}>Ongoing Task</Text>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <View style={styles.OngoingTasksCards}>
                <Text style={styles.MobileAppDevelopment}>{item.task}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <View style={styles.ButtonContainer}>
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Task: {
    flex: 1,
    backgroundColor: "rgba(247,240,232,1)",
  },
  ScrollViewContent: {
    paddingBottom: 80, // Ensures there is space for the button
  },
  Group9: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  CategoriesCard: {
    marginRight: 10,
    padding: 14,
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
  },
  Group7: {
    marginBottom: 10,
  },
  CategoryTitle: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontWeight: "700",
  },
  CategoryTasks: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
  },
  CategoryImage: {
    width: 151,
    height: 132,
    borderRadius: 10,
  },
  Group794: {
    paddingHorizontal: 20,
  },
  Frame1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20, // Add marginTop to lower the component
  },
  Group1: {
    flex: 1,
  },
  HelloDevs: {
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    fontWeight: "700",
  },
  _14TasksToday: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontWeight: "500",
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  SearchFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  SearchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    height: 40,
    borderColor: "rgba(232,209,186,1)",
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: "rgba(251,249,247,1)",
    paddingHorizontal: 10,
  },
  SearchBox: {
    flex: 1,
    paddingHorizontal: 10,
  },
  SearchIcon: {
    marginRight: 10,
  },
  Filter: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  Categories: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  HorizontalScrollView: {
    marginBottom: 20,
  },
  OngoingTask: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  OngoingTasksCards: {
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(232,209,186,1)",
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
    marginBottom: 10,
  },
  MobileAppDevelopment: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontWeight: "700",
  },
  ButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(247,240,232,1)',
    borderRadius: 15,
    paddingVertical: 10,
  },
});
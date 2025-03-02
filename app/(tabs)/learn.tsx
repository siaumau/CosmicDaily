import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Search, BookOpen, Video, MessageCircle, ChevronRight } from 'lucide-react-native';
import GradientBackground from '../../components/GradientBackground';
import Card from '../../components/Card';
import Button from '../../components/Button';

export default function LearnScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    {
      title: 'Basics',
      icon: <BookOpen size={24} color="#BB86FC" />,
      items: [
        { title: 'Zodiac Signs', description: 'Learn about the 12 zodiac signs and their characteristics' },
        { title: 'Planets', description: 'Understand the role of planets in astrology' },
        { title: 'Houses', description: 'Discover the 12 houses and their meanings' },
      ],
    },
    {
      title: 'Intermediate',
      icon: <BookOpen size={24} color="#03DAC6" />,
      items: [
        { title: 'Aspects', description: 'Learn about planetary relationships and their interpretations' },
        { title: 'Transits', description: 'Understand how current planetary movements affect you' },
        { title: 'Progressions', description: 'Discover how your chart evolves over time' },
      ],
    },
    {
      title: 'Advanced',
      icon: <BookOpen size={24} color="#CF6679" />,
      items: [
        { title: 'Asteroids', description: 'Explore the role of asteroids in your chart' },
        { title: 'Fixed Stars', description: 'Learn about the influence of fixed stars in astrology' },
        { title: 'Predictive Techniques', description: 'Master advanced prediction methods' },
      ],
    },
  ];
  
  const featuredCourses = [
    {
      title: 'Astrology Fundamentals',
      instructor: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1518358246973-6d95efb7aa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lessons: 12,
      duration: '4 hours',
    },
    {
      title: 'Reading Birth Charts',
      instructor: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lessons: 8,
      duration: '3 hours',
    },
    {
      title: 'Predictive Astrology',
      instructor: 'Elena Rodriguez',
      image: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lessons: 10,
      duration: '5 hours',
    },
  ];
  
  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Learn Astrology</Text>
        </View>
        
        <View style={styles.searchContainer}>
          <Search size={20} color="rgba(255, 255, 255, 0.5)" style={styles.searchIcon} />
          <TouchableOpacity style={styles.searchInput}>
            <Text style={styles.searchPlaceholder}>Search topics, terms, or questions...</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={[styles.categoryTab, styles.activeCategoryTab]}>
            <BookOpen size={20} color="#BB86FC" />
            <Text style={styles.activeCategoryText}>Articles</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryTab}>
            <Video size={20} color="rgba(255, 255, 255, 0.7)" />
            <Text style={styles.categoryText}>Videos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryTab}>
            <MessageCircle size={20} color="rgba(255, 255, 255, 0.7)" />
            <Text style={styles.categoryText}>Ask AI</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.featuredContainer}>
          <Text style={styles.sectionTitle}>Featured Courses</Text>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredScroll}
          >
            {featuredCourses.map((course, index) => (
              <TouchableOpacity key={index} style={styles.courseCard}>
                <Image source={{ uri: course.image }} style={styles.courseImage} />
                <View style={styles.courseContent}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <Text style={styles.courseInstructor}>By {course.instructor}</Text>
                  <View style={styles.courseDetails}>
                    <Text style={styles.courseInfo}>{course.lessons} lessons</Text>
                    <Text style={styles.courseInfo}>{course.duration}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        {categories.map((category, categoryIndex) => (
          <View key={categoryIndex} style={styles.categorySection}>
            <View style={styles.categoryHeader}>
              {category.icon}
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </View>
            
            {category.items.map((item, itemIndex) => (
              <Card key={itemIndex} style={styles.topicCard} onPress={() => {}}>
                <View style={styles.topicContent}>
                  <Text style={styles.topicTitle}>{item.title}</Text>
                  <Text style={styles.topicDescription}>{item.description}</Text>
                </View>
                <ChevronRight size={20} color="#BB86FC" />
              </Card>
            ))}
          </View>
        ))}
        
        <Card style={styles.aiCard} gradient>
          <View style={styles.aiHeader}>
            <View style={styles.aiIconContainer}>
              <MessageCircle size={24} color="#fff" />
            </View>
            <View style={styles.aiContent}>
              <Text style={styles.aiTitle}>Ask the Astrology AI</Text>
              <Text style={styles.aiDescription}>
                Get personalized answers to your astrology questions
              </Text>
            </View>
          </View>
          
          <View style={styles.aiExamples}>
            <TouchableOpacity style={styles.aiExampleButton}>
              <Text style={styles.aiExampleText}>What does my Venus in Scorpio mean?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.aiExampleButton}>
              <Text style={styles.aiExampleText}>How does Saturn return affect me?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.aiExampleButton}>
              <Text style={styles.aiExampleText}>Explain retrograde planets</Text>
            </TouchableOpacity>
          </View>
          
          <Button
            title="Start Conversation"
            onPress={() => {}}
            variant="secondary"
            style={styles.aiButton}
          />
        </Card>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 100,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(187, 134, 252, 0.3)',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  searchPlaceholder: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  activeCategoryTab: {
    backgroundColor: 'rgba(187, 134, 252, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(187, 134, 252, 0.5)',
  },
  categoryText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginLeft: 8,
  },
  activeCategoryText: {
    fontSize: 14,
    color: '#BB86FC',
    fontWeight: '600',
    marginLeft: 8,
  },
  featuredContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  featuredScroll: {
    paddingHorizontal: 16,
  },
  courseCard: {
    width: 280,
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(187, 134, 252, 0.2)',
  },
  courseImage: {
    width: '100%',
    height: 140,
  },
  courseContent: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  courseInstructor: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 8,
  },
  courseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseInfo: {
    fontSize: 12,
    color: '#BB86FC',
  },
  categorySection: {
    marginBottom: 24,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  topicContent: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  topicDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  aiCard: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  aiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  aiIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(187, 134, 252, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  aiContent: {
    flex: 1,
  },
  aiTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  aiDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  aiExamples: {
    marginBottom: 16,
  },
  aiExampleButton: {
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(187, 134, 252, 0.2)',
  },
  aiExampleText: {
    fontSize: 14,
    color: '#fff',
  },
  aiButton: {
    alignSelf: 'center',
  },
});
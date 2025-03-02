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
      title: '基礎知識',
      icon: <BookOpen size={24} color="#BB86FC" />,
      items: [
        { title: '星座符號', description: '了解12星座的特質與含義' },
        { title: '行星解讀', description: '理解行星在占星學中的角色' },
        { title: '宮位詮釋', description: '探索12宮位及其意義' },
      ],
    },
    {
      title: '進階課程',
      icon: <BookOpen size={24} color="#03DAC6" />,
      items: [
        { title: '相位關係', description: '學習行星相位與其解讀方法' },
        { title: '運行影響', description: '了解當前行星運行對你的影響' },
        { title: '推運技巧', description: '探索星盤隨時間演變的規律' },
      ],
    },
    {
      title: '高級研究',
      icon: <BookOpen size={24} color="#CF6679" />,
      items: [
        { title: '小行星', description: '探索小行星在星盤中的作用' },
        { title: '固定星', description: '學習恆星在占星學中的影響' },
        { title: '預測技術', description: '掌握高級預測方法' },
      ],
    },
  ];

  const featuredCourses = [
    {
      title: '占星學基礎',
      instructor: '王曉明',
      image: 'https://images.unsplash.com/photo-1518358246973-6d95efb7aa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lessons: 12,
      duration: '4小時',
    },
    {
      title: '星盤解讀',
      instructor: '陳美玲',
      image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lessons: 8,
      duration: '3小時',
    },
    {
      title: '預測占星',
      instructor: '李雅婷',
      image: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      lessons: 10,
      duration: '5小時',
    },
  ];

  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>學習占星</Text>
        </View>

        <View style={styles.searchContainer}>
          <Search size={20} color="rgba(255, 255, 255, 0.5)" style={styles.searchIcon} />
          <TouchableOpacity style={styles.searchInput}>
            <Text style={styles.searchPlaceholder}>搜尋主題、術語或問題...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={[styles.categoryTab, styles.activeCategoryTab]}>
            <BookOpen size={20} color="#BB86FC" />
            <Text style={styles.activeCategoryText}>文章</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryTab}>
            <Video size={20} color="rgba(255, 255, 255, 0.7)" />
            <Text style={styles.categoryText}>影片</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryTab}>
            <MessageCircle size={20} color="rgba(255, 255, 255, 0.7)" />
            <Text style={styles.categoryText}>AI問答</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featuredContainer}>
          <Text style={styles.sectionTitle}>精選課程</Text>

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
                  <Text style={styles.courseInstructor}>講師：{course.instructor}</Text>
                  <View style={styles.courseDetails}>
                    <Text style={styles.courseInfo}>{course.lessons}課</Text>
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
              <Text style={styles.aiTitle}>諮詢占星AI</Text>
              <Text style={styles.aiDescription}>
                獲得針對你占星問題的個人化解答
              </Text>
            </View>
          </View>

          <View style={styles.aiExamples}>
            <TouchableOpacity style={styles.aiExampleButton}>
              <Text style={styles.aiExampleText}>我的金星在天蠍座代表什麼？</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.aiExampleButton}>
              <Text style={styles.aiExampleText}>土星回歸如何影響我？</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.aiExampleButton}>
              <Text style={styles.aiExampleText}>解釋行星逆行的意義</Text>
            </TouchableOpacity>
          </View>

          <Button
            title="開始對話"
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
    paddingTop: 20,
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

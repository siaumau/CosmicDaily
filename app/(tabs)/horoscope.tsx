import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar, ChevronLeft, ChevronRight, Bell } from 'lucide-react-native';
import GradientBackground from '../../components/GradientBackground';
import Card from '../../components/Card';
import Button from '../../components/Button';

export default function HoroscopeScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('zh-TW', options);
  };

  const changeDate = (days: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const categories = [
    { id: 'all', name: '整體運勢' },
    { id: 'love', name: '愛情運' },
    { id: 'career', name: '事業運' },
    { id: 'health', name: '健康運' },
    { id: 'money', name: '財運' },
  ];

  const renderRatingStars = (rating: number) => {
    return (
      <View style={styles.ratingContainer}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Text
            key={i}
            style={[
              styles.ratingStar,
              { color: i < rating ? '#BB86FC' : 'rgba(255, 255, 255, 0.3)' },
            ]}
          >
            ★
          </Text>
        ))}
      </View>
    );
  };

  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>每日運勢</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={20} color="#BB86FC" />
          </TouchableOpacity>
        </View>

        <View style={styles.dateSelector}>
          <TouchableOpacity onPress={() => changeDate(-1)}>
            <ChevronLeft size={24} color="#BB86FC" />
          </TouchableOpacity>
          <View style={styles.dateContainer}>
            <Calendar size={16} color="#BB86FC" style={styles.calendarIcon} />
            <Text style={styles.dateText}>{formatDate(selectedDate)}</Text>
          </View>
          <TouchableOpacity onPress={() => changeDate(1)}>
            <ChevronRight size={24} color="#BB86FC" />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category.id && styles.selectedCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Card style={styles.summaryCard} gradient>
          <Text style={styles.summaryTitle}>今日星象概況</Text>
          <View style={styles.divider} />

          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>整體運勢</Text>
            {renderRatingStars(4)}
          </View>

          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>愛情運勢</Text>
            {renderRatingStars(3)}
          </View>

          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>事業運勢</Text>
            {renderRatingStars(5)}
          </View>

          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>健康運勢</Text>
            {renderRatingStars(4)}
          </View>

          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>財運運勢</Text>
            {renderRatingStars(3)}
          </View>
        </Card>

        <Card style={styles.horoscopeCard}>
          <Text style={styles.horoscopeTitle}>獅子座每日運勢</Text>
          <Text style={styles.horoscopeDate}>7月23日 - 8月22日</Text>

          <Text style={styles.horoscopeParagraph}>
            今天的星象排列為你帶來創造力和領導機會的能量，獅子座。你的守護星太陽與木星形成和諧相位，擴大你在職場上的影響力和能見度。
          </Text>

          <Text style={styles.horoscopeParagraph}>
            這是展示才能、提出想法或在重要項目中主動出擊的絕佳時機。你的天然魅力得到增強，更容易說服他人支持你的理念。
          </Text>

          <Text style={styles.horoscopeParagraph}>
            在人際關係方面，慷慨地表達你的感受，但要注意不要主導對話。雙魚座的月亮柔化了你的表達方式，如果你能保持開放和接納的態度，將有助於建立更深層的情感連結。
          </Text>

          <Text style={styles.horoscopeParagraph}>
            在健康方面，建議關注強化心臟和脊椎的活動。今天進行適度的有氧運動會特別有益。
          </Text>
        </Card>

        <Card style={styles.planetaryCard}>
          <Text style={styles.planetaryTitle}>重要星象影響</Text>

          <View style={styles.planetaryItem}>
            <View style={styles.planetSymbolContainer}>
              <Text style={styles.planetSymbol}>☉</Text>
            </View>
            <View style={styles.planetaryContent}>
              <Text style={styles.planetaryName}>太陽在獅子座</Text>
              <Text style={styles.planetaryDescription}>
                提升你的自信心和創造力表現
              </Text>
            </View>
          </View>

          <View style={styles.planetaryItem}>
            <View style={styles.planetSymbolContainer}>
              <Text style={styles.planetSymbol}>☿</Text>
            </View>
            <View style={styles.planetaryContent}>
              <Text style={styles.planetaryName}>水星在處女座</Text>
              <Text style={styles.planetaryDescription}>
                增強你的分析思維和溝通能力
              </Text>
            </View>
          </View>

          <View style={styles.planetaryItem}>
            <View style={styles.planetSymbolContainer}>
              <Text style={styles.planetSymbol}>☽</Text>
            </View>
            <View style={styles.planetaryContent}>
              <Text style={styles.planetaryName}>月亮在雙魚座</Text>
              <Text style={styles.planetaryDescription}>
                提高你的直覺力和情感敏感度
              </Text>
            </View>
          </View>
        </Card>

        <Card style={styles.adviceCard}>
          <Text style={styles.adviceTitle}>今日建議</Text>
          <Text style={styles.adviceText}>
            今天要用心帶領，獅子座。你天生的溫暖和慷慨會為你開啟大門並加強人際關係。花時間欣賞周圍的美好，並對生活中的豐盛心存感激。
          </Text>
          <Button
            title="獲取個人運勢解讀"
            onPress={() => {}}
            style={styles.adviceButton}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  calendarIcon: {
    marginRight: 8,
  },
  dateText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    marginRight: 8,
  },
  selectedCategory: {
    backgroundColor: 'rgba(187, 134, 252, 0.3)',
  },
  categoryText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  selectedCategoryText: {
    color: '#BB86FC',
    fontWeight: '600',
  },
  summaryCard: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 12,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  ratingLabel: {
    fontSize: 14,
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingStar: {
    fontSize: 16,
    marginLeft: 2,
  },
  horoscopeCard: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  horoscopeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  horoscopeDate: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 16,
  },
  horoscopeParagraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#fff',
    marginBottom: 12,
  },
  planetaryCard: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  planetaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  planetaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  planetSymbolContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(187, 134, 252, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  planetSymbol: {
    fontSize: 24,
    color: '#BB86FC',
  },
  planetaryContent: {
    flex: 1,
  },
  planetaryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  planetaryDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  adviceCard: {
    marginHorizontal: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  adviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  adviceText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  adviceButton: {
    minWidth: 200,
  },
});

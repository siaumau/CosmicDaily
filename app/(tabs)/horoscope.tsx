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
    return date.toLocaleDateString('en-US', options);
  };
  
  const changeDate = (days: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'love', name: 'Love' },
    { id: 'career', name: 'Career' },
    { id: 'health', name: 'Health' },
    { id: 'money', name: 'Money' },
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
          <Text style={styles.title}>Daily Horoscope</Text>
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
          <Text style={styles.summaryTitle}>Today's Cosmic Weather</Text>
          <View style={styles.divider} />
          
          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>Overall</Text>
            {renderRatingStars(4)}
          </View>
          
          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>Love</Text>
            {renderRatingStars(3)}
          </View>
          
          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>Career</Text>
            {renderRatingStars(5)}
          </View>
          
          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>Health</Text>
            {renderRatingStars(4)}
          </View>
          
          <View style={styles.ratingRow}>
            <Text style={styles.ratingLabel}>Money</Text>
            {renderRatingStars(3)}
          </View>
        </Card>
        
        <Card style={styles.horoscopeCard}>
          <Text style={styles.horoscopeTitle}>Leo Daily Horoscope</Text>
          <Text style={styles.horoscopeDate}>July 23 - August 22</Text>
          
          <Text style={styles.horoscopeParagraph}>
            Today's planetary alignment brings a surge of creative energy and leadership opportunities your way, Leo. The Sun, your ruling planet, forms a harmonious trine with Jupiter, expanding your influence and visibility in professional settings.
          </Text>
          
          <Text style={styles.horoscopeParagraph}>
            This is an excellent day to showcase your talents, pitch ideas, or take the initiative on projects that matter to you. Your natural charisma is enhanced, making it easier to win others to your cause.
          </Text>
          
          <Text style={styles.horoscopeParagraph}>
            In your personal relationships, express your feelings generously but be mindful of dominating conversations. The Moon in Pisces softens your approach, allowing for deeper emotional connections if you remain receptive to others' needs.
          </Text>
          
          <Text style={styles.horoscopeParagraph}>
            Health-wise, focus on activities that strengthen your heart and spine. A moderate workout that gets your blood pumping would be beneficial today.
          </Text>
        </Card>
        
        <Card style={styles.planetaryCard}>
          <Text style={styles.planetaryTitle}>Key Planetary Influences</Text>
          
          <View style={styles.planetaryItem}>
            <View style={styles.planetSymbolContainer}>
              <Text style={styles.planetSymbol}>☉</Text>
            </View>
            <View style={styles.planetaryContent}>
              <Text style={styles.planetaryName}>Sun in Leo</Text>
              <Text style={styles.planetaryDescription}>
                Boosts your confidence and creative expression
              </Text>
            </View>
          </View>
          
          <View style={styles.planetaryItem}>
            <View style={styles.planetSymbolContainer}>
              <Text style={styles.planetSymbol}>☿</Text>
            </View>
            <View style={styles.planetaryContent}>
              <Text style={styles.planetaryName}>Mercury in Virgo</Text>
              <Text style={styles.planetaryDescription}>
                Sharpens your analytical thinking and communication
              </Text>
            </View>
          </View>
          
          <View style={styles.planetaryItem}>
            <View style={styles.planetSymbolContainer}>
              <Text style={styles.planetSymbol}>☽</Text>
            </View>
            <View style={styles.planetaryContent}>
              <Text style={styles.planetaryName}>Moon in Pisces</Text>
              <Text style={styles.planetaryDescription}>
                Heightens your intuition and emotional sensitivity
              </Text>
            </View>
          </View>
        </Card>
        
        <Card style={styles.adviceCard}>
          <Text style={styles.adviceTitle}>Today's Advice</Text>
          <Text style={styles.adviceText}>
            Lead with your heart today, Leo. Your natural warmth and generosity will open doors and strengthen bonds. Take time to appreciate beauty in your surroundings and express gratitude for the abundance in your life.
          </Text>
          <Button
            title="Get Personalized Reading"
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
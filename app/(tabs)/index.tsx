import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Calendar, Star, ChevronRight, Sparkles } from 'lucide-react-native';
import GradientBackground from '../../components/GradientBackground';
import Card from '../../components/Card';
import Button from '../../components/Button';
import AstrologyChart from '../../components/AstrologyChart';
import HoroscopeCard from '../../components/HoroscopeCard';

export default function HomeScreen() {
  const router = useRouter();
  const [currentProfile, setCurrentProfile] = useState('我的星盤');

  const profiles = [
    { name: '我的星盤', date: '1990年5月15日' },
    { name: '伴侶', date: '1988年10月23日' },
    { name: '朋友', date: '1992年1月5日' },
  ];

  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>星座占卜</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        <Card style={styles.todayCard} gradient>
          <View style={styles.todayHeader}>
            <View>
              <Text style={styles.todayTitle}>今日宇宙能量</Text>
              <Text style={styles.todayDate}>2025年6月15日</Text>
            </View>
            <Calendar color="#BB86FC" size={24} />
          </View>

          <View style={styles.divider} />

          <View style={styles.planetaryEvent}>
            <Sparkles color="#03DAC6" size={20} />
            <Text style={styles.eventText}>
              <Text style={styles.eventHighlight}>水星</Text> 進入{' '}
              <Text style={styles.eventHighlight}>雙子座</Text> - 溝通順暢
            </Text>
          </View>

          <View style={styles.planetaryEvent}>
            <Sparkles color="#BB86FC" size={20} />
            <Text style={styles.eventText}>
              <Text style={styles.eventHighlight}>滿月</Text> 在{' '}
              <Text style={styles.eventHighlight}>射手座</Text> - 尋求真理與冒險
            </Text>
          </View>

          <Button
            title="查看完整每日運勢"
            onPress={() => router.push('/(tabs)/horoscope')}
            variant="outline"
            style={styles.todayButton}
          />
        </Card>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>你的本命星盤</Text>
          <View style={styles.profileSelector}>
            {profiles.map((profile) => (
              <TouchableOpacity
                key={profile.name}
                style={[
                  styles.profileTab,
                  currentProfile === profile.name && styles.activeProfileTab,
                ]}
                onPress={() => setCurrentProfile(profile.name)}
              >
                <Text
                  style={[
                    styles.profileTabText,
                    currentProfile === profile.name && styles.activeProfileTabText,
                  ]}
                >
                  {profile.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Card style={styles.chartCard}>
          <AstrologyChart simplified />
          <Button
            title="查看完整星盤"
            onPress={() => router.push('/(tabs)/natal-chart')}
            icon={<Star size={16} color="#fff" />}
            style={styles.chartButton}
          />
        </Card>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>每日運勢</Text>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => router.push('/(tabs)/horoscope')}
          >
            <Text style={styles.viewAllText}>查看全部</Text>
            <ChevronRight size={16} color="#BB86FC" />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horoscopeScroll}
        >
          <HoroscopeCard
            sign="獅子座"
            date="7月23日 - 8月22日"
            description="今天帶來創造力和領導機會。大膽表達自己，在重要項目中主動出擊。"
            rating={4}
            imageUrl="https://images.unsplash.com/photo-1534375971785-5c1826f739d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            onPress={() => {}}
          />

          <HoroscopeCard
            sign="處女座"
            date="8月23日 - 9月22日"
            description="今天注重組織和自我照顧。你的細心會得到同事和親人的讚賞。"
            rating={3}
            imageUrl="https://images.unsplash.com/photo-1572506745854-5a8a2c8c17b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            onPress={() => {}}
          />
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>學習占星</Text>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => router.push('/(tabs)/learn')}
          >
            <Text style={styles.viewAllText}>查看全部</Text>
            <ChevronRight size={16} color="#BB86FC" />
          </TouchableOpacity>
        </View>

        <View style={styles.learningCards}>
          <TouchableOpacity
            style={[styles.learningCard, styles.learningCardLeft]}
            onPress={() => router.push('/(tabs)/learn')}
          >
            <Text style={styles.learningCardTitle}>行星</Text>
            <Text style={styles.learningCardSubtitle}>宇宙影響力</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.learningCard, styles.learningCardRight]}
            onPress={() => router.push('/(tabs)/learn')}
          >
            <Text style={styles.learningCardTitle}>宮位</Text>
            <Text style={styles.learningCardSubtitle}>人生領域</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.learningCards}>
          <TouchableOpacity
            style={[styles.learningCard, styles.learningCardLeft]}
            onPress={() => router.push('/(tabs)/learn')}
          >
            <Text style={styles.learningCardTitle}>相位</Text>
            <Text style={styles.learningCardSubtitle}>行星關係</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.learningCard, styles.learningCardRight]}
            onPress={() => router.push('/(tabs)/learn')}
          >
            <Text style={styles.learningCardTitle}>運行</Text>
            <Text style={styles.learningCardSubtitle}>當前影響</Text>
          </TouchableOpacity>
        </View>
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
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#BB86FC',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  todayCard: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  todayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todayTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  todayDate: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 12,
  },
  planetaryEvent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  eventText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#fff',
    flex: 1,
  },
  eventHighlight: {
    color: '#BB86FC',
    fontWeight: '600',
  },
  todayButton: {
    marginTop: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  profileSelector: {
    flexDirection: 'row',
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 20,
    padding: 4,
  },
  profileTab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  activeProfileTab: {
    backgroundColor: 'rgba(187, 134, 252, 0.3)',
  },
  profileTabText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  activeProfileTabText: {
    color: '#BB86FC',
    fontWeight: '600',
  },
  chartCard: {
    marginHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 24,
  },
  chartButton: {
    marginTop: 16,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: '#BB86FC',
    marginRight: 4,
  },
  horoscopeScroll: {
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 8,
  },
  learningCards: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  learningCard: {
    flex: 1,
    height: 100,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'flex-end',
  },
  learningCardLeft: {
    marginRight: 8,
    backgroundColor: 'rgba(3, 218, 198, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(3, 218, 198, 0.3)',
  },
  learningCardRight: {
    marginLeft: 8,
    backgroundColor: 'rgba(187, 134, 252, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(187, 134, 252, 0.3)',
  },
  learningCardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  learningCardSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
});

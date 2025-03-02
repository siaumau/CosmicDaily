import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Heart, Plus, ChevronDown } from 'lucide-react-native';
import GradientBackground from '../../components/GradientBackground';
import Card from '../../components/Card';
import Button from '../../components/Button';
import CompatibilityMeter from '../../components/CompatibilityMeter';
import DatePicker from '../../components/DatePicker';

export default function CompatibilityScreen() {
  const [person1Date, setPerson1Date] = useState(new Date(1990, 4, 15));
  const [person2Date, setPerson2Date] = useState(new Date(1992, 9, 23));
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>合盤分析</Text>
        </View>

        <View style={styles.profilesContainer}>
          <View style={styles.profileCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>你</Text>
            <Text style={styles.profileSign}>獅子座</Text>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateButtonText}>1990年5月15日</Text>
              <ChevronDown size={16} color="#BB86FC" />
            </TouchableOpacity>
          </View>

          <View style={styles.heartContainer}>
            <Heart size={32} color="#BB86FC" />
          </View>

          <View style={styles.profileCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>伴侶</Text>
            <Text style={styles.profileSign}>天蠍座</Text>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateButtonText}>1992年10月23日</Text>
              <ChevronDown size={16} color="#BB86FC" />
            </TouchableOpacity>
          </View>
        </View>

        <Card style={styles.scoreCard} gradient>
          <Text style={styles.scoreTitle}>整體匹配度</Text>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreValue}>78%</Text>
          </View>
          <Text style={styles.scoreDescription}>
            你們的連結具有強大潛力，但需要克服一些挑戰
          </Text>
        </Card>

        <Card style={styles.detailsCard}>
          <Text style={styles.detailsTitle}>匹配度詳情</Text>

          <CompatibilityMeter percentage={85} label="浪漫與激情" />
          <CompatibilityMeter percentage={72} label="溝通交流" />
          <CompatibilityMeter percentage={65} label="信任與忠誠" />
          <CompatibilityMeter percentage={90} label="共同價值觀" />
          <CompatibilityMeter percentage={78} label="長期發展潛力" />
        </Card>

        <Card style={styles.analysisCard}>
          <Text style={styles.analysisTitle}>關係分析</Text>

          <Text style={styles.analysisParagraph}>
            獅子座和天蠍座會創造出充滿激情和強烈的關係。你的獅子座太陽帶來溫暖、創造力和渴望被欣賞的特質，而你伴侶的天蠍座能量則增添深度、強度和情感智慧。
          </Text>

          <Text style={styles.analysisParagraph}>
            你們關係最強大的特點是彼此之間的磁性吸引和熱情能量。兩個星座都屬於固定星座，一旦建立關係就會形成牢固的紐帶。你的獅子座慷慨與天蠍座的忠誠相輔相成，形成互相尊重的基礎。
          </Text>

          <Text style={styles.analysisParagraph}>
            挑戰可能來自於獅子座對關注的需求與天蠍座較為私密的性格之間的衝突。獅子座直接的處事方式可能與天蠍座更具策略性且有時保密的溝通方式產生摩擦。保持透明度並尊重彼此的情感需求將是關鍵。
          </Text>

          <Text style={styles.analysisSubtitle}>重要行星連結</Text>

          <View style={styles.aspectItem}>
            <View style={styles.aspectSymbolContainer}>
              <Text style={styles.aspectSymbol}>☉ ▵ ☽</Text>
            </View>
            <View style={styles.aspectContent}>
              <Text style={styles.aspectName}>你的太陽三分伴侶的月亮</Text>
              <Text style={styles.aspectDescription}>
                創造自然的情感和諧與相互理解
              </Text>
            </View>
          </View>

          <View style={styles.aspectItem}>
            <View style={styles.aspectSymbolContainer}>
              <Text style={styles.aspectSymbol}>♀ □ ♂</Text>
            </View>
            <View style={styles.aspectContent}>
              <Text style={styles.aspectName}>你的金星四分伴侶的火星</Text>
              <Text style={styles.aspectDescription}>
                產生強烈的吸引力，但也可能帶來衝突
              </Text>
            </View>
          </View>

          <View style={styles.aspectItem}>
            <View style={styles.aspectSymbolContainer}>
              <Text style={styles.aspectSymbol}>☿ ☌ ☿</Text>
            </View>
            <View style={styles.aspectContent}>
              <Text style={styles.aspectName}>水星合相</Text>
              <Text style={styles.aspectDescription}>
                表示思維模式相似，溝通順暢
              </Text>
            </View>
          </View>
        </Card>

        <Card style={styles.adviceCard}>
          <Text style={styles.adviceTitle}>關係建議</Text>
          <Text style={styles.adviceText}>
            要讓這段獅子座-天蠍座的關係蓬勃發展，需要平衡獅子座對讚賞的需求和天蠍座對情感深度的渴望。為開放表達和私密親密都創造空間。尊重彼此對忠誠和承諾的不同理解方式。
          </Text>
          <Button
            title="獲取詳細合盤報告"
            onPress={() => {}}
            style={styles.adviceButton}
          />
        </Card>

        <View style={styles.otherMatchesContainer}>
          <Text style={styles.otherMatchesTitle}>其他配對</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.matchesScroll}
          >
            <TouchableOpacity style={styles.matchCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }}
                style={styles.matchImage}
              />
              <Text style={styles.matchName}>莎拉</Text>
              <Text style={styles.matchSign}>天秤座</Text>
              <Text style={styles.matchScore}>82%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.matchCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }}
                style={styles.matchImage}
              />
              <Text style={styles.matchName}>小明</Text>
              <Text style={styles.matchSign}>雙子座</Text>
              <Text style={styles.matchScore}>75%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.matchCard, styles.addMatchCard]}>
              <View style={styles.addMatchCircle}>
                <Plus size={24} color="#BB86FC" />
              </View>
              <Text style={styles.addMatchText}>新增配對</Text>
            </TouchableOpacity>
          </ScrollView>
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
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  profilesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  profileCard: {
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#BB86FC',
    marginBottom: 8,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  profileSign: {
    fontSize: 14,
    color: '#BB86FC',
    marginBottom: 8,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  dateButtonText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginRight: 4,
  },
  heartContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  scoreCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(187, 134, 252, 0.2)',
    borderWidth: 2,
    borderColor: '#BB86FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  scoreDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  detailsCard: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  analysisCard: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  analysisParagraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#fff',
    marginBottom: 12,
  },
  analysisSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginTop: 8,
    marginBottom: 12,
  },
  aspectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  aspectSymbolContainer: {
    width: 50,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(187, 134, 252, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  aspectSymbol: {
    fontSize: 16,
    color: '#BB86FC',
  },
  aspectContent: {
    flex: 1,
  },
  aspectName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  aspectDescription: {
    fontSize: 12,
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
    minWidth: 240,
  },
  otherMatchesContainer: {
    marginBottom: 24,
  },
  otherMatchesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  matchesScroll: {
    paddingHorizontal: 16,
  },
  matchCard: {
    width: 100,
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(187, 134, 252, 0.2)',
  },
  matchImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  matchName: {
    fontSize: 14,
     fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  matchSign: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  matchScore: {
    fontSize: 14,
    fontWeight: '700',
    color: '#BB86FC',
  },
  addMatchCard: {
    justifyContent: 'center',
  },
  addMatchCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(187, 134, 252, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  addMatchText: {
    fontSize: 14,
    color: '#BB86FC',
  },
});

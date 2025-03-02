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
          <Text style={styles.title}>Compatibility</Text>
        </View>
        
        <View style={styles.profilesContainer}>
          <View style={styles.profileCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>You</Text>
            <Text style={styles.profileSign}>Leo</Text>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateButtonText}>May 15, 1990</Text>
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
            <Text style={styles.profileName}>Partner</Text>
            <Text style={styles.profileSign}>Scorpio</Text>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateButtonText}>Oct 23, 1992</Text>
              <ChevronDown size={16} color="#BB86FC" />
            </TouchableOpacity>
          </View>
        </View>
        
        <Card style={styles.scoreCard} gradient>
          <Text style={styles.scoreTitle}>Overall Compatibility</Text>
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreValue}>78%</Text>
          </View>
          <Text style={styles.scoreDescription}>
            Your connection has strong potential with some challenges to navigate
          </Text>
        </Card>
        
        <Card style={styles.detailsCard}>
          <Text style={styles.detailsTitle}>Compatibility Details</Text>
          
          <CompatibilityMeter percentage={85} label="Romance & Passion" />
          <CompatibilityMeter percentage={72} label="Communication" />
          <CompatibilityMeter percentage={65} label="Trust & Loyalty" />
          <CompatibilityMeter percentage={90} label="Shared Values" />
          <CompatibilityMeter percentage={78} label="Long-term Potential" />
        </Card>
        
        <Card style={styles.analysisCard}>
          <Text style={styles.analysisTitle}>Relationship Analysis</Text>
          
          <Text style={styles.analysisParagraph}>
            Leo and Scorpio create a passionate and intense relationship. Your Leo sun brings warmth, creativity, and a desire for admiration, while your partner's Scorpio energy adds depth, intensity, and emotional intelligence.
          </Text>
          
          <Text style={styles.analysisParagraph}>
            The strongest aspect of your connection is the magnetic attraction and passionate energy between you. Both signs are fixed in nature, creating a strong bond once established. Your Leo generosity complements Scorpio's loyalty, forming a foundation of mutual respect.
          </Text>
          
          <Text style={styles.analysisParagraph}>
            Challenges may arise from Leo's need for attention conflicting with Scorpio's private nature. Leo's straightforward approach might clash with Scorpio's more strategic and sometimes secretive communication style. Working on transparency and respecting each other's emotional needs will be key.
          </Text>
          
          <Text style={styles.analysisSubtitle}>Key Planetary Connections</Text>
          
          <View style={styles.aspectItem}>
            <View style={styles.aspectSymbolContainer}>
              <Text style={styles.aspectSymbol}>☉ ▵ ☽</Text>
            </View>
            <View style={styles.aspectContent}>
              <Text style={styles.aspectName}>Your Sun trine Partner's Moon</Text>
              <Text style={styles.aspectDescription}>
                Creates natural emotional harmony and mutual understanding
              </Text>
            </View>
          </View>
          
          <View style={styles.aspectItem}>
            <View style={styles.aspectSymbolContainer}>
              <Text style={styles.aspectSymbol}>♀ □ ♂</Text>
            </View>
            <View style={styles.aspectContent}>
              <Text style={styles.aspectName}>Your Venus square Partner's Mars</Text>
              <Text style={styles.aspectDescription}>
                Generates passionate attraction with potential for conflict
              </Text>
            </View>
          </View>
          
          <View style={styles.aspectItem}>
            <View style={styles.aspectSymbolContainer}>
              <Text style={styles.aspectSymbol}>☿ ☌ ☿</Text>
            </View>
            <View style={styles.aspectContent}>
              <Text style={styles.aspectName}>Mercury Conjunction</Text>
              <Text style={styles.aspectDescription}>
                Indicates similar thinking patterns and easy communication
              </Text>
            </View>
          </View>
        </Card>
        
        <Card style={styles.adviceCard}>
          <Text style={styles.adviceTitle}>Relationship Advice</Text>
          <Text style={styles.adviceText}>
            For this Leo-Scorpio connection to thrive, focus on balancing Leo's need for appreciation with Scorpio's desire for emotional depth. Create space for both open expression and private intimacy. Respect each other's different approaches to loyalty and commitment.
          </Text>
          <Button
            title="Get Detailed Compatibility Report"
            onPress={() => {}}
            style={styles.adviceButton}
          />
        </Card>
        
        <View style={styles.otherMatchesContainer}>
          <Text style={styles.otherMatchesTitle}>Other Matches</Text>
          
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
              <Text style={styles.matchName}>Sarah</Text>
              <Text style={styles.matchSign}>Libra</Text>
              <Text style={styles.matchScore}>82%</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.matchCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }}
                style={styles.matchImage}
              />
              <Text style={styles.matchName}>Michael</Text>
              <Text style={styles.matchSign}>Gemini</Text>
              <Text style={styles.matchScore}>75%</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.matchCard, styles.addMatchCard]}>
              <View style={styles.addMatchCircle}>
                <Plus size={24} color="#BB86FC" />
              </View>
              <Text style={styles.addMatchText}>Add New</Text>
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
    paddingTop: 60,
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
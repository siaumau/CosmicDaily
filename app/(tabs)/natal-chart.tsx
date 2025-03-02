import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronDown, Info, Download, Share2 } from 'lucide-react-native';
import GradientBackground from '../../components/GradientBackground';
import AstrologyChart from '../../components/AstrologyChart';
import Card from '../../components/Card';
import Button from '../../components/Button';

export default function NatalChartScreen() {
  const [activeTab, setActiveTab] = useState('planets');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'planets':
        return <PlanetsTab />;
      case 'houses':
        return <HousesTab />;
      case 'aspects':
        return <AspectsTab />;
      default:
        return <PlanetsTab />;
    }
  };
  
  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Birth Chart</Text>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.iconButton}>
              <Info size={20} color="#BB86FC" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Download size={20} color="#BB86FC" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Share2 size={20} color="#BB86FC" />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.chartSelector}>
          <TouchableOpacity style={styles.chartSelectorButton}>
            <Text style={styles.chartSelectorText}>My Chart</Text>
            <Text style={styles.chartSelectorDate}>May 15, 1990 • 8:30 PM</Text>
            <ChevronDown size={16} color="#BB86FC" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.chartContainer}>
          <AstrologyChart />
        </View>
        
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'planets' && styles.activeTab]}
            onPress={() => setActiveTab('planets')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'planets' && styles.activeTabText,
              ]}
            >
              Planets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'houses' && styles.activeTab]}
            onPress={() => setActiveTab('houses')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'houses' && styles.activeTabText,
              ]}
            >
              Houses
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'aspects' && styles.activeTab]}
            onPress={() => setActiveTab('aspects')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'aspects' && styles.activeTabText,
              ]}
            >
              Aspects
            </Text>
          </TouchableOpacity>
        </View>
        
        {renderTabContent()}
        
        <Card style={styles.premiumCard} gradient>
          <Text style={styles.premiumTitle}>Get Professional Analysis</Text>
          <Text style={styles.premiumDescription}>
            Unlock detailed interpretations of your birth chart from professional astrologers.
          </Text>
          <Button
            title="Upgrade to Premium"
            onPress={() => {}}
            style={styles.premiumButton}
          />
        </Card>
      </ScrollView>
    </GradientBackground>
  );
}

function PlanetsTab() {
  const planets = [
    {
      name: 'Sun',
      symbol: '☉',
      sign: 'Leo',
      degree: '23°',
      house: '10th House',
      description:
        'Your Sun in Leo gives you a confident, creative, and generous personality. You naturally seek to express yourself and shine in your career.',
    },
    {
      name: 'Moon',
      symbol: '☽',
      sign: 'Pisces',
      degree: '15°',
      house: '4th House',
      description:
        'Your Moon in Pisces creates an emotionally sensitive, intuitive, and compassionate nature. You have a rich inner world and deep connection to home and family.',
    },
    {
      name: 'Mercury',
      symbol: '☿',
      sign: 'Virgo',
      degree: '8°',
      house: '11th House',
      description:
        'Your Mercury in Virgo gives you a precise, analytical, and detail-oriented mind. You communicate effectively in group settings and organizations.',
    },
    {
      name: 'Venus',
      symbol: '♀',
      sign: 'Libra',
      degree: '2°',
      house: '12th House',
      description:
        'Your Venus in Libra brings harmony, diplomacy, and aesthetic appreciation to your relationships. You may have hidden romantic tendencies or spiritual connections.',
    },
    {
      name: 'Mars',
      symbol: '♂',
      sign: 'Aries',
      degree: '19°',
      house: '5th House',
      description:
        'Your Mars in Aries provides strong initiative, courage, and competitive drive. You express this energy through creative pursuits and romantic endeavors.',
    },
  ];
  
  return (
    <View style={styles.tabContent}>
      {planets.map((planet, index) => (
        <Card key={index} style={styles.planetCard}>
          <View style={styles.planetHeader}>
            <View style={styles.planetSymbolContainer}>
              <Text style={styles.planetSymbol}>{planet.symbol}</Text>
            </View>
            <View style={styles.planetInfo}>
              <Text style={styles.planetName}>{planet.name}</Text>
              <Text style={styles.planetPosition}>
                {planet.sign} {planet.degree} • {planet.house}
              </Text>
            </View>
          </View>
          <Text style={styles.planetDescription}>{planet.description}</Text>
        </Card>
      ))}
    </View>
  );
}

function HousesTab() {
  const houses = [
    {
      number: 1,
      name: 'First House',
      sign: 'Virgo',
      description:
        'Your Ascendant in Virgo gives you an analytical, practical, and detail-oriented approach to life. You appear organized, helpful, and modest to others.',
    },
    {
      number: 4,
      name: 'Fourth House',
      sign: 'Sagittarius',
      description:
        'With Sagittarius on your 4th house cusp, your home and family life is characterized by expansion, optimism, and a love of freedom. You may have a multicultural background or love to travel.',
    },
    {
      number: 7,
      name: 'Seventh House',
      sign: 'Pisces',
      description:
        'Pisces on your 7th house cusp indicates partnerships that are compassionate, intuitive, and sometimes idealistic. You seek spiritual or emotional connection in relationships.',
    },
    {
      number: 10,
      name: 'Tenth House',
      sign: 'Gemini',
      description:
        'With Gemini on your 10th house cusp, your career path may involve communication, versatility, and intellectual pursuits. You may have multiple career paths or change directions.',
    },
  ];
  
  return (
    <View style={styles.tabContent}>
      {houses.map((house, index) => (
        <Card key={index} style={styles.houseCard}>
          <View style={styles.houseHeader}>
            <View style={styles.houseNumberContainer}>
              <Text style={styles.houseNumber}>{house.number}</Text>
            </View>
            <View style={styles.houseInfo}>
              <Text style={styles.houseName}>{house.name}</Text>
              <Text style={styles.houseSign}>{house.sign}</Text>
            </View>
          </View>
          <Text style={styles.houseDescription}>{house.description}</Text>
        </Card>
      ))}
    </View>
  );
}

function AspectsTab() {
  const aspects = [
    {
      planets: 'Sun trine Moon',
      type: 'Trine (120°)',
      description:
        'This harmonious aspect between your core identity and emotional nature creates inner harmony and emotional balance. Your conscious goals and unconscious needs work together.',
    },
    {
      planets: 'Mercury square Mars',
      type: 'Square (90°)',
      description:
        'This challenging aspect can create tension between your thinking and your actions. You may be quick to argue or debate, but this energy can also fuel intellectual courage.',
    },
    {
      planets: 'Venus conjunct Jupiter',
      type: 'Conjunction (0°)',
      description:
        'This beneficial aspect amplifies your capacity for love, beauty, and abundance. You have natural charm, generosity, and optimism in relationships and finances.',
    },
    {
      planets: 'Mars opposition Saturn',
      type: 'Opposition (180°)',
      description:
        'This challenging aspect creates tension between your drive for action and your sense of limitation. Learning to balance assertiveness with patience is your key growth area.',
    },
  ];
  
  return (
    <View style={styles.tabContent}>
      {aspects.map((aspect, index) => (
        <Card key={index} style={styles.aspectCard}>
          <Text style={styles.aspectTitle}>{aspect.planets}</Text>
          <Text style={styles.aspectType}>{aspect.type}</Text>
          <Text style={styles.aspectDescription}>{aspect.description}</Text>
        </Card>
      ))}
    </View>
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
  headerButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  chartSelector: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  chartSelectorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(187, 134, 252, 0.3)',
  },
  chartSelectorText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
  },
  chartSelectorDate: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginRight: 8,
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: 'rgba(187, 134, 252, 0.3)',
  },
  tabText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  activeTabText: {
    color: '#BB86FC',
    fontWeight: '600',
  },
  tabContent: {
    paddingHorizontal: 16,
  },
  planetCard: {
    marginBottom: 12,
  },
  planetHeader: {
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
  planetInfo: {
    flex: 1,
  },
  planetName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  planetPosition: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  planetDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#fff',
  },
  houseCard: {
    marginBottom: 12,
  },
  houseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  houseNumberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(3, 218, 198, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  houseNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#03DAC6',
  },
  houseInfo: {
    flex: 1,
  },
  houseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  houseSign: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  houseDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#fff',
  },
  aspectCard: {
    marginBottom: 12,
  },
  aspectTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  aspectType: {
    fontSize: 14,
    color: '#BB86FC',
    marginBottom: 8,
  },
  aspectDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#fff',
  },
  premiumCard: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  premiumTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  premiumDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 16,
    textAlign: 'center',
  },
  premiumButton: {
    minWidth: 200,
  },
});
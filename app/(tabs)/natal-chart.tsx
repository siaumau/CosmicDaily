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
          <Text style={styles.title}>本命星盤</Text>
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
            <Text style={styles.chartSelectorText}>我的星盤</Text>
            <Text style={styles.chartSelectorDate}>1990年5月15日 • 晚上8:30</Text>
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
              行星
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
              宮位
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
              相位
            </Text>
          </TouchableOpacity>
        </View>

        {renderTabContent()}

        <Card style={styles.premiumCard} gradient>
          <Text style={styles.premiumTitle}>獲取專業分析</Text>
          <Text style={styles.premiumDescription}>
            解鎖來自專業占星師的詳細本命星盤解讀。
          </Text>
          <Button
            title="升級至高級版"
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
      name: '太陽',
      symbol: '☉',
      sign: '獅子座',
      degree: '23°',
      house: '第十宮',
      description:
        '你的太陽在獅子座賦予你自信、創造力和慷慨的個性。你天生就想要表達自己並在事業中發光發熱。',
    },
    {
      name: '月亮',
      symbol: '☽',
      sign: '雙魚座',
      degree: '15°',
      house: '第四宮',
      description:
        '你的月亮在雙魚座使你具有情感敏感、直覺和同理心的特質。你擁有豐富的內心世界，並與家庭有深厚的連結。',
    },
    {
      name: '水星',
      symbol: '☿',
      sign: '處女座',
      degree: '8°',
      house: '第十一宮',
      description:
        '你的水星在處女座給予你精確、分析和注重細節的思維。你在群體環境中能有效溝通。',
    },
    {
      name: '金星',
      symbol: '♀',
      sign: '天秤座',
      degree: '2°',
      house: '第十二宮',
      description:
        '你的金星在天秤座為你的關係帶來和諧、外交手腕和審美鑑賞力。你可能有隱藏的浪漫傾向或精神連結。',
    },
    {
      name: '火星',
      symbol: '♂',
      sign: '白羊座',
      degree: '19°',
      house: '第五宮',
      description:
        '你的火星在白羊座提供強大的主動性、勇氣和競爭動力。你通過創造性追求和浪漫冒險表達這種能量。',
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
      name: '第一宮',
      sign: '處女座',
      description:
        '你的上升點在處女座賦予你分析、實際和注重細節的生活態度。在他人眼中，你顯得有條理、樂於助人且謙遜。',
    },
    {
      number: 4,
      name: '第四宮',
      sign: '射手座',
      description:
        '射手座在第四宮使你的家庭和私人生活充滿擴張、樂觀和自由的特質。你可能有多元文化背景或熱愛旅行。',
    },
    {
      number: 7,
      name: '第七宮',
      sign: '雙魚座',
      description:
        '雙魚座在第七宮顯示你的伴侶關係富有同情心、直覺和理想主義。你在關係中尋求精神或情感上的連結。',
    },
    {
      number: 10,
      name: '第十宮',
      sign: '雙子座',
      description:
        '雙子座在第十宮表明你的職業道路可能涉及溝通、多樣性和智力追求。你可能會有多重職業或改變方向。',
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
      planets: '太陽三分月亮',
      type: '三分相位 (120°)',
      description:
        '這個和諧的相位在你的核心身份和情感本質之間創造內在和諧與情感平衡。你的意識目標和潛意識需求能夠協同工作。',
    },
    {
      planets: '水星四分火星',
      type: '四分相位 (90°)',
      description:
        '這個具有挑戰性的相位可能在你的思維和行動之間造成緊張。你可能容易爭論或辯論，但這種能量也可以激發智力勇氣。',
    },
    {
      planets: '金星合木星',
      type: '合相位 (0°)',
      description:
        '這個有利的相位增強你對愛、美和豐盛的能力。你天生具有魅力、慷慨和樂觀的特質，特別是在關係和財務方面。',
    },
    {
      planets: '火星對沖土星',
      type: '對沖相位 (180°)',
      description:
        '這個具有挑戰性的相位在你的行動衝動和限制感之間產生緊張。學會平衡果斷和耐心是你的主要成長領域。',
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

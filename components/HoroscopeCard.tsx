import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from './Card';

interface HoroscopeCardProps {
  sign: string;
  date: string;
  description: string;
  rating: number;
  imageUrl: string;
  onPress?: () => void;
}

export default function HoroscopeCard({
  sign,
  date,
  description,
  rating,
  imageUrl,
  onPress,
}: HoroscopeCardProps) {
  return (
    <Card onPress={onPress} style={styles.card} gradient>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.sign}>{sign}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      
      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>
      
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingLabel}>Today's Rating:</Text>
        <View style={styles.starsContainer}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Text
              key={i}
              style={[
                styles.star,
                { color: i < rating ? '#BB86FC' : 'rgba(255, 255, 255, 0.3)' },
              ]}
            >
              ★
            </Text>
          ))}
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerContent: {
    flex: 1,
  },
  sign: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 16,
    marginLeft: 2,
  },
});
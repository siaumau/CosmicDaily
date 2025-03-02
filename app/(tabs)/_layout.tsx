import { Tabs } from 'expo-router';
import { Chrome as Home, Star, Calendar, Heart, BookOpen, Settings } from 'lucide-react-native';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(18, 16, 45, 0.85)',
          borderTopWidth: 0,
          elevation: 0,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
        },
        tabBarActiveTintColor: '#BB86FC',
        tabBarInactiveTintColor: '#6E6A8F',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={30} style={StyleSheet.absoluteFill} />
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="natal-chart"
        options={{
          title: 'Chart',
          tabBarIcon: ({ color, size }) => <Star size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="horoscope"
        options={{
          title: 'Horoscope',
          tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="compatibility"
        options={{
          title: 'Compatibility',
          tabBarIcon: ({ color, size }) => <Heart size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: 'Learn',
          tabBarIcon: ({ color, size }) => <BookOpen size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
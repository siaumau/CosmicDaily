import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Svg, { Circle, Line, Path, G, Text as SvgText } from 'react-native-svg';

const { width } = Dimensions.get('window');
const CHART_SIZE = width * 0.85;
const CENTER = CHART_SIZE / 2;
const RADIUS = CHART_SIZE / 2 - 10;

interface AstrologyChartProps {
  simplified?: boolean;
}

export default function AstrologyChart({ simplified = false }: AstrologyChartProps) {
  const rotation = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0);

  useEffect(() => {
    rotation.value = withTiming(360, {
      duration: 3000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    scale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    opacity.value = withTiming(1, {
      duration: 1500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotation.value}deg` },
        { scale: scale.value },
      ],
      opacity: opacity.value,
    };
  });

  // Generate zodiac signs positions
  const zodiacSigns = [
    { symbol: '♈', name: 'Aries' },
    { symbol: '♉', name: 'Taurus' },
    { symbol: '♊', name: 'Gemini' },
    { symbol: '♋', name: 'Cancer' },
    { symbol: '♌', name: 'Leo' },
    { symbol: '♍', name: 'Virgo' },
    { symbol: '♎', name: 'Libra' },
    { symbol: '♏', name: 'Scorpio' },
    { symbol: '♐', name: 'Sagittarius' },
    { symbol: '♑', name: 'Capricorn' },
    { symbol: '♒', name: 'Aquarius' },
    { symbol: '♓', name: 'Pisces' },
  ];

  // Generate planet symbols
  const planets = [
    { symbol: '☉', name: 'Sun', angle: 30, distance: RADIUS * 0.6 },
    { symbol: '☽', name: 'Moon', angle: 120, distance: RADIUS * 0.5 },
    { symbol: '☿', name: 'Mercury', angle: 60, distance: RADIUS * 0.4 },
    { symbol: '♀', name: 'Venus', angle: 180, distance: RADIUS * 0.7 },
    { symbol: '♂', name: 'Mars', angle: 240, distance: RADIUS * 0.55 },
    { symbol: '♃', name: 'Jupiter', angle: 300, distance: RADIUS * 0.45 },
    { symbol: '♄', name: 'Saturn', angle: 330, distance: RADIUS * 0.65 },
  ];

  // Generate aspects (lines between planets)
  const aspects = [
    { from: 0, to: 1, color: '#BB86FC' }, // Sun-Moon
    { from: 0, to: 3, color: '#03DAC6' }, // Sun-Venus
    { from: 1, to: 5, color: '#CF6679' }, // Moon-Jupiter
  ];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.chartContainer, animatedStyle]}>
        <Svg width={CHART_SIZE} height={CHART_SIZE} viewBox={`0 0 ${CHART_SIZE} ${CHART_SIZE}`}>
          {/* Outer circle */}
          <Circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            stroke="#BB86FC"
            strokeWidth="1"
            fill="none"
          />
          
          {/* Inner circle */}
          <Circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS * 0.8}
            stroke="#BB86FC"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="3,3"
          />
          
          {/* Houses divisions */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = CENTER + RADIUS * Math.cos(angle);
            const y1 = CENTER + RADIUS * Math.sin(angle);
            const x2 = CENTER;
            const y2 = CENTER;
            
            return (
              <Line
                key={`house-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#BB86FC"
                strokeWidth="0.5"
                strokeOpacity="0.7"
              />
            );
          })}
          
          {/* Zodiac signs */}
          {zodiacSigns.map((sign, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x = CENTER + (RADIUS + 20) * Math.cos(angle);
            const y = CENTER + (RADIUS + 20) * Math.sin(angle);
            
            return (
              <SvgText
                key={`sign-${i}`}
                x={x}
                y={y}
                fontSize="16"
                fill="#fff"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {sign.symbol}
              </SvgText>
            );
          })}
          
          {/* Planets */}
          {planets.map((planet, i) => {
            const angle = (planet.angle - 90) * (Math.PI / 180);
            const x = CENTER + planet.distance * Math.cos(angle);
            const y = CENTER + planet.distance * Math.sin(angle);
            
            return (
              <G key={`planet-${i}`}>
                <Circle
                  cx={x}
                  cy={y}
                  r={10}
                  fill="rgba(187, 134, 252, 0.3)"
                  stroke="#BB86FC"
                  strokeWidth="1"
                />
                <SvgText
                  x={x}
                  y={y}
                  fontSize="14"
                  fill="#fff"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {planet.symbol}
                </SvgText>
              </G>
            );
          })}
          
          {/* Aspects (lines between planets) */}
          {!simplified && aspects.map((aspect, i) => {
            const fromPlanet = planets[aspect.from];
            const toPlanet = planets[aspect.to];
            
            const fromAngle = (fromPlanet.angle - 90) * (Math.PI / 180);
            const toAngle = (toPlanet.angle - 90) * (Math.PI / 180);
            
            const x1 = CENTER + fromPlanet.distance * Math.cos(fromAngle);
            const y1 = CENTER + fromPlanet.distance * Math.sin(fromAngle);
            const x2 = CENTER + toPlanet.distance * Math.cos(toAngle);
            const y2 = CENTER + toPlanet.distance * Math.sin(toAngle);
            
            return (
              <Line
                key={`aspect-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={aspect.color}
                strokeWidth="1"
                strokeDasharray="5,3"
                strokeOpacity="0.7"
              />
            );
          })}
        </Svg>
      </Animated.View>
      
      {!simplified && (
        <View style={styles.legendContainer}>
          <Text style={styles.legendTitle}>Chart Elements</Text>
          <View style={styles.legendRow}>
            <Text style={styles.legendSymbol}>☉</Text>
            <Text style={styles.legendText}>Sun in Leo</Text>
          </View>
          <View style={styles.legendRow}>
            <Text style={styles.legendSymbol}>☽</Text>
            <Text style={styles.legendText}>Moon in Pisces</Text>
          </View>
          <View style={styles.legendRow}>
            <Text style={styles.legendSymbol}>⬆️</Text>
            <Text style={styles.legendText}>Ascendant in Virgo</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartContainer: {
    width: CHART_SIZE,
    height: CHART_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: 'rgba(30, 27, 75, 0.6)',
    borderRadius: 12,
    width: '90%',
    borderWidth: 1,
    borderColor: 'rgba(187, 134, 252, 0.2)',
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  legendSymbol: {
    fontSize: 18,
    color: '#BB86FC',
    width: 30,
  },
  legendText: {
    fontSize: 14,
    color: '#fff',
  },
});
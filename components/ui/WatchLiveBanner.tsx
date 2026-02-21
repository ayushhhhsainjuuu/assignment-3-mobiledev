import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import VideoCard from './VideoCard';

type Props = {
  title?: string;
  subtitle?: string;
};

export default function WatchLiveBanner({
  title = 'Watch live on OneFootball',
  subtitle = 'Join us for the latest matches',
}: Props) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <VideoCard
          img={require('../../assets/images/tvrealvsbarcelona.jpg')}
          title="Real Madrid vs Barcelona - Full Match Highlights"
          source="Stats Perform"
          timeAgo="1 day ago"
          duration="LIVE"
        />
        <VideoCard
          img={require('../../assets/images/tvrealvscity.jpg')}
          title="Champions League Live: Real Madrid vs City"
          source="Stats Perform"
          timeAgo="2 days ago"
          duration="LIVE"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: '#888',
    fontSize: 13,
    marginBottom: 14,
  },
  scroll: {
    marginLeft: -4,
  },
});
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import VideoCard from './VideoCard';

type VideoItem = {
  img?: any;
  title: string;
  source: string;
  timeAgo: string;
  duration: string;
};

type Props = {
  title: string;
  subtitle?: string;
  videos?: VideoItem[];
};

export default function SectionHeader({ title, subtitle, videos }: Props) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {videos && videos.length > 0 ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              img={video.img}
              title={video.title}
              source={video.source}
              timeAgo={video.timeAgo}
              duration={video.duration}
            />
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 3,
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
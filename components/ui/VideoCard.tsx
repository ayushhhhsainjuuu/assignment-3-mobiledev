import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SourceAvatar from './SourceAvatar';
import VideoDurationBadge from './VideoDurationBadge';

type Props = {
  img?: any;
  title: string;
  source: string;
  timeAgo: string;
  duration: string;
};

export default function VideoCard({ img, title, source, timeAgo, duration }: Props) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.thumbnail}>
        {img ? (
          <Image source={img} style={styles.image} resizeMode="cover" />
        ) : null}
        <View style={styles.playButton}>
          <Text style={styles.playIcon}>▶</Text>
        </View>
        <VideoDurationBadge duration={duration} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.meta}>
          <SourceAvatar initials="SP" />
          <Text style={styles.source}>{source}</Text>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
  },
  thumbnail: {
    height: 170,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  playButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    color: '#fff',
    fontSize: 22,
    marginLeft: 4,
  },
  info: {
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  source: {
    color: '#ccc',
    fontSize: 12,
    flex: 1,
  },
  timeAgo: {
    color: '#888',
    fontSize: 12,
  },
});
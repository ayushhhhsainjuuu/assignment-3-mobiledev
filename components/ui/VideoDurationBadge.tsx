import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  duration: string;
};

export default function VideoDurationBadge({ duration }: Props) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{duration}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
});
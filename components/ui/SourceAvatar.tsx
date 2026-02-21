import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  initials: string;
  color?: string;
  size?: number;
};

export default function SourceAvatar({ initials, color = '#e07b39', size = 28 }: Props) {
  return (
    <View
      style={[
        styles.avatar,
        { backgroundColor: color, width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Text style={[styles.text, { fontSize: size * 0.32 }]}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '800',
  },
});
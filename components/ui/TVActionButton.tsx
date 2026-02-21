import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  icon: string;
  label: string;
  sublabel: string;
  onPress?: () => void;
};

export default function TVActionButton({ icon, label, sublabel, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.sublabel}>{sublabel}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 6,
  },
  circle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
  label: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  sublabel: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 2,
  },
});
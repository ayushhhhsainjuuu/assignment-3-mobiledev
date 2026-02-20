import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Tab = { key: string; label: string };

type Props = {
  tabs: Tab[];
  activeKey: string;
  onChange: (key: string) => void;
};

export default function SegmentedTabs({ tabs, activeKey, onChange }: Props) {
  return (
    <View style={styles.wrapper}>
      {tabs.map((t) => {
        const active = t.key === activeKey;
        return (
          <Pressable
            key={t.key}
            onPress={() => onChange(t.key)}
            style={[styles.tab, active && styles.tabActive]}
          >
            <Text style={[styles.label, active && styles.labelActive]}>
              {t.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#2A3138",
    borderRadius: 16,
    padding: 6,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabActive: {
    backgroundColor: "#0B0F14",
  },
  label: {
    fontWeight: "700",
    color: "#9CA3AF",
  },
  labelActive: {
    color: "white",
  },
});
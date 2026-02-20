import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

type Row = {
  team: string;
  mp: number;
  w: number;
  d: number;
  l: number;
  pts: number;
};

const standingsData: Row[] = [
  { team: "Real Madrid", mp: 24, w: 19, d: 3, l: 2, pts: 60 },
  { team: "Barcelona", mp: 24, w: 19, d: 1, l: 4, pts: 58 },
  { team: "Villarreal", mp: 23, w: 14, d: 3, l: 6, pts: 45 },
  { team: "Atletico Madrid", mp: 24, w: 13, d: 6, l: 5, pts: 45 },
  { team: "Real Betis", mp: 24, w: 11, d: 8, l: 5, pts: 41 },
  { team: "Espanyol", mp: 24, w: 10, d: 5, l: 9, pts: 35 },
  { team: "Celta Vigo", mp: 24, w: 8, d: 10, l: 6, pts: 34 },
  { team: "Real Sociedad", mp: 24, w: 8, d: 7, l: 9, pts: 31 },
  { team: "Athletic Club", mp: 24, w: 9, d: 4, l: 11, pts: 31 },
  { team: "Osasuna", mp: 24, w: 8, d: 6, l: 10, pts: 30 },
  { team: "Getafe", mp: 24, w: 8, d: 5, l: 11, pts: 29 },
  { team: "Girona", mp: 24, w: 7, d: 8, l: 9, pts: 29 },
  { team: "Sevilla", mp: 24, w: 7, d: 5, l: 12, pts: 26 },
  { team: "Alaves", mp: 24, w: 7, d: 5, l: 12, pts: 26 },
  { team: "Valencia", mp: 24, w: 6, d: 8, l: 10, pts: 26 },
  { team: "Rayo Vallecano", mp: 24, w: 6, d: 7, l: 11, pts: 25 },
  { team: "Mallorca", mp: 24, w: 6, d: 6, l: 12, pts: 24 },
  { team: "Las Palmas", mp: 24, w: 6, d: 5, l: 13, pts: 23 },
  { team: "Cadiz", mp: 24, w: 5, d: 7, l: 12, pts: 22 },
  { team: "Granada", mp: 24, w: 4, d: 6, l: 14, pts: 18 },
];

export default function Standings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Standings</Text>

      <FlatList
        data={standingsData}
        keyExtractor={(item) => item.team}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.rank, styles.hText]}>#</Text>
            <Text style={[styles.teamHeader, styles.hText]}>Team</Text>
            <Text style={[styles.col, styles.hText]}>MP</Text>
            <Text style={[styles.col, styles.hText]}>W</Text>
            <Text style={[styles.col, styles.hText]}>D</Text>
            <Text style={[styles.col, styles.hText]}>L</Text>
            <Text style={[styles.pts, styles.hText]}>Pts</Text>
          </View>
        }
        renderItem={({ item, index }) => {
          const isTop4 = index < 4;
          const isBottom3 = index >= standingsData.length - 3;

          return (
            <View
              style={[
                styles.row,
                isTop4 && styles.topTeam,
                isBottom3 && styles.bottomTeam,
              ]}
            >
              <Text style={styles.rank}>{index + 1}</Text>

              <View style={styles.teamCell}>
                <View style={styles.teamLogo} />
                <Text style={styles.teamText} numberOfLines={1}>
                  {item.team}
                </Text>
              </View>

              <Text style={styles.col}>{item.mp}</Text>
              <Text style={styles.col}>{item.w}</Text>
              <Text style={styles.col}>{item.d}</Text>
              <Text style={styles.col}>{item.l}</Text>
              <Text style={styles.pts}>{item.pts}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F14",
    paddingTop: 56,
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "white",
    marginBottom: 20,
  },

  headerRow: {
    backgroundColor: "#111827",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#1F2937",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 8,
  },

  hText: { color: "#9CA3AF", fontWeight: "800" },

  rank: {
    width: 26,
    textAlign: "right",
    color: "#9CA3AF",
    fontWeight: "800",
    marginRight: 10,
  },

  teamHeader: { flex: 1 },

  teamCell: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    minWidth: 0,
  },

  teamLogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#2A3138",
  },

  teamText: {
    color: "white",
    fontWeight: "800",
    flexShrink: 1,
  },

  col: {
    width: 30,
    textAlign: "center",
    color: "white",
    fontWeight: "700",
  },

  pts: {
    width: 38,
    textAlign: "center",
    color: "#60A5FA",
    fontWeight: "900",
  },

  sep: {
    height: 1,
    backgroundColor: "#1F2937",
  },

  topTeam: {
    borderLeftWidth: 4,
    borderLeftColor: "#22C55E",
  },

  bottomTeam: {
    borderLeftWidth: 4,
    borderLeftColor: "#EF4444",
  },
});
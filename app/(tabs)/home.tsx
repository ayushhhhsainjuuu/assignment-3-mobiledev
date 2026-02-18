import React from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const matches = [
  {
    id: "1",
    home: "Barcelona",
    away: "Real Madrid",
    time: "18:00",
  },
  {
    id: "2",
    home: "Atletico",
    away: "Sevilla",
    time: "20:30",
  },
  {
    id: "3",
    home: "Valencia",
    away: "Villarreal",
    time: "22:00",
  },
];

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Home</Text>

      {/* Today Section */}
      <Text style={styles.sectionTitle}>Today's Matches</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.matchCard}>
            <Text style={styles.team}>{item.home}</Text>
            <Text style={styles.vs}>vs</Text>
            <Text style={styles.team}>{item.away}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />

      {/* Featured League */}
      <Text style={styles.sectionTitle}>Featured League</Text>

      <View style={styles.leagueCard}>
        <Image
          source={require("../../assets/logos/laliga.png")}
          style={styles.leagueLogo}
        />
        <View>
          <Text style={styles.leagueName}>LaLiga</Text>
          <Text style={styles.leagueSub}>Spain</Text>
        </View>
      </View>

      {/* Quick Stats */}
      <Text style={styles.sectionTitle}>Quick Stats</Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>60</Text>
          <Text style={styles.statLabel}>Top Points</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Matches Played</Text>
        </View>
      </View>
    </ScrollView>
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

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#9CA3AF",
    marginBottom: 12,
  },

  matchCard: {
    width: 220,
    backgroundColor: "#111827",
    borderRadius: 18,
    padding: 16,
    marginRight: 14,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  team: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },

  vs: {
    color: "#9CA3AF",
    marginVertical: 4,
  },

  time: {
    marginTop: 10,
    color: "#60A5FA",
    fontWeight: "700",
  },

  leagueCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111827",
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#1F2937",
    marginBottom: 20,
  },

  leagueLogo: {
    width: 40,
    height: 40,
    marginRight: 14,
  },

  leagueName: {
    color: "white",
    fontWeight: "900",
    fontSize: 18,
  },

  leagueSub: {
    color: "#9CA3AF",
    fontWeight: "700",
  },

  statsRow: {
    flexDirection: "row",
    gap: 14,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#111827",
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  statNumber: {
    color: "#60A5FA",
    fontSize: 24,
    fontWeight: "900",
  },

  statLabel: {
    color: "#9CA3AF",
    fontWeight: "700",
    marginTop: 4,
  },
});
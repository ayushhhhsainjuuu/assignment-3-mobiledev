import { Image } from "expo-image";
import { StyleSheet, Text, View, FlatList} from "react-native";

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



export default function TodayMatches() {
    return(
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
    );
}

const styles = StyleSheet.create({
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

});
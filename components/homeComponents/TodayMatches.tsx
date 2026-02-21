import { Image } from "expo-image";
import { StyleSheet, Text, View, FlatList} from "react-native";

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

});
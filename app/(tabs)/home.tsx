import  OverViewCard from "@/components/homeComponents/OverViewCard";
import { StyleSheet, Text, View } from "react-native";
import games from "@/data/games.json";

export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
      <View style={styles.OverViewCard}>
        {games.filter((game) => game.isFavorite === true).map((game)=> (
            <OverViewCard key={game.id} {...game}/>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    OverViewCard:{
        flexDirection: "row",
        justifyContent: "center"
    }
});

import  OverViewCard from "@/components/homeComponents/OverViewCard";
import Stories from "@/components/homeComponents/Stories";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import games from "@/data/games.json";

export default function Home() {
  return (
  <ScrollView>
    <View>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
        {games.map((game) => ([
            <Stories key={game.id} teamALogoUrl={game.teamALogoUrl}/>,
            <Stories key={`${game.id}-b`} teamALogoUrl={game.teamBLogoUrl} />
        ]))}
      </ScrollView>
      <View style={styles.OverViewCard}>
        {games.filter((game) => game.isFavorite === true).map((game)=> (
            <OverViewCard key={game.id} {...game}/>
        ))}
      </View>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
    OverViewCard:{
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: "10%",
    },
    scrollContainer: {
        flexDirection: "row",
        gap: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        
        
    },
    
});

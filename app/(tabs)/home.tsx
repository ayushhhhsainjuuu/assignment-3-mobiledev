import  OverViewCard from "@/components/homeComponents/OverViewCard";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
      <View style={styles.OverViewCard}>
        <OverViewCard />
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

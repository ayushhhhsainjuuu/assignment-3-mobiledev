import { Image } from "expo-image";
import { StyleSheet, Text, View, FlatList} from "react-native";
import CircleButton from "../ui/CircleButton";
import TodayMatches from "./TodayMatches";
// import { useRouter } from "@/.expo/types/router";
import { useRouter } from 'expo-router';

type Props = {
  gameDate: string;
  gameTime: string;
  teamA?: string;
  teamB?: string;
  compLogoUrl?: string;
  moreInfo?: string;
  teamALogoUrl?: string;
  teamBLogoUrl?: string;
};

export default function OverViewCard(props: Props) {
const router = useRouter();

  return (
    <View style={styles.background}>
      <Text style={styles.clickHereStyle}>Click Button on left</Text>
        <View style={styles.circleButtonContainer}>
      <CircleButton
        style={styles.CompCircleButtonStyle}
        iconName="football-outline"
        iconSize={20}
        onPress={() => router.navigate("/standing")}
      />
      <CircleButton
        style={styles.MoreOptionsCircleButtonStyle}
        iconName="ellipsis-vertical"
        iconSize={20}
      />
      </View>
      <View style={styles.teamsContainer}>
        <View style={styles.teamColumn}>
          <Image source={{ uri: props.teamALogoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{props.teamA}</Text>
        </View>
        <View style={styles.gameInfoColumn}>
          <Text style={styles.gameDateStyle}>{props.gameDate}</Text>
          <Text style={styles.gameTimeStyle}>
            {props.gameTime.trim().substring(0, 5)}
          </Text>
        </View>
        <View style={styles.teamColumn}>
          <Image source={{ uri: props.teamBLogoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{props.teamB}</Text>
        </View>
      </View>
      <TodayMatches />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#1A1A1A",
    width: "90%",
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
  },
  teamsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 0,
  },
  circleButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "76%",
    flex: 0,
    paddingVertical: "5%",
  },
  teamColumn: {
    alignItems: "center",
    gap: "10%",
  },
  teamLogo: {
    width: 60,
    height: 60,
  },
  teamName: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
  },
  CompCircleButtonStyle: {
    backgroundColor: "black",
  },
  MoreOptionsCircleButtonStyle: {
    backgroundColor: "black",
  },
  gameInfoColumn:{
    alignItems:"center",
    gap:"5%",
    paddingLeft:"2%",
  },
  gameDateStyle: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
  },
  gameTimeStyle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  clickHereStyle: {
    color: "white",
    position: "absolute",
    top: "8%",
    left: "20%",
  }
});

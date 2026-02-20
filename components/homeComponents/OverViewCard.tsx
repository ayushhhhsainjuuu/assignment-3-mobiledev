import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import CircleButton from "../ui/CircleButton";

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
  return (
    <View style={styles.background}>
      {/* <Text style={styles.gameDateStyle}>{props.gameDate}</Text>
      <Text style={styles.gameTimeStyle}>
        {props.gameTime.trim().substring(0, 5)}
      </Text> */}
      <View style={styles.teamsContainer}>
        <View style={styles.teamColumn}>
          <Image source={{ uri: props.teamALogoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{props.teamA}</Text>
        </View>
        <View>
      <Text style={styles.gameDateStyle}>
        {props.gameDate}
        </Text>
      <Text style={styles.gameTimeStyle}>
        {props.gameTime.trim().substring(0, 5)}
      </Text>         
        </View>
        <View style={styles.teamColumn}>
          <Image source={{ uri: props.teamBLogoUrl }} style={styles.teamLogo} />
          <Text style={styles.teamName}>{props.teamB}</Text>
        </View>
      </View>
      <CircleButton
        style={styles.CompCircleButtonStyle}
        iconName="football-outline"
        iconSize={20}
      />
      <CircleButton
        style={styles.MoreOptionsCircleButtonStyle}
        iconName="ellipsis-vertical"
        iconSize={20}
      />
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
    flex: 1,
  },
  teamColumn: {
    alignItems: "center",
    gap: 10,
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
    position: "absolute",
    left: "3%",
    top: 10,
    backgroundColor: "black",
  },
  MoreOptionsCircleButtonStyle: {
    position: "absolute",
    left: "90%",
    top: 10,
    backgroundColor: "black",
  },
  gameDateStyle: {
    color: "white",
    textAlign: "center",
    width: "100%",
    fontSize: 11,
    fontWeight: "bold",
  },
  gameTimeStyle: {

    color: "white",
    textAlign: "center",
    width: "100%",
    fontSize: 30,
    fontWeight: "bold",
  },
});

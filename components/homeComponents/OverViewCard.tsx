
import { View, StyleSheet,Text } from "react-native";
import CircleButton from "../ui/CircleButton";
import { Image } from "expo-image";


type Props = {
    gameDate: string,
    gameTime: string,
    teamA?: string,
    teamB?: string,
    compLogoUrl?: string,
    moreInfo?: string,
    teamALogoUrl?: string,
    teamBLogoUrl?: string,
};


export default function OverViewCard(props : Props){
    return(
        <View style={styles.background}>
        <Text style={styles.gameDateStyle}>{props.gameDate}</Text>
        <Text style={styles.TeamAStyle}>{props.teamA}</Text>
        <Text style={styles.TeamBStyle}>{props.teamB}</Text>
        <Text style={styles.gameTimeStyle}>{props.gameTime.trim().substring(0,5)}</Text>
        <CircleButton style={styles.CompCircleButtonStyle} iconName="football-outline" iconSize={20}/>
        <CircleButton style={styles.MoreOptionsCircleButtonStyle} iconName="ellipsis-vertical" iconSize={20}/>
        <Image source={{uri: props.teamALogoUrl}} style={styles.teamALogoStyle}/>
        <Image source={{uri: props.teamBLogoUrl}} style={styles.teamBLogoStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#1A1A1A",
        width: "99%",
        height: 300,
        borderRadius: 10,
        position: "relative"
    },
    CompCircleButtonStyle:{
        position: 'absolute',
        left: "3%",
        top: 10,
        backgroundColor: "black"

    },
    MoreOptionsCircleButtonStyle:{
        position: 'absolute',
        left: "90%",
        top: 10,
        backgroundColor: "black"
    },
    gameDateStyle: {
        position: "absolute",
        color: "white",
        textAlign: "center",
        width: "100%",
        top: 48,
        fontSize: 11,
        fontWeight: "bold"
    },
    gameTimeStyle: {
        position: "absolute",
        color: "white",
        textAlign: "center",
        width: "100%",
        top: 60,
        fontSize: 30,
        fontWeight: "bold"
    },
      teamALogoStyle: {
        width: 60,
        height: 60,
        position: "absolute",
        top: "11%",
        left: "18%",
      },
        teamBLogoStyle: {
        width: 60,
        height: 60,
        position: "absolute",
        top: "12.5%",
        left: "68%",        
      },
    TeamAStyle:{
        marginLeft: "18%",
        fontSize: 14,
        marginTop: "25%",
        position: "absolute",
        color: "white",
        
    },
    TeamBStyle:{
        marginLeft: "65%",
        fontSize: 14,
        position: "absolute",
        marginTop: "25%",
        color: "white",
        // marginBottom:,
    }
})
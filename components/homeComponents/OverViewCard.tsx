
import { View, StyleSheet,Text } from "react-native";
import CircleButton from "../ui/CircleButton";


type Props = {
    title: string,
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
        <Text>{props.teamA}</Text>
        <Text>{props.teamB}</Text>
        <Text>{props.gameTime}</Text>
        <CircleButton style={styles.CompCircleButtonStyle} iconName="football-outline" iconSize={20}/>
        <CircleButton style={styles.MoreOptionsCircleButtonStyle} iconName="ellipsis-vertical" iconSize={20}/>
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#1A1A1A",
        width: 350,
        height: 300,
        borderRadius: 10,
        position: "relative"
    },
    CompCircleButtonStyle:{
        position: 'absolute',
        left: 10,
        top: 10,
        backgroundColor: "black"

    },
    MoreOptionsCircleButtonStyle:{
        position: 'absolute',
        left: 310,
        top: 10,
        backgroundColor: "black"

    }
})
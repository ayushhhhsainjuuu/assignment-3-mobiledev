
import { View, StyleSheet } from "react-native";
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
        <CircleButton style={styles.CompCircleButtonStyle}/>
        <CircleButton style={styles.MoreOptionsCircleButtonStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor: "black",
        width: 350,
        height: 300,
        borderRadius: 10,
        position: "relative"
    },
    CompCircleButtonStyle:{
        position: 'absolute',
        left: 10,
        top: 10

    },
    MoreOptionsCircleButtonStyle:{
        position: 'absolute',
        left: 310,
        top: 10

    }
})
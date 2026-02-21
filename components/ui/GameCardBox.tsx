import { View, Text, StyleSheet, } from "react-native";
import { Image } from "expo-image";


type Props = {
    title: string,
    SubTitle: string,
    gameTime: string,
    teamA?: string,
    teamB?: string,
    compLogoUrl?: string,
    moreInfo?: string,
    teamALogoUrl?: string,
    teamBLogoUrl?: string,
};

export default function GameCardBox(props: Props) {
    return(
        <View style={styles.GameBox}>
            <Text style={[styles.TextColorWhite,styles.CompTitleStyle]}>{props.title}</Text>
            <View style={styles.TopHorizontalSeperator}/>
            <Text style={[styles.CompSubTitleStyle]}>{props.SubTitle}</Text>
            <View style={styles.MiddleLeftVeritcalSeperator}/>
            <Text style={[styles.TextColorWhite,styles.GameTimeStyle]}>{props.gameTime}</Text>
            <View style={styles.MiddleRightVeritcalSeperator}/>
            <Text style={[styles.TextColorWhite,styles.TeamAStyle]}>{props.teamA}</Text>
            <Text style={[styles.TextColorWhite,styles.TeamBStyle]}>{props.teamB}</Text>
            <View style={styles.BottomHorizontalSeperator}/>
            <Image source={{uri: props.teamALogoUrl}} style={styles.teamALogoStyle}/>
            <Image source={{uri: props.teamBLogoUrl}} style={styles.teamBLogoStyle}/>
            <Image source={{uri: props.compLogoUrl}} style={styles.compLogoStyle}/>
            <View style={styles.seeMatchdayContainer}   >
            <Text style={[styles.TextColorWhite,styles.SeeMatchdayStyle]}>{props.moreInfo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    GameBox:{
        backgroundColor: "#1A1A1A",
        height: 250,
        marginTop: 45,
        position: "relative",
        borderTopWidth: 1,
        borderTopColor: "#242424",

    },
    seeMatchdayContainer:{
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-end",
        marginBottom: 10,
    },
    TextColorWhite:{
        color: "white",
    },
    GameTimeStyle: {
        marginLeft: "60%",
        marginTop: "35%",
        position: "absolute",
    },
    CompTitleStyle: {
        fontSize: 16,
        marginLeft: "15%",
        marginTop: "3%",
    },
    CompSubTitleStyle: {
        fontSize: 12,
        marginLeft: "15%",
        color: "#A0A0A0",
    },
    SeeMatchdayStyle: {
        marginTop: "57%",
        marginLeft: "38%",
        position: "absolute",
        fontWeight: "bold",
    },
    TeamAStyle:{
        marginLeft: "10%",
        fontSize: 14,
        marginTop: "30%",
        position: "absolute",
        
    },
    TeamBStyle:{
        marginLeft: "10%",
        fontSize: 14,
        position: "absolute",
        marginTop: "40%",
        // marginBottom:,
    },
    TopHorizontalSeperator: {
        height: 1,
        backgroundColor: "#242424",
        width: "90%",
        marginTop: "22%",
        position: "absolute", 
        marginLeft: "5%",
    },
        BottomHorizontalSeperator: {
        height: 1,
        backgroundColor: "#242424",
        width: "90%",
        marginTop: "52%",
        position: "absolute", 
        marginLeft: "5%",
    },
      MiddleRightVeritcalSeperator:{
        width: 1,
        backgroundColor: "#242424",
        height: "29%",
        position: "absolute",
        marginLeft: "81%",
        marginTop: "28%",
      },
      MiddleLeftVeritcalSeperator:{
        width: 1,
        backgroundColor: "#242424",
        height: "29%",
        position: "absolute",
        marginLeft: "55%",
        marginTop: "28%",
      },  
      teamALogoStyle: {
        width: 25,
        height: 25,
        position: "absolute",
        marginLeft: "1%",
        marginTop: "29%",
      },
        teamBLogoStyle: {
        width: 25,
        height: 25,
        position: "absolute",
        marginLeft: "1%",
        marginTop: "39%",
      },
      compLogoStyle:{
        width: 40,
        height: 40,
        position: "absolute",
        marginLeft: "3%",
        marginTop: "2.5%",
      }
});
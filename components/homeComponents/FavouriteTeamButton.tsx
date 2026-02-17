import { View, StyleSheet} from "react-native";


export default function FavouriteTeamButton() {
    return(
        <View style={styles.buttonStyle}>
        <View style={styles.MiddleLeftVeritcalSeperator}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonStyle:{
        width: 80,
        height:30,
        position: "absolute",
        backgroundColor: "#1A1A1A",
        borderRadius: 20,
        borderColor: "#242424",
        borderWidth: 2,
    },
      MiddleLeftVeritcalSeperator:{
        width: 1,
        backgroundColor: "#242424",
        height: "75%",
        position: "absolute",
        marginLeft: "50%",
        marginTop: "5%",
      },  
})
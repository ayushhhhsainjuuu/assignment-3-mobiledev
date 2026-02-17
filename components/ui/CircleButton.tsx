
import { View,StyleSheet, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type props = {
    iconName? : string, 
    iconSize? : number,
    style? : ViewStyle | ViewStyle [],
};


export default function CircleButton(props: props) {
  
  return( 
  <View style={[styles.button, props.style]}>
      <View style={styles.iconStyle}>
      <Ionicons name={props.iconName as any} size={props.iconSize} color="white" />
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: "#1A1A1A",
        flexDirection: "row",
    },
    iconStyle: {
        color: "white",
        margin: 'auto',
    }
})
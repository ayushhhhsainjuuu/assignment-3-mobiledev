import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";

type Props = {
    teamALogoUrl?: string,
    teamBLogoUrl?: string,
}

export default function Stories(props: Props) {
    return(  
        <View style ={styles.CircleStoryStyle}>
            <Image source={{uri: props.teamALogoUrl}} style={styles.StoryImageStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
   
        CircleStoryStyle: {
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#1A1A1A",
            borderWidth: 2,
            borderColor: "#ADD8E6",
        },
        StoryImageStyle: {
            width: 35,
            height: 35,
            borderRadius: 30,
            margin: "auto",

        }
});



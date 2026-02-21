import { StyleSheet, View } from "react-native";

export default function NewsCard() {
    return (
        <View style={styles.card}>
            <View style={styles.thumbnail} />
            <View style={styles.content}>
                <View style={styles.headline} />
                <View style={styles.subline} />
                <View style={styles.metaRow}>
                    <View style={styles.metaDot} />
                    <View style={styles.metaLine} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#151515",
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: "#242424",
        flexDirection: "row",
        gap: 12,
        width:"90%"
    },
    thumbnail: {
        width: 84,
        height: 84,
        borderRadius: 12,
        backgroundColor: "#1F1F1F",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        gap: 8,
    },
    headline: {
        height: 14,
        borderRadius: 6,
        backgroundColor: "#202020",
        width: "85%",
    },
    subline: {
        height: 12,
        borderRadius: 6,
        backgroundColor: "#1B1B1B",
        width: "70%",
    },
    metaRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    metaDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#242424",
    },
    metaLine: {
        height: 10,
        borderRadius: 5,
        backgroundColor: "#1B1B1B",
        width: 80,
    },
});
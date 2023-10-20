import {StyleSheet, Text, View} from "react-native";

function MatchSummaryPanel(props) {

    return (
        <View style={styles.container}>
            <View style={styles.outerBox}>
                <Text style={styles.letterText}>K</Text>
                <Text style={styles.bannerText}>Average</Text>
                <View style={styles.averageBox}>
                    <Text style={styles.averageText}>{props.averageKills}</Text>
                </View>
                <Text style={styles.bannerText}>Highest</Text>
                <Text style={styles.highestText}>{props.highestKills}</Text>
            </View>

            <View style={styles.outerBox}>
                <Text style={styles.letterText}>D</Text>
                <Text style={styles.bannerText}>Average</Text>
                <View style={styles.averageBox}>
                    <Text style={styles.averageText}>{props.averageDeaths}</Text>
                </View>
                <Text style={styles.bannerText}>Highest</Text>
                <Text style={styles.highestText}>{props.highestDeaths}</Text>
            </View>

            <View style={styles.outerBox}>
                <Text style={styles.letterText}>A</Text>
                <Text style={styles.bannerText}>Average</Text>
                <View style={styles.averageBox}>
                    <Text style={styles.averageText}>{props.averageAssists}</Text>
                </View>
                <Text style={styles.bannerText}>Highest</Text>
                <Text style={styles.highestText}>{props.highestAssists}</Text>
            </View>
        </View>
    )
}

export default MatchSummaryPanel;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        width: "60%",
        height: 106,
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: '#313a2c',
        alignItems: "center",
    },
    outerBox: {
        flex: 1,
        alignItems: "center",
    },
    averageBox: {
        alignItems: "center",
    },
    letterText: {
        fontSize: 14,
       color: 'white',
    },
    bannerText: {
        fontSize: 8,
        color: 'white',
    },
    averageText: {
        fontSize: 22,
        color: 'white',
    },
    highestText: {
        color: 'white',
    },
});
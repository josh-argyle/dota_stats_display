import {Image, StyleSheet, Text, View} from "react-native";

function HeaderBar(props) {

    return (
        <View style={styles.headerBox}>
            <View style={styles.usernameBox}>
                <Text style={styles.username}>{ props.activeAccountOverviewData.profile.personaname }</Text>
                <Text style={styles.mmrEstimate}>MMR: { props.activeAccountOverviewData.mmr_estimate.estimate }</Text>

            </View>
            <View style={styles.imageBox}>
                <Image source={{ uri: props.activeAccountOverviewData.profile.avatarfull }} style={styles.image} />
            </View>
        </View>
    )
}

export default HeaderBar;

const styles = StyleSheet.create({
    headerBox: {
        width: '100%',
        height: 96,
        flexDirection: "row",
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#313a2c',
        borderRadius: 20,
    },
    usernameBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    username: {
        fontSize: 18,
        color: 'white',
    },
    mmrEstimate: {
        fontSize: 14,
        color: 'white',
    },
    imageBox: {
        flex: 1,
        justifyContent: "center",
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: "center",
    },
});
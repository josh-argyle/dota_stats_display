import {Image, StyleSheet, Text, View} from "react-native";
import {useState} from "react";

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
        // height: 100,
        height: 96,
        flexDirection: "row",
        // flex: 1,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: '#ae90da',
        borderRadius: 20,
    },
    usernameBox: {
        flex: 1,
        // width: 100,
        // height: 100,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    username: {
        fontSize: 18,

    },
    mmrEstimate: {
        fontSize: 14,

    },
    imageBox: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 1,
        justifyContent: "center",
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: "center",
    },

});
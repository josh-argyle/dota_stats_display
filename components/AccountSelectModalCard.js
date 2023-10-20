import {Image, Pressable, StyleSheet, Text, View} from "react-native";

function AccountSelectModalCard(props) {

    function handlePressCard() {
        console.log("card pressed");
        props.passAccountID(props.accountID);
        props.closeModal();
    }

    return (
        <Pressable style={styles.container} onPress={handlePressCard}>
            <View style={styles.textBox}>
                <Text style={styles.text}>{props.username}</Text>
            </View>
            <Image source={{ uri: props.displayPictureURL }} style={styles.image} />
        </Pressable>
    )
}

export default AccountSelectModalCard;

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 12,
        marginHorizontal: 4,
        marginVertical: 3,
        backgroundColor: '#313a2c',
    },
    textBox: {
        alignItems: "center",
        justifyContent: "center",
        width: 220,
    },
    text: {
        fontSize: 22,
        color: "white",
    },
    username: {
    },
    image: {
        width: 76,
        height: 78,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: 'black',
    },
    idNumber: {

    },
});
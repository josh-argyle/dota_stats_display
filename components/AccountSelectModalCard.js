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
            {/*<Text>{props.accountID}</Text>*/}
        </Pressable>
    )
}

export default AccountSelectModalCard;

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'red',
        marginBottom: 4,
    },
    textBox: {
        alignItems: "center",
        justifyContent: "center",
        width: 220,
    },
    text: {
        fontSize: 16,
    },
    username: {
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: "flex-end"
    },
    idNumber: {

    },
});
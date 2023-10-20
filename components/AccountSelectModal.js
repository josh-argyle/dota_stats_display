import {Button, FlatList, Modal, StyleSheet, View} from "react-native";
import AccountSelectModalCard from "./AccountSelectModalCard";

function AccountSelectModal(props) {

    function closeModal() {
        props.closeModal();
        console.log("moodle");
    }
    function passAccountID(acctID) {
        props.passAccountID(acctID);
    }

    return (
        <Modal visible={props.isOpen} animationType={"slide"}>
            <View style={styles.container}>
                <View style={styles.buttonBox}>
                    <Button
                        title={"Back"}
                        color={'#313a2c'}
                        onPress={closeModal}
                    />
                </View>
                <FlatList
                    data={props.data}
                    renderItem={itemData => {
                        return (

                            <AccountSelectModalCard
                                accountID={itemData.item.account_id}
                                username={itemData.item.personaname}
                                displayPictureURL={itemData.item.avatarfull}
                                passAccountID={passAccountID}
                                closeModal={closeModal}
                            />
                        )
                    }}
                />
            </View>
        </Modal>
    )
}

export default AccountSelectModal;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        marginBottom: 8,
        backgroundColor: "#D36135",
    },
    buttonBox: {
        borderWidth: 1,
        borderColor: "#D36135",
        // borderRadius: 12,
        marginHorizontal: 2,
    },
});
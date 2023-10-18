import {FlatList, Modal, StyleSheet, View} from "react-native";
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
            <View>
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
        flexDirection: "row",
        marginBottom: 8,

    },
});
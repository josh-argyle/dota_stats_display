import {Button, StyleSheet, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import AccountSelectModal from "./AccountSelectModal";

function SearchBar (props) {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    function usernameInputHandler(enteredText) {
        setEnteredUsername(enteredText);
    }

    const getPlayerID = async () => {
        const url = `https://api.opendota.com/api/search?q=${enteredUsername}`;
        console.log(enteredUsername);
        try {
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
                setIsModalOpen(true);
            } else {
                console.error('Request failed with status: ', response.status);
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    useEffect(() => {
        // console.log("updoot");
        // console.log(searchResults);
        // console.log("deet");
    }, [searchResults]);

    function closeModal() {
        setIsModalOpen(false);
        console.log("moasodle");
    }

    function passAccountID(acctID) {
        props.passAccountID(acctID);
        console.log("passingID")
    }

    return (
        <View style={styles.container}>
            <AccountSelectModal
                isOpen={isModalOpen}
                data={searchResults}
                passAccountID={passAccountID}
                closeModal={closeModal}
                onRequestClose={() => {closeModal()} }
            />
            <TextInput
                style={styles.searchBar}
                placeholder={'Search username..'}
                defaultValue={' '}
                onChangeText={usernameInputHandler}
            />
            <Button title={"Go"} onPress={getPlayerID}/>
        </View>

    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 8,
        height: 40,

    },
    searchBar: {
        // flex: 1,
        backgroundColor: 'white',
        width: '70%',
        height: 40,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 20,
        color: 'red',
        textAlign: 'center',
        marginRight: 8,
    },
});

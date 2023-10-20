import {StyleSheet, View} from 'react-native';
import HeaderBar from "./components/HeaderBar";
import SearchBar from "./components/SearchBar";
import {useEffect, useState} from "react";
import DetailsPanel from "./components/DetailsPanel";

export default function App() {

    const [activeAccountOverviewData, setActiveAccountOverviewData] = useState([]);
    const [activeAccountMatchData, setActiveAccountMatchData] = useState([]);
    const [foundFirstAccount, setFoundFirstAccount] = useState(false);

    function handleReceiveAccountID(acctID) {
        console.log('setting state');
        getAccountOverviewData(acctID)
            .then(r => console.log("Successfully got overview data"));
        getAccountMatchData(acctID)
            // .then(r => console.log(activeAccountMatchData));
            .then(r => console.log("Successfully got match data"));

    }

    useEffect(() => {
        if (activeAccountOverviewData.profile !== undefined) {
            // console.log("Successfully found data for " + activeAccountOverviewData.profile.personaname);
            console.log("Array is not empty. It has " + activeAccountOverviewData.length + " items.");
            setFoundFirstAccount(true);
        }
    }, [activeAccountOverviewData]);

    const getAccountOverviewData = async (acctID) => {
        const url = `https://api.opendota.com/api/players/${acctID}`;
        // console.log(acctID);
        try {
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setActiveAccountOverviewData(data);
                // console.log(data);
                // return data;

            } else {
                console.error('Request failed with status: ', response.status);
            }
        } catch (error) {
            console.error('Error: ', error);
        }

    }

    const getAccountMatchData= async (acctID) => {
        // const url = `https://api.opendota.com/api/players/${acctID}/matches?limit=10&significant=0}`;
        const url = `https://api.opendota.com/api/players/${acctID}/matches?limit=10&game_mode=23&significant=0`;
        // console.log(acctID);
        try {
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setActiveAccountMatchData(data);
                // console.log(data);
                // return data;

            } else {
                console.error('Request failed with status: ', response.status);
            }
        } catch (error) {
            console.error('Error: ', error);
        }

    }

    return (
        <View style={styles.container}>
            <SearchBar passAccountID={handleReceiveAccountID}/>
            {/*{activeAccount === "" ? null : <HeaderBar activeAccountOverviewData={activeAccountOverviewData}/>}*/}
            {foundFirstAccount === false ? null : <HeaderBar activeAccountOverviewData={activeAccountOverviewData} />}
            {foundFirstAccount === false ? null : <DetailsPanel activeAccountMatchData={activeAccountMatchData} />}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingTop: 32,
        flex: 1,
        backgroundColor: "#D36135",
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

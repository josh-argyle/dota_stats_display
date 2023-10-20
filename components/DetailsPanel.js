import {FlatList, StyleSheet, View} from "react-native";
import RecentMatchInfoCard from "./RecentMatchInfoCard";
import MatchSummaryPanel from "./MatchSummaryPanel";
import {useEffect, useState} from "react";

function DetailsPanel(props) {

    const [averageAssists, setAverageAssists] = useState(0);
    const [averageKills, setAverageKills] = useState(0);
    const [averageDeaths, setAverageDeaths] = useState(0);
    const [highestAssists, setHighestAssists] = useState(0);
    const [highestKills, setHighestKills] = useState(0);
    const [highestDeaths, setHighestDeaths] = useState(0);

    useEffect(() => {
        setAverageAssists(0);
        setAverageKills(0);
        setAverageDeaths(0);
        setHighestAssists(0);
        setHighestKills(0);
        setHighestDeaths(0);
        if (props.activeAccountMatchData && props.activeAccountMatchData.length > 0) {
            // Calculate the total assists and number of matches.
            let totalAssists = 0;
            let totalKills = 0;
            let totalDeaths = 0;
            props.activeAccountMatchData.forEach((match) => {
                // Get totals for each stat.
                totalAssists += match.assists;
                totalKills += match.kills;
                totalDeaths += match.deaths;
                // Get highest for each stat.
                if (match.assists > highestAssists) setHighestAssists(match.assists);
                if (match.deaths > highestDeaths) setHighestDeaths(match.deaths);
                if (match.kills > highestKills) setHighestKills(match.kills);
            });
            // Get the number of matches in the array.
            const numberOfMatches = props.activeAccountMatchData.length;

            // Update the state with the average values.
            setAverageAssists(totalAssists / numberOfMatches);
            setAverageKills(totalKills / numberOfMatches);
            setAverageDeaths(totalDeaths / numberOfMatches);
        }
        else console.log("too short");
    }, [props.activeAccountMatchData]);



    useEffect(() =>{
        console.log("DetailsPanel props\n");
        // console.log(props);
    }, [props])

    return(
            <View style={styles.container}>
                <View style={styles.statsBox}>
                    <MatchSummaryPanel
                        averageAssists={averageAssists}
                        averageKills={averageKills}
                        averageDeaths={averageDeaths}
                        highestAssists={highestAssists}
                        highestKills={highestKills}
                        highestDeaths={highestDeaths}
                    />
                </View>
                <FlatList
                    data={props.activeAccountMatchData}
                    renderItem={({ item }) => {
                        return (
                            <RecentMatchInfoCard
                                deaths={item.deaths}
                                kills={item.kills}
                                assists={item.assists}
                                hero_id={item.hero_id}
                                player_slot={item.player_slot}
                                radiant_win={item.radiant_win}
                            />
                        )
                    }}
                />
            </View>
        )

}

export default DetailsPanel;

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        width: "100%",
        height: "78%",
    },
    statsBox: {
        height: 112,
        borderColor: "red",
        width: "100%",
    },
});
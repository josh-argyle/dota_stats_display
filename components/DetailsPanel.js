import {FlatList, StyleSheet, View} from "react-native";
import AccountSelectModalCard from "./AccountSelectModalCard";
import RecentMatchInfoCard from "./RecentMatchInfoCard";
import {useEffect} from "react";

function DetailsPanel(props) {

    useEffect(() =>{
        console.log("DetailsPanel props");
        console.log(props);
    }, [props])

    return(
            <View style={styles.container}>
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
        borderWidth: 2,
        borderColor: "blue",
        width: "100%",
        height: "78%",
    },
});
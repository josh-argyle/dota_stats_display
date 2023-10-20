import {Image, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import jsonData from '../assets/DotaConstants/hero_names.json';

function RecentMatchInfoCard(props) {

    const [heroData, setHeroData] = useState([]);
    const [gameWonOrLost, setGameWonOrLost] = useState('');

    useEffect(() =>{
        // Get general data for the hero.
        let foundHero = null;
        for (const heroName in jsonData) {
            if (jsonData[heroName].id === props.hero_id) {
                foundHero = jsonData[heroName];
                break;
            }
        }
        setHeroData(foundHero);
        // Get win or loss status.
        const winLoss = getWinOrLoss();
        if (winLoss) {
            setGameWonOrLost('Won');
        } else {
            setGameWonOrLost('Lost');
        }
    }, [props])

    // Return true for win, false for loss.
    function getWinOrLoss() {
        // Get the player slot number, get
        const getPlayerSlot = props.player_slot;
        const getDidRadiantWin = props.radiant_win;
        const radiantPositions = [0, 1, 2, 3, 4];
        const direPositions = [128, 129, 130, 131, 132];

        // console.log("play: " + getPlayerSlot + " " + getDidRadiantWin)

        // if radiant won
        if (getDidRadiantWin === true) {
            // and player was radiant
            return radiantPositions.includes(getPlayerSlot);
        }
        // else if dire won
        else if (getDidRadiantWin === false) {
            // and player was dire
            return direPositions.includes(getPlayerSlot);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <Image source={{ uri: `https://cdn.cloudflare.steamstatic.com/${heroData.img}` }} style={styles.image} />
            </View>
            <View style={styles.heroNameBox}>
                <Text style={styles.text}>{heroData.localized_name}</Text>
                <Text style={styles.text}>KDA: {props.kills}/{props.deaths}/{props.assists}</Text>
            </View>
            <View style={styles.playerKDABox}>
                <Text style={styles.text}>{gameWonOrLost}</Text>
            </View>
        </View>
    )
}

export default RecentMatchInfoCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 2,
        paddingLeft: 8,
        width: "100%",
        height: 42,
        borderRadius: 12,
        backgroundColor: '#313a2c',
    },
    text: {
        color: "white",
        fontSize: 12,
    },
    image: {
        width: 36,
        height: 36,
    },
    imageBox: {
        justifyContent: "center",
    },
    heroNameBox: {
        width: 120,
        paddingHorizontal: 8,
        justifyContent: "center",
    },
    playerKDABox: {
        justifyContent: "center",
    },
});

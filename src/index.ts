import { getTwitchToken } from "./service/twitch";
import { config } from "dotenv";
import { getGames } from "./service/igdb";

const main = async () => {
    try {
        const twitchToken = await getTwitchToken({
            client_id: process.env.TWITCH_ID,
            client_secret: process.env.TWITCH_SECRET,
            grant_type: "client_credentials",
        });

        const games = await getGames(process.env.TWITCH_ID, twitchToken);

        console.log(games);
    } catch (error) {
        console.log("ERRROR = ", error);
    }
};

config();
main();

import axios from "axios";
import { twitchTokenInput, twitchTokenOutput } from "../types";

export const getTwitchToken = async (
    input: twitchTokenInput
): Promise<string> => {
    const response = await axios.post<twitchTokenOutput, twitchTokenOutput>(
        "https://id.twitch.tv/oauth2/token",
        null,
        {
            params: input,
        }
    );

    return response.data.access_token;
};

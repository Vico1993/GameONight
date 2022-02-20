import igdb from "igdb-api-node";

export const getGames = async (clientId: string, token: string) => {
    const response = await igdb(clientId, token)
        .fields([
            "name",
            "similar_games",
            "cover",
            "rating",
            "aggregated_rating",
            "artworks",
            "genres",
            "tags",
            "status",
        ])
        .limit(50)
        .where("rating != n")
        .sort("rating", "desc")
        .request("https://api.igdb.com/v4/games");

    console.log(response.data);
};

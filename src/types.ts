export type twitchTokenInput = {
    client_id: string;
    client_secret: string;
    grant_type: string;
};

export type twitchTokenOutput = {
    data: {
        access_token: string;
        expires_in: number;
        token_type: string;
    };
};

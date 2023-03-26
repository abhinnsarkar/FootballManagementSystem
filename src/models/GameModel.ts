export default class GameModel {
    // venue?: string;
    matchName?: string;
    tournamentName?: string;
    tournamentLongName?: string;
    // teams?: [string];
    // winner?: string;
    // temperature?: JSON;
    // scorers?: [JSON];
    // players?: [JSON];

    /**
     *
    //  * @param venue
     * @param matchName
     * @param tournamentName
     * @param tournamentLongName
    //  * @param teams
    //  * @param winner
    //  * @param temperature
    //  * @param scorers
    //  * @param players
     */
    constructor(
        // venue: string,
        matchName: string,
        tournamentName: string,
        tournamentLongName: string
        // teams: [string],
        // winner: string,
        // temperature: JSON,
        // scorers: [JSON],
        // players: [JSON]
    ) {
        // this.venue = venue;
        this.matchName = matchName;
        this.tournamentName = tournamentName;
        this.tournamentLongName = tournamentLongName;
        // this.teams = teams;
        // this.winner = winner;
        // this.temperature = temperature;
        // this.scorers = scorers;
        // this.players = players;
    }
}

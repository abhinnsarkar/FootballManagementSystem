export default class TournamentModel {
    shortName?: string;
    longName: string;

    /**
   @param shortName Optional small name
   @param shortName Required FULL name
   */
    constructor(shortName: string, longName: string) {
        this.shortName = shortName;
        this.longName = longName;
    }
}

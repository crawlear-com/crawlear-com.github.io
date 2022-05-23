import { AecarGameScores } from "./AecarGameScores";
import Analytics from "../../Analytics";

const gameExtras = {
    doPageView: ()=> {
        Analytics.pageview('/king/');
    }
};
export { AecarGameScores as KingGameScores, gameExtras };
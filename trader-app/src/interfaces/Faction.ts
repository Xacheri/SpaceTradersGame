import Trait from "./Trait";
interface Faction {
    symbol: string;
    name: string;
    description: string;
    headquarters: string;
    traits: Trait[];
    isRecruiting: boolean;
}

export default Faction;
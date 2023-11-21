import Faction from "@/interfaces/Faction";

class Trader {
  name: string;
  callsign: string;
  faction: Faction;

  api_key: string;

  // constructor for Trader
  constructor(
    name: string,
    faction: Faction,
    callsign: string,
    api_key: string
  ) {
    this.name = name;
    this.faction = faction;
    this.api_key = api_key;
    this.callsign = callsign;
  }
}

export default Trader;

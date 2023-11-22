import Agent from "@/interfaces/Agent";
import Contract from "@/interfaces/Contract";
import Faction from "@/interfaces/Faction";
import Ship from "@/interfaces/Ship";

interface CreateAgentResponse {
  token: string;
  agent: Agent;
  contract: Contract;
  faction: Faction;
  ship: Ship;
}

export default CreateAgentResponse;

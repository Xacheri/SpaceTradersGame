import Requirements from "@/interfaces/Requirements";

interface Reactor {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  powerOutput: number;
  requirements: Requirements;
}

export default Reactor;

import Requirements from "@/interfaces/Requirements";

interface Engine {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  speed: number;
  requirements: Requirements;
}

export default Engine;

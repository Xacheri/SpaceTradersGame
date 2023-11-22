import Requirements from "@/interfaces/Requirements";

interface Module {
  symbol: string;
  name: string;
  description: string;
  capacity?: number;
  requirements: Requirements;
}

export default Module;

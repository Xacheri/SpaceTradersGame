import Requirements from "@/interfaces/Requirements";

interface Mount {
  symbol: string;
  name: string;
  description: string;
  strength: number;
  requirements: Requirements;
  deposits?: string[];
}

export default Mount;

import Requirements from "@/interfaces/Requirements";

interface Frame {
  symbol: string;
  name: string;
  description: string;
  moduleSlots: number;
  mountingPoints: number;
  fuelCapacity: number;
  condition: number;
  requirements: Requirements;
}

export default Frame;

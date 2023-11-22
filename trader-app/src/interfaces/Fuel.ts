import FuelConsumed from "@/interfaces/FuelConsumed";

interface Fuel {
  current: number;
  capacity: number;
  consumed: FuelConsumed;
}

export default Fuel;

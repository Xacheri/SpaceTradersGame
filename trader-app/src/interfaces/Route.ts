import Location from "@/interfaces/Location";

interface Route {
  departure: Location;
  origin: Location;
  destination: Location;
  arrival: string;
  departureTime: string;
}

export default Route;

import Route from "@/interfaces/Route";

interface Navigation {
  systemSymbol: string;
  waypointSymbol: string;
  route: Route;
  status: string;
  flightMode: string;
}

export default Navigation;

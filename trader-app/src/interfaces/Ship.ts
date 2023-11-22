// import necessary interfaces
import Navigation from "@/interfaces/Navigation";
import Crew from "@/interfaces/Crew";
import Fuel from "@/interfaces/Fuel";
import Cooldown from "@/interfaces/Cooldown";
import Frame from "@/interfaces/Frame";
import Reactor from "@/interfaces/Reactor";
import Engine from "@/interfaces/Engine";
import Module from "@/interfaces/Module";
import Mount from "@/interfaces/Mount";
import Registration from "@/interfaces/Registration";
import Cargo from "@/interfaces/Cargo";

interface Ship {
  symbol: string;
  nav: Navigation;
  crew: Crew;
  fuel: Fuel;
  cooldown: Cooldown;
  frame: Frame;
  reactor: Reactor;
  engine: Engine;
  modules: Module[];
  mounts: Mount[];
  registration: Registration;
  cargo: Cargo;
}

export default Ship;

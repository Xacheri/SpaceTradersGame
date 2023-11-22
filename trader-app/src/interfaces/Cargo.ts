interface Cargo {
  capacity: number;
  units: number;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  inventory: any[]; // todo: figure out how to type this
}

export default Cargo;

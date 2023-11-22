import ContractTerms from "@/interfaces/ContractTerms";

interface Contract {
  id: string;
  factionSymbol: string;
  type: string;
  terms: ContractTerms;
  accepted: boolean;
  fulfilled: boolean;
  expiration: string;
  deadlineToAccept: string;
}

export default Contract;

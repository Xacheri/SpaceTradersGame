import DeliverItem from "@/interfaces/DeliverItem";
import Payment from "@/interfaces/Payment";

interface ContractTerms {
  deadline: string;
  payment: Payment;
  deliver: DeliverItem[];
}

export default ContractTerms;

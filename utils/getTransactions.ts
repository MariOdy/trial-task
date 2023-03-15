export interface ITransaction {
  id: string;
  date: string;
  amount: string;
  currency: string;
  category: string;
  creditorName: string;
}

const getTransactions = async () => {
  const res = await fetch(
    "https://c8ba3234-0cd5-4176-8def-44f7b79b2f8c.mock.pstmn.io/transactions"
  );
  const data = (await res.json()) as { transactions: ITransaction[] };
  return data;
};

export default getTransactions;

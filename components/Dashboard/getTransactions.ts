const getTransactions = async () => {
  const res = await fetch(
    "https://c8ba3234-0cd5-4176-8def-44f7b79b2f8c.mock.pstmn.io/transactions"
  );
  return res.json();
};
export default getTransactions;

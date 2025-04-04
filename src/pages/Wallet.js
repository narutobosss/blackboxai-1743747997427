function Wallet() {
  const [activeTab, setActiveTab] = React.useState('deposit');
  const [amount, setAmount] = React.useState('');
  const [transactions, setTransactions] = React.useState([
    { id: 1, type: 'Deposit', amount: 1000, date: '2023-05-15', status: 'Completed' },
    { id: 2, type: 'Withdrawal', amount: 500, date: '2023-05-10', status: 'Completed' },
    { id: 3, type: 'Deposit', amount: 2000, date: '2023-05-05', status: 'Pending' },
    { id: 4, type: 'Winning', amount: 1500, date: '2023-05-01', status: 'Completed' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    const newTransaction = {
      id: transactions.length + 1,
      type: activeTab === 'deposit' ? 'Deposit' : 'Withdrawal',
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };
    
    setTransactions([newTransaction, ...transactions]);
    setAmount('');
    alert(`${activeTab === 'deposit' ? 'Deposit' : 'Withdrawal'} request submitted!`);
  };

  const balance = transactions.reduce((total, tx) => {
    if (tx.status === 'Completed') {
      return tx.type === 'Deposit' || tx.type === 'Winning' 
        ? total + tx.amount 
        : total - tx.amount;
    }
    return total;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Wallet</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Current Balance</h2>
            <p className="text-3xl font-bold">₹{balance.toLocaleString()}</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Add Money
          </button>
        </div>

        <div className="flex border-b">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'deposit' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('deposit')}
          >
            Deposit
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'withdraw' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('withdraw')}
          >
            Withdraw
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              {activeTab === 'deposit' ? 'Deposit' : 'Withdraw'} Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter amount"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${activeTab === 'deposit' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {activeTab === 'deposit' ? 'Deposit' : 'Withdraw'} Money
          </button>
        </form>
      </div>

      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td className="px-6 py-4 whitespace-nowrap">{tx.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    tx.type === 'Deposit' || tx.type === 'Winning' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {tx.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">₹{tx.amount.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    tx.status === 'Completed' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function MyContests() {
  const contests = [
    {
      id: 1,
      title: '1₹ Daily Lottery',
      entryDate: '2023-05-15',
      drawDate: '2023-05-20',
      status: 'Active',
      ticketNumber: 'DL-2023-00125',
      prize: '₹25,000'
    },
    {
      id: 2,
      title: '3₹ Weekly Special',
      entryDate: '2023-05-10',
      drawDate: '2023-05-17',
      status: 'Completed',
      ticketNumber: 'WS-2023-00342',
      prize: '₹50,000',
      result: 'Not Won'
    },
    {
      id: 3,
      title: '5₹ Mega Jackpot',
      entryDate: '2023-05-05',
      drawDate: '2023-05-15',
      status: 'Completed',
      ticketNumber: 'MJ-2023-00189',
      prize: '₹1,00,000',
      result: 'Won ₹5,000'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Contests</h1>
      
      <div className="space-y-4">
        {contests.map(contest => (
          <div key={contest.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{contest.title}</h2>
                <p className="text-gray-600">Ticket: {contest.ticketNumber}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                contest.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {contest.status}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-gray-500 text-sm">Entry Date</p>
                <p>{contest.entryDate}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Draw Date</p>
                <p>{contest.drawDate}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Prize</p>
                <p className="font-medium">{contest.prize}</p>
              </div>
            </div>
            
            {contest.result && (
              <div className="mt-2">
                <p className="text-gray-500 text-sm">Result</p>
                <p className={`font-medium ${
                  contest.result.includes('Won') 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {contest.result}
                </p>
              </div>
            )}
            
            {contest.status === 'Active' && (
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                View Details →
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
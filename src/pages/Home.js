function Home() {
  const lotteryBoxes = [
    { price: '1₹', joined: 1250, winnings: '₹25,000', winners: 5 },
    { price: '3₹', joined: 850, winnings: '₹50,000', winners: 3 },
    { price: '5₹', joined: 600, winnings: '₹1,00,000', winners: 1 }
  ];

  const trendingContests = [
    { title: 'Mega Jackpot', prize: '₹5,00,000', image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg' },
    { title: 'Weekly Special', prize: '₹2,50,000', image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg' },
    { title: 'New User Bonus', prize: '₹1,00,000', image: 'https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg' }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Today's Lotteries</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {lotteryBoxes.map((box, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">{box.price} Lottery</h2>
            <div className="space-y-3">
              <p>Joined: {box.joined.toLocaleString()}</p>
              <p>Total Winnings: {box.winnings}</p>
              <p>Winners: {box.winners}</p>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
              Join Now
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingContests.map((contest, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={contest.image} alt={contest.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{contest.title}</h3>
              <p className="text-gray-600 mt-2">Prize: {contest.prize}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
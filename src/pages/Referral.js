function Referral() {
  const referralCode = 'DLT-2023-5678';
  const referralLink = `https://dreamlottery.com/invite/${referralCode}`;
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', color: 'bg-green-500' },
    { name: 'Facebook', icon: 'fab fa-facebook', color: 'bg-blue-600' },
    { name: 'Twitter', icon: 'fab fa-twitter', color: 'bg-blue-400' },
    { name: 'Email', icon: 'fas fa-envelope', color: 'bg-gray-600' }
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Refer & Earn</h1>
      
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-4">
          Invite friends to join Dream Lottery and earn 10% of their first deposit!
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-1">Your Referral Code</p>
          <p className="text-2xl font-bold text-blue-600">{referralCode}</p>
        </div>
        
        <div className="relative">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md pr-20"
          />
          <button
            onClick={copyToClipboard}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded text-sm"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Share via</h2>
        <div className="grid grid-cols-4 gap-2">
          {shareOptions.map((option, index) => (
            <button
              key={index}
              className={`${option.color} text-white p-3 rounded-full hover:opacity-90`}
            >
              <i className={`${option.icon} text-lg`}></i>
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <i className="fas fa-info-circle text-yellow-400"></i>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              You'll receive your bonus when your friend makes their first deposit.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="font-semibold mb-2">How it works:</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Share your unique referral link with friends</li>
          <li>They sign up using your link</li>
          <li>When they make their first deposit, you get 10% bonus</li>
          <li>No limit on how much you can earn!</li>
        </ul>
      </div>
    </div>
  );
}
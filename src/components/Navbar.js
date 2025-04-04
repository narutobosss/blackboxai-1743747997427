const { Link } = ReactRouterDOM;

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Dream Lottery
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/wallet" className="hover:text-blue-200">Wallet</Link>
          <Link to="/my-contests" className="hover:text-blue-200">My Contests</Link>
          <Link to="/notifications" className="hover:text-blue-200">Notifications</Link>
          <Link to="/referral" className="hover:text-blue-200">Referral</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:text-blue-200">Login</Link>
          <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">Sign Up</Link>
        </div>
        <button className="md:hidden">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
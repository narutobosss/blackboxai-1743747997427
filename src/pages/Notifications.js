function Notifications() {
  const [notifications, setNotifications] = React.useState([
    {
      id: 1,
      title: 'New Lottery Available',
      message: 'The 5₹ Mega Jackpot is now open for entries!',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      title: 'Withdrawal Processed',
      message: 'Your withdrawal of ₹500 has been completed.',
      time: '1 day ago',
      read: true
    },
    {
      id: 3,
      title: 'Contest Results',
      message: 'The 1₹ Daily Lottery results are out. Check your tickets!',
      time: '3 days ago',
      read: true
    },
    {
      id: 4,
      title: 'Account Verified',
      message: 'Your account verification is complete. Thank you!',
      time: '1 week ago',
      read: true
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-bold">Notifications</h1>
        <button 
          onClick={markAllAsRead}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          Mark all as read
        </button>
      </div>
      
      <div className="divide-y divide-gray-200 max-h-[500px] overflow-y-auto">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`p-4 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-gray-600 mt-1">{notification.message}</p>
              </div>
              {!notification.read && (
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              )}
            </div>
            <p className="text-gray-400 text-sm mt-2">{notification.time}</p>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t text-center">
        <button className="text-blue-600 hover:text-blue-800">
          View all notifications
        </button>
      </div>
    </div>
  );
}
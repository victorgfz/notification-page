import React from 'react'
import './App.css'
import Notification from './Notification';


const App = () => {
  const [notifications, setNotifications] = React.useState([
    {
      name: 'Creed Bratton',
      id: 1,
      descripton: 'reacted to your recent post',
      action: 'My first tournament today!',
      time: '1m ago',
      img: 'photoCreed',
      content: null,
      status: false
    },
    {
      name: 'Pam Beesly',
      id: 2,
      descripton: 'followed you',
      action: '',
      time: '5m ago',
      img: 'photoPam',
      content: null,
      status: false
    },
    {
      name: 'Michael Scott',
      id: 3,
      descripton: 'has joined your group',
      action: 'Chess Club',
      time: '1 day ago',
      img: 'photoMichael',
      content:null,
      status: false
    },
    {
      name: 'Dwight Schrute',
      id: 4,
      descripton: 'sent you a private message',
      action: 'My first tournament today!',
      time: '1 week ago',
      img: 'photoDwight',
      content: 'i love beets, for real, i just love beets so much that i have literally a farm full of beeats, you gotta see it, its just fcking awesome, its like everywhere you see that is beets',
      status: false
    },
    {
      name: 'Kevin Malone',
      id: 5,
      descripton: 'commented on ',
      action: 'your picture',
      time: '2 weeks ago',
      img: 'photoKevin',
      content: null,
      status: true
    },
    {
      name: 'Stanley Hudson',
      id: 6,
      descripton: 'reacted to your recent post',
      action: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      img: 'photoStanley',
      content: null,
      status: false
    },
    {
      name: 'Kanye West',
      id: 7,
      descripton: 'joined the group',
      action: 'Ni**as in Paris',
      time: '1 month ago',
      img: 'photoJair',
      content: null,
      status: true
    },
  ])
  
  const [unread, setUnread] = React.useState(0)

  React.useEffect(() => {
    setUnread((notifications.filter((item) => !item.status)).length)
  }, [notifications])

  function handleClick() {
    setNotifications(notifications.map((item) => {
      return {...item, status: true }
    }))
    
  }

  return (
    <main className='wrapper'>
      <div className='container'>
        <div className='header'><h2 className='title'>Notifications {unread > 0 && <span className='unread' >{unread}</span> }</h2> <h2 onClick={handleClick} className='allRead'>Mark all as read</h2></div>
        <ul className='mainContent'>
          
          {notifications.map((item) => {
            return (
              <Notification read={() => {
                setNotifications([...notifications], item.status = true)
              }} content={item.content} key={item.id} id={item.id} img={item.img} status={item.status} name={item.name} description={item.descripton} action={item.action} time={item.time} />
            )
          })} 

        </ul>
      </div>
    </main>
  );
}

export default App;

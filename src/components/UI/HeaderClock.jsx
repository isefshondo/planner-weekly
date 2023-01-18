import React from 'react'

const HeaderClock = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 60000);
    return clearInterval(setInterval(() => setCurrentTime(new Date()), 60000));
  }, []);

  return (
    <div className="header-hour">
      <h1>
        {currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h1>
      <p>
        {
          new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }
      </p>
    </div>
  );
}

export default HeaderClock
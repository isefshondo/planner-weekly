import React from 'react'
import { HeaderHour } from './Header.styles';

const Clock = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August',
    'September', 'October', 'November', 'December'];

  let actualDate = new Date();
  let actualMonth = months[actualDate.getMonth()];
  let actualDay = actualDate.getDate();
  let abbreviationLogic = (actualDay % 10);
  let actualYear = actualDate.getFullYear();
  let abbreviationDate = 0;

  if(abbreviationLogic === 1) abbreviationDate = actualDay + 'st';
  if(abbreviationLogic === 2) abbreviationDate = actualDay + 'nd';
  if(abbreviationLogic === 3) abbreviationDate = actualDay + 'rd';
  if(abbreviationLogic === 0 || abbreviationLogic > 3) abbreviationDate = actualDay + 'th';


  React.useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 60000);
    return clearInterval(setInterval(() => setCurrentTime(new Date()), 60000));
  }, []);

  return (
    <HeaderHour>
      <h1>
        {
          currentTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
        }
      </h1>
      <p>
        {
          actualMonth + ' ' + abbreviationDate + ', ' + actualYear
        }
      </p>
    </HeaderHour>
  );
}

export default Clock

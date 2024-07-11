import React, { useState, useEffect } from 'react';
//import '../styles/F1Schedule.css';

function F1Schedule() {
    const [schedules, setSchedules] = useState([]);
  
    useEffect(() => {
      fetch('/api/f1-schedule')
        .then(response => response.json())
        .then(data => setSchedules(data))
        .catch(error => console.error('Error fetching F1 schedules:', error));
    }, []);
  
    return (
      <div className='schedules'>
        <h2>F1 Schedule</h2>
        {schedules.map(schedule => (
          <div key={schedule.id}>
            <p>{schedule.event} - {schedule.start_date} at {schedule.start_time}</p>
          </div>
        ))}
      </div>
    );
  }

export default F1Schedule;
import React, { useEffect, useState } from 'react';

function AllSchedules() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetch('/api/schedules')
      .then(response => response.json())
      .then(data => setSchedules(data))
      .catch(error => console.error('Error fetching schedules:', error));
  }, []);

  return (
    <div>
      {schedules.map(schedule => (
        <div key={schedule._id}>
          {/* Render your schedule data here */}
          <p>{schedule.name}: {schedule.time}</p>
        </div>
      ))}
    </div>
  );
}

export default AllSchedules;
import React, { useState, useEffect } from 'react'
import List from './List';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [todayBirthDay, setTodayBirthDay] = useState([]);

  const getAge = () => {

    people.map((personDate) => {

      let today = new Date();
      let birthdate = personDate.date.split('/');
      let year = today.getFullYear() - parseInt(birthdate[2]);
      let month = (today.getMonth() + 1) - parseInt(birthdate[1]);
      let datee = today.getDate() - parseInt(birthdate[0]);
      month == 0 && datee == 0 && setTodayBirthDay(prevItems => [...prevItems, personDate]);

    });

  }
  useEffect(() => {
    todayBirthDay.length === 0 && getAge();
  }, []);
  return (
    <main>
      <section className="container">
        <h3>{todayBirthDay.length} birthdays today</h3>
        <List people={todayBirthDay} />
        <button onClick={() => setTodayBirthDay([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;

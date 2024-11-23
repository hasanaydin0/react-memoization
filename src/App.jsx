import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Form from './components/Form';
import List from './components/List';
import Filter from './components/Filter';

function App() {
   console.log('APP rendered');

   const [count, setCount] = useState(0);
   const [list, setList] = useState([]);
   const [filter, setFilter] = useState('');

   const handleIncrease = useCallback(() => {
      setCount(count + 1);
   }, [count]);

   const addListItem = useCallback(
      (item) => {
         setList([...list, item]);
      },
      [list],
   );

   const handleFilter = useCallback(
      (e) => {
         setFilter(e.target.value);
      },
      [filter],
   );

   const filteredItems = useMemo(() => {
      return list.filter((i) => i.toLocaleLowerCase('TR').includes(filter.toLocaleLowerCase('TR')));
   }, [list, filter]);

   return (
      <>
         <Header />
         <hr />
         <Counter count={count} onIncreaseCount={handleIncrease} />
         <hr />
         <Form onAddListItem={addListItem} />
         <hr />
         <Filter filter={filter} onFilter={handleFilter} />
         <List list={filteredItems} />
      </>
   );
}

export default App;

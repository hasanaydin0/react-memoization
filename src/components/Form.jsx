import React, { memo, useState } from 'react';

function Form({ onAddListItem }) {
   console.log('Form rendered');

   const [item, setItem] = useState('');

   const handleAddItem = () => {
      onAddListItem(item);
      setItem('');
   };
   return (
      <>
         <input type="text" placeholder="item name" value={item} onChange={(e) => setItem(e.target.value)} />
         <button onClick={handleAddItem}>Add</button>
      </>
   );
}

export default memo(Form);

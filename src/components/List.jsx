import React, { memo } from 'react';
import ListItem from './ListItem';

function List({ list }) {
   console.log('List rendered');
   return (
      <ul>
         {list.map((i, index) => (
            <ListItem item={i} key={index} />
         ))}
      </ul>
   );
}

export default memo(List);

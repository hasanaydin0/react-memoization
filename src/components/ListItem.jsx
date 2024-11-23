import React, { memo } from 'react';

function ListItem({ item }) {
   console.log('List Item rendered', item);
   return <li>{item}</li>;
}

export default memo(ListItem);

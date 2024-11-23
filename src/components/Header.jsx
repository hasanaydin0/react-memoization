import React, { memo } from 'react';

function Header() {
   console.log('Header rendered');

   return <h4>Header</h4>;
}

export default memo(Header);

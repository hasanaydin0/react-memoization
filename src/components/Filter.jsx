import React, { memo } from 'react';

function Filter({ filter, onFilter }) {
   return (
      <>
         <input type="text" placeholder="filter" value={filter} onChange={onFilter} />
      </>
   );
}

export default memo(Filter);

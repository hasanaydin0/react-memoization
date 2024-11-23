import React, { useState, useEffect, memo } from 'react';

function Counter({ count, onIncreaseCount }) {
   console.log('Counter rendered');

   return (
      <>
         <span>{count}</span>
         <button onClick={onIncreaseCount}>+</button>
      </>
   );
}

export default memo(Counter);

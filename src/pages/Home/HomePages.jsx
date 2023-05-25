/* eslint-disable no-unused-vars */
import { useState } from 'react';
import api from '../../service/api/api.js';
import ListCoins from '../../components/ListCoins/ListCoins.jsx';

function HomePages() {
  return (
    <div>
      <span>Page of home</span>
      <ListCoins />
    </div>
  )
}

export default HomePages
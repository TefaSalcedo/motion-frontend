import React from 'react';
import CrudPage from '../components/crud/crudPage.jsx';
import { StoreProvider } from '../components/crud/store.jsx';


function MotionsPage() {
  return (
    <StoreProvider>
      <div className="MotionsPage">
        <CrudPage/> 
      </div>
    </StoreProvider>
  );
}

export default MotionsPage;
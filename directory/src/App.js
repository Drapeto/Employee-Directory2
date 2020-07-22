import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import Table from './components/Table';
import Employees from './components/Employees';
import Wrapper from './components/Wrapper';
import Body from './components/Body';

import './App.css'

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Search />
        <Filter />
        <Table />
        <Employees />
        <Body />
      </Wrapper> 

    </div>
  );
}

export default App;

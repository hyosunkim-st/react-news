import React from 'react';
import NewsPage from './pages/NewsPage';
// import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';

import TodosContainer from './containers/TodosContainer';
import styled from 'styled-components';
import { MenuProvider } from './context';
import { TodoProvider } from './TodoContext';


const App = () => {
  const LinkStyle = styled.div`
  display: flex;
  font-size: 5.125rem;
  cursor: pointer;
  padding-bottom: 0.25rem;
  white-space: pre;
  text-decoration: none;
  justify-content: center;
  `;
  return (
<>
<MenuProvider>
    <TodoProvider>
      <LinkStyle>
        <ul><Link to="/todo">TODO</Link></ul>     
        <ul><Link to="/news">NEWS</Link></ul>
      </LinkStyle>
        <Route path="/todo" component={TodosContainer} exact={true} />
        <Route path="/news/:category?" component={NewsPage} />
        <Route path="/" component={NewsPage} />
    </TodoProvider>  
</MenuProvider>
    
</>
    );    
};
export default App;


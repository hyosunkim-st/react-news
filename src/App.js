import React from 'react';
import NewsPage from './pages/NewsPage';
// import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import AppTodo from './pages/todo';
import styled from 'styled-components';
import { MenuProvider } from './context';
import { TodoProvider } from './TodoContext';
import MoviePage from './pages/MoviePage';
import CounterContainer from './Counter';

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
{/* <CounterContainer> */}

<MenuProvider>
    <TodoProvider>

      <LinkStyle>
        <ul><Link to="/todo">TODO</Link></ul>     
        <ul><Link to="/news">NEWS</Link></ul>
        <ul><Link to="/movies">MOVIES</Link></ul>
      </LinkStyle>
        <Route path="/todo" component={AppTodo} exact={true} />
        <Route path="/news/:category?" component={NewsPage} />
        <Route path="/" component={NewsPage} exact={true} />
        <Route path="/movies" component={MoviePage} exact={true} />

    </TodoProvider>  
</MenuProvider>

{/* </CounterContainer> */}


    {/* <MenuProvider>
      
        <LinkStyle>
          <ul><Link to="/todo">TODO</Link></ul>
          
          <ul><Link to="/">NEWS</Link></ul>
        </LinkStyle>

        <Route path="/:category?" component={NewsPage} />
        <Route path="/todo" component={AppTodo} />
        
    </MenuProvider> */}

    
</>
    );    
};
export default App;


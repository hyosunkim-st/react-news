import React, { useContext } from 'react';
// import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import {MenuContext} from '../context';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  }
`;
const NewsList = ({ category, country }) => {

  const {state,action} =useContext(MenuContext);
  const [loading, response, error, setResponse] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;

    console.log(`[USE_PROMISE]${country}, ${category}`);
    console.log(state.Menu[country][category].length);
    
    if (state.Menu[country][category].length === 0) {
      let response= axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
      );
      return(
        response
      ); 
    }
    else {
      let response = {
        data: {
          // eslint-disable-next-line
          articles: state.Menu[country][category] 
          
      },
    };
      return response;    
    }
  }, [category, country]);


  // const onClick = (newCountry) => {
  //   // setCountry(newCountry)
  // }
 

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
 
  // 아직 response 값이 설정되지 않았을 때
  // if (!response) {
  //   return null;
  // }

  if (response){

    console.log(`[RESPONSE] ${country} ${category} ${response.data.articles}`);

    let nc = {state: {...state}, action: {...action} };
    nc.state.Menu[country][category] = response.data.articles;
    
    console.log(nc.state.Menu)
    console.log(response)

    action.setMenu(nc);
    setResponse(null);
  }
  // 에러가 발생했을 때
  if (error) {
    console.log(error)
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
 
  // response 값이 유효할 때
  // const { articles } = response.data;
  console.log(state.Menu)
  console.log([category])
  console.log(state.Menu[country])
  const articles = state.Menu[country][category];
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem 
          key={article.url} 
          article={article} />
      ))}
    </NewsListBlock>
  );
};
 
export default NewsList;
import React, { useState } from 'react';
import Categories from '../componentsNews/Categories';
import NewsList from '../componentsNews/NewsList';

 
const NewsPage = ({ match }) => { //App.js에 Route 때문
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = match.params.category || 'all';
  const [country, setCountry] = useState('kr');
  
  const onClickForME = (newCountry) => {
    setCountry( newCountry )
  }
  
  return (
    <>
      <Categories onCountryClick = {onClickForME}/>
      
      <NewsList 
        category={category} 
        country={country} />
    
    </>
  );
};
 
export default NewsPage;
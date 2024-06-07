
import React, { useState } from 'react';
import styled from 'styled-components';

const CategoryBtn = styled.button`
  display: inline-block;
  width: 150px;
  padding: 10px;
  border: none;
  background: #fff;

  text-align: center;
  font-size: 18px;
  font-weight: 400;

  cursor: pointer;
  border-bottom: ${props => (props.active ? '4px solid #222' : 'none')};
`;

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState('홈');

  const changeUnderLine = e => {
    setCurrentTab(e.target.value);
  };


  return (
    <>
      <CategoryBtn
        value="홈"
        active={currentTab === '홈'}
        onClick={changeUnderLine}
      >
        홈
      </CategoryBtn>
      <CategoryBtn
        value="베스트"
        active={currentTab === '베스트'}
        onClick={changeUnderLine}
      >
        베스트
      </CategoryBtn>
      <CategoryBtn
        value="카테고리"
        active={currentTab === '카테고리'}
        onClick={changeUnderLine}
      >
        카테고리
      </CategoryBtn>
    </>
  );

  
};

export default Navbar;
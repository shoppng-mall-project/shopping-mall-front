
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

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

  const changeUnderLine = (value) => {
    setCurrentTab(value);
  };


  return (
    <>
      <NavLink to="/">
        <CategoryBtn
          value="홈"
          active={currentTab === '홈'}
          onClick={() => changeUnderLine('홈')}
        >
          홈
        </CategoryBtn>
      </NavLink>
      <NavLink to="/best">
        <CategoryBtn
          value="베스트"
          active={currentTab === '베스트'}
          onClick={() => changeUnderLine('베스트')}
        >
          베스트
        </CategoryBtn>
      </NavLink>
      <NavLink to="/category">
        <CategoryBtn
          value="카테고리"
          active={currentTab === '카테고리'}
          onClick={() => changeUnderLine('카테고리')}
        >
          카테고리
        </CategoryBtn>
      </NavLink>
    </>
  );

  
};

export default Navbar;
import React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import {
  StyledHeader,
  StyledForm,
  StyledSearchFormBtn,
  StyledSpan,
  StyledInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleImputValue = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };
  return (
    <StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledSearchFormBtn type="submit">
          <AiOutlineSearch
            style={{
              width: '20',
              height: '20',
              verticalAlign: 'middle',
            }}
          />
          <StyledSpan>Search</StyledSpan>
        </StyledSearchFormBtn>

        <StyledInput
          onChange={handleImputValue}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};

export default Searchbar;

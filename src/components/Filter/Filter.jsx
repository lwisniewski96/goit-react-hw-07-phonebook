import React from 'react';
import PropTypes from 'prop-types';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ filter, onFilterChange }) => (
  <FilterWrapper>
    <FilterLabel>
      Filter contacts by name:
      <FilterInput
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterLabel>
  </FilterWrapper>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;

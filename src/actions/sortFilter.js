const SortFilters = {
  DATE_ASCENDING: 'DATE_ASCENDING',
  DATE_DESCENDING: 'DATE_DESCENDING',
  VOTES_ASCENDING: 'VOTES_ASCENDING',
  VOTES_DESCENDING: 'VOTES_DESCENDING',
};

const setSortFilter = filter => ({
  type: 'SET_SORT_FILTER',
  filter,
});

export { SortFilters, setSortFilter };

import data from '../photos';

export function getFilters() {
  let allFilters = [];
  data.forEach(photo => {
    allFilters.push(photo.filter);
  });

  return [...new Set(allFilters)];
}

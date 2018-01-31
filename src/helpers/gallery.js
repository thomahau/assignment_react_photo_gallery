// import data from '../photos';

// const PANELS_PER_PAGE = 6;

export function filterByFilter(photos, igFilter) {
  if (!igFilter) {
    return photos;
  }

  let filteredPhotos = [];
  photos.forEach(photo => {
    if (photo.filter === igFilter) {
      filteredPhotos.push(photo);
    }
  });

  return filteredPhotos;
}

export function paginatePhotos(photos, page, PANELS_PER_PAGE) {
  if (page === 1) {
    return photos.slice(0, PANELS_PER_PAGE);
  }

  const start = (page - 1) * PANELS_PER_PAGE + 1;
  const end = page * PANELS_PER_PAGE + 1;

  return photos.slice(start, end);
}

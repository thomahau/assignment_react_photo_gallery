const PANELS_PER_PAGE = 12;

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

export function filterByQuery(photos, searchQuery) {
  const regex = new RegExp(searchQuery, 'i');
  let filteredPhotos = [];

  photos.forEach(photo => {
    if (
      (photo.caption && regex.test(photo.caption.text)) ||
      regex.test(photo.user.username)
    ) {
      filteredPhotos.push(photo);
    }
  });

  return filteredPhotos;
}

export function sortPhotos(photos, sortDirection) {
  if (sortDirection === 'Descending') {
    photos.sort(function(a, b) {
      return b.created_time - a.created_time;
    });
  } else {
    photos.sort(function(a, b) {
      return a.created_time - b.created_time;
    });
  }

  return photos;
}

export function paginatePhotos(photos, page) {
  if (page === 1) {
    return photos.slice(0, PANELS_PER_PAGE);
  }

  const start = (page - 1) * PANELS_PER_PAGE;
  const end = page * PANELS_PER_PAGE + 1;

  return photos.slice(start, end);
}

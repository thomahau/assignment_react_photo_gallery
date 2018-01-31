export function formatDate(createdAt) {
  return new Date(createdAt * 1000).toLocaleString();
}

export function formatCaption(caption) {
  if (caption.length > 150) {
    return caption.slice(0, 149) + ' ...';
  } else {
    return caption;
  }
}

export function getTags(tags) {
  if (!tags.length) {
    return 'N/A';
  } else {
    return `#${tags.join(' #')}`;
  }
}

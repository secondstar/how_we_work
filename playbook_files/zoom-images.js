var images = [
  'acquisition-channels_small.jpg',
  'assumptions_small.jpg',
  'criticalpath_small.jpg',
  'editorial-calendar-trello_small.jpg',
  'hiring-trello_small.jpg',
  'live-trello_small.jpg',
  'next-up-trello_small.jpg',
  'research-trello_small.jpg',
  'sales-trello_small.jpg',
  'storyboard_small.jpg'
];

for (var index = 0; index < images.length; index++) {
  var fileName = 'images/' + images[index];
  var target = document.querySelector('img[src="' + fileName + '"]');

  var parent = target.parentNode;
  var sibling = target.nextSibling;

  var clone = target.cloneNode(true);

  var element = document.createElement('a');
  element.rel = 'lightbox';
  element.href = fileName.replace('_small', '');
  element.appendChild(clone);

  parent.removeChild(target);
  parent.appendChild(element);

  if (sibling) {
    parent.insertBefore(element, sibling);
  }
}

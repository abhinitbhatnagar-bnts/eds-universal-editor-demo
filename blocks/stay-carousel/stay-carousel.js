import { moveInstrumentation, brandPicture } from '../../scripts/scripts.js';

/**
 * "Find Your Next Stay" media-card carousel.
 * Item (stay-card) cells: image, tag, text (name/description/location), link.
 * @param {Element} block
 */
export default function decorate(block) {
  const track = document.createElement('ul');
  track.className = 'stay-carousel-track';

  [...block.children].forEach((row) => {
    const [imageCell, tagCell, textCell, linkCell] = [...row.children];

    const li = document.createElement('li');
    li.className = 'stay-card';
    moveInstrumentation(row, li);

    // image + tag overlay
    const figure = document.createElement('div');
    figure.className = 'stay-card-image';
    const img = imageCell && imageCell.querySelector('img');
    const pic = brandPicture(img, { breakpoints: [{ width: '750' }] });
    if (pic) figure.append(pic);
    if (tagCell && tagCell.textContent.trim()) {
      const tag = document.createElement('span');
      tag.className = 'stay-card-tag';
      tag.textContent = tagCell.textContent.trim();
      figure.append(tag);
    }
    li.append(figure);

    // body (name / description / location authored as rich text)
    if (textCell) {
      textCell.classList.add('stay-card-body');
      li.append(textCell);
    }

    // cta
    const link = linkCell && linkCell.querySelector('a');
    if (link) {
      link.classList.add('button', 'secondary', 'stay-card-cta');
      li.append(link);
    }

    track.append(li);
  });

  block.replaceChildren(track);
}

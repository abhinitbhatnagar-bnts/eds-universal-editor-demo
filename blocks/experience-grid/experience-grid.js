import { moveInstrumentation, brandPicture } from '../../scripts/scripts.js';

function textOf(cell) {
  return cell ? cell.textContent.trim() : '';
}

/**
 * Experience photo-tile grid with overlaid labels.
 * Item (experience-tile) field order: image, title, link.
 * Use the "wide" tile style on the first/last tiles for the full-width rows.
 * @param {Element} block
 */
export default function decorate(block) {
  const list = document.createElement('ul');
  list.className = 'experience-grid-list';

  [...block.children].forEach((row) => {
    const [imageCell, titleCell, linkCell] = [...row.children];
    const title = textOf(titleCell);
    const href = linkCell?.querySelector('a')?.getAttribute('href') || textOf(linkCell) || '#';

    const li = document.createElement('li');
    li.className = 'experience-tile';
    moveInstrumentation(row, li);

    const link = document.createElement('a');
    link.className = 'experience-tile-link';
    link.href = href;
    link.setAttribute('aria-label', title);

    const img = imageCell && imageCell.querySelector('img');
    const pic = brandPicture(img, { alt: title, breakpoints: [{ width: '750' }] });
    if (pic) link.append(pic);

    if (title) {
      const label = document.createElement('span');
      label.className = 'experience-tile-label';
      label.textContent = title;
      link.append(label);
    }

    li.append(link);
    list.append(li);
  });

  block.replaceChildren(list);
}

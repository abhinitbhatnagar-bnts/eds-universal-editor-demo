import { brandPicture } from '../../scripts/scripts.js';

/**
 * Hard Rock landing hero.
 * Model field order: title, eyebrow, dates, image, imageAlt.
 * Renders a gradient stage with a foreground "guitar" image and overlaid copy.
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  let imageRow;
  const textRows = [];
  rows.forEach((row) => {
    if (row.querySelector('picture, img')) imageRow = row;
    else textRows.push(row);
  });

  // overlaid copy: title, eyebrow, dates (extra rows ignored)
  const content = document.createElement('div');
  content.className = 'hero-content';
  const roles = ['hero-title', 'hero-eyebrow', 'hero-dates'];
  textRows.slice(0, roles.length).forEach((row, i) => {
    const cell = row.firstElementChild || row;
    cell.classList.add(roles[i]);
    if (cell.textContent.trim()) content.append(cell);
  });

  // foreground media (guitar render)
  const media = document.createElement('div');
  media.className = 'hero-media';
  const img = imageRow && imageRow.querySelector('img');
  const picture = brandPicture(img, { eager: true, breakpoints: [{ width: '750' }] });
  if (picture) media.append(picture);

  block.replaceChildren(content, media);
}

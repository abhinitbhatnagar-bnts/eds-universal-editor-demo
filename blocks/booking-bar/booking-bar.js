const SEARCH_ICON = `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
  <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

/**
 * Booking search widget.
 * Model field order: destination, dates, guests.
 * @param {Element} block
 */
export default function decorate(block) {
  const cells = [...block.children].map((row) => row.firstElementChild || row);
  const [destination, dates, guests] = cells;

  const fields = document.createElement('div');
  fields.className = 'booking-bar-fields';

  if (destination && destination.textContent.trim()) {
    destination.classList.add('booking-destination');
    fields.append(destination);
  }

  const meta = document.createElement('div');
  meta.className = 'booking-meta';
  [dates, guests].forEach((cell) => {
    if (cell && cell.textContent.trim()) {
      cell.classList.add('booking-meta-item');
      meta.append(cell);
    }
  });
  if (meta.children.length) fields.append(meta);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'booking-search';
  button.setAttribute('aria-label', 'Search');
  button.innerHTML = SEARCH_ICON;

  block.replaceChildren(fields, button);
}

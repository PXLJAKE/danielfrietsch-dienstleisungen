// Einziges Skript der Seite. Speichert nichts im Browser und lädt nichts von Dritten.

// Mobiles Menü nach Klick auf einen Eintrag schließen
const menu = document.querySelector<HTMLDetailsElement>('.nav-mobile');
menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.open = false;
  });
});

// Bildansicht: progressive Verbesserung für die Galerie-Links
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[data-lightbox]'));
const dialog = document.querySelector<HTMLDialogElement>('#lightbox');

if (dialog && links.length > 0) {
  const image = dialog.querySelector('img') as HTMLImageElement;
  const caption = dialog.querySelector('figcaption') as HTMLElement;
  let current = 0;

  const show = (index: number) => {
    current = (index + links.length) % links.length;
    const link = links[current];
    const thumbnail = link.querySelector('img');
    image.src = link.href;
    image.alt = thumbnail?.alt ?? '';
    caption.textContent = thumbnail?.alt ?? '';
  };

  links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      show(index);
      dialog.showModal();
    });
  });

  dialog.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-prev]')?.addEventListener('click', () => show(current - 1));
  dialog.querySelector('[data-next]')?.addEventListener('click', () => show(current + 1));

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });

  // Klick auf den Hintergrund schließt die Ansicht
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    links[current].focus();
  });
}

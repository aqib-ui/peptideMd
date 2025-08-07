export function setFavicon(href: string): void {
  if (typeof document === 'undefined') return;

  const link: HTMLLinkElement =
    document.querySelector("link[rel*='icon']") || document.createElement("link");

  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = href;

  document.head.appendChild(link);
}

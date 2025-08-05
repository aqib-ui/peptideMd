// utils/favicon.ts
export function setFavicon(url: string) {
  const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
  if (link) {
    link.href = url;
  } else {
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.href = url;
    document.head.appendChild(newLink);
  }
}

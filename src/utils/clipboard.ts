// Clipboard helper
export function copyToClipboard(text: string, setCopied: (val: boolean) => void) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = text;
  const plainText = tempDiv.textContent || tempDiv.innerText || '';
  navigator.clipboard.writeText(plainText);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
} 
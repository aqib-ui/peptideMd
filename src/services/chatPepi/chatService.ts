// Chat-pepi API service
export async function fetchUserChats(userToken: string): Promise<any[]> {
  const res = await fetch(
    'https://peptide-backend.mazedigital.us/chats/v1_get-by-user',
    { headers: { Authorization: `Bearer ${userToken}` } }
  );
  const data = await res.json();
  let chats: any[] = [];
  if (data.data && typeof data.data === 'object') {
    Object.values(data.data).forEach((arr: any) => {
      if (Array.isArray(arr)) {
        chats = chats.concat(
          arr.map((chat: any) => {
            let title = 'New Chat';
            try {
              const hist = JSON.parse(chat.history);
              if (Array.isArray(hist) && hist.length > 0) {
                const firstUserMsg = hist.find((m: any) => m.isUser);
                if (firstUserMsg && firstUserMsg.text) {
                  const words = firstUserMsg.text.split(' ');
                  title = words.slice(0, 8).join(' ');
                  if (words.length > 8) title += ' ...';
                }
              }
            } catch {}
            return {
              id: chat.id,
              title,
              createdAt: chat.createdAt,
              updatedAt: chat.updatedAt,
              chatIdentifier: chat.chatIdentifier,
            };
          })
        );
      }
    });
  }
  // Remove duplicates based on chatIdentifier
  const uniqueChats = chats.filter((chat, index, self) =>
    index === self.findIndex((c) => c.chatIdentifier === chat.chatIdentifier)
  );
  return uniqueChats;
}

export async function saveChatToBackend(chatIdentifier: string, messages: any[], userToken: string): Promise<void> {
  if (!chatIdentifier || messages.length === 0) return;
  const response = await fetch(
    'https://peptide-backend.mazedigital.us/chats/v1_mobiel_create-or-update',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        chatIdentifier,
        history: JSON.stringify(messages),
      }),
    }
  );
  if (!response.ok) {
    throw new Error('Failed to save chat to backend');
  }
}

export async function loadChatByIdentifier(chatIdentifier: string, userToken: string): Promise<any[]> {
  const res = await fetch(
    `https://peptide-backend.mazedigital.us/chats/v1_mobile_get-by-identifier/${chatIdentifier}`,
    { headers: { Authorization: `Bearer ${userToken}` } }
  );
  const data = await res.json();
  if (data.data && data.data.history) {
    try {
      const parsed = JSON.parse(data.data.history);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch {}
  }
  return [];
} 
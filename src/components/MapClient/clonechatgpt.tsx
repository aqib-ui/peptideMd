// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { HiOutlineMenuAlt2, HiX, HiOutlineTrash } from "react-icons/hi";

// import ShareDialog from "../components/ShareDialog";
// import ReactMarkdown from "react-markdown";
// import { v4 as uuidv4 } from "uuid";

// const AiAssistantPage = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [messages, setMessages] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [chatHistory, setChatHistory] = useState<
//     {
//       id: string;
//       title: string;
//       createdAt: string;
//       updatedAt?: string;
//       chatIdentifier: string;
//     }[]
//   >([]);
//   const [activeChat, setActiveChat] = useState<string | null>(null);
//   const [showShareOptions, setShowShareOptions] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const messagesEndRef = useRef<null | HTMLDivElement>(null);

//   // Function to generate a response based on user input from chatgpt
//   const generateResponse = async (userMessage: string) => {
//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMessage }),
//       });
//       const data = await res.json();
//       console.log("🔁 data ===>", data);

//       setMessages((prev) => [
//         ...prev,
//         {
//           text: data.result,
//           isUser: false,
//           timestamp: new Date(),
//         },
//       ]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Sorry, something went wrong. Please try again.",
//           isUser: false,
//           timestamp: new Date(),
//         },
//       ]);
//     }

//     setIsLoading(false);
//     scrollToBottom();
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;

//     // If no chat is active, create a new chat and add the first message
//     if (!activeChat) {
//       const newChatId = uuidv4();
//       const now = new Date().toISOString();
//       setChatHistory((prev) => [
//         {
//           id: newChatId,
//           title:
//             inputValue.split(" ").slice(0, 8).join(" ") +
//             (inputValue.split(" ").length > 8 ? " ..." : ""),
//           createdAt: now,
//           updatedAt: now,
//           chatIdentifier: newChatId,
//         },
//         ...prev,
//       ]);
//       setActiveChat(newChatId);

//       // 1. Set first message
//       const firstMsg = {
//         text: inputValue,
//         isUser: true,
//         timestamp: new Date(),
//       };
//       setMessages([firstMsg]);
//       saveChatToBackend(newChatId, [firstMsg]);

//       // 2. Call OpenAI and append response to current messages
//       generateResponseWithAppend(inputValue, [firstMsg]);
//       setInputValue("");
//       return;
//     }

//     // Existing chat logic
//     const userMsg = { text: inputValue, isUser: true, timestamp: new Date() };
//     setMessages((prev) => [...prev, userMsg]);
//     setChatHistory((prev) =>
//       prev.map((chat) =>
//         chat.chatIdentifier === activeChat && chat.title === "New Chat"
//           ? {
//               ...chat,
//               title:
//                 inputValue.split(" ").slice(0, 8).join(" ") +
//                 (inputValue.split(" ").length > 8 ? " ..." : ""),
//             }
//           : chat
//       )
//     );
//     generateResponseWithAppend(inputValue);
//     setInputValue("");
//   };

//   // New helper to always append AI response to current messages
//   const generateResponseWithAppend = async (userMessage: string, baseMessages?: any[]) => {
//     setIsLoading(true);
//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMessage }),
//       });
//       const data = await res.json();
//       setMessages((prev) => [
//         ...(baseMessages || prev),
//         {
//           text: data.result,
//           isUser: false,
//           timestamp: new Date(),
//         },
//       ]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...(baseMessages || prev),
//         {
//           text: "Sorry, something went wrong. Please try again.",
//           isUser: false,
//           timestamp: new Date(),
//         },
//       ]);
//     }
//     setIsLoading(false);
//     scrollToBottom();
//   };

//   // New chat button
//   const handleNewChat = () => {
//     const newChatId = uuidv4();
//     const now = new Date().toISOString();
//     setChatHistory((prev) => [
//       {
//         id: newChatId,
//         title: "New Chat",
//         createdAt: now,
//         updatedAt: now,
//         chatIdentifier: newChatId,
//       },
//       ...prev,
//     ]);
//     setActiveChat(newChatId);
//     setMessages([]);
//   };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Fetch user chats
//   useEffect(() => {
//     const fetchUserChats = async (): Promise<void> => {
//       const userToken = localStorage.getItem("peptide_user_token");
//       const res = await fetch(
//         "https://peptide-backend.mazedigital.us/chats/v1_get-by-user",
//         {
//           headers: { Authorization: `Bearer ${userToken}` },
//         }
//       );
//       const data = await res.json();
//       let chats: any[] = [];
//       if (data.data && typeof data.data === "object") {
//         Object.values(data.data).forEach((arr: any) => {
//           if (Array.isArray(arr)) {
//             chats = chats.concat(
//               arr.map((chat: any) => {
//                 // Parse history and get first user message for title
//                 let title = "New Chat";
//                 try {
//                   const hist = JSON.parse(chat.history);
//                   if (Array.isArray(hist) && hist.length > 0) {
//                     const firstUserMsg = hist.find((m: any) => m.isUser);
//                     if (firstUserMsg && firstUserMsg.text) {
//                       const words = firstUserMsg.text.split(" ");
//                       title = words.slice(0, 8).join(" ");
//                       if (words.length > 8) title += " ...";
//                     }
//                   }
//                 } catch {}
//                 return {
//                   id: chat.id,
//                   title,
//                   createdAt: chat.createdAt,
//                   updatedAt: chat.updatedAt,
//                   chatIdentifier: chat.chatIdentifier, // <-- Make sure this is unique and from backend
//                 };
//               })
//             );
//           }
//         });
//       }
//       console.log(
//         "Fetched chats:",
//         chats.map((c) => c.chatIdentifier)
//       ); // Debug: log all identifiers
//       setChatHistory(chats);
//     };
//     fetchUserChats();
//   }, []);

//   // Load chat by identifier
//   const loadChatByIdentifier = async (
//     chatIdentifier: string
//   ): Promise<void> => {
//     const userToken = localStorage.getItem("peptide_user_token");
//     const res = await fetch(
//       `https://peptide-backend.mazedigital.us/chats/v1_mobile_get-by-identifier/${chatIdentifier}`,
//       {
//         headers: { Authorization: `Bearer ${userToken}` },
//       }
//     );
//     const data = await res.json();
//     if (data.data && data.data.history) {
//       try {
//         const parsed = JSON.parse(data.data.history);
//         if (Array.isArray(parsed)) setMessages(parsed);
//         else setMessages([]);
//       } catch {
//         setMessages([]);
//       }
//     } else {
//       setMessages([]);
//     }
//   };

//   // Only load conversation when user clicks a chat
//   useEffect(() => {
//     if (activeChat) {
//       loadChatByIdentifier(activeChat);
//     }
//   }, [activeChat]);

//   // Save chat to backend
//   const saveChatToBackend = async (
//     chatIdentifier: string,
//     messages: any[]
//   ): Promise<void> => {
//     const userToken = localStorage.getItem("peptide_user_token");
//     await fetch(
//       "https://peptide-backend.mazedigital.us/chats/v1_mobiel_create-or-update",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${userToken}`,
//         },
//         body: JSON.stringify({
//           chatIdentifier,
//           history: JSON.stringify(messages),
//         }),
//       }
//     );
//   };

//   useEffect(() => {
//     if (messages.length > 0) {
//       saveChatToBackend(activeChat || "", messages);
//     }
//   }, [messages, activeChat]);

//   // Copy to clipboard
//   const copyToClipboard = () => {
//     const lastResponse = messages.filter((m) => !m.isUser).pop();
//     if (lastResponse) {
//       // Create temporary element to strip HTML tags
//       const tempDiv = document.createElement("div");
//       tempDiv.innerHTML = lastResponse.text;
//       const plainText = tempDiv.textContent || tempDiv.innerText || "";

//       navigator.clipboard.writeText(plainText);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   // Share button
//   const handleShare = () => {
//     setShowShareOptions(!showShareOptions);
//   };

//   // Helper to check if a date is today
//   const isToday = (dateStr: string) => {
//     const date = new Date(dateStr);
//     const now = new Date();
//     return (
//       date.getDate() === now.getDate() &&
//       date.getMonth() === now.getMonth() &&
//       date.getFullYear() === now.getFullYear()
//     );
//   };

//   // Group chats by 'Today' or date
//   const groupedChats: Record<string, any[]> = chatHistory.reduce(
//     (groups: Record<string, any[]>, chat) => {
//       const dateStr =
//         chat.createdAt || chat.updatedAt || new Date().toISOString();
//       const dateObj = new Date(dateStr);
//       const dateLabel = isToday(dateStr)
//         ? "Today"
//         : dateObj.toLocaleDateString();
//       if (!groups[dateLabel]) groups[dateLabel] = [];
//       groups[dateLabel].push(chat);
//       return groups;
//     },
//     {}
//   );
//   const handleChatClick = (chatIdentifier: string) => {
//     setActiveChat(chatIdentifier);
//     setMessages([]); // Clear previous messages immediately for UI feedback
//     loadChatByIdentifier(chatIdentifier);
//   };

//   // Sidebar render (remove time from title, just show title)
//   return (
//     <div className="flex min-h-[calc(100vh+10px)]  2xl:min-h-[calc(100vh-100px)] w-full max-sm:px-2 px-4 sm:px-6 py-8 md:py-9 gap-6.5 max-sm:gap-0">
//       {/* Sidebar / Drawer */}
//       <div
//         className={`fixed  inset-y-0 left-0 z-20 w-4/5  max-w-xs bg-[#F2F5F6] rounded-3xl p-4 gap-4 flex-col items-start overflow-x-hidden overflow-y-auto transform
//            transition-transform duration-300 lg:static lg:translate-x-0 lg:flex lg:w-[20%] lg:h-auto  lg:gap-4 lg:p-6 lg:overflow-auto
//           ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
//         style={{
//           overflowX: "hidden",
//         }}
//       >
//         {/* Close Button (mobile) */}
//         <div className="lg:hidden w-full flex justify-end">
//           <button onClick={() => setDrawerOpen(false)}>
//             <HiX className="text-2xl text-[#224674]" />
//           </button>
//         </div>

//         {/* New Chat Button */}
//         <button
//           onClick={handleNewChat}
//           className="bg-[#224674] text-white txt-18 font-semibold px-3 py-2.5 rounded-full  cursor-pointer max-lg:mb-6 w-full max-w-[108px]"
//         >
//           New Chat
//         </button>

//         {Object.entries(groupedChats as Record<string, any[]>).map(
//           ([date, chats]) => (
//             <div key={date} className="">
//               <p className="txt-16 text-[#626D6F] font-medium">{date}</p>
//               {chats.map((chat: any) => {
//                 return (
//                   <div
//                     key={chat.chatIdentifier}
//                     onClick={() => handleChatClick(String(chat.chatIdentifier))}
//                     className={`p-2 rounded-md cursor-pointer my-2 w-[175px]   ${
//                       activeChat === chat.chatIdentifier
//                         ? "bg-[#224674] text-white"
//                         : "bg-[#E9EDEE] text-[#626D6F] hover:bg-[#D8DFE0]"
//                     } overflow-x-hidden`}
//                   >
//                     <div className="flex flex-col overflow-x-hidden">
//                       <span className="truncate max-w-full font-semibold">
//                         {chat.title || "New Chat"}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )
//         )}
//       </div>

//       {/* Overlay (mobile)
//       {drawerOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-10 lg:hidden"
//           onClick={() => setDrawerOpen(false)}
//         />
//       )}

//       {/* Top bar for mobile with menu button */}
//       {/* <div className="flex items-start justify-between mt-2 md:mt-10 lg:hidden">
//         <button onClick={() => setDrawerOpen(true)}>
//           <HiOutlineMenuAlt2 className="txt-48 text-[#224674]" />
//         </button>
//       </div> */}

//       {/* Right Side */}
//       <div
//         className="p-[2px] w-full rounded-[3rem] bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]"
//         style={{ fontFamily: "'Afacad', sans-serif" }}
//       >
//         <div className="bg-white rounded-[3rem] h-full p-6 sm:p-10 flex flex-col">
//           {messages.length === 0 ? (
//             // Initial state - greeting
//             <div className="flex flex-col items-center justify-center h-full text-center">
//               <div className="flex max-sm:flex-col items-center gap-4 ">
//                 <div className="w-10 h-10 rounded-full  flex items-center justify-center">
//                   <Image
//                     src="/Dashboard/pep-logo.svg"
//                     alt="Pepi"
//                     width={40}
//                     height={40}
//                     className="h-10 w-10"
//                   />
//                 </div>
//                 <h2 className="text-2xl text-[#224674] font-semibold">
//                   Hi, I am Pepi! Your AI friend
//                 </h2>
//               </div>

//               <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#224674] to-[#DD6F94] bg-clip-text text-transparent mt-4">
//                 How can I help you?
//               </h2>
//             </div>
//           ) : (
//             // Chat messages
//             <div className="flex-1 overflow-y-auto pb-4">
//               {messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`mb-6 ${
//                     message.isUser ? "text-right" : "text-left"
//                   }`}
//                 >
//                   {message.isUser ? (
//                     <div className="inline-block bg-[#F2F5F6] text-[#25292A] rounded-xl p-[12px_16px] max-w-full break-words">
//                       <div className="font-medium">You</div>
//                       <div className="text-xl break-words">{message.text}</div>
//                     </div>
//                   ) : (
//                     <div className="block text-[#25292A] border-b border-[#D8DFE0] pb-8 max-w-full break-words">
//                       <div className="flex items-start gap-3">
//                         <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F2F5F6]">
//                           <Image
//                             src="/Dashboard/pep-logo.svg"
//                             alt="Pepi"
//                             width={48}
//                             height={48}
//                             className="w-10 h-10 object-contain"
//                           />
//                         </div>
//                         <div className="flex-1">
//                           <div className="font-medium">Pepi</div>
//                           <div className="mt-1 text-lg break-words">
//                             <ReactMarkdown
//                               components={{
//                                 hr: () => null,
//                               }}
//                             >
//                               {message.text}
//                             </ReactMarkdown>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {index === messages.length - 1 && (
//                     <div className="mt-4 flex justify-end gap-4">
//                       {/* Copy button */}
//                       {copied ? (
//                         <button className="flex items-center gap-1  cursor-pointer  ">
//                           <Image
//                             src="/Dashboard/peptide-copied-tick.svg"
//                             alt="share"
//                             width={24}
//                             height={24}
//                           />
//                           <span className="text-[#25292A] text-xl font-semibold ">
//                             Copy
//                           </span>
//                         </button>
//                       ) : (
//                         <button
//                           onClick={copyToClipboard}
//                           className="flex items-center gap-1 cursor-pointer"
//                         >
//                           <Image
//                             src="/Dashboard/peptide-copy.svg"
//                             alt="share"
//                             width={24}
//                             height={24}
//                           />
//                           <span className="text-[#25292A] text-xl font-semibold">
//                             Copy
//                           </span>
//                         </button>
//                       )}
//                       {/* Share button */}
//                       <button
//                         onClick={handleShare}
//                         className="flex items-center gap-1 cursor-pointer"
//                       >
//                         <Image
//                           src="/Dashboard/peptide-share.svg"
//                           alt="share"
//                           width={24}
//                           height={24}
//                         />
//                         <span className="text-[#25292A] text-xl font-semibold">
//                           Share
//                         </span>
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {isLoading && (
//                 <div className="flex mb-6">
//                   <div className="inline-block">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 rounded-full  flex items-center justify-center">
//                         <Image
//                           src="/Dashboard/pep-logo.svg"
//                           alt="Pepi"
//                           width={50}
//                           height={50}
//                         />
//                       </div>
//                       <div className="flex space-x-2 bg-[#F0F4F5] p-1 rounded-[6px]">
//                         <div className="w-3 h-3 rounded-full bg-[#D6F0F5] animate-bounce"></div>
//                         <div className="w-3 h-3 rounded-full bg-[#D6F0F5] animate-bounce delay-75"></div>
//                         <div className="w-3 h-3 rounded-full bg-[#D6F0F5] animate-bounce delay-150"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div ref={messagesEndRef} />
//             </div>
//           )}

//           {showShareOptions && (
//             <ShareDialog
//               onClose={() => setShowShareOptions(!showShareOptions)}
//             />
//           )}

//           {/* Input and Button */}
//           <form onSubmit={handleSubmit} className="flex gap-4 w-full mt-6">
//             <input
//               type="text"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               placeholder="Ask about peptides..."
//               className="bg-gray-100 px-6 w-full p-4 text-base sm:text-lg font-medium rounded-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#224674]"
//               disabled={isLoading}
//             />

//             <button
//               type="submit"
//               disabled={isLoading || !inputValue.trim()}
//               className={`flex justify-center items-center text-white text-xl font-medium p-6 rounded-full ${
//                 isLoading || !inputValue.trim()
//                   ? "bg-[#D8DFE0] cursor-not-allowed"
//                   : "bg-[#224674] hover:bg-[#1a3559] cursor-pointer"
//               }`}
//             >
//               {isLoading ? (
//                 <Image
//                   src="/Dashboard/stop.svg"
//                   alt="send"
//                   width={40}
//                   height={40}
//                 />
//               ) : (
//                 <Image
//                   src="/Dashboard/arrow-up.svg"
//                   alt="send"
//                   width={40}
//                   height={40}
//                 />
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AiAssistantPage;

/*
  components/CardModal.tsx
  A reusable centered card modal with dark overlay and scroll lock
*/
import React, { useEffect } from 'react';


interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalClassName?: string;
}

export default function CardModal({ isOpen, onClose, children,  modalClassName = "", }: CardModalProps) {
  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#00000033] bg-opacity-20 z-50"
      onClick={onClose}
    >
      <div
        // className="bg-white rounded-2xl w-full max-w-[496px] p-6 z-60"
        className={`bg-white rounded-2xl w-full max-w-[496px] p-6 z-60 max-sm:mx-6 ${modalClassName}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

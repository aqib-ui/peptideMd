// src/app/(user-profile)/components/modals/CardModal.tsx
import React, { useEffect } from 'react';

interface CardModalProps {
  isOpen: boolean; // Keep isOpen required
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function CardModal({ 
  isOpen, 
  onClose, 
  children,
  className = ""
}: CardModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-2xl w-full max-w-md mx-4 p-6 ${className}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
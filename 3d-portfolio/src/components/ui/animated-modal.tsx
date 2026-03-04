"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLenis } from "@/lib/lenis";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "auto";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "auto";
    };
  }, [open, lenis]);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export function Modal({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { setOpen } = useModal();
  return (
    <button
      className={cn("relative overflow-hidden", className)}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  );
};

export const ModalBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { open, setOpen } = useModal();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setOpen]);

  useOutsideClick(modalRef, () => setOpen(false));

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={cn(
              "relative z-[10000] w-full max-w-4xl bg-white dark:bg-neutral-950 rounded-3xl shadow-2xl",
              "h-[90vh] flex flex-col",
              className
            )}
          >
            <CloseIcon />
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const ModalContent = ({ children, className }: { children: ReactNode; className?: string; }) => (
  <div 
    data-lenis-prevent
    className={cn("overflow-y-auto overflow-x-hidden flex-1 min-h-0 p-4 md:p-10", className)}
    style={{
      WebkitOverflowScrolling: 'touch',
      overscrollBehavior: 'contain'
    }}
  >
    {children}
  </div>
);

export const ModalFooter = ({ children, className }: { children: ReactNode; className?: string; }) => (
  <div className={cn("flex justify-end items-center gap-3 p-4 bg-neutral-50 dark:bg-neutral-900/50 border-t dark:border-neutral-800 flex-shrink-0", className)}>
    {children}
  </div>
);

const CloseIcon = () => {
  const { setOpen } = useModal();
  return (
    <button
      onClick={() => setOpen(false)}
      className="absolute top-5 right-5 z-[10001] p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:scale-110 transition-transform"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  );
};

export const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, callback: Function) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      callback(event);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, callback]);
};
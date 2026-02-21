import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "sgaf_exit_intent_shown";

export const useExitIntent = () => {
  const [visible, setVisible] = useState(false);
  const hasFiredRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = localStorage.getItem(STORAGE_KEY);
    if (alreadyShown === "1") {
      hasFiredRef.current = true;
      return;
    }

    const handleMouseOut = (e) => {
      if (hasFiredRef.current) return;
      if (!e.relatedTarget && e.clientY <= 0 && window.innerWidth > 768) {
        hasFiredRef.current = true;
        setVisible(true);
        localStorage.setItem(STORAGE_KEY, "1");
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, []);

  const close = () => setVisible(false);

  return { visible, close };
};
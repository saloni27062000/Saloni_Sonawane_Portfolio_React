import { useEffect, useState } from "react";

// Shows the template's spinner until the window has fully loaded, then removes it.
export default function Preloader() {
  const [visible, setVisible] = useState(document.readyState !== "complete");

  useEffect(() => {
    if (!visible) return;
    const hide = () => setVisible(false);
    window.addEventListener("load", hide);
    return () => window.removeEventListener("load", hide);
  }, [visible]);

  return visible ? <div id="preloader" /> : null;
}

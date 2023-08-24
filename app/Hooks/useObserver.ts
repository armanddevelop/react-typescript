import { useState, useRef, useEffect } from "react";

export const useObserver = (imagePath: string) => {
  const node = useRef<HTMLImageElement>(null);
  const [isLazyLoaded, setIsLazyLoaded] = useState<boolean>(false);
  const [entryObserver, setEntryObserver] =
    useState<IntersectionObserverEntry>();
  const [image, setImage] = useState<string>(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    if (isLazyLoaded) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) return;
        setImage(imagePath);
        setEntryObserver(entry);
        observer.disconnect();
        setIsLazyLoaded(!isLazyLoaded);
      });
    });
    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [imagePath, isLazyLoaded]);
  return { image, node, entryObserver };
};

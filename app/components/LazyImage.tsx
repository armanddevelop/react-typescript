"use client";
import { useEffect, type ImgHTMLAttributes, useRef } from "react";
import { useObserver } from "../Hooks/useObserver";

interface ILazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  onLazyLoad?: (node: HTMLImageElement) => void;
}
export const LazyImage = ({
  src,
  onLazyLoad,
  ...imgProps
}: ILazyImageProps): JSX.Element => {
  const { node, image, entryObserver } = useObserver(src);
  useEffect(() => {
    entryObserver?.isIntersecting && onLazyLoad && onLazyLoad(node.current!);
  }, [node, onLazyLoad, entryObserver]);
  return <img ref={node} src={image} alt={imgProps.title} {...imgProps} />;
};

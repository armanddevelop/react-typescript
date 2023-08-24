import { useState } from "react";
import type { MouseEventHandler } from "react";
import { random } from "lodash";
const randomFile = () => random(1, 123);
const generateId = () => Math.random().toString(36).substring(2, 9);

const initialState: IFoxImageItem[] = [
  {
    id: generateId(),
    url: `https://randomfox.ca/images/${randomFile()}.jpg`,
    title: generateId(),
  },
  {
    id: generateId(),
    url: `https://randomfox.ca/images/${randomFile()}.jpg`,
    title: generateId(),
  },
  {
    id: generateId(),
    url: `https://randomfox.ca/images/${randomFile()}.jpg`,
    title: generateId(),
  },
  {
    id: generateId(),
    url: `https://randomfox.ca/images/${randomFile()}.jpg`,
    title: generateId(),
  },
  {
    id: generateId(),
    url: `https://randomfox.ca/images/${randomFile()}.jpg`,
    title: generateId(),
  },
];

export const useImages = () => {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);
  const addNewFox: MouseEventHandler<HTMLButtonElement> = (evt) => {
    const newImgItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomFile()}.jpg`,
      title: generateId(),
    };
    setImages([...images, newImgItem]);
  };
  return { images, addNewFox };
};

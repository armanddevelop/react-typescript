"use client";

import { LazyImage } from "./components/LazyImage";
import { useImages } from "./Hooks/useImages";

export default function Home() {
  const { images, addNewFox } = useImages();
  const handleLazy = (node: HTMLImageElement) => {
    console.log("esto vale node", node);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Foxys</h1>
      <button onClick={(e) => addNewFox(e)}>Add new Fox</button>
      {images.map(({ url, id, title }) => (
        <div key={id} className="p-4">
          <LazyImage
            src={url}
            title={`Ramdon Fox ${id}`}
            width={320}
            height="auto"
            className="rounded bg-gray-300"
            onLazyLoad={handleLazy}
          />
        </div>
      ))}
    </main>
  );
}

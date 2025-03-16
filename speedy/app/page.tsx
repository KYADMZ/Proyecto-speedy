"use client"; // Asegura que el código se ejecute en el cliente

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Contenedor de la imagen con efecto hover */}
        <div className="relative group w-[200px] h-[228px]">
  <Image
    className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-250"
    src="/speedyIcon.jpeg"
    alt="Next.js logo"
    width={180}
    height={228}
    priority
  />
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-250">
    <span className="text-white font-bold text-[clamp(4px,4vw,8px)]">Tarou Sakamoto was considered the greatest hitman of all time. Feared by many, he stood at the top of the underground 
      world until he met and fell in love with a woman. As a result, Sakamoto abandoned his life of crime and now works as a convenience store clerk. Leaving his shady past
       behind proves more difficult than Sakamoto initially imagined. Many of his former rivals and partners do not believe that he has truly left the business and show up in
        hopes of taking him out. Barred from killing,
       Sakamoto must find creative ways to subdue his enemies and prevent them from bringing harm to his family, his store, and the small town he resides in.</span>
  </div>
</div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
        </div>
      </main>
    </div>
  );
}

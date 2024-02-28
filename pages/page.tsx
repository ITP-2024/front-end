import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <body>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-center">
            Welcome to my website
          </h1>
          <p className="text-2xl text-center">
            This is a simple website made with Next.js
          </p>
          <Image
            src="/nextjs.svg"
            alt="Next.js Logo"
            width={100}
            height={100}
          />
        </div>
      </body>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full flex flex-col sm:flex-row justify-between px-4 sm:px-14 py-6 sm:py-10 relative sm:absolute top-0">
        <div className="flex items-center justify-center sm:justify-start mb-10 sm:mb-0">
          <Image src="/beertia-logo.svg" alt="Beertia logo" width={140} height={100} />
        </div>
        <div className="text-center sm:text-right">
          <p className="flex items-center justify-center sm:justify-end gap-2 mb-1 text-base sm:text-lg">
            <span className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-green-500 rounded-full" aria-hidden="true"></span>
            <span>1 client slot available</span>
          </p>
          <p className="text-xl sm:text-2xl">
            <a href="mailto:hello@beertia.com" className="hover:underline">hello@beertia.com</a>
          </p>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow w-full px-4 sm:px-0">
        <section className="relative w-full flex justify-center" aria-labelledby="main-heading">
          <Image src="/beertia-cover.webp" alt="Decorative background image" width={383} height={519} className="w-full max-w-[383px] h-auto" aria-hidden="true" />
          <h1 id="main-heading" className="leading-snug md:leading-snug lg:leading-snug w-full max-w-[20ch] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl md:text-5xl lg:text-[5rem] font-bold">
            We design and develop digital products
          </h1>
        </section>
      </main>

      <footer className="py-6 sm:py-10 text-center">
        <p className="text-xl sm:text-2xl">New site coming soon</p>
      </footer>
    </div>
  );
}

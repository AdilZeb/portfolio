import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-charcoal">
      <div className="text-center">
        <Image
          src="/vercel.svg"
          alt="Your Name"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2 text-ivory">Adil Zeb</h1>
        <p className="text-xl text-ivory mb-4">Front End Web Delveloper</p>
        <Link
          href="#contact"
          className="bg-gold text-ivory px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}

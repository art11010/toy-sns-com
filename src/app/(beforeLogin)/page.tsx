import Image from 'next/image';
import Link from 'next/link';

export default function BeforeLoginPage() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="w-[180px] h-[38px] dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="leading-relaxed text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Welcome to <b>Next.js SNS</b>! <br />
          Connect, share, and explore with friends. <br />
          Join our community and stay updated!
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/i/flow/signup"
            className="btn-primary border-black dark:border-white hover:border-transparent"
          >
            Signup
          </Link>
          <Link href="/i/flow/login" className="btn-primary sm:min-w-44 group">
            Login
            <Image
              className="w-5 h-5 invert dark:invert-0 group-hover:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </main>

      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </>
  );
}

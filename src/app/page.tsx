import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <main className="flex-grow max-w-5xl mx-auto p-8 sm:p-16 flex flex-col gap-12">
        {/* Header */}
        <header className="text-center sm:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
            Hi, I&apos;m Sai Harshitha Seshadri 👋
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto sm:mx-0">
            I am a Web3 developer focusing on Ethereum dApps, decentralized
            storage, and smart contracts. Here are some of my projects:
          </p>
        </header>

        {/* Projects Grid */}
        <section className="grid gap-8 sm:grid-cols-2">
          {/* Project Card */}
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              My Wallet App
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              React/Next.js app to view Ethereum wallets with ethers.js.
            </p>
            <div className="flex gap-6">
              <a
                href="https://my-wallet-app-lime.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Live Site →
              </a>
              <a
                href="https://github.com/SaiHarshitha-GIT/my-wallet-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:underline font-medium"
              >
                GitHub Repo
              </a>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Token Balance Viewer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              View ERC20 token balances for any Ethereum address.
            </p>
            <div className="flex gap-6">
              <a
                href="https://token-balance-viewer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Live Site →
              </a>
              <a
                href="https://github.com/SaiHarshitha-GIT/TokenBalanceViewer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:underline font-medium"
              >
                GitHub Repo
              </a>
            </div>
          </article>
        </section>

        {/* More projects button */}
        <div className="text-center sm:text-left mt-8">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          >
            See More Projects
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-gray-600 dark:text-gray-400 text-sm">
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn Next.js
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Vercel Templates
          </a>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Next.js.org
          </a>
        </div>
      </footer>
    </div>
  );
}

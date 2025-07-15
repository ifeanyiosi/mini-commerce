// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-black">
      <div className="text-center max-w-lg">
        <div className="text-6xl sm:text-7xl md:text-8xl mb-6">👷‍♂️</div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          This Page is Coming Soon
        </h1>

        <p className="text-gray-900 dark:text-white font-medium text-lg sm:text-xl mb-6">
          I’d love to talk about how I can bring value to your team.
        </p>

        <Link
          href="mailto:ifeanyi.osi.okeke.com"
          className="inline-block mt-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition"
        >
          📩 Let&apos;s Talk
        </Link>
      </div>
    </div>
  );
}

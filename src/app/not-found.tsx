// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  const mailto = `mailto:ifeanyi.osi.okeke@gmail.com?subject=${encodeURIComponent(
    "Excited to Work Together 🚀"
  )}&body=${encodeURIComponent("We'd love to hire you")}`;

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
          href={mailto}
          className="inline-block mt-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          📩 Let&apos;s Talk
        </Link>
      </div>
    </div>
  );
}

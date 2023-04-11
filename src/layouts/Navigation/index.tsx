import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav id="navigation">
      <div className="flex justify-between bg-yellow-100 px-4">
        <div className="grid place-items-center">
          <Link href="/">Logo</Link>
        </div>
        <div className="w-full p-4">
          <ul className="flex gap-x-6">
            <li>
              <Link
                className="focus:text-indigo-800 focus:underline active:text-indigo-800"
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="focus:text-indigo-800 focus:underline active:text-indigo-800"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="focus:text-indigo-800 focus:underline active:text-indigo-800"
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid place-items-center">Ham</div>
      </div>
    </nav>
  );
};

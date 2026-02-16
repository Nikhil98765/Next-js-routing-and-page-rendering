import Link from "next/link"

export const MainHeader = () => {
  return (
    <header id="main-header">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
    </header>
  );
}
import Link from "next/link"

export const MainHeader = () => {
  return (
    <div id="main-header">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
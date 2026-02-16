import { getAvailableNewsYears } from "@/lib/news"
import Link from "next/link";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(year => <Link href={`/archive/${year}`}>{year}</Link>)}
        </ul>
      </nav>
    </header>
  )
}
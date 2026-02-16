import { NewsList } from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const selectedYear = params.year;
  const yearNews = getNewsForYear(selectedYear);
  return (
    <>
      <NewsList news={yearNews}/>
    </>
  );
}
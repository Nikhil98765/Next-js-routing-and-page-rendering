import { DUMMY_NEWS } from "@/dummy_news";

export default function ImagePage({ params }) {
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === params.slug);
  
  return (
    <>
      <div className="modal-backdrop"></div>
      <dialog open className="modal">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
      </dialog>
    </>
  );
}
'use client';

import { DUMMY_NEWS } from "@/dummy_news";
import { useRouter } from "next/navigation";

export default function ImagePage({ params }) {
  const router = useRouter();
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === params.slug);
  
  return (
    <>
      <div className="modal-backdrop" onClick={router.back}></div>
      <dialog open className="modal">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
      </dialog>
    </>
  );
}
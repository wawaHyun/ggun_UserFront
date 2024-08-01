'use client'
 
import Image from 'next/image';
import NewsHeader from "../../component/navigation/newsHeader";
import NewsToday from "../../component/news/newsToday";
import { newsDummy } from "@/app/common/dummy/news.dummy";
import Link from "next/link";
import NewsTopic from '@/app/component/news/newsTopic';
import { useNewsFetch, useNewsStack } from '@/app/store/news.store';
import { useEffect } from 'react';

export default async function NewsPage() {

  const fetchNews = useNewsFetch();
  const currentNews = useNewsStack();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchNews();
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [fetchNews]);


  // const currentNews = newsDummy;

  return (
    <div className="h-full w-full">
      <div className="flex justify-center w-full">
        <div className="h-full w-[80%] flex-col justify-center">
        <div className='sticky top-[60px] h-[60px] z-35'><NewsHeader /></div>
        {currentNews.length > 0 ? (
            <>
              <div className="mb-5">
                <Link href={currentNews[0].imgLink}>
                  <div className="flex border bg-gray-200 text-center text-black hover:text-gray-500 rounded-lg">
                    <Image unoptimized src={currentNews[0].imgSrc} height={250} width={500} alt={currentNews[0].title} className="rounded-l-lg" />
                    <ul className="w-[50%] ml-[15px] text-center content-center">
                      <li className="text-[20px] text-orange-500 ml-[15px] text-left mt-[10%]">경제</li>
                      <li className="text-[30px]">{currentNews[0].title}</li>
                      <li className="text-[15px] ml-[15px] text-left mt-[10%]">{currentNews[0].content}</li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div><NewsTopic newslist={currentNews} /></div>
              <div>
                <NewsToday title="최신뉴스" newslist={currentNews} />
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>

      </div>
    </div>
  );
}


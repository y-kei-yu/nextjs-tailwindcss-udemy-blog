import React from 'react'
import Image from 'next/image'
import { getDetailArticle } from '@/blogAPI';
import DeleteButton from '@/app/components/DeleteButton';

const Article = async ({ params }: { params: Promise<{ id: string }> }) => {

    //const detailArticle = await getDetailArticle(params.id);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const { id } = await params;
    console.log("id", id)
    const res = await fetch(`${API_URL}/api/blog/${id}`, { next: { revalidate: 60 } });
    console.log("res", res)
    const detailArticle = await res.json();


    return (
        <div className="max-w-3xl mx-auto p-5">
            <Image
                src={`https://picsum.photos/seed/${encodeURIComponent(detailArticle.id)}/960/300`}
                alt="#"
                width={960}
                height={300}

            />
            <h1 className='text-4xl text-center mb-10 mt-10'>{detailArticle.title}</h1>
            <div>
                <p className='text-lg leading-relaxed text-justify'>{detailArticle.content}</p>
            </div>
            <div className='text-right mt-3'>
                {/* 削除ボタンだけクライアントサイドレンダリング */}
                <DeleteButton id={detailArticle.id} />
            </div>
        </div>
    )
}

export default Article
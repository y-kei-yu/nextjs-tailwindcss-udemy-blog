import { notFound } from "next/navigation";
import { Article } from "./data/types";

//全ての記事を取得する関数
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" }); //SSRになる　chache: "force-store"はSSGになる

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  //シリアライズ　データを文字列化
  const articles = await res.json();
  return articles;
};

//idに基づいて記事を取得する関数
export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 }, //ISRになる 60秒ごとに再生成
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  //シリアライズ　データを文字列化
  const article = await res.json();
  return article;
};

//記事を作成する関数
export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDatetime = new Date().toISOString();
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title,
      content,
      createdAt: currentDatetime,
    }),
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  //シリアライズ　データを文字列化
  const newArticle = await res.json();
  return newArticle;
};

//記事を削除する関数
export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  //シリアライズ　データを文字列化
  const deleteArticle = await res.json();
  return deleteArticle;
};

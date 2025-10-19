import { Article } from "./data/types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" }); //SSRになる　chache: "force-store"はSSGになる

  //シリアライズ　データを文字列化
  const articles = await res.json();
  return articles;
};

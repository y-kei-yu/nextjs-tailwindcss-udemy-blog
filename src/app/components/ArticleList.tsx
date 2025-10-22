import React from 'react'
import { Article } from '@/data/types'
import ArticleCard from './ArticleCard'

type ArticleListProps = {
    articles: Article[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
    return (
        <div>
            {articles.map((article) => (
                <ArticleCard article={article} key={article.id} />
            ))}
        </div>
    )
}

export default ArticleList
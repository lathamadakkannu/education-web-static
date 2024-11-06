"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Blog.module.scss";
import { VscEye } from "react-icons/vsc";
import { FiMessageSquare } from "react-icons/fi";

const articles = [
    { id: 1, image: '/image/article1.png', title: 'Introduction to Web Design: From Basics to Advanced - Explained in Tamil', author: 'Shivan', date: 'Feb 09, 2024', views: '38.8K', comments: 4 },
    { id: 2, image: '/image/article2.png', title: 'Introduction to Web Design: From Basics to Advanced - Explained in Tamil', author: 'Shivan', date: 'Feb 09, 2024', views: '38.8K', comments: 4 },
    { id: 3, image: '/image/article3.png', title: 'Introduction to Web Design: From Basics to Advanced - Explained in Tamil', author: 'Shivan', date: 'Feb 09, 2024', views: '38.8K', comments: 4 },
    { id: 4, image: '/image/article4.png', title: 'Introduction to Web Design: From Basics to Advanced - Explained in Tamil', author: 'Shivan', date: 'Feb 09, 2024', views: '38.8K', comments: 4 },
    { id: 5, image: '/image/article5.png', title: 'Introduction to Web Design: From Basics to Advanced - Explained in Tamil', author: 'Shivan', date: 'Feb 09, 2024', views: '38.8K', comments: 4 },
    { id: 6, image: '/image/article6.png', title: 'Introduction to Web Design: From Basics to Advanced - Explained in Tamil', author: 'Shivan', date: 'Feb 09, 2024', views: '38.8K', comments: 4 },
    { id: 7, image: '/image/article7.png', title: 'Introduction to Web Design: From Basics to Advanced - Explained in Tamil', author: 'Shivan', date: 'Feb 09, 2024', views: '38.8K', comments: 4 },
    { id: 8, image: '/image/article8.png', title: 'Introduction to Web Design: From Basics to Advanced - Explained in Tamil', author: 'Shivan', date: 'Feb 09, 2024', views: '38.8K', comments: 4 },
    { id: 9, image: '/image/article9.png', title: 'Introduction to Web Design: From Basics to Advanced - Explained in Tamil', author: 'Shivan', date: 'Feb 09, 2024', views: '38.8K', comments: 4 },
];

const Blog = () => {
    const router = useRouter();

    const handleBlogClick = () => {
        router.push(`/pages/Blog/BlogView`);
    };

    return (
        <div className={styles.blogContainer}>
            <div className={styles.articlesContainer}>
                <h2>Blog</h2>
                <h4>Recently Added Articles</h4>

                <div className={styles.articleRow}>
                    {articles.map((article) => (
                        <div key={article.id} className={styles.articleCol}>
                            <div className={styles.articleCard} onClick={handleBlogClick}>
                                <div className={styles.articleImg}>
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className={styles.articleDetails}>
                                    <h3>{article.title}</h3>
                                    <h5>By {article.author}</h5>
                                    <p>Last updated on</p>
                                    <div className={styles.articleIcons}>
                                        <p>{article.date}</p>
                                        <h6><span><VscEye /></span>{article.views}</h6>
                                        <h5><span><FiMessageSquare /></span>{article.comments}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;

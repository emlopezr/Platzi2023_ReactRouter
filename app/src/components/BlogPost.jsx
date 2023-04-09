import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts.js'

const BlogPost = () => {
    const navigate = useNavigate();

    const { slug } = useParams();
    const { title, content, author } = blogPosts.find(post => post.slug === slug)

    const returnToBlog = () => navigate('/blog')

    return (
        <>
            <button onClick={returnToBlog}>Volver al Blog</button>
            <h2>{title}</h2>
            <p>Autor: {author}</p>
            <p>{content}</p>
        </>
    )
}

export default BlogPost
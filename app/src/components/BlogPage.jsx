import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts.js'

const BlogPage = () => {
    return (
        <>
            <h1>BlogPage</h1>

            <Outlet />

            <ul>
                {blogPosts.map(post => (
                    <BlogLink key={post.slug} post={post} />
                ))}
            </ul>
        </>
    )
}

const BlogLink = ({ post }) => {
    const { title, slug } = post

    return (
        <li>
            <Link to={`/blog/${slug}`}>
                {title}
            </Link>
        </li>
    )
}

export default BlogPage
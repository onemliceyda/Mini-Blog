import React from "react"

const BlogList = ({ blogs,title }) => {
  
  return (
    <div className="blo-list">
        <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList

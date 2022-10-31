import React, { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "lorem ipsum...", author: "Ceyda", id: 1 },
    { title: "Welcome Party!", body: "lorem ipsum...", author: "Mario", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Yoshi",
      id: 3,
    },
  ])
  const [name, setName] = useState("Ceydosko")

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }
  useEffect(() => {
    console.log("useEffect ran")
  }, [])
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  )
}

export default Home

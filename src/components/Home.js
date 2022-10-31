import React, { useState, useEffect } from "react"
import useFetch from "../Hooks/useFetch"
import BlogList from "./BlogList"

const Home = () => {
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs")
  return (
    <div className="home">
      {error && <div>{error} </div>}
      {isPending && <div>Loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  )
}

export default Home

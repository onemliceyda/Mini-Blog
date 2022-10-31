import { useEffect, useState } from "react"
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          console.log(res)
          if (!res.ok) {
            throw Error("could not fetch the data for the resource")
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
          setError(null) //if is successful we don't have to see err message
        })
        .catch((err) => {
          setIsPending(false)
          setError(err.message)
        })
    }, 1000) // it makes a bit more realistic
  }, [url])
  return {
    data,
    isPending,
    error,
  }
}

export default useFetch

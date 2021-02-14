import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Posts from './Posts'
import Pagination from './Pagination'
import './bootstrap.css'


function App() {

  //Seting up state using React Hooks
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  //Using useEffect to perform async API call
  useEffect(() => {
    const fetchPosts = async() => {
      setLoading(true)
      const resp = await axios.get('https://api.spacexdata.com/v3/history')
      setPosts(resp.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  //paginate
  const paginate = pageNo => setCurrentPage(pageNo) 

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3" id='text'> SpaceX History </h1>

        <Posts posts={currentPosts} loading={loading} />
        <Pagination paginate={paginate}/>
    </div>
  );
}

export default App;

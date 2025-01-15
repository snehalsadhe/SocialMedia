import Post from "./Post";
import {PostListContext}  from '../store/PostList.store'
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner"

const PostList=()=>{
  const {postList,addInitialPosts} = useContext(PostListContext)
  const [fetching,setFetching]=useState(false)

  useEffect(()=>{
    setFetching(true);

    const controlller = new AbortController();
    const signal = controlller.signal;

    fetch('https://dummyjson.com/posts',signal)
  .then(res => res.json())
  .then(data=>
    {
      addInitialPosts(data.posts)
      setFetching(false)
    }
  )
  return ()=>{
    controlller.abort();
  }
  
  },[])

  return (
    <>
   {
    fetching && <LoadingSpinner/>}
    {!fetching && postList.length===0 && <WelcomeMessage />}
    {
    !fetching && postList.map((post)=><Post key={post.id} post={post}/>)
   }
    </>
  )
}

export default PostList;
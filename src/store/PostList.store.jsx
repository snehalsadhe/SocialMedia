import { createContext, useReducer,useState,useEffect } from "react";


export const PostListContext=createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
  fetching:false
});

const postListReducer=(currentObj, action)=>{
  let newObj=currentObj
if(action.type==="ADD_POST"){
  newObj=[
   action.payload,
   ...currentObj
  ];
}
else if(action.type==="DELETE_POST"){
  newObj=currentObj.filter(post=>post.id!==action.payload.postId)
}
else if(action.type==="ADD_INITIAL_POSTS"){
  newObj=action.payload.posts
}

return newObj;
}



const PostListContextProvider=({children})=>{
const [postList,dispatchPostList]=useReducer(postListReducer,[])
const [fetching,setFetching]=useState(false)

  
const addPost=(post)=>{
 const NewAction={
    type:"ADD_POST",
    payload:post
  }
dispatchPostList(NewAction)
}

const addInitialPosts=(posts)=>{
dispatchPostList(
  {
    type:"ADD_INITIAL_POSTS",
    payload:{
      posts
    }
  }
)
}

const deletePost=(postId)=>{
  dispatchPostList(
    {
      type:"DELETE_POST",
      payload:{
        postId
      }
    }
  )

}

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



//console.log("PostListContextProvider rendered with postList: ", postList);
  return(
    <PostListContext.Provider value={{postList,addPost,deletePost,addInitialPosts,fetching}}>{children}</PostListContext.Provider>
  )
}
export default PostListContextProvider;
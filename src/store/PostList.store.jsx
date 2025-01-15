import { createContext, useReducer } from "react";


export const PostListContext=createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
  addInitialPosts:()=>{}
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

const addPost=(userId,title,body,views,tags)=>{
 const NewAction={
    type:"ADD_POST",
    payload:{
      id:Date.now(),
      userId:userId,
      title:title,
      body:body,
      views:views,
      tags:tags
      
    
    }
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
//console.log("PostListContextProvider rendered with postList: ", postList);
  return(
    <PostListContext.Provider value={{postList,addPost,deletePost,addInitialPosts}}>{children}</PostListContext.Provider>
  )
}
export default PostListContextProvider;
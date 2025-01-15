import { useContext, useRef } from "react";
import { PostListContext } from "../store/PostList.store";

const CreatePost =()=>{
const {addPost}=useContext(PostListContext);
const userIdElement=useRef()
const titleElement=useRef()
const bodyElement=useRef()
const viewsElement=useRef()
const tagsElement=useRef()



const handleSubmit=(event)=>{
event.preventDefault();
const userId=userIdElement.current.value;
const title=titleElement.current.value;
const body=bodyElement.current.value;
const views=viewsElement.current.value;
const tags=tagsElement.current.value.split(" ");
addPost(userId,title,body,views,tags);

userIdElement.current.value=""
titleElement.current.value=""
bodyElement.current.value=""
viewsElement.current.value=""
tagsElement.current.value=""

}

  return(
    <>
    <form className="create-post" onSubmit={handleSubmit}>

    <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter Your User Id Here</label>
    <input type="text" className="form-control" id="userId"  placeholder="User Id" ref={userIdElement}/>
  </div>
    <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title"  placeholder="How are you feeling today..." ref={titleElement}/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" rows="4" className="form-control" id="body"  placeholder="Tell us more about it." ref={bodyElement}/>
  </div>

  <div className="mb-3">
    <label htmlFor="views" className="form-label">Enter Number of Views</label>
    <input type="text" className="form-control" id="views"  placeholder="How many people viewed.." ref={viewsElement}/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter Your hashtags here</label>
    <input type="text" className="form-control" id="tags"  placeholder="Please enter tags using space" ref={tagsElement}/>
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </>
  )
}

export default CreatePost;
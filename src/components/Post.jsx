import { MdDelete } from "react-icons/md";
import {useContext} from "react"
import {PostListContext} from "../store/PostList.store"
const Post=({post})=>{
const {deletePost}=useContext(PostListContext)

return(
<>
<div className="card post-Card" style={{width: "30rem"}}>
 
  <div className="card-body">
    <h5 className="card-title">{post.title} 
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
    <MdDelete/>
   
    </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=><span className="badge text-bg-primary hashtag" key={tag}>{tag}</span>)}
    
  </div>
  <div className="alert alert-success reactions" role="alert" >
  This Post has been viewed by {post.views} people
</div>
</div>



</>

)
}

export default Post;
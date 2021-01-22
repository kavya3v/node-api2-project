import axios from 'axios';
import fetchPosts from './fetchPosts';
const baseURL="https://kavya-lambdagram.herokuapp.com";

function updatePost(updatePost,postId,setPosts){
axios.put(`${baseURL}/${postId}`,updatePost)
.then((res)=>{
    console.log('res from update',res)
    fetchPosts(setPosts);
})
.catch(err=>{
    console.log('err in updatePost',err)
})
}
export default updatePost;
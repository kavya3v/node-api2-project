import axios from 'axios';
import fetchPosts from './fetchPosts';
const baseURL="https://kavya-lambdagram.herokuapp.com";

function deletePost(postId,setPosts){
axios.delete(`${baseURL}/api/posts/${postId}`)
.then((res)=>{
    console.log('res from delete',res)
    fetchPosts(setPosts);
    // setPosts(res.data)
})
.catch(err=>{
    console.log('err in delete',err)
})
}
export default deletePost;
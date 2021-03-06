import axios from 'axios';
import fetchPosts from './fetchPosts';
const baseURL="https://kavya-lambdagram.herokuapp.com";

function addComment(newComment,postId,setPosts){
    console.log('newcomment in addcomment=',newComment)
axios.post(`${baseURL}/api/posts/${postId}/comments`,newComment)
.then((res)=>{
    console.log('res from addcomment',res)
    fetchPosts(setPosts);
})
.catch(err=>{
    console.log('err in addComment',err)
})
}
export default addComment;
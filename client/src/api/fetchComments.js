import axios from 'axios';
const baseURL="https://kavya-lambdagram.herokuapp.com";

function fetchComments(postId,setComments){
axios.get(`${baseURL}/api/posts/${postId}/comments`)
.then((res)=>{
    console.log('res from comments',res)
    // return res.data
    setComments(res.data)
})
.catch(err=>{
    console.log('err in fetch',err)
})
}
export default fetchComments;
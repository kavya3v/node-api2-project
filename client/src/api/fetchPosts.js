import axios from 'axios';
const baseURL="https://kavya-lambdagram.herokuapp.com"
function fetchPosts(setPosts){
axios.get(`${baseURL}/api/posts/`)
.then((res)=>{
    console.log('res from fetch',res)
    // return res.data
    setPosts(res.data)
})
.catch(err=>{
    console.log('err in fetch',err)
})
}
export default fetchPosts;
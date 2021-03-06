import react,{useState, useEffect} from 'react';
import './Feed.css'
import TweetBox from './TweetBox.jsx'
import Post from './Post.jsx'
import db from './Firebase'
import FlipMove from 'react-flip-move'

const Feed = () => {
    const [post, setPosts] = useState([]);
    useEffect(() => {
        
        db.collection("posts").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((data) =>  data.data()))
        })
    },[])
    return (

        <div className="feed">
            {/* // Header */}
            <div className="feed__header">
                <h1>Home</h1>
            </div>
            {/* tweet box */}
            <TweetBox />

            <FlipMove>
        
           {post.map((data) => {
                
                
            return(<Post 
                key={data.text}
            displayName = {data.displayName}
            username = {data.username}
            verified= {data.verified}
            timestamp= {data.username}
            text= {data.text}
            image= {data.image}
            avatar= {data.avatar}
            />
                )
           })}
           </FlipMove>
        </div>


    )
}

export default Feed;
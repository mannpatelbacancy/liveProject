import React,{useState} from 'react';
import './Main.css';
const Main=props=>{
    const [like,setLike]=useState(100)
    const [likeStatus,setLikeStatus]=useState(true);
    const [disLikeStatus,setDisLikeStatus]=useState(true);
    const [disLike,setDisLike]=useState(25)
    
    const increasehandler=()=>{
        let copyLike=like;
        let copyLikeStatus=likeStatus;
        if(copyLikeStatus===true){
            copyLike+=1;
            setLike(copyLike);
            setLikeStatus(false);
        }else{
            copyLike-=1;
            setLike(copyLike)
            setLikeStatus(true)
        }

        

    }
    const decreasehandler=()=>{
        let copyDisLike=disLike;
        let copyDisLikeStatus=disLikeStatus;
        if(copyDisLikeStatus===true){
            copyDisLike+=1;
            setDisLike(copyDisLike);
            setDisLikeStatus(false);
        }else{
            copyDisLike-=1;
            setDisLike(copyDisLike)
            setDisLikeStatus(true)
        }
    }
    return(
        <React.Fragment>
            <span className="likes-counter">{like}</span>

            <button className={`like-button ${likeStatus?'liked':''}`} onClick={increasehandler}>Like | 100</button><br/>
            <span className="dislikes-counter">{disLike}</span>
            <button className={`dislike-button ${disLikeStatus?'disliked':''}`} onClick={decreasehandler}>Dislike | 25</button>

        </React.Fragment>
    );
}


export default Main;
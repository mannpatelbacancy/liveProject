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

        let copyDisLikeStatus=disLikeStatus;
        if(!copyDisLikeStatus){
            let copyDisLike=disLike;
            copyDisLike-=1;
            setDisLike(copyDisLike)
            setDisLikeStatus(true)
            
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
        let copyLikeStatus=likeStatus;
        if(!copyLikeStatus){
            let copyLike=like;
            copyLike-=1;
            setLike(copyLike)
            setLikeStatus(true)
            
        }
        
    }
    return(
        <React.Fragment>
            

            <button className={`like-button ${likeStatus?'':'liked'}`} onClick={increasehandler}>Like | <span>{like}</span></button>
            <button className={`dislike-button ${disLikeStatus?'':'disliked'}`} onClick={decreasehandler}>Dislike | <span>{disLike}</span></button>

        </React.Fragment>
    );
}


export default Main;
import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import vide1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {

    const[apidata,SetapiData]=useState(null);
    const fetchvideoData= async () =>{
        //fatching videos data
        const videodetail=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videodetail).then(res=>res.json()).then(data=>SetapiData(data.items[0]));
    }
    useEffect(()=>{
        fetchvideoData();
    },[videoId])
  return (
    <div className='PlayVideo'>
      {/* <video src={vide1} controls autoPlay muted ></video> */}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3> {apidata?apidata.snippet.title:"title here"}</h3>
      <div className='play-video-info'>
        <p>{value_converter(apidata?apidata.statistics.viewCount:"1k")} &bull;{moment(apidata.snippet.publishedAt).fromNow()} </p>
        <div>
            <span><img src={like} alt=''/>{value_converter(apidata.statistics.likeCount)}</span>
            <span><img src={dislike} alt=''/></span>
            <span><img src={share} alt=''/>Share</span>
            <span><img src={save} alt=''/>Save</span>
        </div>
      </div>
      <hr/>
      <div className='publisher'>
        <img src={jack} alt=''/>
        <div>
            <p>{apidata?apidata.snippet.channelTitle:""}</p>
            <span>2M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>{apidata?apidata.snippet.description.slice(0,250):"here discription"}</p>
        <p>Subscribe hankrob to watch  more videos </p>
        <hr></hr>
        <h4>{value_converter(apidata.statistics.commentCount)}comments</h4>
        <div className='comment'>
            <img src={user_profile} alt=''/>
            <div>
                <h3>jack nikolas<span>1 day ago </span> </h3>
                <p> this song very good i listen many time  best fav song in playlist  mja agya </p>
                <div className='comment-action'>
                    <img src={like} alt='' />
                    <span>265</span>
                    <img src={dislike} alt='' />

                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt=''/>
            <div>
                <h3>jack nikolas<span>1 day ago </span> </h3>
                <p> this song very good i listen many time  best fav song in playlist  mja agya </p>
                <div className='comment-action'>
                    <img src={like} alt='' />
                    <span>255</span>
                    <img src={dislike} alt='' />

                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt=''/>
            <div>
                <h3>jack nikolas<span>1 day ago </span> </h3>
                <p> this song very good i listen many time  best fav song in playlist  mja agya </p>
                <div className='comment-action'>
                    <img src={like} alt='' />
                    <span>255</span>
                    <img src={dislike} alt='' />

                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt=''/>
            <div>
                <h3>jack nikolas<span>1 day ago </span> </h3>
                <p> this song very good i listen many time  best fav song in playlist  mja agya </p>
                <div className='comment-action'>
                    <img src={like} alt='' />
                    <span>255</span>
                    <img src={dislike} alt='' />

                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt=''/>
            <div>
                <h3>jack nikolas<span>1 day ago </span> </h3>
                <p> this song very good i listen many time  best fav song in playlist  mja agya </p>
                <div className='comment-action'>
                    <img src={like} alt='' />
                    <span>255</span>
                    <img src={dislike} alt='' />

                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default PlayVideo

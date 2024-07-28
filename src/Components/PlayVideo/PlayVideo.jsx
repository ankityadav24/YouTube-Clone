import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './PlayVideo.css';
import vide1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const PlayVideo = ({ videoId }) => {
    const [apidata, SetapiData] = useState(null);

    const fetchvideoData = async () => {
        try {
            const videodetail = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
            const response = await fetch(videodetail);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            SetapiData(data.items[0]);
        } catch (error) {
            console.error('Error fetching video data:', error);
        }
    };

    useEffect(() => {
        fetchvideoData();
    }, [videoId]);

    return (
        <div className='PlayVideo'>
            <iframe 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
            <div className='play-video-info'>
                <p>
                    {apidata ? value_converter(apidata.statistics.viewCount) : "1k"} &bull; 
                    {apidata ? moment(apidata.snippet.publishedAt).fromNow() : "time ago"}
                </p>
                <div>
                    <span><img src={like} alt='like' />{apidata ? value_converter(apidata.statistics.likeCount) : "0"}</span>
                    <span><img src={dislike} alt='dislike' /></span>
                    <span><img src={share} alt='share' />Share</span>
                    <span><img src={save} alt='save' />Save</span>
                </div>
            </div>
            <hr />
            <div className='publisher'>
                <img src={jack} alt='publisher' />
                <div>
                    <p>{apidata ? apidata.snippet.channelTitle : "Channel Title"}</p>
                    <span>2M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                <p>{apidata ? apidata.snippet.description.slice(0, 250) : "here description"}</p>
                <p>Subscribe Hankrob to watch more videos</p>
                <hr />
                <h4>{apidata ? value_converter(apidata.statistics.commentCount) : "0"} comments</h4>
                {/* Comments section - ideally fetched or managed dynamically */}
                {[...Array(5)].map((_, index) => (
                    <div key={index} className='comment'>
                        <img src={user_profile} alt='user profile' />
                        <div>
                            <h3>Jack Nikolas <span>1 day ago</span></h3>
                            <p>This song is very good. I listen to it many times. Best fav song in the playlist. Mja agya</p>
                            <div className='comment-action'>
                                <img src={like} alt='like' />
                                <span>{index * 10 + 255}</span>
                                <img src={dislike} alt='dislike' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

PlayVideo.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default PlayVideo;

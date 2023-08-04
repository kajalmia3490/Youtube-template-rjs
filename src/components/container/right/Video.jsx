import React, { useState } from 'react';

const cursorPointer = {
    cursor: 'pointer'
};

const Video = ({ name, vdo }) => {

    const [like, setLike] = useState('Like');
    const likeClick = () => {
        const thumbsUp = 'Liked';
        setLike(thumbsUp);
    };

    const [text, setText] = useState('Download');
    const downloadClick = () => {
        const setValues = 'Downloading';
        setText(setValues);
    };

    const [watch, setWatch] = useState('Watch Later');
    const watchClick = () => {
        const watched = 'Saved!';
        setWatch(watched);
    };


    return (
        <div
            className='border rounded col-4 position-relative mx-1 mb-5'
            style={{ width: '350px', height: '230px' }}>

            <div className='position-absolute w-100'>

                <video controls className='w-100'>
                    <source src={vdo} type='video/mp4' />
                </video>

                <p
                    style={{ height: 'auto' }}
                    className='pt-1 border border-start-0 border-end-0 border-bottom-0'>
                    {name}
                </p>

                <p className='fw-bold text-success mt-4'>
                    <span
                        className='me-4'
                        style={cursorPointer}
                        onClick={likeClick}>
                        {like}
                    </span>

                    <span
                        className='me-4'
                        style={cursorPointer}>Share</span>

                    <span
                        className='me-4'
                        style={cursorPointer}
                        onClick={downloadClick}>
                        {text}
                    </span>

                    <span
                        className='me-4'
                        style={cursorPointer}
                        onClick={watchClick}>
                        {watch}
                    </span>
                </p>

            </div>

        </div>
    );
};

export default Video;
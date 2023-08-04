import React from 'react';
import { BiHome } from 'react-icons/bi';
import { MdOutlineSort, MdOutlineSubscriptions, MdVideoLibrary, MdOutlineWatchLater } from 'react-icons/md';
import { GoHistory } from 'react-icons/go';
import { RxVideo } from 'react-icons/rx';
import { GrLike } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';

const cursorPointer = {
    cursor: 'pointer'
};

const iconSize = {
    fontSize: '25px'
};

const Left = () => {
    return (
        <div className='col-2 border border-top-0 border-start-0 border-bottom-0 p-2'>

            <ul type='none' className='align-items-center position-sticky top-0' style={{ lineHeight: '40px' }}>

                <li className='align-items-center' style={cursorPointer}>
                    <BiHome className='me-3' style={iconSize} />
                    Home
                </li>

                <li style={cursorPointer}>
                    <MdOutlineSort className='me-3' style={iconSize} />
                    Shorts
                </li>

                <li style={cursorPointer}>
                    <MdOutlineSubscriptions className='me-3' style={iconSize} />
                    Subcriptions
                </li>
                <hr></hr>

                <li style={cursorPointer}>
                    <MdVideoLibrary className='me-3' style={iconSize} />
                    Library
                </li>

                <li style={cursorPointer}>
                    <GoHistory className='me-3' style={iconSize} />
                    History
                </li>

                <li style={cursorPointer}>
                    <RxVideo className='me-3' style={iconSize} />
                    Your videos
                </li>

                <li style={cursorPointer}>
                    <MdOutlineWatchLater className='me-3' style={iconSize} />
                    Watch later
                </li>

                <li style={cursorPointer}>
                    <GrLike className='me-3' style={iconSize} />
                    Liked videos
                </li>

                <li style={cursorPointer}>
                    <IoIosArrowDown className='me-3' style={iconSize} />
                    Show more
                </li>
                <hr></hr>

                <li className='h5' style={cursorPointer}>
                    Subscriptions
                </li>
                <li></li>
            </ul>
        </div>
    );
};

export default Left;
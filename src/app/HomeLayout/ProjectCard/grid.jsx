import React from 'react';

const Grid = ({ isActive }) => {
    return (
        <div>
            {/* <svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32.4 37.5" overflow="visible" xmlSpace="preserve">
            <g id="Layer_2">
                <g>
                    <g>
                        <g>
                            {/* fill color #4A525A 
                            <path fill={isActive ? '#FFFFFF' : '#4A525A'} d="M12.5,1.2H5.7c-1.4,0-2.5,1.1-2.5,2.5v11.2c0,1.4,1.1,2.5,2.5,2.5h6.8c1.4,0,2.5-1.1,2.5-2.5V3.6C15,2.3,13.9,1.2,12.5,1.2z"/>
                            <path fill={isActive ? '#FFFFFF' : '#4A525A'} d="M26.7,1.2h-6.8c-1.4,0-2.5,1.1-2.5,2.5v11.2c0,1.4,1.1,2.5,2.5,2.5h6.8c1.4,0,2.5-1.1,2.5-2.5V3.6C29.2,2.3,28.1,1.2,26.7,1.2z"/>
                            <path fill={isActive ? '#FFFFFF' : '#4A525A'} d="M12.5,20H5.7c-1.4,0-2.5,1.1-2.5,2.5v11.2c0,1.4,1.1,2.5,2.5,2.5h6.8c1.4,0,2.5-1.1,2.5-2.5V22.4C15,21.1,13.9,20,12.5,20z"/>
                            <path fill={isActive ? '#FFFFFF' : '#4A525A'} d="M26.7,20h-6.8c-1.4,0-2.5,1.1-2.5,2.5v11.2c0,1.4,1.1,2.5,2.5,2.5h6.8c1.4,0,2.5-1.1,2.5-2.5V22.4C29.2,21.1,28.1,20,26.7,20z"/>
                        </g>
                    </g>
                </g>
            </g>
            <g id="Layer_3"></g>
        </svg> */}
            <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 38 38"
            >
                <path
                    fill={isActive ? '#FFFFFF' : '#4a525a'}
                    d="M13.6,1.6H4.2c-1.5,0-2.7,1.1-2.7,2.5v11.2c0,1.4,1.2,2.5,2.7,2.5h9.5c1.5,0,2.7-1.1,2.7-2.5V4c0-1.3-1.2-2.4-2.7-2.4Z"
                />
                <path
                     fill={isActive ? '#FFFFFF' : '#4a525a'}
                    d="M13.6,20.4H4.2c-1.5,0-2.7,1.1-2.7,2.5v11.2c0,1.4,1.2,2.5,2.7,2.5h9.5c1.5,0,2.7-1.1,2.7-2.5v-11.3c0-1.3-1.2-2.4-2.7-2.4Z"
                />
                <path
                     fill={isActive ? '#FFFFFF' : '#4a525a'}
                    d="M33.8,1.6h-9.5c-1.5,0-2.7,1.1-2.7,2.5v11.2c0,1.4,1.2,2.5,2.7,2.5h9.5c1.5,0,2.7-1.1,2.7-2.5V4c0-1.3-1.2-2.4-2.7-2.4Z"
                />
                <path
                     fill={isActive ? '#FFFFFF' : '#4a525a'}
                    d="M33.8,20.4h-9.5c-1.5,0-2.7,1.1-2.7,2.5v11.2c0,1.4,1.2,2.5,2.7,2.5h9.5c1.5,0,2.7-1.1,2.7-2.5v-11.3c0-1.3-1.2-2.4-2.7-2.4Z"
                />
            </svg>
        </div>
    );
}

export default Grid;

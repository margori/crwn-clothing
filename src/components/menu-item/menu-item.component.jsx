import React from "react";

import './menu-item.styles.scss';
import {withRouter} from "react-router";

const MenuItem = ({
                      title,
                      imageUrl,
                      linkUrl,
                      history,
                      size
                  }) => (
    <div className={`menu-item ${size}`}>
        <div className='background-image'
             onClick={() => history.push(linkUrl)}
             style={{
                 backgroundImage: `url(${imageUrl})`
             }}/>

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>

    </div>
);

export default withRouter(MenuItem);
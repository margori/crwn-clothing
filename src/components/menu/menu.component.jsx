import React from "react";
import {connect} from 'react-redux';
import MenuItem from "../menu-item/menu-item.component";

import './menu.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectMenuSections} from "../../redux/menu/menu.selectors";

const Menu = ({sections}) => (
    <div className="menu">
        {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector( {
    sections: selectMenuSections
});

export default connect(mapStateToProps)(Menu);

import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: require('./categories.json')
        }
    }

    render() {
        return (
            <div className="directory-menu">
                { this.state.sections.map( ({ id, ...otherSectionProps }) =>
                  <MenuItem key={id} {...otherSectionProps} />
                )}
            </div>
        )
        
    }
}

export default Directory;
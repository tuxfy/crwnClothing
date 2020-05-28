import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shop extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      collections: require('./shopData.json')
    }
  }

  
  render() {
    return (
      <div className="shopPage">
            {this.state.collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))          
        }
      </div>   
    )
  }
  
};

export default Shop;
import React from "react";
import "./collections-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

function CollectionsOverview({collections}) {
    return (
        <div className="collections-overview">
            {
                    collections.map(({id, ...otherCollectionProps}) => {
                        return <CollectionPreview key={id} {...otherCollectionProps}  />
                    })
            }    
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);

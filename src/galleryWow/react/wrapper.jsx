import React from 'react';

import SwellGalleryWow from './../swell-gallery-wow.vue';

export default (props) => {
    console.log({...props})
    return <SwellGalleryWow {...props}/>;
}
import React, { useContext, Fragment } from 'react'
import { GalleryContextApi } from './../ContextApi/GalleryApi';

import ListOfGallery from './ListOfGallery';

const GalleryComponent = () => {
    let GalleryData = useContext(GalleryContextApi);
    console.log(GalleryData);
    return (
      <div>
        <Fragment>
          {GalleryData.map(x => {
            return <ListOfGallery/>
          })}
          </Fragment>
           
      </div>
    );
}

export default GalleryComponent


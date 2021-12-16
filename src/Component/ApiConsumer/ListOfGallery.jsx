
import React from "react";
import Moment from 'react-moment'
const ListOfGallery = ({
  id,
  created_at,
  updated_at,
  description,
  likes,
  links,
  urls,
  user,
}) => {
    return (
      <main>
        <figure>
          <img src={urls.thumb} alt={user.name} />
        </figure>
        <div className="block">
          <aside>
            <span className="iconBlock">
              <i className="fad fa-user"></i>
            </span>
            <span className="spanContent">{user.name}</span>
          </aside>
          <aside>
            <span className="iconBlock">
              <i className="far fa-thumbs-up"></i>
            </span>
            <span className="spanContent">{likes}</span>
          </aside>
        </div>
        <img src={user.profile_image.small} alt={user.name} />

        <p>{description === null ? "" : description}</p>
        <p>
          Created at :<Moment fromNow>{created_at}</Moment>
        </p>
      </main>
    );
 
};

export default ListOfGallery;

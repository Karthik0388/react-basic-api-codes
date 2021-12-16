import React, { createContext, useState, useEffect, Component } from "react";

let access_key = "x2668_fxhUc77MXrLuoIJeUyCzFNNZ-jtU_pPO1qkh4";
//let Secret_key = "mTNYnXRaJ4azf2Zd327V-qoWvt6iHW7EOGJLiTDtS80";

export let GalleryContextApi = createContext(null);

// const GalleryApi = (children) => {
//   let [state, setState] = useState([]);
//   useEffect(() => {
//     let fetch = async () => {
//       let base_url = "https://api.unsplash.com";
//              let photos = await window.fetch(
//                `${base_url}/photos/?client_id=${access_key}`
//              );
//                let finalPhotos = await photos.json();
//                setState({unsplashPhotos:finalPhotos})
//     };
//   },[])
//   return (
//     <div>
//       <GalleryContextApi.Provider value={state}>
//         {children}
//       </GalleryContextApi.Provider>
//     </div>
//   )
// }

// export default GalleryApi

// Class Based Context Api fetch
class GalleryContextProvider extends Component {
  state = {
    unsplashPhotos: [],
  };
  async componentDidMount() {
    let base_url = "https://api.unsplash.com";
    let photos = await window.fetch(
      `${base_url}/photos/?client_id=${access_key}`
    );
    let finalPhotos = await photos.json();
    this.setState({ unsplashPhotos: finalPhotos });
  }
  render() {
    return (
      <GalleryContextApi.Provider value={this.state.unsplashPhotos}>
        {this.props.children}
      </GalleryContextApi.Provider>
    );
  }
}

export default GalleryContextProvider;

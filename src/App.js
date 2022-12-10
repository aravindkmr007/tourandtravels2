import React from 'react';
// import SimpleReactLightbox from 'simple-react-lightbox'
// import './css/plugins.css';
import './css/style.css';
import "./css/template.css";
import './css/skin/skin-1.css';
// import "./css/main.css"
// import './plugins/slick/slick.min.css';
// import './plugins/slick/slick-theme.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Markup from './markup/Markup';




function App() {
  return (
    <div className="App">
        {/* <SimpleReactLightbox> */}
            <Markup />
        {/* </SimpleReactLightbox>   */}
    </div>
  );
}

export default App;

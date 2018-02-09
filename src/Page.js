import React from 'react';
// import Proptypes from 'prop-types';
import { Nav } from './Nav';


export const Page = () => {
	return(
	  <div className="App">
        <header className="App-header">
          <Nav/>
          <h1 className="App-title">This is page</h1>
        </header>
      </div>
	)
}


// Page.propTypes = {
// 	name: PropTypes.string.isRequired
// }
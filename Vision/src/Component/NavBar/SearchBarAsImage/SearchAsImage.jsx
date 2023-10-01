import React, { useState } from 'react'

import "./searchAsImage.css"

function SearchAsImage() {
  const handleImage=(e)=>{
   e.target.files[0]
    

  }
  
  return (
   
    <div className="input-image">
  <input type="file" accept="image/*" id="fileInput" />
  <label htmlFor="fileInput">
    <i className="fas fa-camera"></i> 
  </label>
</div>

  );
}

export default SearchAsImage

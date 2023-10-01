import React, { useState } from 'react'



function SearchBar({select}) {
  const handleImage=(e)=>{
    const select1=e.target.files[0]
    select(select1)

  }
  
  return (
    <div>
      <input
        type="file"
        accept="image/png"
        onChange={handleImage}
        style={{ background: "red" }}
      />
      
    </div>
  );
}

export default SearchBar

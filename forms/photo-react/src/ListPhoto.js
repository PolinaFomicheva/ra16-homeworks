import React from "react";

export default function ListPhoto({ arrPhoto, deleteImage }) {
    return (
      <div className='img_item'>
        <span onClick={() => deleteImage(arrPhoto.id)} className='material-icons'>
          cancel
        </span>
        <div className='img'>
          <img src={arrPhoto.src} alt={arrPhoto.id} />
        </div>
      </div>
    );
  }
  
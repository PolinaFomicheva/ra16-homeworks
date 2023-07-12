
import React, { useState } from "react";
import ListPhoto from "./ListPhoto";

export default function Photo() {
  const [image, setImage] = useState([]);

  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", (evt) => {
        resolve(evt.currentTarget.result);
      });

      fileReader.addEventListener("error", (evt) => {
        reject(new Error(evt.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
    });
  };

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map((o) => fileToDataUrl(o)));
    // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
    debugger;
    const arrImage = urls.map((item) => {
      return { id: item + 1, src: item };
    });
    setImage((prev) => [...prev, ...arrImage]);
    evt.target.value = "";
  };

  const deleteImage = (id) => {
    setImage((prevArr) => prevArr.filter((item) => item.id !== id));
  };

  return (
    <div className='containier'>
      <div className='containier__form'>
        <input className='addFile' type='file' onChange={handleSelect} />
        <div className='containier__photo'>
          {image.map((item) => (
            <ListPhoto
              arrPhoto={item}
              key={item.id}
              deleteImage={deleteImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

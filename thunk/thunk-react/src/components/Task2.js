import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto } from "../slices/photoContainier";

import ListPhoto from "./ListPhoto";

export default function Task2() {
  const { arrPhoto } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

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

    const arrImage = urls.map((item) => {
      return { id: nanoid(), src: item };
    });
    dispatch(addPhoto(arrImage));
    evt.target.value = "";
  };

  return (
    <div className="containier">
      <h3>Задание 2</h3>
      <input className="addFile" type="file" onChange={handleSelect} multiple />
      <div className="containier__photo">
        {arrPhoto.map((item) => (
          <ListPhoto photo={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

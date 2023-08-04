import React from "react";
import PropTypes from "prop-types";

export default function ListPhoto({ photo }) {
  return (
    <div style={{ width: "200px", heigth: "200px" }}>
      <img src={photo.src} alt="" style={{ width: "100%" }} />
    </div>
  );
}

ListPhoto.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string,
  }),
};

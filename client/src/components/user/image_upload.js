import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

const ImageUpload = (props) => {
  const [imageSrc, setImageSrc] = useState(
    props.isSetSrc
      ? `/facultyImages/${props.setImgSrc}`
      : "/facultyImages/user-default-profile.png"
  );

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageSrc(reader.result);
        //   console.log(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    props.imageScrHandler(e);
  };

  useEffect(async () => {
    // console.log(imageSrc);
    // await console.log(props.setImgSrc);
    // await console.log(props.isSetSrc);
    // if (props.isSetSrc) {
    //   await setImageSrc(`/facultyImages/${props.setImgSrc}`);
    //   await console.log(imageSrc);
    // }
  }, []);

  return (
    <div className="image-upload-wrapper py-4 ">
      <div className="image   m-auto">
        <img
          // src="{default_user_image}"
          className=" border"
          src={imageSrc}
          alt="user-profile-image"
        />
      </div>
      <div className="image-input-holder row my-3 px-3 justify-content-center">
        <input
          type="file"
          filename={props.imageFileName}
          className="btn btn-1"
          style={{ maxWidth: "15rem" }}
          id="imageInput"
          accept="image/*"
          onChange={imageHandler}
          required
        />
        <label htmlFor="imageInput" className="image-upload btn btn-1 border">
          Upload Image
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;

import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { ContainerPopUpValidation } from "../SignUpAndLoginPage/styles";
import { RemoveScroll } from "react-remove-scroll";
import { FixIcon } from "../SignUpAndLoginPage/styles";
import { FiX } from "react-icons/fi";
import { Fade } from "react-reveal";

const ImagesUploading = ({ setPopUpImagesUploading }) => {
  const [images, setImages] = useState([]);
  const [openAddButton, setOpenAddButton] = useState(false);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    if (addUpdateIndex) {
      setOpenAddButton(true);
    } else {
      setOpenAddButton(false);
    }
  };

  return (
    <div>
      <RemoveScroll>
        <FixIcon>
          <Fade>
            <FiX
              size={20}
              color="aliceblue"
              onClick={() => setPopUpImagesUploading(false)}
            />
          </Fade>
        </FixIcon>
        <ContainerPopUpValidation>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className="upload__image-wrapper">
                {!openAddButton && (
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    בחר תמונה
                  </button>
                )}
                &nbsp;
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      {imageList && (
                        <button onClick={() => onImageUpdate(index)}>
                          החלף תמונה
                        </button>
                      )}
                      <button onClick={() => onImageRemove(index)}>
                        הסר תמונה
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </ContainerPopUpValidation>
      </RemoveScroll>
    </div>
  );
};

export default ImagesUploading;

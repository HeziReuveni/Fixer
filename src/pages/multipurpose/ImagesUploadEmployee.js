import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { ButtonImagesUpload, ContainerDisplayUploadImage } from "./styles";
import { ContainerPopUpValidation } from "../SignUpAndLoginPage/styles";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { BsPatchCheckFill, BsImageAlt } from "react-icons/bs";
import { Fade } from "react-reveal";
import { resizeFile } from "./utils/compare";

const ImagesUploadEmployee = ({ setImageUrl, setImagesUploading }) => {
  const [images, setImages] = useState([]);
  const [displayAddButton, setDisplayAddButton] = useState(true);
  const maxNumber = 1;

  const onChange = async (imageList, addUpdateIndex) => {
    const image = await resizeFile(imageList[0].file);
    setImageUrl(image);
    if (addUpdateIndex || imageList) {
      setImages(imageList);
      setDisplayAddButton(false);
    }
  };

  return (
    <div>
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
            // write your building UI
            <div className="upload__image-wrapper">
              {displayAddButton && (
                <ButtonImagesUpload
                  style={isDragging ? { color: "red" } : undefined}
                  style={{
                    backgroundColor: "#3225bf",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <BsImageAlt size={22} color="white" />
                  בחר תמונה
                </ButtonImagesUpload>
              )}

              {imageList.map((image, index) => (
                <ContainerDisplayUploadImage key={index} className="image-item">
                  <Fade top>
                    <img
                      style={{
                        borderRadius: "50%",
                        border: "thick double rgba(0, 67, 143, 0.6)",
                        padding: "0.1rem",
                      }}
                      src={image["data_url"]}
                      alt=""
                      width="200"
                      height="200"
                    />
                  </Fade>
                  <div className="image-item__btn-wrapper">
                    <Fade left>
                      <ButtonImagesUpload
                        style={{
                          backgroundColor: "#3225bf",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        onClick={() => onImageUpdate(index)}
                      >
                        <MdOutlineSwapHoriz size={30} color="white" />
                        החלף תמונה
                      </ButtonImagesUpload>
                    </Fade>
                    <Fade right>
                      <ButtonImagesUpload
                        style={{
                          backgroundColor: "#3225bf",
                          color: "white",
                          marginTop: "1rem",
                          fontWeight: "bold",
                        }}
                        onClick={() => {
                          onImageRemove(index);
                          setDisplayAddButton(true);
                        }}
                      >
                        <AiFillDelete size={30} color="white" />
                        הסר תמונה
                      </ButtonImagesUpload>
                    </Fade>
                    <Fade bottom>
                      <ButtonImagesUpload
                        onClick={() => setImagesUploading(false)}
                        style={{
                          backgroundColor: "#3225bf",
                          color: "white",
                          marginTop: "1rem",
                          fontWeight: "bold",
                        }}
                      >
                        <BsPatchCheckFill size={30} color="white" />
                        בחר תמונה
                      </ButtonImagesUpload>
                    </Fade>
                  </div>
                </ContainerDisplayUploadImage>
              ))}
            </div>
          )}
        </ImageUploading>
      </ContainerPopUpValidation>
    </div>
  );
};

export default ImagesUploadEmployee;

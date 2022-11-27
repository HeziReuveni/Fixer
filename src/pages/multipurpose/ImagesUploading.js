import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { ContainerPopUpValidation } from "../SignUpAndLoginPage/styles";
import { ButtonImagesUpload, ContainerDisplayUploadImage } from "./styles";
import { FixIcon } from "../SignUpAndLoginPage/styles";
import { FiX } from "react-icons/fi";
import { BsImageAlt } from "react-icons/bs";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { CgPlayListRemove } from "react-icons/cg";
import { BsPatchCheckFill } from "react-icons/bs";
import { Fade } from "react-reveal";

const ImagesUploading = ({ setPopUpImagesUploading, setSelectedImg }) => {
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

            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              {!openAddButton && (
                <ButtonImagesUpload
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <BsImageAlt size={22} color="aliceblue" />
                  בחר תמונה
                </ButtonImagesUpload>
              )}

              {imageList.map((image, index) => (
                <ContainerDisplayUploadImage key={index} className="image-item">
                  <Fade top>
                    <img
                      style={{
                        borderRadius: "50%",
                        border: "thick double rgba(255, 255, 255, 0.5)",
                      }}
                      src={image["data_url"]}
                      alt=""
                      width="200"
                      height="200"
                    />
                  </Fade>
                  <div className="image-item__btn-wrapper">
                    {imageList && (
                      <Fade left>
                        <ButtonImagesUpload
                          onClick={() => onImageUpdate(index)}
                        >
                          <MdOutlineSwapHoriz size={30} />
                          החלף תמונה
                        </ButtonImagesUpload>
                      </Fade>
                    )}
                    <Fade right>
                      <ButtonImagesUpload
                        style={{
                          marginTop: "1rem",
                        }}
                        onClick={() => onImageRemove(index)}
                      >
                        <CgPlayListRemove size={30} />
                        הסר תמונה
                      </ButtonImagesUpload>
                    </Fade>
                    <Fade bottom>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <ButtonImagesUpload
                          onClick={() => {
                            setSelectedImg(true);
                            setPopUpImagesUploading(false);
                          }}
                          style={{
                            marginTop: "1rem",
                            width: "40%",
                          }}
                        >
                          <BsPatchCheckFill
                            size={40}
                            color="rgb(22, 159, 22, 0.9)"
                          />
                        </ButtonImagesUpload>
                      </div>
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

export default ImagesUploading;

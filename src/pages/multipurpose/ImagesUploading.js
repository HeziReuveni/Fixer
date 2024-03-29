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
import { resizeFile } from "./utils/compare";

const ImagesUploading = ({
  setPopUpImagesUploading,
  setSelectedImg,
  setImageUrl,
  imageUrl,
  setImgUrl,
}) => {
  const [openAddButton, setOpenAddButton] = useState(true);
  const maxNumber = 1;

  const onChange = async (imageList, addUpdateIndex) => {
    const image = await resizeFile(imageList[0].file);
    setImgUrl(image);
    setImageUrl(imageList);
    if (addUpdateIndex || imageList) {
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
          value={imageUrl}
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
              {openAddButton && (
                <ButtonImagesUpload
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <BsImageAlt size={22} color="rgb(0, 128, 255)" />
                  בחר תמונה
                </ButtonImagesUpload>
              )}

              {imageList.map((image, index) => (
                <ContainerDisplayUploadImage key={index} className="image-item">
                  <Fade top>
                    <img
                      style={{
                        borderRadius: "50%",
                        border: "thick double rgba(255, 255, 255, 0.3)",
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
                        onClick={() => {
                          onImageUpdate(index);
                        }}
                      >
                        <MdOutlineSwapHoriz
                          size={30}
                          color="rgb(0, 128, 255)"
                        />
                        החלף תמונה
                      </ButtonImagesUpload>
                    </Fade>
                    <Fade right>
                      <ButtonImagesUpload
                        style={{
                          marginTop: "1rem",
                        }}
                        onClick={() => {
                          onImageRemove(0);

                          setSelectedImg(false);
                        }}
                      >
                        <CgPlayListRemove size={30} color="rgb(0, 128, 255)" />
                        הסר תמונה
                      </ButtonImagesUpload>
                    </Fade>
                    <Fade bottom>
                      <ButtonImagesUpload
                        onClick={() => {
                          setSelectedImg(true);
                          setPopUpImagesUploading(false);
                        }}
                        style={{
                          marginTop: "1rem",
                        }}
                      >
                        <BsPatchCheckFill size={30} color="rgb(0, 179, 0)" />
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

export default ImagesUploading;

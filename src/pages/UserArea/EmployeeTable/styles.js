import styled from "styled-components";

export const ContainerTablePage = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: white;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  background-color: #3225bf;
  width: 100%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2rem;
  color: whitesmoke;
  letter-spacing: 2px;
`;

export const ContainerUl = styled.div`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerLi = styled.li`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #3225bf;
  color: whitesmoke;
  margin-top: 1rem;
  height: 15vh;
  border-radius: 5px;
  box-shadow: 0px 0px 10px gray;
`;

export const Image = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  border: thick double rgba(255, 255, 255, 0.3);
  padding: 0.1rem;
`;

export const ContainerTextRow = styled.div`
  text-align: right;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export const ContainerIconRow = styled.div`
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 1rem;
`;

export const ButtonAddUser = styled.button`
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50px;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
`;

export const ContainerAddForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(15px);
`;

export const ContainerInputAddForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  width: 100%;
  height: 4vh;
  min-height: 2.3rem;
  border-bottom: 2px solid #3225bf;
  padding: 0.3rem;
  transition: 0.5s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const InputAddForm = styled.input`
  text-align: right;
  color: #3225bf;
  width: 90%;
  height: 80%;
  outline: none;
  border: none;
  background: none;
  ::placeholder {
    color: #3225bf;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

export const InputAddImageFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 0.5rem;
  letter-spacing: 1px;
  font-size: 0.9rem;
  color: antiquewhite;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const ContainerInputAddImageFile = styled(ContainerInputAddForm)`
  display: flex;
  align-items: center;
  justify-content: right;
  &:hover {
    background: none;
  }
`;

export const ButtonReturnHomePage = styled(ContainerIconRow)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1;
`;

export const ContainerMessageSuccess = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 5rem;
  font-size: 25px;
  padding: 2rem;
`;

export const TextNameMessageSuccess = styled.div`
  color: #14a34b;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
`;

export const AddFormEmployee = styled.form`
  display: ${(props) => (props.imagesUploading ? "none" : "flex")};
  height: 24rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
`;

export const ContainerImageAndTitleEmployee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 40vh;
`;

export const ContainerDetailsEmployee = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: space-evenly;
  width: 80%;
  height: 40vh;
`;

export const ImageEmployeeDetails = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: thick double rgba(0, 67, 143, 0.4);
  padding: 0.1rem;
`;

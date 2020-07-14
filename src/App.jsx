import React from 'react';
import './App.scss';
import { FileUploaderComponent } from "./FileUploader/FileUploaderComponent";
import { checkFileSize, checkMimeType, useStateWithLabel } from "./utils";
import Carousel from './Carousel/Carousel';

const App = () => {
  let [fileList, setFileList] = useStateWithLabel([], "fileList");
  let [carouselSize, setCarouselSize] = useStateWithLabel('small', 'carouselSize');

  const onFileUpload = (event) => {
    let file = event.target.files[0];
    if (file && checkMimeType(file) && checkFileSize(file)) {
      fileList = [...fileList, URL.createObjectURL(file)]
      setFileList(fileList);
    } else {
      event.target.value = null;
    }
  }

  return (
    <div className="container">
      <FileUploaderComponent
        onFileUpload={onFileUpload}
      />
      {
        fileList.length !== 0 &&
        <>
          <form>
            <label htmlFor="carouselSize">Select Carouse Size</label>
            <select name="carouselSize" value={carouselSize} onChange={(e) => setCarouselSize(e.target.value)}>
              {
                ['small', 'medium', 'large'].map((size, index) =>
                  <option key={index} value={size} onClick={setCarouselSize}>{size}</option>
                )
              }
            </select>
          </form>
          <Carousel imageList={fileList} carouselSize={carouselSize} />
        </>
      }
    </div>
  );
}

export default App;
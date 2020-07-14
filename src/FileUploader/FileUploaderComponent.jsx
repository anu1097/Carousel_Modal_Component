import React from 'react';
import './FileUploaderComponent.scss';

export const FileUploaderComponent = (props) => {
  const { onFileUpload } = props;
  return (
    <form className="files">
      <label>Upload Your File </label>
      <input id="inputFileUpload" type="file" className="fileUploader formElement"
        onChange={onFileUpload} />
    </form>
  );
}
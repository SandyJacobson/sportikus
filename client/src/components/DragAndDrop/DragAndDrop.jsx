import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

const DragAndDrop = () => {
    const [yourImage, setImage] = useState([]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setImage(
                acceptedFiles.map((upFile) => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )
        }
    })
    return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ? <p>Drop the image here..</p> : <p>Drag and drop image here || click to select image</p>
                }
            </div>
            <div>
                {yourImage.map((upFile) => {
                    return (
                        <div>
                            <img src={upFile.preview} style={{ width: "600px", height: "400px", border: "3px solid #CCC" }} alt="preview" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DragAndDrop
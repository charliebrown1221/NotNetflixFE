import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
import S3 from 'react-aws-s3'
import AWS from 'aws-sdk'
import {Key_Id, Secret_Access_Key} from "../../components/AddMovie/apiKeys"

window.Buffer = window.Buffer || require("buffer").Buffer;


const S3_BUCKET ='notnetflix2';
const REGION ='us-east-1';


AWS.config.update({
    accessKeyId:    Key_Id,
    secretAccessKey: Secret_Access_Key
})

// const myBucket = new AWS.S3.ManagedUpload({
//     params: { Bucket: S3_BUCKET, Body: stream},
//     region: REGION,
// })

const Upload = () => {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = async () => {

        // const params = {
        //     ACL: 'public-read',
        //     Body: file,
        //     Bucket: S3_BUCKET,
        //     Key: file.name
        // };
        console.log(selectedFile)
        var base64data = await selectedFile.arrayBuffer()
        const myBucket = new AWS.S3.ManagedUpload({
            params: { Bucket: S3_BUCKET, Key:  selectedFile.name, ContentType: 'video/mp4',Body:  base64data},
            region: REGION,
        })
        myBucket.send()
        console.log("sending?")
        // myBucket.putObject(params)
        //     .on('httpUploadProgress', (evt) => {
        //         setProgress(Math.round((evt.loaded / evt.total) * 100))
        //     })
        //     .send((err) => {
        //         if (err) console.log(err)
        //     })
    }


    return <div>
        
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => uploadFile()}> Upload </button>
    </div>
}

export default Upload;

import React from "react";

import Spinner from './spinner'
import WebcamCapture from './webcam'
import ImageDetail from './imagedetail.js'
import axios from 'axios'

function b64toBlob(dataURI) {

    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
}


class MaskDetection extends React.Component {
    constructor(props){
        super(props);
        this.state={
            capturedImage: null,
            maskedScore: null,
            dataLoading:false
        }

    }
    
    onImageSelect = (image) =>{
        this.setState({capturedImage: image})
    };
    onImageSubmit = async (image) => { 
        this.setState({
            dataLoading:true
        })
        let data = new FormData();
        const blob = b64toBlob(image);
        const file = new File([blob],"image.jpg")    
        data.append("image", file);
       
        axios({
            method: 'post',
            url: 'https://mask.vyvydkf628.endpoint.ainize.ai/checkmask',
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data',
                // 'Access-Control-Allow-Origin': '*'
            }
        }).then((res)=>
        {
            this.setState({ 
                maskedScore : Number(res.data.mask).toFixed(4),
                dataLoading: false
            })
        }).catch((e)=>{
            this.setState({ 
                maskedScore : "can not find face, try again",
                dataLoading: false
            })
        })
    } 
    
        
    
    render(){
        
        return (
        <div className= "ui container" style={{margin:"10px"}}>
        
            <div className="ui grid">
            <h1 style = {{padding:"10px"}}> Mask Detection</h1>
                <div className="ui row">
                    <div className="column">

                <h4>Keep an eye on the camera and click button to capture</h4>
                        <WebcamCapture onImageSelect ={this.onImageSelect}/>
                    </div>
                </div>
                <div className="ui row">
                    <div className="eleven wide column">
                        {this.state.capturedImage!==null ?
                        <div className= "ui segment">
                        <ImageDetail image = {this.state.capturedImage} onImageSubmit= {this.onImageSubmit} ></ImageDetail>
                        </div>: ""}
                        
                    </div>
                    <div className="five wide column">
                        {this.state.dataLoading===true ?
                            <Spinner></Spinner>
                        :
                            <div>
                        Mask Score : {this.state.maskedScore}
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        );
    }
};
  
export default MaskDetection;

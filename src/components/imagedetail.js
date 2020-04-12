
import React from "react";

import Spinner from './spinner'
class ImageDetail extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }

    }
    sendImage = () =>{
        // $('#src')
        this.props.onImageSubmit(this.props.image)
    }
        

    render(){
        return (
            <div>
                <img name="image"src={this.props.image}  style={{marginLeft:"55px", paddingBottom:"10px"}}/>

                <button onClick={this.sendImage} class="fluid ui button" >Send a image to detect a mask</button>
            </div>
        );
    }
};
  
export default ImageDetail;

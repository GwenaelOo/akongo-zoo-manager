import Dropzone from 'react-dropzone'
import React, { Component } from 'react';
import axios from 'axios'
const nav = require("../../Nav/Nav");

class UploadMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            files: [],
            background: 'http://res.cloudinary.com/akongo/image/upload/v1512762269/test/mmpjwr0yxwuwx7soyzq6.png',
            returnedURL: ''
        }
        this.handleUrl = this.handleUrl.bind(this);
    }

    onDrop(files) {
        this.setState({
            files,
            background: 'http://www.akongo.fr/assets/ico/Spin.gif'
        });

        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `specie.name, specie.zoo`);
            formData.append("folder", "test");
            formData.append("upload_preset", "wrvzfjll"); // Replace the preset name with your own
            formData.append("api_key", "247372227977832"); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            ////////////////////////
            // Test google Storage
            ////////////////////////
            let uid = Date.now()
            let userData = JSON.parse(localStorage.getItem('user'))
            let folder = userData.zooName

            var storageRef = firebase.storage().ref(folder + 'map/' + userData.zooName + '.pdf');
            storageRef.put(file).then(function (snapshot) {
                console.log('Uploaded a blob or file!');

                let mapURL = nav.bucketURL + userData.zooName + '/map/' + userData.zooName + '.pdf'
                console.log(mapURL)
               
                this.handleUrl(mapURL)
            
            });
           

            //this.props.methodToReturnUrl(this.state.returnedUrl);
    
        });
        
    }

    handleUrl(mapURL){
        this.setState({
            mapURL: mapURL
        });
    }

    render() {

        let style = {
            'backgroundImage': 'url(' + this.state.background + ')',
            'height': '200px',
            'width': '200px',
            'backgroundSize': '200px 200px',
            'borderRadius': '10px',
            'margin': '10px 10px 10px 10px'
        }



        return (
            <section>
                <div className="dropzone">
                    <Dropzone onDrop={this.onDrop.bind(this)} style={style}>
                    </Dropzone>
                </div>

            </section>
        );
    }
}

export default UploadMap;
import Dropzone from 'react-dropzone'
import React, { Component } from 'react';
import axios from 'axios'

class UploadPhoto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            files: [],
            background: '',
            returnedURL: '',
            returnedId: ''
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.background !== this.state.background) {
            this.setState({ background: nextProps.background });
        }

        if (nextProps.background === '') {
            this.setState({ background: 'http://res.cloudinary.com/akongo/image/upload/v1512762269/test/mmpjwr0yxwuwx7soyzq6.png' })
        }
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
           
            var storageRef = firebase.storage().ref('TemporaryPhotoBucket/' + uid + '.jpg');
            storageRef.put(file).then(function (snapshot) {
                console.log('Uploaded a blob or file!');
            });
            this.setState({
                returnedId: uid
            });

            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post("https://api.cloudinary.com/v1_1/akongo/image/upload/", formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url // You should store this URL for future references in your app

                this.setState({
                    background: data.url,
                    returnedUrl: fileURL,
                });
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            this.props.methodToReturnUrl(this.state.returnedUrl, this.props.id, this.state.returnedId);
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

export default UploadPhoto;
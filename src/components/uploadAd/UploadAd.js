import React, { Component } from 'react';
import './UploadAd.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import firebase from '../../firebase';

class UploadAd extends Component {

    constructor(props){
        super(props);
        this.state ={
            companyName : "",
            redirectURL : "",
            selectedFile : null
        }
    }

    componentDidMount() {
        document.title = 'Upload Ad';
      }

      fileSelectedHandler = event => {
        if( event.target.files[0] ){
            this.setState({
                selectedFile : event.target.files[0]
            })
        }
    }

    async addAdvertisement(){
        // const db = firebase.firestore();
        // const data = await db.collection("Advertisement").add({id:Date.now(),companyName:this.state.companyName.trim(),redirectURL:this.state.redirectURL.trim()});
        // const storage = firebase.storage();
        // const uploadTask = storage.ref(`advertisements/${this.state.selectedFile.name}`).put(this.state.selectedFile)
        // uploadTask.on('state_changed',
        // (snapshot) => {
        //     //Progress
        // }, 
        // (error) => {
        //     //Error
        //     console.log(error);
        // }, 
        // () => {
        //     //Complete
        //     storage.ref('advertisements').child(this.state.selectedFile.name).getDownloadURL().then(url =>{
        //         debugger
        //         console.log(url)
        //         this.updateAdvertisementURL(url);
        //     })
        // });
    }

    async updateAdvertisementURL(url){
        // const db = firebase.firestore();
        // const data = await db.collection("Advertisement").orderBy("id", "desc").limit(1).get();
        // let collection = data.docs.map(doc => ({...doc.data(),docId:doc.id}));
        // const docId = collection[0].docId;
        // delete collection[0]["docId"];
        // collection[0].url = url;
        // db.collection("Advertisement").doc(docId).set(collection[0]);
        // this.setState({
        //     companyName : "",
        //     redirectURL : "",
        //     selectedFile : null
        // })
    }
  
      render () {
          return (
            <div className="uploadAdContainer">
            <div className="uploadAdHeader">Upload Ad</div>
            <Form>
                <FormGroup>
                    <Label for="companyName">Company Name</Label>
                    <Input type="text" name="companyName" id="companyName" value={this.state.companyName} onChange= {(e) => this.setState({companyName : e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label for="redirectURL">Redirect URL</Label>
                    <Input type="text" name="redirectURL" id="redirectURL" value={this.state.redirectURL} onChange= {(e) => this.setState({redirectURL : e.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label for="adFile">Image</Label>
                    <Input type="file" name="adFile" id="adFile" onChange ={this.fileSelectedHandler}/>
                    <FormText color="muted">
                    Please upload an Ad
                    </FormText>
                </FormGroup>
                <div style={{textAlign:'center'}}><Button color="primary" onClick={() => this.addAdvertisement()} disabled={ this.state.companyName.trim() === "" || this.state.redirectURL.trim() === "" || this.state.selectedFile === null }>Submit</Button></div>
            </Form>
          </div>
          )
      }
  }
  
  export default UploadAd
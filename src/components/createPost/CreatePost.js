import React, { Component } from 'react';
import './CreatePost.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import axios from 'axios';
import { env } from '../../environment';
// import firebase from '../../firebase';

let categoryOptions = [];
let subCategoryOptions = [];
let authorOptions = [];

class CreatePost extends Component {

    constructor(props){
        super(props);
        this.state ={
            uploadDate: new Date(),
            selectedCategory: null,
            selectedSubCategory: null,
            selectedAuthor: null,
            categoryList: [],
            subCategoryList: [],
            authorList: [],
            title:"",
            description:"",
            redirectURL:"",
            photoCredit:"",
            footerColorCode:"",
            footerRedirect:"",
            selectedFile : null
        }
    }

    handleDateChange = date => {
        this.setState({
            uploadDate: date
        });
      };

    handleCategoryChange = selectedCategory => {
        this.setState({ selectedCategory , selectedSubCategory : null});
        this.getSubCategories(selectedCategory.id);
    };

    handleSubCategoryChange = selectedSubCategory => {
        this.setState({ selectedSubCategory });
    };

    handleAuthorChange = selectedAuthor => {
        this.setState({ selectedAuthor });
    };

    componentDidMount() {
        document.title = 'Create Post';
        this.getCategories();
        this.getAuthors();
    }

    async getCategories(){
        // const db = firebase.firestore();
        // const data = await db.collection("Category").get()
        // categoryOptions = data.docs.map(doc => ({...doc.data(),id:doc.id}));
        // let tempCategoryList = categoryOptions.map(function (item) {
        //     let obj = {};
        //     obj.id = item.id;
        //     obj.value = item.name;
        //     obj.label = item.name;
        //     return obj
        //   });
        //   this.setState({
        //     categoryList : tempCategoryList
        // })
    }

    async getSubCategories(id){
        // const db = firebase.firestore();
        // var reference = await db.collection("Category").doc(id);
        // var query =  await db.collection("SubCategory").where("category", "==", reference).get();;
        // subCategoryOptions = query.docs.map(doc => ({...doc.data(),id:doc.id}));
        // let tempSubCategoryList = subCategoryOptions.map(function (item) {
        //     let obj = {};
        //     obj.id = item.id;
        //     obj.value = item.name;
        //     obj.label = item.name;
        //     return obj
        // });
        // tempSubCategoryList.sort(function(a, b){
        //     var x=a.value.toLowerCase(), y=b.value.toLowerCase()
        //     if (x < y)
        //         return -1 
        //     if (x > y)
        //         return 1
        //     return 0 
        // })
        // this.setState({
        //     subCategoryList : tempSubCategoryList
        // });
    }

    async getAuthors(){
        // const db = firebase.firestore();
        // const data = await db.collection("Author").get()
        // authorOptions = data.docs.map(doc => ({...doc.data(),id:doc.id}));
        // let tempAuthorList = authorOptions.map(function (item) {
        //     let obj = {};
        //     obj.id = item.id;
        //     obj.value = item.displayName;
        //     obj.label = item.displayName;
        //     return obj
        // });

        // tempAuthorList.sort(function(a, b){
        //     var x=a.value.toLowerCase(), y=b.value.toLowerCase()
        //     if (x < y)
        //         return -1 
        //     if (x > y)
        //         return 1
        //     return 0 
        // })
        // this.setState({
        //     authorList : tempAuthorList
        // })
    }

    formatDate(d){
        let cal = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear();
        return day + " " + cal[month] + " " + year
    }


    async addPost(){

        // const db = firebase.firestore();
        // const data = await db.collection("Article").add(
        //     {
        //         id : Date.now(),
        //         categoryName : this.state.selectedCategory.value,
        //         category : db.collection("Category").doc(this.state.selectedCategory.id),
        //         subCategoryName : this.state.selectedSubCategory.value,
        //         subCategory : db.collection("SubCategory").doc(this.state.selectedSubCategory.id),
        //         authorName : this.state.selectedAuthor.value,
        //         author : db.collection("Author").doc(this.state.selectedAuthor.id),
        //         title : this.state.title.trim(),
        //         description : this.state.description.trim(),
        //         redirectURL : this.state.redirectURL.trim(),
        //         uploadedDate : this.formatDate(this.state.uploadDate),
        //         uploadedDateTimestamp : this.state.uploadDate.getTime(),
        //         photoCredit : this.state.photoCredit.trim(),
        //         colorCode : this.state.footerColorCode.trim(),
        //         footerLink : this.state.footerRedirect.trim()
        //     });
        //     const storage = firebase.storage();
        //     const uploadTask = storage.ref(`articleImages/${this.state.selectedFile.name}`).put(this.state.selectedFile)
        //     uploadTask.on('state_changed',
        //     (snapshot) => {
        //         //Progress
        //     }, 
        //     (error) => {
        //         //Error
        //         console.log(error);
        //     }, 
        //     () => {
        //         //Complete
        //         storage.ref('articleImages').child(this.state.selectedFile.name).getDownloadURL().then(url =>{
        //             this.updateIconURL(url);
        //         })
        //     });
    }

    async updateIconURL(url){
        // const db = firebase.firestore();
        // const data = await db.collection("Article").orderBy("id", "desc").limit(1).get();
        // let collection = data.docs.map(doc => ({...doc.data(),docId:doc.id}));
        // const docId = collection[0].docId;
        // delete collection[0]["docId"];
        // collection[0].url = url;
        // db.collection("Article").doc(docId).set(collection[0]);
        // this.setState({
        //     selectedCategory: null,
        //     selectedSubCategory: null,
        //     selectedAuthor: null,
        //     title : "",
        //     description : "",
        //     redirectURL : "",
        //     photoCredit : "",
        //     uploadDate : new Date(),
        //     footerColorCode : "",
        //     footerRedirect : ""
        // });
    }


    fileSelectedHandler = event => {
        this.setState({
            selectedFile : event.target.files[0]
        })
    }

    uploadImage(articleId){
        const formData = new FormData();
        formData.append('file', this.state.selectedFile, this.state.selectedFile.name)
        axios.post(env + `upload?articleId=` + articleId, formData)
            .then(res => {
                console.log(res);
            })
    }
  
      render () {
        const { selectedCategory, selectedSubCategory, selectedAuthor } = this.state;
        
          return (
                  <div className="postContainer">
                    <div className="postHeader">Create Post</div>
                    <Form>
                        <FormGroup>
                            <Label for="categorySelect">Category</Label>
                            <Select
                                value={selectedCategory}
                                onChange={this.handleCategoryChange}
                                options={this.state.categoryList}
                                placeholder="Select"
                                isSearchable
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subCategorySelect">Sub Category</Label>
                            <Select
                                value={selectedSubCategory}
                                onChange={this.handleSubCategoryChange}
                                options={this.state.subCategoryList}
                                placeholder="Select"
                                isSearchable
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="author">Author</Label>
                            <Select
                                value={selectedAuthor}
                                onChange={this.handleAuthorChange}
                                options={this.state.authorList}
                                placeholder="Select"
                                isSearchable
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" name="title" id="title" value={this.state.title} onChange= {(e) => this.setState({title : e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="textarea" name="description" id="description" value={this.state.description} onChange= {(e) => this.setState({description : e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="redirectURL">Redirect URL</Label>
                            <Input type="text" name="redirectURL" id="redirectURL" value={this.state.redirectURL} onChange= {(e) => this.setState({redirectURL : e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="uploadedDate">Uploaded Date</Label>
                            <div>
                                <DatePicker
                                    selected={this.state.uploadDate}
                                    onChange={this.handleDateChange}
                                />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="photoCredit">Photo Credit</Label>
                            <Input type="text" name="photoCredit" id="photoCredit" value={this.state.photoCredit} onChange= {(e) => this.setState({photoCredit : e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="footerColorCode">Footer Color Code</Label>
                            <Input type="text" name="footerColorCode" id="footerColorCode" placeholder="#FFFFFF" value={this.state.footerColorCode} onChange= {(e) => this.setState({footerColorCode : e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="footerColorRedirect">Footer Redirect Link</Label>
                            <Input type="text" name="footerColorRedirect" id="footerRedirect" value={this.state.footerRedirect} onChange= {(e) => this.setState({footerRedirect : e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="articleImage">Image</Label>
                            <Input type="file" name="articleImage" id="articleImage" onChange ={this.fileSelectedHandler} />
                            <FormText color="muted">
                            Please upload an image
                            </FormText>
                        </FormGroup>
                        <div style={{textAlign:'center'}}><Button color="primary" onClick={() => this.addPost()} disabled={ this.state.selectedCategory === null || this.state.selectedSubCategory === null || this.state.selectedAuthor === null || this.state.title.trim() === "" || this.state.description.trim() === "" || this.state.redirectURL.trim() === "" || this.state.photoCredit.trim() === "" || this.state.footerColorCode.trim() === "" || this.state.footerRedirect.trim() === "" || this.state.selectedFile === null}>Submit</Button></div>
                    </Form>
                  </div>
          )
      }
  }
  
  export default CreatePost
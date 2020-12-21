import React, { Component } from 'react';
import './AddSubCategory.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import firebase from '../../firebase';
import Select from 'react-select';

let categoryOptions = [];
let timeStamp;
class AddSubCategory extends Component {

    constructor(props){
        super(props);
        this.state ={
            category : "English",
            subCategory : "",
            selectedCategory: null,
            categoryList : [],
            selectedFile : null
        }
    }

    handleCategoryChange = selectedCategory => {
        this.setState({ selectedCategory });
    };

    componentDidMount() {
        document.title = 'Add SubCategory';
        this.getCategories();
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
        //     categoryList : tempCategoryList,
        //     selectedFile : tempCategoryList[0]
        // })   
    }

    async addSubCategory(){
        // const db = firebase.firestore();
        // timeStamp = Date.now()
        // const data = await db.collection("SubCategory").add({id:timeStamp,name:this.state.subCategory.trim(),category: db.collection("Category").doc(this.state.selectedCategory.id),categoryName:this.state.selectedCategory.value});
        // const storage = firebase.storage();
        // const uploadTask = storage.ref(`icons/${this.state.selectedFile.name}`).put(this.state.selectedFile)
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
        //     storage.ref('icons').child(this.state.selectedFile.name).getDownloadURL().then(url =>{
        //         console.log(url)
        //         this.updateIconURL(url);
        //     })
        // });
    }

    async updateIconURL(url){
        // const db = firebase.firestore();
        // const data = await db.collection("SubCategory").orderBy("id", "desc").limit(1).get();
        // let collection = data.docs.map(doc => ({...doc.data(),docId:doc.id}));
        // const docId = collection[0].docId;
        // delete collection[0]["docId"];
        // collection[0].url = url;
        // db.collection("SubCategory").doc(docId).set(collection[0]);
        this.setState({
            subCategory : "",
            selectedFile : null
        })
    }

    fileSelectedHandler = event => {
        if( event.target.files[0] ){
            this.setState({
                selectedFile : event.target.files[0]
            })
        }
    }
  
    render () {
        const { selectedCategory } = this.state;
          return (
            <div className="subCategoryContainer">
            <div className="subCategoryHeader">Add SubCategory</div>
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
                    <Label for="subCategory">Sub Category</Label>
                    <Input type="text" name="subCategory" id="subCategory" value={this.state.subCategory} onChange= {(e) => this.setState({subCategory : e.target.value})}/>
                </FormGroup>
                <FormGroup>
                            <Label for="iconFile">Icon</Label>
                            <Input type="file" name="iconFile" id="iconFile" onChange ={this.fileSelectedHandler}/>
                            <FormText color="muted">
                            Please upload an image
                            </FormText>
                        </FormGroup>
                <div style={{textAlign:'center'}}><Button color="primary" onClick={() => this.addSubCategory()} disabled={ this.state.subCategory.trim() === "" || this.state.selectedFile === null }>Submit</Button></div>
            </Form>
          </div>
          )
      }
  }
  
  export default AddSubCategory
import React, { Component } from 'react';
import './AddAuthor.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { env } from '../../environment';
// import firebase from '../../firebase';

class AddAuthor extends Component {

    constructor(props){
        super(props);
        this.state ={
            authorName : "",
            authorUsername : "",
            authorDisplayName : "",
            authorEmail : "",
            categoryName : ""
        }
    }

    componentDidMount() {
        document.title = 'Add Author';
    }

    addAuthor(){
        // const db = firebase.firestore();
        // const data = db.collection("Author").add({
        //     id:Date.now(),
        //     authorName : this.state.authorName.trim(),
        //     userName : this.state.authorUsername.trim(),
        //     displayName : this.state.authorDisplayName.trim(),
        //     email : this.state.authorEmail.trim()
        // });
        this.setState({
            authorName : "",
            authorUsername : "",
            authorDisplayName : "",
            authorEmail : ""
        });
    }

    addCategory(){
        // const db = firebase.firestore();
        // const data = db.collection("Category").add({id:Date.now(),name:this.state.categoryName.trim()});
        this.setState({
            categoryName : ""
        })
    }
  
    render () {
          return (
            <div className="authorContainer">
            <div className="authorHeader">Add Author</div>
            <Form>
                <FormGroup>
                    <Label for="authorName">Author Name</Label>
                    <Input type="text" name="authorName" id="authorName" value={this.state.authorName} onChange= {(e) => this.setState({authorName : e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label for="authorUsername">Author Username</Label>
                    <Input type="text" name="authorUsername" id="authorUsername" value={this.state.authorUsername} onChange= {(e) => this.setState({authorUsername : e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label for="authorDisplayName">Author Display Name</Label>
                    <Input type="text" name="authorDisplayName" id="authorDisplayName" value={this.state.authorDisplayName} onChange= {(e) => this.setState({authorDisplayName : e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label for="authorEmail">Author Email</Label>
                    <Input type="email" name="authorEmail" id="authorEmail" value={this.state.authorEmail} onChange= {(e) => this.setState({authorEmail : e.target.value})} />
                </FormGroup>
                <div style={{textAlign:'center'}}><Button color="primary" onClick={() => this.addAuthor()} disabled={ this.state.authorName.trim() === "" || this.state.authorUsername.trim() === "" || this.state.authorDisplayName.trim() === "" || this.state.authorEmail.trim() === "" }>Submit</Button></div>
            </Form>

            {/* <hr />

            <Form>
                <FormGroup>
                    <Label for="categoryName">Category</Label>
                    <Input type="text" name="categoryName" id="categoryName" value={this.state.categoryName} onChange= {(e) => this.setState({categoryName : e.target.value})} />
                </FormGroup>
                <div style={{textAlign:'center'}}><Button color="primary" onClick={() => this.addCategory()} disabled={ this.state.categoryName.trim() === ""}>Save</Button></div>
            </Form> */}
          </div>
          )
    }
  }
  
  export default AddAuthor
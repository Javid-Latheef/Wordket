import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import './Home.css';
import axios from 'axios';
import { env } from '../../environment';
// import firebase from '../../firebase';

const customStyles = {
    cells: {
      style: {
        paddingTop: '10px',
        paddingBottom: '10px',
      },
    },
  };


const articleColumns = [
    {
      name: 'Title',
      selector: 'title',
      wrap: true
    },
    {
      name: 'Description',
      selector: row => row.description.substring(0, 40) + " ...",
      wrap: true
    },
    {
      name: 'Uploaded Date',
      selector: 'uploadedDate',
    },
    {
      name: 'Author',
      selector: 'authorName',
      wrap: true
    },
    {
      name: 'Category',
      selector: 'categoryName',
      wrap: true
    },
    {
      name: 'Sub Category',
      selector: 'subCategoryName',
      wrap: true
    },
    {
      name: 'Views',
      selector: row => "0",
      wrap: true
    },
    {
      name: 'Article Image',
      selector: row => <a href ={row.url} target="_blank" style={{ color: "#4a85e2",textDecoration: "underline"}}>Link</a>,
      wrap: true
    }
  ];

  const authorColumns = [
    {
       name: 'Author Name',
       selector: 'authorName',
       wrap: true
    },
    {
        name: 'User Name',
        selector: 'userName',
        wrap: true
    },
    {
        name: 'Display Name',
        selector: 'displayName',
        wrap: true
    },
    {
      name: 'Email',
      selector: 'email'
    }
  ];

  const subCategoryColumns = [
    {
        name: 'Sub Category',
        selector: 'name',
        wrap: true
    },
    {
        name: 'Category',
        selector: 'categoryName',
        wrap: true
    },
    {
      name: 'Icon',
      selector: row => <a href ={row.url} target="_blank" style={{ color: "#4a85e2",textDecoration: "underline"}}>Link</a>,
      wrap: true
    }
  ];

  const adColumns = [
    {
        name: 'Company Name',
        selector: 'companyName',
        wrap: true
    },
    {
        name: 'Redirect URL',
        selector: 'redirectURL',
        wrap: true
    },
    {
      name: 'Ad Image',
      selector: row => <a href ={row.url} target="_blank" style={{ color: "#4a85e2",textDecoration: "underline"}}>Link</a>,
      wrap: true
    }
  ];

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            articleList : [],
            authorList : [],
            subCategoryList : [],
            adList : []
        }
    }

    componentDidMount() {
        document.title = 'Home';
        this.getAllArticles();
        this.getAuthors();
        this.getSubCategories();
        this.getAds();
      }

    getAllArticles(){
        // const db = firebase.firestore();
        // db.collection("Article")
        // .orderBy("uploadedDateTimestamp", "desc").onSnapshot(snapshot => {       
        //    let articles = snapshot.docs.map(doc => ({...doc.data(),id:doc.id}));    
        //    this.setState({
        //       articleList : articles
        //    })        
        // });
    }

    getAuthors(){
      // const db = firebase.firestore();
      //   db.collection("Author")
      //   .orderBy("displayName", "asc").onSnapshot(snapshot => {       
      //      let authors = snapshot.docs.map(doc => ({...doc.data(),id:doc.id}));    
      //      this.setState({
      //       authorList : authors
      //      })        
      //   });
    }

    getSubCategories(){
      // const db = firebase.firestore();
      // db.collection("SubCategory")
      //  .orderBy("name", "asc").onSnapshot(snapshot => {       
      //     let subCategories = snapshot.docs.map(doc => ({...doc.data(),id:doc.id}));   
      //     this.setState({
      //       subCategoryList : subCategories
      //     })        
      // });
    }

    getAds(){
      // const db = firebase.firestore();
      // db.collection("Advertisement")
      //  .orderBy("id", "desc").onSnapshot(snapshot => {       
      //     let ads = snapshot.docs.map(doc => ({...doc.data(),id:doc.id}));   
      //     this.setState({
      //       adList : ads
      //     })        
      // });
    }
  
      render () {
          return (
              <div>
                  <div className="homeContainer">
                  <div className="sectionHeader">Posts</div>
                  <DataTable
                    columns={articleColumns}
                    data={this.state.articleList}
                    pagination={true}
                    highlightOnHover={true}
                    striped={true}
                    pointerOnHover={true}
                    dense={true}
                    fixedHeader={true}
                    allowOverflow={false}
                    customStyles={customStyles}
                  />
                  </div>
                  <div className="homeContainer">
                  <div className="sectionHeader">Authors</div>
                  <DataTable
                    columns={authorColumns}
                    data={this.state.authorList}
                    pagination={true}
                    highlightOnHover={true}
                    striped={true}
                    pointerOnHover={true}
                    dense={true}
                    fixedHeader={true}
                    allowOverflow={false}
                    customStyles={customStyles}
                  />
                  </div>
                  <div className="homeContainer">
                  <div className="sectionHeader">Sub Categories</div>
                  <DataTable
                    columns={subCategoryColumns}
                    data={this.state.subCategoryList}
                    pagination={true}
                    highlightOnHover={true}
                    striped={true}
                    pointerOnHover={true}
                    dense={true}
                    fixedHeader={true}
                    allowOverflow={false}
                    customStyles={customStyles}
                  />
                  </div>
                  <div className="homeContainer">
                  <div className="sectionHeader">Advertisements</div>
                  <DataTable
                    columns={adColumns}
                    data={this.state.adList}
                    pagination={true}
                    highlightOnHover={true}
                    striped={true}
                    pointerOnHover={true}
                    dense={true}
                    fixedHeader={true}
                    allowOverflow={false}
                    customStyles={customStyles}
                  />
                  </div>
              </div>
          )
      }
  }
  
  export default Home
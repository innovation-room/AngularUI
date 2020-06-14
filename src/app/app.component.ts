import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { HttpHeaders} from '@angular/common/http' ;
import { Observable } from 'rxjs' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient:HttpClient) { }
   
  title = 'BookStore';
 // name: String = 'Book Store'
  url : String = 'https://www.picsum.photos/200?random'
  mycls = 'box border';
  uname: String = '';
  textSize = 10;
  selectedSkill = "";
  handleClick() {
    console.log("Done");
  }
  handleEvent(event) {
    if(event.key != 'Enter')
    {
      return;
    }
    var val = event.target.value;
    this.uname=val;
    //console.log("Handle event");
  }

  setSize(operation) {
    if(operation == 'inc'){
      this.textSize += 1;
    }else{
       this.textSize -= 1;
    }
  }

  bookdetails = {
    id:'',
    bookname: '',
    authorName:''
  };
 
  isDataSubmitted = false;

  setValue(event) {
    const keyName = event.target.name;
    const value = event.target.value;
    this.bookdetails[keyName] = value;
  }

  submitData() {

    for(const key in this.bookdetails){
      const val = this.bookdetails[key];
      if(val.trim().length == 0){
            alert("Field cannot blank");
            return;
      }
    }
    this.isDataSubmitted=true;
    console.log(this.bookdetails);
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': "Content-Type"
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    const data = JSON.stringify(this.bookdetails);
    this.httpClient.post('http://localhost:8082/addBook',data,requestOptions
    //{
     // bookname : this.bookdetails['bookname'],
     // authorName : this.bookdetails['authorName']

    //},requestOptions
    ).subscribe(
      (data:any) => {
        
        console.log(data);
        console.log('done');
      }
    )
  }
  resetForm() {
    this.bookdetails = {
      id:'',
      bookname: '',
      authorName:''
    };
    this.isDataSubmitted=false;
  }
  ngStyles = {
      width:'100px',
      height:'150px',
      background: 'red'
    }

    handleEvent1(event) {
      const value = event.target.value;
      this.selectedSkill=value;
    }
    names: String[] = ['Ajit','Akshay','Amitabh','Ashish'];
    users = [
      {
         name: 'Ajit',
         email:'ajit123@yahoo.in',
         skill : 'c lang'
      },
      {
        name: 'Amitabh',
        email:'amit@yahoo.in',
        skill : 'ML'
     },
     {
      name: 'Ashish',
      email:'ashish@yahoo.in',
      skill : 'JS'
   },
   {
    name: 'Akshay',
    email:'akshay@yahoo.in',
    skill : 'java'
 }
    ];

    showAndEdit(user){
      console.log(user);
    }

    name1 :string ='nitish Kumar';
    today = new Date();
    num = 2.167;
}


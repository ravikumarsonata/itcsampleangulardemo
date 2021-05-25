import { Component, OnInit } from '@angular/core';
import { CurdService } from './curd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public responseData:any =[];
  public addedMessage:string ='';
  public deletedSuccessMessage:string ='';
  public updateMessage:string ='';

  userObject={
    id:0,
    email:'',
    first_name:'',
    last_name:'',
    avatar:'https://reqres.in/img/faces/9-image.jpg'
  }
  
  constructor(private curdService:CurdService){

  }
  ngOnInit(): void {
  this.curdService.getData().subscribe(data => {
    debugger;
 
    this.responseData =data.data;
  });
  }

  submit(data:any){
    debugger;
    this.responseData.id=data.id;
    console.log(data);
    // this.curdService.addData(data).subscribe(data =>{

    // })
    this.responseData.push(data);
  }
  addQuestion(responseData:any){
    // this.curdService.addData(responseData).subscribe(data =>{
    //   this.addedMessage =data;
    // })
    responseData.push(responseData);
  }
  // updateQuestion(responseData:any){
  //   this.curdService.updateData(responseData).subscribe(data =>{
  //     this.updateMessage =data;
  //   })
  // }
  
  deleteQuestion(resp:any, index:any){
    alert(index);
    // this.curdService.deleteData(id).subscribe(data =>{
    //   this.deletedSuccessMessage =data;
    // })
    // const index: number = this.responseData.indexOf(id);
    // if (index !== -1) {
    //     this.responseData.splice(index, 1);
    // } 

    this.responseData.splice(this.responseData.indexOf(resp.id), 1);
  
  }
}

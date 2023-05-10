import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/Common/common-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData={
    "userId": 0,
    "name": "",
    "email": "",
    "phone": "",
    "gender": "",
    "dateofBirth": "",
    "username": "",
    "password": "",
    "usertype": "",
    "address": "",
    "occupation": "",
    "profileImg": ""
  }
  base64textString='';




  constructor(private _http:HttpClient,private _commonService:CommonServiceService) { }

  ngOnInit(): void {
  }
  
  handleFileSelect(evt:any){
    var files = evt.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}


_handleReaderLoaded(readerEvt:any) {
  var binaryString = readerEvt.target.result;
         this.base64textString= btoa(binaryString);
         this.registerData.profileImg='data:image/jpeg;base64,'+this.base64textString;
         console.log(btoa(binaryString));
 }

  Register(register:any){    
    console.log(this.registerData.profileImg);
    
    this._commonService.Register(this.registerData).subscribe((res:any)=>{

    });
  }

}

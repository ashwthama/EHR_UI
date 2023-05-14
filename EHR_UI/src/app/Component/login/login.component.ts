import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/Common/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Username = '';
  password = '';
  Islogin: boolean = false;
  user: any
  base64String="";
  constructor(private _commonservice: CommonServiceService) { }

  ngOnInit(): void {
    this.Submit();
  }
  Submit() {
    //LoginForm:any
    let data = {
      userName: "Kapil",
      password: "Kapil"
    }
    //LoginForm.form.value
    this._commonservice.login(data).subscribe((res: any) => {
      console.log(res);
      this.user = res;
      this.Islogin = true;
    });
  }

  LogoutUser() {
    this.Islogin = false;
  }

  handleFileSelect(event: any) {
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64String = 'data:image/jpeg;base64,' + btoa(binaryString);
    console.log(btoa(binaryString));
  }

  UpdateProfile(){
    this.user.profileImg=this.base64String;
    this._commonservice.Register(this.user).subscribe((res:any)=>{
      window.location.reload();
    });
    
  }

}

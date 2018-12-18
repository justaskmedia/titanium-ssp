import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-api',
  templateUrl: './generate-api.component.html',
  styleUrls: ['./generate-api.component.scss']
})
export class GenerateAPIComponent implements OnInit {

  showAPI:boolean = true;
  copiedKey:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.showAPI = false;
  }

  copyAPIKey() {
    this.copiedKey = false;
    var copyText = document.getElementById("api-key") as HTMLInputElement;

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    // show that the key is copied
    this.copiedKey = true;
    var that = this;

    // Hide
    setTimeout(function(){
      console.log(that.copiedKey)
      that.copiedKey = false;
    }, 2000);

  }

}

import { Component, OnInit } from '@angular/core';
import * as domtoimage from 'dom-to-image';

@Component({
  selector: 'grid-comp',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  image : any;
  url : string;

  constructor() { }

  ngOnInit() {
  }

  printGrid(): void {
    let node = document.getElementById('plate-grid');

    domtoimage.toPng(node)
      .then((dataUrl) => {
        this.image = new Image();
        this.image.src = dataUrl;
        this.url = dataUrl;
        // document.body.appendChild(this.image);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });

    // domtoimage.toBlob(node)
    //   .then(function (blob) {
    //     window.saveAs(blob, 'my-node.png');
    //   });
  }

}

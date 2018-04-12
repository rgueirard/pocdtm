import { Component } from '@angular/core';
import * as domtoimage from 'dom-to-image';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'satt-avarre-front',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ID.vet';
  image : any;
  url : string;


  printGrid(): void {
    let node = document.getElementById('la-plate-grid');

    domtoimage.toPng(node)
      .then((dataUrl) => {
        this.image = new Image();
        this.image.src = dataUrl;
        this.url = dataUrl;
        document.body.appendChild(this.image);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });

    domtoimage.toBlob(node)
      .then(function (blob) {
        FileSaver.saveAs(blob, 'my-node.png');
        // console.log('coucou');
      });
  }
}

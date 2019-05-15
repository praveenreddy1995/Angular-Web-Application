import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  galleryOptions1: NgxGalleryOptions[];
  galleryImages1: NgxGalleryImage[];
  galleryOptions2: NgxGalleryOptions[];
  galleryImages2: NgxGalleryImage[];
  constructor() { }

  ngOnInit(): void {

    this.galleryOptions1 = [
      { "imageAutoPlay": true, "imageAnimation": "Rotate", "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true,"imageArrowsAutoHide": true, "thumbnailsArrowsAutoHide": true },
      { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
      { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20,imageAnimation: NgxGalleryAnimation.Rotate
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: true
        }
    ];

    this.galleryImages1 = [
      { small: '../../assets/imgs/Gallery/img5.jpg', medium: '../../assets/imgs/Gallery/img5.jpg',  big: '../../assets/imgs/Gallery/img5.jpg' },
      { small: '../../assets/imgs/Gallery/img6.jpg', medium: '../../assets/imgs/Gallery/img6.jpg',  big: '../../assets/imgs/Gallery/img6.jpg' },
      { small: '../../assets/imgs/Gallery/img7.jpg', medium: '../../assets/imgs/Gallery/img7.jpg',  big: '../../assets/imgs/Gallery/img7.jpg' },
      { small: '../../assets/imgs/Gallery/img8.jpg', medium: '../../assets/imgs/Gallery/img8.jpg',  big: '../../assets/imgs/Gallery/img8.jpg' },
      { small: '../../assets/imgs/Gallery/img9.jpg', medium: '../../assets/imgs/Gallery/img9.jpg',  big: '../../assets/imgs/Gallery/img9.jpg' },
      { small: '../../assets/imgs/Gallery/img1.jpg', medium: '../../assets/imgs/Gallery/img1.jpg',  big: '../../assets/imgs/Gallery/img1.jpg' },
      { small: '../../assets/imgs/Gallery/img2.jpg', medium: '../../assets/imgs/Gallery/img2.jpg',  big: '../../assets/imgs/Gallery/img2.jpg' },
      { small: '../../assets/imgs/Gallery/img3.jpg', medium: '../../assets/imgs/Gallery/img3.jpg',  big: '../../assets/imgs/Gallery/img3.jpg' },
      { small: '../../assets/imgs/Gallery/img4.jpg', medium: '../../assets/imgs/Gallery/img4.jpg',  big: '../../assets/imgs/Gallery/img4.jpg' },
     
    ];
    this.galleryOptions2 = [
      { "thumbnails": false },
      { "breakpoint": 500, "width": "100%", "height": "200px" },
  
  // max-width 800
  {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
  },
  // max-width 400
  {
      breakpoint: 400,
      preview: true
  }
];

this.galleryImages2 = [
{ small: '../../assets/imgs/Gallery/img1.jpg', medium: '../../assets/imgs/Gallery/img1.jpg',  big: '../../assets/imgs/Gallery/img1.jpg' },
{ small: '../../assets/imgs/Gallery/img2.jpg', medium: '../../assets/imgs/Gallery/img2.jpg',  big: '../../assets/imgs/Gallery/img2.jpg' },
{ small: '../../assets/imgs/Gallery/img3.jpg', medium: '../../assets/imgs/Gallery/img3.jpg',  big: '../../assets/imgs/Gallery/img3.jpg' },
{ small: '../../assets/imgs/Gallery/img4.jpg', medium: '../../assets/imgs/Gallery/img4.jpg',  big: '../../assets/imgs/Gallery/img4.jpg' },
{ small: '../../assets/imgs/Gallery/img5.jpg', medium: '../../assets/imgs/Gallery/img5.jpg',  big: '../../assets/imgs/Gallery/img5.jpg' },
{ small: '../../assets/imgs/Gallery/img6.jpg', medium: '../../assets/imgs/Gallery/img6.jpg',  big: '../../assets/imgs/Gallery/img6.jpg' },
{ small: '../../assets/imgs/Gallery/img7.jpg', medium: '../../assets/imgs/Gallery/img7.jpg',  big: '../../assets/imgs/Gallery/img7.jpg' },
{ small: '../../assets/imgs/Gallery/img8.jpg', medium: '../../assets/imgs/Gallery/img8.jpg',  big: '../../assets/imgs/Gallery/img8.jpg' },
{ small: '../../assets/imgs/Gallery/img9.jpg', medium: '../../assets/imgs/Gallery/img9.jpg',  big: '../../assets/imgs/Gallery/img9.jpg' },
];

}
}
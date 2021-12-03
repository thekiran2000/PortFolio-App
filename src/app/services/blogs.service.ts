import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class BlogsService {

  constructor(private firestore: AngularFirestore) { }

  public getPolicies() {
    return this.firestore.collection('Blogs').snapshotChanges();
  }

  public createPolicy(){
    const blog={
      Date:new Date(),
      tech:"JavaScript",
      time_to_read:"5 min read",
      header_image:"https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      sub_header:"Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at",
      header:"test header",
      uploaded_by:"Kiran",
      explain:[
        {title:"test explain",images:[]}
      ]
    }
    return this.firestore.collection('Blogs').add(blog);
  }
}

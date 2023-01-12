import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  details : any
  name : any
  rev : any
  img : any
  when : any
  pointer : number = 0

  constructor() {
    this.details=[
      {
        name : "Hariharapadmanaban",
        dt : "3 months ago",
        review : "Best mansion as name suggests the best mansion in chennai. One of the cleanest and spotless mansion in chennai. Owner is friendly and easily approchable. I would recommend new comers to visit best mansion for your accommodation.",
        image : ""
      },
      {
        name : "Naga Ponraj",
        dt : "5 years ago",
        review : `
        I stayed here for 2years. Cleanliness and bathroom cleaning are super and well maintained. And our belongings are safe and secured. Near by all of the shops, medical and Bus stand in just walkable distance only. Rent is little bit high, but worth to stay here.
        (Around nearby I have searched the more mansion but this is one of the Best Mansion ......)`,
        image : ""
      },
      {
        name : "Sunith",
        dt : "9 months ago",
        review : "I stayed in this mansion for 2 months and the rooms are clean and good, bathroom was also very good and they are maintaining nicely. I really enjoyed staying in this mansion and they are taking personal care. I liked this mansion, why because they are not allowing alcohol and smoking inside their premises and for this reason only I preferred this mansion.",
        image : ""
      },
      {
        name : "Sree Vishak",
        dt : "4 months ago",
        review : "Best Mansion Is One Of The Top Most Mansion I have Seen In Chennai... Stay Was very Comfortable And Very Much Adorable... The Experience In The Mansion Is Amazing... I Suggest All My Dear Friends To Make A Stay In Best Mansion While You Are At Chennai.... 😍😍",
        image : ""
      },
      {
        name : "David Raja",
        dt : "1 year ago",
        review : "I stayed here for last two months and the room was superb and owners are very kind anyone come new to Chennai I referred this place.",
        image : ""
      },
      {
        name : "Suresh kumar",
        dt : "3 months ago",
        review : `It is nice , pretty clean and well maintained. It is also very calm . Whenever I used to come to chennai, I prefer this mansion to stay.
        I liked this best mansion only for the cleanliness and the bathrooms are maintained well.
        I actually compared with more than 5 hostels , this mansion is superb.`,
        image : ""
      },
      {
        name : "Sudharsan",
        dt : "2 years ago",
        review : `
        Best place to stay... Very neat and hygiene with affordable price. Best is Best`,
        image : ""
      },
      {
        name : "Prasad",
        dt : "10 months ago",
        review : "Very neat and calm atmosphere and it was a nice experience",
        image : ""
      }
    ]
    this.name = this.details[0].name
    this.rev = this.details[0].review
    this.img = this.details[0].image
    this.when = this.details[0].dt
  }

  disp_forward(){
    if(this.pointer!=7)
     ++this.pointer;
    else
      this.pointer = 0;
    this.name = this.details[this.pointer].name
    this.rev = this.details[this.pointer].review
    this.img = this.details[this.pointer].image
    this.when = this.details[this.pointer].dt
    
  }

  disp_backward(){
    if(this.pointer!=0)
    --this.pointer;
   else
     this.pointer = 7;
   this.name = this.details[this.pointer].name
   this.rev = this.details[this.pointer].review
   this.img = this.details[this.pointer].imag
   this.when = this.details[this.pointer].dt
  }

  toPricing(){
      document.getElementById('some-div')?.scrollIntoView()
}

  ngOnInit(): void {
  }

}

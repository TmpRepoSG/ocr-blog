import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-blog';

  posts = [
    {
      title: 'Where does it come from?',
      content: `Subscribe to our daily newsletter

      Join SporteLuxe for free and get daily updates on articles, events and access to cool offers!
      
      Skip for now`,
      loveIts: 0,
      created_at: Date.parse('01 Sep 2018 09:12:00 GMT')
    },
    {
      title: 'Lorem ipsum comments',
      content: `This has taken four years before coming to court?

      No, it was the court decision that came four years later. Having experience with Japanese courts myself, I can tell you that the back and forth yaritori between lawyers and the court is very time comsuming, and before a verdict is ever reached, there will be several court hearings where both parties plead their case. Documents need to be prepared, documents written, discussed, countered etc.`,
      loveIts: 0,
      created_at: Date.parse('02 Sep 2018 09:50:00 GMT')
    },
    {
      title: 'Lorem Ipsum is simply',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      loveIts: 0,
      created_at: Date.parse('04 Sep 2018 19:42:00 GMT')
    }/* ,
    {
      title: '',
      content: ``,
      loveIts: 0,
      created_at: Date.parse('01 Sep 2018 09:12:00 GMT')
    } */
  ];
}

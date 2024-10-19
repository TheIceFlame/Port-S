import { Component } from '@angular/core';

interface Scene {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-intership',
  templateUrl: './intership.component.html',
  styleUrls: ['./intership.component.scss']
})
export class IntershipComponent {
  scenes: Scene[] = [
    {
      id: 1,
      title: 'Attijari',
      subtitle: 'Insights from My Internship Experience at Attijari Bank',
      content: "During my internship at Attijari Bank, I gained valuable insights into the banking sector, focusing on customer service and financial solutions. I collaborated with a talented team to enhance user experience through innovative digital tools, and I learned about the importance of integrating technology in banking operations. This experience not only honed my professional skills but also deepened my understanding of the financial industry's dynamics.",
      backgroundImage: 'url(https://www.attijaribank.com.tn/sites/default/files/styles/image_slider/public/2022-11/siege.jpg?itok=F9u55xyq)' // Add your images here
    },
    {
      id: 2,
      title: 'Valeo',
      subtitle: 'Reflections on My Internship at Valeo',
      content: 'My internship at Valeo provided me with an in-depth understanding of the automotive industry and the role of innovative technologies in enhancing vehicle performance. I worked on projects involving embedded systems and software development, collaborating with cross-functional teams to improve product efficiency. This experience not only strengthened my technical skills but also emphasized the importance of teamwork and innovation in driving success within the automotive sector.',
      backgroundImage: 'url(https://www.valeo.com/wp-content/uploads/2020/03/tunisia-country-page-valeo-10_1600x698_acf_cropped.jpg)' // Change image URL
    },
    {
      id: 3,
      title: 'Masked Text',
      subtitle: 'background-clip, background-position, and transform',
      content: 'The masked text can be achieved by setting a background image...',
      backgroundImage: 'url(https://picsum.photos/4000/2660?image=994)' // Change image URL
    },
    {
      id: 4,
      title: 'Modern CSS Techniques',
      subtitle: 'CSS Grid and CSS Variables',
      content: 'The primary layout technique used here is CSS grid...',
      backgroundImage: 'url(https://picsum.photos/4000/2660?image=995)' // Change image URL
    }
  ];
  currentScene!: Scene;


  constructor() {
    this.currentScene = this.scenes[0]; // Initialize with the first scene
  }

  onSceneChange(event: Event): void {
    const selectedId = parseInt((event.target as HTMLInputElement).value);
    this.currentScene = this.scenes.find(scene => scene.id === selectedId) || this.scenes[0];
  }
}

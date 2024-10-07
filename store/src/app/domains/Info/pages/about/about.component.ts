import { Component, signal } from '@angular/core';
import { CounterComponent } from "../../../Shared/components/counter/counter.component";
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, CounterComponent, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event)
  {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMesage(event: Event)
  {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

}

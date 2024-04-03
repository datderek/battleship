import plopSrc from "../audio/plop.wav";
import hitSrc from '../audio/hit.wav'
import missSrc from '../audio/miss.wav'

export default class AudioPlayer {
  static play(type) {
    let audio;

    switch (type) {
      case ('plop'):
        audio = new Audio(plopSrc);
        break;
      case ('hit'):
        audio = new Audio(hitSrc);
        break;
      case ('miss'):
        audio = new Audio(missSrc);
        break;
      default:
        audio = new Audio(plopSrc);
        break;
    }

    audio.play();
  }
}
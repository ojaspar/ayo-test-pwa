import {
  trigger,
  style,
  animate,
  transition,
  query,
  animateChild,
} from '@angular/animations';

export const Container = [
  trigger('container', [
    transition(':enter, :leave', [
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
];

export const EnterFromTop = [
  trigger('enterFromTop', [
    transition(':enter', [
      style({ transform: 'translateY(-200px)', opacity: 0 }),
      animate('2s ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
  ]),
];

import { animate, style, transition, trigger } from '@angular/animations';

export let slideUp = trigger('slideUp', [
transition(':enter', [
    style({transform: 'translateY(100%)'}),
    animate(1000)
])
]);
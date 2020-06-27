import { animate, style, transition, trigger } from '@angular/animations';

export let slideIn = trigger('slideIn', [
transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate(1000)
])
]);

export let rightIn = trigger('rightIn', [
    transition(':enter', [
        style({transform: 'translateX(200%)'}),
        animate(1000)
    ])
]);
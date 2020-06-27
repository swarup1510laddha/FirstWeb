import { animate, style, transition, trigger } from '@angular/animations';

export let zoomIn = trigger('zoomIn', [
transition(':enter', [
    style({'font-size': '0.9rem'}),
    animate(500)
])
]);
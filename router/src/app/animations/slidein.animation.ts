import { trigger, transition, style, query, animate } from '@angular/animations';

// export const slideInAnimation =
//   trigger('routeAnimations', [
//     // transition('HomePage <=> AboutPage', [
//     //   style({ position: 'relative' }),
//     //   query(':enter, :leave', [
//     //     style({
//     //       position: 'absolute',
//     //       top: 0,
//     //       left: 0,
//     //       width: '100%'
//     //     })
//     //   ]),
//     //   query(':enter', [
//     //     style({ left: '-100%'})
//     //   ]),
//     //   query(':leave', animateChild()),
//     //   group([
//     //     query(':leave', [
//     //       animate('300ms ease-out', style({ left: '100%'}))
//     //     ]),
//     //     query(':enter', [
//     //       animate('300ms ease-out', style({ left: '0%'}))
//     //     ])
//     //   ]),
//     //   query(':enter', animateChild()),
//     // ]),
//     transition('HomePage <=> LazyPage', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%'
//         })
//       ]),
//       query(':enter', [
//         style({ left: '-100%'})
//       ]),
//       query(':leave', animateChild()),
//       query(':enter', animateChild()),
//       group([
//         query(':leave', [
//           animate('500ms ease-out', style({ left: '100%'}))
//         ]),
//         query(':enter', [
//           animate('500ms ease-out', style({ left: '0%'}))
//         ])
//       ]),
//     ])
//   ]);

  export const fadeAnimation =

    trigger('fadeAnimation', [

        transition( '* => *', [

            query(':enter',
                [
                    style({ opacity: 0 })
                ],
                { optional: true }
            ),

            query(':leave',
                [
                    style({ opacity: 1 }),
                    animate('0.5s', style({ opacity: 0 }))
                ],
                { optional: true }
            ),

            query(':enter',
                [
                    style({ opacity: 0 }),
                    animate('0.5s', style({ opacity: 1 }))
                ],
                { optional: true }
            )

        ])

    ]);

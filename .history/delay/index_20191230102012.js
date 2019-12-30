import Rx from 'rxjs';

// Rx.Observable.of(42)
// .do(() => console.log('helo'))
// .delay(1200)
// .subscribe(console.log)

Rx.Observable.range(1,9)
.delayWhen(n => Rx.Observable.timer(n * 1000))
.subscribe(console.log)
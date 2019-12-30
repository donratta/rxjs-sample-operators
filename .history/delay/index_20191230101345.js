import Rx from 'rxjs';

Rx.Observable.of(42)
.do(() => console.log('helo'))
.delay(1200)
.subscribe(console.log)
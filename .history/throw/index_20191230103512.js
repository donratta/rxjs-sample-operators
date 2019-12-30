import Rx from 'rxjs';

Rx.Observable
.throw()
.catch(err => console.log(err))
.subscribe(console.log)
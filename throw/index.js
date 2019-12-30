import Rx from 'rxjs';

Rx.Observable
.throw()
.subscribe({
  next: () => console.log('here'),
  error: (err) => console.log('Error', err)
})
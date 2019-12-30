import Rx from 'rxjs';

const range = Rx.Observable.range(1,9);

range
.map(n => n * n)
.subscribe(console.log)

const notificationAPI = Rx.Observable.interval(1000)

notificationAPI
.mapTo(() => {type: 'ACTION' })
.subscribe(console.log);
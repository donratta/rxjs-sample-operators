import Rx from 'rxjs';


const rangeObservable = Rx.Observable.range(0,20)

rangeObservable.subscribe( e=> console.log(e));
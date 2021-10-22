import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.action';
import { storeconfig } from '.././storeconfig';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>
  count2$: Observable<number>
  count:number
  constructor(private store:Store) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$=this.store.select('count')
    this.count2$=this.store.select('count2')
    
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch({type:'Increment'});
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement())
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset())
  }
}
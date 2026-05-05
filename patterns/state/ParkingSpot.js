import AvailableState from './AvailableState.js';
import OccupiedState from './OccupiedState.js';
import ReservedState from './ReservedState.js';
import OutOfServiceState from './OutOfServiceState.js';


export default class ParkingSpot {
  constructor(id) {
    this.id = id;
    this.meta = {};
    this.states = {
      available: new AvailableState(),
      occupied: new OccupiedState(),
      reserved: new ReservedState(),
      outOfService: new OutOfServiceState(),
    };
    this.state = this.states.available;
    this.state.enter(this);
  }

  changeState(newState, payload) {
    if (this.state && typeof this.state.exit === 'function') this.state.exit(this);
    this.state = newState;
    if (this.state && typeof this.state.enter === 'function') this.state.enter(this, payload);
  }

  reserve(payload) {
    if (typeof this.state.reserve === 'function') return this.state.reserve(this, payload);
    throw new Error(`Cannot reserve when ${this.state.toString()}`);
  }
  occupy(payload) {
    if (typeof this.state.occupy === 'function') return this.state.occupy(this, payload);
    throw new Error(`Cannot reserve when ${this.state.toString()}`);
  }
  release() {
    if (typeof this.state.release === 'function') return this.state.release(this);
    this.changeState(this.states.available);
  }
  cancelReservation() {
    if (typeof this.state.cancelReservation === 'function') return this.state.cancelReservation(this);
    throw new Error(`Cannot cancel reservation when ${this.state.toString()}`);
  }
  outOfService(payload) {
    if (typeof this.state.outOfService === 'function') return this.state.outOfService(this, payload);
    this.changeState(this.states.outOfService, payload);
  }
  repair() {
    if (typeof this.state.repair === 'function') return this.state.repair(this);
    this.changeState(this.states.available);
  }

  getStatus() {
    return {
      id: this.id,
      state: this.state.toString(),
      meta: this.meta,
    };
  }
}
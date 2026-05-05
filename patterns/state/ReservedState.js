import IState from './IState.js';
export default class ReservedState extends IState {
  enter(context, payload) {
    context.meta = { reservedInfo: payload || null, occupant: null, reservedAt: Date.now() };
  }
  exit(context) { /* limpiar timers si hay */ }
  occupy(context, payload) {

    context.changeState(context.states.occupied, payload || context.meta.reservedInfo);
  }
  cancelReservation(context) {
    context.changeState(context.states.available);
  }
  outOfService(context) {
    context.changeState(context.states.outOfService);
  }
  toString() { return 'Reserved'; }
}
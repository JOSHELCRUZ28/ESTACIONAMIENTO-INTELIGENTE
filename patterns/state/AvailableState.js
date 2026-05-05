import IState from './IState.js';
export default class AvailableState extends IState {
  enter(context) {
    context.meta = { reservedInfo: null, occupant: null };
  }
  exit(context) { }
  reserve(context, payload) {
    context.changeState(context.states.reserved, payload);
  }
  occupy(context, payload) {
    context.changeState(context.states.occupied, payload);
  }
  outOfService(context, payload) {
    context.changeState(context.states.outOfService, payload);
  }
  toString() { return 'Available'; }
}
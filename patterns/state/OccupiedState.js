import IState from './IState.js';
export default class OccupiedState extends IState {
  enter(context, payload) {
    context.meta = { occupant: payload || null, reservedInfo: null, since: Date.now() };
  }
  exit(context) { /* podría registrar tiempo */ }
  release(context) {
    context.changeState(context.states.available);
  }
  toString() { return 'Occupied'; }
}
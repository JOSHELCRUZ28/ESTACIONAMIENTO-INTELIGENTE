
export default class IState {
  enter(context, payload) { throw new Error('implement enter'); }
  exit(context) { throw new Error('implement exit'); }
  toString() { throw new Error('implement toString'); }
}

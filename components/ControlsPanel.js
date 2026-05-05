
export default class ControlsPanel {
  constructor(store) {
    this.store = store;
  }
  reserve(id, info) { this.store.reserveSpot(id, info); }
  occupy(id, info) { this.store.occupySpot(id, info); }
  release(id) { this.store.releaseSpot(id); }
  outOfService(id, info) { this.store.setOutOfService(id, info); }
  repair(id) { this.store.repairSpot(id); }
}

export default class ParkingSpotView {
  constructor(spot) {
    this.spot = spot;
  }
  render() {
    const s = this.spot.getStatus();
    console.log(`Plaza ${s.id} — Estado: ${s.state}`, s.meta);
  }
}


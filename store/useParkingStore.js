import ParkingSpot from '../patterns/state/ParkingSpot.js';


export default function useParkingStore() {
  const spots = new Map();

  return {
    createSpot(id) {
      if (spots.has(id)) throw new Error('Spot exists');
      const ps = new ParkingSpot(id);
      spots.set(id, ps);
      return ps;
    },
    getSpot(id) {
      return spots.get(id) || null;
    },
    listSpots() {
      return Array.from(spots.values()).map(s => s.getStatus());
    },
    reserveSpot(id, info) {
      const s = this.getSpot(id);
      if (!s) throw new Error('Spot not found');
      s.reserve(info);
    },
    occupySpot(id, info) {
      const s = this.getSpot(id);
      if (!s) throw new Error('Spot not found');
      s.occupy(info);
    },
    releaseSpot(id) {
      const s = this.getSpot(id);
      if (!s) throw new Error('Spot not found');
      s.release();
    },
    cancelReservation(id) {
      const s = this.getSpot(id);
      if (!s) throw new Error('Spot not found');
      s.cancelReservation();
    },
    setOutOfService(id, info) {
      const s = this.getSpot(id);
      if (!s) throw new Error('Spot not found');
      s.outOfService(info);
    },
    repairSpot(id) {
      const s = this.getSpot(id);
      if (!s) throw new Error('Spot not found');
      s.repair();
    },

    renderConsole() {
      console.table(this.listSpots());
    }
  };
}
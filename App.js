import React, { useEffect, useState } from 'react'; 
import { View } from 'react-native';

import ParkingLotView from './components/ParkingLotView';
import useParkingStore from './store/useParkingStore';

export default function App() {

  const [store] = useState(useParkingStore());

  // 👇 estado para forzar render
  const [, setRefresh] = useState(0);

  useEffect(() => {
    store.createSpot('A1');
    store.createSpot('A2');
    store.createSpot('A3');
    store.createSpot('A4');
    store.createSpot('A5');
    store.createSpot('B1');
    store.createSpot('B2');
    store.createSpot('B3');
    store.createSpot('B4');
    store.createSpot('B5');

    // 🔄 FORZAR RENDER
    setRefresh(n => n + 1);

  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ParkingLotView store={store} />
    </View>
    
  );
}
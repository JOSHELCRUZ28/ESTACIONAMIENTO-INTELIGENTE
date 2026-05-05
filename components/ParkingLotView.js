import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
export default function ParkingLotView({ store }) {


  const [, setRefresh] = useState(0);
  const refresh = () => setRefresh(n => n + 1);


  const spots = store.listSpots();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🚗 Parking Lot</Text>

      {spots.map((s) => (
        <View key={s.id} style={styles.card}>
          
          <Text style={styles.id}>ESPACIO: {s.id}</Text>
          <Text style={styles.state}>Estado: {s.state}</Text>

        
          <View style={styles.buttons}>

            <TouchableOpacity
              onPress={() => {
                store.reserveSpot(s.id, { user: 'Juan' });
                refresh();
              }}>
              <Text style={styles.btn}>Reservar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                store.occupySpot(s.id, { vehicle: 'XYZ-123' });
                refresh();
              }}>
              <Text style={styles.btn}>Ocupar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                store.releaseSpot(s.id);
                refresh();
              }}>
              <Text style={styles.btn}>Liberar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                store.cancelReservation(s.id);
                refresh();
              }}>
              <Text style={styles.btn}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                store.setOutOfService(s.id);
                refresh();
              }}>
              <Text style={styles.btn}>Fuera Serv.</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                store.repairSpot(s.id);
                refresh();
              }}>
              <Text style={styles.btn}>Reparar</Text>
            </TouchableOpacity>

          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#eeeeee',
    marginBottom: 15,
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  state: {
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btn: {
    backgroundColor: '#333',
    color: 'white',
    padding: 6,
    borderRadius: 6,
    marginRight: 5,
    marginTop: 5,
  },
});
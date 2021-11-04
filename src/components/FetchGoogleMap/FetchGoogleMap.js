function getParking() {
  axios
    .get(
      "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes-disponibilites&q=&rows=20&facet=grp_nom&facet=grp_statut"
    )
    .then((response) => {
      const myData = response.data;
      setParking(myData.records);
      for (let i = 0; i < myData.records.length; i += 1) {
        setParkingCoordinateLat(
          parkingCoordinateLat.push(myData.records[i].fields.location)
        );
        setParkingCoordinateLng(
          parkingCoordinateLng.push(myData.records[i].fields.location)
        );
        /*  parkingCoordinateLng.push(myData.records[i].fields.location);
        parkingCoordinateLat.push(myData.records[i].fields.location); */
      }
      console.log(parkingCoordinateLng, parkingCoordinateLat);
    });
}

useEffect(() => getParking(), []);
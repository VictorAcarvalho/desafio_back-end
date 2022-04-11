class MathService {
    getClosestPoints(addressGeoPoint) {
      const resultPoints = addressGeoPoint.map((addressObj, index) => {
        if (
          addressGeoPoint[index + 1] != null ||
          addressGeoPoint[index + 1] != undefined
        ) {
          const firstAddress = addressGeoPoint[0];
          const nextAddress = addressGeoPoint[index + 1];
          const eucledianDistance = this.calculateEucledianDistance(
            firstAddress,
            nextAddress
          );
  
          return eucledianDistance;
        }
      });
  
      const finalResult = resultPoints.filter(
        (addressComparison) => addressComparison != undefined
      );
  
      return finalResult;
    }
    calculateEucledianDistance(firstAddress, nextAddress) {
      const pi = 3.14;
      const earthRadius = 6371;
      const firstLat = firstAddress.location.lat;
      const secondLat = nextAddress.location.lat;
      const firstLng = firstAddress.location.lng;
      const secondLng = nextAddress.location.lng;
      const deltaLat = (firstLat * pi) / 180 - (secondLat * pi) / 180;
  
      const deltaLong = (firstLng * pi) / 180 - (secondLng * pi) / 180;
  
      const abscissPairs = deltaLong * Math.cos((firstLat + secondLat) / 2);
  
      const pythagorianDistance =
        earthRadius * Math.hypot(abscissPairs, deltaLat);
  
      return {
        origin: firstAddress.address,
        destination: nextAddress.address,
        distance: pythagorianDistance.toFixed(2) + " km",
      };
    }
  };

  export const mathService = new MathService();
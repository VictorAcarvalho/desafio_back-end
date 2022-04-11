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
      const firstLat = firstAddress.location.lat;
      const secondLat = nextAddress.location.lat;
      const firstLng = firstAddress.location.lng;
      const secondLng = nextAddress.location.lng;

      const result = Math.sqrt(((firstLat-secondLat)*(firstLat-secondLat))+((firstLng-secondLng)-(firstLng-secondLng)))

      return {
        origin: firstAddress.address,
        destination: nextAddress.address,
        distance: result.toFixed(4),
      };
    }
  };

  export const mathService = new MathService();
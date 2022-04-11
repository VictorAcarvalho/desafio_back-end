import axios from 'axios';

class GoogleMapsIntegration {
    async getMapAddress(address) {
      const mapsResponse = await this.getMapsResponse(address);
      const formattedAddress = this.getFormattedAddress(mapsResponse);
      const geoPoints = this.getGeopoint(mapsResponse);
  
      return {
        address: formattedAddress,
        location: geoPoints,
      };
    }
  
    getGeopoint(mapResponse) {
      return mapResponse.geometry.location;
    }
  
    getFormattedAddress(mapResponse) {
      return mapResponse.formatted_address;
    }
  
    async getMapsResponse(address) {
      try {
        const url = new URL(
          `${process.env.GEO_MAPS}?address=${address}&key=${process.env.GEO_KEY}`
        );
        const datapoints = await axios.get(url.toString());
        return datapoints.data.results[0];
      } catch (error) {
        console.error(`Erro ao acessar a API do Google Maps: ${error.message}`);
      }
    }
  }

  export const googleMapsIntegration = new GoogleMapsIntegration();
import { googleMapsIntegration } from '../integrations/geoLocationAPI';

class AddressServices {
    async getAddress(addresses) {
      let mappedAddresses = [];
      await Promise.all(
        addresses.map(async (address) => {
          const mapAddress = await googleMapsIntegration.getMapAddress(address);
          mappedAddresses.push(mapAddress);
        })
      );
  
      return mappedAddresses;
    }
  };

export const addressServices =  new AddressServices();
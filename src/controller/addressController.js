import { mathService } from '../services/mathServices.js';
import { addressServices } from '../services/addressServices.js';
import { distanceSort } from '../utils/distanceSort.js';

class AddressController {
    async geopoint(request, response) {
      try {
        const { address } = request.query;
        const addresses = await addressServices.getAddress(address);
        const calculatedAddresses = mathService.getClosestPoints(addresses);
        const sortAddress= distanceSort(calculatedAddresses);
        return response.status(200).json(sortAddress);
      } catch (error) {
        return response.status(500).json({ message: `Error:${error.message}` });
      }
    }
  }
  export const addressController = new AddressController();
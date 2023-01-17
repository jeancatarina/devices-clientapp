## Package/Common/API

This package contains the functions that interact with the backend server and handle the API calls for the application. 

### API functions
This package contains the following API functions:
- `deleteDevice(id: string)`: Deletes a specific device by id from the server.
- `getDevices()`: Retrieves a list of all devices from the server.
- `getOneDevice(id: string)`: Retrieves a specific device by id from the server.
- `postDevice(payload: Omit<Device, 'id'>)`: creates a new device on the server.
- `putDevice(payload: Device)`: Updates an existing device on the server.

### Usage
You can import these functions in your code and use them to interact with the backend server using `axiosCall` from `../../services/axiosCall` .

For example, to get a list of all devices:

```
import { getDevices } from '@devices/api/modules/devices/getDevices'

const response = await getDevices()

return response.data
```

You can also use these functions in conjunction with the `redux-thunk` library to handle the API calls within your application's state management.

**Note**: As mentioned before, the backend application provided does not have data persistence implemented. So, any change in the data (creation, update or delete) will be lost if you kill the server. A new start will have the data in the initial state.

## Adding new functions
If you need to add a new function to interact with the server, you can add it to this package and import it in your code. It is recommended to follow the naming convention and parameters used by the existing functions for consistency.

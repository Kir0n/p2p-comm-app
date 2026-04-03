# P2P Communication Application

This project is a simple peer-to-peer communication application built with TypeScript. It allows two machines to communicate with each other over a network using a client-server architecture.

## Project Structure

```
p2p-comm-app
├── src
│   ├── client.ts        # Client-side logic for establishing a connection
│   ├── server.ts        # Server-side logic for handling incoming connections
│   ├── utils.ts         # Utility functions for formatting messages
│   └── types
│       └── index.ts     # Type definitions for messages and connections
├── package.json          # NPM configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Kir0n/p2p-comm-app.git
   cd p2p-comm-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

### Starting the Server

To start the server, run the following command:
```
npm run start-server
```

### Connecting the Client

To connect the client to the server, run the following command in a separate terminal:
```
npm run start-client
```

### Sending Messages

Once both the server and client are running, you can send messages from the client to the server. The server will handle incoming messages and can respond accordingly.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
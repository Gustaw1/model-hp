import mongoose from "mongoose";

const { MONGODB_URI } = process.env;
interface Connection {
    connectionStates: ConnectionStates;
}

enum ConnectionStates {
    disconnected = 0,
    connected = 1,
    connecting = 2,
    disconnecting = 3,
    uninitialized = 99,
}

const connection: Connection = { connectionStates: ConnectionStates.uninitialized };

async function connect() {

    if (!MONGODB_URI) {
        throw new Error("Invalid environment variable: MONGODB_URI");
    }

    try {
        const db = await mongoose.connect(MONGODB_URI);
        connection.connectionStates = db.connections[0].readyState;

        if (connection.connectionStates === ConnectionStates.connected) {
            return Promise.resolve(true);
        }

        if (mongoose.connections.length > 0) {
            connection.connectionStates = mongoose.connections[0].readyState;
            if (connection.connectionStates === ConnectionStates.connected) {
                return Promise.resolve(true);
            }
            await mongoose.disconnect();
        }
        // const db = await mongoose.connect(MONGODB_URI);
        // connection.connectionStates = db.connections[0].readyState;

    } catch (error) {
        return handleError(error);
    }
}

async function disconnect() {
    if (connection.connectionStates) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.connectionStates = ConnectionStates.disconnected;
        }
    }
}


function handleError(error: unknown) {
    // throw new Error("Błąd połączenia z MongoDb.");
    return Promise.reject(error);
}

const db = { connect, disconnect };
export default db;

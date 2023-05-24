'use client'

export interface RpcError {
    error: Error;
    reset: () => void;
}

const error = (error: RpcError) => {
    return (
        <div>
            {error.error.message}
        </div>);
};

export default error;
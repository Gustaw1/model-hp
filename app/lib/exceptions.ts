export class AuthRequiredError extends Error {
    constructor(message = 'Auth is required to access this page.') {
        super(message);
        this.name = 'AuthRequiredError'
    }
}

export class RpcError extends Error {
    private readonly code: number;

    constructor(message: string, code: number) {
        super(message);
        this.name = 'RpcError'
        this.code = code;
    }
}
interface RequestBody {
    username: string;
    password: string;
};

export async function POST(req: Request) {
    const body: RequestBody = await req.json();

}
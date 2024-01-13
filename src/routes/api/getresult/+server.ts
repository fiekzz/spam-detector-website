import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {

    const payload = await request.json();

    const API_URL = "https://detectspam.fiekzz.com/api/v1/getResult/"

    const res = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const body = await res.json();

    return json(body);
};

import { NextResponse } from "next/server";
import { getDog } from "@/lib/api";

export async function GET() {
    try {
        const dog = await getDog();
        return NextResponse.json(dog);
    } catch (error) {
        console.error("Error fetching dog:", error);
        return NextResponse.json({ error: "Failed to fetch dog" }, { status: 500 });
    }
}
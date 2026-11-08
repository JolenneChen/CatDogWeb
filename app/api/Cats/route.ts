import { NextResponse } from "next/server";
import { getCat } from "@/lib/api";

export async function GET() {
    try {
        const cat = await getCat();
        return NextResponse.json(cat);
    } catch (error) {
        console.error("Error fetching cat:", error);
        return NextResponse.json({ error: "Failed to fetch cat" }, { status: 500 });
    }
}
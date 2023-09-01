import { NextResponse } from "next/server";
import mysql from "mysql2/promise"

export async function POST(request) {
  const body = await request.json()

  try {
    const connection = await mysql.createConnection("mysql://nextjs:nextjs@localhost:3306/next13")
    await connection.query("INSERT INTO Subscribers (email) VALUES (?)", [body.email])
    connection.end()
    return NextResponse.json({ created: true })
  } catch (error) {
    return NextResponse.json({ created: false, error: error.message })
  }
}
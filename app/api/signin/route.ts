// route fxn
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    // to check username and password in DB to return jwt
     const body = await req.json();

// creating token
     const username = body.username;
     const password = body.password;
     // check in db


    const userId = 1;
    const token = jwt.sign({
     userId

    }, "SECRET");

    // returning token to user
    return NextResponse.json({
        token
    })
}


 /* app.post("/signin", (req, res) => {
    const body = req.body;
    const username = body.username;
    const password = body.password;
    const token = jwt.sign({
    userId
      }, "SECRET");
      res.json({
        token
      })
       
}) */
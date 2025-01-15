import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
   /*  const headers = req.headers;
    const authorizationHeader = headers["authorization"];
    const decoded = jwt.decode(authorizationHeader, "SECRET");
    const userId = decoded.userId;  */


// hit DB to get users profile picture

return NextResponse.json({
    avatarUrl: "http://images.google.com/cat.png"
})

}
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req, ev) {

    console.log('reaching here');
    //NextResponse.redirect('')



    return NextResponse.redirect(`googlechromes://www.kohbee.com`);

}
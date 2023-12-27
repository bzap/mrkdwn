const fs = require("node:fs");

export async function POST(req, request) {
    const body = await req.json();
    // file name goes here eventually
    fs.writeFile("./public/README.md", body, function (err) {
        if (err) throw err;
        console.log("File write successful.");
    });

    return new Response("OK");
}

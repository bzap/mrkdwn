const fs = require("node:fs");

export async function POST(req, request) {
    // file name goes here eventually
    fs.unlink("./public/README.md", (err) => {
        if (err) throw err;
        console.log("File was deleted.");
    });

    return new Response("OK");
}

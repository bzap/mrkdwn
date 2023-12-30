const fs = require("node:fs");

export async function POST(req, request) {
    const body = await req.json();
    console.log(body);
    // file name goes here eventually
    fs.writeFile(`${body.fileName}.md`, body.markdownData, function (err) {
        if (err) throw err;
        console.log("File write successful.");
    });

    return new Response("OK");
}

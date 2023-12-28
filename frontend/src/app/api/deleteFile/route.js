const fs = require("node:fs");

export async function POST(req, request) {
    const body = await req.json();
    fs.unlink(`./public/${body.fileName}.md`, (err) => {
        if (err) throw err;
        console.log("File was deleted.");
    });

    return new Response("OK");
}

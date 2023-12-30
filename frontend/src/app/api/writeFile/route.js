const fs = require("node:fs");

export async function POST(req, request) {
    const body = await req.json();
    console.log(body);
    const USERS_FILE_PATH = join("/tmp", `${param}.md`);
    // file name goes here eventually
    fs.writeFile(USERS_FILE_PATH, body.markdownData, function (err) {
        if (err) throw err;
        console.log("File write successful.");
    });

    return new Response("OK");
}

const fs = require("node:fs");

export async function GET(req, response) {
    const fileStream = fs.createReadStream("./public/README.md");
    return new Response(fileStream, {
        headers: {
            "content-disposition": `attachment; filename=README.md`,
            "content-type": "text/markdown",
        },
    });
}

const fs = require("node:fs");

export async function GET(req, response) {
    const { searchParams } = new URL(req.url);
    const param = searchParams.get("fileName");
    const fileStream = fs.createReadStream(`${param}.md`);
    console.log(fileStream);
    return new Response(fileStream, {
        headers: {
            "content-disposition": `attachment; filename=${param}.md`,
            "content-type": "text/markdown",
        },
    });
}

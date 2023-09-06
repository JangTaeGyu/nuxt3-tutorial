export default defineEventHandler((req, res) => {
    console.log(req.headers);
    return ["iphone-12", "iphone-12-pro", "iphone-13", "iphone-13-pro"];
});
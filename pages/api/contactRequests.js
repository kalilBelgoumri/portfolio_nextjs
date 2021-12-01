export default function handler(req, res) {
    if (req.method === "POST") {
        console.log(req.body);
        res.status(200).json({ name: "kalil BELGOUMRI" });
    } else {
        res.status(405).send("Game Over");
    }
}
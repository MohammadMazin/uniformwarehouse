const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const product = {
  id: 1,
  categories: ["Cats", "Clothing", "Pets"],
  title: "Sleek Cat Dress",
  price: "$29.99",
  description:
    "This is a great product for your cat to keep it warm during the winter season. Our clothes are made with the silkiest warm. Guaranteed to keep your furball purring through the day",
  images: [
    "https://img.drz.lazcdn.com/static/pk/p/281810d4a140fb0ca766e9bc7b0727ad.jpg_960x960q80.jpg_.webp",
    "https://i5.walmartimages.com/asr/84d4cafe-8bbc-4e28-a307-90d4f7124585.a1ee99719fb87243c125810628587bd7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "https://m.media-amazon.com/images/I/619HhG5MELL._AC_UF1000,1000_QL80_.jpg",
  ],
  stars: 4,
};
app.get("/api/products", (req, res) => {
  res.json(product);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Массив для хранения товаров (временное решение)
let products = [
  {
    id: "1",
    title: "Авторский нож",
    description: "11 см, черный граб",
    cost: "10000"
  }
];

// GET-запрос
app.get("/api/data", (req, res) => {
  res.json(products);
});

// POST-запрос для добавления товара
app.post("/api/products", (req, res) => {
  const { title, description, price, image } = req.body;
  
  if (!title || !description || !price) {
    return res.status(400).json({ error: "Необходимо заполнить все поля" });
  }

  const newProduct = {
    id: Date.now().toString(),
    title,
    description,
    cost: price,
    image: image || ""
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
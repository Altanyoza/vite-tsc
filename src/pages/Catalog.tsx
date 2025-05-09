import React, { PureComponent } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Text from '../components/Text'
import ProductCard from '../components/ProductCard'
import { Helmet } from 'react-helmet';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image?: string;
}

interface CatalogState {
  products: Product[];
  isModalOpen: boolean;
  newProduct: {
    title: string;
    description: string;
    price: string;
    image?: string;
  };
  isLoading: boolean;
  error: string | null;
}

class Catalog extends PureComponent<{}, CatalogState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      products: [],
      isModalOpen: false,
      newProduct: {
        title: '',
        description: '',
        price: '',
        image: ''
      },
      isLoading: true,
      error: null
    }
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts = async () => {
    try {
      this.setState({ isLoading: true, error: null })
      const response = await fetch('http://localhost:5000/api/data')
      
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`)
      }
      
      const data = await response.json()
      
      // Преобразуем данные сервера в формат продукта
      const serverProduct: Product = {
        id: '1', 
        title: data.title,
        description: data.descriptipon, 
        price: data.cost,
        image: '/images/one.jpg' // Добавляем изображение по умолчанию
      }
      
      this.setState({
        products: [serverProduct, ...this.state.products], // Добавляем к существующим продуктам
        isLoading: false
      })
    } catch (error) {
      this.setState({
        error: 'Не удалось загрузить данные с сервера',
        isLoading: false
      })
      console.error('Ошибка при загрузке данных:', error)
    }
  }

  openModal = () => this.setState({ isModalOpen: true })
  closeModal = () => this.setState({ isModalOpen: false, newProduct: { title: '', description: '', price: '' } })

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      newProduct: {
        ...prevState.newProduct,
        [name]: value
      }
    }))
  }

  addProduct = async () => {
    const { newProduct } = this.state;

    console.log("Отправляемые данные:", newProduct);
  
    if (!newProduct.title || !newProduct.description || !newProduct.price) {
      this.setState({ error: "Заполните все обязательные поля" });
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newProduct.title,
          description: newProduct.description,
          price: newProduct.price,
          image: newProduct.image
        }),
      });
  
      if (!response.ok) {
        throw new Error("Ошибка при добавлении товара");
      }
  
      const data = await response.json();
      
      // Обновляем состояние, добавляя новый товар
      this.setState(prevState => ({
        products: [...prevState.products, data],
        isModalOpen: false,
        newProduct: { title: "", description: "", price: "", image: "" },
        error: null
      }));
  
    } catch (error) {
      console.error("Ошибка:", error);
      this.setState({ 
  error: error instanceof Error ? error.message : String(error) 
});
    }
  };

  render() {
    const { products, isModalOpen, newProduct, isLoading, error } = this.state

    return (
      <>
       <Helmet>
          <title>Каталог товаров | Якутские ножи</title>
          <meta name="description" content="Каталог авторских якутских ножей ручной работы. Выберите нож по характеристикам и цене." />
          <meta name="keywords" content="каталог ножей, якутские ножи купить, ножи ручной работы, охотничьи ножи" />
        </Helmet>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <Text size="xl" bold>Каталог товаров</Text>
          <Button 
            title="Добавить товар" 
            color="primary" 
            onClick={this.openModal}
          />
        </div>
        {/* Состояние загрузки */}
        {isLoading && <Text>Загрузка данных...</Text>}

        {/* Ошибка */}
        {error && <Text className="text-red-500">{error}</Text>}

        {/* Модальное окно добавления товара */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <Text size="lg" bold className="mb-4">Добавить новый товар</Text>
              
              <div className="space-y-4">
                <div>
                  <Text className="block mb-2">Название</Text>
                  <Input
                    name="title"
                    value={newProduct.title}
                    onChange={this.handleInputChange}
                    placeholder="Название товара"
                  />
                </div>
                
                <div>
                  <Text className="block mb-2">Описание</Text>
                  <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={this.handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                    placeholder="Описание товара"
                  />
                </div>
                
                <div>
                  <Text className="block mb-2">Цена (₽)</Text>
                  <Input
                    name="price"
                    type="number"
                    value={newProduct.price}
                    onChange={this.handleInputChange}
                    placeholder="Цена"
                  />
                </div>
              </div>
              <div>
                <Text className="block mb-2">Изображение (URL)</Text>
                <Input
                name="image"
                value={newProduct.image}
                onChange={this.handleInputChange}
                placeholder="URL изображения товара"
                />
                </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <Button 
                  title="Отмена" 
                  color="secondary" 
                  onClick={this.closeModal}
                />
                <Button 
                  title="Добавить" 
                  color="primary" 
                  onClick={this.addProduct}
                />
              </div>
            </div>
          </div>
        )}

        {/* Список товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
      </>
    )
  }
}

export default Catalog
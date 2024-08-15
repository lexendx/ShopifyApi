import React, { useEffect, useState } from 'react';
import AddToCart from '../Component/AddToCart';
function Shop() {
  const [allData, setAllData] = useState([]);
  const [category, setCategory] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

useEffect (()=>{
  localStorage.setItem("cartItems",JSON.stringify(cartItems));

},[cartItems]);


  const fetchAllCategory = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      console.log("Categories data:", data); // Debugging line
      setCategory(data);
    } catch (err) {
      setError("Failed to fetch categories.");
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      console.log("Products data:", data); // Debugging line
      setAllData(data);
    } catch (err) {
      setError("Failed to fetch products.");
    } finally {
      setLoadingProducts(false);
    }
  };
console.log(fetchAllProducts);
  useEffect(() => {
    fetchAllProducts();
    fetchAllCategory();
  }, []);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      if (prevItems.includes(product)) {
        return prevItems.filter(item => item !== product);
      } else {
        return [...prevItems, product];
      }
    });
  };

  if (loadingProducts || loadingCategories) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }
  

  return (
    <div className='w-full max-w-screen-lg mx-auto p-5'>
      <div className='bg-blue-100 grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='col-span-2'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {allData.map((product,index) => (
              <div key={index} className='w-full h-auto rounded-xl p-6 border border-black '>
                
                <p className='text-md'>{product.title}</p>
                <img src={product.image} alt={product.title} className='w-full h-auto object-cover' />
                <h1 className='text-lg font-bold'>${product.price}</h1>
                <AddToCart product={product} cartItems={cartItems} handleAddToCart={handleAddToCart} />
              </div>
            ))}
            
          </div>
        </div>
        <div className='border p-5'>
          <h2 className='text-xl font-bold mb-8'>Categories</h2>
          {category.map((item, index) => (
            <div key={index} className = "p-4 border b bg-orange-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop

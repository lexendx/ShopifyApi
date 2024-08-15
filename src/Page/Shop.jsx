import React, { useEffect, useState } from 'react';
import AddToCart from '../Component/AddToCart';
function Shop() {
  const [allData, setAllData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
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
      const existingProduct = prevItems.find(item=>item.id===product.id);
if(existingProduct){
  //update quantity if the product already exists
  return prevItems.map(item=>
    item.id===product.id?{...item,quantity:item.quantity+1}:item
  );
}else{
  // Add new product to cart
  return[...prevItems,{...product,qunatity:1}];


      }
    });
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);  };
    const filteredProducts = selectedCategory
    ? allData.filter((product)=>product.category===selectedCategory)
    : allData;

  if (loadingProducts || loadingCategories) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }
  

  return (
    <div className='w-full flex  max-w-screen-lg mx-auto p-8'>
      <div className='border p-5'>
          <h2 className='text-xl font-bold mb-8'>Categories</h2>
          <button
            onClick={() => setSelectedCategory('')}
            className={`p-4  w-[120px] mb-2 ${selectedCategory === '' ? 'bg-orange-500' : 'bg-orange-300'}`}
          >
            All
          </button>
          {category.map((item, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(item)}
              className={`p-4 w-[120px] mb-2 flex ${selectedCategory === item ? 'bg-orange-500' : 'bg-orange-300'}`}
            >
              {item}
            </button>
          ))}
        </div>
      <div className='bg-blue-100 grid p-12 grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='col-span-2'>
          <div className='grid grid-cols-1 sm:grid-cols-2 w-[700px] lg:grid-cols-3 gap-5 '>
            {filteredProducts.map((product,index) => (
              <div key={index} className= 'w-full h-[500px] space-x-5  rounded-xl p-6 border border-black '>
                
                <div className='text-md mb-8 '>{product.title}</div>
               <div> <img src={product.image} alt={product.title} className='w-[300px] mx-aut h-[200px] object-cover' /></div>
                <h1 className='text-lg font-bold mt-5'>${product.price}</h1>
                <AddToCart product={product} cartItems={cartItems} handleAddToCart={handleAddToCart} />
              </div>
            ))}
            
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Shop;
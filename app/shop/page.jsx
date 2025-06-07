import Navbar from "@/components/navbar"
import Footer from "@/components/footer";

export default function Page() {
  const products = [
    {
      title: "Stylish T-Shirt",
      price: "$25.00",
      image:"https://th.bing.com/th/id/OIP.jriI805tGqSnKbuULcj9hQHaE7?w=278&h=184&c=7&r=0&o=5&pid=1.7"
    },
    {
      title: "Elegant Hoodie",
      price: "$45.00",
      image:"https://th.bing.com/th/id/OIP.Dca06Mhykd6hm2BGuesZ-AHaIY?w=163&h=184&c=7&r=0&o=5&pid=1.7"
    },
    {
      title: "Classic Jacket",
      price: "$60.00",
      image:"https://th.bing.com/th/id/OIP.-qgBWadMVbz0z3lXzmmZCAHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7"
    },
    {
      title: "Cool Cap",
      price: "$15.00",
      image:"https://th.bing.com/th/id/OIP.7awC-tzmD7t4le_YwQ_w9wHaHD?w=192&h=182&c=7&r=0&o=5&pid=1.7"
    },
    {
      title: "Summer Shorts",
      price: "$30.00",
      image:"https://th.bing.com/th/id/OIP.y9kbgqM1_ryO47XWNTuNGAHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7"
    },
    {
      title: "Leather Wallet",
      price: "$35.00",
      image:"https://th.bing.com/th/id/OIP.qHrHLJU-b251T3GjRks61QHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7"
    },
  ];

  const ProductCard = ({ title, price, image }) => (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-blue-600 font-bold text-xl mt-2">{price}</p>
      </div>
    </div>
  );

  return (
    <>
    <Navbar></Navbar>
    <main className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          🛍️ Shop HalcyonAli Utils
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
              />
            ))}
        </div>
      </div>
    </main>
    <Footer></Footer>
            </>
  );
}

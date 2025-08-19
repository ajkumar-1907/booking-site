import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { ShoppingCart } from "@/components/ShoppingCart.";
import { Home, Flower, Star } from "lucide-react";
import heroNails from "@/assets/hero-nails.jpg";
import nailDesign1 from "@/assets/nail-design-1.jpg";
import nailDesign2 from "@/assets/nail-design-2.jpg";
import nailDesign3 from "@/assets/nail-design-3.jpg";
import nailDesign4 from "@/assets/nail-design-4.jpg";
import StorePreloader from "@/components/StorePreloader";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: "Pink & Gold Elegance", price: 699, image: nailDesign1, category: "Classic" },
  { id: 2, name: "Coral Geometric", price: 1099, image: nailDesign2, category: "Modern" },
  { id: 3, name: "Floral Dreams", price: 799, image: nailDesign3, category: "Romantic" },
  { id: 4, name: "Rose Gold Minimalist", price: 799, image: nailDesign4, category: "Minimalist" }
];

const categories = ["All", "Classic", "Modern", "Romantic", "Minimalist"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIcon, setActiveIcon] = useState(0);
  const [indicatorX, setIndicatorX] = useState(0);
  const iconsRef = useRef<HTMLAnchorElement[]>([]);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) { removeItem(id); return; }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const menuItems = [
    { icon: <Home className="w-6 h-6" />, label: "Home", href: "/#home" },
    { icon: <Flower className="w-6 h-6" />, label: "Services", href: "#product" },
    { icon: <Star className="w-6 h-6" />, label: "About", href: "#features" },
  ];

  // Update magic indicator position
  useEffect(() => {
    const icon = iconsRef.current[activeIcon];
    if (icon) {
      const parent = icon.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const iconRect = icon.getBoundingClientRect();
        setIndicatorX(iconRect.left - parentRect.left);
      }
    }
  }, [activeIcon]);

  // Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-soft relative">

      {/* Preloader */}
      <StorePreloader loading={loading} />

      {/* Page content with smooth fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <section id="shop">

          {/* Hero Section */}
          <section className="relative h-[70vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
            <img src={heroNails} alt="Beautiful nail art" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-6 max-w-2xl px-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Style My Tips</h1>
                <p className="text-xl md:text-2xl opacity-90">
                  Premium pin-on nails & stunning designs for every occasion
                </p>
                <Button variant="gradient" size="lg" className="text-lg px-8 transition-all duration-300 ease-in-out">
                  Shop Collection
                </Button>
              </div>
            </div>
          </section>

          {/* Navigation Bar with magic indicator */}
          <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-soft">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary">Style My Tips</h2>
              <div className="flex items-center space-x-4 relative">
                <div className="flex items-center space-x-6 relative">
                  {menuItems.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      onClick={() => setActiveIcon(i)}
                      className="flex flex-col items-center justify-center text-rose-400 hover:text-rose-500 relative"
                      ref={el => iconsRef.current[i] = el!}
                    >
                      <span className={`transition-transform duration-500 ${activeIcon === i ? "z-20 text-white" : "z-10 text-rose-400"}`}>
                        {item.icon}
                      </span>
                    </a>
                  ))}

                  {/* Magic indicator */}
                  <div
                    className="absolute -top-[-6] left-[-35px] w-12 h-12 bg-rose-400 rounded-full transition-transform duration-500 -translate-y-1/2"
                    style={{ transform: `translateX(${indicatorX}px)` }}
                  ></div>
                </div>

                {/* Checkout / Cart */}
                <ShoppingCart items={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="container mx-auto px-6 py-12">

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "gradient" : "soft"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-smooth"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Product Grid */}
            <section id="product">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section className="mt-24 grid md:grid-cols-3 gap-8" id="features">
              <div className="text-center space-y-4 p-6 bg-card/50 rounded-lg shadow-soft">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold">Premium Quality</h3>
                <p className="text-muted-foreground">Professional-grade materials for long-lasting, beautiful results</p>
              </div>
              <div className="text-center space-y-4 p-6 bg-card/50 rounded-lg shadow-soft">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold">Unique Designs</h3>
                <p className="text-muted-foreground">Handcrafted designs created by talented nail artists</p>
              </div>
              <div className="text-center space-y-4 p-6 bg-card/50 rounded-lg shadow-soft">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold">Fast Shipping</h3>
                <p className="text-muted-foreground">Quick and secure delivery to your doorstep</p>
              </div>
            </section>

          </main>

        </section>
      </motion.div>
    </div>
  );
};

export default Shop;

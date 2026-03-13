// ============================================================
// Product data for the pizza e-commerce store.
// Each product has full details: sizes, add-ons, ingredients,
// nutritional info, and review data.
// ============================================================

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface NutritionInfo {
  calories: string;
  fat: string;
  carbs: string;
  protein: string;
  fiber: string;
}

export interface AddOn {
  name: string;
  price: number;
}

export interface SizeVariant {
  label: string;        // "Small" | "Medium" | "Large"
  price: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "pizza" | "fastfood" | "desserts" | "drinks";
  isVeg: boolean;
  price: number;          // base price (smallest size)
  originalPrice?: number; // strikethrough price for deals
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  sizes: SizeVariant[];
  addOns: AddOn[];
  ingredients: string[];
  nutrition: NutritionInfo;
  reviews: Review[];
  averageRating: number;
  isBestSeller: boolean;
  isTrending: boolean;
  isOnOffer: boolean;
}

// --------------- PIZZAS ---------------
const pizzas: Product[] = [
  {
    id: "p1",
    name: "Margherita Classic",
    slug: "margherita-classic",
    category: "pizza",
    isVeg: true,
    price: 8.99,
    image: "/images/pizza-margherita.jpg",
    gallery: ["/images/pizza-margherita.jpg", "/images/pizza-margherita-2.jpg"],
    shortDescription: "Fresh mozzarella, tomato sauce & basil on a crispy thin crust.",
    description: "Our Margherita Classic pays homage to the original Neapolitan masterpiece. Hand-stretched dough baked to golden perfection, topped with San Marzano tomato sauce, creamy fresh mozzarella, and aromatic basil leaves.",
    sizes: [
      { label: "Small", price: 8.99 },
      { label: "Medium", price: 12.99 },
      { label: "Large", price: 16.99 },
    ],
    addOns: [
      { name: "Extra Cheese", price: 1.5 },
      { name: "Olives", price: 1.0 },
      { name: "Jalapeños", price: 1.0 },
      { name: "Mushrooms", price: 1.25 },
    ],
    ingredients: ["Wheat Flour", "Mozzarella Cheese", "Tomato Sauce", "Basil", "Olive Oil", "Salt"],
    nutrition: { calories: "220 kcal", fat: "9g", carbs: "28g", protein: "11g", fiber: "2g" },
    reviews: [
      { name: "Sarah M.", rating: 5, comment: "Best margherita I've ever had! So fresh.", date: "2025-11-10" },
      { name: "James K.", rating: 4, comment: "Classic and delicious. Crust was perfect.", date: "2025-10-22" },
    ],
    averageRating: 4.5,
    isBestSeller: true,
    isTrending: true,
    isOnOffer: false,
  },
  {
    id: "p2",
    name: "Pepperoni Feast",
    slug: "pepperoni-feast",
    category: "pizza",
    isVeg: false,
    price: 10.99,
    image: "/images/pizza-pepperoni.jpg",
    gallery: ["/images/pizza-pepperoni.jpg", "/images/pizza-pepperoni-2.jpg"],
    shortDescription: "Loaded with double pepperoni, mozzarella & tangy marinara.",
    description: "The Pepperoni Feast is the ultimate indulgence for meat lovers. Double layers of premium pepperoni slices over a bed of melted mozzarella and our signature marinara sauce.",
    sizes: [
      { label: "Small", price: 10.99 },
      { label: "Medium", price: 14.99 },
      { label: "Large", price: 18.99 },
    ],
    addOns: [
      { name: "Extra Cheese", price: 1.5 },
      { name: "Bacon Bits", price: 2.0 },
      { name: "Hot Honey", price: 1.5 },
    ],
    ingredients: ["Wheat Flour", "Pepperoni", "Mozzarella Cheese", "Marinara Sauce", "Oregano"],
    nutrition: { calories: "310 kcal", fat: "14g", carbs: "30g", protein: "15g", fiber: "2g" },
    reviews: [
      { name: "Mike R.", rating: 5, comment: "Pepperoni heaven! Crispy and loaded.", date: "2025-12-01" },
      { name: "Lisa T.", rating: 5, comment: "My go-to pizza every weekend.", date: "2025-11-15" },
    ],
    averageRating: 5.0,
    isBestSeller: true,
    isTrending: false,
    isOnOffer: false,
  },
  {
    id: "p3",
    name: "BBQ Chicken Supreme",
    slug: "bbq-chicken-supreme",
    category: "pizza",
    isVeg: false,
    price: 12.99,
    image: "/images/pizza-bbq-chicken.jpg",
    gallery: ["/images/pizza-bbq-chicken.jpg"],
    shortDescription: "Smoky BBQ sauce, grilled chicken, red onions & cilantro.",
    description: "Tender grilled chicken breast, smoky barbecue sauce, caramelized red onions, and a sprinkle of fresh cilantro create a bold flavor profile you won't forget.",
    sizes: [
      { label: "Small", price: 12.99 },
      { label: "Medium", price: 16.99 },
      { label: "Large", price: 20.99 },
    ],
    addOns: [
      { name: "Extra Cheese", price: 1.5 },
      { name: "Bacon Bits", price: 2.0 },
      { name: "Pineapple", price: 1.0 },
    ],
    ingredients: ["Wheat Flour", "Grilled Chicken", "BBQ Sauce", "Mozzarella", "Red Onion", "Cilantro"],
    nutrition: { calories: "290 kcal", fat: "11g", carbs: "32g", protein: "18g", fiber: "2g" },
    reviews: [
      { name: "David L.", rating: 4, comment: "Smoky and delicious! Great portion.", date: "2025-10-05" },
    ],
    averageRating: 4.0,
    isBestSeller: false,
    isTrending: true,
    isOnOffer: true,
  },
  {
    id: "p4",
    name: "Veggie Garden",
    slug: "veggie-garden",
    category: "pizza",
    isVeg: true,
    price: 9.99,
    image: "/images/pizza-veggie.jpg",
    gallery: ["/images/pizza-veggie.jpg"],
    shortDescription: "Bell peppers, mushrooms, olives, tomatoes & onions.",
    description: "A garden-fresh explosion of flavors! Crisp bell peppers, earthy mushrooms, briny olives, ripe tomatoes, and caramelized onions over our signature sauce and cheese blend.",
    sizes: [
      { label: "Small", price: 9.99 },
      { label: "Medium", price: 13.99 },
      { label: "Large", price: 17.99 },
    ],
    addOns: [
      { name: "Extra Cheese", price: 1.5 },
      { name: "Jalapeños", price: 1.0 },
      { name: "Corn", price: 0.75 },
    ],
    ingredients: ["Wheat Flour", "Bell Peppers", "Mushrooms", "Olives", "Tomatoes", "Onions", "Mozzarella"],
    nutrition: { calories: "200 kcal", fat: "7g", carbs: "30g", protein: "9g", fiber: "4g" },
    reviews: [
      { name: "Anna P.", rating: 5, comment: "So fresh and tasty! Great for vegetarians.", date: "2025-09-20" },
    ],
    averageRating: 5.0,
    isBestSeller: false,
    isTrending: false,
    isOnOffer: false,
  },
  {
    id: "p5",
    name: "Meat Lovers",
    slug: "meat-lovers",
    category: "pizza",
    isVeg: false,
    price: 13.99,
    originalPrice: 16.99,
    image: "/images/pizza-meat-lovers.jpg",
    gallery: ["/images/pizza-meat-lovers.jpg"],
    shortDescription: "Pepperoni, sausage, bacon, ham & ground beef loaded pizza.",
    description: "For the carnivore in you — five premium meats piled high on a hand-tossed crust. Pepperoni, Italian sausage, crispy bacon, smoked ham, and seasoned ground beef.",
    sizes: [
      { label: "Small", price: 13.99 },
      { label: "Medium", price: 17.99 },
      { label: "Large", price: 21.99 },
    ],
    addOns: [
      { name: "Extra Cheese", price: 1.5 },
      { name: "Hot Honey", price: 1.5 },
    ],
    ingredients: ["Wheat Flour", "Pepperoni", "Italian Sausage", "Bacon", "Ham", "Ground Beef", "Mozzarella", "Tomato Sauce"],
    nutrition: { calories: "380 kcal", fat: "20g", carbs: "30g", protein: "22g", fiber: "2g" },
    reviews: [
      { name: "Tom B.", rating: 5, comment: "A meat paradise. Absolutely loaded!", date: "2025-12-10" },
      { name: "Chris W.", rating: 4, comment: "Hearty and filling. Love the deal price.", date: "2025-11-30" },
    ],
    averageRating: 4.5,
    isBestSeller: true,
    isTrending: true,
    isOnOffer: true,
  },
  {
    id: "p6",
    name: "Hawaiian Paradise",
    slug: "hawaiian-paradise",
    category: "pizza",
    isVeg: false,
    price: 10.99,
    image: "/images/pizza-hawaiian.jpg",
    gallery: ["/images/pizza-hawaiian.jpg"],
    shortDescription: "Sweet pineapple chunks, smoked ham & melted mozzarella.",
    description: "A tropical twist on the classic — juicy pineapple chunks paired with smoky ham slices and gooey melted mozzarella over our secret tomato sauce.",
    sizes: [
      { label: "Small", price: 10.99 },
      { label: "Medium", price: 14.99 },
      { label: "Large", price: 18.99 },
    ],
    addOns: [
      { name: "Extra Cheese", price: 1.5 },
      { name: "Jalapeños", price: 1.0 },
    ],
    ingredients: ["Wheat Flour", "Pineapple", "Ham", "Mozzarella", "Tomato Sauce"],
    nutrition: { calories: "260 kcal", fat: "10g", carbs: "34g", protein: "13g", fiber: "2g" },
    reviews: [
      { name: "Emily S.", rating: 4, comment: "Perfect sweet-savory balance!", date: "2025-09-14" },
    ],
    averageRating: 4.0,
    isBestSeller: false,
    isTrending: false,
    isOnOffer: false,
  },
];

// --------------- FAST FOOD ---------------
const fastFood: Product[] = [
  {
    id: "f1",
    name: "Classic Cheeseburger",
    slug: "classic-cheeseburger",
    category: "fastfood",
    isVeg: false,
    price: 7.99,
    image: "/images/burger-classic.jpg",
    gallery: ["/images/burger-classic.jpg"],
    shortDescription: "Juicy beef patty with cheddar, lettuce, tomato & pickles.",
    description: "A quarter-pound beef patty grilled to perfection, topped with melted cheddar cheese, crisp lettuce, ripe tomato, crunchy pickles, and our signature burger sauce.",
    sizes: [
      { label: "Regular", price: 7.99 },
      { label: "Double", price: 11.99 },
    ],
    addOns: [
      { name: "Extra Patty", price: 3.0 },
      { name: "Bacon", price: 1.5 },
      { name: "Onion Rings", price: 1.5 },
    ],
    ingredients: ["Beef Patty", "Cheddar Cheese", "Brioche Bun", "Lettuce", "Tomato", "Pickles", "Sauce"],
    nutrition: { calories: "540 kcal", fat: "28g", carbs: "38g", protein: "30g", fiber: "2g" },
    reviews: [
      { name: "Alex J.", rating: 5, comment: "Best burger in town!", date: "2025-11-05" },
    ],
    averageRating: 5.0,
    isBestSeller: true,
    isTrending: true,
    isOnOffer: false,
  },
  {
    id: "f2",
    name: "Crispy Chicken Wings",
    slug: "crispy-chicken-wings",
    category: "fastfood",
    isVeg: false,
    price: 9.99,
    image: "/images/chicken-wings.jpg",
    gallery: ["/images/chicken-wings.jpg"],
    shortDescription: "Golden fried wings with your choice of sauce.",
    description: "8 pieces of crispy golden chicken wings, seasoned and fried to crunchy perfection. Served with your choice of buffalo, BBQ, or garlic parmesan dipping sauce.",
    sizes: [
      { label: "8 Pcs", price: 9.99 },
      { label: "12 Pcs", price: 13.99 },
      { label: "16 Pcs", price: 17.99 },
    ],
    addOns: [
      { name: "Ranch Dip", price: 0.75 },
      { name: "Blue Cheese Dip", price: 0.75 },
      { name: "Extra Sauce", price: 0.5 },
    ],
    ingredients: ["Chicken Wings", "Flour", "Spices", "Oil", "Sauce"],
    nutrition: { calories: "440 kcal", fat: "24g", carbs: "18g", protein: "35g", fiber: "0g" },
    reviews: [
      { name: "Rachel G.", rating: 4, comment: "Crispy and well-seasoned!", date: "2025-10-15" },
    ],
    averageRating: 4.0,
    isBestSeller: false,
    isTrending: true,
    isOnOffer: false,
  },
  {
    id: "f3",
    name: "Loaded Fries",
    slug: "loaded-fries",
    category: "fastfood",
    isVeg: true,
    price: 5.99,
    image: "/images/loaded-fries.jpg",
    gallery: ["/images/loaded-fries.jpg"],
    shortDescription: "Crispy fries topped with cheese sauce, jalapeños & sour cream.",
    description: "Golden crispy fries smothered in rich nacho cheese sauce, topped with fresh jalapeños, a drizzle of sour cream, and a sprinkle of chives.",
    sizes: [
      { label: "Regular", price: 5.99 },
      { label: "Large", price: 8.99 },
    ],
    addOns: [
      { name: "Bacon Bits", price: 1.5 },
      { name: "Guacamole", price: 2.0 },
    ],
    ingredients: ["Potatoes", "Cheese Sauce", "Jalapeños", "Sour Cream", "Chives", "Oil"],
    nutrition: { calories: "380 kcal", fat: "18g", carbs: "45g", protein: "8g", fiber: "3g" },
    reviews: [
      { name: "Joey F.", rating: 5, comment: "The cheese sauce is incredible!", date: "2025-10-28" },
    ],
    averageRating: 5.0,
    isBestSeller: false,
    isTrending: false,
    isOnOffer: true,
  },
  {
    id: "f4",
    name: "Garlic Bread Sticks",
    slug: "garlic-bread-sticks",
    category: "fastfood",
    isVeg: true,
    price: 4.99,
    image: "/images/garlic-bread.jpg",
    gallery: ["/images/garlic-bread.jpg"],
    shortDescription: "Warm, buttery breadsticks with garlic butter & herbs.",
    description: "Fresh-baked breadsticks brushed with garlic herb butter and sprinkled with parmesan. Served with warm marinara dipping sauce. The perfect side!",
    sizes: [
      { label: "6 Pcs", price: 4.99 },
      { label: "12 Pcs", price: 8.99 },
    ],
    addOns: [
      { name: "Extra Marinara", price: 0.5 },
      { name: "Cheese Dip", price: 1.0 },
    ],
    ingredients: ["Flour", "Butter", "Garlic", "Parmesan", "Herbs", "Marinara Sauce"],
    nutrition: { calories: "280 kcal", fat: "12g", carbs: "36g", protein: "7g", fiber: "1g" },
    reviews: [
      { name: "Nina C.", rating: 4, comment: "Perfect garlic flavor. So warm!", date: "2025-09-30" },
    ],
    averageRating: 4.0,
    isBestSeller: false,
    isTrending: false,
    isOnOffer: false,
  },
];

// --------------- DESSERTS ---------------
const desserts: Product[] = [
  {
    id: "d1",
    name: "Chocolate Lava Cake",
    slug: "chocolate-lava-cake",
    category: "desserts",
    isVeg: true,
    price: 6.99,
    image: "/images/lava-cake.jpg",
    gallery: ["/images/lava-cake.jpg"],
    shortDescription: "Warm cake with a molten chocolate center & vanilla ice cream.",
    description: "Indulge in our signature molten chocolate lava cake. A warm, rich chocolate cake with a gooey center, served with a scoop of creamy vanilla bean ice cream.",
    sizes: [
      { label: "Single", price: 6.99 },
      { label: "Double", price: 11.99 },
    ],
    addOns: [
      { name: "Extra Ice Cream Scoop", price: 2.0 },
      { name: "Whipped Cream", price: 1.0 },
    ],
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Flour", "Sugar", "Vanilla Ice Cream"],
    nutrition: { calories: "450 kcal", fat: "22g", carbs: "58g", protein: "6g", fiber: "3g" },
    reviews: [
      { name: "Sophia L.", rating: 5, comment: "Absolutely divine! The center is perfect.", date: "2025-12-05" },
    ],
    averageRating: 5.0,
    isBestSeller: true,
    isTrending: true,
    isOnOffer: false,
  },
  {
    id: "d2",
    name: "Tiramisu",
    slug: "tiramisu",
    category: "desserts",
    isVeg: true,
    price: 7.49,
    image: "/images/tiramisu.jpg",
    gallery: ["/images/tiramisu.jpg"],
    shortDescription: "Creamy Italian dessert with espresso-soaked ladyfingers.",
    description: "Layers of espresso-soaked ladyfingers and luscious mascarpone cream, dusted with premium cocoa powder. An authentic Italian classic.",
    sizes: [
      { label: "Slice", price: 7.49 },
      { label: "Full Cake", price: 28.99 },
    ],
    addOns: [
      { name: "Coffee Shot", price: 1.5 },
    ],
    ingredients: ["Mascarpone Cheese", "Espresso", "Ladyfingers", "Cocoa Powder", "Eggs", "Sugar"],
    nutrition: { calories: "320 kcal", fat: "16g", carbs: "38g", protein: "8g", fiber: "1g" },
    reviews: [
      { name: "Marco D.", rating: 5, comment: "Authentic taste. Reminds me of Italy!", date: "2025-11-20" },
    ],
    averageRating: 5.0,
    isBestSeller: false,
    isTrending: false,
    isOnOffer: false,
  },
  {
    id: "d3",
    name: "New York Cheesecake",
    slug: "new-york-cheesecake",
    category: "desserts",
    isVeg: true,
    price: 6.49,
    originalPrice: 8.49,
    image: "/images/cheesecake.jpg",
    gallery: ["/images/cheesecake.jpg"],
    shortDescription: "Rich and creamy cheesecake with a graham cracker crust.",
    description: "A silky-smooth New York-style cheesecake on a buttery graham cracker crust, topped with a bright berry compote. Dense, rich, and utterly decadent.",
    sizes: [
      { label: "Slice", price: 6.49 },
      { label: "Full Cake", price: 24.99 },
    ],
    addOns: [
      { name: "Berry Sauce", price: 1.0 },
      { name: "Whipped Cream", price: 1.0 },
    ],
    ingredients: ["Cream Cheese", "Graham Crackers", "Butter", "Sugar", "Eggs", "Vanilla", "Berries"],
    nutrition: { calories: "350 kcal", fat: "18g", carbs: "40g", protein: "7g", fiber: "1g" },
    reviews: [
      { name: "Jessica W.", rating: 4, comment: "Super creamy and rich. Berry topping is great.", date: "2025-10-12" },
    ],
    averageRating: 4.0,
    isBestSeller: false,
    isTrending: false,
    isOnOffer: true,
  },
];

// --------------- DRINKS ---------------
const drinks: Product[] = [
  {
    id: "dr1",
    name: "Fresh Lemonade",
    slug: "fresh-lemonade",
    category: "drinks",
    isVeg: true,
    price: 3.49,
    image: "/images/lemonade.jpg",
    gallery: ["/images/lemonade.jpg"],
    shortDescription: "Freshly squeezed lemonade with mint & ice.",
    description: "Hand-squeezed lemons, a touch of cane sugar, fresh mint leaves, and lots of ice. Refreshing and perfect with any meal.",
    sizes: [
      { label: "Regular", price: 3.49 },
      { label: "Large", price: 4.99 },
    ],
    addOns: [
      { name: "Strawberry Flavor", price: 0.75 },
      { name: "Ginger Shot", price: 0.5 },
    ],
    ingredients: ["Lemon Juice", "Cane Sugar", "Mint", "Water", "Ice"],
    nutrition: { calories: "120 kcal", fat: "0g", carbs: "32g", protein: "0g", fiber: "0g" },
    reviews: [
      { name: "Amy H.", rating: 5, comment: "So refreshing! Not too sweet.", date: "2025-12-15" },
    ],
    averageRating: 5.0,
    isBestSeller: false,
    isTrending: true,
    isOnOffer: false,
  },
  {
    id: "dr2",
    name: "Iced Coffee",
    slug: "iced-coffee",
    category: "drinks",
    isVeg: true,
    price: 4.49,
    image: "/images/iced-coffee.jpg",
    gallery: ["/images/iced-coffee.jpg"],
    shortDescription: "Cold-brewed coffee with milk & a touch of vanilla.",
    description: "Smooth cold-brew coffee over ice, blended with fresh milk and a hint of vanilla syrup. Bold yet refreshing.",
    sizes: [
      { label: "Regular", price: 4.49 },
      { label: "Large", price: 5.99 },
    ],
    addOns: [
      { name: "Caramel Syrup", price: 0.75 },
      { name: "Whipped Cream", price: 1.0 },
      { name: "Extra Shot", price: 1.5 },
    ],
    ingredients: ["Cold-Brew Coffee", "Milk", "Vanilla Syrup", "Ice"],
    nutrition: { calories: "150 kcal", fat: "4g", carbs: "22g", protein: "3g", fiber: "0g" },
    reviews: [
      { name: "Ben T.", rating: 4, comment: "Rich and smooth. Perfect afternoon pick-me-up.", date: "2025-11-01" },
    ],
    averageRating: 4.0,
    isBestSeller: false,
    isTrending: false,
    isOnOffer: false,
  },
  {
    id: "dr3",
    name: "Mango Smoothie",
    slug: "mango-smoothie",
    category: "drinks",
    isVeg: true,
    price: 5.49,
    image: "/images/mango-smoothie.jpg",
    gallery: ["/images/mango-smoothie.jpg"],
    shortDescription: "Thick & creamy mango smoothie with yogurt.",
    description: "Ripe Alphonso mangoes blended with creamy Greek yogurt and a splash of honey. Thick, tropical, and absolutely delicious.",
    sizes: [
      { label: "Regular", price: 5.49 },
      { label: "Large", price: 7.49 },
    ],
    addOns: [
      { name: "Protein Boost", price: 1.5 },
      { name: "Chia Seeds", price: 0.75 },
    ],
    ingredients: ["Mango", "Greek Yogurt", "Honey", "Ice"],
    nutrition: { calories: "210 kcal", fat: "3g", carbs: "42g", protein: "6g", fiber: "2g" },
    reviews: [
      { name: "Priya S.", rating: 5, comment: "Tastes like tropical vacation!", date: "2025-10-08" },
    ],
    averageRating: 5.0,
    isBestSeller: false,
    isTrending: false,
    isOnOffer: false,
  },
  {
    id: "dr4",
    name: "Classic Cola",
    slug: "classic-cola",
    category: "drinks",
    isVeg: true,
    price: 2.49,
    image: "/images/cola.jpg",
    gallery: ["/images/cola.jpg"],
    shortDescription: "Ice-cold classic cola, the perfect pairing.",
    description: "A perfectly chilled classic cola served in a frosty glass with ice. The timeless companion to any pizza or burger.",
    sizes: [
      { label: "Regular", price: 2.49 },
      { label: "Large", price: 3.49 },
    ],
    addOns: [],
    ingredients: ["Carbonated Water", "Sugar", "Caramel Color", "Natural Flavors"],
    nutrition: { calories: "140 kcal", fat: "0g", carbs: "39g", protein: "0g", fiber: "0g" },
    reviews: [
      { name: "Kevin D.", rating: 4, comment: "Hits the spot every time.", date: "2025-12-12" },
    ],
    averageRating: 4.0,
    isBestSeller: false,
    isTrending: false,
    isOnOffer: false,
  },
];

// --------------- COMBINED CATALOG ---------------
export const products: Product[] = [
  ...pizzas,
  ...fastFood,
  ...desserts,
  ...drinks,
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (category: Product["category"]): Product[] =>
  products.filter((p) => p.category === category);

export const getBestSellers = (): Product[] =>
  products.filter((p) => p.isBestSeller);

export const getTrending = (): Product[] =>
  products.filter((p) => p.isTrending);

export const getOffers = (): Product[] =>
  products.filter((p) => p.isOnOffer);

// Testimonials data
export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Amanda Richardson",
    role: "Food Blogger",
    comment: "The best pizza delivery experience I've ever had. The crust was perfectly crispy and the toppings were incredibly fresh. Absolutely divine!",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Robert Chen",
    role: "Regular Customer",
    comment: "I order from here every Friday night. The Pepperoni Feast is our family favorite. Always hot, always delicious, always on time!",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Vegetarian Foodie",
    comment: "Finally a place that takes veggie pizzas seriously! The Veggie Garden pizza is bursting with flavor. Their garlic breadsticks are addictive.",
    rating: 4,
    avatar: "/images/avatar-3.jpg",
  },
  {
    name: "Carlos Martinez",
    role: "Chef & Critic",
    comment: "As a professional chef, I appreciate the quality of ingredients and the care put into every pizza. The BBQ Chicken Supreme is a masterpiece.",
    rating: 5,
    avatar: "/images/avatar-4.jpg",
  },
];

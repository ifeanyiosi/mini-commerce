import { Product } from "../app/types";

export const fetchProducts = async (): Promise<Product[]> => {
  return [
    {
      id: 1,
      slug: "wireless-headphones",
      name: "Wireless Headphones",
      price: 99.99,
      description: "Premium sound quality with noise cancellation",
      image: "/images/headphones.jpg",
    },
    {
      id: 2,
      slug: "smartwatch-pro",
      name: "Smartwatch Pro",
      price: 149.99,
      description: "Track your fitness and notifications in style",
      image: "/images/smartwatch.jpg",
    },
    {
      id: 3,
      slug: "gaming-mouse-x",
      name: "Gaming Mouse X",
      price: 59.99,
      description: "Ergonomic design with customizable RGB lighting",
      image: "/images/mouse.jpg",
    },
    {
      id: 4,
      slug: "mechanical-keyboard",
      name: "Mechanical Keyboard",
      price: 89.99,
      description: "Responsive mechanical keys for typing and gaming",
      image: "/images/keyboard.jpg",
    },
    {
      id: 5,
      slug: "4k-ultra-hd-monitor",
      name: "4K Ultra HD Monitor",
      price: 299.99,
      description: "Stunning 4K display for work and entertainment",
      image: "/images/monitor.jpg",
    },
    {
      id: 6,
      slug: "noise-cancelling-earbuds",
      name: "Noise Cancelling Earbuds",
      price: 79.99,
      description: "Compact and powerful with ambient sound control",
      image: "/images/earbuds.jpg",
    },
    {
      id: 7,
      slug: "portable-bluetooth-speaker",
      name: "Bluetooth Speaker",
      price: 49.99,
      description: "Loud, crisp sound in a compact body",
      image: "/images/speaker.jpg",
    },
    {
      id: 8,
      slug: "smart-home-camera",
      name: "Smart Home Camera",
      price: 129.99,
      description: "Keep your home secure with 24/7 monitoring",
      image: "/images/camera.jpg",
    },
    {
      id: 9,
      slug: "usb-c-hub",
      name: "USB-C Hub",
      price: 39.99,
      description: "Expand your laptop's connectivity with 6-in-1 hub",
      image: "/images/usb-hub.jpg",
    },
    {
      id: 10,
      slug: "laptop-stand",
      name: "Adjustable Laptop Stand",
      price: 34.99,
      description: "Ergonomic and foldable design for any desk",
      image: "/images/laptop-stand.jpg",
    },
  ];
};

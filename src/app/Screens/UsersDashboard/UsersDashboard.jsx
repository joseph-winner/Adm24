import React from 'react'
import DashboardAnalytics from './DashboardAnalytics'
import DashboardProducts from './DashboardProducts'
import product1 from "../../../utils/img/Products/table.webp"

export default function UsersDashboard() {
    const Userproducts = [
        {
            productName: "Bluetooth Headsets",
            productPrice: 809,
            productDesc: "This is an awesome product that you will love. It has many features and benefits that make it stand out.",
            productImg: product1,
        },
        {
            productName: "Wireless Charger",
            productPrice: 299,
            productDesc: "Keep your devices charged wirelessly. Fast charging and sleek design for any home or office.",
            productImg: product1,
        },
        {
            productName: "Smart Watch",
            productPrice: 1499,
            productDesc: "Track your fitness and stay connected. Stylish design with multiple features for everyday use.",
            productImg: product1,
        },
        {
            productName: "Portable Bluetooth Speaker",
            productPrice: 699,
            productDesc: "Enjoy music on the go with powerful sound and long battery life. Perfect for outdoor adventures.",
            productImg: product1,
        },
        {
            productName: "4K Ultra HD TV",
            productPrice: 4999,
            productDesc: "Experience stunning picture quality and vibrant colors. Perfect for movie nights and gaming.",
            productImg: product1,
        },
        {
            productName: "Fitness Tracker",
            productPrice: 499,
            productDesc: "Monitor your health and activity levels with ease. Compact and user-friendly design.",
            productImg: product1,
        },
        {
            productName: "Gaming Mouse",
            productPrice: 1299,
            productDesc: "Precision and speed combined in a sleek design. Perfect for gamers looking to up their game.",
            productImg: product1,
        },
        {
            productName: "Noise-Cancelling Headphones",
            productPrice: 1999,
            productDesc: "Immerse yourself in sound while blocking out distractions. Ideal for travel and focus.",
            productImg: product1,
        },
        {
            productName: "Smart Home Hub",
            productPrice: 1299,
            productDesc: "Control your smart devices from one central location. Easy setup and user-friendly interface.",
            productImg: product1,
        },
        {
            productName: "External SSD",
            productPrice: 2499,
            productDesc: "Fast and portable storage solution for all your files. Durable and lightweight design.",
            productImg: product1,
        },
    ];
    
  return (
    <div>
        <div className="user-dashboard">
            <h3>Overview</h3>
            <div className="user-dashboard-section">
                <div className="user-analy">
                <DashboardAnalytics />
                </div>
                <div className="user-products">
                    <DashboardProducts productsData={Userproducts} />
                </div>
            </div>
        </div>
    </div>
  )
}

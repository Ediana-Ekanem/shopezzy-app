import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Container from "../../container/Container";

const BestDeals = () => {
  const bestDeal = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1718231991/xc0ggofmi3qrn6zlfivr.png",
      title: "Furniture Deals",
      link: "/furniture-deals",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721343053/t5x7zs4zg5vkrdp4drjd.jpg",
      title: "Mobile Gadgets",
      link: "/mobile-gadgets",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721343054/gbluwyg6k7z6xngbswoa.jpg",
      title: "Kitchen Wear Deals",
      link: "/kitchen-wear-deals",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721397852/xnwuw0groiqsl2zm8zlq.webp",
      title: "Children Deals",
      link: "/children-deals",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721397851/r8ps8vwflp6ihok5bvip.webp",
      title: "Babies Deals",
      link: "/babies-deals",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721397852/lrlh9g3moohs4kxmefah.webp",
      title: "Best Offer",
      link: "/best-offer",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721397851/vitaiez2snnvizc9exmj.webp",
      title: "Ladies Deals",
      link: "/ladies-deals",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721397852/p7qvucoxevsdtnc5duvm.webp",
      title: "Digital Deals",
      link: "/digital-deals",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721397852/way7avtqr7u6fpsqwzei.webp",
      title: "Kids Deals",
      link: "/kids-deals",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721397851/kb70ckezh5cuyczs9avo.webp",
      title: "Beauty Deals",
      link: "/beauty-deals",
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721399869/togip8lgeunbsgze2cup.jpg",
      title: "Men Deals",
      link: "/men-deals",
    },
    {
      id: 12,
      url: "https://res.cloudinary.com/dminu0vmy/image/upload/v1721399869/jsyv3ytvci6hhzxbqntz.jpg",
      title: "Groceries Deals",
      link: "/groceries-deals",
    },
  ];

  return (
    <div>
      <Banner />
      <Container>
        <div className="grid md:grid-cols-6 gap-5 my-10 md:my-20">
          {bestDeal.map((item, index) => (
            <Link
              to={item.link}
              key={item.id}
              className={`${
                index >= 6 ? "hidden md:block" : ""
              } transition-all duration-300 rounded shadow hover:transform hover:scale-105 border border-gray-200`}
            >
              <div className="w-full h-44 rounded-t overflow-hidden">
                <img
                  src={`${item.url}`}
                  srcSet={`${item.url} 320w,
                          ${item.url} 480w,
                          ${item.url} 800w`}
                  sizes="(max-width: 600px) 320px,
                         (max-width: 960px) 480px,
                         800px"
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-center p-2 text-sm font-Roboto">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BestDeals;

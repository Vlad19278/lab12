import React from "react";
import CardList from "./components/CardList/CardList";

const cardsData = [
  {
    id: 1,
    title: "Лісова прогулянка",
    description: "Затишний лісовий пейзаж для відпочинку на природі.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Місто вночі",
    description: "Нічне місто з яскравими вогнями та неймовірною атмосферою.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Гірський пейзаж",
    description: "Краєвид величних гір під яскравим сонячним небом.",
    image: "https://images.unsplash.com/photo-1600493304552-106fc07c2883?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Морський берег",
    description: "Спокійний пляж із чистою водою та м'яким піском.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Захід сонця",
    description: "Романтичний захід сонця, що фарбує небо у дивовижні кольори.",
    image: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?w=400&h=300&fit=crop"
  }
];

function App() {
  return (
    <div>
      <h1>Картки з зображеннями</h1>
      <CardList cards={cardsData} />
    </div>
  );
}

export default App;

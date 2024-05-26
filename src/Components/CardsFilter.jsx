import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { scrollTotop } from "../utils";

const CardsFilter = ({ filterTabs, cards, Allcards }) => {
  const [filteredItems, setFilteredItems] = useState(cards);

  const handleFilter = (type) => {
    const filtered = Allcards.filter((item) => item.type === type);
    setFilteredItems(filtered);
  };
  return (
    <>
      <div className="pt-[70px] text-center min-[576px]:block hidden">
        {filterTabs &&
          filterTabs.map((item, i) => (
            <Button
              key={i}
              size="large"
              onClick={() => handleFilter(item.filtered)}
            >
              {item.title}
            </Button>
          ))}
      </div>
      <div className="pt-[70px] text-center max-[576px]:block hidden">
        {filterTabs &&
          filterTabs.map((item, i) => (
            <Button
              key={i}
              size="large"
              onClick={() => handleFilter(item.filtered)}
            >
              {item.subtitle}
            </Button>
          ))}
      </div>
      <div className="mt-[40px]">
        {filteredItems.map((cards, i) => (
          <Link
            key={i}
            to={cards.link}
            onClick={scrollTotop}
            className="block relative mt-[30px]"
          >
            <article
              style={{ backgroundImage: `url(${cards.url})` }}
              className="segment min-[996px]:min-h-[248px] min-[996px]:py-[10px] mt-[30px]"
            >
              <picture className="min-[993px]:cards w-[300px]">
                <img src={cards.image} />
              </picture>
              <div className="min-[996px]:block hidden segment-context ">
                <div className="card-context text-textmd">
                  <h3
                    className={`${
                      cards.color ? "text-colorBlack" : "text-colorGray300  "
                    } font-bold`}
                  >
                    {cards.title}
                  </h3>
                  <p
                    className={`${
                      cards.color ? "text-colorBlack" : "text-colorGray300  "
                    } mt-[15px] leading-[1.4]`}
                  >
                    {cards.description}
                  </p>
                </div>
              </div>
            </article>
            {/* Mobile */}
            <div className="px-[25px] mt-[25px] text-linkmd max-[996px]:block hidden">
              <h3 className="font-bold text-textlg">{cards.title}</h3>
              <p className="mt-[9px] text-colorGray300">{cards.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardsFilter;

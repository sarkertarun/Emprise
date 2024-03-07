import tcd from "../../assets/tcd.png";
import scd from "../../assets/scd.png";
import wild from "../../assets/wild.png";

const TrendingCartData = () => {
  const trendingData = [
    {
      topSrc: tcd,
      topAlt: "image",
      headTxt: "Cultural highlights round trip",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$895.00",
      days: "7 Days",
      rating: "4.7",
      review:"(108)",
      discountTxt: "30%",
    },

    {
      topSrc: scd,
      topAlt: "image",
      headTxt: "Train Tour Skyline ",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$795.00",
      days: "9 Days",
      rating: "4.5",
      review:"(98)",
      discountTxt: "20%",
    },

    {
      topSrc: wild,
      topAlt: "image",
      headTxt: "Forest Wild Life ",
      paraTxt: "Hiking Tour | Stoke on Trent",
      price: "$1995.00",
      days: "15 Days",
      rating: "4.9 ",
      review:"(208)",
      discountTxt: "25%",
    },





   

  ];

  return {
    trendingData,
  };
};

export default TrendingCartData;

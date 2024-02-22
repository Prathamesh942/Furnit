import React, { useReducer } from "react";
import { filterreducer } from "../../Reducers/filterreducer";
import ReactSlider from "react-slider";

const Filter = () => {
  const [filter, dispatch] = useReducer(filterreducer, {
    priceRange: { min: 0, max: 1000 },
    color: "none",
    category: "none",
  });

  console.log(filter);

  function handlePriceChange(min, max) {
    dispatch({ type: "price", min, max });
  }

  function handleColorChange(color) {
    dispatch({ type: "color", color });
  }

  function handleCategory(category) {
    dispatch({ type: "category", category });
  }

  const furnitureColors = [
    { name: "Ivory", hex: "#FFFFF0" },
    { name: "Espresso", hex: "#2A140E" },
    { name: "Charcoal", hex: "#36454F" },
    { name: "Sandstone", hex: "#CDB79E" },
    { name: "Mahogany", hex: "#4E2728" },
    { name: "Navy", hex: "#000080" },
    { name: "Sage", hex: "#9AB973" },
    { name: "Ruby", hex: "#E0115F" },
  ];

  const furnitureCategories = [
    "Chair",
    "Lamp",
    "Table",
    "Sofa",
    "Clock",
    "Pillow",
  ];

  return (
    <div className="flex flex-col gap-10 py-20">
      <div className=" flex flex-col gap-5">
        <h3 className=" font-semibold">Filter By Price</h3>
        <div className="flex gap-2 justify-between">
          <span className="border border-black p-1 w-[100px] flex  justify-center rounded-lg">
            {filter.priceRange.min}
          </span>
          <span>-</span>
          <span className="border border-black p-1 w-[100px] flex  justify-center rounded-lg">
            {filter.priceRange.max}
          </span>
        </div>

        <ReactSlider
          className="mt-2 horizontal-slider flex  items-center"
          trackClassName="example-track  h-[2px] bg-zinc-700"
          defaultValue={[filter.priceRange.min, filter.priceRange.max]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => (
            <div {...props} className=" bg-zinc-800 size-4 rounded-full"></div>
          )}
          pearling
          minDistance={10}
          onChange={(values) =>
            handlePriceChange(values[0] * 10, values[1] * 10)
          }
        />
      </div>
      <div className=" flex flex-col gap-5">
        <h3 className=" font-semibold">Filter By Color</h3>
        <div className="w-[100%] flex flex-wrap justify-between px-5 gap-2">
          {furnitureColors.map((color) => (
            <div className=" flex w-[40%] flex-col cursor-pointer">
              <div
                key={color.name}
                className=" h-[30px]  text-xs p-2 rounded-lg border border-zinc-800"
                style={{ background: color.hex }}
                onClick={() => {
                  handleColorChange(color.hex);
                }}
              ></div>
              <span className=" text-xs">{color.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <h3 className=" font-semibold">Product Categories</h3>
        <ul className="flex  gap-2 flex-wrap">
          {furnitureCategories.map((category) => (
            <li
              key={category}
              onClick={() => {
                handleCategory(category);
              }}
              className={` border cursor-pointer ${
                filter.category == category
                  ? "bg-zinc-900 text-white"
                  : "border-black"
              } p-1 rounded-md text-sm`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;

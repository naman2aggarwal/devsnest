import "./FoodContainer.css";
import AddFood from "./AddFood";
import Food from "./Food";
import { useEffect, useState } from "react";

const FoodContainer = () => {
  const URL = "http://localhost:8000/foodItems";

  const [foodItems, setFoodItems] = useState(null);
  const [reloadFoodList, setReloadFoodList] = useState(null);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setFoodItems(data);
      });
  }, [reloadFoodList]);

  const addFoodItem = (e, foodName, calorie) => {
    e.preventDefault();
    if (foodName === "" || calorie === "") {
      return;
    }
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        foodName: foodName,
        calorie: calorie,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setReloadFoodList([]);
      });
  };

  const deleteFoodItem = (id) => {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setReloadFoodList([]);
      });
  };
  const editFoodItem = (e, id, foodName, calorie) => {
    e.preventDefault();
    if (foodName === "" || calorie === "") {
      return;
    }
    fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        foodName: foodName,
        calorie: calorie,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setReloadFoodList([]);
      });
  };
  return (
    <>
      <AddFood addFoodItem={addFoodItem} />
      <div className="container">
        {foodItems &&
          foodItems.map((foodEl) => (
            <Food
              foodItem={foodEl}
              deleteFoodItem={deleteFoodItem}
              editFoodItem={editFoodItem}
              key={foodEl.id}
            />
          ))}
      </div>
    </>
  );
};

export default FoodContainer;

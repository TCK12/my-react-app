import React, {useState} from 'react';

function MyFavoriteFoods () {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    const foodInput = document.getElementById("foodInput");

    function handleAddFood() {
        const newFood = foodInput.value;
        foodInput.value = "";

        setFoods(f => [...f, newFood]);
    }
    
    function handleRemoveFood(index) {
        setFoods(f => (f.filter((_, i) => i !== index)));
    }

    return (
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input id='foodInput' type="text" placeholder='Enter food name'/>
            <button onClick={handleAddFood}>Add food</button>
        </div>
    );
}

export default MyFavoriteFoods;
import "./styles.css";
import { useState } from "react";

var animalDictionary =  {
  "": "",
  "ð": "Monkey",
  "ðĶ": "Gorilla",
  "ðĶ§": "Orangutan",
  "ðķ": "Dog Face",
  "ð": "Dog",
  "ðĶŪ": "Guide Dog",
  "ðâðĶš":"Service Dog",
  "ðĐ": "Poodle",
  "ðš": "Wolf",
  "ðĶ": "Fox",
  "ðĶ": "Raccoon",
  "ðą": "Cat Face",
  "ð": "Cat",
  "ðĶ": "Lion",
  "ðŊ": "Tiger Face",
  "ð": "Tiger",
  "ð": "Leopard",
  "ðī": "Horse Face",
  "ð": "Horse",
  "ðĶ": "Unicorn",
  "ðĶ": "Zebra",
  "ðĶ": "Deer",
  "ðŪ": "Cow Face",
  "ð": "Ox",
  "ð": "Water Buffalo",
  "ð": "Cow",
  "ð·": "Pig Face",
  "ð": "Pig",
  "ð": "Boar",
  "ð―": "Pig Nose",
  "ð": "Ram",
  "ð": "Ewe",
  "ð": "Goat",
  "ðŠ": "Camel",
  "ðŦ": "Two-Hump Camel",
  "ðĶ": "Llama",
  "ðĶ": "Giraffe",
  "ð": "Elephant",
  "ðĶ": "Rhinoceros",
  "ðĶ": "Hippopotamus",
  "ð­": "Mouse Face ",
  "ð": "Mouse",
  "ð": "Rat",
  "ðđ": "Hamster",
  "ð°" :"Rabbit Face",
  "ð" :"Rabbit",
  "ðŋïļ": "Chipmunk",
  "ðĶ": "Hedgehog",
  "ðĶ": "Bat",
  "ðŧ": "Bear",
  "ðŧâ": " Polar Bear",
  "ðĻ": "Koala",
  "ðž": "Panda",
  "ðĶĨ": "Sloth",
  "ðĶĶ": "Otter",
  "ðĶĻ": "Skunk",
  "ðĶ": "Kangaroo",
  "ðĶĄ": "Badger",
  "ðū" :"Paw Prints",
  "ðĶ" :"Turkey",
  "ð": "Chicken",
  "ð" :"Rooster",
  "ðĢ" :"Hatching Chick",
  "ðĪ": "Baby Chick",
  "ðĨ": "Front-Facing Baby Chick",
  "ðĶ": "Bird",
  "ð§": "Penguin",
  "ðïļ" :"Dove",
  "ðĶ": "Eagle",
  "ðĶ": "Duck",
  ":ðĶĒ" :"Swan",
  "ðĶ" :"Owl",
  "ðĶĐ" :"Flamingo",
  "ðĶ": "Peacock",
  "ðĶ": "Parrot",
  "ðļ": "Frog",
  "ð": "Crocodile",
  "ðĒ": "Turtle",
  "ðĶ" :"Lizard",
  "ð": "Snake",
  "ðē": "Dragon Face",
  "ð": "Dragon",
  "ðĶ": "Sauropod",
  "ðĶ": "T-Rex",
  "ðģ": "Spouting Whale",
  "ð": "Whale",
  "ðŽ": "Dolphin",
  "ð": "Fish",
  "ð ": "Tropical Fish",
  "ðĄ": "Blowfish",
  "ðĶ": "Shark",
  "ð": "Octopus",
  "ð": "Spiral Shell",
  "ð": "Snail",
  "ðĶ": "Butterfly",
  "ð": "Bug",
  "ð": "Ant",
  "ð": "Honeybee",
  "ð": "Lady Beetle",
  "ðĶ": "Cricket",
  "ð·ïļ": "Spider",
  "ðĶ": "Scorpion",
  "ðĶ" :"Mosquito"
  
};



var animalKey = Object.keys(animalDictionary);

export default function App() {
  var [input, setInput] = useState("");
  var showOutput;

  function inputChangeHandler(event) {
    input = event.target.value;
    showOutput = animalDictionary[input];

    if (!(input in animalDictionary)) {
      showOutput = "No such animal found!";
    }
    setInput(showOutput);
  }

  function animalClickHandler(animal) {
    showOutput = animalDictionary[animal];
    setInput(showOutput);
  }

  return (
    <div className="App">
      <header>
        <h1>Know your animal!</h1>
      </header>

      <main>
        <input
          onChange={inputChangeHandler}
          placeholder="Enter animal emoji to know its name"
        ></input>

        <div className="output">{input}</div>

        <div> Fruits we know: </div>

        <div className="animalDiv">
          {animalKey.map((animal) => {
            return (
              <span onClick={() => animalClickHandler(animal)}>{animal}</span>
            );
          })}
        </div>
      </main>

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noreferrer noopener"
        >
         shivansh shuktel
        </a>
      </footer>
    </div>
  );
}

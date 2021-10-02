import "./styles.css";
import { useState } from "react";

var animalDictionary =  {
  "": "",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺":"Service Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐴": "Horse Face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐮": "Cow Face",
  "🐂": "Ox",
  "🐃": "Water Buffalo",
  "🐄": "Cow",
  "🐷": "Pig Face",
  "🐖": "Pig",
  "🐗": "Boar",
  "🐽": "Pig Nose",
  "🐏": "Ram",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐭": "Mouse Face ",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🐹": "Hamster",
  "🐰" :"Rabbit Face",
  "🐇" :"Rabbit",
  "🐿️": "Chipmunk",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐻‍": " Polar Bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🐾" :"Paw Prints",
  "🦃" :"Turkey",
  "🐔": "Chicken",
  "🐓" :"Rooster",
  "🐣" :"Hatching Chick",
  "🐤": "Baby Chick",
  "🐥": "Front-Facing Baby Chick",
  "🐦": "Bird",
  "🐧": "Penguin",
  "🕊️" :"Dove",
  "🦅": "Eagle",
  "🦆": "Duck",
  ":🦢" :"Swan",
  "🦉" :"Owl",
  "🦩" :"Flamingo",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎" :"Lizard",
  "🐍": "Snake",
  "🐲": "Dragon Face",
  "🐉": "Dragon",
  "🦕": "Sauropod",
  "🦖": "T-Rex",
  "🐳": "Spouting Whale",
  "🐋": "Whale",
  "🐬": "Dolphin",
  "🐟": "Fish",
  "🐠": "Tropical Fish",
  "🐡": "Blowfish",
  "🦈": "Shark",
  "🐙": "Octopus",
  "🐚": "Spiral Shell",
  "🐌": "Snail",
  "🦋": "Butterfly",
  "🐛": "Bug",
  "🐜": "Ant",
  "🐝": "Honeybee",
  "🐞": "Lady Beetle",
  "🦗": "Cricket",
  "🕷️": "Spider",
  "🦂": "Scorpion",
  "🦟" :"Mosquito"
  
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

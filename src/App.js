import { useState } from "react";
import "./styles.css";

const HigestEducation = () => {
  const [education, setEducation] = useState("");
  const educationHandler = (e) => {
    setEducation(e.target.value);
  };
  return (
    <div>
      <form onChange={educationHandler}>
        <label for="education">Choose yoye highest education level: </label>
        <br />
        <input
          type="radio"
          name="education"
          id="education"
          value="High School"
        />{" "}
        High School
        <br />
        <input
          type="radio"
          name="education"
          id="education"
          value="Bachelor's"
        />
        Bachelor's Degree
        <br />
        <input type="radio" name="education" id="education" value="Master's" />
        Master's Degree
        <br />
        <input type="radio" name="education" id="education" value="Ph.D" />
        Ph.D
        <br />
      </form>
      {education && <p>Education Level: I have a {education} degree.</p>}
    </div>
  );
};

const MusicGenre = () => {
  const [genre, setGenre] = useState("");
  const genreHandler = (e) => {
    setGenre(e.target.value);
  };
  return (
    <div>
      <form onChange={genreHandler}>
        <label htmlFor="genre">Choose your favourite music genre: </label>
        <br />
        <input type="radio" value="Pop" id="genre" name="genre" />
        Pop <br />
        <input type="radio" value="Rock" id="genre" name="genre" />
        Rock <br />
        <input type="radio" value="Hip Hop" id="genre" name="genre" />
        Hip Hop <br />
        <input type="radio" value="Jazz" id="genre" name="genre" />
        Jazz <br />
      </form>
      {genre && <p>I like {genre} music.</p>}
    </div>
  );
};

const PaymentMethod = () => {
  const [payment, setPayment] = useState("");
  const paymentHandler = (e) => {
    setPayment(e.target.value);
  };
  return (
    <div>
      <form onChange={paymentHandler}>
        <label htmlFor="payment">Choose your payment method: </label> <br />
        <input
          type="radio"
          value="Credit Card"
          name="payment"
          id="payment"
        />{" "}
        Credit Card <br />
        <input
          type="radio"
          value="Paypal"
          name="payment"
          id="payment"
        /> Paypal <br />
        <input type="radio" value="Bitcoin" name="payment" id="payment" />{" "}
        Bitcoin <br />
        <input
          type="radio"
          value="Cash"
          name="payment"
          id="payment"
        /> Cash <br />
      </form>
      {<p>Selected payment method: {payment}</p>}
    </div>
  );
};

const WeatherPreferrence = () => {
  const [weather, setWeather] = useState("");
  const weatherHandler = (e) => {
    setWeather(e.target.value);
  };
  return (
    <div>
      <form onChange={weatherHandler}>
        <label htmlFor="weather">Choose your preferred weather: </label> <br />
        <input
          type="radio"
          value="Sunny"
          id="weather"
          name="weather"
        /> Sunny <br />
        <input
          type="radio"
          value="Rainy"
          id="weather"
          name="weather"
        /> Rainy <br />
        <input
          type="radio"
          value="Cloudy"
          id="weather"
          name="weather"
        /> Cloudy <br />
        <input
          type="radio"
          value="Snowy"
          id="weather"
          name="weather"
        /> Snowy <br />
      </form>
      {weather && <p>Selected weather: I like {weather} weather.</p>}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <HigestEducation />
      <br />
      <MusicGenre />
      <br />
      <PaymentMethod />
      <br />
      <WeatherPreferrence />
    </div>
  );
}

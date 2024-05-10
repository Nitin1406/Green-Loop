import React, { useState } from "react";
require("@lottiefiles/lottie-player");

const Sell = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [image, setImage] = useState(null);
  const [scrapAmount, setScrapAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Name:", name);
    console.log("Mobile Number:", mobileNumber);
    console.log("Image:", image);
    console.log("Scrap Amount:", scrapAmount);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="flex w-11/12 mx-auto gap-24">
      <div className="w-[40%]">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="/trash.json"
        ></lottie-player>
      </div>
      <div className="w-[50%]  mt-6">
        <p className="text-4xl font-bold my-4 text-center text-[#33cc33]">Scrap Collection Form</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="mr-6 font-bold text-[#33cc33] text-xl">
            Name:
          </label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name..."
            className="w-11/12 border rounded-md px-2 py-2 mt-2"
          />
          <br />
          <br />

          <label htmlFor="mobileNumber" className="mr-6 font-bold text-[#33cc33] text-xl">
            Mobile Number:
          </label>
          <br />
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            placeholder="Enter your mobile number..."
            className="w-11/12 border rounded-md px-2 py-2 mt-2"
          />
          <br />
          <br />

          <label htmlFor="image" className="mr-6 font-bold text-[#33cc33] text-xl">
            Image:
          </label>
          <br></br>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="w-11/12 border rounded-md px-2 py-2 mt-2"
          />
          <br />
          <br />

          <label htmlFor="scrapAmount" className="mr-6 font-bold text-[#33cc33] text-xl">
            Scrap Amount (in kgs):
          </label>
          <br></br>
          <input
            type="text"
            id="scrapAmount"
            value={scrapAmount}
            onChange={(e) => setScrapAmount(e.target.value)}
            required
            placeholder="Enter amount of your Scrap in kgs"
            className="w-11/12 border rounded-md px-2 py-2 mt-2"
          />
          <br></br>
          <button
            type="submit"
            className="border px-4 py-2 rounded-md mt-4 bg-[#33cc33] text-white float float-right mr-14"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )}
 export default Sell;

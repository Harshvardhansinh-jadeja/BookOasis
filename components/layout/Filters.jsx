"use client";
import {Rating} from "@mui/material";

const Filters = () => {
  return (
    <div className=" ml-12 mr-8">
      <div className="box-content h-auto shadow-sm w-60 border-2">
        <div className="p-3">
          <div className="font-semibold font-satoshi">Price($)</div>

          <div className="flex flex-row text-md">
            <input
              type="number"
              placeholder="Min"
              className="border-2 rounded-md w-1/4  mr-3 p- text-center mt-2 "
            />
            <input
              type="number"
              placeholder="Max"
              className="border-2 w-1/4 rounded-md  mr-3 p-1 text-center mt-2 "
            />

            <button className="border-2 bg-black text-white rounded-md shadow-sm  w-1/4 mr-1 p-1 text-center mt-2 hover:bg-white hover:text-black  font-semibold ">
              Go
            </button>
          </div>
        </div>
        <hr className="my-2 w-full" />
        <div className="p-3">
          <div className="font-semibold font-satoshi">Category</div>
          <div className="flex flex-col">
            <div className="flex flex-row mt-1 ">
              <input
                type="checkbox"
                className=" mr-3"
                id="electronics"
                name="electronics"
              />
              <label className="font-satoshi" for="electronics">
                Electronics
              </label>
            </div>
            <div className="flex flex-row mt-1 ">
              <input type="checkbox" className=" mr-3" id="toys" name="toys" />
              <label className="font-satoshi" for="toys">
                Toys
              </label>
            </div>
            <div className="flex flex-row mt-1 ">
              <input
                type="checkbox"
                className=" mr-3"
                id="office"
                name="office"
              />
              <label className="font-satoshi" for="office">
                Office
              </label>
            </div>
            <div className="flex flex-row mt-1 ">
              <input
                type="checkbox"
                className=" mr-3"
                id="beauty"
                name="beauty"
              />
              <label className="font-satoshi" for="beauty">
                Beauty
              </label>
            </div>
          </div>
        </div>
        <hr className="my-2 w-full" />
        <div className="p-3">
          <div className="font-semibold font-satoshi">Ratings</div>
          <div className="flex flex-row mt-1 ">
            <input type="checkbox" className=" mr-3" id="1star" name="1star" />
            <Rating name="read-only" value={1} />
          </div>
          <div className="flex flex-row mt-1 ">
            <input type="checkbox" className=" mr-3" id="2star" name="2star" />
            <Rating name="read-only" value={2} />
          </div>
          <div className="flex flex-row mt-1 ">
            <input type="checkbox" className=" mr-3" id="3star" name="3star" />
            <Rating name="read-only" value={3} />
          </div>
          <div className="flex flex-row mt-1 ">
            <input type="checkbox" className=" mr-3" id="4star" name="4star" />
            <Rating name="read-only" value={4} />
          </div>
          <div className="flex flex-row mt-1 ">
            <input type="checkbox" className=" mr-3" id="5star" name="5star" />
            <Rating name="read-only" value={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

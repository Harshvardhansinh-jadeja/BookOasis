import product from "@backend/models/product";
import Product from "@backend/models/product";
import {connectToDB} from "@backend/utils/connectToDB";

export const POST = async (request) => {
  try {
    await connectToDB();
    const data = await request.json();

    const newProduct = new Product(data);

    await newProduct.save();
    return new Response(JSON.stringify(newProduct), {status: 201});
  } catch (error) {
    return new Response("Failed to Create a Product", {status: 500});
  }
};

export const GET = async (request) => {
  try {
    await connectToDB();
    const data = await Product.find({});

    return new Response(
      JSON.stringify({
        data: data,
        message: "Products fetched successfully",
      }),
      {status: 201}
    );
  } catch (error) {
    return new Response("Failed to Create a Product", {status: 500});
  }
};

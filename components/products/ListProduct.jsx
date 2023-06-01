import Filters from "@components/layout/Filters";
import React from "react";

const ListProduct = ({data}) => {
  return (
    <div className="py-12">
      <div class="flex">
        <div class="flex-initial">
          <Filters />
        </div>
        <div class="flex-initial flex-col">
          <div className="flex-1">ListProduct</div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;

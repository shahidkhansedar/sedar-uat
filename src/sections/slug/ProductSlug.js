import React from "react";
import WebLayout from "@/layouts/web";
import ProductPageSlugSection from "../productSlug";


const ProductSlug = (props) => {
  console.log('ProductSlugTest')
  const { layout, productsSlugPageData, firstData } = props;
  console.time('ProductSlug:render');
  return (
    <WebLayout layout={layout}>
      <ProductPageSlugSection
        productsSlugPageData={productsSlugPageData}
        firstData={firstData}
      />
    </WebLayout>
  );
};
console.timeEnd('ProductSlug:render');
console.log('ProductSlug:render');
export default React.memo(ProductSlug);

import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { addNewProducts, fetchAllProducts } from "@/Store/admin/product-slice";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminProductTile from "@/components/admin-view/products-tile";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

const AdminProduct = () => {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageloadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.adminProducts);
  const { toast } = useToast();
  function onSubmit(event) {
    event.preventDefault();
    
    dispatch(
      addNewProducts({
        ...formData,
        image: uploadedImageUrl,
      })
    ).then((data) => {
      console.log(data);
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        setImageFile(null);
        setFormData(initialFormData);
        setOpenCreateProductsDialog(false);
        toast({
          title: "Product add Successfully",
        });
      }
    });
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  console.log("productslist", products);
  console.log(formData ,"xxxxxxxxxxxxxxxxxxxx");
  console.log("image url", uploadedImageUrl);
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button
          className="bg-black text-white"
          onClick={() => setOpenCreateProductsDialog(true)}
        >
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products && products.length > 0
          ? products.map((productItems) => (
              <AdminProductTile
                setFormData={setFormData}
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                setCurrentEditedId={setCurrentEditedId}
                product={productItems}
              />
            ))
          : null}
      </div>
      <Sheet
        className="bg-white text-black"
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
          setCurrentEditedId(null)
          setFormData(initialFormData)
        }}
      >
        <SheetContent
          side="right"
          className="bg-white text-black z-50 overflow-auto"
        >
          <SheetHeader>
            <SheetTitle>{
              currentEditedId !== null ? "Edit product " : "Add Product"
            }</SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageloadingState={setImageloadingState}
            imageLoadingState={imageLoadingState}
            isEditedMode={currentEditedId !== null}
          />
          <div className="py-6">
            <CommonForm
              formsControls={addProductFormElements}
              buttonText={currentEditedId !== null ? "Edit product " : "Add Product"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default AdminProduct;

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
  console.log(formData);
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
        <Sheet
          className="bg-white text-black"
          open={openCreateProductsDialog}
          onOpenChange={() => {
            setOpenCreateProductsDialog(false);
          }}
        >
          <SheetContent
            side="right"
            className="bg-white text-black z-50 overflow-auto"
          >
            <SheetHeader>
              <SheetTitle>Add New Products</SheetTitle>
            </SheetHeader>
            <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              setImageloadingState={setImageloadingState}
              imageLoadingState={imageLoadingState}
            />
            <div className="py-6">
              <CommonForm
                formsControls={addProductFormElements}
                buttonText="add"
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default AdminProduct;



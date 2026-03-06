import ProductSkeleton from "./components/ProductSkeleton";

export default function App() {

  const loading = true;

  return (
    <>
      {loading ? (
        <ProductSkeleton />
      ) : (
        <ProductsList />
      )}
    </>
  );
}
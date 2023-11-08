import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({isFeatured: true});
    const billboard = await getBillboard("47e84d9c-e764-4654-97d9-3ee33a643e50");

    return ( 
        <Container>
            <div>
                <Billboard data={billboard}/>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
            </div>
        </Container>
     );
}
 
export default HomePage;
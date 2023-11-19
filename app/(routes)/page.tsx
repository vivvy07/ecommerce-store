import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({isFeatured: true});
    const billboard = await getBillboard("a6d2b81d-7eb4-4633-997a-a91fbdc07dc8");

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
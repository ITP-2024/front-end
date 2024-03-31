import { MongoClient, ObjectId } from 'mongodb';
import { ProductImageWrapper } from '@/app/ui/products/ProductImageWrapper'; // Import the ProductImageWrapper component

export const metadata = {
    title: "Products · Saleor Storefront example",
    description: "All products in Saleor Storefront example",
};

async function getProducts(channel: string, cursor?: string): Promise<any[]> {
    const client = new MongoClient("mongodb+srv://madhini00:1234@cluster0.oqqgxrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    const db = client.db("KpopShop");

    try {
        await client.connect();

        const db = client.db("KpopShop");
        const productsCollection = db.collection('Product');

        const query: any = { channel }; // Specify type as any to include _id property

        if (cursor) {
            query._id = { $gt: new ObjectId(cursor) }; // Convert cursor to ObjectId
        }

        const products = await productsCollection.find(query)
            .sort({ _id: 1 })
            .toArray();

        return products;
    } finally {
        await client.close();
    }
}

export default async function Page({
    params,
    searchParams,
}: {
    params: { channel: string };
    searchParams: {
        cursor: string | string[] | undefined;
    };
}) {
    const cursor = typeof searchParams.cursor === "string" ? searchParams.cursor : undefined;

    const products = await getProducts(params.channel, cursor);

    return (
        <div >
            <section className="mx-auto max-w-7xl pb-16">
                <ul className="flex flex-wrap">
                    {products.map((product) => (
                        <li key={product._id} className="p-4 flex-shrink-0 w-1/3">
                            <div className="flex flex-col">
                                <ProductImageWrapper
                                    src={product.image}
                                    alt={product.name}
                                    width={350}
                                    height={250}
                                />
                                <h3>{product.name}</h3>
                                <h3>Rs.{product.price}</h3>
                                <button
                                    type="submit"
                                    className="bg-fuchsia-800 text-white px-10 py-2 rounded-md mt-2 hover:bg-fuchsia-900"
                                >
                                    Add to Gift Box
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );

}

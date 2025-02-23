import Main from "@/Layouts/MainLayout";
import Card from "@/Components/Card"; // Import the Card component

const CategoryShow = ({
    category,
    subcategory,
    products,
}: {
    category: any;
    subcategory: any;
    products: any;
}) => {
    return (
        <Main>
            {category && (
                <>
                    {/* Category-wise product list */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Products in {category.name}
                        </h2>
                        {products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {products.map((product: any) => (
                                    <Card
                                        key={product.id}
                                        name={product.name}
                                        price={product.price}
                                        image={product.image}
                                        slug={product.slug}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">
                                No products found in this category.
                            </p>
                        )}
                    </div>
                </>
            )}

            {subcategory && (
                <div>
                    {/* Subcategory-wise product list */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Products in {subcategory.name}
                        </h2>
                        {products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {products.map((product: any) => (
                                    <Card
                                        key={product.id}
                                        name={product.name}
                                        price={product.price}
                                        image={product.image}
                                        slug={product.slug}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">
                                No products found in this subcategory.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </Main>
    );
};

export default CategoryShow;

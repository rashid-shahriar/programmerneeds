import Main from "@/Layouts/MainLayout";

const CategoryShow = ({
    category,
    subcategory,
}: {
    category: any;
    subcategory: any;
}) => {
    return (
        <Main>
            {category && (
                <>
                    <div>
                        <h1>{category.name}</h1>
                        <p>{category.description}</p>
                    </div>
                    //category wise product list
                    <div>
                        {category.product.map((product: any) => (
                            <div key={product.id}>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <img src={product.image} alt={product.name} />
                            </div>
                        ))}
                    </div>
                </>
            )}
            {subcategory && (
                <div>
                    <h2>{subcategory.name}</h2>
                    <p>{subcategory.description}</p>
                </div>
            )}
        </Main>
    );
};

export default CategoryShow;

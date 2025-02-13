import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/Components/Card";
import Main from "@/Layouts/MainLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

// Define the type for a Product
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    slug: string;
}

export default function Welcome(props: PageProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get<Product[]>("/api/products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setError("Failed to load products.");
                setLoading(false);
            });
    }, []);

    return (
        <Main>
            <Head title="Welcome" />

            <h1 className="text-2xl font-bold mb-4">Our Products</h1>

            {loading && <p className="text-gray-500">Loading products...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            slug={product.slug}
                        />
                    ))}
                </div>
            )}
        </Main>
    );
}

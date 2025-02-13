import Main from "@/Layouts/MainLayout";

const Product = ({ product }: any) => {
    return (
        <Main>
            <div className="max-w-7xl px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Product Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {product.name}
                                    {product.featured && (
                                        <span className="ml-2 text-sm bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-200 px-2 py-1 rounded">
                                            Featured
                                        </span>
                                    )}
                                </h1>
                                <div className="flex items-center space-x-4">
                                    <span
                                        className={`text-sm px-2 py-1 rounded ${
                                            product.status === "active"
                                                ? "bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200"
                                                : product.status ===
                                                  "discontinued"
                                                ? "bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200"
                                                : "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200"
                                        }`}
                                    >
                                        {product.status}
                                    </span>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${
                                                    i < product.star_rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300 dark:text-gray-600"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                {product.price
                                    ? `$${Number(product.price).toFixed(2)}`
                                    : "Free"}
                            </span>
                        </div>

                        {/* Image Gallery */}
                        <div className="mb-8">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-96 object-cover rounded-lg mb-4"
                            />
                            <div className="grid grid-cols-4 gap-4">
                                {/* Additional images can be added here */}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Description
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {product.description ||
                                    "No description available."}
                            </p>
                        </div>

                        {/* Metadata Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    Category
                                </div>
                                <div className="font-medium text-gray-900 dark:text-white">
                                    {product.category?.name || "N/A"}
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    Subcategory
                                </div>
                                <div className="font-medium text-gray-900 dark:text-white">
                                    {product.subcategory?.name || "N/A"}
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    Platform
                                </div>
                                <div className="font-medium text-gray-900 dark:text-white">
                                    {product.platform?.name || "N/A"}
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    Release Date
                                </div>
                                <div className="font-medium text-gray-900 dark:text-white">
                                    {product.release_date || "N/A"}
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    Last Updated
                                </div>
                                <div className="font-medium text-gray-900 dark:text-white">
                                    {product.last_updated || "N/A"}
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    Version
                                </div>
                                <div className="font-medium text-gray-900 dark:text-white">
                                    v{product.version}.0
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Tags
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {product.tags
                                    ?.split(",")
                                    .map((tag: string, index: number) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 rounded-full text-sm"
                                        >
                                            {tag.trim()}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            {/* Action Card */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
                                <div className="flex flex-col space-y-4">
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                                        Download Now
                                    </button>
                                    {product.product_url && (
                                        <a
                                            href={product.product_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-center text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            Visit Product Website
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Statistics */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Statistics
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            Total Users
                                        </span>
                                        <span className="text-gray-900 dark:text-white">
                                            {product.total_user}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            Downloads
                                        </span>
                                        <span className="text-gray-900 dark:text-white">
                                            {product.total_download}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            Size
                                        </span>
                                        <span className="text-gray-900 dark:text-white">
                                            {product.size} MB
                                        </span>
                                    </div>
                                    {product.barcode && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-400">
                                                Barcode
                                            </span>
                                            <span className="text-gray-900 dark:text-white">
                                                {product.barcode}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Additional Information
                                </h3>
                                <div className="space-y-2">
                                    {product.creator && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-400">
                                                Creator
                                            </span>
                                            <span className="text-gray-900 dark:text-white">
                                                {product.creator}
                                            </span>
                                        </div>
                                    )}
                                    {product.publisher && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-400">
                                                Publisher
                                            </span>
                                            <span className="text-gray-900 dark:text-white">
                                                {product.publisher}
                                            </span>
                                        </div>
                                    )}
                                    {product.developer && (
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-400">
                                                Developer
                                            </span>
                                            <span className="text-gray-900 dark:text-white">
                                                {product.developer}
                                            </span>
                                        </div>
                                    )}
                                    {product.external_url && (
                                        <a
                                            href={product.external_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            <span>External Resource</span>
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Admin/Management Section */}
                {product.notes && (
                    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Admin Notes
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {product.notes}
                        </p>
                    </div>
                )}
            </div>
        </Main>
    );
};

export default Product;

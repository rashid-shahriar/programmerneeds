import { Link } from "@inertiajs/react";

interface CardProps {
    name: string;
    price: number;
    image: string;
    slug: string;
}

const Card = ({ name, price, image, slug }: CardProps) => {
    return (
        <Link
            href={route("products.show", { slug: slug })}
            className="group block transform transition-all duration-300 hover:-translate-y-1 rounded-xl max-w-md overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-gray-800/50"
        >
            <div className=" bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                {/* Image Section */}
                <div className="relative">
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                            src={image}
                            alt={name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

                        {/* Version Badge */}
                        <div className="absolute top-3 left-3">
                            <span className="text-xs font-semibold text-white bg-gray-900/80  px-2.5 py-1 rounded-full">
                                v18.2.0
                            </span>
                        </div>

                        {/* Free Badge */}
                        <div className="absolute top-3 right-3">
                            <span className="text-xs font-semibold text-white bg-emerald-500/90  px-2.5 py-1 rounded-full">
                                Free
                            </span>
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="absolute -bottom-4 left-4 transition-transform duration-300 group-hover:-translate-y-1 ">
                        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm ">
                            <img
                                src="https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png"
                                alt="Facebook"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 pt-6">
                    {/* Title and Creator */}
                    <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Created by{" "}
                            <span className="text-emerald-600 dark:text-emerald-400">
                                Facebook
                            </span>
                        </p>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        React is a JavaScript library for building user
                        interfaces. It's fast, scalable, and simple. Perfect for
                        modern web development.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
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
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                            <span>1.2M Views</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
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
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            <span>845K Downloads</span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {["#webdev", "#javascript", "+3"].map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs font-medium px-2.5 py-1 rounded-full
                                         bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur
                                         text-gray-600 dark:text-gray-300
                                         transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;

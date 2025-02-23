export default function Guest({ children }: { children: React.ReactNode }) {
    return (
        <div className=" bg-gray-100 ">
            <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
                <main>{children}</main>
            </div>
        </div>
    );
}

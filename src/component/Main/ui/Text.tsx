export const Text = () => {
    return (
        <div className="flex items-center justify-center px-4 py-12 md:py-16 lg:py-20">
            <div className="max-w-full md:max-w-xl lg:max-w-2xl text-center md:text-left">
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-snug">
                    Balancing<br />
                    Crypto Markets
                </h1>
                <p className="text-center text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed md:leading-loose mb-6 md:mb-8">
                    Our fully automated proprietary quantitative trading software
                    provides 24/7 liquidity to 170+ crypto assets across 25+ 
                    centralized spot and derivative crypto exchanges.
                </p>
                <div className="flex items-center justify-center">
                    <button className="px-6 py-3 bg-blue-800 text-white rounded-lg text-base sm:text-lg md:text-xl hover:bg-blue-700 transition">
                        GET IN TOUCH
                    </button>
                </div>
            </div>
        </div>
    )
}
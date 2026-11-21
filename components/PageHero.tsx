interface PageHeroProps {
    title: string;
    subtitle?: string;
    image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
    return (
        <section className="relative h-[50vh] flex items-center justify-center pt-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${image}")` }}
                />
            </div>
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3 drop-shadow-2xl">
                    {title}
                </h1>
                {subtitle && <p className="text-gray-200 max-w-2xl mx-auto drop-shadow">{subtitle}</p>}
            </div>
        </section>
    );
}
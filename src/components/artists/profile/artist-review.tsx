import {
    Star,
    Quote,
} from "lucide-react";
 import Image from "next/image";
type Review = {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
};

type ArtistReviewProps = {
    reviews: Review[];
};

export function ArtistReview({
    reviews,
}: ArtistReviewProps) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-14">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8B5E3C]">
                        Testimonials
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-[#2F2F2F]">
                        Collector Reviews
                    </h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="rounded-3xl border border-[#E8E3DB] bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
                        >
                            <Quote className="mb-6 h-10 w-10 text-[#8B5E3C]" />

                            <div className="mb-5 flex">
                                {Array.from({
                                    length: review.rating,
                                }).map((_, index) => (
                                    <Star
                                        key={index}
                                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            <p className="leading-8 text-gray-600">
                                {review.comment}
                            </p>

                            <div className="mt-8 flex items-center gap-4">

                                <Image
                                    src={review.avatar}
                                    alt={review.name}
                                    width={56}
                                    height={56}
                                    className="rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold text-[#2F2F2F]">
                                        {review.name}
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        Verified Collector
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
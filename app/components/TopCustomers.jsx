import { cn } from "@/lib/utils";
import Marquee from "./MarQuee";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}) => {
    return (
        <div className="max-w-max max-h-max py-2 pl-2 pr-10 bg-white/10 rounded-full flexRow gap-3">
            <img src={img} alt={name} className="w-[80px] h-[80px] rounded-full bg-black" />
            <div className="space-y-1">
                <h4>{name}</h4>
                <div className="flexRow gap-2 max-w-[100px] overflow-hidden">
                    {/* <div>icon</div> */}
                    <p className="line-clamp-1">{body}</p>
                </div>
            </div>
        </div>
    );
};

export default function TopCustomers() {
    return (
        <div className="relative flex h-[600px] w-full flex-col items-center justify-center gap-10 overflow-hidden">
            <h2 className="text-center">Top Customers</h2>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
        </div>
    );
}

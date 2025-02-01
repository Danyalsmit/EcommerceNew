import { Star } from "lucide-react";

const ReviewCard = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow flex flex-col gap-3">
      <div className="flex items-center gap-3 flex-wrap">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full flex-shrink-0"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 text-base sm:text-lg">
            Alex Stanton
          </h4>
          <p className="text-xs sm:text-sm text-gray-500">CEO at Bukalapak</p>
        </div>
        <span className="text-xs sm:text-sm text-gray-400 ml-auto">
          21 July 2022
        </span>
      </div>
      <div className="flex items-center gap-1">
        {[...Array(4)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
        {/* <StarOutline className="w-5 h-5 text-yellow-400" /> */}
      </div>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
        We are very happy with the service from the MORENT App. Morent has a low
        price and also a large variety of cars with good and comfortable
        facilities. In addition, the service provided by the officers is also
        very friendly and very polite.
      </p>
    </div>
  );
};

export default ReviewCard;

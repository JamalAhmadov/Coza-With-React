interface ICardProps {
  src: string;
  category: string;
  date: string;
}

const BannerCard: React.FC<ICardProps> = ({ src, category, date }) => {
  return (
    <div className="border flex relative cursor-pointer">
      <div className="flex flex-col absolute top-8 left-8">
        <span className="font-bold text-3xl">{category}</span>
        <span className="text-sm">{date}</span>
      </div>
      <div>
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default BannerCard;

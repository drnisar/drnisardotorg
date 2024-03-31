import ExpandableText from "./ExpandableText";

interface CardProps {
  title: string;
  detail: string;
  image: string;
}

const HomeCard = ({ title, detail, image }: CardProps) => {
  return (
    <div>
      <div className="card shadow p-3 mb-5 bg-body rounded h-100 ">
        <h6 className="class-header card-title bg-tertiary">{title}</h6>
        <img src={image} className="card-img-top" alt="..." height="200px" />
        <div className="card-body">
          {/* <h5 className="card-title">{title}</h5> */}
          <ExpandableText children={detail} />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

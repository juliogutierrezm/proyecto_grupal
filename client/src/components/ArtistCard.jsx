import { Link } from "react-router-dom";

const ArtistCard = ({ track }) => {
  return (
    <Link to={`/artists/${track.relationships?.artists?.data?.[0]?.id}`}>
      <img
        src={track.relationships?.artists?.data?.[0]?.attributes?.artwork?.url
          .replace("{w}", 300)
          .replace("{h}", 300)}
        width={150}
        height={150}
        alt={track.attributes.artistName}
        className="rounded-full object-cover"
      />
    </Link>
  );
};

export default ArtistCard;

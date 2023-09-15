import React from "react";

import { ArtistCard, Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery({
    genre: "pl.92d704ba99a3411289a34fab82866a62",
    limit: 200,
    artist: true,
  });

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top artists
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {data?.data?.map((track) => (
        <ArtistCard key={track.id} track={track} />
      ))}

      </div>
    </div>
  );
};

export default TopArtists;

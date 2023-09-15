import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const [genre, setGenre] = useState(genres[0].value);
  const [title, setTitle] = useState("Pop");
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error, refetch } = useGetTopChartsQuery({ genre });

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const handleChage = (e) => {
    setGenre(e.target.value);
    setTitle(e.target.options[e.target.selectedIndex].text);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {title}
        </h2>
        <select
          onChange={handleChage}
          value={genre}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.data.map((song, i) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};
export default Discover;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.shazam.com',
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: ({ genre, limit = 200, artist = false }) => `/services/amapi/v1/catalog/CL/playlists/${genre}/tracks?limit=${limit}&l=en-US&relate[songs]=artists,music-videos${artist ? '&include=artists' : ''}` }),
        getArtist: builder.query({
            query: ({ id }) => `/services/amapi/v1/catalog/CL/artists/${id}?views=top-songs`
        }),
        getTrackDetails: builder.query({
            queryFn: async ({ songid }) => {
                const res = await fetch(`https://www.shazam.com/song/v1/en-US/CL/web/shazam-songs?adamId=${songid}`);
                const data = await res.json();

                const res2 = await fetch(`https://www.shazam.com/discovery/v5/en-US/CL/web/-/track/${data.data[0].id}?shazamapiversion=v3&video=v3`);
                const result = await res2.json();

                return result;
            }
        }),
        getSearchTerm: builder.query({
            query: ({ searchTerm }) => `/services/amapi/v1/catalog/cl/search?types=songs,artists&term=${encodeURI(searchTerm)}&limit=10`
        })
    }),
});

export const {
    useGetTopChartsQuery,
    useGetArtistQuery,
    useGetTrackDetailsQuery,
    useGetSearchTermQuery,
} = shazamCoreApi;

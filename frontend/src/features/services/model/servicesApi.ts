import baseApi from "@/shared/api/baseApi";


export interface ServicesInfo{
    id:number;
    name:string;
    descr:string;
    parent_id:number | null;
    base_price: number | null;
}

export const servicesApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    getSerivesMainCategory: builder.query<ServicesInfo[], string>({
      query: (artistId) => ({
        url:`/services?category=${artistId}`,
        method:"GET",
        withAuth:false
    }),
    }),
  }),

});

export const {useGetSerivesMainCategoryQuery} = servicesApi;
// export const { useLazyGetFullArtistInfoQuery } = artistApi;
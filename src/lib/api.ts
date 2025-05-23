import {
  AuthApi,
  Configuration,
  DestinationsApi,
  TripsApi,
  UsersApi,
} from "@/types/api";

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL,
});

export const authApi = new AuthApi(config);
export const usersApi = new UsersApi(config);
export const destinationsApi = new DestinationsApi(config);
export const tripsApi = new TripsApi(config);

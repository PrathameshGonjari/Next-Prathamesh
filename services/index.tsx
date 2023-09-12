import { Message } from "@/constants";

const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

class Services {
  get: (url: string, params?: never) => Promise<unknown> = async (
    url: string,
    params?: never
  ) => {
    const fetchOptions = {
      ...defaultOptions,
      params,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL as string}${url}`,
        fetchOptions
      );
      if (res.status !== 200) {
        throw new Error(Message.DEFAULT);
      }
      const data = await res.json();
      return {
        data,
        success: true,
      };
    } catch (error) {
      throw new Error(Message.DEFAULT);
    }
  };
}

export default new Services();

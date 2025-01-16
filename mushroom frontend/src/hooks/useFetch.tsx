import { useCallback, useState } from "react";

type Props = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
};

const useFetch = <T,>({ url, method = "GET" }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState<T>();

  const fetchHandler = useCallback(
    ({
      data,
      file,
      onSuccess,
      onFail,
    }: {
      data?: { [key: string]: unknown };
      file?: File;
      onSuccess?: () => void;
      onFail?: () => void;
    }) => {
      setIsLoading(true);
      setIsError(false);
      setResponse(undefined);
      let body;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        body = formData;
      } else {
        body = JSON.stringify(data);
      }
      console.log(body)
      fetch(url, {
        body,
        method,
        ...(!file
          ? {
              headers: {
                "Content-Type": "application/json",
              },
            }
          : {}),
      })
        .then(async (res) => {
          const resData = await res.json();

          if (res.ok) {
            return Promise.resolve(resData);
          } else {
            return Promise.reject(resData);
          }
        })
        .then((data) => {
          onSuccess && onSuccess();
          setResponse(data);
        })
        .catch((err) => {
          onFail && onFail();
          setIsError(true);
          setResponse(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [method, url]
  );

  return { fetchHandler, response, isError, isLoading };
};

export default useFetch;

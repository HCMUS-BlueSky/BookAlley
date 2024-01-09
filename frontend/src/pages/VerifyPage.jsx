import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const VerifyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    async function verifyToken() {
      try {
        let data = await axiosInstance.get(`/api/user/verify`, {
          token: searchParams,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    verifyToken();
  }, []);
  return (
    <>
      <p>Email successfully verified!</p>
    </>
  );
};

export default VerifyPage;

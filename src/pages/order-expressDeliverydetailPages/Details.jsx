import { useParams } from "react-router-dom";
import { TableDetailInfo, Wrapper } from "../../components";
import ArrowBack from "../../components/ui/ArrowBack";
import { customFetch } from "../../utils";
import { useAuthContext } from "../../context/AuthProvider";
import { useEffect, useState } from "react";
import Loading from "../../components/ui/Loading";

const orderDetails = () => {
  const { admin } = useAuthContext();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await customFetch(`pickuporders/${id}`, {
          headers: { Authorization: `Bearer ${admin.accessToken}` },
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <ArrowBack link={"/orderTracking"} />
      {data && <TableDetailInfo data={data} />}
    </Wrapper>
  );
};
export default orderDetails;

import { useLoaderData } from "react-router-dom";
import Query from "./Query";




const QueryCards = () => {
  const query = useLoaderData();
  console.log(query);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            query.map(qr => <Query key={qr._id} qr={qr}></Query> )
          }
        </div>
    );
};

export default QueryCards;
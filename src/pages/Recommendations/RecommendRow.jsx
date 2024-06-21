

const RecommendRow = ({re, handleDelete}) => {
    const {_id,email,recommenderName, createdAt,Product, name} = re;


    
    return (
        <tr>
        <th>
        <button onClick={() => handleDelete(_id)}className="btn btn-sm btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={Product}alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{recommenderName}</div>
            </div>
          </div>
        </td>
        
        <td>
         {email}
          
        </td>
        <td>{createdAt}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default RecommendRow;
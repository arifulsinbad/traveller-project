import React, { useEffect } from 'react';

const Order = ({order, handleDelete}) => {
 const {customer, serviceName, charge, address, cary, _id, img}=order;
 console.log(img)
 return (
  
    <tr>
        <th>
          <label>
           <button onClick={()=> handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{address}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">{cary}</span>
        </td>
        <td>{charge}</td>
        <th>
          <button className="btn btn-ghost btn-xs">pending</button>
        </th>
      </tr>
  
 );
};

export default Order;
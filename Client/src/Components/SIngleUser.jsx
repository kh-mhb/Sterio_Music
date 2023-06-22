import React from 'react';

const SIngleUser = ({ user, children }) => {
    const { name, email, role, img } = user;
    return (
        <tr>
            <td>  <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src={img} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{(role == 'Buyer' && 'Student') || (role == 'Seller' && 'Instructor') || role}</td>
            <td>{children}</td>
        </tr>
    );
};

export default SIngleUser;
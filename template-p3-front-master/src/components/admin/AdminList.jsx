import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from './../../Fetch';

const AdminList = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetchAdmin = () => {
            axios
            .get(`${FETCH}/admins`)
            .then(res => setAdmins(res.data))
        }
        fetchAdmin()
    }, [])

    return (
        <div>
            <h2>Liste des administrateurs</h2>
            {admins.map((admin) => (
                <div key={admin.id}>
                    {admin.name} {admin.password}
                </div>
            ))}
        </div>
    )

}

export default AdminList;
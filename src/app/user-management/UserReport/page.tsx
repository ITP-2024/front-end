'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

// Define interface for user report data
interface UserReportData {
    users: {
        userID: string,
        userName: string,
        email: string,
        address: string
    }[];
    userCount: number;
}

const UserReport = () => {
    const [userReport, setUserReport] = useState<UserReportData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserReport = async () => {
            try {
                const response = await axios.get<UserReportData>('http://localhost:8080/users/report');
                setUserReport(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user report:', error);
                setLoading(false);
            }
        };
        fetchUserReport();
    }, []);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <h2 style={{ fontSize: '24px', color: 'white', fontWeight: 'bold', paddingTop: '20px', textDecoration: 'underline', textAlign: 'center' }}>Kpop Shop</h2>
            <h2 style={{ fontSize: '20px', color: 'white', fontWeight: 'bold', paddingTop: '20px', textDecoration: 'underline' }}>User Report</h2>
            <button onClick={handlePrint}>Print Report</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                userReport && (
                    <table style={{ borderCollapse: 'collapse', width: '100%', color: 'white' }}>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userReport.users.map(user => (
                                <tr key={user.userID}>
                                    <td style={{ border: '1px solid white', padding: '8px' }}>{user.userID}</td>
                                    <td style={{ border: '1px solid white', padding: '8px' }}>{user.userName}</td>
                                    <td style={{ border: '1px solid white', padding: '8px' }}>{user.email}</td>
                                    <td style={{ border: '1px solid white', padding: '8px' }}>{user.address}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4} style={{  fontSize: '20px',textAlign: 'left', fontWeight: 'bold', borderTop: '2px solid white', padding: '8px' }}>Total Users: {userReport.userCount}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            )}
        </div>
    );
};

export default UserReport;

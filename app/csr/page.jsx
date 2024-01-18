'use client';
import React, { useState, useEffect } from 'react';
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0/client';
import { getAccessToken } from '/app/api/getAccessToken';
import axios from 'axios';

const CSRPage = () => {
  const [logs, setLogs] = useState([]);
  const { user } = useUser();

  const getAuth0Logs = async () => {
    try {
      // Roep getAccessToken aan om het toegangstoken op te halen
      const accessToken = await getAccessToken();

      // Vervolg met het ophalen van de logs met het dynamisch verkregen toegangstoken
      const auth0Domain = 'dev-8cugti5tra1isdds.us.auth0.com';

      const logsResponse = await axios.get(`https://${auth0Domain}/api/v2/logs`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (logsResponse.status === 200) {
        const logsData = logsResponse.data;
        console.log(logsData);
        setLogs(logsData);
      } else {
        console.error('Failed to fetch Auth0 logs:', logsResponse.statusText);
      }
    } catch (error) {
      console.error('Error fetching Auth0 logs:', error.message);
    }
  };

  // const getAuth0Logs = async () => {
  //   try {
  //     const accessToken = await getAccessToken();
  //     const auth0Domain = 'dev-8cugti5tra1isdds.us.auth0.com';
  //
  //     const logsResponse = await axios.get(`https://${auth0Domain}/api/v2/logs`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //
  //     if (logsResponse.status === 200) {
  //       const logsData = logsResponse.data;
  //       console.log(logsData);
  //       setLogs(logsData);
  //     } else {
  //       console.error('Failed to fetch Auth0 logs:', logsResponse.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching Auth0 logs:', error);
  //   }
  // };

  useEffect(() => {
    getAuth0Logs();
  }, []);

  return (
      <>
        <div className="mb-5" data-testid="csr">
          <h1 data-testid="csr-title">Logs</h1>
          <div data-testid="csr-text">
            <div className="table-container">
              <table className="log-table">
                <thead>
                <tr>
                  <th>Log ID</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>IP</th>
                  <th>User Agent</th>
                  <th>Hostname</th>
                  <th>User ID</th>
                  <th>User Name</th>
                </tr>
                </thead>
                <tbody>
                {logs.map((log, index) => (
                    <tr key={index}>
                      <td>{log._id}</td>
                      <td>{log.date}</td>
                      <td>{log.type}</td>
                      <td>{log.ip}</td>
                      <td>{log.user_agent}</td>
                      <td>{log.hostname}</td>
                      <td>{log.user_id}</td>
                      <td>{log.user_name}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <style jsx>{`
        .table-container {
          overflow-x: auto;
        }

        .log-table {
          border-collapse: collapse;
          width: 100%;
        }

        .log-table th,
        .log-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        .log-table th {
          background-color: #f2f2f2;
        }
      `}</style>
      </>
  );
};

export default withPageAuthRequired(CSRPage);

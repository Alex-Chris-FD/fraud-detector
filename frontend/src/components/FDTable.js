import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function FDTable() {
  const [data, setData] = useState([]);

useEffect(() => {
  fetch('http://localhost:3001/api/data')
    .then(response => response.json())
    .then(data => setData(data));
}, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Insight Score</TableCell>
          <TableCell>Risk</TableCell>
          <TableCell>Outcomes</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.sample_fraud_detection_model_insightscore}</TableCell>
            <TableCell>{row.rule_id}</TableCell>
            <TableCell>{row.outcomes}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default FDTable;
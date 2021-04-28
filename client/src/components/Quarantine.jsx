import React  from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";


const Quarantine = ({quarantineCount}) => {

 
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Zombie Population</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key='H'>
            <TableCell>Hospital</TableCell>
            <TableCell>{quarantineCount.hospital}</TableCell>
          </TableRow>
          <TableRow key='S'>
            <TableCell>School</TableCell>
            <TableCell>{quarantineCount.school}</TableCell>
          </TableRow>
          <TableRow key='W'>
            <TableCell>Warehouse</TableCell>
            <TableCell>{quarantineCount.warehouse}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Quarantine;

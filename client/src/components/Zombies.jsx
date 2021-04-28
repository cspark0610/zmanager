import React from "react";
import { Table, TableHead, TableRow, TableCell, Grid, Card, CardContent, Avatar, Typography, TextField, MenuItem } from "@material-ui/core";
import { useSelector } from "react-redux";

const Zombies = ({ handleSelectChange }) => {
  const zombies = useSelector((state) => state.zombies);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Typography variant='h5'>Change Zombie Location and then click on Show Count</Typography></TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <br />

      {zombies &&
        zombies.map(( zombie, idx ) => (
          <Grid container spacing={3} key={zombie._id}>
            <Grid item xs={12} lg={6}>
              <Card>
                <CardContent>
                  <Avatar src={zombie.image}>Avatar</Avatar>
                  <Typography>ID:{zombie._id}</Typography>
                  <Typography>Zombie Location </Typography>
                  <TextField select value={zombie.zombieLocation} onChange={handleSelectChange(idx)}>
                    <MenuItem key='H' value='Hospital'>
                      Hospital
                    </MenuItem>
                    <MenuItem key='S' value='School'>
                      School
                    </MenuItem>
                    <MenuItem key='W' value='Warehouse'>
                      Warehouse
                    </MenuItem>
                  </TextField>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ))}
    </>
  );
};

export default Zombies;

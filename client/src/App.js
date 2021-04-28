import React, { useState, useEffect } from "react";
import { Avatar ,Container, AppBar, Typography, Grow, Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import "./App.css";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllZombies, updateZombie } from "./actions/zombies";
import Zombies from "./components/Zombies";
import Quarantine from "./components/Quarantine";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [quarantineCount, setQuarantineCount] = useState({hospital:0,school:0, warehouse:0}) 
  const zombies = useSelector((state) => state.zombies);
  const [show, setShow] = useState(false)

  const handleQuarantineCount = (hospitalCount, schoolCount, warehouseCount) => {
    setQuarantineCount({
      hospital: hospitalCount,
      school: schoolCount,
      warehouse: warehouseCount
    });
  }
  useEffect(()=>{
    dispatch(getAllZombies())
  },[])

  useEffect(()=>{
    let hospitalCount = 0;
    let schoolCount = 0;
    let warehouseCount = 0;
    zombies.map((zombie)=>{
      if (zombie.zombieLocation === 'Hospital')  hospitalCount++;
      else if (zombie.zombieLocation === 'School') schoolCount++;
      else if (zombie.zombieLocation === 'Warehouse') warehouseCount++;
      })
      handleQuarantineCount(hospitalCount, schoolCount, warehouseCount)
      setShow(false)
  },[show]);

  const handleSelectChange = (idx) => (e) =>{
    let zombiesCopy = [...zombies];
    zombiesCopy[idx].zombieLocation = e.target.value;
    let id = zombiesCopy[idx]._id;
    let body = zombiesCopy[idx];

    dispatch(updateZombie(id, body))

  }

  return (
    <Container >
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Avatar src='https://robohash.org/1?set=set2&size=180x180' />
        <Typography className={classes.heading} variant='h2' align='center'>Zombies Location Manager</Typography>
      </AppBar>
      <Grow in>
        <Container>
        <Grid container justify='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={7} md={7}>
            <Zombies handleSelectChange={handleSelectChange}/>
          </Grid> 
            <Grid item xs={12} sm={5} md={5}>
              <Button variant='contained' color='primary' size='large' onClick={()=>setShow(!show)}>Show Count</Button>
              <Quarantine  quarantineCount={quarantineCount}/>
            </Grid>         
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
  
}

export default App;

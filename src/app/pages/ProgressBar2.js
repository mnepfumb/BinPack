import React from 'react'
import { Box, 
  // Card, Grid, Icon, styled, Divider 
} from '@mui/material';


const ProgressBar = ({bgcolor,progress,height}) => {
     
  const Parentdiv = {
      height: height,
      width: '100%',
      backgroundColor: 'whitesmoke',
      borderRadius: 40,
      // margin: 50
    }
    
    const Childdiv = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: bgcolor,
    //  borderRadius:40,
      textAlign: 'left',
      alignItems: 'center',
    }
    
    const progresstext = {
      // padding: 10,
      color: 'black',
      fontWeight: 900,
      textAlign: 'center',
    }
      
  return (
  <>
  <Box
    sx={{
    display: "flex",
    alignItems: "center",
    width: '100%',
    flexDirection: "row",
    padding: 1,
    }}
  >
     
    <div style={Parentdiv}>
      <div style={Childdiv}>
        {/* <span style={progresstext}>{`${progress}%`}</span> */}
      </div>
    </div>
    <span style={progresstext}>{`${progress}%`}</span>
    
    </Box>
  </>
  )
}

export default ProgressBar;



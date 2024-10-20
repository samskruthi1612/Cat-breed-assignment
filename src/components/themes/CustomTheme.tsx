import { createTheme, ThemeOptions } from '@mui/material/styles';

const CustomTheme: ThemeOptions = createTheme({
  palette: {
      primary: {
        main: '#ff6841',
      },
      secondary: {
        main: '#fff', 
      },
      background: {
        default: '#f5f5f5', 
        paper: '#ffffff',
      },
      text: {
        main:'#fff',
        secondary:'black'
      },
    },
  });
  
export default CustomTheme
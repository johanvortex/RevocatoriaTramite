import { Grid } from "@mui/material";
import FormLogin from "./components/FormLogin";
import LoginImage from "../../assets/img/Login.png";
const Login = () => {
  return (
    <>
      <Grid container spacing={0.5} className="bg-[#dbdbdb]">
        <Grid item xs={6}>
          <div className="text-center">
            <div className="h-full">
              <img
                className="h-screen"
                src={LoginImage}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={6} style={{display:"flex",justifyContent:"center",alignItems:"center"}}
        >
          <FormLogin/>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

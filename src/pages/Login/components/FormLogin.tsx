import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";


const FormLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <h2
          className="card-title flex justify-center font-HelveticaNowTextBlack text-2xl
"
        >
          Inicio de sesión
        </h2>
        <div className="m-2 p-3">
          <p className="font-HelveticaNowTextLight">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto.
          </p>
        </div>
        <div className="card-body items-center text-center">
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel>Usuario</InputLabel>
            <OutlinedInput label="Usuario" type={"text"} />{" "}
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div className="card-actions">
            <button className="btn btn-primary ">Ingresar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLogin;

import {
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  Link,
} from "@mui/material";
import { useState } from "react";

const BookingForm = () => {
  const [selectedPayment, setSelectedPayment] = useState(1);

  const CustomLabel = () => (
    <>
      <Typography
        component="span"
        variant="body1"
        sx={{
          fontWeight: 500,
          fontSize: { xs: "16px", sm: "26px" },
          color: "#718096",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
      </Typography>

      <Link
        href="#"
        sx={{
          color: "#1E21FF",
          fontWeight: 500,
          fontSize: { xs: "16px", sm: "26px" },
          textDecoration: "underline",
        }}
      >
        do eiusmod
      </Link>
    </>
  );

  const handleClick = (index) => {
    setSelectedPayment(index);
  };

  const paymentButtonStyles = (index) => {
    return index === selectedPayment
      ? {
          background: "#FFFFFF",
          border: "2px solid #262626",
          borderColor: "#262626",
          borderRadius: "12px",
        }
      : {
          background: "#EDF2F7",
          borderRadius: "12px",
          border: "none",
        };
  };

  return (
    <Box mt={4}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "18px", sm: "30px" },
          mb: 1,
        }}
      >
        Enter your location
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter address"
        sx={{ mb: 2 }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "18px", sm: "30px" },
          mb: 1,
        }}
      >
        Note (optional)
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter text here"
        sx={{ mb: 2 }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "25px", sm: "50px" },
          mb: 2,
        }}
      >
        Chose a way to pay
      </Typography>
      <Grid container spacing={3} sx={{ mb: 2 }}>
        {["Cash", "Credit card"].map((payment, index) => (
          <Grid item xs={6} key={index}>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                ...paymentButtonStyles(index),
                height: "100px",
                fontWeight: 600,
                fontSize: { xs: "18px", sm: "30px" },
                color: "#262626",
                p: 2,
                textTransform: "none",
              }}
              onClick={() => handleClick(index)}
            >
              {payment}
            </Button>
          </Grid>
        ))}
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              ...paymentButtonStyles(2),
              height: "100px",
              fontWeight: 600,
              fontSize: { xs: "18px", sm: "30px" },
              color: "#262626",
              p: 2,
              textTransform: "none",
            }}
            onClick={() => handleClick(2)}
          >
            eWalet/Virtual bank
          </Button>
        </Grid>
      </Grid>
      <FormControlLabel
        sx={{ mb: 5 }}
        control={
          <Checkbox
            sx={{
              color: "#616161",
              "&.Mui-checked": { color: "#616161" },
            }}
          />
        }
        label={<CustomLabel />}
      />
    </Box>
  );
};

export default BookingForm;

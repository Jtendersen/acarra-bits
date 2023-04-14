import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UserCard from "./UserCard";
import SelectedService from "./SelectedService";
import BookingForm from "./BookingForm";

export const FormOfPayment = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#262626",
          padding: (theme) => theme.spacing(2, 2),
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: "Noto Sans",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: {
                xs: "30px",
                sm: "50px",
              },
              lineHeight: { xs: "40px", sm: "68px" },
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'pnum' on, 'lnum' on",
              color: "#FFFFFF",
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: "auto",
              textAlign: "left",
              wordWrap: "break-word",
            }}
          >
            Choose the form of payment
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close"
            sx={{ flexGrow: 0, flexShrink: 0 }}
            onClick={() => {
              console.log("Close button clicked");
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </AppBar>
      <Container maxWidth="lg">
        <UserCard />
        <SelectedService />
        <BookingForm />
        <Divider sx={{ my: 2 }} />
        <Grid container justifyContent="space-between" sx={{ mb: 2 }}>
          <Grid item>
            <Button
              variant="text"
              size="large"
              sx={{
                width: { xs: "120px", sm: "240px" },
                backgroundColor: "#FFFFFF",
                fontWeight: 500,
                fontSize: { xs: "18px", sm: "30px" },
                color: "#262626",
                p: 2,
                textTransform: "none",
                borderRadius: "12px",
              }}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              sx={{
                width: { xs: "120px", sm: "240px" },
                backgroundColor: "#1E21FF",
                fontWeight: 600,
                fontSize: { xs: "18px", sm: "30px" },
                color: "#FFFFFF",
                p: 2,
                textTransform: "none",
                borderRadius: "12px",
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import serviceImg from "../assets/serviceImg/index1.png";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SelectedService = () => {
  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "20px", sm: "40px" },
              lineHeight: "54px",
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'pnum' on, 'lnum' on",
              mt: 3,
              mb: 2,
            }}
          >
            Selected Service
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", margin: "0 auto" }}>
        <Card sx={{ p: 1 }}>
          <Grid container alignItems="stretch">
            <Grid
              item
              xs={4}
              container
              alignItems="center"
              justifyContent="center"
            >
              <CardMedia
                component="div"
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundImage: `url(${serviceImg})`,
                  borderRadius: { xs: "12px" },
                  maxWidth: { xs: "120px", md: "180px" },
                  maxHeight: { xs: "120px", md: "180px" },
                }}
              />
            </Grid>
            <Grid item xs={8} sx={{ paddingBottom: "0px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  p: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "18px", sm: "30px" },
                    mb: 1,
                  }}
                >
                  Japanese lessons
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "14px", sm: "20px" },
                    color: "#718096",
                    mb: 1,
                  }}
                >
                  <CalendarTodayIcon
                    fontSize="small"
                    sx={{ mr: 1, verticalAlign: "bottom" }}
                  />
                  Nov 7, 2020 · 11:30
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "14px", sm: "20px" },
                    color: "#718096",
                    mb: 1,
                  }}
                >
                  <LocationOnIcon
                    fontSize="small"
                    sx={{ mr: 1, verticalAlign: "bottom" }}
                  />
                  Client`s place
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "18px", sm: "30px" },
                    mb: 1,
                  }}
                >
                  Rp 350.000
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default SelectedService;

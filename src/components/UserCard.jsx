import { Grid, Typography, Avatar, Paper, Button } from "@mui/material";

const UserCard = () => {
  return (
    <Paper
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "auto",
        background: "#F7FAFC",
        border: "1px solid #D3DEE9",
        borderRadius: "20px",
        mt: 2,
        p: 2,
      }}
    >
      <Grid container alignItems="center" spacing={{ xs: 1, sm: 3 }}>
        <Grid item xs={3} sm={3}>
          <Avatar
            sx={{
              width: { xs: "60px", sm: "90px" },
              height: { xs: "60px", sm: "90px" },
              background: "#EDF2F7",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "26px", sm: "40px" },
                textAlign: "center",
                letterSpacing: "-0.3px",
                textTransform: "uppercase",
                fontFeatureSettings: "'pnum' on, 'lnum' on",
                color: "#262626",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              j
            </Typography>
          </Avatar>
        </Grid>

        <Grid item xs={5} sm={6}>
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontFamily: "Noto Sans",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: { xs: "20px", sm: "40px" },
              lineHeight: { xs: "30px", sm: "54px" },
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'pnum' on, 'lnum' on",
              color: "#262626",
            }}
          >
            John
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Noto Sans",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: { xs: "12px", sm: "26px" },
              lineHeight: { xs: "25px", sm: "35px" },
              letterSpacing: "-0.3px",
              color: "#718096",
            }}
          >
            (88) 99602-2404
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Button
            fullWidth
            sx={{
              height: { xs: "50px", sm: "90px" },
              background: "#EDF2F7",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Noto Sans",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: { xs: "14px", sm: "26px" },
                lineHeight: { xs: "25px", sm: "35px" },
                textAlign: "center",
                letterSpacing: "-0.3px",
                color: "#262626",
              }}
            >
              Log out
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserCard;

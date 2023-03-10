import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfileDetailsRequest } from "../../slices/CreateCheque";
import InputIcon from "@mui/icons-material/Input";
import { setIsAuthenticated } from "../../slices/userDetail/userSlice";
export const UserDetails = () => {
  const { name, mobileNumber, email } = useSelector(
    (state: RootState) => state.createCheque.profileDetails
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileDetailsRequest());
  }, []);
  return (
    <>
      <Box sx={{ paddingTop: 2 }} />
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Profile Details
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Tooltip
                  title="Logout"
                  onClick={() =>
                    dispatch(
                      setIsAuthenticated({
                        isAuthenticated: false,
                        loggedInUserEmail: null,
                      })
                    )
                  }
                >
                  <IconButton>
                    <InputIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>

            <TextField
              autoFocus
              margin="dense"
              name="name"
              id="name"
              label="Name"
              type="string"
              fullWidth
              variant="standard"
              required
              disabled
              value={name}
              onChange={() => {}}
            />
            <TextField
              autoFocus
              margin="dense"
              name="email"
              id="email"
              label="Email"
              type="string"
              fullWidth
              variant="standard"
              required
              disabled
              value={email}
              onChange={() => {}}
            />
            <TextField
              autoFocus
              margin="dense"
              name="mobilenumber"
              id="mobilenumber"
              label="Mobile Number"
              type="string"
              fullWidth
              variant="standard"
              required
              disabled
              value={mobileNumber}
              onChange={() => {}}
            />
            <TextField
              autoFocus
              margin="dense"
              name="oldPassword"
              id="oldPassword"
              label="Old Password"
              type="password"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              name="newPassword"
              id="oldPassword"
              label="New Password"
              type="password"
              fullWidth
              variant="standard"
              required
            />
          </CardContent>
          <CardActions>
            <Button size="small">Cancel</Button>
            <Button size="small">Update Password</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

import { Stack, Typography } from "@mui/material";
import AddUserIcon from "@mui/icons-material/GroupAdd";

const Header = () => {
  return (
    <Stack mb={4}>
      <AddUserIcon fontSize="large" color="primary" />
      <Typography mt={1} fontWeight={700} variant="h5">
        Invite users to this project
      </Typography>
      <Typography>
        Invite users from your organization for this project
      </Typography>
    </Stack>
  );
};

export default Header;

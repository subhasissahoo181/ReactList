import { Stack, Typography } from "@mui/material";
const NoUserSelected = () => {
  return (
    <Stack
      height="100%"
      border="1px dashed rgba(0,0,0,.3)"
      alignItems="center"
      justifyContent="center"
    >
      <Typography>No user is selected</Typography>
    </Stack>
  );
};

export default NoUserSelected;

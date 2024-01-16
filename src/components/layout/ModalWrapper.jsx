import { Stack } from "@mui/material";

const ModalWrapper = ({ children }) => {
  return (
    <Stack bgcolor="background.paper" minWidth="600px" p={3} borderRadius={2}>
      {children}
    </Stack>
  );
};

export default ModalWrapper;

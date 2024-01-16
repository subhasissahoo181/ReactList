import { Autocomplete, Button, TextField, Stack, Avatar, Typography } from "@mui/material";
import Header from "./Header";
import ModalWrapper from "../layout/ModalWrapper";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import NoUserSelected from "./NoUserSelected";
const teamUsers = Array.from(Array(10).keys()).map((user) => ({
  label: faker.name.firstName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));

const InviteModal = () => {
  const [selectedUsers, setSelectedUsers] = useState([])
  const handleselectUser = (_, value, reason) => {
    // if(reason === "selectOptin"){
    setSelectedUsers(value);

  };
  console.log(selectedUsers);
  return (
    <ModalWrapper>
      <Header />
      <Autocomplete
        filterSelectedOptions
        disableClearable
        onChange={handleselectUser} options={teamUsers} renderInput={(params) => <TextField{...params} label="UserName" />}
        multiple
      />
      <Stack my={3} height={350} overflow="scroll">{!selectedUsers.length ? <NoUserSelected /> : (
        selectedUsers.map((user) => (
          <Stack key={user.label} direction="row" alignItem="center">
            <Avatar src={user.avatar} />
            <Stack ml={2}>
              <Typography variant="h6">{user.label}</Typography>
              <Typography variant="caption">{user.email}</Typography>
            </Stack>
            <Button onClick={() => handleRemoveuser(user.label)}
              sx={{
                ml: "auto",
                textTransform: "capitalize",
              }}
              color="warning"
              variant="outlined">
              Remove

            </Button>
          </Stack>
        ))
      )}</Stack>
      <Button disableElevation variant="contained">
        Invite user
      </Button>
    </ModalWrapper>
  );
};

export default InviteModal;

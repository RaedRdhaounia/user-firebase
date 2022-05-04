import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import {
  LinearProgress,
  Typography,
  Button,
  CardActions,
  Box,
  Card,
  CardContent
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = React.useState(false);
  const usersCollectionRef = collection(db, "users");
  console.log(users);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getUsers();
  }, []);
  const delateUser = async (id) => {
    setLoading1(true);
    const userDoc = doc(db, "users", id);
     await deleteDoc(userDoc);
    setUsers(users.filter((el) => el.id !== id));
    setLoading1(false);
  };
  return (
    <div>
      <Typography variant="h4" gutterBottom align="center" style={{paddingTop: 20}}	 >
        UserList
      </Typography>

      {loading ? (
        <LinearProgress color="secondary" />
      ) : loading1 ? (
        <Typography variant="h6" gutterBottom>
          waiting of delate this account
          <LinearProgress style={{ backgroundColor: "red" }} />
        </Typography>
      ) : (
        <Box style={{ display: "flex", flexWrap: " wrap", padding: 40 }}>
          {users.map((user) => (
            <Card sx={{ minWidth: 275 }} key={user.id} style={{ margin: 15 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {user.age}
                </Typography>
                <Typography variant="h5" component="div">
                  {user.firstName} {bull} {user.lastName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {user.email}
                </Typography>
                <Typography variant="body2">{user.degree}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => delateUser(user.id)}>
                  delate user
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </div>
  );
}

export default UserList;

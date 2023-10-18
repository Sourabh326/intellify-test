import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  MenuItem,
  Tab,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const CustomerList = ({ data }) => {
  const [value, setValue] = useState("All");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  console.log(data);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    // if (newValue === "Domestic") {
    //   const result = customers.filter(
    //     (custom) => custom.addressType.toLowerCase() === "india"
    //   );
    //   setFilteredCustomers(result);
    // } else if (newValue === "International") {
    //   const result = customers.filter(
    //     (custom) => custom.addressType.toLowerCase() !== "india"
    //   );
    //   setFilteredCustomers(result);
    // } else {
    //   setFilteredCustomers(customers);
    // }
  };
  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" color="black" gutterBottom>
            Lead Listing
          </Typography>
        </Box>

        {/* <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleTabChange}
              aria-label="lab API tabs example"
            >
              <Tab label="All" value="All" />
              <Tab label="Domestic" value="Domestic" />
              <Tab label="International" value="International" />
            </TabList>
          </Box>
          <TabPanel value="All">
            <CustomerList customers={filteredCustomers} />
          </TabPanel>
          <TabPanel value="Domestic">
            <CustomerList customers={filteredCustomers} />
          </TabPanel>
          <TabPanel value="International">
            <CustomerList customers={filteredCustomers} />
          </TabPanel>
        </TabContext> */}

        <Box>
          {data?.map((item, i) => {
            return (
              <Box key={i}>
                <Box sx={{ p: 3, my:3, border: "1px solid grey", borderRadius: 1 }}>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    gap={6}
                  >
                    <Typography
                      color="black"
                      variant="subtitle1"
                      component="div"
                    >
                      Lead Id: 12345
                    </Typography>
                    <Typography
                      color="black"
                      variant="subtitle1"
                      component="div"
                    >
                      Compnay Name: {item.compnay_name}
                    </Typography>
                  </Box>

                  <Box>
                    <Box>
                      <Typography
                        sx={{ my: 2, fontWeight: "bold" }}
                        color="black"
                        variant="subttile"
                        component="div"
                      >
                        Address Book
                      </Typography>
                    </Box>

                    <Grid container spacing={4}>
                      {item?.addresses?.map((address, i) => {
                        return (
                          <Grid item xs={12} md={3}>
                            <Box
                              sx={{
                                p: 1,
                                border: "1px solid grey",
                                borderRadius: 1,
                              }}
                            >
                              Address {i + 1} <br />
                              <Typography
                                sx={{ mt: 2 }}
                                color="black"
                                variant="subttile2"
                                component="div"
                              >
                                {address.streetAddress}, {address.zipcode}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>

                  <Box>
                    <Box>
                      <Typography
                        sx={{ my: 2, fontWeight: "bold" }}
                        color="black"
                        variant="subttile"
                        component="div"
                      >
                        Contact Person List
                      </Typography>
                    </Box>

                    <Grid container spacing={4}>
                      {item?.contacts?.map((contact, i) => {
                        return (
                          <Grid key={i} item xs={12} md={3}>
                            <Box
                              sx={{
                                p: 1,
                                border: "1px solid grey",
                                borderRadius: 1,
                              }}
                            >
                              <Typography
                                sx={{ mt: 2 }}
                                color="black"
                                variant="subttile4"
                                component="div"
                              >
                                {contact.fullName + "|" + contact.designation} |{" "}
                                {contact.phone} | {contact.email} |{" "}
                                {contact.streetAddress}
                              </Typography>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </div>
  );
};

export default CustomerList;

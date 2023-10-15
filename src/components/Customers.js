import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, TextField, Button, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CustomerList from "./CustomerList";

const Customers = () => {
  const [customerData, setCustomerData] = useState({});
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [errors, setErrors] = useState({});
  const [value, setValue] = useState("All");

  const handleChange = (e) => {
    let { value, name } = e.target;
    setCustomerData({ ...customerData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmitCustomer = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "number",
      "personName",
      "address",
      "addressType",
      "remarks",
      "reference",
    ];

    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!customerData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setCustomers([...customers, customerData]);
    setFilteredCustomers([...customers, customerData]);
    setCustomerData({});
    setErrors({});
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "Domestic") {
      const result = customers.filter(
        (custom) => custom.addressType.toLowerCase() === "india"
      );
      setFilteredCustomers(result);
    } else if (newValue === "International") {
      const result = customers.filter(
        (custom) => custom.addressType.toLowerCase() !== "india"
      );
      setFilteredCustomers(result);
    } else {
      setFilteredCustomers(customers);
    }
  };

  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ my: 2 }}>
          <Typography
            variant="h4"
            textAlign="center"
            color="black"
            component="h1"
            gutterBottom
          >
            Customers
          </Typography>
        </Box>
        <Box sx={{ my: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                error={!!errors.firstName}
                sx={{ mt: 1 }}
                fullWidth
                size="small"
                id="firstName"
                name="firstName"
                label="First name"
                variant="outlined"
                onChange={handleChange}
                value={customerData.firstName || ""}
                helperText={errors.firstName || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                error={!!errors.lastName}
                sx={{ mt: 1 }}
                fullWidth
                size="small"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={customerData.lastName || ""}
                label="Last name"
                variant="outlined"
                helperText={errors.lastName || ""}
              />
            </Grid>
          </Grid>

          <Typography sx={{ mt: 2 }} color="black" variant="h6" component="div">
            Phone
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ mt: 1 }}
                error={!!errors.number}
                fullWidth
                type="number"
                size="small"
                id="number"
                name="number"
                onChange={handleChange}
                value={customerData.number || ""}
                label="Number"
                variant="outlined"
                helperText={errors.number || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ mt: 1 }}
                error={!!errors.personName}
                fullWidth
                size="small"
                id="personName"
                name="personName"
                onChange={handleChange}
                value={customerData.personName || ""}
                label="Person name"
                variant="outlined"
                helperText={errors.personName || ""}
              />
            </Grid>
          </Grid>

          <Typography sx={{ mt: 2 }} color="black" variant="h6" component="div">
            Address
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ mt: 1 }}
                error={!!errors.address}
                fullWidth
                size="small"
                id="address"
                name="address"
                onChange={handleChange}
                value={customerData.address || ""}
                label="Address"
                variant="outlined"
                helperText={errors.address || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ mt: 1 }}
                error={!!errors.addressType}
                fullWidth
                size="small"
                id="addressType"
                name="addressType"
                onChange={handleChange}
                value={customerData.addressType || ""}
                label="Address type"
                variant="outlined"
                helperText={errors.addressType || ""}
              />
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <TextField
                error={!!errors.remarks}
                sx={{ mt: 1 }}
                fullWidth
                size="small"
                id="remarks"
                name="remarks"
                onChange={handleChange}
                value={customerData.remarks || ""}
                label="Remarks"
                variant="outlined"
                helperText={errors.remarks || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                error={!!errors.reference}
                sx={{ mt: 1 }}
                fullWidth
                size="small"
                id="reference"
                name="reference"
                onChange={handleChange}
                value={customerData.reference || ""}
                label="Reference"
                variant="outlined"
                helperText={errors.reference || ""}
              />
            </Grid>
          </Grid>

          <Box textAlign={"end"} sx={{ mt: 1 }}>
            <Button
              variant="contained"
              onClick={handleSubmitCustomer}
              type="button"
            >
              Submit
            </Button>
          </Box>
        </Box>

        {/* Customer Lsit */}
        <Box>
          <TabContext value={value}>
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
          </TabContext>
        </Box>
      </Container>
    </div>
  );
};

export default Customers;

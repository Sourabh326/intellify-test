import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/joy/Select";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Option from '@mui/joy/Option';
import CustomerList from "./CustomerList";

const Customers = () => {
  const [customerData, setCustomerData] = useState({});
  const [finalData, setFinalData] = useState([]);
  const [errors, setErrors] = useState({});

  const [addresses, setAddresses] = useState([
    { country: "", state: "", city: "", zipcode: "", streetAddress: "" },
  ]);
  const [contacts, setContacts] = useState([
    { fullName: "", phone: "", email: "", designation: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index][field] = value;
    setAddresses(updatedAddresses);
  };
  const handleChangeContact = (index, field, value) => {
    const updatedContact = [...contacts];
    updatedContact[index][field] = value;
    setContacts(updatedContact);
  };
  
  const handleAddRow = () => {
    if (addresses.length >= 5) {
      alert("You can add a maximum of 5 address");
    } else {
      setAddresses([
        ...addresses,
        { country: "", state: "", city: "", zipcode: "", streetAddress: "" },
      ]);
    }
  };
  const handleAddRowContact = () => {
    if (contacts.length >= 5) {
      alert("You can add a maximum of 5 contacts");
    } else {
      setContacts([
        ...contacts,
        { fullName: "", phone: "", email: "", designation: "" },
      ]);
    }
  };

  const handleRemoveRow = (index) => {
    if (addresses.length > 1) {
      const updatedAddresses = [...addresses];
      updatedAddresses.splice(index, 1);
      setAddresses(updatedAddresses);
    } else {
      alert("You must have at least one address.");
    }
  };
  const handleRemoveRowContact = (index) => {
    if (contacts.length > 1) {
      const updatedContact = [...contacts];
      updatedContact.splice(index, 1);
      setContacts(updatedContact);
    } else {
      alert("You must have at least one address.");
    }
  };

  const handleChangeText = (e) => {
    let { value, name } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleSubmitCustomer = () => {
    const formData = {
      ...customerData,
      addresses: [...addresses],
      contacts: [...contacts],
    };

    setFinalData([...finalData, formData]);

    // Clear the form fields
    setCustomerData({});
    setAddresses([
      { country: "", state: "", city: "", zipcode: "", streetAddress: "" },
    ]);
  };

  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" color="black" gutterBottom>
            Add Lead
          </Typography>
        </Box>
  
        <Box sx={{ my: 2 }}>
          <Typography
            sx={{ my: 1 }}
            color="black"
            variant="subtitle1"
            component="div"
          >
            Lead ID : #001
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <InputLabel>Compnay Name</InputLabel>
              <TextField
                error={!!errors.compnay_name}
                fullWidth
                size="small"
                id="compnay_name"
                name="compnay_name"
                onChange={handleChangeText}
                value={customerData.compnay_name || ""}
                label="Compnay name"
                variant="outlined"
                helperText={errors.compnay_name || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel>Reference</InputLabel>
              <TextField
                error={!!errors.reference}
                fullWidth
                size="small"
                id="reference"
                name="reference"
                onChange={handleChangeText}
                helperText={errors.reference || ""}
                label="Reference"
                variant="outlined"
              />
            </Grid>
          </Grid>
  
          {/* Compnay address book */}
          <Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                sx={{ mt: 3, mb: 2 }}
                color="black"
                variant="subtitle1"
                component="div"
              >
                Compnay Address Book
              </Typography>
              <Button onClick={handleAddRow}>
                <AddCircleOutlineIcon color="primary" /> Add Row
              </Button>
            </Box>
            <Box sx={{ p: 3, border: "1px solid grey", borderRadius: 1 }}>
              {addresses.map((address, index) => (
                <div key={index}>
                  <Box>
                    <Box
                      display={"flex"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      gap={3}
                    >
                      <Typography
                        sx={{ my: 1 }}
                        color="black"
                        variant="subtitle1"
                        component="div"
                      >
                        Address {index + 1}
                      </Typography>
                      <Button onClick={() => handleRemoveRow(index)}>
                        <DeleteForeverIcon sx={{ color: "red" }} />
                      </Button>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={3}>
                        <InputLabel>Country</InputLabel>
                        <Select
                          name="country"
                          onChange={(e) =>
                            handleChange(index, "country", e.target.value)
                          }
                        >
                          <Option value="india">India</Option>
                          <Option value="canada">Canada</Option>
                          <Option value="usa">USA</Option>
                          <Option value="australia">Australia</Option>
                        </Select>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <InputLabel>State</InputLabel>
                        <Select
                          name="state"
                          onChange={(e) =>
                            handleChange(index, "state", e.target.value)
                          }
                        >
                          <Option value="india">India</Option>
                          <Option value="canada">Canada</Option>
                          <Option value="usa">USA</Option>
                          <Option value="australia">Australia</Option>
                        </Select>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <InputLabel>City</InputLabel>
                        <Select
                          name="city"
                          onChange={(e) =>
                            handleChange(index, "city", e.target.value)
                          }
                        >
                          <Option value="india">India</Option>
                          <Option value="canada">Canada</Option>
                          <Option value="usa">USA</Option>
                          <Option value="australia">Australia</Option>
                        </Select>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <InputLabel>Zipcode</InputLabel>
                        <TextField
                          fullWidth
                          size="small"
                          type="number"
                          id="Zipcode"
                          name="zipcode"
                          value={address.zipcode}
                          onChange={(e) =>
                            handleChange(index, "zipcode", e.target.value)
                          }
                          variant="outlined"
                        />
                      </Grid>
  
                      <Grid item xs={12} md={12}>
                        <InputLabel>Street Address</InputLabel>
                        <Textarea
                          sx={{ p: 1 }}
                          size="large"
                          name="streetAddress"
                          onChange={(e) =>
                            handleChange(index, "streetAddress", e.target.value)
                          }
                          minRows={2}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <hr />
                </div>
              ))}
            </Box>
          </Box>

          {/* Contact Person */}
          <Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                sx={{ mt: 3, mb: 2 }}
                color="black"
                variant="subtitle1"
                component="div"
              >
                Contact Person
              </Typography>
              <Button onClick={handleAddRowContact}>
                <AddCircleOutlineIcon color="primary" /> Add Row
              </Button>
            </Box>
            <Box sx={{ p: 3, border: "1px solid grey", borderRadius: 1 }}>
              {contacts.map((contact, index) => (
                <div key={index}>
                  <Box>
                    <Box
                      display={"flex"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      gap={3}
                    >
                      <Typography
                        sx={{ my: 1 }}
                        color="black"
                        variant="subtitle1"
                        component="div"
                      >
                        Contact {index + 1}
                      </Typography>
                      <Button onClick={() => handleRemoveRowContact(index)}>
                        <DeleteForeverIcon sx={{ color: "red" }} />
                      </Button>
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={3}>
                        <InputLabel>Full Name</InputLabel>
                        <TextField
                          fullWidth
                          size="small"
                          id="FullName"
                          name="fullName"
                          value={contact.fullName}
                          onChange={(e) =>
                            handleChangeContact(index, "fullName", e.target.value)
                          }
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <InputLabel>Phone</InputLabel>
                        <TextField
                          fullWidth
                          size="small"
                          type="number"
                          id="Phone"
                          name="phone"
                          value={contact.phone}
                          onChange={(e) =>
                            handleChangeContact(index, "phone", e.target.value)
                          }
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <InputLabel>Email</InputLabel>
                        <TextField
                          fullWidth
                          size="small"
                          id="Email"
                          name="email"
                          value={contact.email}
                          onChange={(e) =>
                            handleChangeContact(index, "email", e.target.value)
                          }
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <InputLabel>Designation</InputLabel>
                        <TextField
                          fullWidth
                          size="small"
                          id="Designation"
                          name="designation"
                          value={contact.designation}
                          onChange={(e) =>
                            handleChangeContact(index, "designation", e.target.value)
                          }
                          variant="outlined"
                        />
                      </Grid>
  
                      <Grid item xs={12} md={12}>
                        <InputLabel>Street Address</InputLabel>
                        <Textarea
                          sx={{ p: 1 }}
                          size="large"
                          name="streetAddress"
                          onChange={(e) =>
                            handleChangeContact(index, "streetAddress", e.target.value)
                          }
                          minRows={2}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <hr />
                </div>
              ))}
            </Box>
          </Box>
  
          {/* Remarks */}
          <Grid item xs={12} md={12} sx={{ my: 2 }}>
            <InputLabel>Remarks</InputLabel>
            <Textarea
              error={!!errors.remarks}
              sx={{ p: 1 }}
              size="large"
              name="remarks"
              onChange={handleChangeText}
              value={customerData.remarks || ""}
              minRows={2}
              helperText={errors.remarks || ""}
            />
          </Grid>
  
          <Box textAlign={"end"} sx={{ mt: 1 }}>
            <Button
              variant="contained"
              onClick={() => {  
                // Handle submit logic
                handleSubmitCustomer();
              }}
              type="button"
            >
              Submit
            </Button>
          </Box>
        </Box>

      </Container>

        {/* Customer list */}
        <CustomerList data={finalData}  />
    </div>
  );
  
};

export default Customers;

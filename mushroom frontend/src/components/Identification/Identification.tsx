import {
  Alert,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import img from "../../assets/anatomy.jpg";
import { URLS } from "../../constants/url";
import useFetch from "../../hooks/useFetch";
import { EdibleResponse } from "../../types";
import { capitalizeEachFirst } from "../../utils";
import Result from "./Result";
import { initialState, selectValues } from "./values";

const Identification = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [isModelOpen, setIsModalOpen] = useState(false);
  const [isErrorMsgOpen, setIsErrorMsgOpen] = useState(false);

  const { fetchHandler, isError, isLoading, response } =
    useFetch<EdibleResponse>({
      url: URLS.IDENTIFICATION_ANN,
      method: "POST",
    });

  const handleChange = (event: SelectChangeEvent<string>, key: string) => {
    setFormValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const toggleModalOpen = () => setIsModalOpen((p) => !p);
  const toggleErrMsgOpen = () => setIsErrorMsgOpen((p) => !p);

  const handleClick = () => {
    setIsErrorMsgOpen(false);
    fetchHandler({
      data: formValues,
      onSuccess: toggleModalOpen,
      onFail: toggleErrMsgOpen,
    });
  };

  return (
    <Grid container spacing={5}>
      {isErrorMsgOpen && (
        <Alert
          severity="error"
          sx={{ width: "100%", my: "0.25rem" }}
          onClose={toggleErrMsgOpen}
        >
          Error Occured
        </Alert>
      )}
      <Grid item xs={12} lg={6} mt={{ lg: "-2rem" }}>
        <Typography variant="h4" fontWeight="bold">
          Mushroom Classification
        </Typography>
        <Typography textAlign="justify" mt="1rem">
          Predicting edible mushrooms through Artificial Neural Networks (ANN)
          is the heart of our website. Our cutting-edge technology uses machine
          learning to provide you with real-time analysis and recommendations.
          In this section of our website, you'll find a step-by-step guide on
          how to use our innovative tool. Explore it to confidently distinguish
          between safe, delicious mushrooms and those best left untouched.
          Discover nature's bounty without the guesswork, all at your
          fingertips.
        </Typography>
        <img style={{ width: "100%", objectFit: "cover" }} src={img} />
      </Grid>
      <Grid item xs={12} lg={6} mb="2rem">
        <Grid container spacing={2} mt={{ lg: "-2rem" }}>
          {Object.entries(selectValues).map(([key, values]) => (
            <Grid item xs={12} md={6} lg={6} key={key}>
              <FormControl size="small" fullWidth>
                <InputLabel>{capitalizeEachFirst(key)}</InputLabel>
                <Select
                  value={formValues[key as keyof typeof formValues]}
                  label={key}
                  onChange={(e) => handleChange(e, key)}
                >
                  {values.map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}
          {response && !isError && (
            <Grid item xs={12} md={6} lg={6}>
              <Button fullWidth onClick={toggleModalOpen} variant="outlined">
                Show Result
              </Button>
            </Grid>
          )}
          <Grid item xs={12} md={6} lg={6}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleClick}
              disabled={isLoading}
            >
              Analyze {isLoading && <CircularProgress size={20} />}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Result
        formValues={formValues}
        open={isModelOpen && !isError}
        onClose={toggleModalOpen}
        prediction={response?.prediction}
      />
    </Grid>
  );
};

export default Identification;

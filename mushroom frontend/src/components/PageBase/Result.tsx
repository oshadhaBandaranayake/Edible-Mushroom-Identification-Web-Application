import { Box, Grid, Typography, styled } from "@mui/material";
import { ClassificationResponse } from "../../types";
import AppModal from "../AppModal/AppModal";

const ResultBox = styled(Box)({
  margin: "0 1.5rem",
  padding: "1rem",
  marginBottom: "0.5rem",
  border: "2px solid #E4E4E7",
  borderRadius: "5px",
});

type Props = {
  open: boolean;
  onClose: () => void;
  image?: string;
  response?: ClassificationResponse;
};

const Result = ({ open, onClose, image, response }: Props) => {
  const confidenceValue =
    response?.confidence && (response.confidence * 100).toFixed(2);

  return (
    <AppModal open={open} onClose={onClose}>
      <Grid container>
        <Grid xs={6} item>
          <img
            src={image}
            alt=""
            width="100%"
            style={{
              objectFit: "cover",
              minHeight: "50vh",
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <ResultBox>
            <Typography fontWeight="bold">Label</Typography>
            <Typography variant="h6">{response?.class}</Typography>
          </ResultBox>
          <ResultBox>
            <Typography fontWeight="bold">Confidence</Typography>
            <Typography variant="h6">{confidenceValue}%</Typography>
          </ResultBox>
          <ResultBox>
            <Typography fontWeight="bold">Message</Typography>
            <Typography variant="h6">{response?.message}</Typography>
          </ResultBox>
        </Grid>
      </Grid>
    </AppModal>
  );
};

export default Result;

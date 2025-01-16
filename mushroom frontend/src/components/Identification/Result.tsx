import { Button, Grid, Typography } from "@mui/material";
import jsPDF from "jspdf";
import AppModal from "../AppModal/AppModal";
import { initialState } from "./values";

type Props = {
  formValues: typeof initialState;
  open: boolean;
  onClose: () => void;
  prediction?: string;
};

const Result = ({ formValues, open, onClose, prediction }: Props) => {
  const doc = new jsPDF("portrait");

  const downloadReport = () => {
    doc.setFont("times");
    doc.text(
      "Result of Prediction for Mushroom - " + new Date().toLocaleString(),
      30,
      10
    );
    doc.setFontSize(12);
    doc.text(`Cap-Shape : ${formValues.cap_shape}`, 20, 30);
    doc.text(`Cap_Surface : ${formValues.cap_surface}`, 120, 30);
    doc.text(`Cap-Color : ${formValues.cap_color}`, 20, 40);
    doc.text(`Bruises : ${formValues.bruises}`, 120, 40);
    doc.text(`Odor : ${formValues.odor}`, 20, 50);
    doc.text(`Gill-Attachment : ${formValues.gill_attachment}`, 120, 50);
    doc.text(`Gill-Spacing : ${formValues.gill_spacing}`, 20, 60);
    doc.text(`Gill-Size : ${formValues.gill_size}`, 120, 60);
    doc.text(`Gill-Color : ${formValues.gill_color}`, 20, 70);
    doc.text(`Stalk-Shape : ${formValues.stalk_shape}`, 120, 70);
    doc.text(`Stalk-Root : ${formValues.stalk_root}`, 20, 80);
    doc.text(
      `Stalk-Surface-Above-Ring : ${formValues.stalk_surface_above_ring}`,
      120,
      80
    );
    doc.text(
      `Stalk-Surface-Below-Ring : ${formValues.stalk_surface_below_ring}`,
      20,
      90
    );
    doc.text(
      `Stalk-Color-Above-Ring : ${formValues.stalk_color_above_ring}`,
      120,
      90
    );
    doc.text(
      `Stalk-Color-Below-Ring : ${formValues.stalk_color_below_ring}`,
      20,
      100
    );
    doc.text(`Veil-Type : ${formValues.veil_type}`, 120, 100);
    doc.text(`Veil-Color : ${formValues.veil_color}`, 20, 110);
    doc.text(`Ring-Number : ${formValues.ring_number}`, 120, 110);
    doc.text(`Ring-Type : ${formValues.ring_type}`, 20, 120);
    doc.text(`Spore-Print-Color : ${formValues.spore_print_color}`, 120, 120);
    doc.text(`Population : ${formValues.population}`, 20, 130);
    doc.text(`Habitat : ${formValues.habitat}`, 120, 130);
    doc.setFontSize(15);
    doc.text(`Prediction Result : ${prediction}`, 30, 150);
    doc.save("Mushroom Prediction Result Report.pdf");
  };

  return (
    <AppModal open={open} onClose={onClose} width="40vw">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6">Prediction : {prediction}</Typography>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flex-end" mt="1rem">
          <Button variant="outlined" onClick={downloadReport}>
            Download Report
          </Button>
        </Grid>
      </Grid>
    </AppModal>
  );
};

export default Result;

import ControlPointIcon from "@mui/icons-material/ControlPoint";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import useFetch from "../../hooks/useFetch";
import { ClassificationResponse } from "../../types";
import Result from "./Result";

type Props = {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  title: string;
  description: string;
};

const PageBase = ({ method, url, description, title }: Props) => {
  const [isModelOpen, setIsModalOpen] = useState(false);
  const [isErrorMsgOpen, setIsErrorMsgOpen] = useState(false);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
    },
  });

  const { fetchHandler, isLoading, response, isError } =
    useFetch<ClassificationResponse>({
      url,
      method,
    });

  const toggleModalOpen = () => setIsModalOpen((p) => !p);
  const toggleErrMsgOpen = () => setIsErrorMsgOpen((p) => !p);

  const handleClick = () => {
    setIsErrorMsgOpen(false);
    fetchHandler({
      file: acceptedFiles[0],
      onSuccess: toggleModalOpen,
      onFail: toggleErrMsgOpen,
    });
  };

  const image = useMemo(
    () =>
      acceptedFiles[0] ? URL.createObjectURL(acceptedFiles[0]) : undefined,
    [acceptedFiles]
  );

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      <Typography textAlign="justify" mt="1rem">
        {description}
      </Typography>
      <Box
        width="100%"
        height="20vh"
        mt="2rem"
        border="3px dashed #E4E4E7"
        borderRadius="5px"
        bgcolor="#F5F5F5"
        color="#6D6D6D"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <ControlPointIcon
          fontSize="large"
          color="inherit"
          style={{ backgroundColor: "#F5F5F5" }}
        />
        <Typography bgcolor="inherit" textAlign="center">
          Drag 'n' drop some files here, or click to select files
        </Typography>

        {acceptedFiles.map((file) => (
          <Typography variant="caption" key={file.name}>
            {file.name?.slice(-20)}
          </Typography>
        ))}
      </Box>
      <Box display="flex" gap={2}>
        <Button
          onClick={handleClick}
          variant="outlined"
          sx={{
            mt: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
          disabled={acceptedFiles.length === 0 || isLoading}
        >
          Analyse
          {isLoading && <CircularProgress size={20} />}
        </Button>
        {response && !isError && (
          <Button
            onClick={toggleModalOpen}
            variant="outlined"
            sx={{
              mt: "2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            Show Analysed Result
          </Button>
        )}
      </Box>
      <Result
        open={isModelOpen && !isError}
        onClose={toggleModalOpen}
        image={image}
        response={response}
      />

      {isErrorMsgOpen && (
        <Alert
          severity="error"
          sx={{ width: "100%", mt: "2rem" }}
          onClose={toggleErrMsgOpen}
        >
          Error Occured
        </Alert>
      )}
    </Box>
  );
};

export default PageBase;

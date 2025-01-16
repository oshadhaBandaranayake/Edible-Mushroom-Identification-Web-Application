import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  width?: string;
};

const AppModal = ({ open, onClose, children, width = "60vw" }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style} width={width}>
          <Typography variant="h6" fontWeight="bold" mb="1rem">
            Result
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default AppModal;

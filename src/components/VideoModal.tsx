import { Box, Modal, SxProps } from "@mui/material";
import VideoPlayer from "./VideoPlayer";

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  // background: "",
  borderRadius: "0.5rem",
  // boxShadow: 24,
};

export default function VideoModal({
  open,
  url,
  handleClose,
}: {
  open: boolean;
  url: string;
  handleClose: () => void;
}) {
  return (
    <Modal component={Box} open={open} onClose={handleClose}>
      <Box sx={style}>
        {/* <IconButton
          sx={{ position: "absolute", top: 0, right: 0, background: "red" }}
        >
          <CloseIcon />
        </IconButton> */}
        <VideoPlayer url={url} />
      </Box>
    </Modal>
  );
}

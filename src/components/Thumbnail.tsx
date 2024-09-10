import { KeyframeInfo } from "@/types";
import { Box, Button } from "@mui/material";

export default function Thumbnail({
  info,
  handleClick,
}: {
  info: KeyframeInfo;
  handleClick: (url: string) => void;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "0.5rem",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        overflow: "hidden",
        padding: "0",
      }}
      component={Button}
      onClick={() => {
        handleClick(info.url);
      }}
    >
      <Box
        draggable={false}
        component='img'
        src={info.thumbnail}
        alt='thumbnail'
        sx={{ width: "100%", height: "100%" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "rgba(204,204,204,0.5)",
          color: "#000",
          padding: "0.15rem 0.5rem",
          borderRadius: "0.5rem",
          fontSize: "0.75rem",
        }}
      >
        {info.name}
      </Box>
    </Box>
  );
}

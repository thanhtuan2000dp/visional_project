import { Box } from "@mui/material";

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <Box
      component='video'
      width='100%'
      controls
      autoPlay
      sx={{
        borderRadius: "0.5rem",
        outline: "none",
        boxShadow: 24,
      }}
    >
      <source src={url} type='video/mp4' />
      Your browser does not support the video tag.
    </Box>
  );
}

import ListThumbnails from "@/components/ListThumbnails";
import VideoModal from "@/components/VideoModal";
import { KeyframeInfo } from "@/types";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  BaseSyntheticEvent,
  KeyboardEvent,
  KeyboardEventHandler,
  useState,
} from "react";

const listKeyframes: KeyframeInfo[] = [
  {
    name: "test 1",
    thumbnail:
      "https://viettelbariavungtau.vn/wp-content/uploads/2021/06/siet-chat-hoat-dong-livestream-tren-mang-xa-hoi.webp",
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
  {
    name: "test 2",
    thumbnail:
      "https://viettelbariavungtau.vn/wp-content/uploads/2021/06/siet-chat-hoat-dong-livestream-tren-mang-xa-hoi.webp",
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
  {
    name: "test 3",
    thumbnail:
      "https://viettelbariavungtau.vn/wp-content/uploads/2021/06/siet-chat-hoat-dong-livestream-tren-mang-xa-hoi.webp",
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
  {
    name: "test 4",
    thumbnail:
      "https://viettelbariavungtau.vn/wp-content/uploads/2021/06/siet-chat-hoat-dong-livestream-tren-mang-xa-hoi.webp",
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
  {
    name: "test 5",
    thumbnail:
      "https://viettelbariavungtau.vn/wp-content/uploads/2021/06/siet-chat-hoat-dong-livestream-tren-mang-xa-hoi.webp",
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
  {
    name: "test 6",
    thumbnail:
      "https://viettelbariavungtau.vn/wp-content/uploads/2021/06/siet-chat-hoat-dong-livestream-tren-mang-xa-hoi.webp",
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
  {
    name: "test 7",
    thumbnail:
      "https://viettelbariavungtau.vn/wp-content/uploads/2021/06/siet-chat-hoat-dong-livestream-tren-mang-xa-hoi.webp",
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
];

const listOptionPerLine = [
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: 10 },
];
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(10);
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string>("");
  const [query, setQuery] = useState("");
  const [itemsPerLine, setItemsPerLine] = useState(10);

  // ** Functions
  const handlePage = (_: unknown, page: number) => {
    setCurrentPage(page);
  };

  const toggleVideoModal = (value: boolean) => {
    setIsOpenVideo(value);
  };

  const selectVideo = (url: string) => {
    setSelectedVideo(url);
    toggleVideoModal(true);
  };

  const submitQuery = (e: KeyboardEvent | BaseSyntheticEvent) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      e.preventDefault();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5rem",
        padding: "1rem",
        width: "100vw",
        height: "100vh",
        // background: "rgba(254, 197, 230, 0.5)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "15rem",
        }}
      >
        <Typography
          sx={{ color: "#777474", fontWeight: 600, fontSize: "1.2rem" }}
        >
          Nội dung tìm kiếm
        </Typography>
        <TextField
          multiline
          rows={9}
          onKeyDown={(e) => {
            submitQuery(e);
          }}
          placeholder='Nhập nội dung tìm kiếm'
          sx={{ background: "#fff", borderRadius: "0.5rem", height: "30%" }}
        />
        <Button
          variant='contained'
          sx={{ alignSelf: "flex-end", width: "7rem" }}
          onClick={submitQuery}
        >
          Tìm kiếm
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5rem",
          border: "1px solid #bfaee3",
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <ListThumbnails
          listKeyframes={listKeyframes}
          handleClick={selectVideo}
          cols={itemsPerLine}
        />
        <Box
          sx={{
            position: "relative",
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              left: 0,
              gap: "0.5rem",
              alignItems: "center",
              color: "#000",
            }}
          >
            Số lượng
            <FormControl>
              <Select
                value={itemsPerLine}
                label='Age'
                onChange={(value) => {
                  setItemsPerLine(Number(value.target.value));
                }}
                sx={{
                  "& .MuiSelect-select": {
                    padding: "0.25rem 0.5rem",
                  },
                }}
              >
                {listOptionPerLine.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Pagination
            count={numOfPages}
            onChange={handlePage}
            color='primary'
          />
        </Box>
      </Box>

      {/* Modal */}
      <VideoModal
        open={isOpenVideo}
        url={selectedVideo}
        handleClose={() => {
          toggleVideoModal(false);
        }}
      />
    </Box>
  );
}

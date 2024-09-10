import { ImageList, ImageListItem } from "@mui/material";
import Thumbnail from "./Thumbnail";
import { KeyframeInfo } from "@/types";

export default function ListThumbnails({
  listKeyframes,
  handleClick,
  cols,
}: {
  listKeyframes: KeyframeInfo[];
  handleClick: (url: string) => void;
  cols: number;
}) {
  return (
    <ImageList
      sx={{ width: "100%", height: "fit-content", maxHeight: "100%" }}
      cols={cols}
      rowHeight={450 / cols}
    >
      {listKeyframes
        .concat(listKeyframes)
        // .concat(listKeyframes)
        // .concat(listKeyframes)
        // .concat(listKeyframes)
        // .concat(listKeyframes)
        // .concat(listKeyframes)
        // .concat(listKeyframes)
        .map((item) => (
          <ImageListItem
            key={item.name}
            sx={{
              "&:hover": { opacity: "0.8", transition: "ease-in-out 0.2s" },
            }}
          >
            <Thumbnail info={item} handleClick={handleClick} />
          </ImageListItem>
        ))}
    </ImageList>
  );
}

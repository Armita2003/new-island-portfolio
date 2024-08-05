import { Breakpoint } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useResponsive(query, key, start, end) {
    const theme = useTheme();

    const mediaUp = useMediaQuery(theme.breakpoints.up(key));

    const mediaDown = useMediaQuery(theme.breakpoints.down(key));

    const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

    if (query === "up") {
        return mediaUp;
    }

    if (query === "down") {
        return mediaDown;
    }

    if (query === "between") {
        return mediaBetween;
    }

    if (query === "only") {
        return mediaOnly;
    }
}
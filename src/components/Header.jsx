import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Button, Grid, InputAdornment } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "./ListPage/listPageSlice";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ClearIcon from "@mui/icons-material/Clear";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

export default function Header() {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams({});
    const { searchQuery } = useSelector((state) => state.data);
    const navigate = useNavigate();
    const value = searchParams.get("search");
    const inDetailsScreen = window.location.pathname.includes("/details")
        ? true
        : false;

    React.useEffect(() => {
        if (value) dispatch(setSearchQuery(value));
    }, []);

    return (
        <Box sx={{ flexGrow: 1, marginBottom: "100px" }}>
            <AppBar style={{ background: "#242424" }}>
                <Toolbar>
                    <Grid container>
                        <Grid
                            item
                            xs={inDetailsScreen ? 6 : 3}
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h6" component="div">
                                Movie Mania
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {!inDetailsScreen ? (
                                <Grid item justifyContent="center">
                                    {/* Content for the second grid */}
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            onChange={(e) => {
                                                setSearchParams({
                                                    search: e.target.value,
                                                });
                                                dispatch(
                                                    setSearchQuery(
                                                        e.target.value
                                                    )
                                                );
                                            }}
                                            endAdornment={
                                                <Button
                                                    onClick={() => {
                                                        setSearchParams("");
                                                        dispatch(
                                                            setSearchQuery("")
                                                        );
                                                    }}
                                                >
                                                    <InputAdornment position="start">
                                                        <ClearIcon />
                                                    </InputAdornment>
                                                </Button>
                                            }
                                            value={searchQuery}
                                            placeholder="Search Movies"
                                            inputProps={{
                                                "aria-label": "search",
                                            }}
                                        />
                                    </Search>
                                </Grid>
                            ) : (
                                <Grid
                                    item
                                    xs={12}
                                    display="flex"
                                    justifyContent="end"
                                >
                                    <Button
                                        onClick={() => {
                                            React.useCallback(() => {
                                                if (searchQuery)
                                                    navigate(
                                                        `/?search=${searchQuery}`
                                                    );
                                                else {
                                                    navigate(`/`);
                                                }
                                            }, []);
                                        }}
                                    >
                                        <HomeIcon />
                                    </Button>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

import React, { useEffect } from "react";
import "./detailspage.css";
import { Box, CardMedia, CircularProgress, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../BO/movies.BO";
import { useParams } from "react-router-dom";
import no_image from "../../assets/no_image.jpg";

export default function DetailsPage() {
    const { movieData, loading } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(getMovieById(id));
    }, []);

    return (
        <Grid>
            {!loading ? (
                <Grid container className="movie-details">
                    <Grid item className="background-image">
                        {/* Add your movie background image here */}
                        <img
                            sx={{ height: 550, width: "200px" }}
                            src={
                                "https://image.tmdb.org/t/p/w500" +
                                movieData.backdrop_path
                            }
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = no_image;
                            }}
                            title="green iguana"
                        />
                    </Grid>
                    <Grid item xs={12} className="movie-info">
                        <h1>{movieData.original_title}</h1>
                        <p>{movieData.release_date}</p>
                        <p>{movieData.overview}</p>
                    </Grid>
                </Grid>
            ) : (
                <Box
                    display="flex"
                    height={"80vh"}
                    alignItems="center"
                    justifyContent="center"
                >
                    <CircularProgress />{" "}
                </Box>
            )}
        </Grid>
    );
}

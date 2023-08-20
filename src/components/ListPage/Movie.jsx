import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import "./movie.css";
import { Grid, Rating } from "@mui/material";
import no_image from "../../assets/no_image.jpg";

function Movie({ title, img, description, rating }) {
    return (
        <Card className="custom-card">
            <img
                style={{ height: "140px", objectFit: "cover" }}
                src={"https://image.tmdb.org/t/p/w500" + img}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = no_image;
                }}
                title="green iguana"
            />
            <CardContent>
                <Grid
                    container
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <Grid item>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "1",
                                WebkitBoxOrient: "vertical",
                            }}
                        >
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Rating
                            style={{ fontSize: "1.2rem" }}
                            name="read-only"
                            value={rating / 2}
                            precision={0.5}
                            readOnly
                        />
                    </Grid>
                </Grid>
                <Grid>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                        }}
                    >
                        {description}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Movie;

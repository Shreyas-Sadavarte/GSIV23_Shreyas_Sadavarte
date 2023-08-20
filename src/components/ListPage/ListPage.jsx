import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { getUpcomingMovies } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress, Grid } from "@mui/material";
import Movie from "./Movie";
import { searchMovie } from "../../BO/movies.BO";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";
import "./movie.css";
import { setSearchResults } from "./listPageSlice";

let search = "";
function ListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, data, searchQuery, searchResults } = useSelector(
        (state) => state.data
    );
    const page = useRef(1);
    search = searchQuery;

    const useDebounce = (callback) => {
        const ref = useRef();

        useEffect(() => {
            ref.current = callback;
        }, [callback]);

        const debouncedCallback = useMemo(() => {
            const func = () => {
                ref.current?.();
            };

            return debounce(func, 500);
        }, []);

        return debouncedCallback;
    };

    const debouncedOnChange = useDebounce(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Add smooth scrolling behavior
        });
        dispatch(
            searchMovie({
                loadMore: false,
                searchQuery,
                page: page.current,
            })
        );
    });

    const debounce1 = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };

    const handleScroll = (e) => {
        // Load more items when the user reaches the bottom of the page
        if (!loading) {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            if (scrollTop + clientHeight >= (scrollHeight - 10)) {
                page.current = page.current + 1;
                if (search) {
                    dispatch(
                        searchMovie({
                            loadMore: true,
                            searchQuery: search,
                            page: page.current,
                        })
                    );
                } else {
                    dispatch(
                        getUpcomingMovies({
                            loadMore: true,
                            page: page.current,
                        })
                    );
                }
            }
        }
    };

    useEffect(() => {
        if (searchQuery) {
            search = searchQuery;
            page.current = 1;
            debouncedOnChange();
        } else {
            dispatch(setSearchResults([]));
            page.current = 1;
            dispatch(
                getUpcomingMovies({ loadMore: false, page: page.current })
            );
        }
        window.addEventListener("scroll", debounce1(handleScroll));

        return () => {
            // Remove the scroll event listener when the component unmounts
            window.removeEventListener("scroll", handleScroll);
        };
    }, [searchQuery]);

    return (
        <Grid
            container
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                alignContent: "center",
            }}
        >
            {(searchQuery ? searchResults : data).map((card, index) => (
                <Grid
                    onClick={() => {
                        navigate(`/details/${card.id}`);
                    }}
                    className="movie-card"
                    key={index}
                >
                    <Movie
                        rating={card.vote_average}
                        description={card.overview}
                        img={card.backdrop_path}
                        key={index} // Ensure each card has a unique key
                        title={card.title}
                        content={card.content}
                    />
                </Grid>
            ))}

            {loading && page.current != 1 && (
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        justifyItems: "center",
                    }}
                >
                    <CircularProgress />{" "}
                </Grid>
            )}
        </Grid>
    );
}

export default memo(ListPage);

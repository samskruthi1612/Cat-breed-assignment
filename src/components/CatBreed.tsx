import {
  Card,
  Box,
  Button,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter.tsx";
import React from "react";

interface CatImage {
  url: string;
  breeds: { name: string }[];
}

const CatBreed: React.FC = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const navigate = useNavigate();

  const handleAdopt = (cat: CatImage) => {
    console.log(cat);
    navigate("/about", { state: { selectedCat: cat } });
  };

  const filteredCatImages = catImages.filter(
    (cat) =>
      cat.breeds?.length > 0 &&
      cat.breeds[0].name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchCat = async () => {
      const url = `https://api.thecatapi.com/v1/images/search?limit=6&has_breeds=true&page=${page}`;
      const apiKey = process.env.REACT_APP_CAT_API_KEY;

      try {
        const response = await axios.get<CatImage[]>(url, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        setCatImages(response.data);
        setTotalPages(
          Math.ceil(Number(response.headers["pagination-count"]) / 6)
        );
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchCat();
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    setLoading(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box sx={{ flexGrow: 1, padding: "16px" }}>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Grid container spacing={2}>
        {filteredCatImages.map((cat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 2,
                textAlign: "center",
                backgroundColor: "background.paper",
                borderColor: "primary.main",
              }}
            >
              <img
                src={cat.url}
                alt={`Cat ${index + 1}`}
                style={{ width: "100%", height: "250px" }}
              />
              <Typography variant="h6">
                {cat.breeds?.length > 0 ? cat.breeds[0].name : "Unknown breed"}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ color: "white" }} 
                onClick={() => handleAdopt(cat)}
              >
                Adopt
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Stack
        spacing={2}
        sx={{ marginTop: 4, justifyContent: "center", display: "flex" }}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default CatBreed;

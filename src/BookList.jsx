import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
export function BookList() {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  const getBooks = () => {
    fetch("https://642dbbffbf8cbecdb40db560.mockapi.io/library", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setBook(data));
  };

  useEffect(() => {
    getBooks();
  }, []);
  const deletebook = async(id)=>{
await fetch(`https://642dbbffbf8cbecdb40db560.mockapi.io/library/${id}`,{
  method:"DELETE",
})
getBooks();
  };
  return (
    <div className="book-list">
      <h1>Availble books in Library</h1>
      <div className="detail-list">
        {book.map((data, index) => (
          <BookDetails
            data={data}
            key={index}
            deleteIcon={
              <IconButton onClick={() => deletebook(data.id)}
              aria-label="delete"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
            editIcon={
              <IconButton onClick={() => navigate(`/addbook/editbook/${data.id}`)}
              aria-label="delete"
                color="primary"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}

function BookDetails({ data, deleteIcon ,editIcon}) {
  return (
    <Paper className="book-detail" elevation={3}>
      <CardContent>
        <img className="img" src={data.imageLink} />
        <p>title:{data.title}</p>
        <p>author:{data.author}</p>
        <p>language:{data.language}</p>
        <p>country:{data.country}</p>
        <p>Year:{data.year}</p>
      </CardContent>
      <CardActions>{deleteIcon} {editIcon}</CardActions>
    </Paper>
  );
}

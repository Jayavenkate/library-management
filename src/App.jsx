import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AddBook } from "./AddBook";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { BookList } from "./BookList";
import { EditBook } from "./EditBook";
export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Library Management
          </Typography>

          <Button onClick={() => navigate("/booklist")} color="inherit">
            BooksList
          </Button>
          <Button onClick={() => navigate("/addbook")} color="inherit">
            Addbook
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/booklist" element={<BookList />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/addbook/editbook/:id" element={<EditBook />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return( 
  <div>
    <h1  className="home">Welcome to the Library😍</h1>
    </div>
    );
}

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Box, LinearProgress } from "@mui/material";

const Login = lazy(() => import("./Components/Login.tsx"));
const Register = lazy(() => import("./Components/Register.tsx"));
const Header = lazy(() => import("./Components/Header"));
const Posts = lazy(() => import("./Components/Posts/Posts.tsx"));
const Post = lazy(() => import("./Components/Post/Post.tsx"));
const CreatePost = lazy(() => import("./Components/CreatePost/CreatePost.tsx"));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Suspense
          fallback={
            <>
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            </>
          }
        >
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:postId" element={<Post />} />
            <Route path="/createpost" element={<CreatePost />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;

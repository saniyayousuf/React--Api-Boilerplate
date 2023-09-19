import { useEffect, useState } from "react";
import '../App.css' 
import { useNavigate, useParams } from "react-router-dom";
import { Get, Post, Put } from "../config/API-METHODS/api_methods";
import { Paper, TextField, TextareaAutosize, Typography } from "@mui/material";
import { Button } from "@chakra-ui/react";

export default function AddProject() {
  const [model, setModel] = useState<any>({});
  const baseApi = "https://jsonplaceholder.typicode.com/posts";
  const params = useParams();
  const navigate = useNavigate();
  const getPostById = () => {
    Get(`${baseApi}/${params.id}`)
      .then((res) => {
        console.log(res);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePost = () => {
    Put(`${baseApi}/${params.id}`, model)
      .then((res) => {
        console.log("Post Updated Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitPost = () => {
    model.userId = 11;
    Post(baseApi, model)
      .then((res) => {
        console.log("Post Added Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (params.id) {
      getPostById();
    }
  }, []);

  return (
    <>
      <div className="container">

        <Paper elevation={3} className="box">
          <h1  className="font-serif" >Add Project</h1>
          <form className="form">

          <TextField
              value={model.id}
              onChange={(e) => setModel({ ...model, UserID: e.target.value })}
              label="UserID "
              type="number"
              fullWidth
              margin="normal"
            />
            <TextField
              value={model.title}
              onChange={(e) => setModel({ ...model, title: e.target.value })}
              label="title"
              type="text"
              fullWidth
              margin="normal"
            />
           

            <TextareaAutosize
              value={model.body}
              onChange={(e) => setModel({ ...model, body: e.target.value })}
              minRows={2}
              maxRows={5}
              placeholder="Body"
              style={{ width: '100%', padding: '8px', marginTop: '12px', border: '1px solid #ccc' }}
            />

            <div>
              {params.id ? (
                <>
                  <div
                    style={{

                      display: 'flex',
                      justifyContent: "space-between",

                    }}
                  >
                    <Button sx={{ marginRight: 'auto', backgroundColor: '#0ea5e9' }} className='mt-3 py-2 px-5 rounded-full text-slate-50	font-semibold' variant="outlined" onClick={updatePost}>Update</Button><Button sx={{ marginLeft: 'auto', backgroundColor: '#0ea5e9' }} className='mt-3 py-2 px-5 rounded-full text-slate-50	font-semibold' variant="outlined" onClick={() => {
                      navigate("/");
                    }}>Go Back </Button>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{

                      display: 'flex',
                      justifyContent: "space-between",

                    }}
                  >
                    <Button sx={{ marginRight: 'auto' , backgroundColor: '#0ea5e9',}} className='mt-3 py-2 px-5 rounded-full text-slate-50	font-semibold' variant="outlined" onClick={submitPost}>Submit</Button><Button sx={{ marginLeft: 'auto', backgroundColor: '#0ea5e9' }} className='font-semibold text-slate-50	 mt-3 py-2 px-5 rounded-full ' variant="outlined" onClick={() => {
                      navigate("/");
                    }}>Go Back </Button>
                  </div>
                </>
              )}
            </div>
          </form>
        </Paper>
      </div>
    </>
  );
}
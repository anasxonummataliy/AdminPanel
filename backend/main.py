from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    email : str
    password : str

@app.post('/login')
async def login(user : User):
    email = "anasxon"
    password = "1234"

    if (user.email == email and user.password == password):
        return {"message" : "True"}
    
    return {"message" : "False"}

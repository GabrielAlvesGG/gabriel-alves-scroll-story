from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr, Field
from fastapi.middleware.cors import CORSMiddleware
from services.email_service import EmailService

app = FastAPI()

# Permite requisições do frontend local
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ajuste para seu domínio em produção
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str = Field(..., min_length=2)
    email: EmailStr
    message: str = Field(..., min_length=5)

@app.post("/send-email")
async def send_email(form: ContactForm):
    try:
        EmailService.send_contact_email(form.name, form.email, form.message)
        return {"detail": "Mensagem enviada com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

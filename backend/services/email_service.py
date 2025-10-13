import smtplib
from email.message import EmailMessage
import os

class EmailService:
    @staticmethod
    def send_contact_email(name: str, email: str, message: str):
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        smtp_user = "ggdevalves@gmail.com"  # <-- put your Gmail address here
        smtp_password = "tpjb oeik kpcr pbep"  # <-- put your Gmail app password here
        to_email = smtp_user  # or another recipient

        msg = EmailMessage()
        msg["Subject"] = f"Novo contato de {name}"
        msg["From"] = smtp_user
        msg["To"] = to_email
        msg.set_content(
            f"Nome: {name}\nEmail: {email}\nMensagem:\n{message}"
        )

        try:
            print(f"Trying to send email from {smtp_user} to {to_email} via {smtp_server}:{smtp_port}")
            with smtplib.SMTP(smtp_server, smtp_port) as server:
                server.starttls()
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
        except Exception as e:
            print(f"Error sending email: {str(e)}")  # Print error to console
            raise Exception(f"Erro ao enviar e-mail: {str(e)}")

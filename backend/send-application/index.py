import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта турагентства 'Пик приключений' на почту менеджера."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body", "{}"))
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    tour = body.get("tour", "").strip()
    message = body.get("message", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
        }

    tour_names = {
        "elbrus": "Эльбрус: Покорение вершины",
        "altai": "Алтай: Рафтинг по Катуни",
        "baikal": "Байкал: Зимнее дайвинг",
        "kamchatka": "Камчатка: Вулканы с воздуха",
        "caucasus": "Кавказ: Параглайдинг",
    }
    tour_label = tour_names.get(tour, tour or "Не указан")

    smtp_user = "mari.romanova.2006@inbox.ru"
    smtp_password = os.environ["SMTP_PASSWORD"]
    recipient = "mari.romanova.2006@inbox.ru"

    html_body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a0a2e; color: #ffffff; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #4a0080, #2d0050); padding: 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 28px; color: #ff7800;">🏔️ Пик приключений</h1>
        <p style="margin: 8px 0 0; color: rgba(255,255,255,0.7); font-size: 14px;">Новая заявка с сайта</p>
      </div>
      <div style="padding: 30px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); font-size: 13px; width: 40%;">👤 Имя</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); font-weight: bold; font-size: 15px;">{name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); font-size: 13px;">📞 Телефон</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); font-weight: bold; font-size: 15px; color: #ff7800;">{phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); font-size: 13px;">🗺️ Тур</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); font-weight: bold; font-size: 15px;">{tour_label}</td>
          </tr>
          {"<tr><td style='padding: 12px 0; color: rgba(255,255,255,0.5); font-size: 13px;'>💬 Сообщение</td><td style='padding: 12px 0; font-size: 14px; color: rgba(255,255,255,0.8);'>" + message + "</td></tr>" if message else ""}
        </table>
      </div>
      <div style="background: rgba(255,120,0,0.15); padding: 20px 30px; text-align: center; border-top: 1px solid rgba(255,120,0,0.3);">
        <p style="margin: 0; font-size: 13px; color: rgba(255,255,255,0.5);">Свяжитесь с клиентом в течение 30 минут</p>
      </div>
    </div>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"🏔️ Новая заявка: {name} — {tour_label}"
    msg["From"] = smtp_user
    msg["To"] = recipient
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    with smtplib.SMTP_SSL("smtp.inbox.ru", 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, recipient, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"success": True}, ensure_ascii=False),
    }

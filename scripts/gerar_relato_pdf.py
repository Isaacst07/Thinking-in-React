import pathlib

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer

BASE_DIR = pathlib.Path(__file__).resolve().parent.parent
TXT_PATH = BASE_DIR / "relato_aprendizado.txt"
PDF_PATH = BASE_DIR / "relato_aprendizado.pdf"

text = TXT_PATH.read_text(encoding="utf-8")
lines = [line.strip() for line in text.strip().split("\n") if line.strip()]
title = lines[0]
paragraphs = lines[1:]

styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    "TitleCustom",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=16,
    spaceAfter=18,
)
body_style = ParagraphStyle(
    "BodyCustom",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=10.5,
    leading=14.5,
    spaceAfter=9,
    alignment=4,
)

doc = SimpleDocTemplate(
    str(PDF_PATH),
    pagesize=A4,
    leftMargin=2.2 * cm,
    rightMargin=2.2 * cm,
    topMargin=2 * cm,
    bottomMargin=2 * cm,
)

story = [Paragraph(title, title_style), Spacer(1, 6)]
for paragraph in paragraphs:
    story.append(Paragraph(paragraph, body_style))

doc.build(story)
print(f"PDF gerado em: {PDF_PATH}")

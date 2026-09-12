"""Generate Ryan Guthrie's public, ATS-friendly resume PDF."""

from __future__ import annotations

import json
import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src" / "content" / "resume" / "experience.json"
OUTPUT_PATH = ROOT / "output" / "pdf" / "Ryan_Guthrie_Resume.pdf"
PUBLIC_PATH = ROOT / "public" / "assets" / "Ryan_Guthrie_Resume.pdf"

PAGE_WIDTH, PAGE_HEIGHT = letter
LEFT_MARGIN = 0.62 * inch
RIGHT_MARGIN = 0.62 * inch
TOP_MARGIN = 0.50 * inch
BOTTOM_MARGIN = 0.50 * inch

INK = colors.HexColor("#14232B")
MUTED = colors.HexColor("#51616A")
ACCENT = colors.HexColor("#16786F")
RULE = colors.HexColor("#C9D6D8")
LIGHT = colors.HexColor("#F0F6F5")
def ascii_punctuation(value):
    if isinstance(value, str):
        return (
            value.replace("\u2011", "-")
            .replace("\u2013", "-")
            .replace("\u2014", "-")
        )
    if isinstance(value, list):
        return [ascii_punctuation(item) for item in value]
    if isinstance(value, dict):
        return {key: ascii_punctuation(item) for key, item in value.items()}
    return value


def load_resume() -> dict:
    with DATA_PATH.open("r", encoding="utf-8") as stream:
        return ascii_punctuation(json.load(stream))


def build_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=23,
            leading=25,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=ACCENT,
            alignment=TA_CENTER,
            spaceAfter=5,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=7,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=ACCENT,
            spaceBefore=6,
            spaceAfter=4,
            borderWidth=0,
            borderPadding=0,
            keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=12.3,
            textColor=INK,
            spaceAfter=3,
        ),
        "skills": ParagraphStyle(
            "Skills",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=12,
            textColor=INK,
            backColor=LIGHT,
            borderColor=LIGHT,
            borderWidth=0.5,
            borderPadding=(5, 7, 5, 7),
            spaceAfter=5,
        ),
        "job_title": ParagraphStyle(
            "JobTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.8,
            leading=12,
            textColor=INK,
            keepWithNext=True,
        ),
        "job_meta": ParagraphStyle(
            "JobMeta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.4,
            leading=10.5,
            textColor=MUTED,
            spaceAfter=2.5,
            keepWithNext=True,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.75,
            leading=11.5,
            textColor=INK,
            leftIndent=10,
            firstLineIndent=-7,
            bulletIndent=0,
            spaceAfter=1.5,
        ),
        "project": ParagraphStyle(
            "Project",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=11.5,
            textColor=INK,
            leftIndent=10,
            firstLineIndent=-7,
            bulletIndent=0,
            spaceAfter=2,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11.3,
            textColor=INK,
            spaceAfter=2,
        ),
    }


def add_page_chrome(canvas, doc) -> None:
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.55)
    canvas.line(
        LEFT_MARGIN,
        BOTTOM_MARGIN - 0.05 * inch,
        PAGE_WIDTH - RIGHT_MARGIN,
        BOTTOM_MARGIN - 0.05 * inch,
    )
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(LEFT_MARGIN, BOTTOM_MARGIN - 0.23 * inch, "Ryan Guthrie")
    page_label = f"Page {doc.page}"
    canvas.drawRightString(
        PAGE_WIDTH - RIGHT_MARGIN,
        BOTTOM_MARGIN - 0.23 * inch,
        page_label,
    )
    canvas.restoreState()


def section_heading(label: str, styles: dict[str, ParagraphStyle]):
    return [
        Spacer(1, 2),
        Paragraph(label.upper(), styles["section"]),
        HRFlowable(
            width="100%",
            thickness=0.65,
            color=RULE,
            spaceBefore=0,
            spaceAfter=4,
        ),
    ]


def job_block(job: dict, styles: dict[str, ParagraphStyle]):
    role = job["role"]
    company = job["company"]
    meta = f'{job["period"]} | {job["location"]}'
    items = [
        Paragraph(f"{role} | <font color='{ACCENT.hexval()}'>{company}</font>", styles["job_title"]),
        Paragraph(meta, styles["job_meta"]),
    ]
    items.extend(
        Paragraph(f"- {highlight}", styles["bullet"])
        for highlight in job["highlights"]
    )
    items.append(Spacer(1, 4))
    return KeepTogether(items)


def build_pdf(resume: dict) -> None:
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_PATH.parent.mkdir(parents=True, exist_ok=True)

    doc = BaseDocTemplate(
        str(OUTPUT_PATH),
        pagesize=letter,
        leftMargin=LEFT_MARGIN,
        rightMargin=RIGHT_MARGIN,
        topMargin=TOP_MARGIN,
        bottomMargin=BOTTOM_MARGIN,
        title="Ryan Guthrie - Senior Software Engineer and Software Architect",
        author="Ryan Guthrie",
        subject="Professional resume",
        creator="Ryan Guthrie",
    )
    frame = Frame(
        LEFT_MARGIN,
        BOTTOM_MARGIN,
        PAGE_WIDTH - LEFT_MARGIN - RIGHT_MARGIN,
        PAGE_HEIGHT - TOP_MARGIN - BOTTOM_MARGIN,
        id="resume",
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0.18 * inch,
    )
    doc.addPageTemplates(
        [PageTemplate(id="resume", frames=[frame], onPage=add_page_chrome)]
    )

    styles = build_styles()
    jobs = {job["company"]: job for job in resume["experience"]}
    story = [
        Paragraph("Ryan Guthrie", styles["name"]),
        Paragraph("Senior Software Engineer | Software Architect", styles["headline"]),
        Paragraph(
            "Eugene, Oregon (Remote) &nbsp; | &nbsp; "
            '<link href="mailto:ryan@ryanguthrie.com" color="#51616A">'
            "ryan@ryanguthrie.com</link> &nbsp; | &nbsp; "
            '<link href="tel:+15413577487" color="#51616A">+1 541 357 7487</link><br/>'
            '<link href="https://www.ryanguthrie.com" color="#51616A">'
            "ryanguthrie.com</link> &nbsp; | &nbsp; "
            '<link href="https://www.linkedin.com/in/ryanguthrie/" color="#51616A">'
            "linkedin.com/in/ryanguthrie</link>",
            styles["contact"],
        ),
    ]

    story.extend(section_heading("Professional summary", styles))
    story.append(Paragraph(resume["summary"], styles["body"]))

    story.extend(section_heading("Core expertise", styles))
    story.append(
        Paragraph(
            "Software and solution architecture &nbsp; | &nbsp; Distributed backend systems "
            "&nbsp; | &nbsp; TypeScript, JavaScript, Node.js, Go, Python &nbsp; | &nbsp; "
            "AWS and Cloudflare &nbsp; | &nbsp; PostgreSQL and MongoDB &nbsp; | &nbsp; "
            "Linux operations and security &nbsp; | &nbsp; CI/CD and developer tooling "
            "&nbsp; | &nbsp; Cross-functional technical leadership",
            styles["skills"],
        )
    )

    story.extend(section_heading("Professional experience", styles))
    story.extend(
        [
            job_block(jobs["Earnest"], styles),
            job_block(jobs["Wizeline"], styles),
            job_block(jobs["ryanguthrie.com"], styles),
            PageBreak(),
            *section_heading("Professional experience, continued", styles),
            job_block(jobs["Paybook"], styles),
            job_block(jobs["New World Brands, INC"], styles),
            job_block(jobs["TouchSupport"], styles),
        ]
    )

    story.extend(section_heading("Selected independent work", styles))
    story.extend(
        [
            Paragraph(
                "- <b>Liaison:</b> Designed and built a working-alpha product discovery "
                "workspace that separates confirmed facts from proposals and keeps AI output "
                "behind explicit human review and approval gates.",
                styles["project"],
            ),
            Paragraph(
                "- <b>Ryan-OS:</b> Created a reusable platform for project foundations, "
                "testing, automation, and cloud delivery across independent products.",
                styles["project"],
            ),
        ]
    )

    story.extend(section_heading("Additional details", styles))
    story.extend(
        [
            Paragraph(
                "<b>Working range:</b> Astro, Next.js, React, Express, Docker, GraphQL, "
                "Supabase, HTML5 Canvas, WebGL, Bash, PowerShell, PHP, and Perl.",
                styles["small"],
            ),
            Paragraph(
                "<b>Languages:</b> English (Native / Bilingual) | "
                "Spanish (Professional Working)",
                styles["small"],
            ),
        ]
    )

    doc.build(story)
    shutil.copyfile(OUTPUT_PATH, PUBLIC_PATH)


if __name__ == "__main__":
    build_pdf(load_resume())

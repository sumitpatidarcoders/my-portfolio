#!/usr/bin/env python3
"""
Generate a professional PDF resume for Sumit Patidar
"""

from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# Register fonts
pdfmetrics.registerFont(TTFont('Times New Roman', '/usr/share/fonts/truetype/english/Times-New-Roman.ttf'))
registerFontFamily('Times New Roman', normal='Times New Roman', bold='Times New Roman')

# Create the PDF
output_path = '/home/z/my-project/public/resume/Sumit_Patidar_Resume.pdf'

doc = SimpleDocTemplate(
    output_path,
    pagesize=A4,
    rightMargin=1.5*cm,
    leftMargin=1.5*cm,
    topMargin=1.5*cm,
    bottomMargin=1.5*cm,
    title='Sumit_Patidar_Resume',
    author='Z.ai',
    creator='Z.ai',
    subject='Professional Resume - Sumit Patidar - Full Stack Developer'
)

# Define styles
styles = getSampleStyleSheet()

# Custom styles
name_style = ParagraphStyle(
    'NameStyle',
    fontName='Times New Roman',
    fontSize=24,
    leading=28,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#1a1a2e'),
    spaceAfter=4
)

title_style = ParagraphStyle(
    'TitleStyle',
    fontName='Times New Roman',
    fontSize=14,
    leading=18,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#6b21a8'),
    spaceAfter=8
)

contact_style = ParagraphStyle(
    'ContactStyle',
    fontName='Times New Roman',
    fontSize=10,
    leading=14,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#666666'),
    spaceAfter=16
)

section_header_style = ParagraphStyle(
    'SectionHeader',
    fontName='Times New Roman',
    fontSize=13,
    leading=16,
    textColor=colors.HexColor('#6b21a8'),
    spaceBefore=12,
    spaceAfter=8
)

body_style = ParagraphStyle(
    'BodyStyle',
    fontName='Times New Roman',
    fontSize=10,
    leading=14,
    alignment=TA_JUSTIFY,
    textColor=colors.HexColor('#333333'),
    spaceAfter=6
)

bullet_style = ParagraphStyle(
    'BulletStyle',
    fontName='Times New Roman',
    fontSize=10,
    leading=14,
    leftIndent=20,
    bulletIndent=10,
    textColor=colors.HexColor('#333333'),
    spaceAfter=4
)

skill_header_style = ParagraphStyle(
    'SkillHeader',
    fontName='Times New Roman',
    fontSize=10,
    leading=14,
    textColor=colors.HexColor('#6b21a8'),
    spaceAfter=4
)

# Build content
story = []

# Header - Name
story.append(Paragraph('<b>Sumit Patidar</b>', name_style))

# Title
story.append(Paragraph('Full Stack Developer', title_style))

# Contact Info
contact_info = 'Email: sumitpatidar@email.com | Phone: +91 9876543210 | Location: Madhya Pradesh, India'
story.append(Paragraph(contact_info, contact_style))

# Social Links
social_links = 'GitHub: github.com/sumitpatidar | LinkedIn: linkedin.com/in/sumitpatidar'
story.append(Paragraph(social_links, contact_style))

# Divider
story.append(HRFlowable(width='100%', thickness=1, color=colors.HexColor('#6b21a8'), spaceAfter=12))

# Professional Summary
story.append(Paragraph('<b>PROFESSIONAL SUMMARY</b>', section_header_style))
story.append(HRFlowable(width='100%', thickness=0.5, color=colors.HexColor('#e0e0e0'), spaceAfter=8))

summary_text = """A passionate and dedicated Full Stack Developer with expertise in building modern, responsive, and 
scalable web applications. Proficient in front-end technologies including React.js, HTML, CSS, and Bootstrap, 
with foundational knowledge of back-end development using Node.js. Strong foundation in programming languages 
C and C++, with excellent problem-solving skills and attention to detail. Committed to writing clean, maintainable 
code and creating exceptional user experiences. Eager to contribute to innovative projects and continuously 
expand technical skills in a dynamic development environment."""
story.append(Paragraph(summary_text, body_style))

# Technical Skills
story.append(Spacer(1, 8))
story.append(Paragraph('<b>TECHNICAL SKILLS</b>', section_header_style))
story.append(HRFlowable(width='100%', thickness=0.5, color=colors.HexColor('#e0e0e0'), spaceAfter=8))

# Skills table
skills_data = [
    [Paragraph('<b>Frontend Development</b>', skill_header_style), 
     Paragraph('React.js (60%), HTML (80%), CSS (70%), Bootstrap (60%)', body_style)],
    [Paragraph('<b>Programming Languages</b>', skill_header_style), 
     Paragraph('C (90%), C++ (92%)', body_style)],
    [Paragraph('<b>Backend Development</b>', skill_header_style), 
     Paragraph('Node.js (40%)', body_style)],
    [Paragraph('<b>Database & Tools</b>', skill_header_style), 
     Paragraph('MySQL (30%), XAMPP Server (90%)', body_style)],
    [Paragraph('<b>Other Skills</b>', skill_header_style), 
     Paragraph('Responsive Design, Git Version Control, REST APIs, Problem Solving', body_style)],
]

skills_table = Table(skills_data, colWidths=[4*cm, 12*cm])
skills_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 2),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
]))
story.append(skills_table)

# Projects
story.append(Spacer(1, 8))
story.append(Paragraph('<b>PROJECTS</b>', section_header_style))
story.append(HRFlowable(width='100%', thickness=0.5, color=colors.HexColor('#e0e0e0'), spaceAfter=8))

# Project 1
story.append(Paragraph('<b>E-Commerce Platform</b> | Full Stack Project', body_style))
story.append(Paragraph('Technologies: React.js, Node.js, MongoDB, Express, Stripe', bullet_style))
story.append(Paragraph('• Developed a full-featured e-commerce platform with product catalog, shopping cart, user authentication, and secure payment integration.', bullet_style))
story.append(Paragraph('• Implemented responsive design ensuring optimal user experience across all devices.', bullet_style))

# Project 2
story.append(Spacer(1, 6))
story.append(Paragraph('<b>Task Management Application</b> | Full Stack Project', body_style))
story.append(Paragraph('Technologies: React.js, Redux, Node.js, Socket.io, MongoDB', bullet_style))
story.append(Paragraph('• Built a collaborative task management app with drag-and-drop functionality and real-time updates.', bullet_style))
story.append(Paragraph('• Designed intuitive UI with progress tracking and team collaboration features.', bullet_style))

# Project 3
story.append(Spacer(1, 6))
story.append(Paragraph('<b>Weather Dashboard</b> | Frontend Project', body_style))
story.append(Paragraph('Technologies: React.js, OpenWeather API, Chart.js, Tailwind CSS', bullet_style))
story.append(Paragraph('• Created a beautiful weather application providing real-time weather data and forecasts.', bullet_style))
story.append(Paragraph('• Integrated location-based updates and interactive data visualization charts.', bullet_style))

# Education
story.append(Spacer(1, 8))
story.append(Paragraph('<b>EDUCATION</b>', section_header_style))
story.append(HRFlowable(width='100%', thickness=0.5, color=colors.HexColor('#e0e0e0'), spaceAfter=8))

education_data = [
    [Paragraph('<b>Higher Secondary Certificate (12th)</b>', body_style), Paragraph('MP Board | 2022', body_style)],
    [Paragraph('<b>High School Certificate (10th)</b>', body_style), Paragraph('MP Board | 2020', body_style)],
]

edu_table = Table(education_data, colWidths=[10*cm, 6*cm])
edu_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('ALIGN', (1, 0), (1, -1), 'RIGHT'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 2),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
]))
story.append(edu_table)

# Training & Certifications
story.append(Spacer(1, 8))
story.append(Paragraph('<b>TRAINING & CERTIFICATIONS</b>', section_header_style))
story.append(HRFlowable(width='100%', thickness=0.5, color=colors.HexColor('#e0e0e0'), spaceAfter=8))

story.append(Paragraph('<b>Web Development Bootcamp</b> | Online Learning Platform', body_style))
story.append(Paragraph('• Completed comprehensive training in HTML, CSS, JavaScript, React.js, and Node.js with hands-on projects.', bullet_style))

story.append(Spacer(1, 4))
story.append(Paragraph('<b>C & C++ Programming</b> | Local Training Institute', body_style))
story.append(Paragraph('• In-depth training in C and C++ programming languages covering data structures and algorithms.', bullet_style))

# Interests
story.append(Spacer(1, 8))
story.append(Paragraph('<b>INTERESTS</b>', section_header_style))
story.append(HRFlowable(width='100%', thickness=0.5, color=colors.HexColor('#e0e0e0'), spaceAfter=8))

interests = 'Open Source Contribution, Learning New Technologies, Problem Solving, Web Development, Coding Challenges'
story.append(Paragraph(interests, body_style))

# Build the PDF
doc.build(story)
print(f"Resume generated successfully: {output_path}")

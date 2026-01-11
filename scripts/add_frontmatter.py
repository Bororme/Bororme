import os
import re
import random

articles_dir = r"c:\Users\peerc\Desktop\Bororme\content\articles"
images_dir = r"c:\Users\peerc\Desktop\Bororme\public\images\baihua-temple"

def get_images():
    if not os.path.exists(images_dir):
        return []
    return [f for f in os.listdir(images_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]

def process_file(filename, image_file):
    path = os.path.join(articles_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split frontmatter if exists
    title = filename.replace('.md', '').replace('_', ' ').title()
    body = content
    
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            frontmatter_content = parts[1]
            body = parts[2]
            # Try to extract existing title
            t_match = re.search(r'title: "(.*)"', frontmatter_content)
            if t_match:
                title = t_match.group(1)

    lines = body.split('\n')
    
    # Extract description (first paragraph)
    description = ""
    for line in lines:
        l = line.strip()
        if l and not l.startswith('#') and not l.startswith('*') and not l.startswith('>') and not l.startswith('---'):
             description = l
             break
    if len(description) > 160:
        description = description[:157] + "..."
    if not description:
        description = "Read more about this topic..."

    # Date
    date = "2025-01-11" 

    # Image path: /images/baihua-temple/filename
    image_path = f"/images/baihua-temple/{image_file}" if image_file else ""

    # Prepare frontmatter
    frontmatter = f"""---
title: "{title}"
date: "{date}"
description: "{description.replace('"', '\\"')}"
coverImage: "{image_path}"
---
"""
    new_content = frontmatter + body.strip()
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Processed {filename} with image {image_file}")

images = get_images()
if not os.path.exists(articles_dir):
    print(f"Directory not found: {articles_dir}")
else:
    files = [f for f in os.listdir(articles_dir) if f.endswith(".md")]
    for i, filename in enumerate(files):
        # assign image sequentially loop
        img = images[i % len(images)] if images else None
        process_file(filename, img)

import shutil
import os

src = '/home/reshma/.gemini/antigravity/brain/a5a6c9eb-194c-4738-88c3-215e51abe183/django_rest_framework_banner_1778868513115.png'
dest = '/home/reshma/RESHMA_PROFILE/profile/ReshmaAbdulRazack.github.io/assets/img/projects/django-rest-framework.png'

if os.path.exists(src):
    shutil.copy2(src, dest)
    print(f"Copied django-rest-framework banner successfully.")
else:
    print(f"Source file not found: {src}")

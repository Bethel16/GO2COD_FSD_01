from django.contrib import admin
from .models import Post , Profile , Category, BlogImage# Import your model here

# Register your models here
admin.site.register(Post)
admin.site.register(Profile)
admin.site.register(Category)
admin.site.register(BlogImage)
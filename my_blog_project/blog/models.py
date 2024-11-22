from django.contrib.auth.models import User
from django.db import models

# Profile Model
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    bio = models.TextField(blank=True, null=True)
    profile_image = models.ImageField(upload_to="profile_images/", blank=True, null=True)
    website = models.URLField(max_length=200, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"


# Category Model for Blog Posts
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name





# BlogPost Model
class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts",null=True,blank=True)
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True,null=True)
    categories = models.ManyToManyField(Category, blank=True, related_name="posts")
    featured_image = models.ImageField(upload_to="blog_images/", blank=True, null=True)

    def __str__(self):
        return self.title


    

# BlogImage Model for Multiple Images
class BlogImage(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="blog_images/")

    def __str__(self):
        return f"Image for {self.post.title}"

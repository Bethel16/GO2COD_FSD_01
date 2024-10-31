from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')  # reverse chronological
    serializer_class = PostSerializer

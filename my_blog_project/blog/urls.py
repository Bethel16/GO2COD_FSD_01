from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, UserPostViewSet , register_view, login_view , get_csrf_token , user_profile , logout_view 
from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')
router.register(r'user-posts', UserPostViewSet, basename='user-posts')


urlpatterns = [
    path('', include(router.urls)),
    path('register/', register_view, name='register'),
    path('login/', login_view, name='login'),
    path('csrf-token/', get_csrf_token, name='csrf-token'),
    path('profile/', user_profile, name='user_profile'),
    path('logout/', logout_view, name='logout'),
  

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
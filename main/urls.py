from django.contrib import admin
from django.urls import path
from . import views


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import MyTokenObtainPairView

urlpatterns = [
    path('rooms/',views.get_rooms,name="rooms"),
    path('topics/',views.get_topics,name="topics"),
    path('messages/',views.get_messages,name="messages"),
    path('users/',views.get_users,name="users"),
    path('create_room/',views.create_room),
    path('create_topic/',views.create_topic),
    path('create_message/',views.create_message),
    path('create_user/',views.create_user),
    path('get_room/<str:pk>/',views.get_room),
    path('get_room_participants/<str:pk>/',views.get_room_participants),
    path('get_topic/<str:pk>/',views.get_topic),
    path('get_message/<str:pk>/',views.get_message),
    path('get_user/<str:pk>/',views.get_user),
    path('get_profile/<str:pk>/',views.get_profile),
    path('update_room/<str:pk>/',views.update_room),
    path('update_topic/<str:pk>/',views.update_topic),
    path('update_message/<str:pk>/',views.update_message),
    path('update_user/<str:pk>/',views.update_user),
    path('delete_room/<str:pk>/',views.delete_room),
    path('delete_topic/<str:pk>/',views.delete_topic),
    path('delete_message/<str:pk>/',views.delete_message),
    path('delete_user/<str:pk>/',views.delete_user),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]
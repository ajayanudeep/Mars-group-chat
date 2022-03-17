from django.contrib import admin
from .models import Room
from .models import Message,Topic,Profile
# Register your models here.

admin.site.register(Room)
admin.site.register(Message)
admin.site.register(Topic)
admin.site.register(Profile)

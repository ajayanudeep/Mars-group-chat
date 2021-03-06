from distutils.command.upload import upload
from email.mime import image
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Topic(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    bio = models.TextField(max_length=300,blank=True)
    profile_pic = models.ImageField(null = True)

class Room(models.Model):
    host = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    topic = models.ForeignKey(Topic,on_delete=models.CASCADE,null=True)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True,null=True)
    participants = models.ManyToManyField(User,related_name="participants",blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.name


class Message(models.Model):
    messager = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    room_in = models.ForeignKey(Room,on_delete=models.CASCADE)
    body = models.TextField(blank=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.body
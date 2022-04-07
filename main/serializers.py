from dataclasses import field
from django.contrib.auth.models import User
from rest_framework import serializers
from main.models import Profile, Room, Topic,Message

class RoomSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(read_only=True,format="%d-%m-%Y %H:%M:%S")
    updated = serializers.DateTimeField(read_only=True,format="%d-%m-%Y %H:%M:%S")
    host = serializers.SerializerMethodField(source='get_host')
    topic = serializers.SerializerMethodField(source='get_topic')
    class Meta:
        model = Room
        fields = ['id','host','topic','name','description','created','updated']
    
    def get_host(self, obj):
        return obj.host.username
    def get_topic(self, obj):
        return obj.topic.name
class RoomCreateSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(read_only=True,format="%d-%m-%Y %H:%M:%S")
    updated = serializers.DateTimeField(read_only=True,format="%d-%m-%Y %H:%M:%S")

    class Meta:
        model = Room
        fields = ['id','host','topic','name','description','created','updated']
class RoomParticipantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Room
        fields = ['participants']
    

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(read_only=True,format="%d-%m-%Y %H:%M:%S")
    updated = serializers.DateTimeField(read_only=True,format="%d-%m-%Y %H:%M:%S")
    messager = serializers.SerializerMethodField()
    class Meta:
        model = Message
        fields = ['id','body','created','updated','messager','room_in']

    def get_messager(self,obj):
        return obj.messager.username
class MessageCreateSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(read_only=True,format="%d-%m-%Y %H:%M:%S")
    updated = serializers.DateTimeField(read_only=True,format="%d-%m-%Y %H:%M:%S")
    class Meta:
        model = Message
        fields = ['id','body','created','updated','messager','room_in']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    profile_pic = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = ['user','bio','profile_pic']

    def get_profile_pic(self,obj):
        return obj.profile_pic.url
class ProfileCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
from dataclasses import field
from django.contrib.auth.models import User
from rest_framework import serializers
from main.models import Room, Topic,Message

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

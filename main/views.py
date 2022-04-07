import re
from .forms import UserRegistrationForm
from .models import Profile, Room, Topic, Message
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import ProfileCreateSerializer, ProfileSerializer, RoomParticipantSerializer, RoomSerializer,RoomCreateSerializer,TopicSerializer,MessageSerializer,MessageCreateSerializer,UserSerializer
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def get_rooms(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms,many=True)
    return Response(serializer.data)
@api_view(['GET'])
def get_topics(request):
    topics = Topic.objects.all()
    serializer = TopicSerializer(topics,many=True)
    return Response(serializer.data)
@api_view(['GET'])
def get_messages(request):
    messages = Message.objects.all()
    serializer = MessageSerializer(messages,many=True)
    return Response(serializer.data)
@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users,many=True)
    return Response(serializer.data)



@api_view(['GET'])
def get_room(request,pk):
    room = Room.objects.get(id=pk)
    messages = room.message_set.all()
    serializer = MessageSerializer(messages,many=True)
    return Response(serializer.data)
@api_view(['GET'])
def get_message(request,pk):
    msg = Message.objects.get(id=pk)
    serializer = MessageSerializer(msg)
    return Response(serializer.data)
@api_view(['GET'])
def get_topic(request,pk):
    topic = Topic.objects.get(id=pk)
    serializer = TopicSerializer(topic)
    return Response(serializer.data)
@api_view(['GET'])
def get_user(request,pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user)
    return Response(serializer.data)
@api_view(['GET'])
def get_profile(request,pk):
    profile = Profile.objects.get(id=pk)
    serializer = ProfileSerializer(profile)
    return Response(serializer.data)
@api_view(['GET'])
def get_room_participants(request,pk):
    room = Room.objects.get(id=pk)
    serializer = RoomParticipantSerializer(room)
    return Response(serializer.data)



@api_view(['POST'])
def create_room(request):
    serializer = RoomCreateSerializer(data=request.data)
    if serializer.is_valid():
        print(serializer)
        serializer.save()
    return Response(serializer.data)
@api_view(['POST'])
def create_message(request):
    serializer = MessageCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['POST'])
def create_topic(request):
    serializer = TopicSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['POST'])
def create_user(request):
    form = UserRegistrationForm(request.data)
    if form.is_valid():
        form.save()
    return Response(form.data)
@api_view(['POST'])
def create_profile(request):
    serializer = ProfileCreateSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)




@api_view(['POST'])
def update_room(request,pk):
    room=Room.objects.get(id=pk)
    serializer = RoomSerializer(instance=room,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['POST'])
def update_message(request,pk):
    msg=Message.objects.all(id=pk)
    serializer = MessageSerializer(instance=msg,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['POST'])
def update_topic(request,pk):
    topic=Topic.objects.get(id=pk)
    serializer = TopicSerializer(instance=topic,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['POST'])
def update_user(request,pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(instance=user,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(['DELETE'])
def delete_room(request,pk):
    room=Room.objects.get(id=pk)
    room.delete()
    return Response("Deleted Successfully..")
@api_view(['DELETE'])
def delete_message(request,pk):
    msg=Message.objects.get(id=pk)
    msg.delete()
    return Response("Deleted Successfully..")
@api_view(['DELETE'])
def delete_topic(request,pk):
    topic=Topic.objects.get(id=pk)
    topic.delete()
    return Response("Deleted Successfully..")
@api_view(['DELETE'])
def delete_user(request,pk):
    user = User.objects.get(id=pk)
    user.delete()
    return Response("Deleted Successfully..")
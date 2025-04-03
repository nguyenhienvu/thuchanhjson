from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
import json
import os
from django.conf import settings

# IMPORT FILE
from .utils import load_admin_data_JSON, load_player_data_JSON
from .serializers import LoginSerializer, PlayerCreateSerializer

# Create your views here.
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            
            admin_data = load_admin_data_JSON()

            for admin in admin_data:
                if admin['email'] == email and admin['password'] == password:
                    refresh = RefreshToken()
                    refresh['email'] = email
                    refresh['user'] = 'admin'

                    return Response({
                        'message': 'Đăng nhập thành công',
                        'success': True,
                        'refresh': str(refresh),
                        'access': str(refresh.access_token)
                    }, status=status.HTTP_200_OK)
            
            return Response({'message': 'Sai thông tin đăng nhập'}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response({
            'message': 'Thông tin đăng nhập không hợp lệ',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class PlayerCreateView(APIView):
    def post(self, request):
        serializer = PlayerCreateSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            balance = serializer.validated_data['balance']

            # Đọc dữ liệu từ player.json
            player_data = load_player_data_JSON()

            # Kiểm tra xem username đã tồn tại chưa
            for player in player_data:
                if player['username'] == username:
                    return Response(
                        {'message': 'Tên người dùng đã tồn tại'},
                        status=status.HTTP_400_BAD_REQUEST
                    )

            # Nếu username không tồn tại, thêm người chơi mới
            new_player = {
                'username': username,
                'password': password,
                'balance': float(balance)
            }
            player_data.append(new_player)

            # Ghi lại vào file player.json
            file_path = os.path.join(settings.BASE_DIR, 'data', 'player.json')
            try:
                with open(file_path, 'w') as f:
                    json.dump(player_data, f, indent=4)
                return Response({
                    'message': 'Tạo người dùng thành công',
                    'data': new_player
                }, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({
                    'message': 'Lỗi khi ghi file',
                    'error': str(e)
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({
            'message': 'Tạo người dùng không thành công',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
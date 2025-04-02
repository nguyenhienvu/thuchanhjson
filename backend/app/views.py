from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken


#IMPORT FILE
from .utils import load_admin_data_JSON
from .serializers import LoginSerializer

# Create your views here.S
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data) #Kiểm tra dữ liệu đăng nhập
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            
            admin_data = load_admin_data_JSON()

            for admin in admin_data:
                if admin['email'] == email and admin['password'] == password:
                    refresh = RefreshToken() #tạo token
                    refresh['email'] = email #thêm email vào token để có thể lấy email từ token

                    return Response({'message': 'Đăng nhập thành công', 'success': True ,'refresh': str(refresh), 'access': str(refresh.access_token)}, status=status.HTTP_200_OK)
            
            return Response({'message': 'Sai thông tin đăng nhập'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors,{'message': 'Thông tin đăng nhập không hợp lệ'}, status=status.HTTP_400_BAD_REQUEST)
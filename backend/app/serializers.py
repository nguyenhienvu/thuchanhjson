from rest_framework import serializers #cung cấp các công cụ để chuyển đổi dữ liệu

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=100)
    password = serializers.CharField(max_length=100)


class PlayerCreateSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100)
    balance = serializers.DecimalField(max_digits=10, decimal_places=2)
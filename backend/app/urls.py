from django.urls import path
from .views import LoginView
from .views import PlayerCreateView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('player-create/', PlayerCreateView.as_view(), name='player-create'),
]
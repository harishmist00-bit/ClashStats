from django.urls import path
from .views import player_detail


urlpatterns = [
    path(
        "player/<path:player_tag>/",
        player_detail,
        name="player-detail"
    ),
]
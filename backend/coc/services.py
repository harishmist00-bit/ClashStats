import requests
from django.conf import settings
from urllib.parse import quote


BASE_URL = "https://api.clashofclans.com/v1"


def get_player(player_tag):

    player_tag = player_tag.strip()

    if not player_tag.startswith("#"):
        player_tag = "#" + player_tag

    encoded_tag = quote(player_tag, safe="")

    url = f"{BASE_URL}/players/{encoded_tag}"

    headers = {
        "Authorization": f"Bearer {settings.CLASH_API_TOKEN}"
    }

    response = requests.get(
        url,
        headers=headers,
        timeout=10
    )

    return response
import requests

from django.http import JsonResponse
from .services import get_player


def player_detail(request, player_tag):

    if request.method != "GET":
        return JsonResponse(
            {
                "error": "Only GET requests are allowed"
            },
            status=405
        )

    try:

        response = get_player(player_tag)

        if response.status_code == 200:
            return JsonResponse(response.json())

        try:
            error_data = response.json()
        except Exception:
            error_data = {
                "reason": "Unknown API error"
            }

        return JsonResponse(
            {
                "error": "Clash of Clans API error",
                "details": error_data
            },
            status=response.status_code
        )

    except requests.exceptions.RequestException as error:

        return JsonResponse(
            {
                "error": "Unable to connect to Clash of Clans API",
                "details": str(error)
            },
            status=500
        )
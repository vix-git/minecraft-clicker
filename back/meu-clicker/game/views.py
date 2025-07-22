from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import GameState
from .serializers import GameStateSerializer

class GameStateView(APIView):
    def get(self, request):
        # Retorna o primeiro registro (como se fosse "o jogo")
        game_state, _ = GameState.objects.get_or_create(id=1)
        serializer = GameStateSerializer(game_state)
        return Response(serializer.data)

    def post(self, request):
        # Atualiza os dados
        game_state, _ = GameState.objects.get_or_create(id=1)
        serializer = GameStateSerializer(game_state, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

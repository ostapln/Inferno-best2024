from rest_framework import serializers

from apps.posts.models import Comments


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments



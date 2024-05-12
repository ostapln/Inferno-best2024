from django.contrib import admin

from apps.posts.models import Comments, Posts


@admin.register(Posts)
class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "user_id", "date_added")
    list_filter = ("id", "user_id", "title")
    search_fields = ("title", "user_id")
    
@admin.register(Comments)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("id", "user_id", "post_id", "comment_body")
    list_filter = ("id", "user_id", "post_id")
    search_fields = ("post_id", "user_id")

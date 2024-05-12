from apps.posts.models import Comments


class CommentRepository:
    @staticmethod
    def get_comments_by_user(user):
        return Comments.objects.filter(user=user)
    
    @staticmethod
    def get_all_comments():
        return Comments.objects.all()
    
    @staticmethod
    def get_comments_by_post(post):
        return Comments.objects.filter(post=post).select_related('user')
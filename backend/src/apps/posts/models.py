from django.core.validators import FileExtensionValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.accounts.models import User


class Posts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    title = models.CharField(_("title"), max_length=128, blank=False, null=False)
    body = models.TextField(_("body"), null=True, blank=True)
    region = models.CharField(_("region"), max_length=128, blank=True, null=True)
    detail_info = models.TextField(_("detail_info"), blank=True, null=True)
    creator_email = models.EmailField(_("creator_email"))
    creator_contact_information = models.CharField(
        _("creator_contact_information"), blank=True, null=False
    )
    photo = models.ImageField(
        upload_to="posts",
        blank=True,
        null=True,
        validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
    )

    date_added = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        db_table = "users_posts"
        verbose_name = _("post")
        verbose_name_plural = _("posts")

    def __str__(self) -> str:
        return f"user: {self.user}, post titile: {self.title}"


class Comments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name=_("user"))
    post = models.ForeignKey(Posts, on_delete=models.CASCADE, verbose_name=_("post"))

    comment_body = models.TextField(_("comment body"))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_("date added"))

    class Meta:
        db_table = "post_comments"
        verbose_name = _("comment")
        verbose_name_plural = _("comments")

    def __str__(self):
        return f"Comment by {self.user} on {self.post.title}"

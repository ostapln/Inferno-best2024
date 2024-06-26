from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from apps.accounts.api.views import auth_views, self_views

urlpatterns = [
    # Auth
    path("signup/", auth_views.UserRegistrationView.as_view(), name="sign-up"),
    path("login/", auth_views.UserLoginView.as_view(), name="log-in"),
    path(
        "change-password/",
        auth_views.ChangePasswordView.as_view(),
        name="change-password",
    ),
    path("delete-account/", auth_views.DeleteUserView.as_view(), name="delete-account"),
    # User info
    path("me/", self_views.SelfView.as_view(), name="me"),
    # JWT
    path("jwt/create/", auth_views.MyTokenObtainPairView.as_view(), name="jwt-create"),
    path("jwt/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("jwt/verify/", TokenVerifyView.as_view(), name="token-verify"),
]

router = DefaultRouter()

urlpatterns += router.urls

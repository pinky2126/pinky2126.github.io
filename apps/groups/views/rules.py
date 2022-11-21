from rest_framework import viewsets, generics, status, filters
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from core.views import BaseViewSet, BaseReadOnlyViewSet
from groups.models import GroupRule
from django.contrib.auth.models import User
from groups.serializers import GroupRuleSerializer


class GroupRulePagination(PageNumberPagination):
    page_size = 24


class GroupRuleViewSet(BaseViewSet):
    queryset = GroupRule.objects.all()
    serializer_class = GroupRuleSerializer
    permission_classes = [IsAuthenticated, ]

    def get_queryset(self):
        queryset = self.queryset
        if self.kwargs != {}:
            if 'group_pk' in self.kwargs:
                return self.queryset.filter(group__pk=self.kwargs['group_pk'])
        return queryset

    def create(self, request, group_pk=None):
        pass

    def update(self, request, group_pk=None, pk=None):
        pass

    def destroy(self, request, group_pk=None, pk=None):
        pass

    @action(detail=True)
    def change_rule_type(self, request, group_pk=None, pk=None):
        pass

from django.db import models

class GameState(models.Model):
    points = models.IntegerField(default=0)
    clicks = models.IntegerField(default=0)
    upgrade_level = models.IntegerField(default=1)

    def __str__(self):
        return f"Points: {self.points} | Clicks: {self.clicks} | Upgrade: {self.upgrade_level}"

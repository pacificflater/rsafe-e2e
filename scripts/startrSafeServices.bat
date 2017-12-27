net start apache
net start redis
schtasks /Run /TN Celery.default && schtasks /Run /TN CeleryBeat && schtasks /Run /TN Celery.subscription 
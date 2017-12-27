net stop apache 
net stop postgresql
schtasks /End /TN Celery.default && schtasks /End /TN CeleryBeat && schtasks /End /TN Celery.subscription 
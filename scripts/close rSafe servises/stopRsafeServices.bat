net stop apache
net stop redis
schtasks /End /TN Celery.default && schtasks /End /TN CeleryBeat && schtasks /End /TN Celery.subscription 
wscript closeCom.vbs
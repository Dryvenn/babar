### Customer:
- id
- firstname
- nickname (must be unique)
- lastname
- status (one of [Customer, VIP, Barman, Barchief])
- password (not to be sent, but to be received)
- money
- email
- history :
  	  - drink (concat of brand + type ?)
	  - time (since epoch, in millis)

### Drink:
- id
- brand (eg 'Hoegarden')
- type (eg 'Grand Cru')(field to be renamed ?)
- price

### User:
- id
- name (must be exactly similar to one nickname)
- history : => Sera recupere via un appel à l'API
  	  - amount
	  - customer (concat of first + nick + last ?)
	  - time (since epoch, in millis)
	  
	  
# Policy
- VIP now authorized only to a 50-euros deficit => Dangereux, a voir avec tout le monde d'abord


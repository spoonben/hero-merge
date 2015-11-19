Create Your Own Hero
===
An API for creating super heros.

## Getting an API Key
In order to develop against the API, you'll need a key. To obtain a key, hit `https://hero-merge.herokuapp.com/getApiKey`.

The returned key is yours! Then just hit `https://hero-merge.herokuapp.com/[your-api-key]` to get the initial data back.

## API
This API only has one endpoint, `heroes`. This will be your GET, you PATCH, and your PUT endpoint.

#### GET `/heroes`
Returns a list of all available heros

Example response:
```json
[
  {
    "id": 3,
    "hero_name": "Super Man",
    "real_name": "Clark Kent (Kal-El)",
    "gender": "Male",
    "attributes": {
      "intelligence": 100,
      "strength": 100,
      "speed": 100,
      "durability": 100,
      "power": 100,
      "combat": 65
    },
    "powers": [
      "Flight",
      "Super-strength",
      "Super Speed",
      "Super Hearing",
      "Super Smell",
      "Healing Factor",
      "Super Breath",
      "Heat Vision",
      "Super Vision"
    ],
    "weaknesses": [
      "Magic",
      "Kryptonite",
      "Lead",
      "Solar Energy"
    ]
  }
]
```

#### GET `/heroes/{id}`
Returns a single hero's information

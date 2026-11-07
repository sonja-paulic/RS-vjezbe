

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Evently API")

# Omogućujemo komunikaciju s frontendom
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Podaci o IT događajima
events = [
    {
        "id": 1,
        "title": "Web Development Workshop",
        "date": "15. studenoga 2026.",
        "location": "Zagreb",
        "description": "Nauči osnove modernog web razvoja kroz praktičnu radionicu."
    },
    {
        "id": 2,
        "title": "AI & Machine Learning",
        "date": "20. studenoga 2026.",
        "location": "Online",
        "description": "Upoznaj umjetnu inteligenciju i mogućnosti strojnog učenja."
    },
    {
        "id": 3,
        "title": "Cybersecurity Conference",
        "date": "28. studenoga 2026.",
        "location": "Split",
        "description": "Otkrij najnovije trendove u računalnoj sigurnosti."
    }
]


# Početna ruta
@app.get("/")
def home():
    return {"message": "Dobrodošli na Evently API!"}


# Provjera rada poslužitelja
@app.get("/health")
def health():
    return {"status": "OK"}


# Dohvaćanje svih događaja
@app.get("/events")
def get_events():
    return events


# Dohvaćanje pojedinog događaja
@app.get("/events/{event_id}")
def get_event(event_id: int):
    for event in events:
        if event["id"] == event_id:
            return event

    raise HTTPException(
        status_code=404,
        detail="Događaj nije pronađen."
    )

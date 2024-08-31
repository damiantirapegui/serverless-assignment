exports.getOrder = async (event) => {
  const events = {
    events: [
      {
        id: 1,
        artist: "Lasse-Stefans",
        date: "21 MAR",
        arena: "Kjell Härnqvistsalen",
        time: "19.00 - 21.00",
        price: "350 sek",
      },
      {
        id: 2,
        artist: "Pelle trubadur",
        date: "29 MAR",
        arena: "Pubelipub",
        time: "22.00 - 00.00",
        price: "110 sek",
      },
      {
        id: 3,
        artist: "Kajsas kör",
        date: "10 APR",
        arena: "Götaplatsen",
        time: "15.00 - 16.00",
        price: "99 sek",
      },
      {
        id: 4,
        artist: "Klubb Untz",
        date: "17 APR",
        arena: "Din favoritkällare",
        time: "22.00 - du tröttnar",
        price: "150 sek",
      },
    ],
  };

  const randomTicketNumber = Math.random().toString(16).slice(2);

  const { id } = event.pathParameters;
  const eventDetail = events.events.find((e) => e.id === parseInt(id));

  if (eventDetail) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        ticketNumber: randomTicketNumber,
        event: eventDetail,
      }),
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Could not find id" }),
    };
  }
};

export const MOCK_FIXTURES = [
    {
        fixture: {
            id: 867946,
            date: "2026-02-08T16:30:00+00:00",
            venue: { name: "Anfield", city: "Liverpool" },
            status: { long: "Not Started", short: "NS" }
        },
        league: {
            id: 39,
            name: "Premier League",
            country: "England",
            logo: "https://media.api-sports.io/football/leagues/39.png",
            round: "Regular Season - 23"
        },
        teams: {
            home: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" },
            away: { id: 33, name: "Manchester United", logo: "https://media.api-sports.io/football/teams/33.png" }
        },
        predictions: {
            winner: { id: 40, name: "Liverpool", comment: "Liverpool are in excellent form at home." },
            win_or_draw: true,
            percent: { home: "55%", draw: "25%", away: "20%" },
            advice: "Double Chance: Liverpool or Draw"
        },
        lineups: [
            {
                team: { id: 40, name: "Liverpool" },
                formation: "4-3-3",
                startXI: [
                    { player: { id: 625, name: "Alisson", number: 1, pos: "G" } },
                    { player: { id: 290, name: "T. Alexander-Arnold", number: 66, pos: "D" } },
                    { player: { id: 293, name: "I. Konaté", number: 5, pos: "D" } },
                    { player: { id: 289, name: "V. van Dijk", number: 4, pos: "D" } },
                    { player: { id: 296, name: "A. Robertson", number: 26, pos: "D" } },
                    { player: { id: 302, name: "D. Szoboszlai", number: 8, pos: "M" } },
                    { player: { id: 304, name: "A. Mac Allister", number: 10, pos: "M" } },
                    { player: { id: 400, name: "C. Jones", number: 17, pos: "M" } },
                    { player: { id: 306, name: "M. Salah", number: 11, pos: "F" } },
                    { player: { id: 308, name: "D. Núñez", number: 9, pos: "F" } },
                    { player: { id: 309, name: "L. Díaz", number: 7, pos: "F" } }
                ]
            },
            {
                team: { id: 33, name: "Manchester United" },
                formation: "4-2-3-1",
                startXI: [
                    { player: { id: 882, name: "A. Onana", number: 24, pos: "G" } },
                    { player: { id: 885, name: "Diogo Dalot", number: 20, pos: "D" } },
                    { player: { id: 886, name: "M. de Ligt", number: 4, pos: "D" } },
                    { player: { id: 888, name: "L. Martínez", number: 6, pos: "D" } },
                    { player: { id: 889, name: "L. Shaw", number: 23, pos: "D" } },
                    { player: { id: 900, name: "K. Mainoo", number: 37, pos: "M" } },
                    { player: { id: 901, name: "Casemiro", number: 18, pos: "M" } },
                    { player: { id: 902, name: "A. Diallo", number: 16, pos: "M" } },
                    { player: { id: 18, name: "B. Fernandes", number: 8, pos: "M" } },
                    { player: { id: 904, name: "M. Rashford", number: 10, pos: "M" } },
                    { player: { id: 905, name: "R. Højlund", number: 11, pos: "F" } }
                ]
            }
        ]
    },
    {
        fixture: {
            id: 867947,
            date: "2026-02-08T19:00:00+00:00",
            venue: { name: "Etihad Stadium", city: "Manchester" },
            status: { long: "Not Started", short: "NS" }
        },
        league: {
            id: 39,
            name: "Premier League",
            country: "England",
            logo: "https://media.api-sports.io/football/leagues/39.png",
            round: "Regular Season - 23"
        },
        teams: {
            home: { id: 50, name: "Manchester City", logo: "https://media.api-sports.io/football/teams/50.png" },
            away: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }
        },
        predictions: {
            winner: { id: 50, name: "Manchester City", comment: "City expected to dominate midfield." },
            win_or_draw: true,
            percent: { home: "60%", draw: "25%", away: "15%" },
            advice: "Winner: Manchester City"
        },
        lineups: [
            {
                team: { id: 50, name: "Manchester City" },
                formation: "4-1-4-1",
                startXI: [
                    { player: { id: 1, name: "Ederson", number: 31, pos: "G" } },
                    { player: { id: 2, name: "K. Walker", number: 2, pos: "D" } },
                    { player: { id: 3, name: "R. Dias", number: 3, pos: "D" } },
                    { player: { id: 4, name: "M. Akanji", number: 25, pos: "D" } },
                    { player: { id: 5, name: "J. Gvardiol", number: 24, pos: "D" } },
                    { player: { id: 6, name: "Rodri", number: 16, pos: "M" } },
                    { player: { id: 7, name: "Bernardo Silva", number: 20, pos: "M" } },
                    { player: { id: 8, name: "K. De Bruyne", number: 17, pos: "M" } },
                    { player: { id: 9, name: "P. Foden", number: 47, pos: "M" } },
                    { player: { id: 10, name: "J. Doku", number: 11, pos: "M" } },
                    { player: { id: 11, name: "E. Haaland", number: 9, pos: "F" } }
                ]
            },
            {
                team: { id: 42, name: "Arsenal" },
                formation: "4-3-3",
                startXI: [
                    { player: { id: 20, name: "D. Raya", number: 22, pos: "G" } },
                    { player: { id: 21, name: "B. White", number: 4, pos: "D" } },
                    { player: { id: 22, name: "W. Saliba", number: 2, pos: "D" } },
                    { player: { id: 23, name: "Gabriel", number: 6, pos: "D" } },
                    { player: { id: 24, name: "J. Timber", number: 12, pos: "D" } },
                    { player: { id: 25, name: "D. Rice", number: 41, pos: "M" } },
                    { player: { id: 26, name: "M. Ødegaard", number: 8, pos: "M" } },
                    { player: { id: 27, name: "M. Merino", number: 23, pos: "M" } },
                    { player: { id: 28, name: "B. Saka", number: 7, pos: "F" } },
                    { player: { id: 29, name: "K. Havertz", number: 29, pos: "F" } },
                    { player: { id: 30, name: "G. Martinelli", number: 11, pos: "F" } }
                ]
            }
        ]
    }
];

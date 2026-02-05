workspace "Premier League Predictor" "Architecture for the Premier League Match Prediction Application" {

    model {
        user = person "Football Fan" "A user who wants to see match predictions and lineups."

        softwareSystem = softwareSystem "Premier League Predictor" "AI-Powered Match Prediction Dashboard" {
            singlePageApp = container "Single-Page Application" "React + Vite Web Application" "React, JavaScript" {
                matchList = component "Match List Component" "Displays grid of upcoming matches" "React Component"
                matchDetail = component "Match Detail Component" "Displays detailed predictions and lineups" "React Component"
                apiClient = component "API Client Service" "Handles data fetching and mock data fallback" "JavaScript Module"
            }
        }

        apiFootball = softwareSystem "API-Football" "External provider for fixtures, predictions, and lineups." "External System"

        # Relationships
        user -> softwareSystem "Uses"
        user -> singlePageApp "Views matches and predictions using"
        
        singlePageApp -> apiFootball "Fetches live match data from" "HTTPS/JSON"
        
        matchList -> apiClient "Requests fixtures via"
        matchDetail -> apiClient "Requests detailed match info via"
        apiClient -> apiFootball "Makes API calls to" "HTTPS"
    }

    views {
        systemContext softwareSystem "SystemContext" {
            include *
            autoLayout
        }

        container softwareSystem "ContainerView" {
            include *
            autoLayout
        }

        component singlePageApp "ComponentView" {
            include *
            autoLayout
        }

        styles {
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Person" {
                shape Person
                background #08427b
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
            element "Component" {
                background #85bbf0
                color #000000
                shape Component
            }
            element "External System" {
                background #999999
                color #ffffff
            }
        }
    }
    
    configuration {
        scope softwaresystem
    }
}

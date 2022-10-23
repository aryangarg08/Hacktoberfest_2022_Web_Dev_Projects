
    for each in response['state_wise']:
        if int(response['state_wise'][each]['active']) !=0:
            for city in response['state_wise'][each]['district']:
                if city.lower() == city_name.lower():
                    return (city,response['state_wise'][each]['district'][city]['recovered']
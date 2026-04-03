def main():
    output(input("What do you want? ").lower())


campaign_metrics = {"sent": 1000, "opened": 800, "clicked": 200}


def unopened(campaign_metrics):
    return campaign_metrics["sent"] - campaign_metrics["opened"]


campaign_metrics["unopened"] = unopened(campaign_metrics)


def calculate_campaign_metrics(sent, opened, clicked, unopened):
    open_rate = opened / sent
    click_rate = clicked / sent
    conversion_rate = clicked / opened
    unopened_rate = unopened
    return {
        "open_rate": open_rate,
        "click_rate": click_rate,
        "conversion_rate": conversion_rate,
        "unopened_rate": unopened_rate,
    }


def output(request):
    result = calculate_campaign_metrics(
        campaign_metrics["sent"],
        campaign_metrics["opened"],
        campaign_metrics["clicked"],
        campaign_metrics["unopened"],
    )
    if request == "open":
        print(result["open_rate"])
    elif request == "click":
        print(result["click_rate"])
    elif request == "conversion":
        print(result["conversion_rate"])
    elif request == "unopened":
        print(result["unopened_rate"])
    else:
        print(result)


if __name__ == "__main__":
    main()

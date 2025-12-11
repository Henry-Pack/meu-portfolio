import timelineData from "../data/timeline-data.json" with { type: "json" };

export function getTimeline(req, res) {
    res.json(timelineData);
}